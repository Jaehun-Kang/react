import { useState } from 'react';
import lessons from './components/lessons';
import LessonList from './components/LessonList';
import './styles/lesson.css';

function App() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const selectedLesson = lessons.find((l) => l.idx === selectedIdx);

  return (
    <div className="app">
      <header className="fixed-header">
        <h1>📘 리액트 정리</h1>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <LessonList lessons={lessons} onSelect={setSelectedIdx} selectedIdx={selectedIdx} />
        </aside>
        <main className="content-area">
          {selectedLesson ? selectedLesson.content : <p>단원을 선택해주세요.</p>}
        </main>
      </div>
    </div>
  );
}

export default App;
