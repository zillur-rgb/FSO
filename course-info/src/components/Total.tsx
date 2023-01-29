import { courses } from '../data/contentsData';

const Total = () => {
  const totalEx = courses.reduce((total, course) => {
    return (total = total + course.exercise);
  }, 0);
  return <p>Number of exercises {totalEx}</p>;
};

export default Total;