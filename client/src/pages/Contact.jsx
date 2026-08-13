import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const Navigate = useNavigate();

    const handleRedirection = () => {
        Navigate(-1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 text-center">

                <h1 className="text-3xl font-bold text-white mb-3">
                    Contact Page
                </h1>

                <p className="text-gray-200 mb-6">
                    Contact us through Bluetooth
                </p>

                <button
                    onClick={handleRedirection}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
                >
                    ← Back to Previous Page
                </button>

            </div>
        </div>
    );
};

export default Contact;