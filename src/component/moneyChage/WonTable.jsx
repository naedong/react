
import React, { useEffect } from "react";
import { useState } from "react";
import { moneyCheck } from "../../class/cash";

export default function WonTable(props) {
    const [cash, setCash] = useState('');


    useEffect(() => {
        moneyCheck.now = props.boano
        setCash(
            inputPriceFormat(props.boano)
        )
    }, [props.boano]);

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
    return <input type="text" value={cash} ></input>;
}