import { useEffect, useState } from "react";
import { enumLocations } from './@constant/userdetails.constant';
import { createUser, getUserById } from "../Services/userDetails.service";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateUser = ({ handleBackToList, userId }) => {

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        if (userId) {
            getUserById(userId).then(res => {
                res.passportExpirtDate = new Date(res.passportExpirtDate)
                setInputs(res);
            });
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.mobileNo = parseInt(inputs.mobileNo);
        inputs.locationId = parseInt(inputs.locationId);
        inputs.passportExpirtDate = new Date(inputs.passportExpirtDate).toISOString();
        createUser(inputs).then(res => {
            if (res.data === 0) {
                if (userId) {
                    alert('User updated successfully.');
                } else {
                    alert('User created successfully.');
                }
                handleBackToList(false);
            }
        }, error => {
            alert(error);
        });
    }

    const ddlLocations = enumLocations.map((loc) => {
        return <option value={loc.value}>{loc.label}</option>
    });
    return (
        <div className="row">
            <div className="div-header">Enter User Details </div>
            <form onSubmit={handleSubmit}>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr key="1">
                                <td><label>Employee Type : </label></td>
                                <td><input type="text" required className="form-control" id="employeeType" name="employeeType" value={inputs.employeeType || ""} onChange={handleChange} /></td>
                                <td> <label>Name:</label></td>
                                <td> <input type="text" required className="form-control" id="name" name="name" value={inputs.name || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr key="2">
                                <td><label>Mobile No. : </label></td>
                                <td><input type="text" maxLength={10} required className="form-control" id="mobileNo" name="mobileNo" value={inputs.mobileNo || ""} onChange={handleChange} /></td>
                                <td> <label>Email :</label></td>
                                <td> <input type="email" required className="form-control" id="email" name="email" value={inputs.email || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr key="3">
                                <td><label>Nationality : </label></td>
                                <td><input type="text" required className="form-control" id="nationality" name="nationality" value={inputs.nationality || ""} onChange={handleChange} /></td>
                                <td> <label>Designation :</label></td>
                                <td> <input type="text" required className="form-control" id="designation" name="designation" value={inputs.designation || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr key="4">
                                <td><label>Passport No. : </label></td>
                                <td><input type="text" required className="form-control" id="passportNo" name="passportNo" value={inputs.passportNo || ""} onChange={handleChange} /></td>
                                <td> <label>Passport Expirt Date:</label></td>
                                <td>
                                    <DatePicker className="form-control" id="passportExpirtDate" name="passportExpirtDate" selected={inputs.passportExpirtDate || ""} onChange={(date) => setInputs(values => ({ ...values, passportExpirtDate: date }))} />
                                </td>

                            </tr>
                            <tr key="5">
                                <td><label>Passport :</label> </td>
                                <td>
                                    <input type="file" name="passportFilePath" onChange={(e) => setInputs(values => ({ ...values, passport: e.target.files[0] }))} />
                                </td>
                                <td><label>Location : </label></td>
                                <td>
                                    <select className="form-control" id="locationId" name="locationId" value={inputs.locationId || ""} onChange={handleChange}>
                                        <option value="0">--select--</option>
                                        {ddlLocations}
                                    </select>
                                </td>
                            </tr>
                            <tr key="6">
                                <td><label>Photo :</label> </td>
                                <td>
                                    <input type="file" name="personPhoto" onChange={(e) => setInputs(values => ({ ...values, photo: e.target.files[0] }))} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value={`${userId ? 'Update' : 'Create'} User`} /> <br /><br />

                </div>
            </form>
            <div><button onClick={() => handleBackToList(false)}>Back to User List</button></div>
        </div>
    )
}

export default CreateUser;