import "./BlueBtn.css";
import changeBtn from "../changeBtn.js";

const BlueBtn = ({ children, change = null }) => {
  return (
    <button className="blue_btn" onClick={(event) => changeBtn(change,event)}>
      {children}
    </button>
  );
};

export default BlueBtn;
