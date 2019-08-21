import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetJob } from '../redux/actions';

import { Link } from 'react-router-dom';

class JobDetail extends Component {
  componentDidMount() {
    this.props.getJob(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container">
        <blockquote className="blockquote">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">Job title: {this.props.job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Location: {this.props.job.location}</h6>
                <p className="card-text">Description: {this.props.job.description}</p>
                <Link to="/" className="card-link">Back</Link>
              </div>
            </div>
        </blockquote>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ job: state.job })

const mapDispatchToProps = (dispatch) => ({
  getJob: (id) => dispatch(GetJob(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);