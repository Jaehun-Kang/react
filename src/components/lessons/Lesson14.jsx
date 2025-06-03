import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson14 = {
  name: '14. 생명주기와 useEffect',
  idx: 14,
  content: (
    <div className="lesson-content">
      <h2>생명주기와 useEffect</h2>
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

export default Lesson14;
