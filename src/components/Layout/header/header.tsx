import React from 'react';
import './header.scss'

interface Props {
  // props interface
}

interface State {
  // state interface
}
export class Header extends React.Component<Props, State> {
  render () {
    return (<div className="header-container">
      <div className="header">
        <a href="#" className="title">Vietnam lunar calendar</a>
        <div className="header-right">
          <a href="/home">Home</a>
          <a href="/login">Login</a>
          <a href="/about">About</a>
        </div>
      </div>
    </div>);
  }
}
