import React, { useEffect ,useState} from 'react'
import DQForm from '../components/questionform/DQForm'
import MCQForm from '../components/questionform/MCQForm'
import TFForm from '../components/questionform/TFForm'
import FIBForm from '../components/questionform/FIBForm'

export default function AddQuestions() {

    /**Fetching data from API End point */
    const [questionType,setQuestionType] = useState()
    const [coursesName,setCourses] = useState()
    const [subjectName,setSubject] = useState()
    const [chapterName,setChapter] = useState()
    
    /**For passing props and filtering data*/
    const [qtype,setQtype] = useState("1")
    const [subjectId,setSubjectId] = useState(1)
    const [chapterId,setChapterId] = useState()
    
    
    /**Fetcing Data From Endpoints related with Question Upload */
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/allquestiontype/`,{
          method: 'GET',
          headers:{
            'Content-Type':'application/json', 
          }
        })
        .then(qresp=>qresp.json())
        .then(qresp=>setQuestionType(qresp))
        .catch(error=>console.log(error))
        .then(()=>{
            fetch(`http://127.0.0.1:8000/allcourses/`,{
                method: 'GET',
                headers:{
                    'Content-Type':'application/json',
                }
            })
            .then(courseresp => courseresp.json())
            .then(courseresp => setCourses(courseresp))
            .catch(error => console.log(error))
            .then(()=>{
                fetch(`http://127.0.0.1:8000/allsubject/`,{
                    method: 'GET',
                    headers:{
                        'Content-Type':'application/json',
                    }
                })
                .then(subjectresp => subjectresp.json())
                .then(subjectresp => setSubject(subjectresp))
                .catch(error => console.log(error))
                .then(()=>{
                    fetch(`http://127.0.0.1:8000/allchapters/`,{
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(chapres => chapres.json())
                    .then(chapres => setChapter(chapres))
                    .catch(error => console.log(error))
                })
            })
        })
      },[]
    )

  return (
    <div className='addQuestions m-4'>
        <form className="form-group">
            
            {/** Question Type Selection */}
            <label htmlFor="q-type" className='form-label'>Choose Question Type</label>
            <select name="q-type" id="q-type" className='form-select' placeholder='Choose Course Type' onChange={event => setQtype(event.target.value)} value={qtype}>
            {
                questionType && questionType.map(typeOfQuestion=>{
                    return (
                            <option value={typeOfQuestion.id}>{typeOfQuestion.typeTitle}</option>
                    )
                })
            }
            </select>


            {/** Course Selection */}
            <label htmlFor="c-type" className='form-label'>Choose Course Type</label>
            <select name="c-type" id="c-type" className='form-select' placeholder='Choose Course Type'>
                {
                    coursesName && coursesName.map(
                        course =>{
                            return (
                                <option value={course.id}>{course.courseName}</option>
                            )
                        }
                    )
                }
            </select>


            {/** Subject Selection */}
            <label htmlFor="s-type" className='form-label'>Choose Subject</label>
            <select name="s-type" id="s-type" className='form-select' placeholder='Choose Subject Type' onChange={event =>setSubjectId(event.target.value)} value={subjectId}>
                {
                    subjectName && subjectName.map(subject =>{
                        return (
                            <option value={subject.id}>{subject.subjectName}</option>
                        )
                    })
                }
            </select>



            {/** Chapter Selection - filtering needed */}
            <label htmlFor="c-type" className='form-label'>Choose Chapter</label>
            <select name="c-type" id="c-type" className='form-select mb-2' placeholder='Choose Chapter Type' onChange={event=>setChapterId(event.target.value)} value={chapterId}>
                {
                    chapterName && chapterName.filter(chapter => chapter.subjectName === parseInt(subjectId)).map(chapter => {
                        return (
                            <option value={chapter.id}>{chapter.chapterName}</option>
                        )
                    })
                }
            </select>
            
            {
                /** View Changing - props will be sent*/
                qtype === "1" ? <MCQForm/>:
                qtype === "2" ? <DQForm/>:
                qtype === "3" ? <TFForm/>:<FIBForm/>
            }
            <button type='button' className='btn btn-primary form-control mt-2'>Save</button>
        </form>
    </div>
  )
}
