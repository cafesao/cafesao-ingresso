import { useLocation } from 'react-router-dom'
import Menu from '../components/Menu/Menu'

export default function review() {
  const location = useLocation()
  console.log(location) //Get State
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <p>review</p>
    </div>
  )
}
