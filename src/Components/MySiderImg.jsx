import "./MySliderImg.css";
import MyInp from "./MyInp";
import Mybutton from "./Mybutton";

const MySliderImg = (props) => {
  const {text,height} = props
  return <>
  <div style={{height:height}} id="bgimg">
    <p id="sliderPara">{text}</p>
    <div>
    <MyInp placeholder="Email Address" />
    <Mybutton text="Submit"/>
    </div>    
  </div>
  </>;
};

export default MySliderImg;
