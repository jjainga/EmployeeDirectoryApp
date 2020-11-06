import React from "react";

function SearchInput(props) {

    return ( 
        <div className="input-group SearchInput text-center">
            <form className="col-4 d-inline text-center">
            <datalist id="employees">
                {props.employee.map(employeeObj => 
                <option>
                    {employeeObj.data.results[0].name.first} {employeeObj.data.results[0].name.last}
                </option>)}
            </datalist>
                <div className="input-group-append d-inline">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter</button>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="dropdown-item" >Name: A-Z</li>
                            <li className="dropdown-item" >Name: Z-A</li>
                        <div role="separator" className="dropdown-divider"></div>
                            <li className="dropdown-item" >Department: Operations</li>
                            <li className="dropdown-item" >Department: Human Resources</li>
                            <li className="dropdown-item" >Department: IT</li>
                        </ul>
                    </div>
                </div>
            <input 
                type="text" 
                list="employees" 
                onChange={props.handleInput}
                value={props.query}
                className="form-control d-inline" 
                aria-label="Text input with dropdown button" 
            />
            </form>
  </div>


    )
}

export default SearchInput;