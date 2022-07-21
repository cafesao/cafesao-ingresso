import Films from '../components/Films/Films'
import Menu from '../components/Menu/Menu'

export default function index() {
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <Films />
    </div>
  )
}
