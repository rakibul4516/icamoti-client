import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";


const initialState = {
    email: '',
    password: ''
}

const LoginAuth = () => {
    const [formData, setFormData] = useState(initialState)


    function onSubmit(){
        
    }


    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Login Your Account</h1>
                <p className="">Do not have any account
                    <Link to='/auth/register' className="font-medium ml-2 text-primary hover:underline">Register</Link>
                </p>
            </div>
            <CommonForm
            formControls={loginFormControls}
            buttonText={'Sign In'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            />
        </div>
    );
};

export default LoginAuth;