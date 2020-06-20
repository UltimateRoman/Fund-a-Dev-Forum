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
                  <div className="form-group mr-sm-2">
                    <input
                      id="pdesc"
                      type="text"
                      ref={(input) => { this.pdesc = input }}
                      className="form-control"
                      placeholder="Description"
                      required />
                      <br/>
                    <input
                      id="ptag"
                      type="text"
                      ref={(input) => { this.ptag = input }}
                      className="form-control"
                      placeholder="Tag?"
                      required />
                    <input
                      id="pimage"
                      type="text"
                      ref={(input) => { this.pimage = input }}
                      className="form-control"
                      placeholder="Image link"
                      required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Add</button>
                </form>
                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <p>&nbsp;</p>
                { filteredProjects.map((project, key) => {
                  return(
                    <div className="card mb-4" key={key} >
                      <div className="card-header">
                        <img
                          className='mr-2'
                          width='30'
                          height='30'
                          alt='Not provided'
                          src={project.image.toString()}
                        />
                        <small className="text-muted">{project.devp}</small>
                      </div>
                      <ul id="postList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p>{project.description}</p>
                          <br/>
                          <p>{project.tag}</p>
                        </li>
                        <li key={key} className="list-group-item py-2">
                          <small className="float-left mt-1 text-muted">
                            TIPS: {window.web3.utils.fromWei(project.fundrec.toString(), 'Ether')} ETH
                          </small>
                          <button
                            className="btn btn-link btn-sm float-right pt-0"
                            name={project.id}
                            onClick={(event) => {
                              let fundrec = window.web3.utils.toWei('0.1', 'Ether')
                              this.props.fundProject(event.target.name, fundrec)
                            }}
                          >
                            TIP 0.1 ETH
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