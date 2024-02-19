import {useState} from 'react'
import {useForm} from 'react-hook-form'

const CertificatesForm = () => {

    const {reset,register,handleSubmit} = useForm();
    const [AddedCertificates, setCertficate] = useState();
    function onSubmit(data){
        console.log(data);
        reset();
    }

  return (
    <div>
        <div className="border border-gray-200 p-4 my-4">
            <h2 className="font-semibold text-2xl">Add Certificates</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="my-4">
                <label>Certificate Name</label>
                <input
                placeholder="Add Certificate Name"
                type="text"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
                {...register("Certificate_Name",{
                    required: " Certificate Name Required!"
                })}
                ></input>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col"> 
                        <label>Institution</label>
                        <input className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full">
                        </input>
                    </div>
                    <div className="flex flex-col"> 
                        <label>Date</label>
                        <input
                            type="date"
                            name="startDate"
                            id="start-date"
                            {...register("startDate")}
                            autoComplete="off"
                            className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-auto"/>
                    </div>
                </div>
                <label>Description</label>
                <textarea
                        id="message"
                        rows="5"
                        name="description"
                        {...register("description")}
                        className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
                        placeholder="e.g. Add Summary here"
                    ></textarea>
                              <button
            type="submit"
            className=" bg-indigo-700 text-white py-2 px-3 rounded-md flex flex-row justify-center cursor-pointer "
          >
            Submit
          </button>
            </form>
        </div>
    </div>
  )
}

export default CertificatesForm