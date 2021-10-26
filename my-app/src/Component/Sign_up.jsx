import React from 'react'

//import this tool { Form, Field} from formik
import { Form, Field } from "formik";

//errors: for displaying error messages
//touched: for displaying the  right colour when clicked
//isValid: checking if validation is performed
//dirty: a func that helps in changing between next state and current state 

const Sing_up = ({ errors, touched, isValid, dirty }) => {
      //  console.log(errors)
    return (
        <div className="containar">

          <div className="title">CREATE AN ACCOUNT</div>

           <Form className="user_details">

           <div className="form-group">

            <label className="col-form-label">Username</label>
              <Field
                name="username" 
                className={
                  touched.username
                 ? `form-control ${errors.username ? "invalid" : "valid"}`
                 : `form-control`
                }
             type="text" required placeholder="Enter your name"
             />

            {touched.username && errors.username && (
            <small className="text-danger">{errors.username}</small>
            )}

          </div>

          <div className="form-group">

            <label className="col-form-label">Email</label>
              <Field
                name="email" 
                className={
                  touched.email
                 ? `form-control ${errors.email ? "invalid" : "valid"}`
                 : `form-control`
                }
             type="text" required placeholder="Enter your email"
             />

            {touched.email && errors.email && (
            <small className="text-danger">{errors.email}</small>
            )}

          </div>
             
             <div className="form-group">

            <label className="col-form-label">Password</label>
              <Field
                name="password" 
                className={
                  touched.password
                 ? `form-control ${errors.password ? "invalid" : "valid"}`
                 : `form-control`
                }
             type="text" required placeholder="Enter your password"
             />

            {touched.password && errors.password && (
            <small className="text-danger">{errors.password}</small>
            )}

          </div>

          <div className="form-group">

            <label className="col-form-label">Confirm Password</label>
              <Field
                name="password2" 
                className={
                  touched.password2
                 ? `form-control ${errors.password2 ? "invalid" : "valid"}`
                 : `form-control`
                }
             type="text" required placeholder="confirm password"
             />

            {touched.password2 && errors.password2 && (
            <small className="text-danger">{errors.password2}</small>
            )}

          </div>

          <button
        type="submit"
        className="btn_1"
        disabled={!isValid || !dirty}
        > Submit </button>

           </Form>
            
        </div>
    )
}

export default Sing_up

