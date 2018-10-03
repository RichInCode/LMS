import React from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../static/css/Landing.css";

class Landing extends React.Component {
    navigateTo(path) {
        if (path !== "") {
            this.props.history.push(path);
        }
    }
    render() {
        return (
          <div className="landingMain">
            <div className="loader" />
              <section className="Landing">
                <div className="layer">
                  <div className="container containeralignment">
                    <div className="col-lg-12 col-md-12 colsm-12 col-xs-12 text-center heading">
                      <h2 className="mainheading">Lead Management System</h2>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <p className="lead subtext">
                          <strong>
                            {" "}
                            Welcome to LMS <br />
                            <b>To get started</b> please select click below:
                          </strong>
                        </p>
                        <Button
                          className="btnlanding btn--primary inner-link btn--start"
                          onClick={this.navigateTo.bind(this, "lead/entry")}
                        >
                          <span className="btn__text">ADD LEADS</span>
                        </Button>
                        <Button
                          className="btnlanding btn--primary inner-link btn--start"
                          onClick={this.navigateTo.bind(this, "lead/view")}
                        >
                          <span className="btn__text">VIEW LEADS</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        );
    }
}

export default withRouter(Landing);
