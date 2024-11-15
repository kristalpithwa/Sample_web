import React from "react";
import Sidebar from "./Sidebar";

interface HomePageProps {
  onLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  return (
    <div className="flex h-screen">
      <Sidebar onPressLogout={() => onLogin()} />
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-4">Welcome to the home screen!</p>
      </div>
    </div>
  );
};

export default HomePage;
