import React, {useEffect, useState} from 'react'
import { listUsers } from '../services/UserService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {

    const [users, setUsers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewUser() {
        navigator('/add-user')
    }

    function updateUser(id) {
        navigator(`/edit-user/${id}`)
    }

    return (
    <div className='container'>
        <h2 className='text-center'>List of Users</h2>
        <button className='btn btn-primary mb-2' onClick={addNewUser}>Add User</button>
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
                    users.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateUser(user.id)}>Update</button>
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

export default ListEmployeeComponent 