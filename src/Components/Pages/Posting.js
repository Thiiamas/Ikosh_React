import '../Styles/Posting.css'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Textarea from 'react-expanding-textarea'
import React, { useRef,useState } from 'react'
import Select from 'react-select'
import {Button} from '../Styles/Button.style'

const Posting = () => {

    const [selectedMedia, setSelectedMedia] = useState(null)
    const [inputFile, setInputFile] = useState(null)

    const hiddentInputRef = useRef(null)
    const textareaRef = useRef(null)
    //var inputFile = null;
    let media = []
    let data
    const options = [
        {value: 'swame', label: 'Swame'},
        {value: 'fansly', label: 'Fansly'},
        {value: 'mym', label: 'Mym'}
    ]
    

    //handle click on input button
    const handleInputClick = (event) =>{
        hiddentInputRef.current.click();
    }

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
        setSelectedMedia(media)
    }


    //test to see how i can handle file later
    const onFileChange = (event) => {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0]
        setInputFile(file);
        
        console.log("input file : ")
        console.log(inputFile)
    }

    const handleTextAreaChange = () =>{

    }
    
    return (
        <div className="MainDiv bg-indigo-200 flex content-center flex-col justify-around shadow-lg
                        max-w-2xl mx-auto mt-10 h-4/6 border-solid rounded-lg border-4 border-indigo-200">
            <div className='text-gray-700 text-5xl m-8 '>
                <span className=''  >Publish Everywhere</span>
            </div>
            <div className='SocialMediaSelector mx-10 shadow-lg' >
                <Select  options={options} isMulti='true' onChange={onSelectChange}/>
            </div>
            <div className="mx-10 shadow-lg">
            {/*<Textarea
                className="textarea"
                defaultValue="Lorem ipsum dolor sit amet, ..."
                id="my-textarea"
                maxLength="3000"
                cols="50"
                name="pet[notes]"
                onChange={handleTextAreaChange}
                placeholder="Enter text here..."
                ref={textareaRef}
      />*/}
                <CKEditor 
                editor ={ClassicEditor}
                config={{         
                    toolbar: []
                  }} 
                onChange={ ( event, editor) => {
                data = editor.getData();
                    console.log({event, editor, data});
                } }/>
        </div>
            <div className="FileUploader mx-10 ">
                <input className="hidden" type='file' id='file' ref={hiddentInputRef} onChange={onFileChange}/>
                <button className="shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
                backgroundColor='blue' onClick={handleInputClick}>Add file</button>
                {/* Comment aficher le nom de inputFile ?*/}
                <span>{inputFile !== null ? "File : " +inputFile.name : ''}</span>
            </div>
            <div className="shadow-lg mx-auto">
                <Button backgroundColor='blue' onClick={onClickPost}>Post</Button>
            </div>
        </div>
    )
}

export default Posting;