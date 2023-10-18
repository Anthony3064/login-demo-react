import { Navigate } from "react-router-dom";
import useAuthContext from "../contexts/UseAuthContext"
import { useState } from "react";
import { DASHBOARD } from "../config/routes/paths";
export const Login = () => {
  const { login, isAuthenticated } = useAuthContext();
  const [magicWord, setMagicWord] = useState('');

  function handleInputChange(event) {
    setMagicWord(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (magicWord === 'admin') {
      login()
    } else {
      console.log('Bad');
    }
    setMagicWord('');
  }
  if (isAuthenticated) {
    return <Navigate to={DASHBOARD} />
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">
          Confirmar
        </button>
      </form>
    </div>
  )
}
export default Login