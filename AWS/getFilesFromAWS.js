const s3 = require("./awsConfig");
const fs = require("fs");
const path = require("path");
require("dotenv").config();



const getData = async ()=>{
    const data = await s3.listObjects({
        Bucket:process.env.S_BUCKET_NAME
    }).promise();
    for (const file in data.Contents) {
        const params = {
            Bucket: 'backupfarhad',
            Key: `${data.Contents[file].Key}`
        };
        const rs = await s3.getObject(params).createReadStream();
        const ws = await  fs.createWriteStream(path.join('S3_Bucket', `${data.Contents[file].Key}`));
        rs.pipe(ws);
    }
   return data
}

module.exports=getData