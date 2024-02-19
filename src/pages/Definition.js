import { useState, useEffect} from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from "../components/NotFound";

export default function Definition(){
    const[word, setWord] = useState([]);
    let { search } = useParams();
    const navigate = useNavigate();
    const [notFound, SetNotFound] = useState(false);

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
              .then((response) => {
                if(response.status === 404){
                    SetNotFound(true);
                }
                return response.json();
              })
              .then((data) => {
                setWord(data[0].meanings);
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
        </>
    );
}