import './index';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {

  const [role, setRole] = useState('Engenheiro Civil');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Heitor',
      role: "Dev",
      img:'https://static.wikia.nocookie.net/youtv/images/4/47/Joe-Goldberg-1.png'
    },
    {
      id: 2,
      name: 'Duda',
      role: "Engenheira Ambiental",
      img: 'https://static.wikia.nocookie.net/youtv/images/a/a2/LovePortal.png'
        
    },
    {
      id: 3,
      name: 'Beto',
      role: "Engenheiro Civil",
      img:'https://br.web.img3.acsta.net/r_1280_720/pictures/18/08/01/19/13/5083489.jpg'
    },
    {
      id: 4,
      name: 'Cintia',
      role: "Médica",
      img: 'https://www.clickguarulhos.com.br/wp-content/uploads/2023/12/Ana-Maria-Braga.jpg'
    },
    {
      id: 5,
      name: 'Enzo',
      img: 'https://pbs.twimg.com/media/Ew9emqcWEAMh6Sa.jpg'
    },
  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        return {...employee, name: newName, role: newRole}
      }
      

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmnployees = true;

  return (
    <div className="App">   
        {showEmnployees ? (
          <>
            <input type='text' 
                onChange={(e) => {
                console.log(e.target.value);
                //number one rule of State: nunca atribua valor a uma variavel 
                //diretamente, sempre use o set
                // não faça isso: role = e.target.value;
                //faça isso:
                setRole(e.target.value);
              }}
            />

            <div className='flex flex-wrap justify-center'>
                {employees.map((employee) =>{
                  return(
                    <Employee
                        key={employee.id}
                        id={employee.id}
                        name={employee.name} 
                        role={employee.role}
                        img={employee.img}
                        updateEmployee={updateEmployee}
                    />
                  );
                })}          
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
