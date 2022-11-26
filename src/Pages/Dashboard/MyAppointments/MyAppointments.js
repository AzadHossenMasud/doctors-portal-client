import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const url = `https://doctors-portal-server-seven-beta.vercel.app/booking?email=${user.email}`;
  const { data: myAppointments = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () =>
      await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  //   console.log(MyAppointments);

  return (
    <div>
      <h2 className=" text-2xl font-semibold">My appontments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          {myAppointments && (
            <tbody>
              {myAppointments.map((appointment, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.treatmentName}</td>
                  <td>{appointment.slot}</td>
                  <td>
                    {appointment.price && !appointment.paid && (
                      <Link to={`/dashboard/payment/${appointment._id}`}>
                        <button type="" className="btn btn-primary">
                          Pay
                        </button>
                      </Link>
                    )}
                    {appointment.price && appointment.paid && <span>Paid</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
