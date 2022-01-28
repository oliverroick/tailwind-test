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
  InputTextField,
  InputRadio
} from './components/Form';

function App() {
  return (
    <Page>
      <Header>
        <h1>A tailwind form</h1>
      </Header>
      <Content>
        <form className="md:grid md:grid-cols-3 md:gap-4">
          <h2>Background information</h2>
          <div className="md:col-span-2">
            <FormGroup>
              <Label forId="name">Name</Label>
              <InputText name="name" />
            </FormGroup>

            <fieldset className="input-group grid grid-cols-3 gap-4">
              <Legend>Enter your address</Legend>

              <FormGroup>
                <Label forId="postcode">Post code</Label>
                <InputText name="postcode" />
              </FormGroup>

              <FormGroup twClasses="col-span-2">
                <Label forId="City">City</Label>
                <InputText name="City" />
              </FormGroup>
            </fieldset>
          </div>

          <h2>About your role</h2>
          <div className="md:col-span-2">
            <FormGroup>
              <fieldset className="radio">
                <Legend>Role</Legend>
                <InputRadio
                  name="role"
                  options={[
                    {value: 'admin', label: 'Admin'},
                    {value: 'editor', label: 'Editor'},
                    {value: 'user', label: 'User'}
                  ]}
                />
              </fieldset>
            </FormGroup>

            <FormGroup>
              <Label forId="description">Describe your role</Label>
              <InputTextField name="description" />
            </FormGroup>
          </div>

          <div className="md:col-span-2 md:col-start-2">
            <Button variation="primary">Submit</Button>
          </div>
        </form>
      </Content>
      <Footer>
        <p>(c) 2022 All rights reserved</p>
      </Footer>
    </Page>
  );
}

export default App;
