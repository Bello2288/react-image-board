import ImageBoard from '../ImageBoard';
import './App.css';
import {useState} from 'react';

const INITIAL_PICS = [
  {src: "https://media.istockphoto.com/photos/portrait-of-brown-puppy-with-bokeh-background-picture-id636475496?b=1&k=20&m=636475496&s=170667a&w=0&h=6Q63AADI9MzRWrq0qgkI43rCupNnu9xEfGJO-ikSxD8=", text: "A cute little puppy."}, 
  {src: "https://media.istockphoto.com/photos/puppy-with-tilted-head-and-crossed-paws-lying-on-sofa-picture-id1301839112?b=1&k=20&m=1301839112&s=170667a&w=0&h=BSvm2ARSS7DO_zgg-CG4FYJiTBqxTGQDMuntQDA-Nyo=", text: "Another cute little puppy."}, 
];

function App() {

  const [items, setItems] = useState(INITIAL_PICS);

  const addImage = (newItem) => {
    setItems([...items, newItem])
  }

  return (
    <div className="App">
      <ImageBoard items={items} addImage={addImage} />
    </div>
  );
}


export default App;