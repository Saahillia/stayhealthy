import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import DoctorSearch from "./components/DoctorSearch";
import Notification from "./components/Notification";
import InstantConsultation from "./components/InstantConsultation";
import Review from "./components/Review";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Notification />
      <Signup />
      <Login />
      <DoctorSearch />
      <InstantConsultation />
      <Review />
      <Profile />
    </div>
  );
}

export default App;
