import React from 'react';
import './body.scss';
import { RouterBody } from '../../../router-body';

interface Props {
  // props interface
}

interface State {
  // state interface
}

export class Body extends React.Component<Props, State> {
  render () {
    return (<div className="body-container">
      <RouterBody/>
    </div>);
  }
}
