import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson4 = {
    name: '4. 컴포넌트 기초',
    idx: 4,
    content: (
        <div className="lesson-content">
            <h2>컴포넌트 기초</h2>
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

export default Lesson4;
