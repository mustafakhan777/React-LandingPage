import "./App.css";
import Mybutton from "./Components/Mybutton";
import MySliderImg from "./Components/MySiderImg";
import MySmallCards from "./Components/MySmallCards";
import {MyShowcase1,MyShowcase2} from "./Components/MyShowcase";
import bgShowcase from "../src/assets/img/bg-showcase-1.jpg"
import bgShowcase1 from "../src/assets/img/bg-showcase-2.jpg"
import bgShowcase2 from "../src/assets/img/bg-showcase-3.jpg"
import testimonal1 from "../src/assets/img/testimonials-1.jpg"
import testimonal2 from "../src/assets/img/testimonials-2.jpg"
import testimonal3 from "../src/assets/img/testimonials-3.jpg"
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <div id="navbar">
      <p>Logo</p>
      <Mybutton text="Sign Up" />
    </div>
    <div>
      <MySliderImg height="65vh" text="Generate More Leads With a Professional Landing Page" />
    </div>
    <div id="m-t">
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <MySmallCards src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADPz8+bm5vV1dWioqLx8fFoaGjb29uLi4tUVFT7+/s9PT1bW1tycnLq6uoVFRVDQ0O0tLTFxcW8vLxhYWGCgoKsrKw6OjqRkZFKSkoODg7j4+MmJiYxMTGnp6csLCxtbW16enodHR00NDRPT0+Wlpbzv2YZAAAFFElEQVR4nO2d60LiMBBGHaFQLCwFKixS7ur7P+ImoCLYhCaZJK37nX9SGXKY5lKaNA8PAAAAAAAAAAAAAAAAAAAAAADgRFZ245L2fOqNO38pPvm868mvd4jt9sXEi2Nxjn3oJFEZjHJZjjm/YEeEXW29VoKaZLMXUZY37rCJCHrgDmrNVJTmhTfkowi54A3pRMl+ooqAW9aArkhFzuZGnKN9xnAciIZvwhhuRTRmDMfCG9EjW7DHJrUyn8w4CzXg/LrYINqxxXoiYovFR5+IrXve0fryx7wfk335VZAlUcokmOXfmq0iykD0wuirJB2+unNlOI1s+BTCsOjFYhzIcMYU16IkMLSNC8NgwNA6LgyDAUPruDAMBgyt48IwGDC0jgvDYMDQOi4MgwFD67gwDAYMrePCMBgwtI4Lw2DA0DouDIMBQ+u4MAwGDK3jwjAYMLSOC8NgwNA6LgyDAUPruDAMBgyt48IwGDC05jcbZqUkp2H5iYi7KFVk7p+oLw6z4XiwMZ1Jvz6U9+Paw2w4t1susHe00MFqmO1kcftzI/ryPSt/S2lZDeUJarFqdLoiyr1VR07DA9GmYsnhYfLyjcmfny69IdGzwwdrYTRMqXJh2ONtpSsqSpH7W8vHaChSOK14WRiuvlH9TzN/SeQzzI7VKw6F4SD9ekLFe7WhGCDwLQy8KReb4VixAvXHWVppOOBbGHgDn2GX6F3x+jWVA7htZf3kgM9Q5KpTeWC6vKIyhQ+LFhlmtwsAsxt+HJfvapHhzHzMJrPaIsO9uaEsQIsM/xCNnk04L0Rul6FZx9ZGQ6PHYWQwdAWG9YGhugAwdAOG9YGhugD/jWFSpj7oNsfQH7/f8PLcuLiG/YEnlpdLgbiGIW7A/cq29AoYaoGhAhjyAkMtMFQAQ15gqAWGCmoYdhczrpkajTQcn/ZWYEpwIw1X52s8nqkaTTRMPq5ieR6J30TD/ueFOktV/C8M7Z+s34qzdEBkP9XTV0uTnw15NjWYuExM8mXYk7uLMP2IkzltjuCvx0+nXD3+VjGrqR5tGLW57UjRAsO52+YPzTeUv6u7TIBsvGHi2mA13LAcCcHEKUSTDXuzvexyHLcucjbcDa/5W8XQhvVpzLB2vTxp8N01ycp97ylew1xZVPURJevnJcflJe/dtVn1fliF3xVEenhbmo3iImDjbcb7fVgNC9X6C+WBALAaqlP1Gi+JnIaaTEVMIqfhWpMoVQ31D6NhodtYMF4SGQ2P2rr2GiuJfIbaFEZMIp/h7k5zGatPZDO8k8Ia/+AJNsP7jaW+nnqDy7BGNYtUE7kM6/R392qqH5gMa+UnThIvhuXtikMdvRvDeg1llOb0YpibcLw2rJmdKEm8GJry3bBuDYsxsPkwLF8UPwdNJqoDUunDsHZuYiRRudK5Fh+G9Xu6CEnUG/ZGRG+aRvZsaDBaiZDElGipPnqeUaG+a5CcfonSXRfeEr45Heu+/y3R61D3FRzkSWc04IwwOt1oduI+yPzpfgk8PaFmZ1S3wg9slpobrO/iCxf9yFx1fCvv7BlWrfA1UYxOlPMJeueeT5Wh8nTMLIVmtZYH3Q26bq45KB9/sjTPSYTmdC9Kuk8VswpKVX5SUUllUTfGN9mH4Uensqx0VAxpFIOa4+n8TbZz8c5FYsK2T/S0vXrJ3yPDPimO5sNSTkKctcVhHdFQ2VjHoeyyE1sJAAAAAAAAAAAAAAAAAAAAAPB7+AfnZI8rMmZ+LQAAAABJRU5ErkJggg==" text1="Fully Responsive" />
    <MySmallCards src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADPz8+bm5vV1dWioqLx8fFoaGjb29uLi4tUVFT7+/s9PT1bW1tycnLq6uoVFRVDQ0O0tLTFxcW8vLxhYWGCgoKsrKw6OjqRkZFKSkoODg7j4+MmJiYxMTGnp6csLCxtbW16enodHR00NDRPT0+Wlpbzv2YZAAAFFElEQVR4nO2d60LiMBBGHaFQLCwFKixS7ur7P+ImoCLYhCaZJK37nX9SGXKY5lKaNA8PAAAAAAAAAAAAAAAAAAAAAADgRFZ245L2fOqNO38pPvm868mvd4jt9sXEi2Nxjn3oJFEZjHJZjjm/YEeEXW29VoKaZLMXUZY37rCJCHrgDmrNVJTmhTfkowi54A3pRMl+ooqAW9aArkhFzuZGnKN9xnAciIZvwhhuRTRmDMfCG9EjW7DHJrUyn8w4CzXg/LrYINqxxXoiYovFR5+IrXve0fryx7wfk335VZAlUcokmOXfmq0iykD0wuirJB2+unNlOI1s+BTCsOjFYhzIcMYU16IkMLSNC8NgwNA6LgyDAUPruDAMBgyt48IwGDC0jgvDYMDQOi4MgwFD67gwDAYMrePCMBgwtI4Lw2DA0DouDIMBQ+u4MAwGDK3jwjAYMLSOC8NgwNA6LgyDAUPruDAMBgyt48IwGDC05jcbZqUkp2H5iYi7KFVk7p+oLw6z4XiwMZ1Jvz6U9+Paw2w4t1susHe00MFqmO1kcftzI/ryPSt/S2lZDeUJarFqdLoiyr1VR07DA9GmYsnhYfLyjcmfny69IdGzwwdrYTRMqXJh2ONtpSsqSpH7W8vHaChSOK14WRiuvlH9TzN/SeQzzI7VKw6F4SD9ekLFe7WhGCDwLQy8KReb4VixAvXHWVppOOBbGHgDn2GX6F3x+jWVA7htZf3kgM9Q5KpTeWC6vKIyhQ+LFhlmtwsAsxt+HJfvapHhzHzMJrPaIsO9uaEsQIsM/xCNnk04L0Rul6FZx9ZGQ6PHYWQwdAWG9YGhugAwdAOG9YGhugD/jWFSpj7oNsfQH7/f8PLcuLiG/YEnlpdLgbiGIW7A/cq29AoYaoGhAhjyAkMtMFQAQ15gqAWGCmoYdhczrpkajTQcn/ZWYEpwIw1X52s8nqkaTTRMPq5ieR6J30TD/ueFOktV/C8M7Z+s34qzdEBkP9XTV0uTnw15NjWYuExM8mXYk7uLMP2IkzltjuCvx0+nXD3+VjGrqR5tGLW57UjRAsO52+YPzTeUv6u7TIBsvGHi2mA13LAcCcHEKUSTDXuzvexyHLcucjbcDa/5W8XQhvVpzLB2vTxp8N01ycp97ylew1xZVPURJevnJcflJe/dtVn1fliF3xVEenhbmo3iImDjbcb7fVgNC9X6C+WBALAaqlP1Gi+JnIaaTEVMIqfhWpMoVQ31D6NhodtYMF4SGQ2P2rr2GiuJfIbaFEZMIp/h7k5zGatPZDO8k8Ia/+AJNsP7jaW+nnqDy7BGNYtUE7kM6/R392qqH5gMa+UnThIvhuXtikMdvRvDeg1llOb0YpibcLw2rJmdKEm8GJry3bBuDYsxsPkwLF8UPwdNJqoDUunDsHZuYiRRudK5Fh+G9Xu6CEnUG/ZGRG+aRvZsaDBaiZDElGipPnqeUaG+a5CcfonSXRfeEr45Heu+/y3R61D3FRzkSWc04IwwOt1oduI+yPzpfgk8PaFmZ1S3wg9slpobrO/iCxf9yFx1fCvv7BlWrfA1UYxOlPMJeueeT5Wh8nTMLIVmtZYH3Q26bq45KB9/sjTPSYTmdC9Kuk8VswpKVX5SUUllUTfGN9mH4Uensqx0VAxpFIOa4+n8TbZz8c5FYsK2T/S0vXrJ3yPDPimO5sNSTkKctcVhHdFQ2VjHoeyyE1sJAAAAAAAAAAAAAAAAAAAAAPB7+AfnZI8rMmZ+LQAAAABJRU5ErkJggg==" text1="BootStrap 5 Ready" />
    <MySmallCards src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADPz8+bm5vV1dWioqLx8fFoaGjb29uLi4tUVFT7+/s9PT1bW1tycnLq6uoVFRVDQ0O0tLTFxcW8vLxhYWGCgoKsrKw6OjqRkZFKSkoODg7j4+MmJiYxMTGnp6csLCxtbW16enodHR00NDRPT0+Wlpbzv2YZAAAFFElEQVR4nO2d60LiMBBGHaFQLCwFKixS7ur7P+ImoCLYhCaZJK37nX9SGXKY5lKaNA8PAAAAAAAAAAAAAAAAAAAAAADgRFZ245L2fOqNO38pPvm868mvd4jt9sXEi2Nxjn3oJFEZjHJZjjm/YEeEXW29VoKaZLMXUZY37rCJCHrgDmrNVJTmhTfkowi54A3pRMl+ooqAW9aArkhFzuZGnKN9xnAciIZvwhhuRTRmDMfCG9EjW7DHJrUyn8w4CzXg/LrYINqxxXoiYovFR5+IrXve0fryx7wfk335VZAlUcokmOXfmq0iykD0wuirJB2+unNlOI1s+BTCsOjFYhzIcMYU16IkMLSNC8NgwNA6LgyDAUPruDAMBgyt48IwGDC0jgvDYMDQOi4MgwFD67gwDAYMrePCMBgwtI4Lw2DA0DouDIMBQ+u4MAwGDK3jwjAYMLSOC8NgwNA6LgyDAUPruDAMBgyt48IwGDC05jcbZqUkp2H5iYi7KFVk7p+oLw6z4XiwMZ1Jvz6U9+Paw2w4t1susHe00MFqmO1kcftzI/ryPSt/S2lZDeUJarFqdLoiyr1VR07DA9GmYsnhYfLyjcmfny69IdGzwwdrYTRMqXJh2ONtpSsqSpH7W8vHaChSOK14WRiuvlH9TzN/SeQzzI7VKw6F4SD9ekLFe7WhGCDwLQy8KReb4VixAvXHWVppOOBbGHgDn2GX6F3x+jWVA7htZf3kgM9Q5KpTeWC6vKIyhQ+LFhlmtwsAsxt+HJfvapHhzHzMJrPaIsO9uaEsQIsM/xCNnk04L0Rul6FZx9ZGQ6PHYWQwdAWG9YGhugAwdAOG9YGhugD/jWFSpj7oNsfQH7/f8PLcuLiG/YEnlpdLgbiGIW7A/cq29AoYaoGhAhjyAkMtMFQAQ15gqAWGCmoYdhczrpkajTQcn/ZWYEpwIw1X52s8nqkaTTRMPq5ieR6J30TD/ueFOktV/C8M7Z+s34qzdEBkP9XTV0uTnw15NjWYuExM8mXYk7uLMP2IkzltjuCvx0+nXD3+VjGrqR5tGLW57UjRAsO52+YPzTeUv6u7TIBsvGHi2mA13LAcCcHEKUSTDXuzvexyHLcucjbcDa/5W8XQhvVpzLB2vTxp8N01ycp97ylew1xZVPURJevnJcflJe/dtVn1fliF3xVEenhbmo3iImDjbcb7fVgNC9X6C+WBALAaqlP1Gi+JnIaaTEVMIqfhWpMoVQ31D6NhodtYMF4SGQ2P2rr2GiuJfIbaFEZMIp/h7k5zGatPZDO8k8Ia/+AJNsP7jaW+nnqDy7BGNYtUE7kM6/R392qqH5gMa+UnThIvhuXtikMdvRvDeg1llOb0YpibcLw2rJmdKEm8GJry3bBuDYsxsPkwLF8UPwdNJqoDUunDsHZuYiRRudK5Fh+G9Xu6CEnUG/ZGRG+aRvZsaDBaiZDElGipPnqeUaG+a5CcfonSXRfeEr45Heu+/y3R61D3FRzkSWc04IwwOt1oduI+yPzpfgk8PaFmZ1S3wg9slpobrO/iCxf9yFx1fCvv7BlWrfA1UYxOlPMJeueeT5Wh8nTMLIVmtZYH3Q26bq45KB9/sjTPSYTmdC9Kuk8VswpKVX5SUUllUTfGN9mH4Uensqx0VAxpFIOa4+n8TbZz8c5FYsK2T/S0vXrJ3yPDPimO5sNSTkKctcVhHdFQ2VjHoeyyE1sJAAAAAAAAAAAAAAAAAAAAAPB7+AfnZI8rMmZ+LQAAAABJRU5ErkJggg==" text1="Easy To Use" />
    </div>
    </div>
    <div id="m-t" style={{display:"block",}}>
    <MyShowcase1 src={bgShowcase} text1="Fully Responsive" />
    <MyShowcase2 src={bgShowcase1} text1="Updated For Bootstrap 5" />
    <MyShowcase1 src={bgShowcase2} text1="Easy To Use And Customize" />
    </div>
    
    <div id="m-t">
    <div style={{textAlign:"center"}}>
      <h3>What people are saying...</h3>
    </div>
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <MySmallCards src={testimonal1} text1="Fully Responsive" />
      <MySmallCards src={testimonal2} text1="Fully Responsive" />
      <MySmallCards src={testimonal3} text1="Fully Responsive" />
    </div>
    </div>
    <div>
    <MySliderImg height="35vh" text="Ready To get started?signup Now!" />
    </div>
    <div id="m-t">
      <Footer />
    </div>
    </>
  );
}

export default App;
