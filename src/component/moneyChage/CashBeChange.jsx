import React, { useEffect, useState } from "react";
import ChageBeTable from "./CashBeTable";
import { faker } from "@faker-js/faker";
import Terminal from "../axios/MoneyTerminal";
import { logins } from "../../class/TbMembLogin";
import { moneyCharge, moneyCheck } from "../../class/cash";
import Check from "../login/sign/Check";
 


export default function CashBeChange() {


  useEffect( () => {
      
    logins.TbMembLoginHst.membId = localStorage.getItem("id"); 
    

    console.log(`이거 확인 ${logins.TbMembLoginHst.membId}`);
    setMoney();
    async function setMoney() {
           console.log(`확인바람 `);
     Terminal.nowMoney(logins.TbMembLoginHst).then((res) => {
       console.log(`확인바람 ${res}`);
       setNow(res.data.moneyBlce);
       moneyCheck.now = now;
    }).catch((err) => { 
        console.log(`이거 에러 ${err}`);
    });
     }
  }, [moneyCheck]);




  const [now, setNow] = useState("");

 


    faker.locale = "ko";
    const columns = ["머니 잔액", "머니 충전액", "충전 결과 예정액"];
    faker.seed(100);
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const list = Array(1)
    .fill()
    .map(() => ({
      boano: now,
      boacash: getRandom(0, 10000),
      boatotal: faker.word.adjective(),
    }));

    // const board = 
    //  [
    //       {  boano : 1,
    //         boacash : 20000
    //         },
    //         {
    //             boano: 2,
    //             boacash : 10000
    //      }
    //  ];
    
  return <ChageBeTable columns={columns} list={list}></ChageBeTable>;
}