import * as IPFS from 'ipfs-core'
import * as Fs from 'fs';


const ipfs = await IPFS.create()
//const { cid } = await ipfs.add('Hello world')
//console.info(cid)

const fileData = Fs.readFileSync('./boat.png');

const fileObject = {
    path: '/boat.png',
    content: fileData

}

const { cid } = await ipfs.add(fileObject)
console.info(cid)