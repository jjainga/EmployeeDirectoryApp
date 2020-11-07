import React from "react";


function EmployeeCard(props) {
    return (
        <div className="mt-0 p-3">
            {props.employee.map(employeeObj => <div className="card EmployeeCard col-3 d-inline-block"  key={employeeObj.dob.date}>
                <img className="card-img-top" src={employeeObj.picture.large} alt={employeeObj.name.first} />
                <div className="card-body">
                    <h5 className="card-title">{employeeObj.name.first} {employeeObj.name.last}</h5>
                    <p>{employeeObj.department}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Age: {employeeObj.dob.age}</li>
                    <li className="list-group-item">Gender: {employeeObj.gender}</li>
                    <li className="list-group-item"><a href={`tel:`+employeeObj.cell}>Phone: {employeeObj.cell}</a></li>
                </ul>
                <div className="card-body">
                    <a href={`mailto:`+employeeObj.email} className="card-link">Email: {employeeObj.email}</a>
                </div>
            </div>
    )}
        </div>
    )
}

export default EmployeeCard;