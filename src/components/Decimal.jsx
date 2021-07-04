import React, {useContext} from 'react'
import { ConversionContext } from './Converter'
import convertDecToHex from '../utils/decimalToHex'
import decimalToOctal from '../utils/decimalToOctal'
import decimalToBinary from '../utils/decimalToBinary'
import './Decimal.css'

const Decimal = () => {
    const {decimalValue, setDecimalValue, setHexValue, setBinaryValue, setOctalValue} = useContext(ConversionContext)

    const decimalRegex = /^[0-9]+$/
    const newDecimalValue = (num)=>{
        if(num === ''){
            setDecimalValue(0)
            setHexValue(convertDecToHex(0))
            setOctalValue(decimalToOctal(0))
            setBinaryValue(decimalToBinary(0))
        }
        if(decimalRegex.test(num)){
            setDecimalValue(num)
            setHexValue(convertDecToHex(num))
            setOctalValue(decimalToOctal(num))
            setBinaryValue(decimalToBinary(num))
        }else{
            return;
        }
    }

    return (
        <div>
            <div className="input-group input-group-lg">
                <span 
                className="input-group-text" 
                id="inputGroup-sizing-lg">
                    Decimal
                </span>
                <input 
                    type="number" 
                    className="form-control num-input" 
                    value={decimalValue}
                    onChange={(e)=>newDecimalValue(e.target.value)}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
        </div>
    )
}

export default Decimal
