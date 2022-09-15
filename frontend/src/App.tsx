import "bootstrap/dist/css/bootstrap.css";
import LoginCard from './login/components/logincard';

function App() {

  return (
    <>
      <main className="psicoenvolver-container">
        <section id="login">
          <LoginCard />
        </section>
      </main>
    </>
  );

};

export default App;
