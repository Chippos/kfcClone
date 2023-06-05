import React, { useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";

function CartStepper({
  handleNext,
  handlePrev,
  activeStepState,
  isLastStepState,
  isFirstStepState,
}) {
  const [activeStep, setActiveStep] =activeStepState;
  const [isLastStep, setIsLastStep] = isLastStepState;
  const [isFirstStep, setIsFirstStep] = isFirstStepState;


  return (
    <>
      <div className="w-full py-4 px-8 mx-auto max-w-5xl">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step>
            <i className="fa-regular fa-check"></i>
            <div className="absolute -bottom-[2.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue" : "blue-gray"}
              >
                Menu
              </Typography>
            </div>
          </Step>
          <Step>
            <i className="fa-regular fa-check"></i>
            <div className="absolute -bottom-[2.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue" : "blue-gray"}
              >
                Bucket
              </Typography>
            </div>
          </Step>
          <Step>
            <i className="fa-regular fa-check"></i>
            <div className="absolute -bottom-[2.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue" : "blue-gray"}
              >
                Checkout
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-20 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartStepper;
