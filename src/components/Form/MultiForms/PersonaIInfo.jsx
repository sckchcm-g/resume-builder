import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../reduxToolkit/FormDataSlice.jsx";
// import { FormSection } from "./MultiStepForm.jsx";

export default function PersonaIInfo() {
  const dispatch = useDispatch();
  const [formLevel, setForm] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [successMsg, setSuccessMsg] = useState("");

  function sumbitData(data) {
    dispatch(setUserData(data));
    setSuccessMsg("Data is updated.");
    reset();
  }

  return (
    // <div className="border-[#9333ea] border-2 shadow-[#9333ea] shadow-md p-6 mt-[20px] w-[90%]  h-[100%]  lg:w-[95%] xl:h-[65%] xl:w-[90%]">
      // <div className="border-[#9333ea] border-2 shadow-[#9333ea] shadow-md p-6 mt-[20px] w-[90%]  h-[100%]  lg:w-[95%] xl:h-[65%] xl:w-[90%]">
      // <div className="p-4 border-[#9333ea] border-2 shadow-[#9333ea] shadow-md h-auto w-[360px] md:w-[440px] lg:w-[440px] max-w-[590px]">
              // <div className="p-4 border-[#9333ea] border-2 shadow-[#9333ea] shadow-md h-auto w-[85%] md:w-[440px] lg:w-[440px] max-w-[590px]">
    <div className="p-6 mt-[20px] w-[90%]  h-[100%]  lg:w-[100%] xl:h-[65%] xl:w-[100%] border-[#9333ea] border-2 shadow-[#9333ea] shadow-md">

      {successMsg && (
        <p className=" absolute right-10 top-8 font-bold p-0 bg-green-600 px-3 py-0.5 rounded-tr-xl rounded-bl-xl inline-block text-white text-sm">
          {successMsg}
        </p>
      )}
      <h2 className="text-xl md:text-2xl md:w-[230px] font-semibold leading-7 text-gray-900 border-b-4 border-[#9333ea]  w-[200px] pb-[5px]">
        Personal Information
      </h2>
      {/* <div className="absolute border-t-4  border-purple-600 w-1/3"></div> */}
      <p className="my-1.5 text-base leading-6 text-gray-500">
        Get started with the basics: your name and contact information
      </p>

      {/* <form
        className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6"
        onSubmit={handleSubmit(sumbitData)}
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-normal leading-6 text-gray-900 "
          >
            First Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="first-name"
              {...register("firstName", {
                required: "enter your first name please!!",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "name should contain only characters.",
                },
              })}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
            {errors.firstName && (
              <p className="text-red-600 py-0 mx-0 font-sans text-sm ">
                {errors.firstName.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="off"
              {...register("last-name", {
                required: "enter your last name please!!",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "name should contain only characters.",
                },
              })}
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
            {errors["last-name"] && (
              <p className="text-red-600 py-0 mx-0 font-sans text-sm ">
                {errors["last-name"].message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="email-address"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email-address"
              id="email-address"
              {...register("email-address", {
                required: "email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "enter the vaild email",
                },
              })}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
            {errors["email-address"] && (
              <p className="text-red-600 py-0 mx-0 font-sans text-sm ">
                {errors["email-address"].message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="address"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="off"
              {...register("address")}
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="city"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              {...register("city")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="city-code"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            City Code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city-code"
              id="city-code"
              {...register("city-code")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="state"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            State
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="state"
              id="state"
              {...register("state")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="country"
              id="country"
              {...register("country")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-normal text-gray-900 "
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            {...register("description")}
            className="flex p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder="e.g. Supported mentor teacher throughout lessons by preparing…"
          ></textarea>
        </div>

        <div className="flex px-2">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-3   rounded"
          >
            Save
          </button>
        </div>
      </form> */}
            <form
        className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6"
        onSubmit={handleSubmit(sumbitData)}
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-normal leading-6 text-gray-900 "
          >
            First Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="first-name"
              {...register("firstName", {
                required: "enter your first name please!!",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "name should contain only characters.",
                },
              })}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
            {errors.firstName && (
              <p className="text-red-600 py-0 mx-0 font-sans text-sm ">
                {errors.firstName.message}
              </p>
            )}
          </div>
        </div>

        {/*  */}
  
{/*  */}
        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="off"
              {...register("last-name", {
                required: "enter your last name please!!",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "name should contain only characters.",
                },
              })}
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
            {errors["last-name"] && (
              <p className="text-red-600 py-0 mx-0 font-sans text-sm ">
                {errors["last-name"].message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="email-address"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email-address"
              id="email-address"
              {...register("email-address", {
                required: "email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "enter the vaild email",
                },
              })}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
            {errors["email-address"] && (
              <p className="text-red-600 py-0 mx-0 font-sans text-sm ">
                {errors["email-address"].message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="address"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="off"
              {...register("address")}
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="city"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              {...register("city")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="city-code"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            City Code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city-code"
              id="city-code"
              {...register("city-code")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="state"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            State
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="state"
              id="state"
              {...register("state")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="country"
              id="country"
              {...register("country")}
              autoComplete="off"
              className="block w-[90%] lg:w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-normal text-gray-900 "
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            {...register("description")}
            className="flex p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder="e.g. Supported mentor teacher throughout lessons by preparing…"
          ></textarea>
        </div>

        <div className="flex px-2">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-3   rounded"
          >
            Save
          </button>
        </div>
      </form>
      {/* <span className="block w-[70%] h-0.5 mt-4 bg-purple-200"></span> */}
    </div>
  );
}
