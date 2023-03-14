import React from "react";
import PayBack from "./PayBack";
import { faker } from "@faker-js/faker";
    
export default function CashBeChange() {
    faker.locale = "ko";
    const columns = ["가맹점", "결제 금액", "구매 물품", "결제 수단"];
    faker.seed(100);
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const shopcost = (min, max) => {
     var d = Math.floor(Math.random() * (max - min) + min);
    switch (d) {
      case 1:
        return d = 1000;
      case 2:
        return d = 4000;
      case 3:
        return d = 7000;
    }
    return d;
    }
  const list = Array(10)
    .fill()
    .map(() => ({
      merchantDesc: faker.address.cityName(),  // 상품설명 goodsdesc;
      merchantUrl: faker.company.companySuffix(), 
      goodsNm: faker.finance.accountName(), // goodsNM
      merchantNm: faker.company.name(),
      telNo : faker.phone.number(), 
      publicData: {
        emailAddr: faker.company.name() +".com",
        zipCd: faker.address.countryCode(),
        zipAddr: faker.address.city(),
        detailAddr: faker.address.streetAddress(),
        useYn: "사용"

      },
      goodsModelNo: getRandom(0, 10),
      goodsAmt : getRandom(100, 300), // goodsShopCost
      goodsQtt: getRandom(1, 1000),
      goodsSellQtt: getRandom(1, 1000),
      realFileNm : faker.company.name(),
      goodsClsDt: faker.date.month(),
      goodsShopCost: shopcost(1, 3),
      goodsDesc: faker.color.rgb(),
      goodsImgPath : "",
    }));

  //   const setGoodsTalbe = useEffect(() => {
  //    console.log("실행");
  //   test();
    
  //   async function test() {
  //     console.log("실행");
  //     await Terminal.merchantList(list)
  //       .then((res) => { console.log(res) })
  //     .catch((err) => {console.log(err) });
  //   }
    
    
  // },[]);

  
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
    
  return <PayBack columns={columns} list={list}> </PayBack>;
}