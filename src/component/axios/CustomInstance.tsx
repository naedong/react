import React from "react";
import axios  from "axios";
import { useSelector } from "react-redux";

/**
 * custom ajax 요청 페이지입니다.
 * baseURL: "",
 * timeout: 1000,
 * headers: {
 *   "Content-type": "application/json; charset=utf-8",
 * },
 * responseType: json,
 * responseEncoding: utf-8,&nbsp
 */

const ca = process.env.BASE_APP_API_HOST;



export const instance = axios.create({
    baseURL: 'http://localhost:8888/',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
        // post: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // }
    },
    
    responseType: "json",
    
    responseEncoding: "utf-8",
});
