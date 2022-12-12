import React, { Component } from "react";

import Specialties from "src/views/specialty/Specialties";
import apiClient from "src/services/api";
import Modal from "src/views/specialty/Modal";

class SpecialtyBuilder extends Component {
  state = {
    specialties: [],
    id: "",
    name: "",
    description: "",
    showModal: false,
    showDanger: false,
    operation: "",
  };

  componentDidMount() {
    this.getAllSpecialties();
  }

  getAllSpecialties() {
    apiClient
      .get("/specialties")
      .then((response) => {
        this.setState({ specialties: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSpecialtyHandler(id) {
    apiClient
      .get("/specialties/".concat(id))
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  switchModalHandler(show) {
    this.setState({ showModal: show });
  }

  switchDangerHandler(show) {
    this.setState({ showDanger: show });
  }

  changeNameHandler(text) {
    this.setState({ name: text });
  }

  changeDescriptionHandler(text) {
    this.setState({ description: text });
  }

  changeOperationHandler(op) {
    this.setState({ operation: op });
  }

  saveHandler() {
    apiClient
      .post("/specialties", {
        name: this.state.name,
        description: this.state.description,
      })
      .then((response) => {
        this.getAllSpecialties();
        this.setState({ showModal: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateHandler() {
    apiClient
      .put("/specialties/".concat(this.state.id), {
        name: this.state.name,
        description: this.state.description,
      })
      .then((response) => {
        this.getAllSpecialties();
        this.setState({ showModal: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteHandler() {
    apiClient
      .delete("/specialties/".concat(this.state.id))
      .then((response) => {
        console.log("DELETE", response);
        this.getAllSpecialties();
        this.setState({ showDanger: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Specialties
          specialties={this.state.specialties}
          specialtySelected={(id) => this.getSpecialtyHandler(id)}
          switchModal={(show) => this.switchModalHandler(show)}
          showModal={this.state.showModal}
          showDanger={this.state.showDanger}
          changeOperation={(op) => {
            this.changeOperationHandler(op);
          }}
          delete={() => this.deleteHandler()}
          switchDanger={(show) => this.switchDangerHandler(show)}
        />
        <Modal
          name={this.state.name}
          description={this.state.description}
          showModal={this.state.showModal}
          switchModal={(show) => this.switchModalHandler(show)}
          changeName={(text) => this.changeNameHandler(text)}
          changeDescription={(text) => this.changeDescriptionHandler(text)}
          operation={this.state.operation}
          save={() => this.saveHandler()}
          update={() => this.updateHandler()}
        />
      </div>
    );
  }
}

export default SpecialtyBuilder;
