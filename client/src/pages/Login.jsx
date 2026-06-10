import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";

function Login({ onLoginSuccess }) {
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        onLoginSuccess(result.token);
        navigate("/");
      } else {
        setLoginError(result.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setLoginError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6 mt-10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                InterviewX
              </span>
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-slate-400">
              Sign in to continue screening candidates with AI.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Error */}
            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg px-4 py-3 text-sm">
                {loginError}
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Username
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  disabled={isLoading}
                  placeholder="Enter username"
                  {...register("username", { required: true })}
                  className="w-full bg-slate-900/80 border border-slate-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-indigo-500 transition"
                />
              </div>

              {errors.username && (
                <p className="text-red-400 text-sm mt-1">
                  Username is required
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="password"
                  disabled={isLoading}
                  placeholder="Enter password"
                  {...register("password", { required: true })}
                  className="w-full bg-slate-900/80 border border-slate-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-indigo-500 transition"
                />
              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Remember/Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 rounded-xl font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:scale-[1.02] transition disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-slate-400 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-slate-600 text-xs mt-6">
          AI-Powered Technical Interview Platform
        </p>
      </div>
    </div>
  );
}

export default Login;