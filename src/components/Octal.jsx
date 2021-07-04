import React, {useContext} from 'react'
import { ConversionContext } from './Converter'
import octalToDecimal from '../utils/octalToDecimal'
import octalToHex from '../utils/octalToHex'
import octalToBinary from '../utils/octalToBinary'
import './Octal.css'

const Octal = () => {
    const {octalValue, setOctalValue, setDecimalValue, setHexValue, setBinaryValue} = useContext(ConversionContext)

    const regex = /^[0-7]+$/

    const convertAndSet = (value)=>{
        if(value===''){
            setOctalValue(0)
            setDecimalValue(octalToDecimal(0))
            setHexValue(octalToHex(0))
            setBinaryValue(octalToBinary(0))
        }
        else if(regex.test(value)){
            setOctalValue(value)
            setDecimalValue(octalToDecimal(value))
            setHexValue(octalToHex(value))
            setBinaryValue(octalToBinary(value))
        }else{
            return;
        }
        
    }

    return (
        <div>
            <div className="input-group input-group-lg">
                <span 
                className="input-group-text" 
                id="inputGroup-sizing-lg"
                >
                    <span className="text-side-input">Octal</span>
                </span>
                <input 
                    type="number" 
                    className="form-control octal-input" 
                    value={octalValue}
                    onChange={(e)=>convertAndSet(e.target.value)}
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
        </div>
    )
}

export default Octal
