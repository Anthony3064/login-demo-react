import useAuthContext from "../contexts/UseAuthContext"

export const Dashboard = () => {
  const { logout } = useAuthContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    logout()
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Dashboard</h1>
      <button type="submit">
        Logout
      </button>
    </form>

  )
}
export default Dashboard