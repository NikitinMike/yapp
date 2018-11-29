import * as React from "react";
import * as ReactDOM from "react-dom";


interface AppState {

}

interface AppProps {

}

class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <main>
                <h1>HELLO WORLD</h1>
            </main>

        );
    }

}

ReactDOM.render(<App />, document.getElementById("container"));