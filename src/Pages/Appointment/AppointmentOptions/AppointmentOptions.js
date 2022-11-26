import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import BookingModal from "../BookingModal/BookingModal";

const AppointmentOptions = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatMent] = useState(null);
  const date = format(selectedDate, "PP")

  const {data: appointmentOptions = [] , refetch, isLoading} = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn:  async () => await fetch(`https://doctors-portal-server-seven-beta.vercel.app/appointmentOptions?date=${date}`).then((res) =>
    res.json()
  ),
  });

  //   console.log(treatment)
  // useEffect(() => {
  //   fetch("https://doctors-portal-server-seven-beta.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  // console.log(appointmentOptions)

  if(isLoading){
    return <button className="btn btn-square loading"></button>
  }
  return (
    <div>
      <div className="my-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around">
        {appointmentOptions.map((option) => (
          <AppointmentCard
            key={option._id}
            option={option}
            setTreatMent={setTreatMent}
          ></AppointmentCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatMent={setTreatMent}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppointmentOptions;
