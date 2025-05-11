import React from "react";
import { assets } from "../assets/assets";

//Input field component
const inputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  ></input>
);

const AddAddress = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form className="space-y-3 mt-6 text-sm" onSubmit={onSubmitHandler}>
            <div>
              <inputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <inputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </form>
        </div>
        <img
          className="mf:mr-16 mb-16 md:mt-0"
          src={assets.add_address_iamge}
          alt="Add Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
