import './App.css';
import Head from './components/header'
import data from './components/items';
import CalorieBox from './components/caloriebox';

function App() {

    return (
    <div className="App">
      <Head/>
      <div className="card">
        {data.map((item,id)=>{
          return(
            <CalorieBox
            key={id}
            props={{item,id}}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
