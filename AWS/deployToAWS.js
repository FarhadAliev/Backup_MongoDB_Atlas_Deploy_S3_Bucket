const s3_Config = require("./awsConfig");
const fs = require('fs')
const AdmZip = require("adm-zip");
const date = require('date-and-time')
require('path').basename('../');
require("dotenv").config();

function createZipArchive(value) {
    try {
        const zip = new AdmZip();
        const outputFile = value + ".zip";
        zip.addLocalFolder("./dump");
        zip.writeZip(outputFile);
    } catch (error) {
        throw error
    }
}

const deploy = async ()=> {
    const now = new Date();
    const value = date.format(now, 'YYYY-MM-DD');
    createZipArchive(value);
    const fileContent = fs.readFileSync(value + ".zip")
    const s3 = s3_Config;
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: value + `.zip`,
        Body: fileContent
    }
     s3.upload(params, (err,data) => {
         if (err) throw err
         if (data){
                 fs.unlinkSync(`${value}.zip`);
         }
     });
        console.log("Successfully deployed to S3");
    }

module.exports=deploy;