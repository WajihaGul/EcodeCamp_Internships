import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import style from "./ASkill.module.css";
const ASkill = () => {
  return (
    <>
      <div className={style.rowshead}>
        <h1>
          Professional &nbsp;<span>SkillSet</span>
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

        <div className={style.rowno2}>
          <div className={style.row1}>
            <FaHtml5 className={style.row1svg} />
          </div>
          <div className={style.row1}>
            <IoLogoCss3 className={style.row1svg} />
          </div>
          <div className={style.row1}>
            <IoLogoJavascript className={style.row1svg} />
          </div>
          <div className={style.row1}>
            <FaReact className={style.row1svg} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ASkill;
