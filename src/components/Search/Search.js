import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import EmployeeCard from "./EmployeeCard"
import API from "../../utilities/API"

export class Search extends Component {
    state = {
      //keep employees
        employee: [],
        //display to page
        search: [],
        query: ""
    }

    componentDidMount() 
    {
      API.search().then(res => 
        {
          return res.data.results
        }).then(employee =>
          {
            const departments = ["IT", "Human Resources", "Operations"]
            let newArr = employee.map(roleObj =>  ({...roleObj, department: departments[Math.floor(Math.random()*departments.length)]}))
            return newArr
          }).then(newArr => 
            {
              this.setState({employee: newArr, search: newArr})
            }).catch(err => 
              console.log(err)
            );
    }


      handleInputChange = event => {
        
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
        let filterArr = this.state.employee.filter(emplObj => {
          return emplObj.name.first.includes(this.state.query) || emplObj.name.last.includes(this.state.query)
        })
      this.setState({search: filterArr})
        };

      handleFormSubmit = event => {
        event.preventDefault();
      };

      handleClick = event => {
        const value = event.target.value
        switch (value){
          case "ascending":
            let acesState = this.state.employee.sort((a,b) => ((a.name.last > b.name.last) ? 1: -1))
            console.log(acesState)
            this.setState({ search : acesState})
            break;
          case "descending":
            let decsState = this.state.employee.sort((a,b) => ((a.name.last > b.name.last) ? -1: 1))
            this.setState({ search : decsState})
            break;
          case "Operations":
            let opsState = this.state.employee.filter(opsEmployee => opsEmployee.department === "Operations")
            this.setState({ search: opsState})
            break;
          case "Human Resources":
            let hrState = this.state.employee.filter(hrEmployee => hrEmployee.department === "Human Resources")
            this.setState({ search: hrState})
            break;
          case "IT":
            let itState = this.state.employee.filter(itEmployee => itEmployee.department === "IT")
            this.setState({ search: itState})
            break;
            case "Clear":
              this.setState({ search: this.state.employee})
              break;
          default:
  
        }
      }
      
    render() {
        return (
            <div>
                <SearchInput employee={this.state.employee} query={this.state.query} handleInput={this.handleInputChange} handleSubmit={this.handleFormSubmit} handleClick={this.handleClick} />
                <EmployeeCard employee={this.state.search} />
            </div>
        )
    }
}


export default Search
