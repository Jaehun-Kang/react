import '../../styles/lesson.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lesson2 = {
  name: '2. 프로젝트 명령어 사용하기',
  idx: 2,
  content: (
    <div className="lesson-content">
      <h2>tnwjd</h2>
      <p>내용</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {/* `` 안에 코드 */}
        {`수정 다시 수정`}
      </SyntaxHighlighter>
    </div>
  ),
};

export default Lesson2;
