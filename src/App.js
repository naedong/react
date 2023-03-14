import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { instance } from "./component/axios/CustomAxios";
import Terminal from "./component/axios/Terminal";
import { async } from "@firebase/util";

const ChageTable = lazy(() => import("./component/moneyChage/ChageTable"));
const Login = lazy(() => import("./component/login/signin/Login"));
const Navbar = lazy(() => import("./component/nav/Navbar"));
const Main = lazy(() => import("./component/main/Main"));
const PayBoard = lazy(() => import("./component/sell/moneypay/PayBoard"));
const BoardPay = lazy(() => import("./component/trade/Boardpay"));

function App() {
  const [loading, setLoading] = useState(false);

  const tbMembLoginDto = {
    membId: "master",
    membPwd: "master",
  };


  
  // useEffect(() => {
  //   setLoading(true);
  //   chang();
  //   async function chang() {
  //     await Terminal.defalutAdmin(tbMembLoginDto)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log("마스터 값 기입 에러");
  //         console.log(error);
  //       });
  //   }
  // }, []);

  return (
    <div className="App">
      <ul
        onChange={(e) => {
          // setData(e.target.value);
        }}
      >
        {" "}
      </ul>
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                marginTop: "50vh",
                top: "50vh",
              }}
            >
              Loading...
            </div>
          }
        >
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/main" element={<Main />}></Route>
              <Route path="/charge" element={<ChageTable />}></Route>
              <Route path="/sell" element={<PayBoard />}></Route>
              <Route path="/board" element={<BoardPay />}></Route>
              {/* <Route path="/port" element={<Payment />}></Route>  */}
            </Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          </Routes>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
