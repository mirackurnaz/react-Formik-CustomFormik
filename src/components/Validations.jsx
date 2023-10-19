import * as yup from "yup"
const passwordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const schema=yup.object().shape({

    firstName:yup.string().required("First Name girmek zorunludur"),
    lastName:yup.string().required("Last Name girmek zorunludur"),
    email:yup.string().email("Geçerli bir email adresi giriniz").required("Email girmek zorunludur"),
    password:yup.string().min(5,"En az 5 karakterli bir şifre oluşturunuz").matches
    (passwordRules,
       {
        message:"Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz"
       } ).required("Şifre girmek zorunludur"),
     passwordConfirm:yup.string().oneOf([yup.ref("password")],"Şifreler birbiriyle uyuşmamaktadır").required("Şifre tekrarını girmek zorunludur")
})

export  const CustomInputSchema=yup.object().shape({
  email:yup.string().email("Geçerli bir email adresi giriniz").required("Email girmek zorunludur"),
  password:yup.string().min(5,"En az 5 karakterli bir şifre oluşturunuz").matches
  (passwordRules,
     {
      message:"Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz"
     } ).required("Şifre alanı doldurulması zorunludur"),
  university:yup.string().
  oneOf([
    "iü",
    "mü",
    "bü",
    "itü",
   "ytü",
    "mimarsü",
    "taü",
    "gü",
    "imü",
    "sbü",
    "msü",
    "iüc",
    "tjbü"],"Lütfen Üniversitenizi giriniz").required("Lütfen Üniversite seçim alanını doldurunuz"),
  isAccepted:yup.boolean().oneOf([true],"Kullanım koşullarını kabul ediniz").required("Kullanım koşullarını kabul ediniz"),
 
   
})