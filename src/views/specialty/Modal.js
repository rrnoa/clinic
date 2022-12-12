import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormGroup,
  CLabel,
  CInput,
} from "@coreui/react";

const Modal = (props) => {
  const showbuttonActionHandler = () => {
    let action = null;
    if (props.operation === "add") {
      action = (
        <CButton onClick={() => props.save()} color="primary">
          Salvar
        </CButton>
      );
    } else {
      action = (
        <CButton onClick={() => props.update()} color="primary">
          Actualizar
        </CButton>
      );
    }
    return action;
  };

  return (
    <CModal show={props.showModal} onClose={() => props.switchModal(false)}>
      {console.log("MODAL", props)}
      <CModalHeader closeButton>
        <CModalTitle>Especialidade</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormGroup>
          <CLabel htmlFor="name">Nome</CLabel>
          <CInput
            id="name"
            value={props.name}
            onChange={(e) => props.changeName(e.target.value)}
            placeholder="Escreva o nome da especialidade"
          />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="description">Descripçáo</CLabel>
          <CInput
            id="description"
            value={props.description}
            onChange={(e) => props.changeDescription(e.target.value)}
            placeholder="Escreva a descripçáo da especialidade"
          />
        </CFormGroup>
      </CModalBody>
      <CModalFooter>
        {showbuttonActionHandler()}
        <CButton color="secondary" onClick={() => props.switchModal(false)}>
          Cancelar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default Modal;
