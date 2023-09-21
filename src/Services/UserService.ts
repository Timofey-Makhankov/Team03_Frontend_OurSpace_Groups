import api from '../config/Api';
import { User } from '../types/models/User.model';

const UserService = {
  getUser: async (userID: string): Promise<User> => {
    const { data } = await api.get<User>(`/user/${userID}`);
    return data;
  },

  getUserFromGroup: async (groupId: string, p = 0, i = 5) => {
    return api.get(`/user/group/${groupId}?p=${p}&i=${i}`)
  },

  updateUser: async (user: User) => {
    return api.put(`/user/${user.id}`, user);
  },

  addUser: async (user: User) => {
    const res = await api.post('/user/registerUser', user);
    return res.data;
  },

  getAllUsers: () => {
    return api.get(`/user`);
  },

  deleteUser: (id: string) => {
    return api.delete(`/user/${id}`);
  },
};

export default UserService;
