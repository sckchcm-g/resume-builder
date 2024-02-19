import {useState} from 'react';
// import {useForm} from 'react-hook-form';
import { GrClose } from "react-icons/gr";


function RemoveSkillTag(Id_num,array,setSkillArray){
    const New_Array=[...array];
    New_Array.splice(Id_num,1);
    setSkillArray(New_Array);
}
function AddSkillTag(skillArray,skillText,setSkillArray,addSkill){
    let newArray=[...skillArray,skillText];
    setSkillArray(newArray);
    addSkill("");
}

const SkillTag = ({value,Id_num,array,setSkillArray})=>{
    // let array2=[...array];

    return(
        <div className="flex justify-center align-middle mr-2">
            <h2 className="bg-purple-500 text-white inline-block rounded-md  my-1 p-2 w-auto" >{value}
            <span className="cursor-pointer inline-block" onClick={(e)=>{
                RemoveSkillTag(Id_num,array,setSkillArray);
                // console.log(array);
            }}><GrClose className="ml-2 text-[12px]" /></span></h2>
        </div>
    )
}


const SkillsForm = () => {
    const [skillArray,setSkillArray]=useState(["Skill 1","Skill 2","Skill 3"]);
    const [skillText,addSkill]=useState("")

  return (
    // <div>
    <div className="p-4 my-8 border border-gray-300 h-auto w-[360px] md:w-[460px] lg:w-[550px] max-w-[590px]">
      <h2 className="text-2xl font-semibold mb-3"> Add Skills.</h2>

        <div className="flex flex-row my-4 gap-4" >
            <input
            className="block w-[50%] lg:w-[50%] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            type="text"
            value={skillText}
            placeholder="Add Skills"
            onChange={(e) => addSkill(e.target.value)}
            />
            <button className="bg-purple-900 rounded-lg px-3 py-2 text-white" onClick={()=>{
                AddSkillTag(skillArray,skillText,setSkillArray,addSkill);
            }}>Add Skill</button>
        </div>
        <div className="flex flex-row flex-wrap">
            {skillArray.map((e,index)=>{
                return(<SkillTag array={skillArray} setSkillArray={setSkillArray} key={index} Id_num={index} value={e} />)
            })}
        </div>

    </div>
  )
}

export default SkillsForm