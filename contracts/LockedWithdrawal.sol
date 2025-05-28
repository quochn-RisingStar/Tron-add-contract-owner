// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LockedWithdrawal {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    // Cho phép contract nhận TRX
    receive() external payable {}
}
