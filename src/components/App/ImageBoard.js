import ImageForm from './ImageForm';
import ImageList from './ImageList';

function ImageBoard({pics}) {
    return(
      <div>

        <ImageForm  />
        <ImageList pics={pics} />
      </div>
    )
}


export default ImageBoard;