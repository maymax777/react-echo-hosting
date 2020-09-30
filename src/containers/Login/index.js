import React from 'react'
import Form from 'components/common/Form'
import { Link } from 'react-router-dom'
import Preloader from 'components/common/Preloader'
import FormInput from 'components/common/FormInput'
import FormSubmit from 'components/common/FormSubmit'

function Login() {
    return (
        <>
            <Preloader />
            <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">

                <form className="form-default" action="login-bg.mp4" method="POST">

                    <div className="login-form">

                        <div className="logo-login">
                            <Link to="/"><img src={require("assets/img/logo/loder.png")} alt="" /></Link>
                        </div>
                        <h2>Login Here</h2>
                        
                        <FormInput className="form-input" label="Email" placeholder="Email" type="email" name="Email"/>
                        <FormInput className="form-input" label="Password" placeholder="Password" type="password" name="Password"/>
                        <FormSubmit className="form-input pt-30" value="Login" />

                        <Link to="#" className="forget">Forget Password</Link>
                        <Link to="register" className="registration">Registration</Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login
