import { Background, TodoContainer } from "./components";
import { BsGithub } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <a
        href="https://github.com/EL-Codes6/ICAN-DO"
        target="_blank"
        rel="noreferrer"
        className="absolute cursor-pointer dark:text-white w-8 h-8 text-darkTheme-very-dark-blue left-7 top-7"
      >
        <BsGithub className="w-full h-full" />
      </a>
      <Background />
      <TodoContainer />
      <ToastContainer />
    </>
  );
}

export default App;
