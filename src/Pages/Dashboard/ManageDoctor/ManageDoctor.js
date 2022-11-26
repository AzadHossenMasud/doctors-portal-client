import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState("");
//   console.log(deleteDoctor);
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () =>
      await fetch("https://doctors-portal-server-seven-beta.vercel.app/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDoctor = ()=>{

    fetch(`https://doctors-portal-server-seven-beta.vercel.app/doctors/${deleteDoctor}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,

        }
    })
    .then( res => res.json())
    .then(data => {
        if(data.deletedCount){
            setDeleteDoctor('')
            toast.success('Delete doctor successfully')
            refetch()
        }
        // console.log(data);
    })
    // console.log(deleteDoctor)
  }

  return (
    <div>
      <h3 className=" text-2xl font-semibold">
        Manage doctor: {doctors?.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length &&
              doctors.map((doctor, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor.image} />
                      </div>
                    </div>
                  </td>
                  <td>{doctor?.name}</td>
                  <td>{doctor.speciality}</td>
                  <td>
                    <label
                      htmlFor="my-modal" onClick={()=>setDeleteDoctor(doctor._id)}
                      className="btn btn-xs border-none bg-[#E11244]"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure?</h3>
            <div className="modal-action">
              <label onClick={handleDoctor} htmlFor="my-modal" className="btn">
                confirm
              </label>
              <label htmlFor="my-modal" className="btn">
                cencel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
