import React from 'react'

export default function MCQForm() {
  return (
    <React.Fragment>
        <input className='form-control mt-3 mb-3' placeholder='Question'/>
        <input className='form-control mt-3 mb-3' placeholder='Option A'/>
        <input className='form-control mt-3 mb-3' placeholder='Option B'/>
        <input className='form-control mt-3 mb-3' placeholder='Option C'/>
        <input className='form-control mt-3 mb-3' placeholder='Option D'/>
        <input className='form-control mt-3 mb-3' placeholder='Answer'/>
    </React.Fragment>
  )
}
