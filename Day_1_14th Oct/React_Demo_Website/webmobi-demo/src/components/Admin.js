// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Admin = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/auth/users');
//       setUsers(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching users:', err);
//       if (err.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         setError(`Server responded with status: ${err.response.status}`);
//       } else if (err.request) {
//         // The request was made but no response was received
//         setError('No response from server. Make sure the backend is running.');
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         setError('Error: ' + err.message);
//       }
//       setLoading(false);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="error-message">{error}</div>;

//   return (
//     <div className="admin-container">
//       <h2>All Users</h2>
//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Admin;