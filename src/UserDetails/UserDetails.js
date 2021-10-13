import { useState } from "react";
import { authenticationService } from "../Services/authentication.service";
import CreateUser from './CreateUser';
import UsersList from './UserList';

import './UserDetails.css';

const UserDetails = (props) => {
    const [isCreateOrUpdate, setIsCreateOrUpdate] = useState(false);
    const [userId, setUserId] = useState();

    const handleCreateOrList = (e, uId) => {
        setIsCreateOrUpdate(e);
        setUserId(uId);
    }
    return (
        <>
            <button className="pull-right" onClick={() => { authenticationService.logout(); props.history.push('/'); }}>Log out</button>
            <div className="container">
                {isCreateOrUpdate ?
                    <CreateUser handleBackToList={handleCreateOrList} userId={userId} /> :
                    <UsersList handleCreateClick={handleCreateOrList} />}
            </div>
        </>

    )
}

export default UserDetails;
