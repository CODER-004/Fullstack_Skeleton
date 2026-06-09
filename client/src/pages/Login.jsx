import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

function Login({onLoginSuccess}) {
    const [loginError, setLoginError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setLoginError('');

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Tells the server you are sending JSON
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                })
            });

            const result = await response.json();
            
            if (result.success) {
                console.log("Login successful:", result);
                onLoginSuccess(result.token);
                navigate("/");
            } else {
                setLoginError(result.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginError("An error occurred during login");
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
            <h2>Login Form</h2>

            <form className="App" style={appStyle} onSubmit={handleSubmit(onSubmit)}>
                {loginError && <div style={{ color: "red", textAlign: "center" }}>{loginError}</div>}

                <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                    style={inputStyle}
                    disabled={isLoading}
                />
                {errors.username && <span style={{ color: "red" }}>Username is mandatory</span>}

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
                    {isLoading ? "Logging in..." : "Submit"}
                </button>
            </form>
        </>
    );
}

export default Login;
