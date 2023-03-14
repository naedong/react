import React from "react";
import './test.css'; 


export default function funa() {
    return (
        <div className="product_container" style={{
          
      }}>
            <div className="product">
                <div className="product_img_div"><img src="./asset/image/logo.png" alt="로고" className="logos"></img></div>
                <h5 className="product_title"> 상품 제목</h5>
                <p className="product_des"> 상품 내용 요약</p>
                <div className="product_mon"> 월 : 15,000￦</div>
                {/* <div className="product_link_div"><Link className="product_link" to="/product"> 구독하러가기</Link></div> */}
            </div>
      </div>

    );
}