import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { DeleteJob } from '../redux/actions';

class Job extends Component {

  render() {
    const { job } = this.props

    const divStyle = {
      margin: '20px'
    }

    return (
      <div className="card" style={divStyle} key={job.id}>
        <div className="card-body">
          <h5 className="card-title"><Link to={'/detail/' + job.id} className="card-link">Job title: {job.title}</Link></h5>
          <button className="btn btn-danger" onClick={ () => this.props.deleteJob(job.id) }>Delete</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ 
  deleteJob: (id) => dispatch(DeleteJob(id))
})

export default connect(null, mapDispatchToProps)(Job)