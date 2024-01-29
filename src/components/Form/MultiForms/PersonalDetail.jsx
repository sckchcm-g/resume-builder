import { useForm} from "react-hook-form";

const PersonalDetail = () => {

    const {register,handleSubmit} = useForm();
    const onSubmitData =(data)=>{
        console.log(data)
    }

  return (
    <div className="max-w-md mx-auto py-7 px-2 ">
        <h1 className="text-2xl my-4">Personal Details</h1>
        <form onSubmit={handleSubmit(onSubmitData)} className="space-y-4">

            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input {...register("name")} type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input {...register("email")} type="text" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input {...register("job_title")} type="text" placeholder="Job Title" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input {...register("number")} type="number" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input {...register("address")} type="text" placeholder="Address" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input {...register("city")} type="text" placeholder="City" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <div  className="flex justify-center">
                <button type="submit" className="  px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Save
                </button>
            </div>
        </form>
    </div>

  )
}

export default PersonalDetail