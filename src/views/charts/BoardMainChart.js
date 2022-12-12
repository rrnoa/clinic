import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
const brandWarning = getStyle('warning') || '#f9b115'
const brandPrimary = getStyle('primary') || '#321fdb'
const brandDanger = getStyle('danger') || '#e55353'

const MainChartExample = attributes => {
  const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const defaultDatasets = (()=>{
    let elements = 12
    const data1 = []
    const data2 = []
    const data3 = []
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200))
      data2.push(random(80, 100))
      data3.push(random(50, 200))
    }
    return [
      {
        label: 'Ano 2019',
        backgroundColor: hexToRgba(brandPrimary, 10),
        borderColor: brandPrimary,
        pointHoverBackgroundColor: brandPrimary,
        borderWidth: 2,
        data: data1
      },
      {
        label: 'Ano 2020',
        backgroundColor: 'transparent',
        borderColor: brandWarning,
        pointHoverBackgroundColor: brandWarning,
        borderWidth: 2,
        data: data2
      },
      {
        label: 'Ano 2021',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }
    ]
  })()

  const defaultOptions = (()=>{
    return {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  )()

  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']}
    />
  )
}


export default MainChartExample
