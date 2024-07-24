import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Erick Costa"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis numquam eos alias maiores voluptatem maxime, dicta fugiat porro eius blanditiis explicabo debitis, minus enim. Quo explicabo nulla quis mollitia corrupti!"
      />
      <Post author="Diego Fernandes" content="Um post legal!" />
    </>
  )
}
