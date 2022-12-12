import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CLink,
} from "@coreui/react";
import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import Moment from "react-moment";
import Utils from "src/services/Utils";

const fields = [
  "name",
  "bi",
  {
    key: "age",
    label: "Edade",
  },
  {
    key: "telphone",
    label: "Telefone",
  },
  {
    key: "registered",
    label: "Registrado",
  },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];

const ViewPatients = (props) => {
  console.log(props);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Lista de pacientes</CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.patients}
                fields={fields}
                sorter
                hover
                itemsPerPageSelect
                itemsPerPage={7}
                columnFilter
                striped
                bordered
                size="sm"
                pagination
                scopedSlots={{
                  registered: (item) => (
                    <td>
                      <Moment fromNow>{item.created_at}</Moment>
                    </td>
                  ),
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CLink to={"/patients/" + item.id}>Detalhes</CLink>
                      </td>
                    );
                  },
                  age: (item) => <td>{Utils.getAge(item.born_at)}</td>,
                  telphone: (item) => (
                    <td>
                      <CIcon
                        className="my-2"
                        height="15"
                        content={freeSet.cilScreenSmartphone}
                      />
                      {item.telf}
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ViewPatients;
