import { baseURL } from './authentication.service';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';
import axios, { post } from 'axios';

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

export const downloadFile = (filename) => {
    axios({
        url: `${baseURL}/User/Download?filename=${filename}`,
        method: 'POST',       
        responseType: 'blob', 
        headers: authHeader(),
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
    });
}
