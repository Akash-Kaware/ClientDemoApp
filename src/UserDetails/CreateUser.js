import { useState } from "react";
import { createUser } from "../Services/userDetails.service";


const CreateUser = ({ handleBackToList }) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.MobileNo = parseInt(inputs.MobileNo);
        inputs.LocationId = parseInt(inputs.Location);
        inputs.PassportExpirtDate = new Date(inputs.PassportExpirtDate);
        createUser(inputs).then(res => {
            if (res.data == 0) {
                alert('User created successfully.');
                handleBackToList(false);
            }
        }, error => {
            alert(error);
        });
    };

    return (
        <div className="row">
            <div className="div-header">Enter User Details </div>
            <form onSubmit={handleSubmit}>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><label>Employee Type : </label></td>
                                <td><input type="text" required className="form-control" id="EmployeeType" name="EmployeeType" value={inputs.EmployeeType || ""} onChange={handleChange} /></td>
                                <td> <label>Name:</label></td>
                                <td> <input type="text" required className="form-control" id="Name" name="Name" value={inputs.Name || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr>
                                <td><label>Mobile No. : </label></td>
                                <td><input type="number" maxLength="10" required className="form-control" id="MobileNo" name="MobileNo" value={inputs.MobileNo || ""} onChange={handleChange} /></td>
                                <td> <label>Email :</label></td>
                                <td> <input type="email" required className="form-control" id="Email" name="Email" value={inputs.Email || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr>
                                <td><label>Nationality : </label></td>
                                <td><input type="text" required className="form-control" id="Nationality" name="Nationality" value={inputs.Nationality || ""} onChange={handleChange} /></td>
                                <td> <label>Designation :</label></td>
                                <td> <input type="text" required className="form-control" id="Designation" name="Designation" value={inputs.Designation || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr>
                                <td><label>Passport No. : </label></td>
                                <td><input type="text" required className="form-control" id="PassportNo" name="PassportNo" value={inputs.PassportNo || ""} onChange={handleChange} /></td>
                                <td> <label>Passport Expirt Date:</label></td>
                                <td> <input type="text" required className="form-control" id="PassportExpirtDate" name="PassportExpirtDate" value={inputs.PassportExpirtDate || ""} onChange={handleChange} /></td>

                            </tr>
                            <tr>
                                <td><label>Passport :</label> </td>
                                <td>
                                    <input type="file" name="PassportFilePath" value={inputs.PassportFilePath || ""} onChange={handleChange} />
                                </td>
                                <td><label>Location : </label></td>
                                <td>
                                    <select className="form-control" id="Location" name="Location" value={inputs.Location || ""} onChange={handleChange}>
                                        <option value="0">--select--</option>
                                        <option value="1">India</option>
                                        <option value="2">UAE</option>
                                        <option value="3">US</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Create User" /> <br /><br />

                </div>
            </form>
            <div><button onClick={() => handleBackToList(false)}>Back to User List</button></div>
        </div>
    )
}

export default CreateUser;