import React, {useState} from 'react';
import PropTypes from 'prop-types';
const useMoneda = (label, stateinitial, monedas) => {
     const [state, changeState] = useState(stateinitial);

     const seleccionarMoneda = () => (
               <div className="form-group">
                    <label htmlFor="moneda" className="text-uppercase font-weight-bolder">{label}</label>
                    <select value={state} className="form-control bg-dark text-white" name="moneda" onChange={(e) => changeState(e.target.value)}>
                         <option value="" disabled>...Seleccionar</option>
                         {monedas.map((moneda, i) => <option key={i} value={moneda.value} >{moneda.name}</option>)}
                    </select>
               </div>
     )
     return [state, seleccionarMoneda, changeState]
}
useMoneda.propTypes = {
     label: PropTypes.string.isRequired,
     stateinitial: PropTypes.string.isRequired,
     monedas: PropTypes.array.isRequired
}
export default useMoneda;