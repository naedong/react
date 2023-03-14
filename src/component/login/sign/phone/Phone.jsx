import { ProviderId } from "firebase/auth";
import React, { memo, useCallback, useState } from "react";
import { Provider } from "react-redux";
import Select from "react-select";
import './PhoneCss.css';
import { sign } from "../../../../class/TbMembLogin";
import Terminal from "../../../axios/Terminal";
import Check from "../Check";
import '../SignInputCss.css';

import { Phone } from "../../../../class/Phone";



export default function PhoneCheck() {
    const [phone, setPhone] = useState("010");
    const [ptag, setPtag] = useState(false);
    const [phone1, setPhone1] = useState("");
 const [phone2, setPhone2] = useState("");
  const [check, setCheck] = useState("");


 

    const options = [
  { value: '010', label: '010' },
  { value: '012', label: '012' },
  { value: '017', label: '017' }
    ]
    
      const onChange = (value) => {
          setPhone(
            value
        )
  }
const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, '');
        setPhone1(result);
  };
   
const handler = (event) => {
    const result = event.target.value.replace(/\D/g, '');
        setCheck(result);
  };

  
const handleChangeAge = (event) => {
    const result = event.target.value.replace(/\D/g, '');
    setPhone2(result);
  }; 
  


  const CheckNumber = async () => {
    Phone.certificationNumber = check;
    await Terminal.checkNumber(Phone)
      .then((res) => {
        res.data === true ? alert("인증 확인이 되었습니다.") : alert("인증 실패");
      }).catch((error) => {
        console.log(error);
        alert(" 홈페이지 에러");
    })
  }

    
    const SendNumber = async () => {
        sign.TbmembSign.mobileNo = phone + phone1 + phone2;
        console.log(sign.TbmembSign.mobileNo);
      if (sign.TbmembSign.mobileNo.length !== 11) return alert("휴대폰 번호를 다시 한번 확인해주세요");
      Phone.phone =  sign.TbmembSign.mobileNo; 
      Phone.certificationNumber = sign.TbmembSign.mobileNo;

      await Terminal.sendNumber(Phone)
        .then((res) => { 
          res.status === 200 ? alert("인증문자 발송 완료") : alert("인증 오류");
          console.log(res);
        }).catch((error) => {
          console.log(error);
          alert("인증 오류가 발생했습니다.")
        });
    }
    
    return (
        //컴파운드 컴포넌트 패턴
                    <div className='show-cellphone'>
                            <div className='cellphone-show'>
                <Select id="select"
                    
         classNames={{
            control: (state) =>
            state.isFocused ? 'border-red-600' : 'border-grey-300',
        }}            

        styles={{ // zIndex
                        menu: provided => ({ ...provided, zIndex: 999 })
        , 
        }}
        value={options.find(op => { // choice state에 따라 디폴트 option 세팅
          return op.value === phone
        })}
        
                    
        onChange={(value) => {
          onChange(value.value);
                    }}
                    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'hotpink',
        primary75: 'blue',
      },
    })}
    
        options={options}
      />
                          <p>-</p>
                <input type="text" className="phone1"
                    onChange={handleChange}
                    value={phone1}
                     maxLength={4} placeholder="****" />
                            <p>-</p>
                <input type="text" className="phone2"
                     onChange={handleChangeAge}
                    value={phone2}
                   maxLength={4} placeholder="****" />
                            </div>


                            <div className='cellphone-button'>
                <input type='button' className="phoneSell"
                    onClick={SendNumber}
                    defaultValue='인증번호 전송'></input>
                  
                            </div>
                            <input type="text" className="phone" onChange={handler} value={check} placeholder="인증 번호" />
                            <input type='button' className="phoneSellres" onClick={CheckNumber} defaultValue='인증번호 확인'></input>
                        </div>    
    );
};