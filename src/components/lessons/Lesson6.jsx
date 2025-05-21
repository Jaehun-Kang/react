import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson6 = {
    name: '6. 조건부 렌더링과 리스트 렌더링',
    idx: 6,
    content: (
        <div className="lesson-content">
            <h2>조건부 렌더링과 리스트 렌더링</h2>
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

export default Lesson6;
