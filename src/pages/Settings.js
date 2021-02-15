import Setting from "../components/Setting.js";

function Settings() {
  return (
    <div className="Page-Settings">
      <h1>Settings</h1>
      <Setting name="assist_mode">Assist Mode</Setting>
      <Setting name="dark_mode">Dark Mode</Setting>
    </div>
  );
}

export default Settings;
