import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const url = "https://doctors-portal-server-seven-beta.vercel.app/users";
  const { data: users = [] , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => await fetch(url).then((res) => res.json()),
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://doctors-portal-server-seven-beta.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization : `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.modifiedCount){
            toast.success('Make admin successfully')
            refetch()
        }
        // console.log("Success:", data);
      });
    // console.log(id);
  };
  return (
    <div>
      <h2 className=" text-2xl font-semibold">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== 'admin' && <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className=" btn  btn-xs btn-primary"
                  >
                    Make Admin
                  </button>}
                </td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default AllUsers;
