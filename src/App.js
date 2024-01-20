import './index';
import Employee from './components/Employee';
import { useState } from 'react';
import enzo from './images/enzo.jpg'
import beto from './images/beto.jpeg'
import heitor from './images/heitor.jpeg'
import duda from './images/duda.jpeg'
import cintia from './images/cintia.jpeg'

function App() {

  const [role, setRole] = useState('Engenheiro Civil');
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

            <div className='flex flex-wrap justify-center'>

              <Employee name="Heitor" 
                        role="Dev" 
                        img={heitor}
              />
              
              <Employee name="Cintia" 
                        role="Médica"
                        img={cintia}
              />

              <Employee name="Beto" 
                        role={role}
                        img={beto}
              />

              <Employee name="Duda" 
                        role="Engenheira Ambiental"
                        img={duda}
              />

              <Employee name="Enzo" 
                        img={enzo}
              />
            </div>

          </>
        ): (
          <p>you cannot see the employee</p>
        )
        }
    </div>
  );
}

export default App;
