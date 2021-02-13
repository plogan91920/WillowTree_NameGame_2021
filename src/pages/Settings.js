import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Settings() {
  cookies.set('darkMode', true);

  return (
    <div className="App">
      <h1>Settings Page</h1>
      {console.log(cookies.get('darkMode'))}
    </div>
  );
}

export default Settings;
