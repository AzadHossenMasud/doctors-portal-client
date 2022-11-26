import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate()

  const imageHostKey = process.env.REACT_APP_imageApiKey;

  const { data: specialities = [] } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () =>
      await fetch("https://doctors-portal-server-seven-beta.vercel.app/appointmentSpeciality").then((res) =>
        res.json()
      ),
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];

    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    // console.log(url, image);

    fetch(url, {
      method: 'POST',
      body:formData
    })
    .then((response) => response.json())
  .then((result) => {
    if(result.success){
      const doctor = {
        name: data.name,
        email : data.email,
        speciality: data.speciality,
        image: result.data.url
      }
      // console.log(doctor)

      fetch('https://doctors-portal-server-seven-beta.vercel.app/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization : `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(doctor)
      })
      .then(res => res.json())
      .then(resultData => {
        if(resultData.acknowledged){
          toast.success(`${data.name} added successfully`)
          navigate('/dashboard/managedoctor')
        }
        // console.log(data);
      })
    }
    // console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

   
  };
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-semibold my-12">Add Doctor</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "User Name is required" })}
              type="text"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className=" text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className=" text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("speciality")}
            >
              {specialities &&
                specialities.map((speciality, i) => (
                  <option key={speciality._id} value={speciality.name}>
                    {speciality.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", { required: "Photo is required" })}
              type="file"
              name="image"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className=" text-red-600" role="alert">
                {errors.image?.message}
              </p>
            )}
          </div>

          <input
            className=" btn w-full my-3 max-w-xs bg-[#3A4256]"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
