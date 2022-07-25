import { useLocation } from 'react-router-dom'
import Menu from '../components/Menu/Menu'

export default function time() {
  const search = useLocation().search
  const paramsURL = {
    id: new URLSearchParams(search).get('id'),
    choiceDay: new URLSearchParams(search).get('choiceDay'),
    choiceHours: new URLSearchParams(search).get('choiceHours'),
  }
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <p>time</p>
    </div>
  )
}
