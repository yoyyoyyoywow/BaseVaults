module.exports = {
  networks: {
    base: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc.base.org`),
      network_id: 8453, // Base network ID
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", 
    },
  },
};
