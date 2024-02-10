import {useState} from 'react'
import {useForm} from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./quill.css"
import DOMPurify from 'dompurify';
import { MdDelete } from "react-icons/md";

const CustomFormTab = ({data,DeletCustomTab,idForCustom}) =>{
    const description = data.description;
    const SantizedHtml = DOMPurify.sanitize(description);

    return(
        <div
        className="border border-green-400 w-[100%] my-2 py-1 px-4 ">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl">
                    {data.Custom_Heading}
                </h2>
                <MdDelete 
                onClick={()=>DeletCustomTab(idForCustom)}
                className=" cursor-pointer mt-1 ml-2 w-4 text-red-700"
                />
            </div>
            <div  className="py-2">   
                <div dangerouslySetInnerHTML={{ __html: SantizedHtml }} >
                </div>
            </div>
        </div>
    )
}

const CustomForm = () => {

    const [submittedData,setSubmitted] = useState([{
        "Custom_Heading":"Dummy Data",
        "description":"Dummy COntent please ignore please ignore please ignore."
    }])

    const [customDescription, setCustomDes] = useState("");

    const {reset,register,handleSubmit} = useForm();

    function SubmitHandler(data){
        data.description=customDescription;
        const listData = [...submittedData,data];
        setSubmitted(listData);
        reset();
        setCustomDes('');
    }
    function DeletCustomTab(cust_id){
        const TempCustomData = [...submittedData];
        TempCustomData.splice(cust_id,1);
        setSubmitted(TempCustomData);
    }


  return (
  <div className="min-h-[700px] " >
    {/* Input Section */}
        <div>
            {/* <h2>Custom Section</h2> */}
            <form onSubmit={handleSubmit(SubmitHandler)}>
            <label>Custom Heading</label>
                <input
                placeholder="Add Heading."
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
                type="text"
                name="Content"
                {
                    ...register("Custom_Heading",{
                        required: " Heading Required! ",
                        pattern:{
                            message:"Custom Heading"
                        }
                    })
                }
                >
                </input>
            <label>Add Description.</label>
                <ReactQuill
                    className="border my-5  bg-slate-100 border-purple-400" 
                    value={customDescription}
                    onChange={(content)=>{
                        setCustomDes(content);
                        // console.log(content);
                    }}
                />
            <button 
            type="submit"
            className=" bg-indigo-700 text-white py-2 px-3 rounded-md flex flex-row justify-center cursor-pointer ">

                Submit 
            </button>    
            </form>
        </div>
        {/* Output section */}
        <div
        className=" md:w-[490px] max-w-[500px] min-h-56 ">
            {submittedData.map((e,index)=>{
                return(
                    <CustomFormTab 
                    key={index} 
                    data={e}
                    idForCustom={index}
                    DeletCustomTab={DeletCustomTab}
                    />
                )
            })}
        </div>
  </div>  
  )
}

export default CustomForm