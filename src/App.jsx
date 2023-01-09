import Favourites from "./components/Favourites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
import { AppContext } from './Context'
import { useContext } from "react"

function App() {
  const { showModal, favorites } = useContext(AppContext);
  return (
    <>
      <Search />
      {favorites.length > 0 && <Favourites />
      }

      <Meals />
      {showModal && <Modal />}
    </>
  )
}

export default App
