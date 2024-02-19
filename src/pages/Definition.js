import { useState, useEffect} from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition(){
    const[word, setWord] = useState([]);
    let { search } = useParams();
    const navigate = useNavigate();
    const [notFound, SetNotFound] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
              .then((response) => {
                if(response.status === 404){
                    SetNotFound(true);
                }

                if(!response.ok){
                    setError(true);
                    
                    throw new Error('Deu bão não')
                }
                return response.json();
              })
              .then((data) => {
                setWord(data[0].meanings);
              })
              .catch((e) => {
                console.log(e.message)
              });

    }, []);

    if(notFound){
       return (
            <>
                <NotFound/>
                <Link to='/dictionary'>Go back!</Link>
            </>
        )
        
    }
    return (
        <>
            {word 
            ? <>
            <h1>Uma definição: </h1>
            {word.map((meaning)=> {
                return  <p key={uuidv4()}>{meaning.definitions[0].definition}</p>;}     
            )}</>
            : <p>Loading...</p> } 

            <p> Procure outra definição: </p>
            <DefinitionSearch/>  
        </>
    );
}