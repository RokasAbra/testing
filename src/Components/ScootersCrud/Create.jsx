import { useContext } from "react";
import { useState } from "react"
import ScootersContext from "./ScootersContext";
import { v4 as uuidv4 } from 'uuid';

function Create(){

    const {setCreateData, scooters} = useContext(ScootersContext);

    const [registrationCode, setRegistrationCode] = useState(uuidv4());
    const [travelledDistance, setTravelledDistance] = useState(0);
    const [lastUseDate, setLastUseDate] = useState('');
    const [ nextCheck, setNextCheck] = useState('');



    const handleCreate = () => {
        const data = {registrationCode, travelledDistance, lastUseDate, nextCheck};
        setCreateData(data);
        setRegistrationCode(uuidv4());
        setTravelledDistance("0");
        setLastUseDate('0');
        setNextCheck('0')
    };







    return (
        <>

<div className="card mt-4">
    <div className="card-header">
      <h2>Create new Ex</h2>
    </div>
    <div className="card-body">
        <div className='form-group'>
            <label>Name:</label>
            <input type="text" className="form-control" onChange={(e) => setRegistrationCode(e.target.value) } value={registrationCode}/>
            <small className="form-text text-muted">Enter Ex name here.</small>
        </div>
        <div className='form-group'>
            <label>Type:</label>
            <select className="form-control" onChange={(e) => setTravelledDistance(e.target.value) } value={travelledDistance}>
                <option value="1">Test</option>
                <option value="2">Written</option>
                <option value="3">Spoken</option>
            </select>
            <small className="form-text text-muted">Selexct Ex type</small>
        </div>
        <div className='form-group'>
            <label>Place:</label>
            <input type="text" className="form-control" onChange={(e) => setLastUseDate(e.target.value) } value={lastUseDate}/>
            <small className="form-text text-muted">Enter Ex place here.</small>
        </div>
        <button type="button" className="btn btn-outline-info" onClick={handleCreate}>Submit</button>
    </div>
  </div>
        </>
    )
}

export default Create;