import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CWidgetDropdown,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import ChartLineSimple from '../charts/ChartLineSimple'

import MainChartExample from '../charts/BoardMainChart.js'


const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-primary"
            header="9.823"
            text="Pacientes ativos"
            footerSlot={
              <ChartLineSimple
                 pointed
                className="mt-3"
                style={{height: '70px'}}
                dataPoints={[65, 59, 84, 84, 51, 55]}
                pointHoverBackgroundColor="primary"
                label="Pacientes"
                labels="Meses"
              />
            }
          >
            <CDropdown>
              <CDropdownToggle color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-warning"
            header="9.823"
            text="Consultas"
            footerSlot={
              <ChartLineSimple
                pointed
                className="mt-3"
                style={{height: '70px'}}
                //backgroundColor="rgba(255,255,255,.2)"
                dataPoints={[78, 81, 80, 45, 34, 12]}
                //options={{ elements: { line: { borderWidth: 2.5 }}}}
                pointHoverBackgroundColor="warning"
                label="Consultas"
                labels="Meses"
              />
            }
          >
            <CDropdown>
              <CDropdownToggle color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-success"
            header="9.823"
            text="Tratamentos"
            footerSlot={
              <ChartLineSimple
                pointed
                className="mt-3"
                style={{height: '70px'}}
                dataPoints={[78, 81, 80, 45, 34, 12]}
                pointHoverBackgroundColor="success"
                label="Tratamentos"
                labels="Meses"
              />
            }
          >
            <CDropdown>
              <CDropdownToggle color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-info"
            header="9.823"
            text="Citas"
            footerSlot={
              <ChartLineSimple
                pointed
                className="mt-3"
                style={{height: '70px'}}
                dataPoints={[78, 81, 80, 45, 34, 12]}
                pointHoverBackgroundColor="info"
                label="Doutores"
                labels="Meses"
              />
            }
          >
            <CDropdown>
              <CDropdownToggle color="transparent">
                <CIcon name="cil-settings"/>
              </CDropdownToggle>
              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CWidgetDropdown>
        </CCol>
      </CRow>
      <CCard>
        <CCardBody>
          
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Atividades</h4>
              <div className="small text-muted">Março 2020</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Dia', 'Mes', 'Ano'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            
          </CRow>
        </CCardFooter>
      </CCard>    

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Últimos pacientes
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>                    
                    <th>Paciente</th>
                    <th>Data</th>
                    <th>Duração</th>
                    <th>Telefone</th>
                    <th>Razão</th>
                    <th>Assistência</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Yiorgos Avraamu</strong>
                      <div className="small text-muted">
                        Registrado: 1º de janeiro de 2015
                      </div>
                    </td>                    
                    <td>
                      <strong>1 hora atrás</strong>
                    </td>                    
                    <td>
                      <strong>30 min</strong>
                    </td>
                    <td>
                    <CIcon className="my-2" height="25" content={freeSet.cilScreenSmartphone} />
                      <strong>945665432</strong>
                    </td>
                    <td>
                      <strong>Consulta</strong>
                    </td>
                    <td>
                    <strong>Dr. Angel Tunas</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Yiorgos Avraamu</strong>
                      <div className="small text-muted">
                        Registrado: 1º de janeiro de 2015
                      </div>
                    </td>                    
                    <td>
                      <strong>1 hora atrás</strong>
                    </td>                    
                    <td>
                      <strong>30 min</strong>
                    </td>
                    <td>
                    <CIcon className="my-2" height="25" content={freeSet.cilScreenSmartphone} />
                      <strong>945665432</strong>
                    </td>
                    <td>
                      <strong>Tratamiento</strong>
                    </td>
                    <td>
                    <strong>Dr. Juan Rodriguez</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Yiorgos Avraamu</strong>
                      <div className="small text-muted">
                        Registrado: 1º de janeiro de 2015
                      </div>
                    </td>                    
                    <td>
                      <strong>1 hora atrás</strong>
                    </td>                    
                    <td>
                      <strong>30 min</strong>
                    </td>
                    <td>
                    <CIcon className="my-2" height="25" content={freeSet.cilScreenSmartphone} />
                      <strong>945665432</strong>
                    </td>
                    <td>
                      <strong>Consulta</strong>
                    </td>
                    <td>
                    <strong>Dr. Maria Tunas</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Yiorgos Avraamu</strong>
                      <div className="small text-muted">
                        Registrado: 1º de janeiro de 2015
                      </div>
                    </td>                    
                    <td>
                      <strong>1 hora atrás</strong>
                    </td>                    
                    <td>
                      <strong>30 min</strong>
                    </td>
                    <td>
                    <CIcon className="my-2" height="25" content={freeSet.cilScreenSmartphone} />
                      <strong>945665432</strong>
                    </td>
                    <td>
                      <strong>Consulta</strong>
                    </td>
                    <td>
                    <strong>Dr. Maria Tunas</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Yiorgos Avraamu</strong>
                      <div className="small text-muted">
                        Registrado: 1º de janeiro de 2015
                      </div>
                    </td>                    
                    <td>
                      <strong>1 hora atrás</strong>
                    </td>                    
                    <td>
                      <strong>30 min</strong>
                    </td>
                    <td>
                    <CIcon className="my-2" height="25" content={freeSet.cilScreenSmartphone} />
                      <strong>945665432</strong>
                    </td>
                    <td>
                      <strong>Consulta</strong>
                    </td>
                    <td>
                    <strong>Dr. Maria Tunas</strong>
                    </td>
                  </tr>
                  

                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
