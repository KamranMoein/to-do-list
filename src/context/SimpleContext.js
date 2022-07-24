import React from 'react';
import {Context,createContext} from "react"

const SimpleContext=createContext({
    
    taskList:[],
    task:"",
    getcompleted:[],
    addButton:"",
    addButtonColor:"",
    number:"",
    time:"",
    handleAddTask:()=>{},
    handleSetTask:()=>{},
    handleDo:()=>{},
    handleDeleteTask:()=>{},
    handleReturn:()=>{},
    handleEdit:()=>{},
    handleSetTime:()=>{}
})

export default SimpleContext