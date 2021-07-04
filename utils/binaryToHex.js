const convertBinToHex = (value)=>{
    let decimal = parseInt(value, 2)
    return decimal.toString(16)
}

export default convertBinToHex