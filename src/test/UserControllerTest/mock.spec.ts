import {MockController, MockService} from "../../controller/mock.controller"
import * as mockFunc from "../../controller/mock.controller";
test("mock Class testing using Spy",()=>{

    jest.clearAllMocks();

    let mockService=jest.spyOn(MockService.prototype,"firstMockService").mockReturnValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=mockController.firstEndPoint("Hello","World");

    expect(mockService).toHaveBeenCalledTimes(1);
    expect(mockService).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

});

test("mock Class testing using fn",()=>{

    jest.clearAllMocks();

    MockService.prototype.firstMockService=jest.fn().mockReturnValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=mockController.firstEndPoint("Hello","World");

    expect(MockService.prototype.firstMockService).toHaveBeenCalledTimes(1);
    expect(MockService.prototype.firstMockService).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

})

test("mock Class testing async using Spy",async()=>{

    jest.clearAllMocks();

    let mockService=jest.spyOn(MockService.prototype,"secondMockService").mockResolvedValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=await mockController.thirdEndPoint("Hello","World");

    expect(mockService).toHaveBeenCalledTimes(1);
    expect(mockService).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

});

test.only("mock Class testing async using fn",async()=>{

    jest.clearAllMocks();

    MockService.prototype.secondMockService=jest.fn().mockResolvedValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=await mockController.thirdEndPoint("Hello","World");

    expect(MockService.prototype.secondMockService).toHaveBeenCalledTimes(1);
    expect(MockService.prototype.secondMockService).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

})

test("mock Class testing using fn",()=>{

    jest.clearAllMocks();

    MockService.prototype.firstMockService=jest.fn().mockReturnValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=mockController.firstEndPoint("Hello","World");

    expect(MockService.prototype.firstMockService).toHaveBeenCalledTimes(1);
    expect(MockService.prototype.firstMockService).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

})

test("mock function testing using spy => Function ",()=>{

    jest.clearAllMocks();
    
    let mockFunction=jest.spyOn(mockFunc,"MockFunctionDemo").mockReturnValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=mockController.secondEndPoint("Hello","World");

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

})

test("mock function testing using fun => Function ",()=>{

    jest.clearAllMocks();
    //@ts-ignore
    mockFunc.MockFunctionDemo=jest.fn().mockReturnValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=mockController.secondEndPoint("Hello","World");

    expect(mockFunc.MockFunctionDemo).toHaveBeenCalledTimes(1);
    expect(mockFunc.MockFunctionDemo).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

})

test("mock function testing using spy => Function ",()=>{

    jest.clearAllMocks();
    
    let mockFunction=jest.spyOn(mockFunc,"MockFunctionDemo").mockReturnValue("World");

    let mockController:MockController=new MockController(new MockService());
    let result=mockController.secondEndPoint("Hello","World");

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith("World");
    expect(result).toBe("Hello World");

})