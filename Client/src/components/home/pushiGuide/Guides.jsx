import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { pushiiGuide } from "../../../constants";

function Guides() {
  return (
    <>
      <section className="my-20 sm:my-40" data-aos="fade-up">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">
              <span className="text-[#0096D8]"> Pushi </span> Guides
            </h1>
            <p className="text-lg text-[#6A6A6A] font-normal">
              There is now an abundance of readable dummy texts. These are
              usually used when a text is required purely to fill a space.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-14 gap-x-4 mt-20">
            {pushiiGuide.map((item, index) => (
              <Card className="bg-white rounded-3xl  shadow-[0px_10px_40px_#67676714]" key={index}>
                <CardHeader color="blue" className="relative shadow-none">
                  <img
                    src={item.img}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    className="text-xl font-semibold h-[56px] text-ellipsis overflow-hidden ... text-black"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="text-[#263238] text-sm font-medium">
                    {item.info}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Button
                    as="a"
                    size="lg"
                    variant="filled"
                    className="text-white select-none text-base font-medium py-[15px] px-6 border border-[#0096D8] rounded-lg w-full text-center inline-block  font-[inherit]"
                  >
                    Start Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Guides;
