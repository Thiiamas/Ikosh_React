import '../Styles/Posting.css'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import React, { useRef } from 'react'
//import Select from 'react-select'
import {Button} from '../Styles/Button.style'

const Posting = () => {

   const inputFile = useRef(null)

    let media = []
    let data
    const options = [
        {value: 'swame', label: 'Swame'},
        {value: 'fansly', label: 'Fansly'},
        {value: 'mym', label: 'Mym'}
    ]

    //basic call APi, need to be post with payload
    const onClickTest = (e) =>{
        media.map(x => 
            {
                fetch('/api/test/' + x + '?text='+data)
                .then(response => response.json())
                .then(data => console.log(data));
            })
        
        
    }

    const onClickPost = (event) => {
        fetch('/api/test/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            media: media,
            text: data,
        })
        })
    }

    //Test to see value on MediaSelector
    const onSelectChange = (e) =>{
        media = []
        e.map(x => media.push(x.value))
        console.log(media)
    }


    //test to see how i can handle file later
    const onFileChange = (event) => {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0]
        console.log(file)
    }
    
    return (
        <div className='PostingMain'>
                   <div className='SocialMediaSelector' >
                       {/*<Select options={options} isMulti='true' onChange={onSelectChange}/>*/}
                   </div>
                   <div>
                   <CKEditor
                editor ={ClassicEditor}
                onChange={ ( event, editor) => {
                   data = editor.getData();
                    console.log({event, editor, data});
                } }/>
                   </div>
                   <div className="FileUploader">
                       <input type='file' id='file' ref={inputFile} onChange={onFileChange}/>
                   </div>
                   <div className="BtnPost">
                       <Button backgroundColor='blue' onClick={onClickPost}>Post</Button>
                   </div>
        </div>
    )
}

export default Posting;