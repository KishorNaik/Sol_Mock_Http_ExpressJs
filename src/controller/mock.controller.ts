export class MockController{

    private readonly mockService:MockService;

    constructor(mockService:MockService){
        this.mockService=mockService;
    }

    public firstEndPoint(str1:string,str2:string): string{
        //throw new Error(`Something went wrong`);

        let serviceResult:string=this.mockService.firstMockService(str2);

        return `${str1} ${serviceResult}`;
    }

    public secondEndPoint(str1:string,str2:string):string{

        let functionResult=MockFunctionDemo(str2);

        return `${str1} ${functionResult}`;
    }

    public async thirdEndPoint(str1:string,str2:string):Promise<string>{
        let serviceResult:string=await this.mockService.secondMockService(str2);

        return `${str1} ${serviceResult}`;
    }

}


export class MockService
{
    public firstMockService(str1:string):string{
        return str1;
    }

    public secondMockService(str:string):Promise<string>{
        return new Promise((resolve,reject)=>{
            try
            {
                return resolve(str);
            }
            catch(ex)
            {
                reject(ex);
            }
        });
    }
}

export const MockFunctionDemo=(str:string):string =>{
    return str;
}