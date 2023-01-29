import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development';

  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  );
};

export default App;
