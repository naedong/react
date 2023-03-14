import axios from "axios"

export const getConnetIp = async () => {
    const responsData =  await fetch("https://geolocation-db.com/json/");
    
    return responsData;
}