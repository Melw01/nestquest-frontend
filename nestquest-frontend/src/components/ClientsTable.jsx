import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

const ClientsTable = ({ clients, updateClient, removeClient }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow key={client.id}>
                            <TableCell>{client.id}</TableCell>
                            <TableCell>{client.firstName}</TableCell>
                            <TableCell>{client.lastName}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.phoneNumber}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => updateClient(client.id)}>Update</Button>
                                <Button variant="contained" color="secondary" onClick={() => removeClient(client.id)} style={{marginLeft: '10px'}}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ClientsTable;
