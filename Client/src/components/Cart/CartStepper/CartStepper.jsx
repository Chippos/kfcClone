import React, { useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";

function CartStepper({
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
            {activeStep > 0 ?  <i className="fa-regular fa-check"></i> : '1' }
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
          {activeStep > 1 ?  <i className="fa-regular fa-check"></i> : '2' }
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
          {activeStep > 2 ?  <i className="fa-regular fa-check"></i> : '3' }
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
      </div>
    </>
  );
}

export default CartStepper;
