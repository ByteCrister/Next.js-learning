"use client";

import React, { useState } from "react";
import axios from "axios";

const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/signup/new-user`, formData);

            if (response.status === 200) {
                console.log("User signed up:", response.data);
            } else {
                console.error("Sign-up failed with status:", response.status);
            }
        } catch (error) {
            console.error("Error during sign-up:", error.response?.data || error.message);
        }
    };


    return (
        <div className="h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 bg-green-200 p-4 rounded shadow-md"
            >
                <label className="font-semibold" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-1 rounded border"
                />

                <label className="font-semibold" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-1 rounded border"
                />

                <label className="font-semibold" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="p-1 rounded border"
                />

                <button
                    type="submit"
                    className="bg-green-500 text-white py-1 rounded mt-2 hover:bg-green-600 transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Page;