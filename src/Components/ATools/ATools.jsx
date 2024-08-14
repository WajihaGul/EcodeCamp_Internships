import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import style from "./ATools.module.css";
const ATools = () => {
  return (
    <>
      <h1>
        Tools&nbsp; <span> I USE </span>
      </h1>
      <div className={style.rowno1}>
        <div className={style.row1}>
          <FaJava className={style.row1svg} />
        </div>
        <div className={style.row1}>
          <AiOutlineDotNet className={style.row1svg} />
        </div>
        <div className={style.row1}>
          <SiLeetcode className={style.row1svg} />
        </div>
        <div className={style.row1}>
          <FaBootstrap className={style.row1svg} />
        </div>
      </div>
    </>
  );
};
export default ATools;
