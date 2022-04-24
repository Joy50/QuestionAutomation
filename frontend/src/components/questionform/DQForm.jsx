import React,{useRef} from 'react'
import { Editor } from '@tinymce/tinymce-react';

export default function DQForm() {

const editorRef = useRef(null);
  return (
    <React.Fragment>
      <label htmlFor="question">Question</label>
      <input className='form-control mb-2' placeholder='Question' id='question'/>
      <label htmlFor="answer">Answer</label>
        <Editor
        id='answer'
         onInit={(evt, editor) => editorRef.current = editor}
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
       <label htmlFor="ref">Referance</label>
       <input className='form-control mt-2' placeholder='Referance'id='ref'/>
    </React.Fragment>
  )
}
