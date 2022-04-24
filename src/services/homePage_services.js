import data from "../utils/trophy.json"

export const getCategories = ()=>{
    console.log(data)
    return {
        data : data.categories,
        success: true
    }
}