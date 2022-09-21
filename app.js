const express=require('express');
const router=require("./router/index");
const cron = require("./Cron/job");
const app=new express();
const port = process.env.PORT || 3000;
router(app);
cron.start();
app.listen(port, async()=>{
    console.log(`Listening on port ${port}...`);
});

