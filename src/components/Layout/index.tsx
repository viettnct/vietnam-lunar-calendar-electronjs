import React from 'react';
import { Body } from './body/body';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export class Main extends React.Component<any, any> {
  render () {
    return (
      <>
        <Header/>
        <Body/>
        <Footer/>
      </>);
  }
}
