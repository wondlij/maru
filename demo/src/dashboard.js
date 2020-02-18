import React from 'react'
class Dashboard extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Showing dashboard to {this.props.name}
          <p>
            
          </p>
        </header>
      </div>
    );
  }
}
export default Dashboard