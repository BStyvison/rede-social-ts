import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

import styles from "./app.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BStyvison.png',
      name: 'Brayan Styvison',
      role: 'Desenvolvedor Full-Stack'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'https://www.linkedin.com/in/styvison/'},
        
    ],
    publisheAt: new Date('2023-01-05 15:28'),
  }, 
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diogo Fernandes',
      role: 'CTO @rocketseat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'https://www.linkedin.com/in/styvison/'},
        
    ],
    publisheAt: new Date('2022-11-09 05:28'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            ) 
          })}
        </main>
      </div>
    </>
  );
}
