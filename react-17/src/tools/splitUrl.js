export const getToken = (url) =>{
    let res = [];
    const data = url
    data .substring(1)
    .split("&")
    .map((value)=>{ 
        const values = value.split("=");
        if(values[0] !== undefined && values[1] !== undefined){
            res[values[0]] = values[1];
        }
    })
    return res
        
}