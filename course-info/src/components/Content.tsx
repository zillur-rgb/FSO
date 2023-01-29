import { courses } from '../data/contentsData';

const Content = () => {
  return (
    <>
      {courses.map((course) => (
        <p key={course.id}>
          {course.part} {course.exercise}
        </p>
      ))}
    </>
  );
};

export default Content;
