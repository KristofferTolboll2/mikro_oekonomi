import React from 'react'

export default function ModalLegend(props) {

    console.log(props)
  return (
    <div>
      <p>{props.text} hello hello {props.legend.item.datasetIndex}</p>
    </div>
  )
}
