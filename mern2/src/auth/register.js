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


const Register = (props) => {
    
    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        validationSchema: yup.object({
            name: yup.string()
            .strict()
            .trim()
            .required('this field is required'),
            email: yup.string()
            .email('Enter valid email address')
            .strict()
            .trim()
            .required('this field is required'),
            password: yup.string()
            .strict()
            .trim()
            .required('this field is required'),
            confirmpassword: yup.string()
            .oneOf([yup.ref('password'), null], 'must be same')
            .required('this field is required'),
        }),
        onSubmit: (data) =>{
            console.log(data);
            axios.post('http://localhost:5000/api/register',data)
            .then(res => {
                console.log('then',res);
                props.history.push('/login');
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
                <h4>Register</h4>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" className="form-control" type="text" onChange={formik.handleChange}></input>
                        {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                    </div>
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
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input name="confirmpassword" className="form-control" type="text" onChange={formik.handleChange}></input>
                        {formik.errors.name ? <div className="text-danger">{formik.errors.confirmpassword}</div> : null}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <a
                        href="#"
                        onClick={() =>{
                            window.location.href = 'login';
                        }}
                    >
                        Login
                    </a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register;
