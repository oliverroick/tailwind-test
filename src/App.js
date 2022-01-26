import './App.css';
import Button from './components/Button';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Page from './layout/Page';

function App() {
  return (
    <Page>
      <Header>
        <h1 className="text-3xl font-bold">
          A tailwind form
        </h1>
      </Header>
      <Button variation="primary">Submit</Button>
      <Footer>
        <p>(c) 2022 All rights reserved</p>
      </Footer>
    </Page>
  );
}

export default App;
