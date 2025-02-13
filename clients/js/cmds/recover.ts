import yargs from "yargs";
import { ethers } from "ethers";
import { hex } from "../consts";

exports.command = "recover <digest> <signature>";
exports.desc = "Recover an address from a signature";
exports.builder = (y: typeof yargs) => {
  return y
    .positional("digest", {
      describe: "digest",
      type: "string",
    })
    .positional("signature", {
      describe: "signature",
      type: "string",
    });
};
exports.handler = async (argv) => {
  console.log(
    ethers.utils.recoverAddress(hex(argv["digest"]), hex(argv["signature"]))
  );
};
