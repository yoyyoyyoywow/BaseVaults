# BaseVault

BaseVault Lite is a decentralized file storage solution built on the Base blockchain. It allows users to upload files securely using IPFS and store the file hashes on the Base network. This ensures that files are decentralized, and users have control over their data.

## Features

- **Decentralized File Storage**: Upload files to IPFS and store the file hash on the blockchain.
- **Secure Access**: Retrieve the file hash stored on the blockchain to access the file on IPFS.
- **Blockchain-Powered**: Uses Base blockchain for secure, tokenized access.
  
## Tech Stack

- **Frontend**: React
- **Blockchain Interaction**: Web3.js
- **Smart Contract**: Solidity (Base blockchain)
- **Decentralized Storage**: IPFS

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Metamask extension for interacting with the Base network
- IPFS (via Infura)

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/BaseVaultLite.git
   cd BaseVault
   cd frontend
   npm install
   truffle migrate --network base
   npm start
