import "./MybuttonStyle.css";
const Mybutton = (props) => {
  const { text } = props;
  return (
    <>
      <button id="Mybtn">{text}</button>
    </>
  );
};

export default Mybutton;
