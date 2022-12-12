import React from 'react'
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
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

const FormFicha = () => {  

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              Novo Procceso
              <small> Formulário</small>
              <div className={'card-header-actions'}>               
                <CSwitch size={'sm'} className={'mx-1'} shape={'pill'} color={'success'} defaultChecked />
              </div>
              
            </CCardHeader>
            <CCardBody>
            <CRow>
              <CCol md="6" xs="12"> 
                    <CFormGroup row>
                      <CCol md="3">
                      <CLabel htmlFor="name">Paciente</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                      <CInput id="name" placeholder="Nome do paciente" required />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                      <CLabel htmlFor="date-input">Data de nacimento</CLabel>
                      </CCol>
                      <CCol md="6">
                        <CInput type="date" id="date-input" name="date-input" placeholder="date" />                        
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="ccnumber">24 anos</CLabel>
                      </CCol>                         
                    </CFormGroup>
                    <CRow>
                      <CCol xs="6">
                      <CFormGroup row>
                        <CCol xs="6">
                          <CLabel htmlFor="select">Sexo</CLabel>
                        </CCol>
                        <CCol xs="6" md="6">
                          <CSelect custom name="select" id="select">
                            <option value="0">Selecione</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>                          
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup row>
                          <CCol xs="6">
                            <CLabel htmlFor="select">Grupo sanguineo</CLabel>
                          </CCol>
                          <CCol xs="6">
                          <CSelect custom name="select" id="select">
                              <option value="0">Selecione</option>
                              <option value="0">A</option>
                              <option value="1">AB</option>
                              <option value="2">O+</option>
                              <option value="3">O-</option>
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                      </CCol>
                    </CRow>
              </CCol>                   
              <CCol md="6" xs="12">
                <div className="p-2">
                  <CLink
                    href="#"
                    target="_blank"
                    className="d-inline-block p-2 text-center"
                  >
                    <CIcon content={freeSet.cilClipboard} size="xl" />
                    <CBadge color="danger" shape="pill" style={{ position: 'static' }}>2</CBadge>
                    <div className="small text-muted">
                      Consultas
                    </div>                
                  </CLink>
                  <CLink
                    href="#"
                    target="_blank"
                    className="d-inline-block p-2 text-center"
                  >
                    <CIcon content={freeSet.cilBrightness} size="xl" />
                    <CBadge color="danger" shape="pill" style={{ position: 'static' }}>2</CBadge>
                    <div className="small text-muted">
                      Tratamientos
                    </div>                
                  </CLink>
                  <CLink
                    href="#"
                    target="_blank"
                    className="d-inline-block p-2 text-center"
                  >
                    <CIcon content={freeSet.cilBeaker} size="xl" />
                    <CBadge color="danger" shape="pill" style={{ position: 'static' }}>2</CBadge>
                    <div className="small text-muted">
                      Exames
                    </div>                
                  </CLink>
                  <CLink
                    href="#"
                    target="_blank"
                    className="d-inline-block p-2 text-center"
                  >
                    <CIcon content={freeSet.cilChart} size="xl" />
                    <CBadge color="danger" shape="pill" style={{ position: 'static' }}>2</CBadge>
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
                    <CBadge color="danger" shape="pill" style={{ position: 'static' }}>2</CBadge>
                    <div className="small text-muted">
                      Prescrições
                    </div>                
                  </CLink>
                </div>
                
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="select">Responsável</CLabel>
                      </CCol>
                      <CCol md="9">
                        <CSelect custom name="select" id="select">
                          <option value="0">Selecione</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
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
                  <CNavLink>
                    Informação geral
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Doenças
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CRow style={{paddingTop: "20px"}}>                    
                    <CCol md="6">                     
                          <CFormGroup row> 
                              <CCol md="3">
                                <CLabel htmlFor="textarea-input">Morada</CLabel>                    
                              </CCol>                   
                              <CCol xs="12" md="9">
                                <CTextarea 
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
                          <CSelect custom size="sm" name="selectSm" id="SelectLm">
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
                          <CSelect custom size="sm" name="selectSm" id="SelectLm">
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
                          <CLabel htmlFor="name">Telefono</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput id="name" placeholder="+244 923 234 234" required />
                        </CCol>                          
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12">
                        <CFormGroup row>
                          <CCol md="3">                     
                            <CLabel htmlFor="email-input">Email</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="email" id="email-input" name="email-input" placeholder="Digite o e-mail" autoComplete="email"/>
                          </CCol>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    </CCol>

                  </CRow>
                </CTabPane>
                <CTabPane>
                <CFormGroup row style={{paddingTop: "20px"}}>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput id="input2-group2" name="input2-group2" placeholder="Escreva o nome da doença" />
                      <CInputGroupAppend>
                        <CButton type="button" color="primary">Adicionar</CButton>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
                  <CListGroup>
                    <CListGroupItem>Cras justo odio</CListGroupItem>
                    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem>Morbi leo risus</CListGroupItem>
                    <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                    <CListGroupItem>Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                </CTabPane>                
              </CTabContent>
            </CTabs>
            </CCol>

            </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Salvar</CButton> 
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Limpar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>        
      </CRow>      
    </>
  )
}

export default FormFicha
