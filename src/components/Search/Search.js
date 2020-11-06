import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import EmployeeCard from "./EmployeeCard"
import API from "../../utilities/API"

export class Search extends Component {
    state = {
        search: []
    }

    componentDidMount() {
        let employeeArr = []
        for( let i = 0; i < 20; i++){
            this.employeeSearch(employeeArr);
        }
        console.log(employeeArr)
        this.setState({search: employeeArr})
    }

    employeeSearch = (arr) => {
        API.search()
          .then(res => {
              let employee = res;
            arr.push(employee)
          })
          .catch(err => console.log(err));
      };


    render() {
        return (
            <div>
                <SearchInput />
                <EmployeeCard employee={this.state.search} />
            </div>
        )
    }
}


export default Search
