import React from "react";
import "./style.css";

function Employee(props) {
    const Row = (props) => {
        return (
            <tr>
                <td className="align-middle"><img src={props.employee.img} alt={props.firstName}/></td>
                <td className="text-center align-middle">{props.employee.firstName + " " + props.employee.lastName}</td>
                <td className="text-center align-middle">{props.employee.phone}</td>
                <td className="text-center align-middle">{props.employee.cell}</td>
                <td className="text-center align-middle">{props.employee.email}</td>
            </tr>
        );
    }
export default Employee;