import React from 'react'
import {  
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'

const fichas = [
    {code: '001', paciente: 'Juan Peres', created: '01/02/2017', by: 'Dr. Ester Rodríguez'},
    {code: '002', paciente: 'Ana Peres', created: '01/02/2017', by: 'Dr. Maria Manuel de la Caridad'},
    {code: '003', paciente: 'Pedro Peres', created: '01/02/2017', by: 'Dr. Johan Manuel de la Caridad'},
    {code: '004', paciente: 'Teresa Peres', created: '01/02/2017', by: 'Dr. Maria Manuel de la Caridad'},
]
const fields = [
  'code',
  'paciente',
  {
    key: 'created',
    label: 'Data de criação',
  },
  {
    key: 'by',
    label: 'Responsável',
    sorter: false
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]

const Fichas = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                Lista de processos
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={fichas}
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
              scopedSlots = {{
                'show_details':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <CButton block color="info" size="sm">Detalhes</CButton>
                      </td>
                    )
                  }
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>        
    </>
  )
}

export default Fichas
