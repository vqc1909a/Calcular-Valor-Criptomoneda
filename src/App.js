import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import Resultados from './components/Resultados';
import logo from './cryptomonedas.png'


function App() {
  const [resultados, changeResultados] = useState({
  });
  const [spinner, changeSpinner] = useState(false);
  return (
    <Fragment>
      <Header title="Calcular Valor Criptomoneda"></Header>
      <section className="criptomoneda">
        <div className="container">
          <div className="row  align-items-center justify-content-center">
            <div className="col-md-4">
                <img src={logo} alt="imagen cripto" className="img-fluid" />
            </div>
            <div className="col-md-6">
                <Formulario changeResultados={changeResultados} changeSpinner={changeSpinner}></Formulario>
                {!spinner ? 
                  <Resultados resultados={resultados}></Resultados>
                  :
                  <Spinner></Spinner>
                }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
