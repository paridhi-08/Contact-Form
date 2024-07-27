import React from "react";
import { useForm } from "react-hook-form";
import { toast} from "react-toastify";


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
    toast.success('Message sent! Thanks for completing the form. We’ll be in touch soon!' );
  };

  return (
    <div className=" min-h-screen p-4 bg-green-200 flex flex-col  items-center overflow-x-hidden">
      <form
        onSubmit={handleSubmit(formSubmitHandler)} noValidate
        className="w-full max-w-lg flex flex-col bg-white rounded-xl m-11 p-6 gap-y-3 font-karla shadow-lg"
      >
        <h2 className="text-green-900 font-bold mb-4 ">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-x-6 gap-y-3 justify-between">
          <label className="flex flex-col gap-y-2 text-xs text-gray-500  ">
            First Name *
            <input
              type="text"
              name="firstname"
              className={`rounded-sm border md:w-52 h-8 capitalize outline-none ${errors.firstname ? 'border-red-600' : 'border-gray-300'}`}
              {...register("firstname", { required: "This field is required" , maxLength: {value: 20, message: "Firstname cannot exceed 20 characters"} })}
            />
            {errors.firstname && (
              <p className="text-red-600">{errors.firstname.message}</p>
            )}
          </label>
          <label className="flex flex-col gap-y-2 text-xs text-gray-500">
            Last Name *
            <input
              type="text"
              name="lastname"
              className={`rounded-sm border md:w-52 h-8 outline-none capitalize ${errors.lastname ? 'border-red-600' : 'border-gray-300'}`}
              {...register("lastname", { required: "This field is required" , maxLength: {value: 20, message: "LastName cannot exceed 20 characters"} })}
            />
            {errors.lastname && (
              <p className="text-red-600">{errors.lastname.message}</p>
            )}
          </label>
        </div>

        <label className="flex flex-col gap-y-2 text-xs text-gray-500">
          Email Address *
          <input
            type="email"
            name="email"
            className={`rounded-sm border h-8 outline-none ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
            {...register("email", {
              required: "This field is required",
              validate:{
                validEmail: (value)=>
                  /^\S+@\S+\.\S+$/.test(value) || "Please enter a valid e-mail address",
              }
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </label>

        <label className="flex flex-col gap-y-2 text-xs text-gray-500">
          Query Type *
        </label>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 justify-between">
          <div className="flex gap-x-2  ">
            <input
              type="radio"
              name="query"
              value="General Enquiry"
              {...register("query", { required: "Please select a query type" })}
            />
            <label className=" text-xs text-gray-500 inline-block px-4 py-2 border border-gray-300 rounded w-48">
              General Enquiry
            </label>
          </div>
          <div className="flex gap-x-2 ">
            <input
              type="radio"
              name="query"
              value="Support Request"
              {...register("query", { required: "Please select a query type" })}
            />
            <label className=" text-xs text-gray-500 inline-block px-4 py-2 border border-gray-300 rounded w-48 ">
              Support Request
            </label>
          </div>
        </div>
        {errors.query && (
            <p className="text-red-600 text-xs">{errors.query.message}</p>
          )}

      <div className="flex flex-col gap-y-2 ">
        <label className="text-xs text-gray-500">
          Message *
        </label>
        <textarea
          type="text"
          name="comment"
          className={`rounded-sm border h-20 outline-none capitalize ${errors.comment ? 'border-red-600' : 'border-gray-300' }`}
          {...register("comment", { required: "This field is required" })}
        >
        </textarea>
        </div>
        {errors.comment && (
          <p className="text-red-600 text-xs">{errors.comment.message}</p>
        )}

        <div className="flex gap-x-2">
          <input
            type="checkbox"
            name="checked"
            className="rounded-sm border border-gray-300 "
            {...register("checked", { required:"To submit this form, please consent to being contacted" })}
          />
          <label className=" text-xs text-gray-500 ">
            I consent to being contacted by team *
          </label>
        </div>
        {errors.checked && (
          <p className="text-red-600 text-xs">{errors.checked.message}</p>
        )}

        <input
          type="submit"
          value="Submit"
          className="bg-green-600 text-white text-xs p-2 rounded-md hover:bg-green-800"
        />

      </form>

      <div className = "text-[11px] text-center ">
        <p> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-blue-500">Frontend Mentor</a>. </p>
        <p> Coded by <a href="#" className="text-blue-500">Paridhi Chittlangia</a>.</p>
      </div>

    </div>
  );
};

export default Form;
