import React, { useState } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Header from "./components/header";
import AddNewTask from "./components/addNewTask";
import SimpleContext from "./context/SimpleContext";
import Preview2 from "./components/preview2";
import Completed2 from "./components/completed2";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [getTasksList, setTasksList] = useState([]);
  const [getTask, setTask] = useState("");
  const [getcompleted, setcompleted] = useState([]);
  const [getAddButton,setAddButton]=useState("اضافه کردن")
  const [getAddButtonColor,setAddButtonColor]=useState("btn btn-primary")
  const [getNumber,setNumber]=useState(1)
  const [getTime,setTime]=useState("")
  
  
  const handleSetTask = (event) => {
    setTask(event.target.value);
  };

  const handleSetTime=(event)=>{
    setTime(event.target.value)
    console.log(getTime);
  }

  const handleAddTask = () => {
    setAddButton("اضافه کردن ")
    setAddButtonColor("btn btn-primary")
    const getTasksList1 =[...getTasksList]
    const taskObject={
      id:getNumber,
      taskTitle:getTask,
      taskTime:getTime
    }
    getTasksList1.push(taskObject);

    getTasksList1.sort((a,b)=>{
      return a.id - b.id
    })

    setTasksList(getTasksList1)
    setTask("");
    setNumber(getNumber+1)

    toast(`کار ${getTask} افزوده شد !`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   
  };

  const handleDo = (id) => {
    const z = getTasksList[id];
    const getcompleted1=[...getcompleted]

    const completedObject={
      id:z.id,
      taskCompleted:z.taskTitle,
      taskTime:z.taskTime
    }

    getcompleted1.push(completedObject);
    setcompleted(getcompleted1)

    const y = getTasksList.filter((p, index) => index !== id);
    setTasksList(y);

    toast.success(`کار ${z.taskTitle} انجام شد !`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const handleDeleteTask = (id) => {
    const y = getTasksList.filter((p, index) => index !== id);
    setTasksList(y);

    const x = getTasksList[id]

    toast.error(`کار ${x.taskTitle} حذف شد !`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
  };

  const handleReturn = (id) => {
    const y = getcompleted.filter((p, index) => index !== id);
    setcompleted(y);
    const z =getcompleted[id].id;
    const x = getcompleted[id].taskCompleted;
    const w = getcompleted[id].taskTime;

    const getTasksList1=[...getTasksList]
    const taskObject={
      id:z,
      taskTitle:x,
      taskTime :w
    }
    getTasksList1.push(taskObject);

    getTasksList1.sort((a,b)=>{
      return a.id - b.id
    })

    setTasksList(getTasksList1)
  };

  const handleEdit = (id)=>{
    const y = getTasksList.filter((p, index) => index !== id);
    setTasksList(y);
    const z=getTasksList[id]
    setTask(z.taskTitle)
    setNumber(id+1)
    setAddButton("ویرایش")
    setAddButtonColor("btn btn-warning")
    document.getElementById("inputee").focus()
    console.log(id);
  }

  
  // let previewTask=[]
  //  getTasksList.map((item,index)=>{
  //    previewTask[index]=[(<Preview matn={item}/>)]
  //  })

  return (
    <SimpleContext.Provider
      value={{
        taskList: getTasksList,
        task: getTask,
        getcompleted: getcompleted,
        addButton:getAddButton,
        addButtonColor:getAddButtonColor,
        number:getNumber,
        time:getTime,
        handleSetTask: handleSetTask,
        handleAddTask: handleAddTask,
        handleDo: handleDo,
        handleDeleteTask: handleDeleteTask,
        handleReturn: handleReturn,
        handleEdit:handleEdit,
        handleSetTime:handleSetTime
        
      }}
    >
      <div dir="rtl" lang="fa">
      <ToastContainer />
        <Header />
        <AddNewTask />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-7 mt-5">
              <h4 className="text-center text-secondary">لیست کارها <span className="badge rounded-pill bg-primary text-white">{getTasksList.length}</span></h4>
              <Preview2 />
            </div>
            <div className="col-sm-4 mt-5 ">
              <h4 className="text-center text-secondary">
                فعالیت های انجام شده
              </h4>
              <Completed2 />
            </div>
          </div>
        </div>
      </div>
    </SimpleContext.Provider>
  );
};

export default App;
