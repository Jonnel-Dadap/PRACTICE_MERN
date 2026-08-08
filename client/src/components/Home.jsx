import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Play,
  Info,
  Phone,
  Code,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => navigate("/todolist");
  const handleOnAbout = () => navigate("/about");
  const handleOnPrac = () => navigate("/practice");
  const handleOnContact = () => navigate("/Contact");
  const handleOnPracHooks = () => navigate("/practiceHooks");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-5 rounded-full shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-8">
          Todo List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <button
            onClick={handleOnClick}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            <Play className="w-5 h-5" />
            Start Now
          </button>

          <button
            onClick={handleOnAbout}
            className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 hover:scale-105 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            <Info className="w-5 h-5" />
            About
          </button>

          <button
            onClick={handleOnContact}
            className="flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 hover:scale-105 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Contact
          </button>
          <button
            onClick={handleOnPrac}
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            <Code className="w-5 h-5" />
            Practice Field
          </button>

          <button
            onClick={handleOnPracHooks}
            className="sm:col-span-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            <CheckCircle2 className="w-5 h-5" />
            Practice React Hooks
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;