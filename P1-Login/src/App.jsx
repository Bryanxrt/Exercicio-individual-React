import Login from './pages/Login/login'
import { GlobalStyle } from './styles/GlobalStyle'
import backgroundImage from './assets/image.png'

function App() {
  return (
    <>
      <GlobalStyle backgroundImage={backgroundImage} />
      <Login />
    </>
  )
}

export default App
