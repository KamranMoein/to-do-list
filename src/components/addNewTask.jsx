import React, { useContext } from "react";
import SimpleContext from "../context/SimpleContext";

const AddNewTask = () => {
  const context = useContext(SimpleContext);

  return (
    <div className="container addTask mt-2  ">
      <div className="row">
        <form action="#" className="d-flex flex-row pl-3">
          <div className="d-flex flex-column mr-3">
            {/* <input value={`${context.number}`} type="number" disabled /> */}
            <label htmlFor="tit">عنوان کار</label>
            <input
            id="tit"
             className="m-2"
              id="inputee"
              value={context.task}
              onChange={context.handleSetTask}
              type="text"
              placeholder="کار جدید ..."
            />
            <label htmlFor="Time">زمان انجام کار</label>
            <input id="Time" type="time" onChange={context.handleSetTime} value={context.time} />
          </div>

          <button
            onClick={context.handleAddTask}
            className={`${context.addButtonColor}`}
          >{`${context.addButton}`}</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
