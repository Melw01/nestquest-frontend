import React, {useEffect, useState} from 'react'
import { listClients, deleteClient } from '../services/ClientService'
import { useNavigate } from 'react-router-dom'
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
        <table className='table table-striped table-bordered'> 
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(client => 
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                            <td>{client.email}</td>
                            <td>{client.phoneNumber}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateClient(client.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeClient(client.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListClientComponent 