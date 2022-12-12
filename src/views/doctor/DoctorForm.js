import React, { useState, useEffect } from "react";
import {
  CForm,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CSwitch,
  CImg,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ImageUploader from "react-images-upload";
const DoctorForm = (props) => {
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              Registrar paciente
              <small> Formulário</small>
              <div className={"card-header-actions"}>
                <CSwitch
                  disabled={props.operation === "view"}
                  size={"sm"}
                  className={"mx-1"}
                  shape={"pill"}
                  color={"success"}
                  defaultChecked={props.enable}
                  onChange={() => {
                    props.enableChange();
                  }}
                />
              </div>
            </CCardHeader>
            <CCardBody>
              <CForm className="was-validated">
                <CRow style={{ paddingBottom: "20px" }}>
                  <CCol md="4">
                    <CImg
                      //src={Utils.IMG + props.doctor.photo}
                      src={props.doctor.photo}
                      width={150}
                      alt="Doutor"
                      className={"img-thumbnail"}
                    />
                    {props.operation !== "view" ? (
                      <ImageUploader
                        withIcon={false}
                        withPreview={false}
                        label=""
                        singleImage={true}
                        buttonText="Carregar"
                        onChange={props.onDropPhoto}
                        imgExtension={[".jpg", ".png"]}
                        maxFileSize={65000}
                        fileSizeError=" file size is too big"
                        defaultImage=""
                      />
                    ) : null}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6" xs="12">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="name">Nome</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          disabled={props.operation === "view"}
                          id="name"
                          placeholder="Nome"
                          required
                          value={props.doctor.name}
                          onChange={(e) => props.nameChange(e.target.value)}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="ccnumber">BI</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          disabled={props.operation === "view"}
                          id="ccnumber"
                          placeholder="00000000000000"
                          required
                          value={props.doctor.bi}
                          onChange={(e) => props.biChange(e.target.value)}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="3">
                        <CLabel htmlFor="selectSpecialties">
                          Especialidad
                        </CLabel>
                      </CCol>
                      <CCol xs="9">
                        <CSelect
                          required
                          disabled={props.operation === "view"}
                          custom
                          name="selectSpecialties"
                          id="selectSpecialties"
                          value={props.doctor.specialty_id}
                          onChange={(e) => {
                            props.specialtyChange(e.target.value);
                          }}
                        >
                          <option value="">Selecione</option>
                          {props.specialties.map((spe) => (
                            <option key={spe.id} value={spe.id}>
                              {spe.name}
                            </option>
                          ))}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="6" xs="12">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="date-input">Data de nacimento</CLabel>
                      </CCol>
                      <CCol md="6">
                        <CInput
                          required
                          disabled={props.operation === "view"}
                          type="date"
                          id="date-input"
                          name="date-input"
                          placeholder="date"
                          value={props.doctor.born_at}
                          onChange={(e) => {
                            props.bornChange(e.target.value);
                          }}
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="ccnumber">24 anos</CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="3">
                        <CLabel htmlFor="select">Sexo</CLabel>
                      </CCol>
                      <CCol md="9">
                        <CSelect
                          required
                          disabled={props.operation === "view"}
                          custom
                          name="select"
                          id="selectSex"
                          value={props.doctor.sex}
                          onChange={(e) => {
                            props.sexChange(e.target.value);
                          }}
                        >
                          <option value="">Selecione</option>
                          <option value="f">Feminino</option>
                          <option value="m">Masculino</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CTabs>
                      <CNav variant="tabs">
                        <CNavItem>
                          <CNavLink>Informação geral</CNavLink>
                        </CNavItem>
                        <CNavItem>
                          <CNavLink>Informação pessoal</CNavLink>
                        </CNavItem>
                      </CNav>
                      <CTabContent>
                        <CTabPane>
                          <CRow style={{ paddingTop: "20px" }}>
                            <CCol md="6">
                              <CFormGroup row>
                                <CCol md="3">
                                  <CLabel htmlFor="textarea-input">
                                    Morada
                                  </CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                  <CTextarea
                                    disabled={props.operation === "view"}
                                    name="textarea-input"
                                    id="textarea-input"
                                    rows="2"
                                    placeholder="Conteúdo..."
                                    value={props.doctor.morada}
                                    onChange={(e) => {
                                      props.moradaChange(e.target.value);
                                    }}
                                  />
                                </CCol>
                              </CFormGroup>

                              <CFormGroup row>
                                <CCol md="3">
                                  <CLabel htmlFor="selectSm">Município</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                  <CSelect
                                    disabled={props.operation === "view"}
                                    custom
                                    size="sm"
                                    name="selectSm"
                                    id="SelectMunicipio"
                                    value={props.doctor.municipio}
                                    onChange={(e) => {
                                      props.municipioChange(e.target.value);
                                    }}
                                  >
                                    <option value="0">Selecione</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                    <option value="4">Option #4</option>
                                    <option value="5">Option #5</option>
                                  </CSelect>
                                </CCol>
                              </CFormGroup>
                              <CFormGroup row>
                                <CCol md="3">
                                  <CLabel htmlFor="selectSm">Província</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                  <CSelect
                                    disabled={props.operation === "view"}
                                    custom
                                    size="sm"
                                    name="selectSm"
                                    id="SelectProvincia"
                                    value={props.doctor.provincia}
                                    onChange={(e) => {
                                      props.provinciaChange(e.target.value);
                                    }}
                                  >
                                    <option value="0">Selecione</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                    <option value="4">Option #4</option>
                                    <option value="5">Option #5</option>
                                  </CSelect>
                                </CCol>
                              </CFormGroup>
                            </CCol>
                            <CCol md="6">
                              <CRow>
                                <CCol xs="12">
                                  <CFormGroup row>
                                    <CCol md="3">
                                      <CLabel htmlFor="name">Telefone</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                      <CInput
                                        disabled={props.operation === "view"}
                                        id="telefone"
                                        placeholder="+244 923 234 234"
                                        required
                                        value={props.doctor.telf}
                                        onChange={(e) => {
                                          props.telfChange(e.target.value);
                                        }}
                                      />
                                    </CCol>
                                  </CFormGroup>
                                </CCol>
                              </CRow>
                              <CRow>
                                <CCol xs="12">
                                  <CFormGroup row>
                                    <CCol md="3">
                                      <CLabel htmlFor="email-input">
                                        Email
                                      </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                      <CInput
                                        disabled={props.operation === "view"}
                                        type="email"
                                        id="email-input"
                                        name="email-input"
                                        placeholder="Digite o e-mail"
                                        autoComplete="email"
                                        value={props.email}
                                        onChange={(e) => {
                                          props.emailChange(e.target.value);
                                        }}
                                      />
                                    </CCol>
                                  </CFormGroup>
                                </CCol>
                              </CRow>
                            </CCol>
                          </CRow>
                        </CTabPane>
                        <CTabPane></CTabPane>
                      </CTabContent>
                    </CTabs>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter>
              {props.operation !== "view" ? (
                <CButton
                  disabled={props.saving}
                  type="submit"
                  size="sm"
                  color="primary"
                  onClick={() => props.save()}
                >
                  {props.saving ? (
                    <CSpinner variant="grow" size="sm" aria-hidden="true" />
                  ) : (
                    <CIcon name="cil-scrubber" />
                  )}{" "}
                  Salvar
                </CButton>
              ) : (
                <CButton
                  type="submit"
                  size="sm"
                  color="primary"
                  onClick={() => props.switchOperation("edit")}
                >
                  <CIcon name="cil-scrubber" /> Editar
                </CButton>
              )}
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default DoctorForm;
