import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(existingUsers);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setError('Enter the name');
            return;
        }
        if (!email) {
            setError('Enter the email');
            return;
        }
        if (!phone) {
            setError('Enter the phone number');
            return;
        }

        setError('');
        const newUser = { name, email, phone };
        const updatedUsers = [...users, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add User</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <TextField
                    label="Enter Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />
                <TextField
                    label="Enter Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />
                <TextField
                    label="Enter Phone Number"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <br /><br />
                <Button variant="outlined" type="submit">Add User</Button>
            </form>
            <h3>User List</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {users.map((user, index) => (
                    <Card key={index} variant="outlined" style={{ width: '250px' }}>
                        <CardContent>
                            <Typography variant="h6">{user.name}</Typography>
                            <Typography color="textSecondary">{user.email}</Typography>
                            <Typography color="textSecondary">{user.phone}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AddUser;
