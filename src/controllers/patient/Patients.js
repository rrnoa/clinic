import React, { Component } from "react";

import ViewPatients from "src/views/patient/ViewPatients";
import apiClient from "src/services/api";
import Utils from "src/services/Utils";

class Patients extends Component {
  state = {
    pacients: [],
  };

  componentDidMount() {
    this.getPacients();
  }

  getPacients() {
    apiClient
      .get("/patients")
      .then((response) => {
        this.setState({ pacients: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <ViewPatients patients={this.state.pacients} />;
  }
}

export default Patients;
