import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ChangeTitle from "./components/changeTitle/ChangeTitle";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import StatePage from "./pages/statePage/StatePage";

function App() {
  return (
    <div className="App">
        <MainPage/>
        <AboutPage/>
        <ChangeTitle/>
        <ContactsPage/>
        <StatePage/>
    </div>
  );
}

export default App;
