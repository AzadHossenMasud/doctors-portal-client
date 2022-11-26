import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const BookingModal = ({ treatment,setTreatMent, selectedDate, refetch }) => {
  const { name, slots, price } = treatment;
  // console.log(treatment)
  const date = format(selectedDate, "PP")
  const {user}=useContext(AuthContext)
  // console.log(user)
  console.log( selectedDate);
  const handleBooking = event =>{
    event.preventDefault()
    const form = event.target
    const slot = form.slot.value
    const patientName = form.name.value
    const phone = form.phone.value
    const email = form.email.value

    const booking = {
      patientName,
      treatmentName:name,
      slot, phone,
      email,
      bookingDate : date,
      price


    }
    console.log(booking);

    fetch('https://doctors-portal-server-seven-beta.vercel.app/booking',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    } )
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.acknowledged){
        setTreatMent(null)
        toast.success('Booking successfully')
        refetch()
      } else{
        toast.error(data.message)

      }
    })
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="py-4 grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Type here"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name='slot' className="select select-bordered w-full ">
              <option disabled>
                Who shot first?
              </option>
              {
                slots.map((slot, i) => <option key={i}  value={slot}>{slot}</option> )
              }
              
              
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <button type="submit" className=" btn btn-dark max-w-xs mx-auto">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
