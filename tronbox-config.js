module.exports = {
  networks: {
    shasta: { // Mạng testnet
      privateKey: '',
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '*'
    },
    mainnet: { // Mạng mainnet
      privateKey: '',
      fullHost: 'https://api.trongrid.io',
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
