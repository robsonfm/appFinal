/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import '../common/template/dependences';

import React from 'react';

import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';

export default () => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);
