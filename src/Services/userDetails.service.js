import { baseURL } from './authentication.service';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';
import { post } from 'axios';

export const createUser = (user) => {
    const formData = new FormData();
    Object.keys(user).forEach(key => {
        formData.append(key, user[key]);
    });
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            ...authHeader(),
        },
    };

    return post(`${baseURL}/User/Create`, formData, config)
        .then(response => {
            return response.data;
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

export const getUserById = (id) => {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${baseURL}/User/GetById?id=${id}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response
        });
}


export const deleteUsers = (id) => {
    const requestOptions = { method: 'DELETE', headers: authHeader() };
    return fetch(`${baseURL}/User/Delete?id=${id}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response
        });
}

