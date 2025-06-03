import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson11 = {
  name: '11. State 더 깊이 알기',
  idx: 11,
  content: (
    <div className="lesson-content">
      <h2>State 더 깊이 알기</h2>
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

export default Lesson11;
