import React from 'react'
import Hello from './hello'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Dashboard is in progress.... maru
       
            
            <Hello name="Maru"></Hello>
        <div style ={{marginTop: "20px"}}>
          <div className="d-flex flex-row">
            <button className='btn btn-primary mr-2'>Kaleb</button>
            <button className='btn btn-primary mr-2'>maru</button>
          </div>

        </div>
        </header>
      </div>
      
    );
  }
}
export default Dashboard;