export interface Content {
  id: string;
  part: string;
  exercise: number;
}

export const courses: Content[] = [
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
