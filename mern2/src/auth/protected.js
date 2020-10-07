/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

// eslint-disable-next-line no-unused-vars
const ProtectedRouter = ({component,...rest}) => {
    let RenderComponents = component;
    let hasToken = JSON.parse(localStorage.getItem('auth'));
    console.log(hasToken);
    return(
        <Route
            {...rest}
            render = {
                props => {
                    return hasToken !== null ? (
                    <RenderComponents {...props} />
                    ) : (
                        <Redirect
                        to = {{
                            pathname:'/login'
                        }}
                        />
                    )
                }
            }
        />    
    )
}

export default ProtectedRouter;