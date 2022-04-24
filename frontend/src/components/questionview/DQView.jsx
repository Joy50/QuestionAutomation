import React from 'react'
import parse from 'html-react-parser'

export default function DQView(props) {

  return (
    <div className='p-5'>
      <React.Fragment>
          <h5>{props.questiondata.question}</h5>
          <p>{parse(props.questiondata.answerDetails)}</p>
          <h6><b>{props.questiondata.refDetails}</b></h6>
          <hr />
      </React.Fragment>
    </div>
  )
}
