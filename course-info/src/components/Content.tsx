import { courses } from '../data/contentsData';
import Total from './Total';

const Content = ({ data }: any) => {
  console.log('Data', data);

  return (
    <>
      {data.map((course: any) => (
        <p key={course.id}>
          {course.name} {course.exercises}
        </p>
      ))}
      <Total data={data} />
    </>
  );
};

export default Content;
