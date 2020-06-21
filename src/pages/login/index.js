import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeLogin from '../loginLayout'
import SignIn from '../singInLayout'
import RecoverPassword from '../recoverPassword'
import SignUp from '../signUpLayout'
import CodeValidationResetPasswordLayout from '../codeValidationResetPasswordLayout'
import ResetPassword from '../resetPasswordLayout'
import ResetPasswordSuccess from '../resetPasswordSuccessLayout'
import SetPassword from '../setPasswordLayout'
import CodeValidationSignUpLayout from '../codeValidationSignUpLayout'

export default function Login() {
    const AppStack = createStackNavigator();
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="HomeLogin" component={HomeLogin} />
            <AppStack.Screen name="SignIn" component={SignIn} />
            <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
            <AppStack.Screen name="CodeValidationResetPasswordLayout" component={CodeValidationResetPasswordLayout} />
            <AppStack.Screen name="ResetPassword" component={ResetPassword} />
            <AppStack.Screen name="ResetPasswordSuccess" component={ResetPasswordSuccess} />

            <AppStack.Screen name="SignUp" component={SignUp} />
            <AppStack.Screen name="CodeValidationSignUpLayout" component={CodeValidationSignUpLayout} />
            <AppStack.Screen name="SetPassword" component={SetPassword} />
        </AppStack.Navigator>
    )
}