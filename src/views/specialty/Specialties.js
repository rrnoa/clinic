import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CLink,
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
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const Specialties = (props) => {
  /*const [danger, setDanger] = useState(false);
  const [specialties, setSpecialties] = useState({ data: [], update: true });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [idSpecialty, setidSpecialty] = useState("");*/

  //Para saber cual operacion mostrar en le
  //const [operation, setOperationState] = useState("add");

  const fields = [
    "name",
    "description",
    {
      key: "operations",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <CCard>
      <CCardHeader>
        Especialidades
        <div
          className={"card-header-actions d-md-down-none mfe-2 c-subheader-nav"}
        >
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            onClick={() => {
              props.changeOperation("add");
              props.switchModal(true);
            }}
          >
            <CIcon content={freeSet.cilPlus} alt="Especialidade" />
            &nbsp;Adicionar
          </CLink>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          items={props.specialties}
          fields={fields}
          itemsPerPage={5}
          pagination
          scopedSlots={{
            operations: (item) => (
              <td style={{ display: "flex" }}>
                <CLink
                  style={{ margin: "0px 10px" }}
                  onClick={() => {
                    props.changeOperation("update");
                    props.specialtySelected(item.id);
                    props.switchModal(true);
                  }}
                >
                  <CIcon content={freeSet.cilPen} alt="Editar" />
                </CLink>
                <CLink
                  style={{ margin: "0px 10px", color: "red" }}
                  onClick={() => {
                    props.switchDanger(true);
                    props.specialtySelected(item.id);
                  }}
                >
                  <CIcon content={freeSet.cilXCircle} alt="Eliminar" />
                </CLink>
              </td>
            ),
          }}
        />
      </CCardBody>

      <CModal
        show={props.showDanger}
        onClose={() => props.switchDanger(false)}
        color="danger"
      >
        <CModalHeader closeButton>
          <CModalTitle>Eliminar Especialidade</CModalTitle>
        </CModalHeader>
        <CModalBody>Desea eliminar esta especialidade?</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => props.delete()}>
            Sim
          </CButton>{" "}
          <CButton color="secondary" onClick={() => props.switchDanger(false)}>
            Não
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

export default Specialties;
