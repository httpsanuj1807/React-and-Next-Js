import { useState } from "react"

export default function Greeting(){

    const [textChanged, setTextChanged] = useState(false);

    function handleTextChange(){
        setTextChanged((prevState) => !prevState);
    }

    return(
        <div>
            <h2>Hello World!</h2>
            {!textChanged && <p>Its good to see you.</p>}
            {textChanged && <p>Text is changed.</p>}
            <button onClick={handleTextChange}>Change Text</button>
        </div>
    )

}
