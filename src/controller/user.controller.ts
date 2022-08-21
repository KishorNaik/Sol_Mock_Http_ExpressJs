import { Request, Response } from "express";
import { Result } from "../DTO/Result";
import { IUserDTO } from "../DTO/userDTO";

export class UserController{

    public getUserData(req:Request,res:Response){

        let request=req.body;
        let id:number=Number(req.params.id);

        console.log(`Id => ${id}`);

        if(id===undefined || id<=0 || isNaN(id))
        {
            throw new Error(`id should not be empty`);
        }

        console.log(`Request => ${JSON.stringify(request)}`);

        let result:Result<IUserDTO>={
            status:200,
            data:{
                id:1,
                firstName:"Kishor",
                lastNames:"Naik"
            }
        };

        return res.status(200).json(result);
    }

}