import "./MySmallCards.css"

const MySmallCards = (props) => {
    const {src,text1} = props
    return <>
    <div id="MainSmallDiv" style={{textAlign:"center"}}>
        <div id="forpill">
            <img id="Smallcarding" src={src} alt="Img" />
        </div>
        <div >
            <h3>{text1}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Delectus, cum?</p>
        </div>
    </div>
    </>
}
export default MySmallCards;