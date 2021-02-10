import React from 'react';
import * as axios from 'axios';
import { API_ENDPOINT } from '../../constant/constans';

interface Props {
  title: string,
  description: string,
}

interface State {
  title: string,
  userId: number,
  description: string,
  datetime: string | Date,
  titleApi: string,
}

export default class About extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      datetime: 'loading',
      userId: NaN,
      titleApi: 'loading ...'
    }
    this.reloadAPI = this.reloadAPI.bind(this);
  }

  /**
   * INIT && UPDATED
   * @description this function use after init, and before render
   *
   * @param props
   * @param state
   *
   * @return object state
   */
  static getDerivedStateFromProps (props: Props, state: State) {
    return {
      title: props.title,
      description: props.description,
    }
  }

  /**
   * UPDATE
   * @description this function use after update
   *
   */
  componentDidUpdate () {
    return {
      datetime: new Date().toISOString(),
    }
  }

  /**
   * INIT
   * @description this function use after render
   * process data
   *
   * @return void
   */
  componentDidMount () {
    this.setState({
      datetime: new Date().toISOString()
    })
    axios.default({
      method: 'GET',
      url: API_ENDPOINT.ABOUT_COMPONENT.FAKE_USER,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      timeout: 10000
    }).then(res => {
      this.setState({
        userId: res.data.userId,
        titleApi: res.data.title,
      })
    }).catch(() => {
      this.setState({
        titleApi: 'Load API failed',
      })
    });
  }

  /**
   * INIT && UPDATED
   * @description render tsx to html
   */
  render () {
    return (<div className="about-container">
      <h3>Title: {this.state.title}</h3>
      <div>Description: {this.state.description}</div>
      <div>Datetime after update: {this.state.datetime}</div>
      <br/>
      <div>FAKE_API TITLE: {this.state.titleApi}</div>
      <button onClick={this.reloadAPI}>RELOAD API</button>
    </div>);
  }

  /**
   * @description this function to reload Fake API.
   */
  reloadAPI() {
    this.setState({
      titleApi: 'loading ...',
    })
    this.componentDidMount();
  }
}
