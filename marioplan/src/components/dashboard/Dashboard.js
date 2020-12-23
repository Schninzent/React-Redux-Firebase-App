import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    //holt das projects property aus den props direkt raus
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            //übergibt das projects property an die ProjectsList Funktion
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

//auf state von store zugreifen
const mapStateToProps = (state) => {
  return {
    //neues Objekt erstellen um die Projekte aus dem Store zu speichern
    //Dieses Objekt representiert die properties welche an die props der Dashboard component zugefügt wurden
    projects: state.project.projects,
  };
};
//Store mit Dashboard verbinden -- mapStateToProps in connect geben damit es weiß welche Daten geholt werden müssen
export default connect(mapStateToProps)(Dashboard);
