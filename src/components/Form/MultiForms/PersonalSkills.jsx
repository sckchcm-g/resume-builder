import { useForm} from "react-hook-form";

const PersonalSkills = () => {
  const {register,handleSubmit} = useForm();
  const onSubmitData =(data)=>{
      console.log(data)
  }

  return (
    <div>
              <h1 className="text-2xl my-4">Personal Details</h1>
        <form onSubmit={handleSubmit(onSubmitData)} className="space-y-4">

            <label htmlFor="" className="block text-sm font-medium text-gray-700">Skills</label>
            <input {...register("skills")} type="text" placeholder="Skills" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

            <div  className="flex justify-center">
                <button type="submit" className="  px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Save
                </button>
            </div>
        </form>
    </div>
  )
}

export default PersonalSkills