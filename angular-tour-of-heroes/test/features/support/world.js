var chai, chaiAsPromised;

chai = require('chai');
chaiAsPromised = require('chai-as-promised');

function World() {
  chai.use(chaiAsPromised);
  this.expect = chai.expect;
  this.assert = chai.assert;
}

module.exports.World = World