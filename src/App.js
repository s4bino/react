
import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {

  const [role, setRole] = useState('dev');
  const showEmnployees = true;

  return (
    <div className="App">   
        {showEmnployees ? (
          <>
            <input type='text' 
                onChange={(e) => {
                console.log(e.target.value);
                //numer one rule of State: nunca atribua valor a uma variavel 
                //diretamente, sempre use o set
                // não faça isso: role = e.target.value;
                //faça isso:
                setRole(e.target.value);
              }}
            />
            <Employee name="Heitor" role="Intern" />
            <Employee name="Cintia" role={role}/>
          </>
        ): (
          <p>you cannot see the employee</p>
        )
        }
    </div>
  );
}

export default App;
