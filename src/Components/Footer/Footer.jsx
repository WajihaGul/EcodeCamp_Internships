import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.fhead}>
          <p>Designed and Developed by Wajiha Gul</p>
        </div>
        <div className={style.fheadii}>
          <p>Copyright © 2024 WG</p>
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
export default Footer;
