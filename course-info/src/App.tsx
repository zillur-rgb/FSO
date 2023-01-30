import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';
import { courses } from './data/contentsData';

const App = () => {
  return (
    <>
      <Header header={courses[0].name} />
      <Content data={courses[0].parts} />
      <Header header={courses[1].name} />
      <Content data={courses[1].parts} />
    </>
  );
};

export default App;
