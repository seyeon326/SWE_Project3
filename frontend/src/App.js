import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MyShop from './pages/MyShop';
import Wish from './pages/Wish';
import Viewed from './pages/Viewed';
import Talk from './pages/Talk';
import CustCenter from './pages/CustCenter';
import FAQ from './pages/FAQ';
import ViewFAQ from './pages/ViewFAQ';
import WriteFAQ from './pages/WriteFAQ';
import Notice from './pages/Notice';
import ViewNotice from './pages/ViewNotice';
import WriteNotice from './pages/WriteNotice';
import QnA from './pages/QnA';
import ViewQnA from './pages/ViewQnA';
import WriteQnA from './pages/WriteQnA';
import Sell from './pages/Sell';
import MyPage from './pages/MyPage';

import './App.css';

const Body = styled.div`
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <Body style={{marginBottom: '500px'}}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/myshop' element={<MyShop />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/viewed' element={<Viewed />} />
          <Route path='/talk' element={<Talk />} />
          <Route path='/custcenter' element={<CustCenter />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/viewFAQ/:data' element={<ViewFAQ />} />
          <Route path='/writeFAQ' element={<WriteFAQ />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/viewNotice/:data' element={<ViewNotice />} />
          <Route path='/writeNotice' element={<WriteNotice />} />
          <Route path='/QnA' element={<QnA />} />
          <Route path='/viewQnA/:data' element={<ViewQnA />} />
          <Route path='/writeQnA' element={<WriteQnA />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </Body>
    );
  }
}
export default App;