import React, { useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';

import { useFormik } from "formik";
// this below is from Formik...search Yup(1.1)
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

// copy Yup from npm Yup
let schema = Yup.object({
  email: Yup.string().email("Email Should be valid").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


    

  // copy g....Formik...userformik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Yup(1.2)
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
      // alert(JSON.stringify(values, null, 2));     vv m se hta diya 8th admin intergration 4.9
    },
  });

  // const { user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth);
  const authState = useSelector((state) => state);
  const { user, isLoading, isError, isSuccess, message} = authState.auth;
  
  useEffect(() => {
    // console.log(user); if(!user == null || isSuccess) {
    if(isSuccess) {
      navigate("admin");
    }
    else
    {
      // alert("not ");  niche array m message bhi tha phle
      navigate("");
    }
  },[user, isLoading, isError, isSuccess]);

  return (
    <div className="py-5" style={{ background:"#ffd333", minHeight:"100vh" }}>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
            <h3 className="text-center title">Login</h3>
            <p className="text-center">Login to your account to continue.</p>

             <div className="error text-center">
              {message.message == "Rejected" ? "You are not an Admin" : ""}
             </div>


            <form action="" onSubmit={formik.handleSubmit}>
              <CustomInput 
                  type="text" 
                  name="email" 
                  label="Email Address" 
                  id="email"  
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                  val={formik.values.email}
                />
                {/* copy Yup code from Formik....search Yup */}
                {/* <div className="error ">
                 {formik.touched.email && formik.errors.email ? (
                   <div>{formik.errors.email}</div>
                  ) : null}
                </div> */}
                <div className="error  mt-2">
                {formik.touched.email && formik.errors.email}
                </div>
 

              <CustomInput 
                  type="password" 
                  name="password" 
                  label="Password" 
                  id="pass" 
                  onChng={formik.handleChange("password")}
                  onBlr={formik.handleBlur("password")}
                  val={formik.values.password}
                />
                {/* <div className="error">
                 {formik.touched.password && formik.errors.password ? (
                 <div>{formik.errors.password}</div>
                ) : null}
                </div> */}
                <div className="error  mt-2">
                {formik.touched.password && formik.errors.password}
                </div>
 

              <div className="mb-3 text-end">
                <Link to="forgot-password">Forgot Password?</Link>
              </div>
                           
            <button
              // to="/admin" we have changed Link to button
              className="border-0 px-3 py-2  text-white fw-bold w-100 text-center text-decoration-none fs-5"  
              style={{ background:"#ffd333" }}
              type="submit"
            >
              Login
            </button>
            </form>
        </div>
    </div>
  );
};

export default Login;
