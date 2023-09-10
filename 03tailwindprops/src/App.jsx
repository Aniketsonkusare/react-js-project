import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App(props) {
  const [count, setCount] = useState(0);
  let myobj = {
    username: "aniket",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/14934612/pexels-photo-14934612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <br />
      <Card project="This is a Project" myarr = {myobj} username={"Project Create With Props"} BtnText="click me" Card="Card 1"/>
      <br />
      <Card username={"Project Create With Props"} BtnText="visit me" Card="Card 2"/> 
    </>
  );
}

export default App;
