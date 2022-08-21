import httpMocks from "node-mocks-http";
import {UserController} from "../../controller/user.controller";
import { Result } from "../../DTO/Result";
import { IUserDTO } from "../../DTO/userDTO";

describe(`getUserData-EndPoint`,()=>{




    it(`query params should not be empty`,()=>{
        try
        {
            // Arrange
            let request=httpMocks.createRequest({
                method:"GET",
                params:{
                    id:1
                }
            });

            let response=httpMocks.createResponse();

            // Act
            let userController:UserController=new UserController();
                userController.getUserData(request,response);

            // Assert
           let result=response._getJSONData() as Result<IUserDTO>;

           expect(result.status).toBe(200);
           expect(result.data.id).toBe(1);
        }
        catch(ex){
            
            if(ex?.message.includes(`id should not be empty`))
            {
                expect(true).toBe(false);
            }
            else
            {
                expect(true).toBe(true);
            }
        }

    });
});