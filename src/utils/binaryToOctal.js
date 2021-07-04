const convertBinToOctal = (value)=>{
    let decimalVal = parseInt(value, 2)
    return decimalVal.toString(8)
}
export default convertBinToOctal