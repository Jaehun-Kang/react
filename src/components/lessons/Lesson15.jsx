import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson15 = {
  name: '15. 커스텀 훅',
  idx: 15,
  content: (
    <div className="lesson-content">
      <h2>커스텀 훅</h2>
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

export default Lesson15;