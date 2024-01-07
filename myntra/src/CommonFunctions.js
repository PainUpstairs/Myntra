export const springBaseUrl = "http://localhost:9090";
export const dotnetBaseUrl = "https://localhost:7037";

export const IsSame =(obj1,obj2)=>{
    if( JSON.stringify(obj1) === JSON.stringify(obj2))
        return true;
    return false;
}