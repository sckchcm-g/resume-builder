import { useState } from "react";
import { useForm } from "react-hook-form";
const Experience = () => {
  const { register, handleSubmit, reset } = useForm();

  const [successMsg, setSuccessMsg] = useState("");

  function sumbitData(data) {
    console.log(data);

    setSuccessMsg("Data is updated.");

    reset();
  }
  return (
    <div className="p-6 m-4 w-full h-[100vh] lg:w-full shadow-purple-100 shadow-lg verflow-hidden  rounded-xl    relative">
      {successMsg && (
        <p className=" absolute right-10 top-8 font-bold p-0 bg-green-600 px-3 py-0.5 rounded-tr-xl rounded-bl-xl inline-block text-white text-sm">
          {successMsg}
        </p>
      )}
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 ">
        Professional Experience
      </h2>
      {/* <div className="absolute border-t-4  border-purple-600 w-1/3"></div> */}
      <p className=" text-sm  leading-6 text-gray-500 ">
        Tell me about most recent jobs
      </p>

      <form
        className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 "
        onSubmit={handleSubmit(sumbitData)}
      >
        <div className="sm:col-span-3">
          <label
            htmlFor="position-title"
            className="block text-sm font-normal leading-6 text-gray-900 "
          >
            Position Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="positionTitle"
              id="position-title"
              {...register("positionTitle")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="company-name"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Company Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="companyName"
              id="company-name"
              autoComplete="off"
              {...register("companyName")}
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="start-date"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Start Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="startDate"
              id="start-date"
              {...register("startDate")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="end-date"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            End Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="endDate"
              id="end-date"
              {...register("endDate")}
              autoComplete="off"
              className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-1 text-xs text-slate-500 flex items-center gap-1">
            <label htmlFor="currentEmployed">current employed</label>
            <input
              type="checkbox"
              name="currentEmployed"
              id="currentEmployed"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-normal text-gray-900 "
          >
            Work summary
          </label>
          <textarea
            id="message"
            rows="4"
            name="description"
            {...register("description")}
            className="flex p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder="e.g. Supported mentor teacher throughout lessons by preparing…"
          ></textarea>
        </div>

        <div className="flex flex-col mt-2">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-3   rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default Experience;
