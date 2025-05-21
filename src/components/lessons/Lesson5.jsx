import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson5 = {
    name: '5. JSX 문법 기초',
    idx: 5,
    content: (
        <div className="lesson-content">
            <h2>JSX 문법 기초</h2>
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

export default Lesson5;
