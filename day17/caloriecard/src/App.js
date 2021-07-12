import './App.css';
import List from './components/data';

function App(){
  const data =[
    {name: 'PIZZA', cal:80},
    {name: 'BURGER', cal:63},
    {name: 'COKE', cal:50},
    {name: 'BROWNIE', cal:70},
    {name: 'Fried Rice', cal:180},
    {name: 'Cake', cal:85},
    {name: 'Momos', cal:805},
  ]
  return (
    <div className='container'>
    <h1 className='list'>Calorie List</h1>
    <div className='calist'>
    <List data={data}/>
    </div>
    </div>
  );
}

export default App;
