import { useState } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div>
      <a href="/">
        <h1 className="text-center font-bold font-serif text-3xl my-5 text-orange-400 hover:text-black group cursor-pointer">
          Note{" "}
          <span className="group-hover:text-orange-400 text-black">Book</span>{" "}
          Web
        </h1>
      </a>
      <div className="flex justify-evenly items-center">
        <h2 className="font-bold text-2xl">
          My Notes: <span className="text-orange-400">{counter}</span>
        </h2>

        <select
          id="selection"
          name=""
          className="border-gray-500 text-orange-400 border rounded-sm px-2 flex  font-bold">
          <option value="" className="">
            sort based on least
          </option>
          <option value="" className="">
            sort by last date
          </option>
          <option value="" className="">
            sort by first
          </option>
        </select>
      </div>
    </div>
  );
}
