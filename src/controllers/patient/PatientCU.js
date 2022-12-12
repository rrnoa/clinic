import React, { Component } from "react";

import apiClient from "src/services/api";
import PatientForm from "src/views/patient/PatientForm";
class PatientCU extends Component {
  state = {
    operation: "add",
    patient: {
      name: "",
      bi: "",
      telf: "",
      sex: "",
      email: "",
      enable: true,
      morada: "",
      municipio: "",
      provincia: "",
      born_at: "",
    },
    patientId: "",
    saving: false,
    allDiseas: [],
    diseasText: "",
    diseasSuggestions: [],
    patientDiseas: [], //las que ya tiene
    newPatientDiseas: [], //las que voy a agregar
    currentDiseasId: "",
    currentDiseasDesc: "",
  };

  componentDidMount() {
    this.loadDiseas();
    if (this.props.match.params.id) {
      this.getPatient(this.props.match.params.id);
      this.setState({ operation: "view" }); //si viene de la lista
    } else {
      this.setState({ operation: "add" }); //si viene a insertar uno nuevo
    }
  }

  loadDiseas() {
    apiClient
      .get("/diseas")
      .then((response) => {
        this.setState({ allDiseas: response.data });
        console.log(this.state.allDiseas);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  switchOperationHandler(op) {
    this.setState({ operation: op });
  }

  getPatient(id) {
    apiClient
      .get("/patients/" + id)
      .then((response) => {
        this.setState({ patient: response.data });
        console.log(this.state.patient);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  nameChangeHandler(name) {
    this.setState({
      patient: { ...this.state.patient, name: name },
    });
  }

  emailChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, email: text },
    });
  }

  bornChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, born_at: text },
    });
    console.log(this.state.patient.born_at);
  }

  enableChangeHandler() {
    this.setState((prev) => {
      return {
        patient: { ...this.state.patient, enable: !prev.patient.enable },
      };
    });
  }

  biChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, bi: text },
    });
  }

  sexChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, sex: text },
    });
  }

  telfChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, telf: text },
    });
  }

  moradaChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, morada: text },
    });
  }

  diseasDescChangeHandler(text) {
    this.setState({ currentDiseasDesc: text });
  }

  municipioChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, municipio: text },
    });
  }

  provinciaChangeHandler(text) {
    this.setState({
      patient: { ...this.state.patient, provincia: text },
    });
  }
  //cuando se escribe sobre del input que contiene la enfermedad
  diseasChangeHandler(text) {
    let matches = [];
    if (text.length > 1) {
      matches = this.state.allDiseas.filter((dis) => {
        return dis.description.includes(text);
      });
    }

    this.setState({ diseasText: text });
    this.setState({ diseasSuggestions: matches });
  }

  //cuando se le da click a un item de la lista de sugerencias de enfermedades
  onSuggestionHandler(sug) {
    if (sug) {
      //para comprobar si seleccion'o de la lista o dio click en otra parte
      this.setState({ currentDiseasId: sug.id }); //id de la enfermedad seleccionada
      this.setState({ diseasText: sug.description + "  (" + sug.code + ")" });
    }

    this.setState({ diseasSuggestions: [] });
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
      .post("/patients", this.state.patient)
      .then((response) => {
        this.setState({ patientId: response.data.id });
        console.log(response);
        console.log("save()", this.state.patientId);
        this.setState({ saving: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  savePatientDisseas() {
    if (this.state.newPatientDiseas.length !== 0) {
      this.state.newPatientDiseas.forEach((item) => {
        console.log(item);
      });
      //apiClient.post()
    }
  }

  //agregar enfermedades a la lista que las muestra

  //Obtener las enfermedades insertadas
  getPatientDiseas() {
    apiClient
      .get("/patients/" + this.state.patient.id + "/diseas")
      .then((response) => {
        this.setState({ patientDiseas: response.data });
        console.log("getPatientDiseas() ", this.state.patientDiseas);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  diseasTabHandler() {
    this.getPatientDiseas();
  }

  //Agregar los ids de las nuevas enfermedaes a la lista
  pushPatientDiseasHandler() {
    if (this.state.currentDiseasId !== "")
      this.setState(
        {
          newPatientDiseas: [
            ...this.state.newPatientDiseas,
            this.state.currentDiseasId,
          ],
        },
        () => {
          console.log(this.state.newPatientDiseas);
        }
      );

    this.setState({ diseasText: "" });
    this.setState({ currentDiseasId: "" });
    this.setState({ currentDiseasDesc: "" });
  }

  update() {
    this.setState({ saving: true });
    apiClient
      .put("/patients/" + this.state.patient.id, this.state.patient)
      .then((response) => {
        this.setState({ saving: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <PatientForm
        patient={this.state.patient}
        saving={this.state.saving}
        switchOperation={(op) => this.switchOperationHandler(op)}
        operation={this.state.operation}
        enable={this.state.patient.enable}
        diseasSuggestions={this.state.diseasSuggestions}
        diseasText={this.state.diseasText}
        currentDiseasDesc={this.state.currentDiseasDesc}
        save={() => this.saveHandler()}
        nameChange={(t) => this.nameChangeHandler(t)}
        biChange={(t) => this.biChangeHandler(t)}
        sexChange={(t) => this.sexChangeHandler(t)}
        telfChange={(t) => this.telfChangeHandler(t)}
        emailChange={(t) => this.emailChangeHandler(t)}
        moradaChange={(t) => this.moradaChangeHandler(t)}
        municipioChange={(t) => this.municipioChangeHandler(t)}
        provinciaChange={(t) => this.provinciaChangeHandler(t)}
        enableChange={() => this.enableChangeHandler()}
        bornChange={(t) => this.bornChangeHandler(t)}
        diseasChange={(t) => this.diseasChangeHandler(t)}
        onSuggestion={(t) => this.onSuggestionHandler(t)}
        pushPatientDiseas={(p) => this.pushPatientDiseasHandler(p)}
        diseasDescChange={(t) => this.diseasDescChangeHandler(t)}
        diseasTab={() => this.diseasTabHandler()}
      />
    );
  }
}
export default PatientCU;
