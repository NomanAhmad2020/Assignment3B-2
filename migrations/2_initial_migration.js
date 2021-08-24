const paktoken = artifacts.require("paktoken");

module.exports = async function (deployer,network,accounts) {
  await deployer.deploy(paktoken);
};
