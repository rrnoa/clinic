import React, { useState, useEffect } from "react";
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
import apiClient from "src/services/api";

const Diseases = () => {
  const [modal, setModal] = useState(false);
  const [danger, setDanger] = useState(false);
  const [records, setRecords] = useState({ data: [], update: true });
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [idItem, setidItem] = useState("");

  //Para saber cual operacion mostrar en le
  const [operation, setOperationState] = useState("add");

  useEffect(() => {
    apiClient
      .get("/diseas")
      .then((response) => {
        console.log(response);
        setRecords((s) => ({ ...s, data: response.data }));
        console.log(records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [records.update]);

  const fields = [
    "code",
    "description",
    {
      key: "operations",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const saveHandler = () => {
    apiClient
      .post("/diseas", {
        code: code,
        description: desc,
      })
      .then((response) => {
        setRecords((s) => ({ ...s, update: !s.update })); //actualizar lista
        setModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHandler = () => {
    apiClient
      .put("/diseas/".concat(idItem), {
        code: code,
        description: desc,
      })
      .then((response) => {
        setRecords((s) => ({ ...s, update: !s.update })); //actualizar lista
        setModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteHandler = () => {
    apiClient
      .delete("/diseas/".concat(idItem))
      .then((response) => {
        setRecords((s) => ({ ...s, update: !s.update })); //actualizar lista
        setDanger(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRecord = (id) => {
    apiClient
      .get("/diseas/".concat(id))
      .then((response) => {
        setCode(response.data.code);
        setDesc(response.data.description);
        setidItem(response.data.code);
        setModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showbuttonActionHandler = () => {
    let action = null;
    if (operation === "add") {
      action = (
        <CButton onClick={saveHandler} color="primary">
          Salvar
        </CButton>
      );
    } else {
      action = (
        <CButton onClick={updateHandler} color="primary">
          Actualizar
        </CButton>
      );
    }
    return action;
  };

  return (
    <CCard>
      <CCardHeader>
        Enfermidades
        <div
          className={"card-header-actions d-md-down-none mfe-2 c-subheader-nav"}
        >
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            onClick={() => {
              setModal(true);
              setOperationState("add");
              setCode("");
              setDesc("");
            }}
          >
            <CIcon content={freeSet.cilPlus} alt="Especialidade" />
            &nbsp;Adicionar
          </CLink>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          items={records.data}
          fields={fields}
          itemsPerPage={10}
          pagination
          scopedSlots={{
            operations: (item) => (
              <td style={{ display: "flex" }}>
                <CLink
                  style={{ margin: "0px 10px" }}
                  onClick={() => {
                    setOperationState("update");
                    getRecord(item.code);
                  }}
                >
                  <CIcon content={freeSet.cilPen} alt="Editar" />
                </CLink>
                <CLink
                  style={{ margin: "0px 10px", color: "red" }}
                  onClick={() => {
                    console.log(item.code);
                    setidItem(item.code);
                    setDanger(!danger);
                  }}
                >
                  <CIcon content={freeSet.cilXCircle} alt="Eliminar" />
                </CLink>
              </td>
            ),
          }}
        />
      </CCardBody>
      <CModal show={modal} onClose={setModal}>
        <CModalHeader closeButton>
          <CModalTitle>Enfermidade</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormGroup>
            <CLabel htmlFor="code">Code</CLabel>
            <CInput
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="A15.1"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="description">Descripçáo</CLabel>
            <CInput
              id="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tuberculose pulmonar..."
            />
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          {showbuttonActionHandler()}
          <CButton color="secondary" onClick={() => setModal(false)}>
            Cancelar
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal show={danger} onClose={() => setDanger(!danger)} color="danger">
        <CModalHeader closeButton>
          <CModalTitle>Eliminar Enfermidade</CModalTitle>
        </CModalHeader>
        <CModalBody>Desea eliminar {idItem}?</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={deleteHandler}>
            Sim
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setDanger(!danger)}>
            Não
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

export default Diseases;
