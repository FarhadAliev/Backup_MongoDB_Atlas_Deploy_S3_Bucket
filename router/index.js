const getS3BackupDataController = require("../controller/getS3BackupData");


const applyRoutes = (app) => {
    /** Public */
    app.use('/aws/getdata',getS3BackupDataController.getData);
}

module.exports=applyRoutes;