// import { GrClose } from "react-icons/gr";
import {useState} from 'react';
import { LuLanguages } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const LanguageOption = ({currList,updateList})=>{
    // const [language] = useState('');
    const [selectedExpertise, setSelectedExpertise] = useState('beginner');
    // cons
    const [inputLang,setLangInput] = useState("")
    function handleChange(value){
      setSelectedExpertise(value);
    }

    function addItemList(){
        let a = inputLang;
        let b = selectedExpertise;
        const list1 = [a,b];
        let curr_list = [...currList,list1];
        updateList(curr_list);
        setLangInput("");
        setSelectedExpertise("begineer");
        // console.log(curr_list);
    }


    return(
<>
    <div className="flex flex-row gap-2 my-3">
        <div>
            <input value={inputLang} onChange={(e)=>setLangInput(e.target.value)}
            //  className="border border-slate-500 rounded-md p-1"
             className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"

             placeholder={"Add Language here"} ></input>
        </div>
        <div>
          {/* <label htmlFor="selectExpertise">Level:</label> */}
          <select
          className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
          // className="border border-blue-300 mx-2"
            id="selectExpertise"
            name="expertise"
            value={selectedExpertise}
            onChange={(e)=>{handleChange(e.target.value)}}>

            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
      {/* <p>Selected Expertise: {selectedExpertise}</p> */}
      </div>

    </div>
    <button onClick={()=>{addItemList()}} className="bg-indigo-700 text-white py-2 px-4 rounded-md" >
        Add 
      </button>
    </>
    )   
}

const DeleteButton=({Del_id,languageList,setLangList})=>{
  function langDeleteItem(index){
    let newLangArray = [...languageList]
    newLangArray.splice(index,1);
    setLangList(newLangArray);
  }
  return(
    <MdDelete onClick={()=>langDeleteItem(Del_id)}  className="text-red-700 mt-[6px]"/>  
  )
}

const LanguageForm = () => {
    const [languageList,setLangList] =useState([["English","Begineer"],["Justice League","Newbie"]]);
    
  return (
        <div>
            <div>
                <LanguageOption currList={languageList} updateList={setLangList} />              
            </div>
            <div className=" text-purple-500 text-lg my-2">
               <ul> {languageList.map((e,index)=>
               {return( 
               <div className="flex flex-row align-middle gap-5"  key={index}>
                  
                  <h2 className="text-[20px] "> -  {e[0]} - {e[1]}</h2> 
                  <DeleteButton Del_id={index} languageList={languageList}  setLangList={setLangList}/>
                  
                  {/* <MdDelete  className="text-red-700 mt-[6px]" onClick={()=>langDeleteItem(index)} />   */}
                </div>)})}
               </ul>
            </div>
        </div>
    )
}

export default LanguageForm