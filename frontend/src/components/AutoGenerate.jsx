import React,{useEffect,useState} from 'react'

export default function AutoGenerate() {

  /**Fetching data from API End point */
  const [questionType,setQuestionType] = useState()
  const [coursesName,setCourses] = useState()
  const [subjectName,setSubject] = useState()
  const [chapterName,setChapter] = useState()

  const [subjectId,setSubjectId] = useState(1)

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
    <div className="container">
      <div className="row"> 
        <form action="" className="form-group">
          <h4 className='mt-5 mb-3 align-item-center'>Choose Options to create a Question Automatically</h4>
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
          {/**Number of Marks */}
            <label htmlFor="totalmarks" className="form-label">Total Marks</label>
            <input type="number" className="form-control" id='totalmarks' placeholder='Input total marks'/>
            <label htmlFor="totalmarks" className="form-label">Pass Marks</label>
            <input type="number" className="form-control" id='totalmarks' placeholder='Input pass marks'/>
            <h6>Choose Chapters</h6>
            {
                    chapterName && chapterName.filter(chapter => chapter.subjectName === parseInt(subjectId)).map(chapter => {
                        return (
                            <div value={chapter.id}>
                              <label htmlFor='chap'>
                              <input type={'checkbox'} id='chap' className='form-checkbox ml-3'/>
                                {
                                  chapter.chapterName
                                }
                              </label>
                              <br />
                            </div>
                        )
                    })
            }
            <label htmlFor="mcq" className='form-label mt-2'>No of multiple choice questions</label>
            <input type="number" name="" id="mcq" placeholder='No of Multiple choice questions' className='form-control'/>
            <label htmlFor="mcq" className='form-label mt-2'>No of descriptive questions</label>
            <input type="number" name="" id="mcq" placeholder='No of descriptive questions' className='form-control'/>
            <label htmlFor="mcq" className='form-label mt-2'>No of True/False questions</label>
            <input type="number" name="" id="mcq" placeholder='No of True/False questions' className='form-control'/>
            <label htmlFor="mcq" className='form-label mt-2'>No of Fill in the blanks questions</label>
            <input type="number" name="" id="mcq" placeholder='No of Fill in the blanks questions' className='form-control'/>
            <button type='button' className='btn btn-primary form-control mt-2 mb-2'>Generate</button>
        </form>   
      </div>
    </div>
  )
}
