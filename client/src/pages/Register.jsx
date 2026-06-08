import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register({ onRegisterSuccess }) {
    const [registerError, setRegisterError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setRegisterError('');

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.username,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
            });

            const result = await response.json();
            
            if (response.ok && result.success) {
                console.log(data.name + " has been successfully registered");
                onRegisterSuccess(result.token);
                navigate("/home"); 

            } else {
                setRegisterError(result.error || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            setRegisterError("An error occurred during registration");
        } finally {
            setIsLoading(false);
        }
    };

    const appStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "20px auto"
    };

    const inputStyle = {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc"
    };

    return (
        <>
            <h2>Registration Form</h2>

            <form className="App" style={appStyle} onSubmit={handleSubmit(onSubmit)}>
                {registerError && <div style={{ color: "red", textAlign: "center" }}>{registerError}</div>}

                <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                    style={inputStyle}
                    disabled={isLoading}
                />
                {errors.username && <span style={{ color: "red" }}>Username is mandatory</span>}

                <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    style={inputStyle}
                    disabled={isLoading}
                />
                {errors.name && <span style={{ color: "red" }}>Name is mandatory</span>}

                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    style={inputStyle}
                    disabled={isLoading}
                />
                {errors.email && <span style={{ color: "red" }}>Email is mandatory</span>}

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    style={inputStyle}
                    disabled={isLoading}
                />
                {errors.password && <span style={{ color: "red" }}>Password is mandatory</span>}

                <button 
                    type="submit" 
                    style={{ backgroundColor: "#a1eafb", padding: "10px", cursor: "pointer", border: "none", borderRadius: "5px" }}
                    disabled={isLoading}
                >
                    {isLoading ? "Creating Account..." : "Submit"}
                </button>
            </form>
        </>
    );
}

export default Register;
