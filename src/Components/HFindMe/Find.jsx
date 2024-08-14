import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import style from "./Find.module.css";
const Find = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h1>FIND ME ON</h1>
          <h2>
            Feel free to &nbsp;<span>connect</span> with me
          </h2>
        </div>
        <div className={style.buttons}>
          <button>
            <FaInstagram className={style.bsvg} />
            <a href="https://www.instagram.com/jia_gul/"></a>
          </button>

          <button>
            <CiFacebook className={style.bsvg} />
            <a href="https://www.facebook.com/wajiha.gul.7"></a>
          </button>

          <button>
            <IoLogoLinkedin className={style.bsvg} />
            <a href="https://www.linkedin.com/in/wajiha-gul-33b9a5243/"></a>
          </button>

          <button>
            <FaGithub className={style.bsvg} />
            <a href="https://github.com/WajihaGul/"></a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Find;
