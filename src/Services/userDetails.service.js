import { baseURL } from './authentication.service';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const createUser = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${baseURL}/User/Create`, requestOptions)

        .then(response => {
            return response
        });
}

export const getUsers = () => {
    const requestOptions = { method: 'GET', headers: authHeader() };

    return fetch(`${baseURL}/User/Get`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response
        });
}

