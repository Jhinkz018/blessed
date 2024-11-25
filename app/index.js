const fs = require('fs');
const axios = require("axios");
const displayBanner = require("../config/helper.js");
const colors = require("../config/colors.js");
const logger = require("../config/logger.js");
const Utils = {
  'sleep': _0x557fa2 => new Promise(_0x5a6414 => setTimeout(_0x5a6414, _0x557fa2)),
  'getTimestamp': () => new Date().toISOString(),
  'truncateString': (_0x5b6bc5, _0x1d30c4) => _0x5b6bc5 ? _0x5b6bc5.substr(0x0, _0x1d30c4) + "..." : 'unknown',
  'parseJwt': _0x4b6a60 => {
    try {
      const _0x184a40 = _0x4b6a60.split('.')[0x1];
      const _0x3277a0 = Buffer.from(_0x184a40, 'base64').toString("utf8");
      return JSON.parse(_0x3277a0);
    } catch (_0x55ecd9) {
      return null;
    }
  },
  'formatDate': _0x4b6b68 => {
    const _0x1ab920 = new Date(_0x4b6b68 * 0x3e8);
    return _0x1ab920.toLocaleString("en-US", {
      'year': "numeric",
      'month': '2-digit',
      'day': '2-digit',
      'hour': "2-digit",
      'minute': "2-digit",
      'hour12': false
    });
  }
};
class ApiClient {
  constructor(_0x20747c) {
    this.client = axios.create({
      'baseURL': _0x20747c,
      'timeout': 0x7530
    });
    this.client.interceptors.request.use(_0x46dd83 => {
      if (_0x46dd83.headers.Authorization) {
        const _0x5791ed = _0x46dd83.headers.Authorization.split(" ")[0x1];
        if (_0x5791ed) {
          const _0x3bb904 = Utils.parseJwt(_0x5791ed);
          if (_0x3bb904) {}
        }
      }
      return _0x46dd83;
    }, _0x2d7cd3 => Promise.reject(_0x2d7cd3));
    this.client.interceptors.response.use(_0x35d7c4 => _0x35d7c4, async _0x32d3e6 => {
      if (_0x32d3e6.response) {
        const {
          status: _0x26e732,
          data: _0x29f238
        } = _0x32d3e6.response;
        throw new Error("API Error: " + _0x26e732 + " - " + JSON.stringify(_0x29f238));
      }
      throw _0x32d3e6;
    });
  }
  async ["healthCheck"]() {
    try {
      const _0x31f62a = await this.makeRequest('get', "/health");
      return _0x31f62a.status === 'ok';
    } catch (_0x5bb22a) {
      logger.error(colors.error + "Health check failed: " + _0x5bb22a.message + colors.reset);
      return false;
    }
  }
  async ["makeRequest"](_0x4f780f, _0x41e829, _0x288f0f = null, _0x6109ca = {}, _0x9a14a = 0x0) {
    try {
      const _0x2a0bbd = await this.client({
        'method': _0x4f780f,
        'url': _0x41e829,
        'data': _0x288f0f,
        'headers': _0x6109ca
      });
      return _0x2a0bbd.data;
    } catch (_0x4786c5) {
      if (_0x9a14a < 0x3) {
        logger.warn(colors.warning + "Request failed, retrying (" + (_0x9a14a + 0x1) + '/' + 0x3 + ')...' + colors.reset);
        await Utils.sleep(0x1388);
        return this.makeRequest(_0x4f780f, _0x41e829, _0x288f0f, _0x6109ca, _0x9a14a + 0x1);
      }
      throw _0x4786c5;
    }
  }
}
class AccountManager {
  constructor() {
    this.accounts = [];
  }
  ["loadAccounts"]() {
    try {
      const _0x7bf9f4 = fs.readFileSync("data.txt", "utf8");
      const _0x2a4a0a = _0x7bf9f4.split("\n").map(_0x43a833 => _0x43a833.trim()).join('');
      this.accounts = [_0x2a4a0a];
      logger.success(colors.success + "Loaded " + this.accounts.length + " accounts" + colors.reset);
      return true;
    } catch (_0x3e01c2) {
      logger.error(colors.error + "Error loading accounts: " + _0x3e01c2.message + colors.reset);
      return false;
    }
  }
  ['getAccounts']() {
    return this.accounts;
  }
}
class NodeManager {
  constructor(_0x1a6686) {
    this.apiClient = _0x1a6686;
  }
  async ["getNodes"](_0x152806) {
    try {
      return await this.apiClient.makeRequest("get", "/api/v1/nodes", null, {
        'Authorization': "Bearer " + _0x152806,
        'Accept': "application/json"
      });
    } catch (_0x38c5a0) {
      logger.error(colors.error + "Failed to get nodes: " + _0x38c5a0.message + colors.reset);
      return [];
    }
  }
  async ["pingNode"](_0x527310, _0x183b36) {
    try {
      const _0x42a816 = await this.apiClient.makeRequest('post', "/api/v1/nodes/" + _0x183b36 + "/ping", {}, {
        'Authorization': "Bearer " + _0x527310,
        'Accept': 'application/json'
      });
      return _0x42a816.status === 'ok';
    } catch (_0x41612) {
      logger.error(colors.error + "Failed to ping node: " + _0x41612.message + colors.reset);
      return false;
    }
  }
}
class PingAutomation {
  constructor() {
    this.apiClient = new ApiClient("https://gateway-run.bls.dev");
    this.accountManager = new AccountManager();
    this.nodeManager = new NodeManager(this.apiClient);
    this.isRunning = false;
  }
  async ["performHealthCheck"]() {
    logger.info(colors.info + "Performing health check..." + colors.reset);
    const _0x593f09 = await this.apiClient.healthCheck();
    if (!_0x593f09) {
      logger.error(colors.error + "Service is not healthy, skipping ping cycle" + colors.reset);
      return false;
    }
    logger.success(colors.success + "Health check passed" + colors.reset);
    return true;
  }
  async ["processAccount"](_0x12bf4a) {
    const _0x1d3d64 = Utils.parseJwt(_0x12bf4a);
    const _0x373624 = await this.nodeManager.getNodes(_0x12bf4a);
    const _0xe2634b = _0x12bf4a ? _0x12bf4a.substr(0x0, 0xa) + "..." : 'unknown';
    const _0x370552 = _0x1d3d64 ? Utils.formatDate(_0x1d3d64.iat) : "unknown";
    const _0x3ada03 = _0x1d3d64 ? Utils.formatDate(_0x1d3d64.exp) : 'unknown';
    for (const _0x2d5111 of _0x373624) {
      const _0x2e396d = _0x2d5111.pubKey;
      const _0x561daf = _0x2e396d ? _0x2e396d.substr(0x0, 0xa) + "..." : 'unknown';
      const _0x1405bb = await this.nodeManager.pingNode(_0x12bf4a, _0x2e396d);
      const _0x127be5 = colors.accountInfo + "Account: " + _0xe2634b + colors.reset + " " + colors.accountName + "[UserID: " + (_0x1d3d64?.['userId'] || "unknown") + colors.reset + " " + colors.info + "| Issued: " + _0x370552 + " | Expires: " + _0x3ada03 + ']' + colors.reset + " " + colors.custom + "Node: " + _0x561daf + colors.reset + " Ping: " + (_0x1405bb ? colors.success + 'Success' : colors.error + "Failed") + colors.reset;
      if (_0x1405bb) {
        logger.success(_0x127be5);
      } else {
        logger.error(_0x127be5);
      }
    }
  }
  async ["start"](_0x2903d6 = 0x1) {
    if (this.isRunning) {
      logger.warn(colors.warning + "Automation is already running" + colors.reset);
      return;
    }
    if (!this.accountManager.loadAccounts()) {
      logger.error(colors.error + "Failed to load accounts, stopping automation" + colors.reset);
      return;
    }
    this.isRunning = true;
    logger.info(colors.info + "Starting ping automation with " + colors.brightCyan + _0x2903d6 + colors.info + " minute interval" + colors.reset);
    while (this.isRunning) {
      const _0x118ff4 = await this.performHealthCheck();
      if (!_0x118ff4) {
        await Utils.sleep(0x2710);
        continue;
      }
      const _0x27bb7a = this.accountManager.getAccounts();
      for (const _0x5ba87f of _0x27bb7a) {
        await this.processAccount(_0x5ba87f)['catch'](_0x5b6e18 => {
          logger.error(colors.error + "Error processing account: " + _0x5b6e18.message + colors.reset);
        });
      }
      await Utils.sleep(_0x2903d6 * 0x3c * 0x3e8);
    }
  }
  ["stop"]() {
    this.isRunning = false;
    logger.warn(colors.warning + "Stopping ping automation" + colors.reset);
  }
}
async function main() {
  displayBanner();
  const _0x30fd39 = new PingAutomation();
  process.on("SIGINT", () => {
    _0x30fd39.stop();
    process.exit(0x0);
  });
  process.on('uncaughtException', _0x34c083 => {
    logger.error(colors.error + "Uncaught Exception: " + _0x34c083.message + colors.reset);
    _0x30fd39.stop();
    process.exit(0x1);
  });
  process.on("unhandledRejection", (_0x1b9238, _0xc74c2d) => {
    logger.error(colors.error + "Unhandled Rejection at: " + _0xc74c2d + ", reason: " + _0x1b9238 + colors.reset);
    _0x30fd39.stop();
    process.exit(0x1);
  });
  await _0x30fd39.start();
}
main()["catch"](_0x1282bb => {
  logger.error(colors.error + "Fatal error: " + _0x1282bb.message + colors.reset);
  process.exit(0x1);
});
