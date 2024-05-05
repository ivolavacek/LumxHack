// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MusicContract} from "../src/MusicConctract.sol";

contract CounterScript is Script {
    address initialOwner = makeAddr("initialOwner");
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        new MusicContract(initialOwner);
        vm.stopBroadcast();
    }
}
