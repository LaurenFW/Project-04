import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

  componentDidMount() {
    axios.get('api/cruises')
      .then(res => this.setState({ cruises: res.data }))
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)