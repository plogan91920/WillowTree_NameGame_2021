//Functional Includes
import Setting from "../components/Setting.js";

//Resource Includes
import './Settings.scss';

// =============
// Settings Page
// =============
function Settings() {
  return (
    <div className="Page-Settings">
      <h1>Settings</h1>
      <div className="Settings-List">
        <Setting name="assist_mode">Assist Mode</Setting>
        <Setting name="dark_mode">Dark Mode</Setting>
      </div>
    </div>
  );
}

export default Settings;
