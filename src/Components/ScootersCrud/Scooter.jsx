function Scooter({scooter}) {


    




    return (
        <>
         <li className="list-group-item">
        <div className="item">
          <div className="content">
              <b>{scooter.registrationCode}</b>
              <span></span>
              <i>{scooter.travelledDistance}</i>
              </div>
          <div className="buttons">
          <button type="button" className="btn btn-outline-info ml-2" >Edit</button>
            <button type="button" className="btn btn-outline-danger ml-2"  >Delete</button>
          </div>
        </div>
      </li>
        
        
        
        </>
    )
    
}


export default Scooter;