import img from "../../Assets/code.PNG";
import style from "./ACode.module.css";
const ACode = () => {
  return (
    <>
      <div className={style.code}>
        <h1>
          DAYS &nbsp;<span>I CODE</span>
        </h1>
        <img src={img} alt="" />
      </div>
    </>
  );
};
export default ACode;
