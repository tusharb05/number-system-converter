import React, {useContext} from 'react'
import { ConversionContext } from './Converter'
import binaryToDecimal from '../utils/binaryToDecimal'
import convertBinToHex from '../utils/binaryToHex'
import convertBinToOctal from '../utils/binaryToOctal'
import './Binary.css'

const Binary = () => {
    const {binaryValue, setBinaryValue, setDecimalValue, setHexValue, setOctalValue} = useContext(ConversionContext)
    const binRegex = /^[01]+$/

    const convertAndSet = (value)=>{
        if(value===''){
            setDecimalValue(binaryToDecimal(0))
            setHexValue(convertBinToHex(0))
            setOctalValue(convertBinToOctal(0))
            setBinaryValue(0)
        }
        else if(binRegex.test(value)){
            setDecimalValue(binaryToDecimal(value))
            setHexValue(convertBinToHex(value))
            setOctalValue(convertBinToOctal(value))
            setBinaryValue(value)
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
                    <span className="bin-text">Binary</span>
                </span>
                <input 
                    type="number" 
                    className="form-control binary-input" 
                    value={binaryValue}
                    onChange={(e)=>convertAndSet(e?.target?.value)}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
        </div>
    )
}

export default Binary
