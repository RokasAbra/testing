import { useContext } from "react";
import Scooter from "./Scooter";
import ScootersContext from "./ScootersContext";

function List() {

 const {scooters} = useContext(ScootersContext);

    return (
      <>
        <div className="card mt-4">
          <div className="card-header">
            <h2>List of scooters</h2>
          </div>
          <div className="card-body">
            <ul className="list-group">
                {
                  scooters ? scooters.map(scooter => <Scooter key={scooter.id} ex={scooter} ></Scooter>) : null
                }
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default List;
  