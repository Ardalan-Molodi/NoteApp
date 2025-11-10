import Header from "./components/header";
import { useState, useEffect } from "react";
import { FourSquare } from "react-loading-indicators";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
<FourSquare color="#5606ff" size="medium" text="Note App" textColor="#0500ff" />
      </div>
    );
  }
  return (
    
    <div className="bg-gray-800 h-dvh ">
      <Header />
    </div>
  );
}
