import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson0 = {
    name: '프리셋',
    idx: 0,
    content: (
        <div className="lesson-content">
            <h2>제목</h2>
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

export default Lesson0;
