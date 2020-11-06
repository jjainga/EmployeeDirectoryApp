import React from "react";


function EmployeeCard(props) {
    console.log(props)
    return (
        <div >
            {props.employee.map(employeeObj => <div className="card EmployeeCard col-3"  key={employeeObj.data.info.seed}>
                <img className="card-img-top" src={employeeObj.data.results[0].picture.large} alt={employeeObj.data.results[0].name.first} />
                <div className="card-body">
                    <h5 className="card-title">{employeeObj.data.results[0].name.first} {employeeObj.data.results[0].name.last}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{employeeObj.data.results[0].name.first} {employeeObj.data.results[0].name.last}</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    {/* <a href="#" className="card-link">Card link</a> */}
                </div>
            </div>
    )}
        </div>
    )
}

export default EmployeeCard;