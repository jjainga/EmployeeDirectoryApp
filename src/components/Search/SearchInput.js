import React from "react";

function SearchInput(props) {
    return ( 
        <div className="input-group SearchInput text-center">
            {/* <form className="d-inline text-center row" onSubmit={props.handleSubmit} > */}
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
                            <button className="dropdown-item" value="ascending" onClick={props.handleClick}>Name: A-Z</button>
                            <button className="dropdown-item" value="descending" onClick={props.handleClick}>Name: Z-A</button>
                        <div role="separator" className="dropdown-divider"></div>
                            <button className="dropdown-item" value="Operations" onClick={props.handleClick}>Department: Operations</button>
                            <button className="dropdown-item" value="Human Resources" onClick={props.handleClick}>Department: Human Resources</button>
                            <button className="dropdown-item" value="IT" onClick={props.handleClick}>Department: IT</button>
                        <div role="separator" className="dropdown-divider"></div>
                            <button className="dropdown-item" value="Clear" onClick={props.handleClick}>Clear Filter</button>
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
                className="form-control d-inline" 
                aria-label="Text input with dropdown button" 
            />
            {/* </form> */}
  </div>


    )
}

export default SearchInput;