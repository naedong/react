import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import AddressScript from './AddressScript';
import { sign } from '../../../class/TbMembLogin';

const Postcode = () => {
  const open = useDaumPostcodePopup(<AddressScript></AddressScript>);

  const [zipAddr, setZipAddr] = useState("");
  const [detailAddr, setDetailAddr] = useState("");
  const [zipCd, setZipCd] = useState("");

  
  const handleComplete = (data) => {
    
      let fullAddress = data.address;  
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

 
           document.getElementById('postCd').value = data.zonecode;
                document.getElementById("yourAddress").value = fullAddress;

    setZipAddr(fullAddress);
    setZipCd(data.zonecode);

  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const detailHandler = (e) => {
    setDetailAddr(e.target.value);
    sign.TbmembSign.publicData.detailAddr = detailAddr;
        sign.TbmembSign.publicData.zipCd = zipCd;
    sign.TbmembSign.publicData.zipAddr = zipAddr;
  
  }

    return (
      <div>
            <input type="text" id='postCd' placeholder="우편 번호" />
            <input type="text" id="yourAddress" placeholder="주소" />
            <input type="text" onChange={detailHandler} value={detailAddr} id="pushAddress" placeholder="상세 주소 입력" />
    <input  value="우편주소 찾기" type='button' onClick={handleClick}></input>
   </div>
            );
};
export default Postcode;