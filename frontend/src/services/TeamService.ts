import axios from 'axios';
import { User } from '../types/UserTypes';

const baseURL = 'http://localhost:8000';

// default non-expiring token is used as there is no login functionality
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4OTQzNjczLCJpYXQiOjE2NzYzNTE2NzMsImp0aSI6IjZiMmI0NzA4YWNlMTQ5MTU5NGVlMTE5ZDZhYTBhYzhlIiwidXNlcl9pZCI6MX0.zTqURHP9-GJigLBz77sKaZyINU2ieOblrm1B11cumaY';
const authObject = { headers: { Authorization: `Bearer ${token}` } };

export function getUsers() {
  return axios.get(`${baseURL}/users/api`, authObject);
}

export function getUserById(id: string) {
  return axios.get(`${baseURL}/users/api/${id}/`, authObject);
}

export function updateUser(id: string, user: User) {
  return axios.put(`${baseURL}/users/api/${id}/`, user, authObject);
}

export function createUser(user: User) {
  return axios.post(`${baseURL}/users/api`, user, authObject);
}

export function deleteUser(id: string) {
  return axios.delete(`${baseURL}/users/api/${id}/`, authObject);
}
