pragma solidity ^0.8.0;
import "./ERC20.sol";
import "./Ownable.sol";

contract ViddleCoin is ERC20, Ownable {
  // a mapping from an address to whether or not it can mint / burn
  mapping(address => bool) controllers;

  constructor() ERC20("ViddleCoin", "VDL") {}

  /**
   * mints $VDL to a recipient
   * @param to the recipient of the $VDL
   * @param amount the amount of $VDL to mint
   */
  function mint(address to, uint256 amount) external {
    require(controllers[msg.sender], "Only controllers can mint");
    _mint(to, amount);
  }

  /**
   * burns $VDL from a holder
   * @param from the holder of the $VDL
   * @param amount the amount of $VDL to burn
   */
  function burn(address from, uint256 amount) external {
    require(controllers[msg.sender], "Only controllers can burn");
    _burn(from, amount);
  }

  /**
   * enables an address to mint / burn
   * @param controller the address to enable
   */
  function addController(address controller) external onlyOwner {
    controllers[controller] = true;
  }

  /**
   * disables an address from minting / burning
   * @param controller the address to disbale
   */
  function removeController(address controller) external onlyOwner {
    controllers[controller] = false;
  }
}
