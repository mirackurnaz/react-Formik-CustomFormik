import React from 'react'
import { Form,Formik } from 'formik';
import CustomInput from "./CustomInput"
import {CustomInputSchema} from "./Validations"

import CustomSelect from './CustomSelect';
import Custompassword from './Custompassword';
import IsAccepted from './IsAccepted';
import { Link } from 'react-router-dom';
function Login() {

  const onSubmit=async (values,actions)=>{

    console.log(values,actions); //values de obje içinde değerlerimiz var,actions ise yapabilceğimiz işlemler mevcut 

    await new Promise((resolve)=>{
            setTimeout(resolve,1000)
    })
    actions.resetForm(); //submit  olunca formun içindeki inputları sıfırla gibi(actions)
}

  return (
    <>
    <Formik
    initialValues={{ email: '', password: '',university:"",isAccepted:false  }} //isAccepted:false checkboxın başlangıçte seçili olmaması için
    onSubmit ={onsubmit}
    validationSchema={CustomInputSchema}
    
  >
    {({isSubmitting}) => (
      <Form >
        <CustomInput 
        label="Email"
        type="email" 
        name='email'
        placeholder="Email adresinizi giriniz"
         />
           <Custompassword
        label="Password"
        type="password" 
        name='password'
        placeholder="Şifrenizi giriniz"
         />
         <CustomSelect 
         label="University"
         name='university'
         placeholder="Üniversitenizi seçiniz"
         >
          <option value="Lütfen üniversitenizi seçiniz"></option>
          <option value="iü">İstanbul Üniversitesi</option>
          <option value="mü">Marmara Üniversitesi</option>
          <option value="bü">Boğaziçi Üniversitesi</option>
          <option value="itü">İstanbul Teknik Üniversitesi</option>
          <option value="ytü">Yıldız Teknik Üniversitesi</option>
          <option value="mimarsü">Mimar Sinan Üniversitesi</option>
          <option value="taü">Türk-Alman Üniversitesi</option>
          <option value="gü">Galatasaray Üniversitesi</option>
          <option value="imü">İstanbul Medeniyet Üniversitesi</option>
          <option value="sbü">Sağlık Bilimleri Üniversitesi</option>
          <option value="msü">Milli Savunma Üniversitesi</option>
          <option value="iüc">İstanbul Üniversitesi Cerrahpaşa</option>
          <option value="tjbü">Türkiye Japon Bilim ve Teknoloji Üniversitesi</option>
          
         </CustomSelect>
         <IsAccepted
         type="checkbox"
         name='isAccepted'
         ></IsAccepted>
         <button className='buttonLogin' disabled={isSubmitting} type='submit'>Login</button>
         <br></br>
         <Link to="/singup" className='linkLogin'>Sing Up</Link>
      </Form>
    )}
  </Formik>
  </>
  )
}

export default Login