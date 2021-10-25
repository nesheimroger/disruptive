import * as React from 'react';
import './App.css';

import * as disruptive from './disruptive-api'
import * as _ from 'lodash';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount = async () => {
        var res = await disruptive.getProjects();
        this.setState({
            projects: res.projects
        })
    }

    onProjectClick = (project) => {
        alert(project.name);
    }

    render() {
        var projectList = _.map(this.state.projects, (project) => {
            return (<li onClick={(e) => this.onProjectClick(project)}>{project.displayName}</li>);
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.props.appName}</h1>
                    <ul>
                        {projectList}
                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
