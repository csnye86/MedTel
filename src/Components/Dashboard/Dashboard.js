
import React, { Component } from 'react'
import PatientInfo from './PatientInfo/PatientInfo'
import Results from './Results/Results';

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className = "dashboard">
        
        <div className="dashboardLeftColumn">
          <PatientInfo />
          <Results/>
        </div>
        
        <div className="dashboardRightColumn">
          <PatientInfo />
        </div>
        

      </div>
    )
  }
}
