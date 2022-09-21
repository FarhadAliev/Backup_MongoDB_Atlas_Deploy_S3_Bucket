const cron = require("node-cron");
const backupFomMongoDb = require("../MongoDB/Backup");
const deployToAWS = require("../AWS/deployToAWS");


const job =cron.schedule('*/1 * * * *', async () => {
    const backup = await backupFomMongoDb();
    if (backup){
        await deployToAWS();
    }
});

module.exports=job;