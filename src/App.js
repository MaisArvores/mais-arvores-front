import React, { Component } from "react";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./../src/layouts/home.css";

import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main">
          <main>
            <div className="content" id="content">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
