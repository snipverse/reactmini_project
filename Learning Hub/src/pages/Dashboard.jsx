import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import SearchBar from "../components/SearchBar";
import Accordion from "../components/Accordion";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h1>My Learning Hub</h1>
      <button onClick={handleLogout}>Logout</button>

      <SearchBar />

      <Accordion title="JavaScript" content="JS is the language of the web." />
      <Accordion title="React" content="React helps build UI components." />
      <Accordion title="Git" content="Git is used for version control." />
    </div>
  );
};

export default Dashboard;
