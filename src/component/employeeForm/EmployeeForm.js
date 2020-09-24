import React from "react";
import Button from "../button/Button";
import { v4 as uuidv4 } from "uuid";

export default function AddEmloyee(props) {
    const handleChange = (e, index) => {
        // console.log(e.target.name, index);
    };

    const addSkill = (e, index) => {
        // console.log(e.target, index);
    };

    const updateSkill = (e, index1, index2) => {
        // console.log(e.target, index1);
    };

    const addContact = (e, index) => {
        // console.log(e.target, index);
    };

    const updateContact = (e, index1, index2) => {
        // console.log(e.target, index1);
    };

    const employees = props.employees.map((emp, empIndex) => {
        return (
            <div key={emp.index}>
                <label>Name:</label>
                <input
                    onChange={(e) => handleChange(e, empIndex)}
                    type="text"
                    name="name"
                    value={emp.name}
                />
                <br />
                <label>Designation:</label>
                <input
                    onChange={(e) => handleChange(e, empIndex)}
                    type="text"
                    name="designation"
                    value={emp.Designation}
                />
                <br />
                <label>Contact Details:</label>
                {emp.contactDetails.map((contact, i) => {
                    return (
                        <React.Fragment key={uuidv4()}>
                            <select name="contactType">
                                <option value="">Type</option>
                                <option value="">Primary</option>
                                <option value="">Emergecy</option>
                            </select>
                            <input
                                onChange={(e) => {
                                    updateContact(e, empIndex, i);
                                }}
                                type="text"
                                name="contactNumber"
                            />
                        </React.Fragment>
                    );
                })}
                <Button
                    handleClick={(e) => addContact(e, empIndex)}
                    type="button"
                    label="+"
                />
                <br />
                <label>Skills:</label>
                {emp.skills.map((skill, i) => {
                    return (
                        <input
                            key={uuidv4()}
                            onChange={(e) => {
                                updateSkill(e, empIndex, i);
                            }}
                            type="text"
                            name="skill"
                        />
                    );
                })}
                <Button
                    handleClick={(e) => addSkill(e, empIndex)}
                    type="button"
                    label="+"
                />
                <br />
                <label>Date of Birth:</label>
                <input
                    onChange={(e) => handleChange(e, empIndex)}
                    type="date"
                    name="dateOfBirth"
                    value={emp.dateOfBirth}
                />
                <br />
            </div>
        );
    });

    return (
        <form>
            {employees}
            <Button
                handleClick={props.addNewForm}
                type="button"
                label="Add Employee"
            />
            <Button type="submit" label="View Data" />
        </form>
    );
}
