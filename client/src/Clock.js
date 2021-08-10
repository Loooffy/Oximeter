import ReactDOM from 'react-dom';
import React from 'react';

const earlyColor = {
  color: 'steelblue'
}

const lateColor = {
  color: 'red'
}

const IsLate = () => {
  return (
    <h3 style={lateColor}> You are late!</h3>
  )
}

const IsEarly = () => {
  return (
    <h3 style={earlyColor}> You are Early!</h3>
  )
}

const LateCheck = () => {
  const isLate = new Date > new Date('2021-03-20T18:17:30')
  if (isLate) {
    return <IsLate />
  } else {
    return <IsEarly />
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state={date: new Date()}
  }

  componentDidMount() {
    this.timerID=setInterval(
      ()=>this.tick(),
      1000
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <LateCheck />
      </div>
    )
  }
}

export default Clock
