import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import BaseRouter from "./routes/Base/Index";

const app=express();
const port=3001;
app.use(bodyParser.json({limit:'50mb'}));

app.use('/api',BaseRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(400).json({
        error: err.message,
    });
});




app.listen(port,()=>{
    console.log(`Node server is running on this port ${port}`);
});

module.exports=app;