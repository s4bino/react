import { useState , useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
export default function Dictionary(){
    
    const[word, setWord] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log('Função do useEffect',  word);
    // }); //é possivel limitar para qual estado o useEffect liga, utilizando o dependency array
    // que é o segundo parametro que pode ser passado na função useEffect

    // se passarmos nada no dependency array --> ele vai dar update para cada mudança de estado
    // se passarmos um dependency array vazio --> executará uma vez --> interessante em casos que precisamos fazer algo assim que a página for carregada
    // se passarmos algo --> ele se importará somnete com o estado do que passamos

    return (
        <>
            <input type='text' 
            onChange={(e) => {
                setWord(e.target.value);
            }} />
            <button onClick={()=> {
                navigate('/definition/' + word);
            }}> Search </button>
        </>
    )
}