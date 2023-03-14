import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { moneyCharge, moneyCheck, moneyTrade } from '../../class/cash';
import MoneyTerminal from '../axios/MoneyTerminal';
import Terminal from '../axios/Terminal';
import app from '../login/sign/config';

export default function Payment (props){
    const [loading, setLoading] = useState();

  
  

  console.log(`전달값 => ${props.value}`);
    useEffect(() => {
        setLoading(false)
        return () => getToken();
    }, [loading]);
    
    const getToken = async () => {
        setLoading(true);
        await Terminal.getPayToken().then((res) => {
            console.log(res.data);
            Token.token = res.data;
            console.log(Token.token);
        }).catch((err) => { });
    };

  
  
    const onClickPayment =  async(() => {
       
        const userCode = 'imp61212647';
        const restKey = '0453567671052033';
        const impSecret = 'kwyFqKiOwSOnbJuDGRTnlO8foJKJAhXhrWNXVJLaRfsPEqfYHGMyCPRSDHaVocEp0AZwr420hnvB85j8';

        /* 2. 결제 데이터 정의하기 */
        const data = {
            pg: 'html5_inicis',                           // PG사
            pay_method: props.payM != null ? props.payM : "card",                           // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
            amount:  props.value == null ? props.buyAmt : props.value,                                 // 결제금액
            name: props.name != null ? props.name : "개인주문",                  // 주문명
            buyer_name: props.myNm != null ? props.myNm : "",                           // 구매자 이름
            buyer_tel: props.myTelNo != null ? props.myTelNo : "",                     // 구매자 전화번호
            buyer_email: props.myEmail != null ? props.myEmail : "",               // 구매자 이메일
            buyer_addr: props.addr != null ? props.addr : "",                    // 구매자 주소
            buyer_postcode: props.zipcd != null ? props.zipcd : "",                      // 구매자 우편번호
   
        };

        if (isReactNative()) {
            /* 5. 리액트 네이티브 환경에 대응하기 */
            const params = {
                userCode: userCode,                                   // 가맹점 식별코드
                data: data,                                       // 결제 데이터
                type: 'payment',                            // 결제와 본인인증 구분을 위한 필드
            };
            const paramsToString = JSON.stringify(params);
            window.ReactNativeWebView.postMessage(paramsToString);
        } else {
            /* 1. 가맹점 식별하기 */
            const { IMP } = window;
            IMP.init(userCode);
            /* 4. 결제 창 호출하기 */
            IMP.request_pay(data, callback);
        }
    });

  /* 3. 콜백 함수 정의하기 */
 
    const callback = (response) => {
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;
    
        if (success) {
        alert('결제 성공');
          console.log(merchant_uid);
          console.log(success);
          console.log(response);
          console.log(response.paid_amount);
          console.log(response.imp_uid);
          moneyTrade.transferAmt = response.paid_amount;
          moneyTrade.payTransferNo = response.imp_uid;
          moneyCharge.payTransferNo = response.imp_uid;
          moneyCharge.transferAmt = response.paid_amount;
          if (props.buyAmt == null) {
         // props.myNm == null ? updatePay() : null; 
            updatePay();
          }
          else {
            moneyTreade();
          }
          } else {
        alert(`결제 실패: ${error_msg}`);
        } 
    }

  const updatePay = async () => {
    moneyCharge.membId = localStorage.getItem("id");
    console.log(moneyCheck.now);
    console.log(moneyCharge);
    await MoneyTerminal.ChargeMoney(moneyCharge).then((res) => {
      console.log(res);
    })
      .catch((err) => { console.log(err) });

  }
  
  const moneyTreade = async () => {
    console.log(props);
    console.log(localStorage.getItem("id"));
  
    moneyTrade.membId = localStorage.getItem("id");
    moneyTrade.buyQtt = props.buyQtt;
    moneyTrade.buyAmt = props.buyAmt;
    moneyTrade.goodsAmt = props.goodsAmt;
    moneyTrade.goodsNm = props.goodsNm;
    moneyTrade.goodsModelNo = props.goodsModelNo;
    console.log(moneyTrade);
    
    await MoneyTerminal.buySell(moneyTrade).then((res) => {
      console.log(res)
    })
      .catch((err) => { console.log(err) });

  }


  // const needUpdate = useEffect( async function() {
  //   await axios.get("login/getId", JSON.stringify(moneyCharge.membId))
  //     .then((res) => {
        
  //       console.log('effet+체킹');
  //       console.log(res);
  //      })
  //   .catch((err) => {})

  // }, [])

  function isReactNative() {
    /*
      리액트 네이티브 환경인지 여부를 판단해
      리액트 네이티브의 경우 IMP.payment()를 호출하는 대신
      iamport-react-native 모듈로 post message를 보낸다

      아래 예시는 모든 모바일 환경을 리액트 네이티브로 인식한 것으로
      실제로는 user agent에 값을 추가해 정확히 판단해야 한다
    */

    return false;
    }
    

  return (
    <div>
    
    { props.goodsNm == null ?  <button className='portButton' onClick={onClickPayment}>충전하기</button> : <button className='portButton' onClick={onClickPayment}>결제하기</button>} 
  </div>
  );
}