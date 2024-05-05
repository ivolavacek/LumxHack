// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {MusicContract} from "../src/MusicConctract.sol";

contract MusicContractTest is Test {
    address initialOwner = makeAddr("initialOwner");
    address memberOne = makeAddr("memberOne");
    address memberTwo = makeAddr("memberTwo");
    MusicContract public musicContract;

    function setUp() public {
        musicContract = new MusicContract(initialOwner);
    }
}
