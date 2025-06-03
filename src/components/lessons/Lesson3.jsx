import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson3 = {
  name: '3. 리액트 프로젝트 살펴보기',
  idx: 3,
  content: (
    <div className="lesson-content">
      <h2>리액트 프로젝트 살펴보기</h2>
      <p>프로젝트를 처음 생성했을 때 파일들을 보고 작동 원리를 파악해보자.</p>
      {/* index.html */}
      <div>
        <h3>index.html</h3>
        <Foldable title="전체 코드">
          <CodeBlock
            filename="index.html"
            language="html"
            code={`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`}
          />
        </Foldable>
        <p>body 태그 안에는 DIV 하나만 존재한다. 아래 스크립트 태그를 보면 main.jsx를 불러오고 있는 것을 확인할 수 있는데,</p>
        <CodeBlock
          filename="index.html"
          language="html"
          code={`<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>`}
        />
        <p>main.jsx에서 이 부분을 렌더링하도록 한다.</p>
        <CodeBlock
          filename="main.jsx"
          language="jsx"
          code={`createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`}
        />
      </div>

      {/* main.jsx */}
      <div>
        <h3>main.jsx</h3>
        <Foldable title="전체 코드">
          <CodeBlock
          filename="main.jsx"
          language="jsx"
          code={`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`}
          />
        </Foldable>
        <p>아래 코드로 렌더링할 App.jsx 컴포넌트를 불러온 다음,</p>
        <CodeBlock
          filename="main.jsx"
          language="jsx"
          code={`import App from './App.jsx'`}
        />
        <p>App 변수로 가져온 App.jsx 컴포넌트를 render 함수로 렌더링한다.</p>
        <CodeBlock
          filename="main.jsx"
          language="jsx"
          code={`createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`}
        />
      </div>

      {/* App.jsx */}
      <div>
        <h3>App.jsx</h3>
        <Foldable title="전체 코드">
          <CodeBlock
            filename="App.jsx"
            language="jsx"
            code={`import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App`}
          />
        </Foldable>
        <p>아래에서 볼 수 있듯 순수 자바스크립트에서 불가능한 이미지 임포트도 가능하다.</p>
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'`}
        />
        <p>App 함수는 하나의 컴포넌트로 기능한다.</p>
        <p>함수를 컴포넌트로 활용할 때 함수의 이름을 대문자로 설정하고, jsx로 작성된 태그를 반환한다는 점에서 일반 함수와 다른 점을 알 수 있다.</p>
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}`}
        />
      </div>
      <div>
        <h3>정리하자면,</h3>
        <p>App.jsx에서 return 함수 안에 있는 것들이 main.js로 임포트되고,</p>
        <CodeBlock
          filename="App.jsx"
          language="jsx"
          code={`return (
  <>
    // ...생략...
  </>
)`}
        />
      </div>
      <p>main.jsx의 이 부분이 index.html로 임포트,</p>
      <CodeBlock
        filename="main.jsx"
        language="jsx"
        code={`<App />`}
      />
      <p>최종적으로 App은 index.html에서 root인 div 태그 안으로 렌더링되어 화면에 나타나게 되는 것이다.</p>
      <CodeBlock
        filename="index.html"
        language="html"
        code={`<div id="root"></div>`}
      />
    </div>
  ),
};

export default Lesson3;
