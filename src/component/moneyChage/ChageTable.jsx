import React, { useState, memo, useMemo, useEffect } from "react";
import Terminal from "../axios/Terminal";
import CashBeChange from "./CashBeChange";
// import "./Board.css";
import './Table.css';

export default memo(function ChageTable() {
    const [loading, setLoading] = useState();

    // useEffect(() => {
    //     setLoading(false)
    //     return () => getToken();
    // }, []);
    
    // const getToken = async (loading) => {
    //     setLoading(true);
    //     await Terminal.getPayToken().then((res) => {
    //         console.log(res.data);
    //         Token.token = res.data;
    //         console.log(Token.token);
    //     }).catch((err) => { });
    // };
   



//    const app = useEffect(() => {
//        console.log("실행");
//     localStorage.setItem("id",Anroid.appFunction("msg"));
    
//    }, []);
    
    
    return (
        
        <div>
            { localStorage.getItem("id")}
            <div className="table-back">
                <CashBeChange></CashBeChange>
            </div>
        </div>
    );
});