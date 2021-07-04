import React, {useContext} from 'react'
import { ConversionContext } from './Converter'
import hexToDecimal from '../utils/hexToDecimal'
import hexToOctal from '../utils/hexToOctal'
import hexToBinary from '../utils/hexToBinary'
import './Hexadecimal.css'

const Hexadecimal = () => {
    const {hexValue, setHexValue, setDecimalValue, setOctalValue, setBinaryValue} = useContext(ConversionContext);

    const hexRegex = /^[A-Fa-f0-9]+$/

    const conversion = (value)=>{
        if(value===''){
            setHexValue(0)
            setDecimalValue(hexToDecimal(0))
            setOctalValue(hexToOctal(0))
            setBinaryValue(hexToBinary(0))
        }
        if(hexRegex.test(value)){
            setHexValue(value)
            setDecimalValue(hexToDecimal(value))
            setOctalValue(hexToOctal(value))
            setBinaryValue(hexToBinary(value))
        }
    }

    return (
        <div>
            <div className="input-group input-group-lg">
                <span 
                className="input-group-text" 
                id="inputGroup-sizing-lg">
                    Hexa
                    <br/>
                    Decimal
                </span>
                <input 
                    type="text" 
                    className="form-control hex-input" 
                    value={hexValue==='NaN' ? '' : hexValue}
                    onChange={(e)=>conversion(e.target.value)}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
        </div>
    )
}

export default Hexadecimal
