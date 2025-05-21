import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson3 = {
    name: '3. 리액트 프로젝트 살펴보기',
    idx: 3,
    content: (
        <div className="lesson-content">
            <h2>리액트 프로젝트 살펴보기</h2>
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

export default Lesson3;
