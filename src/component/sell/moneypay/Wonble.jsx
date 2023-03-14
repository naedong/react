
import React from "react";
import { useState } from "react";

export default function WonTable(props) {
    const [cash, setCash] = useState('');

    const inputPriceFormat = (str) => {
        console.log("s", str);
      
        const comma = (str) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        };
      
        const uncomma = (str) => {
            str = String(str);
            return str.replace(/[^\d]+/g, "");
        };
        return comma(uncomma(str));
    };
    return <input type="text" onChange={() => setCash(inputPriceFormat(props.boano))} value={cash} placeholder="클릭" ></input>;
}