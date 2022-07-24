import React from "react";


const Completed = ({completedActivity,id,Return}) => {
  return (
    <div className="mt-5">
      <div className="mt-3 card">
        <div className="card-body">
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <p className="card-text text-secondary">{`${completedActivity}`}</p>
          <div className="row justify-content-around">
            <button className="btn btn-success mr-2"
            onClick={Return} >
              بازگرداندن به لیست کار ها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
