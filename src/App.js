
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmnployees = true;
  return (
    <div className="App">   
        {showEmnployees ? (
          <>
            <Employee name="Heitor" role="Intern" />
            <Employee name="Cintia" />
          </>
        ): (
          <p>you cannot see the employee</p>
        )
        }
    </div>
  );
}

export default App;
