import { useState } from "react";
import { Link } from "react-router-dom";

const testingData = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

function Build(){
  const [prompts, setPrompts] = useState(testingData);
  const [newPrompt, setNewPrompt] = useState('');

  const handleSubmit = () => {
    setPrompts([...prompts, newPrompt])
    localStorage.setItem('custom-bingo-prompts', JSON.stringify(prompts))
    setNewPrompt('')
  }

  return(
    <>
      <ol>
        {prompts.map(p => <li>{p}</li>)}
      </ol>
      <input value={newPrompt} onChange={(e) => setNewPrompt(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>
      {prompts.length > 23 && <Link to="/cat/custom">Generate Card!</Link>}
    </>
  )
}

export default Build