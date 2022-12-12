import React, { Component } from "react";

import apiClient from "src/services/api";
import DoctorForm from "src/views/doctor/DoctorForm";
class DoctorCU extends Component {
  state = {
    operation: "add",
    doctor: {
      name: "",
      bi: "",
      telf: "",
      sex: "",
      specialty_id: "",
      photo: "",
      email: "",
      enable: true,
      morada: "",
      municipio: "",
      provincia: "",
      born_at: "",
    },
    specialties: [],
    edad: 0,
    saving: false,
  };
  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      this.getDoctor(this.props.match.params.id);
      this.setState({ operation: "view" }); //si viene de la lista
    } else {
      this.setState({ operation: "add" }); //si viene a insertar uno nuevo
    }

    this.getSpecialties();
  }

  onDropPhotoHandler(pictureFiles, pictureDataURLs) {
    this.setState({
      doctor: { ...this.state.doctor, photo: pictureDataURLs[0] },
    });
  }

  getSpecialties() {
    apiClient
      .get("/specialties")
      .then((response) => {
        this.setState({ specialties: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDoctor(id) {
    apiClient
      .get("/doctors/" + id)
      .then((response) => {
        this.setState({ doctor: response.data });
        console.log(this.state.doctor);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveHandler() {
    if (this.state.operation === "add") {
      this.save();
    } else {
      this.update();
    }
  }

  save() {
    this.setState({ saving: true });
    apiClient
      .post("/doctors", this.state.doctor)
      .then((response) => {
        this.setState({ saving: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  update() {
    this.setState({ saving: true });
    apiClient
      .put("/doctors/" + this.state.doctor.id, this.state.doctor)
      .then((response) => {
        this.setState({ saving: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  switchOperationHandler(op) {
    this.setState({ operation: op });
  }

  nameChangeHandler(name) {
    this.setState({
      doctor: { ...this.state.doctor, name: name },
    });
  }

  emailChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, email: text },
    });
  }

  bornChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, born_at: text },
    });
    console.log(this.state.doctor.born_at);
  }

  enableChangeHandler() {
    this.setState((prev) => {
      return {
        doctor: { ...this.state.doctor, enable: !prev.doctor.enable },
      };
    });
  }

  biChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, bi: text },
    });
  }

  sexChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, sex: text },
    });
  }

  telfChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, telf: text },
    });
  }

  specialtyChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, specialty_id: text },
    });
  }

  moradaChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, morada: text },
    });
  }

  municipioChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, municipio: text },
    });
  }

  provinciaChangeHandler(text) {
    this.setState({
      doctor: { ...this.state.doctor, provincia: text },
    });
  }

  render() {
    return (
      <DoctorForm
        doctor={this.state.doctor}
        saving={this.state.saving}
        specialties={this.state.specialties}
        switchOperation={(op) => this.switchOperationHandler(op)}
        onDropPhoto={(pictureFiles, pictureDataURLs) => {
          this.onDropPhotoHandler(pictureFiles, pictureDataURLs);
        }}
        operation={this.state.operation}
        enable={this.state.doctor.enable}
        save={() => this.saveHandler()}
        nameChange={(t) => this.nameChangeHandler(t)}
        biChange={(t) => this.biChangeHandler(t)}
        sexChange={(t) => this.sexChangeHandler(t)}
        telfChange={(t) => this.telfChangeHandler(t)}
        specialtyChange={(t) => this.specialtyChangeHandler(t)}
        emailChange={(t) => this.emailChangeHandler(t)}
        moradaChange={(t) => this.moradaChangeHandler(t)}
        municipioChange={(t) => this.municipioChangeHandler(t)}
        provinciaChange={(t) => this.provinciaChangeHandler(t)}
        enableChange={() => this.enableChangeHandler()}
        bornChange={(t) => this.bornChangeHandler(t)}
      />
    );
  }
}

export default DoctorCU;
