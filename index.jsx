import React from "react";
import ReactDOM from "react-dom";
import Game from './src/js/components/Game';
import "./src/css/main.scss";

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));