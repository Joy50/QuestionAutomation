import React,{useState,useEffect} from 'react'
import DQView from './questionview/DQView'
import MCQView from './questionview/MCQView'
import FIBview from './questionview/FIBview'
import TFView from './questionview/TFView'

export default function ManageQuestions() {

  const [questions,setQuestion] = useState()

  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/allquestions/`,{
      method: 'GET',
      headers:{
        'Content-Type':'application/json', 
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setQuestion(resp))
    .catch(error=>console.log(error))
  })

  return (
    <div>
      {
        console.log(questions)
      }
      {questions && questions.map(question => {
        return (
          <div key={question.id}>
            {
              question.qType === 1 ? <MCQView questiondata = {question}/>:
              question.qType === 2  ? <DQView questiondata = {question}/>:
              question.qType === 3 ? <TFView questiondata = {question}/>:<FIBview questiondata = {question}/>
            }
          </div>
        )
      })}
    </div>
  )
}
