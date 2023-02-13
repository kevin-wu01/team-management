import axios from 'axios';
import { User } from '../types/UserTypes';

const baseURL = 'http://localhost:8000';

export function getUsers() {
  return axios.get(`${baseURL}/users/api`);
}

export function getUserById(id: string) {
  return axios.get(`${baseURL}/users/api/${id}/`);
}

export function updateUser(id: string, user: User) {
  return axios.put(`${baseURL}/users/api/${id}/`, user);
}

export function createUser(user: User) {
  return axios.post(`${baseURL}/users/api`, user);
}

export function deleteUser(id: string) {
  return axios.delete(`${baseURL}/users/api/${id}/`);
}
