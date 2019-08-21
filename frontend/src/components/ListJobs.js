import React, { Component } from 'react';
import { connect } from 'react-redux';

import Job from './Job';
import CreateJob from './CreateJob';
import { FetchJobs } from '../redux/actions';

class ListJobs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 2,
      total_page: 0
    }
  }

  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    let { jobs, total_page } = this.props
    jobs.sort( function ( a, b ) { return b.id - a.id } ) //sort jobs desc

    return (
      <div className="container">
        <CreateJob />
        {jobs.map((job) => (
          <Job job={job} key={job.id}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ jobs: state.jobs, total_page: state.total_page })

const mapDispatchtoProps = (dispatch) => ({
  fetchJobs: () => dispatch(FetchJobs(2))
})

export default connect(mapStateToProps, mapDispatchtoProps)(ListJobs);