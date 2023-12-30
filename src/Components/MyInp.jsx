import "./MyInp.css"

const MyInp = (props) => {
    const {type,placeholder} = props
    return <>
    <input type={type} placeholder={placeholder} id="Inp" />
    </>
}

export default MyInp;