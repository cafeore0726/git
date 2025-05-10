import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class="name">
      <h1>自己紹介</h1>
        <table>
            <tr>
                <th>名前</th>
                <td>池田怜央</td>
            </tr>
            <tr>
                <th>学籍番号</th>
                <td>T124013</td>
            </tr>
            <tr>
                <th>出身地</th>
                <td>静岡県</td>
            </tr>
        </table>
      </section>

      <section class="local-initiative">
        <h2>地域連携で取り組んだこと</h2>
        <p>テラコヤプロジェクトという空き家を改築し、子供たちの第三の居場所や学生向けのシェアハウスを作るというプロジェクト活動の手伝いをした。</p>
    </section>

    <section class="project-goal">
        <h2>プロジェクトでできるようになりたいこと</h2>
        <p>技術と知識を学び、実際の現場で役に立つようなシステムを開発できるようになりたい。</p>
    </section>

    <section class="question-form">
        <h2>質問フォーム</h2>
        <form>
            <textarea name="question" id="question" rows="4" cols="50" placeholder="質問内容を入力して下さい"></textarea>
            <button type="submit">送信</button>
        </form>
    </section>
    </>
  )
}

export default App
