import React from 'react'
class Hello extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello {this.props.name}
          <p>
            
          </p>
        </header>
      </div>
    );
  }
}
export default Hello;