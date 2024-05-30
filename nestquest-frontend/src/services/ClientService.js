import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/client';

export const listClients = () => axios.get(REST_API_BASE_URL + '/all');

export const createClient = (client) => axios.post(REST_API_BASE_URL, client);

export const getClient = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateClient = (id, client) => axios.put(REST_API_BASE_URL + '/' + id, client);

export const deleteClient = (id) => axios.delete(REST_API_BASE_URL + "/" + id);