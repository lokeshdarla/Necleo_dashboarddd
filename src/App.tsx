import Navbar from "./components/Navbar";
import Siderbar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex items-start justify-start">
      <Siderbar/>
      <Navbar/>
    </div>
  )
}
