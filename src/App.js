import './App.css';
import Button from './components/Button';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Page from './layout/Page';
import Content from './layout/Content';
import {
  FormGroup,
  Label,
  Legend,
  InputText,
  InputRadio
} from './components/Form';

function App() {
  return (
    <Page>
      <Header>
        <h1>A tailwind form</h1>
      </Header>
      <Content>
        <form>
          <h2>Background information</h2>
          <FormGroup>
            <Label for="name">Name</Label>
            <InputText name="name" />
          </FormGroup>
          <FormGroup>
            <fieldset className="radio">
              <Legend>Role</Legend>
              <InputRadio
                name="role"
                options={[
                  {name: 'admin', label: 'Admin'},
                  {name: 'editor', label: 'Editor'},
                  {name: 'user', label: 'User'}
                ]}
              />
            </fieldset>
          </FormGroup>
          <Button variation="primary">Submit</Button>
        </form>
      </Content>
      <Footer>
        <p>(c) 2022 All rights reserved</p>
      </Footer>
    </Page>
  );
}

export default App;
