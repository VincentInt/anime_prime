import "./WhiteBtn.css";
import changeBtn from "../changeBtn.js";

const WhiteBtn = ( { children, change = null, style = "" } ) => {
  return (
    <button style={{...style}} className="white_btn" onClick={() => changeBtn(change)}>
      {children}
    </button>
  );
};

export default WhiteBtn;
