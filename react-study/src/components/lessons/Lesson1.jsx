import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson1 = {
    name: '1. 프로젝트 생성하기',
    idx: 1,
    content: (
        <div className="lesson-content">
            <h2>프로젝트 생성하기</h2>
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

export default Lesson1;
