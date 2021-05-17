import React from "react";

function EmpDir(props) {
    const Row = (props) => {
        return (
            <tr>
                <td className="align-middle"><img src={props.employee.img} alt="Employee Picture" /></td>
                <td className="text-center align-middle">{props.employee.firstName + " " + props.employee.lastName}</td>
                <th data-name="firstName" onClick={props.sortTable}>Name 🔻</th>
                <th data-name="phone" onClick={props.sortTable}>Phone</th>
                <th data-name="cell" onClick={props.sortTable}>Cell</th>
                <th data-name="email" onClick={props.sortTable}>Email</th>
            </tr>
        );
    };


return (
    <div className="wrapper">
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
                <th data-name="img" onClick={props.sortTable}></th>
                <th data-name="firstName" onClick={props.sortTable}>Name 🔻</th>
                <th data-name="phone" onClick={props.sortTable}>Phone</th>
                <th data-name="cell" onClick={props.sortTable}>Cell</th>
                <th data-name="email" onClick={props.sortTable}>Email</th>
            </thead>
        </table>
    </div>
);

}

export default EmpDir;