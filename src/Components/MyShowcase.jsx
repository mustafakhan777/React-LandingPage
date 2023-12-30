import "./MyShowcase.css";

const MyShowcase1 = (props) => {
    const {src,text1} = props
    return <>
    <div style={{display:"flex",justifyContent:"space-between" ,height:"50vh"}}>
        <div id="submain1">
            <h4 id="pd-l">{text1}</h4>
            <p id="pd-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Non rerum quasi id unde. Facilis sint nulla quae qui nostrum possimus fugit, <br /> autem quibusdam quidem!</p>
        </div>
        <div style={{width:"50%"}}>
            <img style={{height:"100%",width:"100%"}} src={src} alt="" />
        </div>
    </div>
    </>
}
const MyShowcase2 = (props) => {
    const {src,text1} = props
    return <>
    <div style={{display:"flex",justifyContent:"space-between" ,height:"50vh"}}>
        <div style={{width:"50%"}}>
            <img style={{height:"100%",width:"100%"}} src={src} alt="" />
        </div>
        <div id="submain1">
            <h4 id="pd-l">{text1}</h4>
            <p id="pd-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Non rerum quasi id unde. Facilis sint nulla quae qui nostrum possimus fugit, <br /> autem quibusdam quidem!</p>
        </div>
    </div>
    </>
}

export {MyShowcase1,MyShowcase2};