import axios from "axios";
import { useEffect, useState } from "react";

export const User = () => {

  const [users, setUsers] = useState([]);
const  VITE_BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

  const fetchUsers = async() => {
    try{
    const res = await axios.get(`${VITE_BACKEND_URL}/api/users`);
    setUsers(res.data.response);

    }catch(err){
      console.log("User Data Not Found",err)
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

 

  const handleEdit = async(id) => {
   const res=await axios.put(`${VITE_BACKEND_URL}/api/update/${id}`);
console.log(res.data.msg)
    fetchUsers();
  };

  const handleDelete = async (id) => {
    const res=await axios.delete(`${VITE_BACKEND_URL}/api/delete/${id}`);
console.log(res.data.msg)
    fetchUsers();
  };

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleEdit(user._id)} className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

