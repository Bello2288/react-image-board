import {useState} from 'react';



function ImageForm({addPic}){
    const [name, setName] = useState('');

    const handleInput = (event) => {    
        setName(event.target.value);    
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPic = {
            id: 4,
            name,
        }

        addPic(newPic);
        setName('');
      };

    return(
        <form class="image-form" onSubmit={handleSubmit}>
            <input class="image-url" type="url" name="url-input" id="" placeholder='Image URL' />
            <input class="image-caption" type="text" name="text-input" id="" placeholder='Image Caption'/>
            <div class="buttons">
                <button class="cancel-btn" type='submit'>Cancel</button>
                <button class="add-btn" type='submit' onChange={handleInput}>Add Image</button>
            </div>
        </form>
    )
};
    

export default ImageForm;