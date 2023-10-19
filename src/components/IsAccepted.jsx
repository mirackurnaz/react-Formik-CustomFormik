import { useField } from 'formik'
import React from 'react'
import "./app.css"

function IsAccepted({label,...props}) { //...porps= type="email" name="email" pleaceholder="Email adresinizi giriniz"

    const [field,meta]=useField(props);

    console.log(field,meta);
  return (
    <div >
        <div className='IsAcceptedDiv'>
        
        <input   
        {...field}
         {...props} 
         className={meta.error ? "inputError":'inputCheckbox' } 
         />
        <span className='inputCheckboxSpan'>Kullanım koşullarını kabul ediyorum</span>
         </div>
          
         {meta.error &&  <p className="error">{meta.error} </p>} 
        

    
    </div>
  )
}

export default IsAccepted


