import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { IoPlay } from 'react-icons/io5'

function App() {
  const[search, setSearch] = useState("");
  const[list, setList] = useState([]);

  const doSearch = () => {
    const url = `https://fr1.api.radio-browser.info/json/stations/byname/${search}`;
    axios.get(url)
      .then(r => setList(r.data))
      .catch(e => console.error(e))
  }

  const playRadio = (radio) => {
    const audio = new Audio(radio.url)
    audio.play();
  }

  return (
    <div className="App">
      <h1>Welcome to <span>OpenRadioCamp</span> App</h1>
      <input
        type='text'
        placeholder="Enter the radio station's name"
        value={ search }
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={ doSearch }>Search</button>
      {list.length > 0 && <div aria-label='lenght-not-null'></div>}
      <section aria-label="list-stations">
        {list.map((station, i) => <div key={i}>{station.name} <IoPlay style={{cursor: 'pointer'}} onClick={playRadio} /></div>)}
      </section>
    </div>
  );
}

export default App;
