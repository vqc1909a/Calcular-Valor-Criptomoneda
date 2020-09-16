import React, {useEffect, useState} from 'react';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import PropTypes from 'prop-types';
const Formulario = ({changeResultados, changeSpinner}) => {
     const monedas = [
          {value: 'PEN', name: 'Sol Peruano'},
          {value: 'USD' , name: 'Dolar de Estados Unidos'},
          {value: 'MXN' , name: 'Peso Mexicano'},
          {value: 'EUR', name: 'Euro'},
          {value: 'GBP', name: 'Libra Esterlina'},
     ]
     const [criptomonedas, changeCriptomonedas] = useState([]);
     const [error, changeError] = useState(false);


     const [moneda, seleccionarMoneda, changeMoneda] = useMoneda("Elige tu moneda", "", monedas);
     const [criptomoneda, seleccionarCriptomoneda, changeCriptomoneda] = useCriptomoneda("Elige tu criptomoneda", "", criptomonedas);
     useEffect(()=>{
          (async ()=>{
               const {data} = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${process.env.REACT_APP_API_KEY}`)
               changeCriptomonedas(data.Data);
               // eslint-disable-next-line
          })();
     },[])
     
     const handleSubmit = async (e) => {
          e.preventDefault();
          changeSpinner(true);
          if(moneda.trim() === '' || criptomoneda.trim() === ''){
               changeError(true);
               changeSpinner(false);
               return null;
          }
          changeError(false);

          const {data} = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${process.env.REACT_APP_API_KEY}`);
          changeResultados({...data.DISPLAY[criptomoneda][moneda]});
          changeSpinner(false);
          changeMoneda('');
          changeCriptomoneda('');
     }
     return (
               <form className="text-white" onSubmit={handleSubmit}>
                    {error ? <div className="alert alert-danger">Los campos son obligatorios</div> : null}
                    {seleccionarMoneda()}
                    {seleccionarCriptomoneda()}
                    <button type="submit" className="btn btn-outline-light btn-lg btn-block">Calcular Valor</button>
               </form>
     );
}
Formulario.propTypes = {
     changeResultados: PropTypes.func.isRequired,
     changeSpinner: PropTypes.func.isRequired
}
export default Formulario;