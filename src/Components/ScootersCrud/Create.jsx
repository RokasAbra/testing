import { useContext } from "react";
import { useState } from "react"
import ScootersContext from "./ScootersContext";


function Create(){

    const {setCreateData, scooters} = useContext(ScootersContext);

    const [regCode, setRegCode] = useState(null);
    const [travelledDistance, setTravelledDistance] = useState(0);
    const [lastUseDate, setLastUsedDate] = useState('');
    const [ nextCheck, setNextCheck] = useState('');



    const handleCreate = () => {
        const data = {regCode, travelledDistance, lastUseDate, nextCheck};
        setCreateData(data);
        setRegCode('');
        setTravelledDistance(0);
        setLastUsedDate(0);
        setNextCheck('0')
    };







    return (
        <>

        <div className="list">
            <div>
               

            </div>
            <button onClick={handleCreate}></button>
        </div>
        </>
    )
}

export default Create;