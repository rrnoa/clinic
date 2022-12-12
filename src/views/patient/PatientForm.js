import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CTextarea,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CLabel,
  CSelect,
  CRow,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CListGroup,
  CListGroupItem,
  CSwitch,
  CLink,
  CBadge,
  CSpinner,
  CForm,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import Utils from "src/services/Utils";
import "./custom.css";

const PatientForm = (props) => {
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
                <CRow>
                  <CCol md="6" xs="12">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="name">Nome</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="name"
                          disabled={props.operation === "view"}
                          placeholder="Nome"
                          required
                          value={props.patient.name}
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
                          id="ccnumber"
                          disabled={props.operation === "view"}
                          placeholder="00000000000000"
                          required
                          value={props.patient.bi}
                          onChange={(e) => props.biChange(e.target.value)}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="date-input">Data de nacimento</CLabel>
                      </CCol>
                      <CCol md="6">
                        <CInput
                          disabled={props.operation === "view"}
                          type="date"
                          id="date-input"
                          name="date-input"
                          placeholder="date"
                          value={props.patient.born_at}
                          onChange={(e) => {
                            props.bornChange(e.target.value);
                          }}
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="ccnumber">
                          {Utils.getAge(props.patient.born_at)} anos
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CRow>
                      <CCol xs="6">
                        <CFormGroup row>
                          <CCol xs="6">
                            <CLabel htmlFor="select">Sexo</CLabel>
                          </CCol>
                          <CCol xs="6" md="6">
                            <CSelect
                              disabled={props.operation === "view"}
                              custom
                              name="select"
                              id="select"
                              value={props.patient.sex}
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
                  </CCol>
                  <CCol md="6" xs="12">
                    <div className="p-2">
                      <CLink
                        to="/ficha/list"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilFolder} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">Processos</div>
                      </CLink>

                      <CLink
                        href="#"
                        target="_blank"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilClipboard} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">Consultas</div>
                      </CLink>
                      <CLink
                        href="#"
                        target="_blank"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilBrightness} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">Tratamientos</div>
                      </CLink>
                      <CLink
                        href="#"
                        target="_blank"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilBeaker} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">Exames</div>
                      </CLink>
                      <CLink
                        href="#"
                        target="_blank"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilChart} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">
                          Controle de sinais
                        </div>
                      </CLink>
                      <CLink
                        href="#"
                        target="_blank"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilColorBorder} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">Prescrições</div>
                      </CLink>
                      <CLink
                        to="/chrono/chrono"
                        target="_self"
                        className="d-inline-block p-2 text-center"
                      >
                        <CIcon content={freeSet.cilFork} size="xl" />
                        <CBadge
                          color="danger"
                          shape="pill"
                          style={{ position: "static" }}
                        >
                          2
                        </CBadge>
                        <div className="small text-muted">Linha do tempo</div>
                      </CLink>
                    </div>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="name">Telefone</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          disabled={props.operation === "view"}
                          id="name"
                          placeholder="+244 923 234 234"
                          required
                          value={props.patient.telf}
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
                    <CTabs>
                      <CNav variant="tabs">
                        <CNavItem>
                          <CNavLink>Informação geral</CNavLink>
                        </CNavItem>
                        <CNavItem>
                          <CNavLink
                            onClick={() => {
                              console.log("tab");
                              props.diseasTab();
                            }}
                          >
                            Doenças
                          </CNavLink>
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
                                    id="SelectLm"
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
                                    id="SelectLm"
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
                                    <CCol xs="6">
                                      <CLabel htmlFor="select">
                                        Grupo sanguineo
                                      </CLabel>
                                    </CCol>
                                    <CCol xs="6">
                                      <CSelect
                                        custom
                                        name="select"
                                        id="select"
                                        disabled={props.operation === "view"}
                                      >
                                        <option value="0">Selecione</option>
                                        <option value="A">A</option>
                                        <option value="AB">AB</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                      </CSelect>
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
                                      />
                                    </CCol>
                                  </CFormGroup>
                                </CCol>
                              </CRow>
                            </CCol>
                          </CRow>
                        </CTabPane>
                        <CTabPane>
                          <CFormGroup row style={{ paddingTop: "20px" }}>
                            <CCol md="3">
                              <CLabel htmlFor="input-doenca">Doença</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput
                                id="input-doenca"
                                name="input-doenca"
                                placeholder="Escreva o nome da doença"
                                value={props.diseasText}
                                autoComplete="off"
                                onChange={(e) => {
                                  props.diseasChange(e.target.value);
                                }}
                                onBlur={() => {
                                  setTimeout(() => {
                                    props.onSuggestion(null);
                                  }, 500);
                                }}
                              />
                              <CListGroup className="suggestions">
                                {props.diseasSuggestions &&
                                  props.diseasSuggestions.map((sug, index) => (
                                    <CListGroupItem
                                      className="sugestions-item"
                                      key={index}
                                      style={{ cursor: "pointer" }}
                                      onClick={(e) => {
                                        props.onSuggestion(sug);
                                      }}
                                    >
                                      {sug.description + "  (" + sug.code + ")"}
                                    </CListGroupItem>
                                  ))}
                              </CListGroup>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="textarea-diseas-desc">
                                Descripção da doença
                              </CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CTextarea
                                disabled={props.operation === "view"}
                                name="textarea-diseas-desc"
                                id="textarea-diseas-desc"
                                rows="2"
                                value={props.currentDiseasDesc}
                                placeholder="Escreva a descripção..."
                                onChange={(e) => {
                                  props.diseasDescChange(e.target.value);
                                }}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup className="form-actions">
                            <CButton
                              type="button"
                              size="sm"
                              color="primary"
                              onClick={() => props.pushPatientDiseas()}
                            >
                              <CIcon content={freeSet.cilPlus} /> Adicionar
                            </CButton>
                          </CFormGroup>
                          <CListGroup>
                            <CListGroupItem action active>
                              <h5 className="d-flex w-100 justify-content-between">
                                List group item heading
                                <small>3 days ago</small>
                              </h5>
                              <div className="mb-1">
                                Donec id elit non mi porta gravida at eget
                                metus. Maecenas sed diam eget risus varius
                                blandit.
                                <small>Donec id elit non mi porta.</small>
                              </div>
                            </CListGroupItem>
                            <CListGroupItem action>
                              <h5>List group item heading</h5>
                              <div>
                                Donec id elit non mi porta gravida at eget
                                metus. Maecenas sed diam eget risus varius
                                blandit.
                              </div>
                              <small>Small.</small>
                            </CListGroupItem>
                            <CListGroupItem action>
                              <h5>List group item heading</h5>
                              <div>
                                Donec id elit non mi porta gravida at eget
                                metus. Maecenas sed diam eget risus varius
                                blandit.
                              </div>
                              <small>Small.</small>
                            </CListGroupItem>
                          </CListGroup>
                        </CTabPane>
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

export default PatientForm;
