import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';

const Lesson2 = {
  name: '2. 프로젝트 명령어 사용하기',
  idx: 2,
  content: (
    <div className="lesson-content">
      <h2>프로젝트 명령어 사용하기</h2>
      <h3>- 프로젝트 명령어</h3>
      <p>1. NPM 패키지 매니저</p>
      <p>npm은 Node.js 프로젝트를 관리할 수 있는 패키지 매니저이다. 프로젝트 관련 작업을 명령어로 package.json에 정의한다.</p>
      <CodeBlock
          filename="package.json"
          language="json"
          code={`"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}`}
      />
      <p>주로 사용하게 될 명령어는 다음과 같다.</p>
      <CodeBlock
          filename="Terminal"
          language="bash"
          code={`npm run dev
npm run build
npm run preview
`}
      />
      <p>dev      : 작성하는 코드가 실시간으로 반영 ('Live Server'와 유사한 기능)</p>
      <p>build    : 배포용 파일로 컴파일</p>
      <p>preview  : 빌드한 파일 미리보기</p>

      <h3>[참고]</h3>
      <p>크롬 이외의 브라우저가 기본 브라우저로 설정되어 있다면 cross-env를 설치하고, package.json을 아래처럼 바꿔야 명령어를 실행했을 때 크롬 브라우저로 열린다.</p>
      <CodeBlock
          filename="Terminal"
          language="bash"
          code={`npm install cross-env --save-dev`}
      />
      <CodeBlock
          filename="package.json"
          language="json"
          code={`"scripts": {
  "dev": "cross-env BROWSER=chrome vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "cross-env BROWSER=chrome vite preview"
}`}
      />
    </div>
  ),
};

export default Lesson2;
