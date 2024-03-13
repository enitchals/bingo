import { useState } from "react";
import { Link } from "react-router-dom";

function Build(){
  const [prompts, setPrompts] = useState([]);
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