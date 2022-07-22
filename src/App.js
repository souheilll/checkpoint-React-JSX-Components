import 'bootstrap/dist/css/bootstrap.min.css';

import Photo from './Components/Profile/ProfilePhoto';
import Location from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import Navvbar from './Components/Navbar';

const appStyle = {
  textAlign: 'center',
  marginTop: '100px'
}

function App() {
  return (

    <div className="App">
      <div>
        <Navvbar />
      </div>

      <div style={appStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Photo />
          <div style={{ marginLeft: '20px' }}>
            <FullName />
            <Location />
          </div>
        </div>
      </div>

    </div>
  );
}
export default App;
