/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Login = (props) => {
    
    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string()
            .email('Enter valid email address')
            .strict()
            .trim()
            .required('this field is required'),
            password: yup.string()
            .strict()
            .trim()
            .required('this field is required'),
        }),
        onSubmit: (data) =>{
            axios.post('http://localhost:5000/api/login',data)
            .then(res => {
                localStorage.setItem('auth',JSON.stringify(res.data));
                props.history.push('/home');
            })    
            .catch(err =>{
                console.log('catch',err);
                toast.error(err.response.data);
            })
        }   
    });

    return (
        <div className="container mt-4">
            <div className="jumbotron">
                <h4>Login</h4>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" className="form-control" type="text" onChange={formik.handleChange}></input>
                        {formik.errors.name ? <div className="text-danger">{formik.errors.email}</div> : null}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" className="form-control" type="text" onChange={formik.handleChange}></input>
                        {formik.errors.name ? <div className="text-danger">{formik.errors.password}</div> : null}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <a
                        href="#"
                        onClick={() =>{
                            window.location.href = 'Register';
                        }}
                    >
                        Register
                    </a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;

