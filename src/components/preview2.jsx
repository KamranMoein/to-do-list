import React, { useContext } from "react";
import SimpleContext from "../context/SimpleContext";
import Preview from "./preview";

const Preview2 = () => {
    const context = useContext(SimpleContext);

    return (
    <div>
        { context.taskList.map((item,index)=>( 
        <Preview 
        key={index}
        taskNumber={item.id}
        singleTask={item.taskTitle}
        Time={item.taskTime}
        doo={()=>context.handleDo(index)}
        deletee={()=>context.handleDeleteTask(index)}
        edit={()=>context.handleEdit(index)}
        />))}
        
    </div>)
}
export default Preview2;