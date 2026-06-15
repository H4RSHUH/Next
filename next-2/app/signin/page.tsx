"use client"
import axios from "axios";
import { log } from "console";
import { useState } from "react";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Sign In Page</h1>
            <input 
                type="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 mb-4" 
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                id="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 mb-4" 
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" m-4 p-3 px-4  border border-amber-50 rounded-2xl bg-gray-500 hover:bg-gray-700 text-white"
            onClick={() => {
                console.log(email, password);
                axios.post(
                    "http://localhost:3000/api/v1/signin",
                    {
                        email,
                        password
                    }
                )
            }}
            >
                Sign In
            </button>
        </div>
    )
}