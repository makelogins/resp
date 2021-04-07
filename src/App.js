import { useRef , useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const e = useRef()

  const [numero, set] = useState(null)
  

  function dolarReal() {
  pesquisaDR(e.current.value)
  }

  function realDolar() {
    pesquisaRD(e.current.value)
    }

  function pesquisaRD(texto) {
    
    if(texto===""){
      return false
    }    
      axios.get('https://economia.awesomeapi.com.br/BRL-USD/1').then(
      resp => set(resp.data[0].ask*texto)
    )
  }

  function pesquisaDR(texto) {
    if(texto==="" && typeof texto !== 'number'){
      return false
    }    
    axios.get('https://economia.awesomeapi.com.br/USD-BRL/1').then(
      resp => set(resp.data[0].ask*texto)
    )    
  }

  return (
    <div className="App">
       {numero!==null&&(<div ClassName="msg text-lg font-medium leading-6 text-gray-900"> valor R${numero.toFixed(2)}</div>)}    
      <input type="numb" ClassName="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" ref={e}  ></input> 
      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" onClick={dolarReal}>Dolar/Real</button>
      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" onClick={realDolar}>Real/Dolar</button>
      </div>
  );
}

export default App;
