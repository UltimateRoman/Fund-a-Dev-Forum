import React, { Component } from 'react';

class Main extends Component {
    constructor() {
      super();
      this.state = {
        search: ''
      };
    }
  
    updateSearch(event) {
      this.setState({search: event.target.value.substr(0,20)});
    }
  
    render() {
      let filteredProjects = this.props.projects.filter(
        (project) => {
          return project.tag.indexOf(this.state.search) !== -1;
        }
      );

    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.pdesc.value
                    const tag = this.ptag.value
                    const image = this.pimage.value
                    this.props.addProject(tag, description, image)
                  }}>
                  <center>
                  <h1>Add Your Project</h1>
                  <div class="form-container">
                    <input
                      id="ptag"
                      type="text"
                      ref={(input) => { this.ptag = input }}
                      className="form-control"
                      placeholder="Project Tag"
                      required />
                      <br/>
                    <textarea
                      id="pdesc"
                      type="text"
                      style={{ height: 200 }}
                      ref={(input) => { this.pdesc = input }}
                      className="form-control"
                      placeholder="Write a description of your project and requirements."
                      required />
                      <br/>
                    <input
                      id="pimage"
                      type="text"
                      ref={(input) => { this.pimage = input }}
                      className="form-control"
                      placeholder="Image link" />
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-outline-info">Add Project</button>
                  </center>
                </form>
                <br/><br/><br/><br/>
                <h1>Search and Fund Projects</h1>
                <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <p>&nbsp;</p>
                { filteredProjects.map((project, key) => {
                  return(
                    <div class="coupon" key={key} >
                      <div className="card-header">
                      <p class="badge badge-primary">{project.tag}</p>
                      <br/>
                      <img
                          className='mr-2'
                          style={{ width: 200, height: 200 }}
                          alt='Not provided'
                          src={project.image.toString()}
                      />
                      <br/>
                      <small>Developer: {project.devp}</small>
                      </div>
                      <ul id="postList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p>{project.description}</p>
                          <br/>
                        </li>
                        <li key={key} className="list-group-item py-2">
                          <small className="float-left mt-1 text-muted">
                            Funds received: {window.web3.utils.fromWei(project.fundrec.toString(), 'Ether')} ETH
                          </small>      
                          <button
                            className="btn btn-info"
                            name={project.id}
                            onClick={(event) => {
                              let fundrec = window.web3.utils.toWei('0.1', 'Ether')
                              this.props.fundProject(event.target.name, fundrec)
                            }}>
                            Fund ETH
                          </button>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </main>
          </div>
        </div>
      );
    }
  }
  
  export default Main;