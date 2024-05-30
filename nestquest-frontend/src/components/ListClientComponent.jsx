import React, {useEffect, useState} from 'react'
import { listClients, deleteClient } from '../services/ClientService'
import { useNavigate } from 'react-router-dom'
import { ClientsTable } from './ClientsTable';

const ListClientComponent = () => {

    const [clients, setClients] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllClients();
    }, [])

    function getAllClients() {
        listClients().then((response) => {
            setClients(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewClient() {
        navigator('/add-client')
    }

    function updateClient(id) {
        navigator(`/edit-client/${id}`)
    }

    function removeClient(id) {
        deleteClient(id).then((response) => {
            getAllClients();
        }).catch(error => {
            console.error(error);
        })
    }


    return (
    <div className='container'>
        <h2 className='text-center'>Client List</h2>
        <button className='btn btn-primary mb-2' onClick={addNewClient}>Add Client</button>
        <ClientsTable></ClientsTable>
    </div>
  )
}

export default ListClientComponent 