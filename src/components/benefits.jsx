import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div className="overflow-hidden ">
            <img
              src={data.image}
              alt="Expertise"
              className={"w-auto md:h-[500px] lg:h-[630px]"}
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 flex max-w-2xl justify-center text-3xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight ">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl ">
                {data.desc}
              </p>
            </div>

            <div className="mt-5 w-full">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="mt-8 flex items-start space-x-3">
        <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium ">{props.title}</h4>
          <p className="mt-1 ">{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
