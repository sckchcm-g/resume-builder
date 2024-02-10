import {useState} from 'react';
import {useForm} from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./quill.css"
import DOMPurify from 'dompurify';
import { MdDelete } from "react-icons/md";

const ProjectsTab = ({Heading,
  Link,
  Description,idRef,HandleDeleteItem})=>{

    const sanitizedHtml = DOMPurify.sanitize(Description);

  return(
    <>
      <div 
      className="border border-green-400 w-[95%] mx-3 my-2 px-4 "
      >
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl">{Heading}</h3>
          <div className="flex flex-row justify-center ">
          <h3 className="text-md text-cyan-600 cursor-pointer"> {Link}</h3>
            <MdDelete onClick={()=>HandleDeleteItem(idRef)} className=" cursor-pointer mt-1 ml-2 w-4 text-red-700"/>
          </div>

        </div>
        <div className="py-2">
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </div>
      </div>
    </>
  )
}

const ProjectsForm = () => {


    const [submittedData,setSubmittedData] = useState([{
      "Heading":"Dummy",
      "Link":"www.fhasihif/com",
      "description":"nenwen enwi nei ien wien iweij "
    }]);
    const [description,setDescription] = useState('');

    const {register, handleSubmit, reset}  = useForm();
    function DesHandler(value){
        setDescription(value);
    }

    function onSubmit(data){
        data.description = description;
        const prevData= [...submittedData,data];
        setSubmittedData(prevData);
        reset();
        setDescription('');
        // console.log(submittedData);
    }
    function HandleDeleteItem(idValue){
        let tempData = [...submittedData];
        tempData.splice(idValue,1);
        setSubmittedData(tempData);
    }

  return (
    <div>
        {/* Form Section */}
        <div className="p-4 border border-red-400 h-[500px] w-[440px] md:w-[490px] max-w-[500px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Project Heading</label>
                <input
                placeholder="Project Name"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
                type="text" 
                name="Project_Name"
                {...register("Heading", {
                    required: "Enter Project Name!!",
                    pattern: {
                      // value: /^[a-zA-Z]+$/,
                      message: "Heading..",
                    },
                  })}
                >
                </input>
                  <label>Project Link</label>
                <input
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
                type="text" name  ="link"
                    {...register("Link")}
                >
                </input>

                <label>
                Project Description
                </label>

                {/* Some styles to below Quill Editor are imported from quill.css file. */}
              <ReactQuill 
              value={description} 
              onChange={DesHandler} 
              className="border my-5  bg-slate-100 border-purple-400" 
              />

            <button type="submit" 
            className=" bg-indigo-700 text-white py-2 px-3 rounded-md flex flex-row justify-center cursor-pointer ">
                Submit
            </button>
            </form>
        </div>
        {/* Results Section */}
        <div 
        className=" md:w-[490px] max-w-[500px] min-h-56 ">
            {submittedData.map((e,index)=>{
                return(
                  <ProjectsTab  key={index}
                    idRef={index}
                    Heading={e.Heading}
                    HandleDeleteItem={HandleDeleteItem}
                    Link={e.Link} 
                    Description={e.description} />
                )
            })}
        </div>
    </div>
  )
}

export default ProjectsForm