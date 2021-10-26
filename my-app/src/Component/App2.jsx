import React from 'react'

//imported formiK
import { Formik } from "formik";

import Sing_up from './Sign_up';

//imported yup
import * as Yup from "yup";



const App2 = () => {

    const ErrorSchema = Yup.object().shape({

    //validating the username using yup
    username: Yup.string()
    .required("Name is required")
    .min(2, "Name too Short")
    .max(12, "Name too Long"),

    //validating email using yup
    email: Yup.string()
    .email("Invalid email")
    .required("Email Required"),

    //validating password using yup
    password: Yup.string()
    .required('Password is required')
    .min(6, "Password must be at least 6 number")
    .max(10, "Password must be less than 10 numbers"),
    
    //validating confirm password using yup
    password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')

    })

    return (
        <div>

            <Formik 

            //adding initial values to each of the input
            initialValues={{
                username: "",
                email: "",
                password:"",
                password2:"",
              }}

              //adding a submit event
            onSubmit={(value, { resetForm }) => {

                //converting it into JSON FORMAT
                const json1 = JSON.stringify( value, null, 4)

                //the value can go to the server side 
                console.log(json1);
  
                //reset the form when clicked to its original state...
                resetForm();
              }}

               
            //adding a validation scheme that will validate the form 
            validationSchema={ErrorSchema}


             //using conponent method to import fille {Sing_up}
             component={Sing_up}
            />
            
        </div>
    )
}

export default App2

