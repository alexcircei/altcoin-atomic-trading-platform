import {redeem} from '../src/redeem';


describe('#reedem()', function () {
  it.only('should create reedemTx', async () => {
    const strSig = "3045022100f43430384ca5ecfc9ca31dd074d223836cef4801b3644c651c3a30d80fbf63b8022017dae9e7ec6f3f5ee0e0b60d146963ba85d9b31003d7f60852126f2a35492759"
    const strPubkey = "03b10e3690bcaf0eae7098ec794666963803bcec5acfbe6a112bc8cdc93797f002"
    const strSecret = "3e0b064c97247732a3b345ce7b2a835d928623cb2871c26db4c2539a38e61a16"
    const strContract = "63a61429c36b8dd380e0426bdc1d834e74a630bfd5d1118876a914ebcf822c4a2cdb5f6a6b9c4a59b74d66461da5816704d728bd59b17576a91406fb26221375b1cbe2c17c14f1bc2510b9f8f8ff6888ac"
    const strContractTx = "010000000267864c7145e43c84d13b514518cfdc7ca5cf2b04764ed2672caa9c8f6338a3e3010000006b483045022100901602e523f25e9659951d186eec7e8b9df9d194e8013fb6d7a05e4eafdbb61602207b66e0179a42c54d4fcfca2b1ccd89d56253cc83724593187713f6befb37866201210288ef714849ce7735b64ed886d056b80d0a384ca299090f684820d31e7682825afeffffff3ac58ce49bcef3d047ea80281659a78cd7ef8537ca2bfce336abdce41450d2d7000000006b483045022100bd1246fc18d26a9cc85c14fb60655da2f2e845af906504b8ba3acbb1b0ebf08202201ec2cd5a0c94e9e6b971ec3198be0ff57e91115342cd98ccece98d8b18294d86012103406e35c37b3b85481db7b7f7807315720dd6486c25e4f3af93d5d5f21e743881feffffff0248957e01000000001976a914c1925e7398d325820bba18726c387e9d80047ef588ac00e1f5050000000017a9142d913627b881255c417787cc255ccad9a33ce48d8700000000"
    redeem(strContract, strContractTx, strSecret)
  });
});




// // func redeemP2SHContract(contract, sig, pubkey, secret []byte) ([]byte, error) {
// // 	b := txscript.NewScriptBuilder()
// // 	b.AddData(sig)
// // 	b.AddData(pubkey)
// // 	b.AddData(secret)
// // 	b.AddInt64(1)
// // 	b.AddData(contract)
// // 	return b.Script()
// // }
//
// // import {initiate} from './initiate';
// // export * from './initiate';
//
// console.log('-------------------------------------------------------');
// /**
//  * INITIATE
//  */
// // ubuntu@ip-172-31-31-226:~$ bitcoin-cli -testnet -rpcuser=bedrock -rpcpassword=bedrock getnewaddress
// // mxTRJVKSPjjrFeDBkzNZFTy4cur83WQk5R
// // initiate("mxTRJVKSPjjrFeDBkzNZFTy4cur83WQk5R", "0.01");
//
//
// // import {auditContract} from './audit-contract';
//
// /**
//  * AUDIT CONTRACT
//  */
// // auditContract("63a6141c43aad028199ba9a06c88cc350ef068f50808c68876a914a22a841f0212b3bb1d51691a3b1a9a9d5dee180d67051509448849b17576a91461aa0fff7c9ffecd01a2f2d969271378c030aa366888ac",
// //   "01000000019a529f2e22b7dd6aba86d7e864c955197969d5037a6bb47f880e5010897b17b8010000006b483045022100993dd7d10120feee0d5b458d54e25acdd9659883b9a35a54321dcfaf3be9c332022041ddf9e0ac21df94a7aca684f104e044dc85b1e2d7281a7c1cb161450c8aef21012103eb3fce004b800dff453bd32ab80d436c0f3ce89df657722cc127e90cf7fb3c03feffffff0240420f000000000017a91428eb6c2c7f38dedd9761eb9a7c56961ee93dd9d487aeff0f05000000001976a914225c1a683e295aeef9d0b2f05a71fb2e3ad5131e88ac00000000");
// // contract
// // 63a61464687e4d92afd1761ecb22d3aae42c609d5e2a368876a914a22a841f0212b3bb1d51691a3b1a9a9d5dee180d67051509379577b17576a914fd3c3fa09a1db2a3ef7a8be039325c924130c8df6888ac
//
// // tx
// // 01000000012547d15fa7eb699fc384fe7ca364453db8cbc07099fd610090b5a4b79f2949d1010000006b483045022100ee8596cdd246b934c4f9c5573c065568be45d457e73053d2d9b11ea56ecc1d1d02204a1470e0ad4710f1dda32252d162f6f4fb2882e8bc64845dd73b5033b16a5f130121039df726f88a9cd11ed00ea32ea8e6f3dda1ee90602ee406c210c966a97ce73cc9feffffff0240420f000000000017a9145490886592e5cf3110d38e3da09449aca38d89e1875f173105000000001976a91443707c19148f5beef8fd0a4e354f01fe927f64b488ac00000000
//
// // 3045022100f43430384ca5ecfc9ca31dd074d223836cef4801b3644c651c3a30d80fbf63b8022017dae9e7ec6f3f5ee0e0b60d146963ba85d9b31003d7f60852126f2a35492759[ALL]
// // 03b10e3690bcaf0eae7098ec794666963803bcec5acfbe6a112bc8cdc93797f002
// // 3e0b064c97247732a3b345ce7b2a835d928623cb2871c26db4c2539a38e61a16
// // 1 63a61429c36b8dd380e0426bdc1d834e74a630bfd5d1118876a914ebcf822c4a2cdb5f6a6b9c4a59b74d66461da5816704d728bd59b17576a91406fb26221375b1cbe2c17c14f1bc2510b9f8f8ff6888ac
//
//
// const strSig = "3045022100f43430384ca5ecfc9ca31dd074d223836cef4801b3644c651c3a30d80fbf63b8022017dae9e7ec6f3f5ee0e0b60d146963ba85d9b31003d7f60852126f2a35492759"
// const strPubkey = "03b10e3690bcaf0eae7098ec794666963803bcec5acfbe6a112bc8cdc93797f002"
// const strSecret = "3e0b064c97247732a3b345ce7b2a835d928623cb2871c26db4c2539a38e61a16"
// const strContract = "63a61429c36b8dd380e0426bdc1d834e74a630bfd5d1118876a914ebcf822c4a2cdb5f6a6b9c4a59b74d66461da5816704d728bd59b17576a91406fb26221375b1cbe2c17c14f1bc2510b9f8f8ff6888ac"
// const strContractTx = "010000000267864c7145e43c84d13b514518cfdc7ca5cf2b04764ed2672caa9c8f6338a3e3010000006b483045022100901602e523f25e9659951d186eec7e8b9df9d194e8013fb6d7a05e4eafdbb61602207b66e0179a42c54d4fcfca2b1ccd89d56253cc83724593187713f6befb37866201210288ef714849ce7735b64ed886d056b80d0a384ca299090f684820d31e7682825afeffffff3ac58ce49bcef3d047ea80281659a78cd7ef8537ca2bfce336abdce41450d2d7000000006b483045022100bd1246fc18d26a9cc85c14fb60655da2f2e845af906504b8ba3acbb1b0ebf08202201ec2cd5a0c94e9e6b971ec3198be0ff57e91115342cd98ccece98d8b18294d86012103406e35c37b3b85481db7b7f7807315720dd6486c25e4f3af93d5d5f21e743881feffffff0248957e01000000001976a914c1925e7398d325820bba18726c387e9d80047ef588ac00e1f5050000000017a9142d913627b881255c417787cc255ccad9a33ce48d8700000000"
// //
// import {redeemP2SHContract} from './redeemP2SHContract';
//
// const script = redeemP2SHContract(strContract, strSig, strPubkey, strSecret);
// // console.log('** script    ', script.toHex());
//
// import {redeem} from './redeem';
// // //
// redeem(strContract, strContractTx, strSecret)
