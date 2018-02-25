'use strict';

var unifycore = module.exports;

// module information
unifycore.version = 'v' + require('./package.json').version;
unifycore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bitcore-lib found. ' +
      'Please make sure to require bitcore-lib and check that submodules do' +
      ' not also include their own bitcore-lib dependency.';
    throw new Error(message);
  }
};
unifycore.versionGuard(global._unifycore);
global._unifycore = unifycore.version;

// crypto
unifycore.crypto = {};
unifycore.crypto.BN = require('./lib/crypto/bn');
unifycore.crypto.ECDSA = require('./lib/crypto/ecdsa');
unifycore.crypto.Hash = require('./lib/crypto/hash');
unifycore.crypto.Random = require('./lib/crypto/random');
unifycore.crypto.Point = require('./lib/crypto/point');
unifycore.crypto.Signature = require('./lib/crypto/signature');

// encoding
unifycore.encoding = {};
unifycore.encoding.Base58 = require('./lib/encoding/base58');
unifycore.encoding.Base58Check = require('./lib/encoding/base58check');
unifycore.encoding.BufferReader = require('./lib/encoding/bufferreader');
unifycore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
unifycore.encoding.Varint = require('./lib/encoding/varint');

// utilities
unifycore.util = {};
unifycore.util.buffer = require('./lib/util/buffer');
unifycore.util.js = require('./lib/util/js');
unifycore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
unifycore.errors = require('./lib/errors');

// main bitcoin library
unifycore.Address = require('./lib/address');
unifycore.Block = require('./lib/block');
unifycore.MerkleBlock = require('./lib/block/merkleblock');
unifycore.BlockHeader = require('./lib/block/blockheader');
unifycore.HDPrivateKey = require('./lib/hdprivatekey.js');
unifycore.HDPublicKey = require('./lib/hdpublickey.js');
unifycore.Networks = require('./lib/networks');
unifycore.Opcode = require('./lib/opcode');
unifycore.PrivateKey = require('./lib/privatekey');
unifycore.PublicKey = require('./lib/publickey');
unifycore.Script = require('./lib/script');
unifycore.Transaction = require('./lib/transaction');
unifycore.URI = require('./lib/uri');
unifycore.Unit = require('./lib/unit');

// dependencies, subject to change
unifycore.deps = {};
unifycore.deps.bnjs = require('bn.js');
unifycore.deps.bs58 = require('bs58');
unifycore.deps.Buffer = Buffer;
unifycore.deps.elliptic = require('elliptic');
unifycore.deps.scryptsy = require('scryptsy');
unifycore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
unifycore.Transaction.sighash = require('./lib/transaction/sighash');
