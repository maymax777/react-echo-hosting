import React from 'react'
import Form from 'components/Form'
import { Link } from 'react-router-dom'
import Preloader from 'components/Preloader'
import FormInput from 'components/Form/FormInput'
import FormSubmit from 'components/Form/FormSubmit'
import { useForm } from 'react-hook-form';
import { ERROR_MSG_REQUIRED } from 'utils/constants';
import { registerUser } from 'services/api';

function Login() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Preloader />
            <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">

                <form className="form-default" method="POST" onSubmit={ handleSubmit(onSubmit) }>

                    <div className="login-form">

                        <div className="logo-login">
                            <Link to="/"><img src={require("assets/img/logo/loder.png")} alt="" /></Link>
                        </div>
                        <h2>Login Here</h2>
                        
                        <FormInput className="form-input" label="Email" placeholder="Email" type="email" name="Email" ref={register({required: ERROR_MSG_REQUIRED})}/>
                        {errors.email ? <p>{errors.email.message}</p> : null}

                        <FormInput className="form-input" label="Password" placeholder="Password" type="password" name="Password" ref={register({required: ERROR_MSG_REQUIRED})}/>
                        {errors.password ? <p>{errors.password.message}</p> : null}

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
