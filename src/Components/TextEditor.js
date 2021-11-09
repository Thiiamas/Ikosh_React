import React from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function TextEditor(){

    return (
        <div>
            <h1>Editor</h1>
            <CKEditor
                editor ={ClassicEditor}
                onChange={ ( event, editor) => {
                    const data = editor.getData();
                    console.log({event, editor, data});
                } }/>
        </div>
    )
}

export default TextEditor;