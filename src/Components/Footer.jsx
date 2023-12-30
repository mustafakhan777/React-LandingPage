import "./Footer.css"

const Footer = () => {
    return <>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <div>
        <a href="">About .</a>
        <a href="">Contact .</a>
        <a href="">Terms of Use .</a>
        <a href="">Privacy policy .</a>
        <p style={{margin:"0px",color:"#93a1af"}}>All Copyrights Reserved.</p>
    </div>
    <div style={{height:"100%"}}>
        <a id="m-s" href=""><img style={{height:"25px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4enjHYF2E6JP5KKq_iYNAW8P8ofJnLswyw&usqp=CAU" alt="" /></a>
        <a  id="m-s"href=""><img style={{height:"25px"}} src="https://thumbs.dreamstime.com/b/high-resolution-colored-facebook-logo-white-background-vector-eps-file-available-additional-download-colored-facebook-175771699.jpg" alt="" /></a>
        <a id="m-s" href=""><img style={{height:"25px"}} src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png" alt="" /></a>
    </div>
    </div>
    </>
}

export default Footer;