import style from "./Homeii.module.css";
const Homeii = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.home}>
          <h1>
            LET ME&nbsp; <span>INTRODUCE</span> MYSELF
          </h1>
          <ul>
            <li>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </li>
            <li> I am fluent in classics like C#, and Java</li>
            <li>
              My field of Interest's are building new &nbsp;
              <span> Web Technologies and Products</span> and
              <br />
              also in areas related to&nbsp; <span>Blockchain.</span>
            </li>
            <li>
              Whenever possible, I also apply my passion for developing products
              with Modern
              <br /> Javascript Library and Frameworks like&nbsp;
              <span>React.js and Next.js</span>
            </li>
          </ul>
        </div>
        <div className={style.homeii}>
          <img
            src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Homeii;
