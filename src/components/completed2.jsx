import React, { useContext } from "react";
import SimpleContext from "../context/SimpleContext";
import Completed from "./completed";

const Completed2 = () => {
  const context = useContext(SimpleContext);

  return (
    <div>
      {context.getcompleted.map((item,index) => (
        <Completed 
        key={index}
        id={item.id}
        completedActivity={item.taskCompleted}
        Return={()=>context.handleReturn(index)}
        />
      ))}
    </div>
  );
};

export default Completed2;
