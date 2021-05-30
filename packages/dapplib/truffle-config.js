require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note meadow unlock install person blue tragic'; 
let testAccounts = [
"0xe85d2bb42d5e7f2f1b8fb200e11d1587ea672acfec1f3f83bde8bc5b30f5db46",
"0xad8db48fde28e4ba6f90aa37bf55defb9402dfc120c95114afc22147943b621a",
"0x913bc480ca24bff76e0d3cd5663857ebd56fe880d6f76bf1f5f86e34d9338c60",
"0x71f981aa9fc81a8e20297d726ec1c25a694b5779356e15258ba0c1e604f94491",
"0x1e000b76fa797aea65b2c982371ecb064405cf1195b2271f1e7d998a96760ddc",
"0x55206c1d2df06b71b5acee49438ed8132dd513b390e2889db3f9a08887fa0794",
"0xe0de67c253d6725bbc51fa646cb3c485a8a6e2534470392705a6a2f7c779b731",
"0x59866fffcee9a47f1804c388c36f855d9e1d4d10ab965256f372e2ddbf8edf62",
"0x07bdddec3917160b606b9f90711f0e2083837c2f76e629380b1673421e7be433",
"0x854ef07f9c547ea2192214ffb9c490f1fc12e272d780d258092f25b9ec62237a"
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
            version: '^0.8.0'
        }
    }
};

