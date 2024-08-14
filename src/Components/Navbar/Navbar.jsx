import { GrBlog } from "react-icons/gr";
import { LuFileText } from "react-icons/lu";
import { MdScreenshotMonitor } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import style from "./Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className={style.container}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class={`container-fluid ${style.navstyle1} $`}>
            <a class={`navbar-brand-large ${style.nav}`} href="#">
              Personal Portfolio Website
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class={`collapse navbar-collapse ${style.navstyle2}`}
              id="navbarNav"
            >
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <Link
                    class={`nav-link active ${style.h}`}
                    aria-current="page"
                    to="/home"
                  >
                    <FaHome className={style.svg} />
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${style.h}`} to="/about">
                    <IoPerson className={style.svg} />
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${style.h}`} to="projects">
                    <MdScreenshotMonitor className={style.svg} />
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${style.h}`} to="#">
                    <LuFileText className={style.svg} />
                    Resume
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${style.h}`} to="#">
                    <GrBlog className={style.svg} />
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
