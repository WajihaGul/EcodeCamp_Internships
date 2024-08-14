import img from "../../Assets/home-main.svg";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.firstdiv}>
          <h2>Hi, There</h2>

          <h1 className={style.hanimation}>I am Wajiha Gul</h1>

          <h1>Software Developer</h1>
        </div>
        <div>
          <img className={style.imgHere} src={img} alt="Home image" />
        </div>
      </div>
    </>
  );
};
export default Home;
