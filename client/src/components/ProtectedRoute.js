import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetLoggedInUserDetails } from "../apicalls/users";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";
import { SetUser } from "../redux/usersSlice";
import { Link } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const validateUserToken = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetLoggedInUserDetails();
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        localStorage.removeItem("token");
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/login");
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      validateUserToken();
    }
  }, []);

  return (
    <div>
      {user && (
        <div className="p-1">
          <div className="header p-2 bg-primary flex justify-between rounded items-center">
            <h1 className="text-2xl text-white font-bold cursor-pointer"
             onClick={() => navigate("/")}
            > LIBRARY</h1>
            <button className="ri-logout-box-r-line ml-2 btn  btn-light " type="submit"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            > Logout</button>
                 </div> <div>
            <div className="flex items-center gap-1 bg-warning p-1 rounded">
              <div className="row pt-2">

              <div className="col-3 px-4">
                <Link to="/" className="text-decoration-none text-dark">Home</Link></div>
              <div className="col-3 px-4">
              
              <Link to="/profile" className="text-decoration-none text-dark"
              
                
                
              >
                Details
              
            
              </Link>
              </div>
              <div className="col-3 px-4">
                  <Link to="/bookslist" className="text-decoration-none text-dark"> Bookslists</Link>
                 </div>
                <div className="col-3 px-4">
                  <Link to="/contact" className="text-decoration-none text-dark"> Contact</Link>
                 </div>
                

            </div>
            </div>
          </div>

          <div className="content mt-1">{children}</div>
        </div>
      )}
    </div>
  );
}

export default ProtectedRoute;
