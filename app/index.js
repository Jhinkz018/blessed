const _0x309eda=_0x2f02;(function(_0x3be16a,_0x3f5b0a){const _0x197e28=_0x2f02,_0x49ac18=_0x3be16a();while(!![]){try{const _0x44f4a2=parseInt(_0x197e28(0x1fb))/0x1+parseInt(_0x197e28(0x206))/0x2*(-parseInt(_0x197e28(0x207))/0x3)+-parseInt(_0x197e28(0x212))/0x4+parseInt(_0x197e28(0x1e4))/0x5*(-parseInt(_0x197e28(0x1d0))/0x6)+parseInt(_0x197e28(0x215))/0x7+parseInt(_0x197e28(0x204))/0x8+-parseInt(_0x197e28(0x1da))/0x9*(-parseInt(_0x197e28(0x1f7))/0xa);if(_0x44f4a2===_0x3f5b0a)break;else _0x49ac18['push'](_0x49ac18['shift']());}catch(_0x398fcf){_0x49ac18['push'](_0x49ac18['shift']());}}}(_0x560f,0x56d5c));const fs=require('fs'),axios=require(_0x309eda(0x210)),displayBanner=require(_0x309eda(0x1bc)),colors=require('../config/colors.js'),logger=require('../config/logger.js'),Utils={'sleep':_0x1e791f=>new Promise(_0x3f8784=>setTimeout(_0x3f8784,_0x1e791f)),'getTimestamp':()=>new Date()[_0x309eda(0x1e1)](),'truncateString':(_0x32a203,_0x81ac0)=>_0x32a203?_0x32a203['substr'](0x0,_0x81ac0)+_0x309eda(0x1fa):_0x309eda(0x1c6),'parseJwt':_0x4c29db=>{const _0x514009=_0x309eda;try{const _0x4e7498=_0x4c29db[_0x514009(0x1c8)]('.')[0x1],_0x38607d=Buffer[_0x514009(0x1df)](_0x4e7498,'base64')[_0x514009(0x20a)]('utf8');return JSON[_0x514009(0x21b)](_0x38607d);}catch(_0x126f87){return null;}},'formatDate':_0x11a658=>{const _0x344c38=_0x309eda,_0x1d568e=new Date(_0x11a658*0x3e8);return _0x1d568e[_0x344c38(0x1fd)]('en-US',{'year':_0x344c38(0x1d2),'month':_0x344c38(0x1c2),'day':_0x344c38(0x1c2),'hour':_0x344c38(0x1c2),'minute':'2-digit','hour12':![]});}};class ApiClient{constructor(_0x13fb0b){const _0xbb0ea1=_0x309eda;this[_0xbb0ea1(0x1ce)]=axios[_0xbb0ea1(0x1f4)]({'baseURL':_0x13fb0b,'timeout':0x7530}),this[_0xbb0ea1(0x1ce)][_0xbb0ea1(0x222)][_0xbb0ea1(0x1f6)]['use'](_0x5207cb=>{const _0x45bcd8=_0xbb0ea1;if(_0x5207cb[_0x45bcd8(0x1dd)][_0x45bcd8(0x21a)]){const _0x5263be=_0x5207cb[_0x45bcd8(0x1dd)][_0x45bcd8(0x21a)][_0x45bcd8(0x1c8)]('\x20')[0x1];if(_0x5263be){const _0x3d4603=Utils[_0x45bcd8(0x218)](_0x5263be);if(_0x3d4603){}}}return _0x5207cb;},_0x37dd2a=>Promise['reject'](_0x37dd2a)),this['client']['interceptors'][_0xbb0ea1(0x1cb)][_0xbb0ea1(0x1f0)](_0x26d683=>_0x26d683,async _0x23d88c=>{const _0x213927=_0xbb0ea1;if(_0x23d88c[_0x213927(0x1cb)]){const {status:_0x95f60f,data:_0x2e49da}=_0x23d88c[_0x213927(0x1cb)];throw new Error(_0x213927(0x1c3)+_0x95f60f+'\x20-\x20'+JSON[_0x213927(0x1ea)](_0x2e49da));}throw _0x23d88c;});}async[_0x309eda(0x1e7)](){const _0xe90331=_0x309eda;try{const _0x5e1e9d=await this[_0xe90331(0x1ed)](_0xe90331(0x1c4),_0xe90331(0x1cd));return _0x5e1e9d[_0xe90331(0x211)]==='ok';}catch(_0x334bc9){return logger['error'](colors[_0xe90331(0x1e2)]+_0xe90331(0x1ec)+_0x334bc9['message']+colors['reset']),![];}}async[_0x309eda(0x1ed)](_0x5c339d,_0x2ba278,_0x23659f=null,_0x38412c={},_0x3f738f=0x0){const _0x359216=_0x309eda;try{const _0x555c9a=await this['client']({'method':_0x5c339d,'url':_0x2ba278,'data':_0x23659f,'headers':_0x38412c});return _0x555c9a[_0x359216(0x20b)];}catch(_0x79bccc){if(_0x3f738f<0x3)return logger[_0x359216(0x21f)](colors[_0x359216(0x219)]+_0x359216(0x1f1)+(_0x3f738f+0x1)+'/'+0x3+_0x359216(0x1e5)+colors[_0x359216(0x1f9)]),await Utils[_0x359216(0x1f8)](0x1388),this[_0x359216(0x1ed)](_0x5c339d,_0x2ba278,_0x23659f,_0x38412c,_0x3f738f+0x1);throw _0x79bccc;}}}function _0x560f(){const _0xb744d3=['sleep','reset','...','200069yjVdCV','Failed\x20to\x20load\x20accounts,\x20stopping\x20automation','toLocaleString','apiClient','\x20Ping:\x20','getNodes','pubKey','iat','/api/v1/nodes/','2858880Sxdnpq','exit','23190OjxOTH','93xYFgzV','Error\x20loading\x20accounts:\x20','Bearer\x20','toString','data','message','[UserID:\x20','trim','Performing\x20health\x20check...','axios','status','1069476rUnGGK','Error\x20processing\x20account:\x20','Failed\x20to\x20ping\x20node:\x20','58037UUERwl','data.txt','Failed','parseJwt','warning','Authorization','parse','accounts','join','post','warn','success','Service\x20is\x20not\x20healthy,\x20skipping\x20ping\x20cycle','interceptors','stop','\x20minute\x20interval','accountManager','pingNode','brightCyan','../config/helper.js','/api/v1/nodes','start','application/json','Unhandled\x20Rejection\x20at:\x20','Loaded\x20','2-digit','API\x20Error:\x20','get','Node:\x20','unknown','exp','split','accountInfo','nodeManager','response','formatDate','/health','client','isRunning','6ZzMDpy','Success','numeric','catch','info','https://gateway-run.bls.dev','accountName','Account:\x20','SIGINT','\x20accounts','18DqfVVm','Stopping\x20ping\x20automation','getAccounts','headers','unhandledRejection','from','readFileSync','toISOString','error','userId','2630610WpTPsI',')...','map','healthCheck','length','Starting\x20ping\x20automation\x20with\x20','stringify','processAccount','Health\x20check\x20failed:\x20','makeRequest','loadAccounts','custom','use','Request\x20failed,\x20retrying\x20(','|\x20Issued:\x20','Failed\x20to\x20get\x20nodes:\x20','create','substr','request','4714460KNANeN'];_0x560f=function(){return _0xb744d3;};return _0x560f();}class AccountManager{constructor(){const _0x375511=_0x309eda;this[_0x375511(0x21c)]=[];}[_0x309eda(0x1ee)](){const _0x345b63=_0x309eda;try{const _0xd07113=fs[_0x345b63(0x1e0)](_0x345b63(0x216),'utf8'),_0x141c81=_0xd07113[_0x345b63(0x1c8)]('\x0a')[_0x345b63(0x1e6)](_0xa8dfef=>_0xa8dfef[_0x345b63(0x20e)]())[_0x345b63(0x21d)]('');return this['accounts']=[_0x141c81],logger[_0x345b63(0x220)](colors['success']+_0x345b63(0x1c1)+this[_0x345b63(0x21c)][_0x345b63(0x1e8)]+_0x345b63(0x1d9)+colors['reset']),!![];}catch(_0x32e884){return logger['error'](colors['error']+_0x345b63(0x208)+_0x32e884[_0x345b63(0x20c)]+colors[_0x345b63(0x1f9)]),![];}}['getAccounts'](){const _0x1ffa55=_0x309eda;return this[_0x1ffa55(0x21c)];}}function _0x2f02(_0x2fcde1,_0x56a226){const _0x560fcf=_0x560f();return _0x2f02=function(_0x2f02d9,_0x42c9a5){_0x2f02d9=_0x2f02d9-0x1bb;let _0xd6a662=_0x560fcf[_0x2f02d9];return _0xd6a662;},_0x2f02(_0x2fcde1,_0x56a226);}class NodeManager{constructor(_0x2f2f99){const _0x5180a0=_0x309eda;this[_0x5180a0(0x1fe)]=_0x2f2f99;}async[_0x309eda(0x200)](_0x113fc7){const _0x21c46b=_0x309eda;try{return await this[_0x21c46b(0x1fe)]['makeRequest'](_0x21c46b(0x1c4),_0x21c46b(0x1bd),null,{'Authorization':_0x21c46b(0x209)+_0x113fc7,'Accept':_0x21c46b(0x1bf)});}catch(_0x59d608){return logger[_0x21c46b(0x1e2)](colors[_0x21c46b(0x1e2)]+_0x21c46b(0x1f3)+_0x59d608[_0x21c46b(0x20c)]+colors[_0x21c46b(0x1f9)]),[];}}async[_0x309eda(0x226)](_0x10989e,_0x2bea7c){const _0x519193=_0x309eda;try{const _0x55d5c1=await this[_0x519193(0x1fe)][_0x519193(0x1ed)](_0x519193(0x21e),_0x519193(0x203)+_0x2bea7c+'/ping',{},{'Authorization':_0x519193(0x209)+_0x10989e,'Accept':_0x519193(0x1bf)});return _0x55d5c1[_0x519193(0x211)]==='ok';}catch(_0x12e3c2){return logger[_0x519193(0x1e2)](colors[_0x519193(0x1e2)]+_0x519193(0x214)+_0x12e3c2[_0x519193(0x20c)]+colors[_0x519193(0x1f9)]),![];}}}class PingAutomation{constructor(){const _0x275d17=_0x309eda;this[_0x275d17(0x1fe)]=new ApiClient(_0x275d17(0x1d5)),this[_0x275d17(0x225)]=new AccountManager(),this[_0x275d17(0x1ca)]=new NodeManager(this['apiClient']),this['isRunning']=![];}async['performHealthCheck'](){const _0x4316a0=_0x309eda;logger[_0x4316a0(0x1d4)](colors[_0x4316a0(0x1d4)]+_0x4316a0(0x20f)+colors[_0x4316a0(0x1f9)]);const _0xa6b013=await this[_0x4316a0(0x1fe)][_0x4316a0(0x1e7)]();if(!_0xa6b013)return logger['error'](colors[_0x4316a0(0x1e2)]+_0x4316a0(0x221)+colors[_0x4316a0(0x1f9)]),![];return logger[_0x4316a0(0x220)](colors[_0x4316a0(0x220)]+'Health\x20check\x20passed'+colors[_0x4316a0(0x1f9)]),!![];}async[_0x309eda(0x1eb)](_0x11b8b8){const _0x1e37d7=_0x309eda,_0x32fb29=Utils['parseJwt'](_0x11b8b8),_0x2d75b0=await this['nodeManager'][_0x1e37d7(0x200)](_0x11b8b8),_0x24ff69=_0x11b8b8?_0x11b8b8[_0x1e37d7(0x1f5)](0x0,0xa)+'...':_0x1e37d7(0x1c6),_0x2d12db=_0x32fb29?Utils['formatDate'](_0x32fb29[_0x1e37d7(0x202)]):_0x1e37d7(0x1c6),_0x495b25=_0x32fb29?Utils[_0x1e37d7(0x1cc)](_0x32fb29[_0x1e37d7(0x1c7)]):_0x1e37d7(0x1c6);for(const _0x80a665 of _0x2d75b0){const _0x546ad1=_0x80a665[_0x1e37d7(0x201)],_0x5482f3=_0x546ad1?_0x546ad1[_0x1e37d7(0x1f5)](0x0,0xa)+_0x1e37d7(0x1fa):'unknown',_0x46b5d3=await this[_0x1e37d7(0x1ca)][_0x1e37d7(0x226)](_0x11b8b8,_0x546ad1),_0x311c89=colors[_0x1e37d7(0x1c9)]+_0x1e37d7(0x1d7)+_0x24ff69+colors[_0x1e37d7(0x1f9)]+'\x20'+colors[_0x1e37d7(0x1d6)]+_0x1e37d7(0x20d)+(_0x32fb29?.[_0x1e37d7(0x1e3)]||_0x1e37d7(0x1c6))+colors[_0x1e37d7(0x1f9)]+'\x20'+colors['info']+_0x1e37d7(0x1f2)+_0x2d12db+'\x20|\x20Expires:\x20'+_0x495b25+']'+colors[_0x1e37d7(0x1f9)]+'\x20'+colors[_0x1e37d7(0x1ef)]+_0x1e37d7(0x1c5)+_0x5482f3+colors['reset']+_0x1e37d7(0x1ff)+(_0x46b5d3?colors[_0x1e37d7(0x220)]+_0x1e37d7(0x1d1):colors[_0x1e37d7(0x1e2)]+_0x1e37d7(0x217))+colors['reset'];_0x46b5d3?logger['success'](_0x311c89):logger[_0x1e37d7(0x1e2)](_0x311c89);}}async['start'](_0x5ec734=0x1){const _0x45fd6e=_0x309eda;if(this[_0x45fd6e(0x1cf)]){logger['warn'](colors[_0x45fd6e(0x219)]+'Automation\x20is\x20already\x20running'+colors[_0x45fd6e(0x1f9)]);return;}if(!this[_0x45fd6e(0x225)][_0x45fd6e(0x1ee)]()){logger['error'](colors[_0x45fd6e(0x1e2)]+_0x45fd6e(0x1fc)+colors['reset']);return;}this[_0x45fd6e(0x1cf)]=!![],logger[_0x45fd6e(0x1d4)](colors[_0x45fd6e(0x1d4)]+_0x45fd6e(0x1e9)+colors[_0x45fd6e(0x1bb)]+_0x5ec734+colors[_0x45fd6e(0x1d4)]+_0x45fd6e(0x224)+colors[_0x45fd6e(0x1f9)]);while(this[_0x45fd6e(0x1cf)]){const _0x51323f=await this['performHealthCheck']();if(!_0x51323f){await Utils[_0x45fd6e(0x1f8)](0x2710);continue;}const _0x2d919f=this[_0x45fd6e(0x225)][_0x45fd6e(0x1dc)]();for(const _0x2fefa5 of _0x2d919f){await this[_0x45fd6e(0x1eb)](_0x2fefa5)[_0x45fd6e(0x1d3)](_0x34296a=>{const _0x4714d0=_0x45fd6e;logger['error'](colors[_0x4714d0(0x1e2)]+_0x4714d0(0x213)+_0x34296a[_0x4714d0(0x20c)]+colors[_0x4714d0(0x1f9)]);});}await Utils[_0x45fd6e(0x1f8)](_0x5ec734*0x3c*0x3e8);}}[_0x309eda(0x223)](){const _0x2a677a=_0x309eda;this[_0x2a677a(0x1cf)]=![],logger['warn'](colors[_0x2a677a(0x219)]+_0x2a677a(0x1db)+colors[_0x2a677a(0x1f9)]);}}async function main(){const _0x36177f=_0x309eda;displayBanner();const _0x47304f=new PingAutomation();process['on'](_0x36177f(0x1d8),()=>{const _0x552eb1=_0x36177f;_0x47304f[_0x552eb1(0x223)](),process[_0x552eb1(0x205)](0x0);}),process['on']('uncaughtException',_0x123231=>{const _0x196839=_0x36177f;logger[_0x196839(0x1e2)](colors[_0x196839(0x1e2)]+'Uncaught\x20Exception:\x20'+_0x123231['message']+colors[_0x196839(0x1f9)]),_0x47304f['stop'](),process['exit'](0x1);}),process['on'](_0x36177f(0x1de),(_0x558a70,_0x3000bd)=>{const _0x5b05ac=_0x36177f;logger[_0x5b05ac(0x1e2)](colors[_0x5b05ac(0x1e2)]+_0x5b05ac(0x1c0)+_0x3000bd+',\x20reason:\x20'+_0x558a70+colors['reset']),_0x47304f[_0x5b05ac(0x223)](),process[_0x5b05ac(0x205)](0x1);}),await _0x47304f[_0x36177f(0x1be)]();}main()[_0x309eda(0x1d3)](_0x16e304=>{const _0x51f3a1=_0x309eda;logger[_0x51f3a1(0x1e2)](colors[_0x51f3a1(0x1e2)]+'Fatal\x20error:\x20'+_0x16e304['message']+colors[_0x51f3a1(0x1f9)]),process[_0x51f3a1(0x205)](0x1);});
