  import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [memes, setMemes] = useState([]);

  const getMemes = async () => {
    try {
      const data = await axios.get('https://meme-api.herokuapp.com/gimme/40')
      const res = await data.data.memes
      setMemes(res)
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMemes()
  }, [])

  return (
    <div className='container'>
      <h1 className='heading'>Meme Generator</h1>
      <div className='cards'>
        {memes.map((meme, index) => (
          <div className='card' key={ index }> 
            <img src={ meme.preview[2] } alt={ meme.author }/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
// import { useState } from 'react';
// import Templates from './components/Templates';
// import Meme from './components/Meme';
// import './App.css';

// function App() {

//   const [templates,setTemplates]=useState([]);
//   const [meme,setMeme]=useState(null);

//   useEffect(()=> {
//     fetch("https://api.imgflip.com/get_memes")
//     .then((res)=>res.json())
//     .then((data)=>{
//       setTemplates(data.data.memes);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Meme Gewner</h1>
//       {meme===null ? (
//         <Templates 
//         templates={templates}
//         setMeme={setMeme}/>
//       ): (
//         <Meme 
//         meme={meme}
//         setMeme={setMeme} />
//       )}
//     </div>
//   );
// }

// export default App;
