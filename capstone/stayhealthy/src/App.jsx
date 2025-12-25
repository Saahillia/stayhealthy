import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DoctorSearch from "./components/DoctorSearch";
import Notification from "./components/Notification";
import Review from "./components/Review";
import Profile from "./components/Profile";
import InstantConsultation from "./components/InstantConsultation";

function App() {
  return (
    <>
      <Navbar />
      <Notification />
      <Signup />
      <Login />
      <DoctorSearch />
      <InstantConsultation />
      <Review />
      <Profile />
    </>
  );
}

export default App;
