import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';

const Lesson3 = {
  name: '3. 리액트 프로젝트 살펴보기',
  idx: 3,
  content: (
    <div className="lesson-content">
      <h2>리액트 프로젝트 살펴보기</h2>
      <p>내용</p>
      <CodeBlock
        filename="MyComponent.jsx"
        language="jsx"
        code={`code`}
      />
    </div>
  ),
};

export default Lesson3;
