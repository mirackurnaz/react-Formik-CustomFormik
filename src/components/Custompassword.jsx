import { useField } from 'formik'
import React from 'react'
import "./app.css"

function Custompassword({label,...props}) { //...porps= type="email" name="email" pleaceholder="Email adresinizi giriniz"

    const [field,meta]=useField(props);

    console.log(field,meta);
  return (
    <div className='formDiv'>
        <div className='inputFormDiv'>
        <label >{label} </label>
        <input 
        {...field}
         {...props} 
         className={meta.error ? "inputError":'input' } 
         />
         {meta.error && <p className="error">{meta.error} </p>} 
         </div>

    
    </div>
  )
}

export default Custompassword
