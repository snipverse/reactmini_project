import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom"
import SearchBar from "../components/SearchBar";
import Accordion from "../components/Accordion";

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <SearchBar />
      <Accordion title="JavaScript" content="JavaScript is Single threaded synchronous language" />
      <Accordion title="Git" content="Git a tool used for version control" />
      <Accordion title="Java" content="Java is king of Enterprises application" />
    </>
  )
}

export default Dashboard;