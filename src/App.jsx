import { useEffect } from "react";
import { useState } from "react"
import ScootersContext from "./Components/ScootersCrud/ScootersContext";
import axios from 'axios'
import Create from "./Components/ScootersCrud/Create";
import List from "./Components/ScootersCrud/List";

function App() {
    
    const [lastUpdate, setLastupdate] = useState(Date.now());
    const [scooters, setScooters] = useState(null);
    const [createData, setCreateData] = useState(null);




    useEffect(() => {
        axios.get('http://localhost:3004/scooters')
        .then(res => setScooters(res.data));
    }, [lastUpdate]);

    useEffect(()=> {
        if (null === createData)return;
        axios.post('http://localhost:3004/scooters', createData)
        .then(_ => {
            setLastupdate(Date.now());
        })
        .catch(error => {
            console.log(error);
        })
    },[createData])

    return (
        <>
        <ScootersContext.Provider value={
            {
                scooters,
                setCreateData,

            }
        }>
        <div className="App">
      <header className="App-header">
        <h1>Crud with Db</h1>
        <Create/>
      </header>

      <div>
        <List
        scooters={scooters}></List>
      </div>
    </div>
        
        
    </ScootersContext.Provider>
        </>
    )
}

export default App;