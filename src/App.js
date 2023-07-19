import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';
import Chart from 'components/Chart/Chart';
import Transactions from 'components/Transactions/Transactions';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { data } from 'components/DiagramTable/data';
import { Background } from 'components/Background/Background';


function App() {
  return (
    <>
      <Background />
      <Container>
        <LoginForm />
        <Chart/>
        <DiagramTable data={data} />
        <Transactions />
      </Container>
    </>
  );
}

export default App;
