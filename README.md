## BLESS NETWORK BOT

Bless Network Bot is an automation tool designed to maintain node connections for the Bless Network. It automatically performs health checks and pings nodes to ensure optimal network participation.

## Features

- Automated node ping system
- Health check monitoring
- JWT token management
- Colorful console logging
- Multi-account support
- Error handling and retry mechanism

## Prerequisites

Before running the bot, make sure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Getting Started

### 1. Registration

First, you need to register on Bless Network:

1. Visit [Bless Network Registration](https://bless.network/dashboard)
2. Create your account and set up your nodes
3. Get your JWT token from the dashboard

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/Rambeboy/bless-bot.git

# Navigate to project directory
cd bless-bot

# Install dependencies
npm install
```

### 3. Configuration

1. Edit `data.txt` file in the project root directory
2. Add your JWT token to `data.txt`

Example `data.txt`:

```
eyJ
eyj
```

## Usage

To start the bot:

```bash
npm run start
```

The bot will:

- Load your account(s)
- Perform regular health checks
- Ping your nodes automatically
- Display colored status messages

## Configuration Options

You can modify the following settings in `CONFIG` object:

- `defaultInterval`: Ping interval in minutes
- `logTokenLength`: Length of displayed token in logs
- `axiosTimeout`: API request timeout
- `retryAttempts`: Number of retry attempts for failed requests

## Logging

The bot includes a comprehensive logging system with different levels:

- `SUCCESS`: Successful operations (Green)
- `ERROR`: Error messages (Red)
- `WARNING`: Warning messages (Yellow)
- `INFO`: Information messages (Cyan)
- `CUSTOM`: Custom messages (Magenta)

## Disclaimer

This bot is unofficial and not affiliated with Bless Network. Use at your own risk.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---