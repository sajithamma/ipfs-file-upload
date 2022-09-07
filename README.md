# ipfs-file-upload
IPFS quick file upload demo, using node. (IPFS is mostly used in web3 for storing decentralised files like NFT)

## Run
### Run and wait some time to get the content uploaded in IPFS

```bash
npm install
node worker.js

```

### Initially the worker will start the following listeners

```bash

Swarm listening on /ip4/127.0.0.1/tcp/4002/p2p/
Swarm listening on /ip4/192.168.0.106/tcp/4002/p2p/
Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/p2p/

```

## Screenshot

![alt Screenshot](/screenshot.gif)

### After 5 to 20 seconds, you will get the unique hash / id of the file upload

eg: CID(QmazXFL2nPvAg6ahyyTpwnMqYFsxDzku9ep9BfWpqPbENz

### Access the content using any ipfs url

eg: https://ipfs.io/ipfs/QmazXFL2nPvAg6ahyyTpwnMqYFsxDzku9ep9BfWpqPbENz

