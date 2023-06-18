import MainWrapper from "../layout/main";
import Button from "./../components/Button/index";

import style from "./index.module.scss";

const userInfo = {
  title: "Hello<br /> I am Saramsh <br/>Web Developer",
  subTitile: "Web Developer",
};

const HomePage = () => {
  return (
    <MainWrapper>
      <div className="relative">
        <section className={style.home_one_bg}>
          <div className=" flex flex-col justify-center items-start h-[80vh]">
            <span className={style.home_one_bg_inside}></span>
            <article className="z-20 grid gap-2 pt-16 pl-16">
              <h1 className="text-5xl font-bold text-white">
                HELLO
                <br /> I AM SARAMSH <br />
                WEB DEVELOPER
              </h1>
              <h3 className="text-xl font-semibold italic">
                {userInfo.subTitile}
              </h3>
              <div>
                <Button primary>Contact Now</Button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </MainWrapper>
  );
};

export default HomePage;
