import style from "./Aknow.module.css";

const Aknow = () => {
  return (
    <>
      <div className={style.ahead}>
        <div className={style.atext}>
          <h1>
            Know Who &nbsp;<span>I AM</span>
          </h1>
          <br />
          Hi Everyone, I am &nbsp;<span> Wajiha Gul </span> from
          <span> Lahore, Pakistan </span>.
          <br />I have completed an &nbsp;<span> Internship </span> as a &nbsp;{" "}
          <span> Wordpress Developer </span>at &nbsp;<span> Webo.pk </span>.
          <br /> I have completed &nbsp;
          <span> Bachelors in Business and Information Technology </span>
          <br />
          at &nbsp;<span> IBIT, University of The Punjab</span>.
          <br />
          Apart from coding, some other activities that I love to do!
          <ul>
            <li>Watching Movies</li>
            <li>Playing Games</li>
            <li>Reading Books</li>
            <li>Travelling</li>
          </ul>
          <br />
          <h3>
            &nbsp;<span>"Strive to build things that make a difference!"</span>
            <br />
            -Soumyajit
          </h3>
        </div>
        <div className={style.aimg}>
          <img
            src="https://github.com/soumyajit4419/Portfolio/blob/master/src/Assets/about.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Aknow;
