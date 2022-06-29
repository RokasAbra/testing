import Scooter from "./Scooter";

function List({scooters}) {
    return (
      <>
        <div className="card mt-4">
          <div className="card-header">
            <h2>List of Ex'es</h2>
          </div>
          <div className="card-body">
            <ul className="list-group">
                {
                  scooters ? scooters.map(ex => <Scooter key={ex.id} ex={ex} ></Scooter>) : null
                }
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default List;
  