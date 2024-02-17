import { useState , useEffect} from "react"; 

export default function Dictionary(){
    
    const[word, setWord] = useState('');
    
    useEffect(() => {
        console.log('Função do useEffect',  word);
    }); //é possivel limitar para qual estado o useEffect liga, utilizando o dependency array
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
            <h1>Word: {word}</h1>
        </>
    )
}