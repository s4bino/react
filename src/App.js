
import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('listando employees');
  const showEmnployees = true;
  return (
    <div className="App">   
        {showEmnployees ? (
          <>
            <Employee />
            <Employee />
          </>
        ): (
          <p>you cannot see the employee</p>
        )
        }
    </div>
  );
}

export default App;
