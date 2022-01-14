require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Hn-nPNZ2Gsw-BOi-r8KuL8VQLn_sdKd_',
      accounts: ['42b257defd17309501026297c87ea059c06843fd23059a7e36cc9612255fc13d']
    }
  }
}
