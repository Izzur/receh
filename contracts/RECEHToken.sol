//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RECEHToken is ERC20 {
    uint256 private lastTrxAmount;

    constructor() ERC20("Receh", "RECEH") {
        _mint(msg.sender, 1_000 * 10 ** decimals());
    }

    function decimals() public view virtual override returns (uint8) {
        return 2;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return 1_000_000 * 10 ** decimals();
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        lastTrxAmount = amount;
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function getLastTransactionAmount() public view returns (uint256) {
        return lastTrxAmount;
    }
}
