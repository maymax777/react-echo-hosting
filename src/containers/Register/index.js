import React from 'react';
import FormInput from 'components/common/FormInput';
import { Link } from 'react-router-dom';
import Preloader from 'components/common/Preloader';
import BackgroundVideo from 'components/common/BackgroundVideo';

function Signup() {
    return (
        <>
        <BackgroundVideo url="assets/img/login-bg.mp4"/>
        <Preloader />
        <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">

            <form className="htmlForm-default" action="login-bg.mp4" method="POST">

                <div className="login-form">

                    <div className="logo-login">
                        <Link to="/"><img src={require("assets/img/logo/loder.png")} alt="" /></Link>
                    </div>
                    <h2>Registration Here</h2>

                    <div className="form-input">
                        <label htmlFor="name">Full name</label>
                        <input type="text" name="name" placeholder="Full name" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">Email Address</label>
                        <input type="email" name="email" placeholder="Email Address" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">Confirm Password</label>
                        <input type="password" name="password" placeholder="Confirm Password" />
                    </div>
                    <div className="form-input pt-30">
                        <input type="submit" name="submit" value="Registration" />
                    </div>

                    <Link to="login" className="registration">login</Link>
                </div>
            </form>

        </main>
        </>
    )
}

export default Signup
