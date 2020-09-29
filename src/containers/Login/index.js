import React from 'react'
import Form from 'components/common/Form'
import { Link } from 'react-router-dom'
import Preloader from 'components/common/Preloader'

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
                        <div className="form-input">
                            <label htmlFor="name">Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="login" />
                        </div>


                        <Link to="#" className="forget">Forget Password</Link>

                        <Link to="register" className="registration">Registration</Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login
