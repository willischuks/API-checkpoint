// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserListContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `;

    const UserListTitle = styled.h1`
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
    `;

    const UserItem = styled.li`
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;

    const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListOfUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <UserListContainer>
        <UserListTitle>User List</UserListTitle>
        <ul>
            {listOfUsers.map((user) => (
            <UserItem key={user.id}>{user.name}</UserItem>
            ))}
        </ul>
        </UserListContainer>
    );
};

export default UserList;
