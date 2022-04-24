import React from 'react'

export default function MCQView(props) {
  return (
    <div className="p-5">
      <React.Fragment className='p-5'>
        <h5>{props.questiondata.question}</h5>
        <h6>a.{props.questiondata.optionA}</h6>
        <h6>b.{props.questiondata.optionB}</h6>
        <h6>c.{props.questiondata.optionC}</h6>
        <h6>d.{props.questiondata.optionD}</h6>
        <h6><b>{props.questiondata.answerMCQ}</b></h6>
      </React.Fragment>
    </div>
  )
}
