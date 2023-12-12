import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const RichText = ({setvalue,value,setDisplayTxt}) => {

    const modules = {

       toolbar: [
        [{header : [1,2,3,4,5,6,false]}],
        [{'table':[]}],
    [{font:[]}],
    [{size:[]}],
    ['bold','italic','underline','strike','blockquote'],
    [
        {list : 'ordered'},
        {list: 'bullet'},
        {indent :'-1'},
        {indent :'+1'}
    ],
    ['link','image','video']
    ]
        }
        const handleChange = (content, delta, source, editor) =>{
            // console.log('content',content)
            setvalue(editor.getHTML())
            setDisplayTxt(editor.getText())
        }
  return (
    <div style ={{height:'50vh'}}>
      <ReactQuill  style ={{height:'40vh'}} theme='snow' modules={modules} onChange={handleChange} value={value} />
    </div>
  )
}

export default RichText
