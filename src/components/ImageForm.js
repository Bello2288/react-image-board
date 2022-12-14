import {useState} from 'react';

function ImageForm({addImage}){
    const [src, setSrc] = useState("");
    const [text, setText] = useState("");
    const handleSrcInput = (e) => {
        setSrc(e.target.value);
    };

    const handleTextInput = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = {
            src,
            text,
        }
        addImage(newImage);
        setSrc("");
        setText("");
    };

    return(
      <form class="image-form" onSubmit={handleSubmit}>
        <nav class="nav-bar"><i class="fa-solid fa-circle-plus"></i></nav>
        <div class="inputs">
            <input class="image-url" type='url' name='urlInput' value={src} onChange={handleSrcInput} placeholder="Image URL"></input>
            <input class="image-caption" type='text' name='textInput' value={text} onChange={handleTextInput} placeholder="Image Caption "></input>
        </div>
        <div class="buttons">   
            <button class="cancel-btn" name='closeButton'>Cancel</button>
            <button class="add-btn" name='submitButton'><i class="fa-regular fa-image"></i>Add Image</button>
        </div>
      </form>
    )
};


export default ImageForm;