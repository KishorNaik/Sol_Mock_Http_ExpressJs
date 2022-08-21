export interface Result<TResult extends unknown>{
    status:number;
    data:TResult
};