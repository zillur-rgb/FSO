export interface Courses {
  id: string;
  part: string;
  exercise: number;
}
export interface Contents {
  id: string;
  header: string;
  courses: Courses[];
}

export const courses: Courses[] = [
  {
    id: '0',
    part: 'Fundamentals of React.',
    exercise: 10,
  },
  {
    id: '1',
    part: 'Using props to pass data.',
    exercise: 7,
  },
  {
    id: '2',
    part: 'State of a component.',
    exercise: 14,
  },
];

export const contents: Contents = {
  id: '0',
  header: 'Half Stack application development',
  courses,
};
