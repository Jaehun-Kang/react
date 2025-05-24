import '../../styles/lesson.css';
import CodeBlock from '../CodeBlock';
import Foldable from "../Foldable";

const Lesson5 = {
    name: '5. JSX 문법 기초',
    idx: 5,
    content: (
        <div className="lesson-content">
            <h2>JSX 문법 기초</h2>
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

export default Lesson5;
