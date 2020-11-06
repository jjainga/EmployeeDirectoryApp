import React from "react";


function EmployeeCard(props) {
    console.log(props)
    return (
        <div className="mt-0 p-3">
            {props.employee.map(employeeObj => <div className="card EmployeeCard col-3 d-inline-block"  key={employeeObj.data.info.seed}>
                <img className="card-img-top" src={employeeObj.data.results[0].picture.large} alt={employeeObj.data.results[0].name.first} />
                <div className="card-body">
                    <h5 className="card-title">{employeeObj.data.results[0].name.first} {employeeObj.data.results[0].name.last}</h5>
                    <p>{employeeObj.department}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Age: {employeeObj.data.results[0].dob.age}</li>
                    <li className="list-group-item">Gender: {employeeObj.data.results[0].gender}</li>
                    <li className="list-group-item"><a href={`tel:`+employeeObj.data.results[0].cell}>Phone: {employeeObj.data.results[0].cell}</a></li>
                </ul>
                <div className="card-body">
                    <a href={`mailto:`+employeeObj.data.results[0].email} className="card-link">Email: {employeeObj.data.results[0].email}</a>
                </div>
            </div>
    )}
        </div>
    )
}

export default EmployeeCard;