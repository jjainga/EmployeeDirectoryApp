import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import EmployeeCard from "./EmployeeCard"
import API from "../../utilities/API"

export class Search extends Component {
    state = {
        search: [],
        query: ""
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
              const departments = ["IT", "Human Resources", "Operations"]
              let employee = res;
              employee.department = departments[Math.floor(Math.random()*departments.length)]
            arr.push(employee)
          })
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

      
    render() {
        return (
            <div>
                <SearchInput employee={this.state.search} query={this.state.quer} handleInput={this.handleInputChange} />
                <EmployeeCard employee={this.state.search} />
            </div>
        )
    }
}


export default Search
