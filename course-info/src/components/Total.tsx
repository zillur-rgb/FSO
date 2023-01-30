import { courses } from '../data/contentsData';

const Total = ({ data }: any) => {
  const totalEx = data.reduce((total: any, course: { exercises: any }) => {
    return (total = total + course.exercises);
  }, 0);
  return (
    <p
      style={{
        fontWeight: 'bold',
      }}
    >
      Number of exercises {totalEx}
    </p>
  );
};

export default Total;
