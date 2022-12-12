import React, { Component } from "react";

import Doctors from "src/views/doctor/Doctors";
import apiClient from "src/services/api";

class DoctorBuilder extends Component {
  state = {
    doctors: [],
  };

  componentDidMount() {
    this.getDoctors();
  }

  getDoctors() {
    apiClient
      .get("/doctors")
      .then((response) => {
        this.setState({ doctors: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <Doctors doctors={this.state.doctors} />;
  }
}

export default DoctorBuilder;
