import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorite from "./pages/Favorite";
import Layout from "./components/layout/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Layout>
  );
};

export default App;
