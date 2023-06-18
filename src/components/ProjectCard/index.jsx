import React from "react";
import Title from "../Title";

const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit eveniet mollitia corporis saepe sequi perspiciatis.`;

const ProjectCard = (props) => {
  return (
    <section className="grid grid-cols-2 gap-4 mx-auto max-w-[1000px] p-6 border-solid border-gray-400 border">
      {props?.isLeft && (
        <img
          src="/public/assets/images/img1.jpg"
          alt="project"
        />
      )}
      <div className="flex flex-col gap-1">
        <p className="">{new Date().toDateString()}</p>
        <Title size="3xl">{props.title}</Title>
        <p className="text-xl italic font-normal">REACT - NODE</p>

        <div className="flex flex-col gap-2">
          <p>{desc}</p>
          <p>{desc}</p>
        </div>
      </div>
      {!props?.isLeft && (
        <img
          src="/public/assets/images/img1.jpg"
          alt="project"
        />
      )}
    </section>
  );
};

export default ProjectCard;
