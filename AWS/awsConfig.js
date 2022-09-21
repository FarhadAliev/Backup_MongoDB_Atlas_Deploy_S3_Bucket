const awsConfig = require("aws-sdk");
require("dotenv").config();


const s3 = new awsConfig.S3({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey:process.env.S3_SECRET_ACCESS_KEY,
    region:process.env.S3_BUCKET_REGION
})

module.exports=s3;


