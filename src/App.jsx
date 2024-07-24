import { Header } from "./components/header/Header"
import { Post } from "./components/post/Post"
import { Sidebar } from "./components/sidebar/Sidebar"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Erick Costa"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis numquam eos alias maiores voluptatem maxime, dicta fugiat porro eius blanditiis explicabo debitis, minus enim. Quo explicabo nulla quis mollitia corrupti!"
          />
          <Post author="Diego Fernandes" content="Um post legal!" />
        </main>
      </div>
    </div>
  )
}
