import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson = {
    name: '4. 컴포넌트 기초',
    idx: 4,
    content: (
        <div className="lesson-content">
            <h2>컴포넌트 기초</h2>
            <p>내용</p>
            <SyntaxHighlighter language="jsx" style={oneDark}>
                {/* `` 안에 코드 */}
                {
`코드`
}
            </SyntaxHighlighter>
        </div>
    )
};

export default Lesson;
