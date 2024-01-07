import React, { useState } from 'react';
import '../MyCss/LoginPage.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { springBaseUrl, dotnetBaseUrl, IsSame } from '../CommonFunctions';


export default function Login() {

    let navigate = useNavigate()


    let [loginData, setLoginData] = useState({
        emailId: "",
        password: ""
    })

    const FormDataOnChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        loginData = { ...loginData, [name]: value };
        setLoginData(loginData);
    }

    const LoginButton = async (e) => {
        e.preventDefault();

        try {
            let netReponse = await Axios.post(`${dotnetBaseUrl}/Home/Login`, loginData);
            // let netReponse = ""
            let springReponse = await Axios.post("http://localhost:9090/Home/Login",loginData);
            console.log("loginData:",loginData);
            // let springReponse = await Axios.post(
            //     "http://localhost:9090/Home/Login",

            //     {"loginData":"ddd"});
            console.log("springReponse:", springReponse);
            console.log("netReponse:", netReponse);

            return 
            if (springReponse.data && IsSame(netReponse.data, springReponse.data)) {
                navigate('/home')
            }
            else {
                alert('WRONG CREDENTIALS ENTERED TRY AGAIN')
                // setLoginData({
                //     emailId: "",
                //     password: ""
                // })
            }

        } catch (error) {
            alert('Something when wrong!');
            console.log(error);
            // console.error("ErrorMessage: ", error.response.data);
        }

        // console.log("netResponse:",netReponse);
        // if( netReponse.status === 400){
        //     return;
        // }

        // console.log("Apis:",process.env.REACT_APP_API_BASE_URL);
        // Axios.post(`${process.env.REACT_APP_NET_API_BASE_URL}/api/Home/Login`,loginData)
        //     .then((response)=>{
        //         console.log("Response:",response);
        //         if (response.data) {
        //             navigate('/home')
        //         }
        //         else {
        //             alert('WRONG CREDENTIALS ENTERED TRY AGAIN')
        //             setLoginData({
        //                 emailId: "",
        //                 password: ""
        //             })
        //         }
        //     })
        //     .catch(error=>{
        //         console.log("Error:",error);

        //         alert("Some error has occured please try again latter")
        //     })
    }

    return (
        <>
            <div className="container">
                <form className="login-container" onSubmit={LoginButton}>
                    <h2>Login to <span className="custom-color">Myntra</span></h2>
                    <div className="form-group">
                        {/* @Html.LabelFor(m => m.EmailId, "Email Id") */}
                        {/* @Html.TextBoxFor(m => m.EmailId, new { @class = "form-control" })  */}
                        Email :<input className='form-control' name="emailId" type='text' onChange={FormDataOnChange} value={loginData.emailId} />
                    </div>

                    <div className="form-group">
                        {/* @Html.LabelFor(m => m.Password, "Password") */}
                        {/* @Html.PasswordFor(m => m.Password, new { @class = "form-control" }) */}
                        Password :<input className='form-control' name="password" type='text' onChange={FormDataOnChange} value={loginData.password} />

                    </div>
                    <input type="submit" className="btn btn-primary login-btn custom-primary" />
                    <h6>
                        By continuing, I agree to the
                        <a href="/Home/TermsOfUse" style={{ color: 'hotpink' }}>Terms of Use</a>
                        &
                        <a href="/Home/PrivacyPolicy" style={{ color: 'hotpink' }} >Privacy Policy</a>
                    </h6>
                    <h6>Have trouble logging in?<a href="/Home/GetHelp" style={{ color: 'hotpink' }}>Get help</a></h6>


                    {/* 


               @if (ViewBag.Validated != null)
               {
                   if (ViewBag.Validated == true)
                   {
                       <div class="alert alert-success" role="alert">
                           You are logged in
                       </div>
                      
                   }
                   else
                   {
                       <div class="alert alert-danger" role="alert">
                           Incorrect Email Id or Password. Please try again
                       </div>
                   }
               } */}

                </form>
            </div>

        </>
    )
}


// fetch("http://localhost:9090/Home/Login", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site"
//   },
//   "referrer": "http://localhost:3000/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"emailId\":\"snaorem@random.com\",\"password\":\"1234\"}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });

// fetch("https://localhost:7037/Home/Login", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site"
//   },
//   "referrer": "http://localhost:3000/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"emailId\":\"snaorem@random.com\",\"password\":\"1234\"}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });