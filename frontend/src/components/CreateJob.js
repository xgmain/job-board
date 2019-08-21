import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PostJob } from '../redux/actions';

class CreateJob extends Component {

  state = {
    title: "",
    location: "",
    description: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.postJob(this.state)
    this.setState({
      title: "",
      location: "",
      description: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { error } = this.props

    return (
      <div className="modal fade" id="createJob" tabIndex="-1" role="dialog" aria-labelledby="createJobLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              { typeof error.status !== 'undefined' ? <div className="alert alert-danger" role="alert">{JSON.stringify(error.data)}</div> : ""}
              <div className="modal-header">
                <h5 className="modal-title" id="createJobLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container"> 
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Title</label>
                      <input type="text" 
                            name="title" 
                            className="form-control col-sm-10" 
                            placeholder="Please enter job title" 
                            value={this.state.title}
                            onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Location</label>
                      <input type="text" 
                            name="location" 
                            className="form-control col-sm-10" 
                            placeholder="Please enter job location"
                            value={this.state.location}
                            onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label" >Description</label>
                      <textarea className="form-control col-sm-10" 
                                name="description" 
                                placeholder="Please enter job detail"
                                value={this.state.description}
                                onChange={this.handleChange}
                      ></textarea>
                    </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({ error: state.error })

const mapDispatchToProps = (dispatch) => ({ 
  postJob: (jobInfo) => dispatch(PostJob(jobInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);