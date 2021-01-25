require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note ridge purchase install argue bracket seed'; 
let testAccounts = [
"0xa6163c409f0ec35ba4b4bd4906a98dc68c7d346f58225afbd9d8ba7e8e4c6785",
"0xd6f7e4a80e752653387086c23e13cf70ecac361e177451022b5dcdf2dc28e140",
"0x1622e3949b678c3551d51005e7b0983281012f5d489b3ed976f176d6dfe0786f",
"0x169b7809de4b747756e657db71c3b6681184169a2b156ea593e95e1071c7e236",
"0x8208236c3c097e47065203370e00f7f7f7fd683832a9380918ffa41d5bcb406c",
"0x3478f547db0d0462d587f3e2b281015b6b3d8fdb7f0125a8faddda156f9b04a4",
"0x75f8e76a9d8ee99fe63e5052d6bf04f032509d113d1c3956962c020687743115",
"0x7182a91fe240f86694074da93d6377e6b87376f90e5a75d43ee2e356403c5aff",
"0x73c4a84f6e604551f591e3a8b2dd61ee355096b5397c359499566f62e8f57bac",
"0xe9a27b19ec7c4f7258b8e2803b2a4378715530049fd93af75da725496e0cdf39"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
