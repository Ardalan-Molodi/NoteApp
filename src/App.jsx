import Header from "./components/header";
import { useState, useEffect } from "react";
import { FourSquare } from "react-loading-indicators";
import AddNote from "./widgets/AddNote";

export default function App() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <FourSquare
          color="#5606ff"
          size="medium"
          text="Note App"
          textColor="#0500ff"
        />
      </div>
    );
  }
  return (
    <div className="bg-gray-800 h-dvh ">
      <Header />
      <AddNote />
    </div>
  );
}
