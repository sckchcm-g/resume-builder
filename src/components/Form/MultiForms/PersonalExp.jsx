import { useForm,Controller} from "react-hook-form";

const PersonalExp = () => {

  const {register,handleSubmit,control } = useForm();
  const onSubmitData =(data)=>{
      console.log(data)
  }

  return (
    <div className="max-w-md mx-auto py-7 px-2">
        <h2 className="text-2xl my-4">Personal Experience</h2>
        <form onSubmit={handleSubmit(onSubmitData)} className="space-y-4">

          <label htmlFor="" className="block font-medium text-gray-700">Position Title</label>
          <input {...register("Position_title")} type="text" placeholder="Position Title" className=" w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

          <label htmlFor="" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input {...register("Company_Name")} type="text" placeholder="Company_Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input {...register("degree_start_date")} type="date" placeholder="Start Date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

        <label htmlFor="date" className="block text-sm font-medium text-gray-700">End Date</label>
        <input {...register("degree_end_date")} type="date" placeholder="End Date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

          <label htmlFor="Field of Study" className="block text-sm font-medium text-gray-700">Description</label>
          {/* <input {...register("city")} type="textarea" placeholder="Field of Study" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" /> */}
          <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => <textarea placeholder="Description" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" {...field} rows="4" cols="50" />}
        />
        <div className="flex justify-center">
            <button type="submit" className="  px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Save
            </button>
        </div>
        </form>

    </div>
  )
}

export default PersonalExp