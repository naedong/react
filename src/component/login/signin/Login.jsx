import React, { Component, useState } from 'react';
import NameEmail from '../sign/name/NameEmail';
import { useLocation } from 'react-router-dom';
// import loingpng from './login.png';
import './Login.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import InputLogin from './InputLogin';
import Balls from '../../nav/Ball';
import Address from '../sign/Address';
import SignInput from '../sign/SignInput';
import PasswordInput from '../sign/password/Password';
import PhoneCheck from '../sign/phone/Phone';
import SignUpInput from '../sign/signup/SignUpInput';

// import OilPainting from './Painting';

 
// 컴파운드 컴포넌트 패턴 
class Login extends Component {
    constructor() {
        super();
        this.state = {
            setPattern: true,
            signUpValue: {email:"", name:"", password:"", phone: ""},
            isputValue: { idValue: '', pwdValue: '' },
            isButtonOn: false,
        };
    }
    
    

    setInputPattern = () => {
        this.setState(
            state => ({
            setPattern: !state.setPattern
        })
        );     
    };
        

    // inputChangeHandler = (e) => {
    //     const { name, value } = e.target;
        
    //        this.setState({ ...this.signUpValue, [e.target.name]: e.target.value });
    //    };
    

    handleAbleButton = () => {
    const { isputValue } = this.state;
    this.setState({
      isButtonOn:
        this.state.isputValue.idValue.includes('@') &&
            this.state.isputValue.pwdValue.length >= 8, //위조건을 만족시 true리턴
        
    });
    };
    

    inputHandler = (e) => {
     //   const { name, values } = e.target;
        this.setState({
            signUpValue: { ...this.signUpValue, [ e.target.name ]: e.target.value }
        });
    }
    
 handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      isputValue: { ...this.state.isputValue, [name]: value },
    });
  };
      componentDidUpdate(prevProps, prevState) {
    if (this.state.isputValue !== prevState.isputValue) {
      this.handleAbleButton();
          }
          
  }
    
    componentDidMount() {
   //animation code
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    
    
    
    $('input[type="radio"]').on('change',function() {
       
        if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            
            $('.white-panel').removeClass('right-log');
            
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
            
        }
    });
});
  }
 
    render() {


    return (
     
        <div className="backgroundima">
             {/*
            <div className="example-panel" >
                <OilPainting></OilPainting>
            
                <h1>로그인시 본 홈페이지 이용이 가능합니다.</h1>
</div>  */}
            <Balls/>
        

            <div className="login-reg-panel">
                
            <div className="login-info-box">
                <h2>아이디가 있습니까?</h2>
                <p>로그인 하러 가기</p>
                <label id="label-register" htmlFor="log-reg-show">로그인</label>
                    {/* <img src={loingpng}  className="login-imgs" alt='로그인 이미지'></img> */}
                    <input type="radio"  name="active-log-panel" id="log-reg-show" value="log-reg-show" />
                    
            </div>
                        
            <div className="register-info-box">
                <h2>아이디가 없습니까?</h2>
                <p>회원가입 하러 가기</p>
                    <label id="label-login" htmlFor="log-login-show">회원가입</label>
                      {/* <img src={loingpng} className="sign-imgs" alt='로그인 이미지'></img> */}
                <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
            </div>
                        
            <div className="white-panel">
                <div className="login-show">

                           <InputLogin></InputLogin>
                        {/* <p>로그인 API 사용구역</p>  */}
                </div>
                <div className="register-show">
                <h2>REGISTER</h2>
                        <div className='show-id'> 
                            <div className='id-show'>
                                
                                <SignInput>
                                    
                                </SignInput>
                            </div>
                        </div>
                        <div className='pwd-show'>
                            
                <PasswordInput></PasswordInput>
                        </div>
{/*                                 
                                <SignInput
                                     label={"Email"}
                                    text={"아이디를 입력하세요 (*) - 필수"}
                                    type={"email"}
                                    name={"email"}
                                    className={"email-show"}
                                    changeHandler={this.inputChangeHandler}
                                    onBlur={emailPattern}
                                    onChange={this.inputChangeHandler}
                                    value={this.state.signUpValue.email}
                                    errorMassage={"이메일 형식이 맞지않습니다."}
                                    setPattern={this.setInputPattern}
                                ></SignInput>
                                <CheckId
                                    value={this.state.signUpValue.email}
                                    errorMassage={"이메일 형식이 맞지않습니다."}
                                    
                                ></CheckId> */}
                                
                            
                            {/* <div className='id-show'>
                            <input type="text" placeholder="ID" />
                            </div>
                            <div className='button-show'>
                            <input type="button" value="아이디 인증" />
                            </div>
                                     */}


                                   
                        <NameEmail></NameEmail>
                        <div>
                            <PhoneCheck></PhoneCheck>
                          </div>
                         <Address></Address> 
                      
                        
                        <div className='submits'>

                             <SignUpInput></SignUpInput>        
                        </div>

              
                </div>
            </div>
          
            </div>
            
            </div>
     
      
)
};
    }
    
export default Login;