import './App.css'
import Experiences from './Experiences'
import Identity from './Identity'
import { experiencesList, infos } from './infos'

function App() {
  return (
    <>
      <Identity data={infos} isFromRi7={infos.campus==="Ri7"}/>
      <Experiences experiencesList={experiencesList} />
    </>
  )
}

export default App