import React, {useState} from 'react'
import Decimal from './Decimal';
import Hexadecimal from './Hexadecimal';
import Octal from './Octal';
import Binary from './Binary';
import './Converter.css'

export const ConversionContext = React.createContext();

const Converter = () => {
    const [hexValue, setHexValue] = useState('0')
    const [binaryValue, setBinaryValue] = useState(0)
    const [decimalValue, setDecimalValue] = useState(0)
    const [octalValue, setOctalValue] = useState(0)
    return (
        <div>
            <ConversionContext.Provider value={{
                hexValue,
                setHexValue,
                binaryValue,
                setBinaryValue,
                decimalValue,
                setDecimalValue,
                octalValue, 
                setOctalValue
            }}>
                <div className="fields">
                    <Decimal/>
                    <Hexadecimal/>
                    <Octal/>
                    <Binary/>
                </div>
                </ConversionContext.Provider>
        </div>
    )
}

export default Converter
