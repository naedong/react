
import React, { useEffect } from "react";
import { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import bear from "../../../component/assets/images/bear.png";
import WonTable from "./WonTable";
import PayMnet from "../iamport/PortMain";
import Terminal from "../axios/Terminal";
import { Phone, Token } from "../../class/Phone";
import { moneyCheck } from "../../class/cash";


export default function ChageList({ columns, list }) {
    
//       useEffect(() => {
//           Terminal.getPayToken().then((res) => {
//               console.log(res);
//           }).catch((err) => {
              
//           });
//   });

    // useEffect(() => {
    //     Terminal.getPayToken().than((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    // })
    const [cash, setCash] = useState('');
    const [full, setFull] = useState('');
    const [naw, setNaw] = useState(0);
     
  //  const SetClick = (() => {
        // window.location.replace('http://localhost:3000/port');
    //    <PayMnet/>
   // });

    // console.log(moneyCheck.power = uncomma(str));//
    const inputPriceFormat = (str) => {
        
        console.log(`이것은 당신의 충전예쌍액 ${moneyCheck.power}`);
      console.log("s", str);
      const setf = (str) => {
          list.boano + str;    
      }
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

const uncommaa = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
        };

//       const showButton = () => {
//     setLoading(true);
//     if (window.innerWidth <= 960) {
//       setButton(false);
      
//     } else {
//       setButton(true);
//     }
   
//   };
//   window.addEventListener("resize", showButton);
    const setTotal = useEffect(() => {
        //   showButton();
      
      console.log(moneyCheck.now);
      setNaw(
          parseInt(cash) + moneyCheck.now
      );
      
    }, [cash]);
    

        return (
            <div className="backgroundimas" >
                <div className="white-panels">
                    <div className="login-shows">
    
                        <table className="DA" >
                            <thead>
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column}>{column}</th>
                                        )
                                    )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {list.map(({ boano, boacash, boatotal }) => (
                                    <tr key={boano + boacash + boatotal} style={{
                                        color:'red'
                                    }}>
                                        <td style={{
                                            color:'black'
                                        }}>
                                            <WonTable boano={boano}  /> 원</td>
                                         
                                        <td style={{
                                            color:'black'
                                        }}>  <input type='text' value={cash} placeholder="값을 입력하시오"
                                            onChange={(e) => setCash(inputPriceFormat(e.target.value))}></input> 원</td>
                                        <td style={{
                                            color:'black'
                                        }} >  {inputPriceFormat(parseInt(uncommaa(cash))+parseInt(moneyCheck.now)) } 원</td>
                                    </tr>
                                ))}

                            </tbody>
                            <tfoot>
                                    <tr>
                                        <PayMnet value={uncommaa(cash)}></PayMnet></tr>
                            </tfoot>
                        </table>
                        
                    </div>
                </div>
            </div>
        
        );
    }

