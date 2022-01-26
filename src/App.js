import './App.css';
import Button from './components/Button';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Page from './layout/Page';
import Content from './layout/Content';

function App() {
  return (
    <Page>
      <Header>
        <h1>A tailwind form</h1>
      </Header>
      <Content>
        <Button variation="primary">Submit</Button>
      </Content>
      <Footer>
        <p>(c) 2022 All rights reserved</p>
      </Footer>
    </Page>
  );
}

export default App;
