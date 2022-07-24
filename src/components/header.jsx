import React from 'react';

const Header = () => {
    return ( 
        <div className="container-fluid" dir="rtl">
            <div className="row bg-info justify-content-around text-white align-items-center" >
                <div className="header p-3 ">
                    <h2>لیست انجام کارها</h2>
                </div>
                <div className="icon ">
                <a href="https://instagram.com/kamran_127_?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}
 
export default Header;