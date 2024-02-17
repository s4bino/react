import { useState , useEffect} from "react"; 

export default function Dictionary(){
    
    const[word, setWord] = useState('');
    
    useEffect(() => {
        console.log('Função do useEffect',  word);
    }); //é possivel limitar para qual estado o useEffect liga, utilizando o dependency array
    // que é o segundo parametro que pode ser passado na função useEffect

    return (
        <>
            <input type='text' 
            onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h1>Word: {word}</h1>
        </>
    )
}