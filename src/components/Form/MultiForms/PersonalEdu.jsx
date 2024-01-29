
import { useForm} from "react-hook-form";

const PersonalEdu = () => {

    const {register,handleSubmit} = useForm();
    const onSubmitData =(data)=>{
        console.log(data)
    }

  return (
    <div className="max-w-md mx-auto py-7 px-2">
        <h2 className="text-2xl my-4">Personal Education</h2>
        <form onSubmit={handleSubmit(onSubmitData)} className="space-y-4">

        <label htmlFor="name" className="block text-sm font-medium text-gray-700">College Name</label>
        <input {...register("College Name")} type="text" placeholder="College Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input {...register("degree_start_date")} type="date" placeholder="Start Date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

        <label htmlFor="date" className="block text-sm font-medium text-gray-700">End Date</label>
        <input {...register("degree_end_date")} type="date" placeholder="End Date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

        <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Degree</label>
        <input {...register("Degree")} type="text" placeholder="Degree" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

        <label htmlFor="Field of Study" className="block text-sm font-medium text-gray-700">Field of Study</label>
        <input {...register("city")} type="text" placeholder="Field of Study" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

        <div  className="flex justify-center">
            <button type="submit" className="  px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Save
            </button>
        </div>
        </form>

    </div>
  )
}

export default PersonalEdu