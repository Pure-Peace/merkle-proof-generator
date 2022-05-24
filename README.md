# MERKLE-TREE-GENERATOR

Easily generate merkle tree and proof

## Generate merkle tree proof

```bash
yarn gen-proof <ethereum address>
```

**steps**

first create `accounts.json` at path `json` with contents:

```json
[
  {
    "address": "0x4592f455eE0F130da6c01A3D2A2525e008EDaA90",
    "privateKey": "0xc0f42aa1ee73d7f9bc8134983edd78fa30055c44b3465ab1d7e46bb07bf2dbe3"
  },
  {
    "address": "0x4a880Ade24E4059281611f8d706c5153FB99F7DB",
    "privateKey": "0xe7a3be5066b4e237a1476462acb4f4bf85391421f3ec2089a1385731d1f974a2"
  }
]
```

or

```json
[
  "0x4a880Ade24E4059281611f8d706c5153FB99F7DB",
  "0x4592f455eE0F130da6c01A3D2A2525e008EDaA90"
]
```

**example**

```
$ node ./generateProof.js 0x4a880Ade24E4059281611f8d706c5153FB99F7DB
merkle tree root: "0x609172258d958ae55e061b069098af0accd3b2fbb74f1483ea8227d7d165c4d3"
generating merkle proof for address "0x4a880Ade24E4059281611f8d706c5153FB99F7DB"...
proof are writed to: "./json/proof.json"
Done in 0.41s.
```

## Generate ethereum accounts (For tests)

```bash
yarn gen-accounts <count>
```

**example**

```
$ node ./generateAccounts.js 5
generating 5 accounts...
write out...
done, 5 accounts are writed to: "./json/accounts.json"
Done in 0.54s.
```

contents of `accounts.json`

```json
[
  {
    "address": "0x4592f455eE0F130da6c01A3D2A2525e008EDaA90",
    "privateKey": "0xc0f42aa1ee73d7f9bc8134983edd78fa30055c44b3465ab1d7e46bb07bf2dbe3"
  },
  {
    "address": "0x4a880Ade24E4059281611f8d706c5153FB99F7DB",
    "privateKey": "0xe7a3be5066b4e237a1476462acb4f4bf85391421f3ec2089a1385731d1f974a2"
  },
  {
    "address": "0x08225ac760bE28A65722965118605d711e749520",
    "privateKey": "0xa35cd1c6588f43257a25063efd5d839f029e40f34bedf65720d714eaa869d5fc"
  },
  {
    "address": "0x68258DbEA105A51232e87b1588C7FEf2D9B861a1",
    "privateKey": "0x6d496fee79983dc4198333f76a121b30117328b68c1115d6f048df518e4ff688"
  },
  {
    "address": "0x2801b70E68F9d6965ceEB47cd7A5D614894686a0",
    "privateKey": "0xb36f5090ec6aaf495b20e29395a76ff561b431f5ff1c6d4d9366ef43dedd3d85"
  }
]
```
