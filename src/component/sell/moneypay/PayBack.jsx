
import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { moneyCheck } from "../../../class/cash";
import { merchant } from "../../../class/merchant";
import Terminal from "../../axios/Terminal";
import Payment from "../../iamport/PortMain";

import WonTable from "./Wonble";

export default function PayBack({ columns, list }) {
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

  // const setMerchan = ((goodsDesc, merchantDesc , goodsAmt , merchantUrl, goodsNm, merchantNm , telNo, goodsModelNo, goodsShopCost) => {
  //   // goodsDesc, merchantDesc , goodsAmt ,
  //   // merchantUrl, goodsNm, merchantNm,
  //   // telNo, goodsModelNo, goodsShopCost
  //   console.log("실행3");
  //   merchant.goodsDesc = goodsDesc;
  //   merchant.goodsModelNo = goodsModelNo;
  //   merchant.goodsShopCost = goodsShopCost;
  //   merchant.goodsNm = goodsNm;
  //   merchant.merchantUrl = merchantUrl;
  //   merchant.goodsAmt = goodsAmt;
  //   merchant.merchantNm = merchantNm;
  //   merchant.telNo = telNo;
  //   merchant.merchantDesc = merchantDesc;
  //   console.log(merchant.goodsDesc);
  // });

  const setGoodsTalbe = useEffect(() => {
    console.log("실행");
    
    // localStorage.setItem("id",Anroid.appFunction("msg"));


    test();
    console.log(list);
    async function test() {
      console.log("실행");
      await Terminal.merchantList(list)
        .then((res) => { console.log(res) })
      .catch((err) => {console.log(err) });
    }
    
    
  },[]);
  console.log(` 현재 금액 ${moneyCheck.now}`);

        return (
            <div className="backgroundimasd" >
                {/* <img src={bear} alt="곰 배경이미지" className="bearedd" /> */}
                                {/* {columns.map((column) => (
                                                                    
                                <div key={column}>
                                         {column}
                                    
                                </div>
                                    ))} */}
                {setGoodsTalbe}
                {list.map(({ goodsSellQtt ,goodsQtt , goodsDesc, merchantDesc , goodsAmt , merchantUrl, goodsNm, merchantNm , telNo, goodsModelNo, goodsShopCost}) =>
                         
                <div className="white-panelsd" key={merchantDesc + goodsAmt  + merchantUrl + goodsNm }>
                    {/* {setMerchan( goodsDesc, merchantDesc , goodsAmt , merchantUrl, goodsNm, merchantNm , telNo, goodsModelNo, goodsShopCost)}
                    {setGoodsTalbe} */}
                    <div className="product_img_div"><img src="./asset/image/logo192.png" id="logod" alt="로고" className="logos"></img></div>
                    <h5 className="product_title"> 상품명 : {goodsNm}</h5>
                    <p className="product_des">가게명 : {merchantNm}</p>
                     
                        <p className="product_des">원산지 : {merchantDesc }</p>
                            <div className="product_mon"> {inputPriceFormat(goodsAmt)} 원</div>
                    {/* {moneyCheck.now - goodsAmt > goodsAmt ? <div>포인트로 충전</div> : <div>포인트로 충전 하기</div>} */}
                    <Payment  telNo={telNo} goodsNm={goodsNm} goodsModelNo={goodsModelNo} goodsShopCost={goodsShopCost} transferTyCd="01" 
                    payMemdCd="01" transferAmt={goodsAmt}  goodsAmt={goodsAmt} buyQtt="1" buyAmt={goodsAmt} goodsQtt={goodsQtt} goodsSellQtt={goodsSellQtt} goodsDesc={goodsDesc}
                    />       
                        </div>
                    
            )}
            </div>
        
        );
    }

