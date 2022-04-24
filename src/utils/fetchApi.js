import {axios} from "react"
export async function fetchApi(url,methodName,body,propertyName){
try{
    const {data,statusCode} = await axios({methodName})
    if(statusCode === 200 || statusCode === 201){
        console.log(data);
        return {
            data:data,
            success:true,
            propertyName:`${propertyName} fetched successfully`
        }
    }
        throw new Error("Error occured");

}catch(e){
    console.log(e);
    return {
        data: null,
        success: false,
        propertyName : `${propertyName} failed to fetch`
    }
}

}
