const LockedWithdrawal = artifacts.require('./LockedWithdrawal.sol');

module.exports = function (deployer) {
  const ownerAddress = 'TEKAmEeTrDhJaAzmwmtc1JTAiDQhHuYbY4'; // Thay bằng địa chỉ ví TRX của bạn
  deployer.deploy(LockedWithdrawal, ownerAddress);
};
