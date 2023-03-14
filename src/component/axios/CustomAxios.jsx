import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ca = process.env.BASE_APP_API_HOST;



export const instance = axios.create({
    baseURL: 'http://localhost:8888/',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
        ,post: {
            'Content-Type': "application/json",
        }
    },
    
    responseType: "json",
    
    responseEncoding: "utf-8",
});
