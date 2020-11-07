import React from "react";

function SearchInput(props) {
    return ( 
        <div className="input-group SearchInput text-center">
            <form className="col-4 d-inline text-center" onSubmit={props.handleSubmit} >
            <datalist id="employees">
                {props.employee.map(employeeObj => 
                <option key={employeeObj.dob.date}>
                    {employeeObj.name.first} {employeeObj.name.last}
                </option>)}
            </datalist>
                <div className="input-group-append d-inline">
                    <button 
                        className="btn btn-outline-secondary dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                    >Filter</button>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="dropdown-item" ><button value="ascending" onClick={props.handleClick}>Name: A-Z</button></li>
                            <li className="dropdown-item" ><button value="descending" onClick={props.handleClick}>Name: Z-A</button></li>
                        <div role="separator" className="dropdown-divider"></div>
                            <li className="dropdown-item" ><button value="Operations" onClick={props.handleClick}>Department: Operations</button></li>
                            <li className="dropdown-item" ><button value="Human Resources" onClick={props.handleClick}>Department: Human Resources</button></li>
                            <li className="dropdown-item" ><button value="IT" onClick={props.handleClick}>Department: IT</button></li>
                        <div role="separator" className="dropdown-divider"></div>
                            <li className="dropdown-item" ><button value="Clear" onClick={props.handleClick}>Clear Filter</button></li>
                        </ul>
                    </div>
                </div>
            <input 
                type="text" 
                list="employees" 
                onChange={props.handleInput}
                value={props.query}
                name="query"
                placeholder="Search By Employee Name"
                className="form-control" 
                aria-label="Text input with dropdown button" 
            />
            </form>
  </div>


    )
}

export default SearchInput;