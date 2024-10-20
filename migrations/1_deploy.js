const BaseVaultLite = artifacts.require("BaseVaultLite");

module.exports = function (deployer) {
  deployer.deploy(BaseVaultLite);
};
