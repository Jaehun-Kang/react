const LessonList = ({ lessons, onSelect, selectedIdx }) => {
    return (
    <ul className="lesson-list">
        {lessons.map((lesson) => (
            <li
                key={lesson.idx}
                className={selectedIdx === lesson.idx ? 'selected' : ''}
                onClick={() => onSelect(lesson.idx)}
                >
                {lesson.name}
            </li>
            ))}
        </ul>
    );
};

export default LessonList;
