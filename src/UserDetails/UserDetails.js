import { useState } from "react";
import { authenticationService } from "../Services/authentication.service";
import CreateUser from './CreateUser';
import UsersList from './UserList';

import './UserDetails.css';

const UserDetails = (props) => {
    const [isCreateOrUpdate, setIsCreateOrUpdate] = useState(false);

    const handleCreateOrList = (e) => {
        setIsCreateOrUpdate(e);
    }
    return (
        <>
            <button className="pull-right" onClick={() => { authenticationService.logout(); props.history.push('/'); }}>Log out</button>
            <div className="container">
                {isCreateOrUpdate ?
                    <CreateUser handleBackToList={handleCreateOrList} /> : <UsersList handleCreateClick={handleCreateOrList} />}
            </div>
        </>

    )
}

export default UserDetails;
