import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CImg,
  CLink,
} from "@coreui/react";

const fields = [
  {
    key: "photo",
    label: "Photo",
    sorter: false,
    _style: { width: "100px" },
  },
  {
    key: "name",
    label: "Nome",
  },
  {
    key: "bi",
    label: "bi",
  },
  {
    key: "telf",
    label: "Telefone",
  },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];

const Doctors = (props) => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Lista de doutores</CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.doctors}
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
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CLink to={"/doctor/" + item.id}>Detalhes</CLink>
                      </td>
                    );
                  },
                  photo: (item) => {
                    return (
                      <td>
                        <div
                          className="c-avatar"
                          style={{ margin: "auto", display: "block" }}
                        >
                          {item.photo !== null ? (
                            <CImg
                              src={item.photo}
                              className="c-avatar-img"
                              alt="Photo"
                            />
                          ) : null}
                        </div>
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Doctors;
