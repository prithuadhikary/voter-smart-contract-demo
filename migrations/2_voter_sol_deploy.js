
const BigNumber = require('bignumber.js');
var Voter = artifacts.require("./Voter.sol");

module.exports = function(deployer) {
  deployer.deploy(Voter, { value: new BigNumber(10).exponentiatedBy(18) });
};
