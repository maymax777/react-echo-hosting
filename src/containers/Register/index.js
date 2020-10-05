import React from 'react';
import FormInput from 'components/Form/FormInput';
import FormSubmit from 'components/Form/FormSubmit';
import { Link } from 'react-router-dom';
import Preloader from 'components/Preloader';
import BackgroundVideo from 'components/BackgroundVideo';
import { useForm } from 'react-hook-form';
import { ERROR_MSG_REQUIRED } from 'utils/constants';

function Signup() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
        <BackgroundVideo url={require("assets/img/login-bg.mp4")}/>
        <Preloader />
        <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">

            <form className="htmlForm-default" action="login-bg.mp4" method="POST">

                <div className="login-form">

                    <div className="logo-login">
                        <Link to="/"><img src={require("assets/img/logo/loder.png")} alt="" /></Link>
                    </div>
                    <h2>Registration Here</h2>

                    <FormInput className="form-input" label="Full name" placeholder="Full name" type="text" name="Full name"/>
                    <FormInput className="form-input" label="Email Address" placeholder="Email Address" type="email" name="Email Address"/>
                    <FormInput className="form-input" label="Password" placeholder="Password" type="password" name="Password"/>
                    <FormInput className="form-input" label="Confirm Password" placeholder="Confirm Password" type="password" name="Confirm Password"/>                    
                    <FormSubmit className="form-input pt-30" value="Registration" />
                    <Link to="login" className="registration">login</Link>
                </div>
            </form>

        </main>
        </>
    )
}

export default Signup
