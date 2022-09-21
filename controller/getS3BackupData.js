const getFilesFromAWS= require("../AWS/getFilesFromAWS");

class GetS3BackupData {
    async getData(req,res){
        try{
            await getFilesFromAWS();
            res.status(200).send();
        }catch (error){
            res.status(500).send();
        }
    }
}

module.exports= new GetS3BackupData();