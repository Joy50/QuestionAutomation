import React from 'react'

export default function TFForm() {
  return (
    <React.Fragment>
        <input className='form-control mt-3 mb-3' placeholder='Question'/>
        <input type="radio" name="true" id="truebtn" value= 'True'/>
        <label htmlFor="truebtn">True</label>
        <br />
        <input type="radio" name="true" id="falsebtn" value= 'False' className='form-radio'/>
        <label htmlFor="falsebtn">False</label>
        <input className='form-control mt-3 mb-1' placeholder='Answer'/>
    </React.Fragment>
  )
}
