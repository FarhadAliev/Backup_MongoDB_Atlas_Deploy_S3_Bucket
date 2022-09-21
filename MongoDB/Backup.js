const { spawn } = require('child_process');
require("dotenv").config();
const MongoAtlas = process.env.MONGODB_URI;
const  backUpDB = async () => {
    try {
        const backupProcess = spawn('mongodump',[
            `--uri="${MongoAtlas}"`
        ]);
        backupProcess.on('close', (code, signal) => {
            if (code)
                console.log('Backup process exited with code ', code);
            else if (signal)
                console.error('Backup process was killed with singal ', signal);
            else {
                console.log('Successfully backedup the database')
            }
        });
        return true;
    }catch (error){
        throw false;
    }
}

module.exports=backUpDB;