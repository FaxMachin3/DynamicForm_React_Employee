import React, { Component } from "react";
import AddEmployee from "../employeeForm/EmployeeForm";
import EmployeeData from "../employeeData/EmployeeData";
import { v4 as uuidv4 } from "uuid";

export default class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        };
    }

    addNewForm = () => {
        this.setState((prevState) => ({
            employees: [
                ...prevState.employees,
                {
                    index: uuidv4(),
                    name: "",
                    designation: "",
                    contactDetails: [{}],
                    skills: [""],
                    dateOfBirth: "",
                },
            ],
        }));
    };

    componentDidMount() {
        this.setState((prevState) => ({
            employees: [
                ...prevState.employees,
                {
                    index: uuidv4(),
                    name: "",
                    designation: "",
                    contactDetails: [{ type: "primary", number: "" }],
                    skills: [""],
                    dateOfBirth: "",
                },
            ],
        }));
    }

    render() {
        return (
            <>
                <AddEmployee
                    addNewForm={this.addNewForm}
                    employees={this.state.employees}
                />
                <EmployeeData state={this.state}/>
            </>
        );
    }
}
