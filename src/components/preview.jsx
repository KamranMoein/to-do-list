import React, { useContext } from "react";
import SimpleContext from "../context/SimpleContext";


const Preview = ({ singleTask,taskNumber,Time ,doo,deletee,edit }) => {
  // const context = useContext(SimpleContext);

  return (
       <div className="mt-5">
         <div className="card ">
            <div className="card-body ">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <p className="text-center card-text" >{`${singleTask}`}</p>
              <p className="text-muted saat">{`  زمان انجام : ${Time}`}</p>
              <hr />
              <div className="row justify-content-around">
              <button className="btn btn-success mr-2" onClick={doo}>
                انجام شد
              </button>
              <button  onClick={edit} className="btn btn-warning"><a  className="edit-key" href="#">ویرایش ...</a></button>
              <button className="btn btn-danger" onClick={deletee}>
                <i className="fa fa-trash-o" aria-hidden="true"/>
              </button>
              </div>
            </div>
          </div>
       </div>
          
        
      
  );
};

export default Preview;
