import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  UserCircle,
  ArrowRight,
} from "lucide-react";

function Register({ onRegisterSuccess }) {
  const [registerError, setRegisterError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setRegisterError("");

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
        onRegisterSuccess(result.token);
        navigate("/");
      } else {
        setRegisterError(result.error || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      setRegisterError("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6 py-10 mt-10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                InterviewX
              </span>
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white">
              Create Your Account
            </h2>

            <p className="mt-2 text-slate-400">
              Start automating technical interviews with AI.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {registerError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg px-4 py-3 text-sm">
                {registerError}
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Username
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  placeholder="Choose a username"
                  disabled={isLoading}
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

            {/* Name */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Full Name
              </label>

              <div className="relative">
                <UserCircle
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  disabled={isLoading}
                  {...register("name", { required: true })}
                  className="w-full bg-slate-900/80 border border-slate-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-indigo-500 transition"
                />
              </div>

              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  Name is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  disabled={isLoading}
                  {...register("email", { required: true })}
                  className="w-full bg-slate-900/80 border border-slate-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-indigo-500 transition"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  Email is required
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
                  placeholder="Create a password"
                  disabled={isLoading}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 rounded-xl font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:scale-[1.02] transition disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-slate-400 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          AI-Powered Technical Interview Platform
        </p>
      </div>
    </div>
  );
}

export default Register;
