import React from 'react'
import { useFormik } from 'formik';
import "./app.css"
import { schema } from './Validations';

function Singup() {

        const onSubmit=async (values,actions)=>{

                console.log(values,actions); //values de obje içinde değerlerimiz var,actions ise yapabilceğimiz işlemler mevcut 

                await new Promise((resolve)=>{
                        setTimeout(resolve,1000)
                })
                actions.resetForm(); //submit  olunca formun içindeki inputları sıfırla gibi(actions)
        }

    const {values,isSubmitting,handleChange,handleSubmit,errors} = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password:'',
          passwordConfirm:'',
        } ,
        validationSchema:schema,
        onSubmit
});

  return (
    <form className='form' onSubmit={handleSubmit}>
        
        <div className='formDiv'>
        <div className='inputFormDiv'>

        <label className={errors.firstName ? "inputErrorLabel" :'label'}>First Name</label>
        
        <input 
        className={errors.firstName ? "inputError" :'input'}
         id="firstName"
         name="firstName"
         type="text"
         onChange={handleChange}
         value={values.firstName}
         placeholder='First Name enter'
         ></input>   
         {errors.firstName && <p className="error">{errors.firstName} </p>} 
         </div>
 <div className='inputFormDiv'>

<label className={errors.lastName ? "inputErrorLabel" :'label'}>Last Name</label>
       
        <input
         className={errors.lastName ? "inputError" :'input'}
         id="lastName"
         name="lastName"
         type="text"
         onChange={handleChange}
         value={values.lastName}
         placeholder='Last Name  enter'
         ></input>
         {errors.lastName && <p className="error">{errors.lastName} </p>} 
         </div>


 <div className='inputFormDiv'>
<label className={errors.email ? "inputErrorLabel" :'label'}>Email</label>
        
        <input
        className={errors.email ? "inputError" :'input'}
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         value={values.email}
         placeholder='Email enter'
         ></input>
         {errors.email && <p className="error">{errors.email} </p>} 
</div>


<div className='inputFormDiv'>
<label className={errors.password ? "inputErrorLabel" :'label'}>Password</label>
        
        <input
        className={errors.password ? "inputError" :'input'}
         id="password"
         name="password"
         type="password"
         onChange={handleChange}
         value={values.password}
         placeholder='Password enter'
         ></input>
         {errors.password && <p className="error">{errors.password} </p>} 
</div>


<div className='inputFormDiv'>
<label  className={errors.passwordConfirm ? "inputErrorLabel" :'label'}>Password Confirm</label>
        
        <input
        className={errors.passwordConfirm ? "inputError" :'input'}
        
         id="passwordConfirm"
         name="passwordConfirm"
         type="password"
         onChange={handleChange}
         value={values.passwordConfirm}
         placeholder='Password Confirm enter'
         ></input>
         {errors.passwordConfirm && <p className="error">{errors.passwordConfirm} </p>} 
</div>
<button disabled={isSubmitting} className='buttonSingup' type='submit' >Submit</button>
</div>
    </form>

  )
}

export default Singup
 
// 1) disabled={isSubmitting} butona tıkladığında 1sn boyunca basamasın (isSubmitting)formikden alabiliriz
// await new Promise((resolve)=>{
//   setTimeout(resolve,1000)})  sonra ise formu resetlesin
//  actions.resetForm(); bu kod ile resetledim (resetForm() ise consol log(values,actions) yaparsak ordan çektiğimizi göreceksiniz)