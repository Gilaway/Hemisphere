import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {

    //Conventional method to initialize State
    /*
    constructor(props) {
        super(props);
        this.state = {latitude: null, errorMessage: ''}
    }*/
    //Shorter way to initialize State
    state = {latitude: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //ALWAYS USE setState TO UPDATE State
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude) {
            return <div><HemisphereDisplay latitude={this.state.latitude} /></div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)