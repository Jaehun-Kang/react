import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson10 = {
  name: '10. State 기초',
  idx: 10,
  content: (
    <div className="lesson-content">
      <h2>State 기초</h2>
      <p>내용</p>
      <CodeBlock
        filename="MyComponent.jsx"
        language="jsx"
        code={`code`}
      />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock
          filename="MyComponent.jsx"
          language="jsx"
          code={`code`}
        />
      </Foldable>
    </div>
  )
};

export default Lesson10;
