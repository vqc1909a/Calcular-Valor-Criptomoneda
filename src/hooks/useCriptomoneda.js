import React, {useState} from 'react';
import PropTypes from 'prop-types';
const useCriptomoneda = (label, stateinitial, criptomonedas) => {
     const [state, changeState] = useState(stateinitial);

     const seleccionarCriptomoneda = () => (
          <div className="form-group">
               <label htmlFor="criptomoneda" className="text-uppercase font-weight-bolder">{label}</label>
               <select value={state} name="criptomoneda" className="form-control form-control-lg bg-dark text-white" onChange={(e) => changeState(e.target.value)}>
                    <option value="" disabled>...Seleccionar</option>
                    {criptomonedas.map((criptomoneda, i) => <option key={i} value={criptomoneda.CoinInfo.Name}>{criptomoneda.CoinInfo.FullName}</option>)}
               </select>
          </div>

     )
     return [state, seleccionarCriptomoneda, changeState];
}
useCriptomoneda.propTypes = {
     label: PropTypes.string.isRequired,
     stateinitial: PropTypes.string.isRequired,
     criptomonedas: PropTypes.array.isRequired
}
export default useCriptomoneda;