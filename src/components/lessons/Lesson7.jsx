import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson7 = {
  name: '7. JSX 속성과 스타일링',
  idx: 7,
  content: (
    <div className="lesson-content">
      <h2>JSX 속성과 스타일링</h2>
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

export default Lesson7;
