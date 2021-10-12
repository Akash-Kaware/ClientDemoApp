import { useEffect, useState } from 'react';
import { getUsers } from '../Services/userDetails.service';

const UsersList = ({ handleCreateClick }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(resp => {
            setUsers(resp);
        })
    }, []);

    const handleDelete = (id) => {
        alert(`delete API call where ID = ${id} `);
    }

    const handleEdit = (id) => {
        alert(`Edit API call where ID = ${id}`);
    }

    const listContent = users.map(obj => {
        return (<tr>
            <td>{obj.employeeType}</td>
            <td>{obj.name}</td>
            <td>{obj.mobileNo}</td>
            <td>{obj.email}</td>
            <td>{obj.nationality}</td>
            <td>{obj.designation}</td>
            <td>{obj.passportNo}</td>
            <td>{obj.passportExpirtDate}</td>
            <td>{obj.locationId}</td>
            <td><button onClick={() => handleEdit(obj.id)}>Edit</button> &nbsp;&nbsp;
                <button onClick={() => { handleDelete(obj.id) }}>Delete</button></td>
        </tr>
        )
    });
    return (
        <>
            <div className="row">
                <div className="div-header">List of Users </div>
                <div><button onClick={() => handleCreateClick(true)}>Create User</button></div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employee Type </th>
                                <th>Name</th>
                                <th>Mobile No.</th>
                                <th>Email </th>
                                <th>Nationality </th>
                                <th>Designation</th>
                                <th>Passport No.</th>
                                <th>Passport Expirt Date</th>
                                <th>Location</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listContent}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UsersList;

