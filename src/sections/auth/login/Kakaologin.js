import React from 'react';
import { BrowserRouter as  Route, Routes } from "react-router-dom";
import Kakaologincallback from "./kakaologin/Kakaologincallback";


const Kakaologin = () => {
  
const REST_API_KEY = "1e48d31601f5f560eb6da4b6ea35a32b";
const REDIRECT_URI = "http://localhost:3030/auth/kakaologincallback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  return (
    <div>
    <Routes>
    <Route exact path="/auth/login">
      <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
    </Route>
    <Route path="/auth/kakaologincallback">
      <Kakaologincallback />
    </Route>
    </Routes>
    </div>
  );
};

export default Kakaologin;