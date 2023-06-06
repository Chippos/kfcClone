import React from "react";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { placeOrder } from "../../../AppStore/actions/order.activity";

function ConfirmOrder({ data, subTotal, addedItems }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      house: "",
      street: "",
      area: "",
      delivery: "",
    },
  });

  const onSubmit = (location) => {
    const { name, number, house, street, area, delivery } = location;
    const { id } = data
    const formData = {
        name: name,
        number: number,
        house: house,
        street: street,
        area: area,
        delivery: delivery,
        userId: id,
        subTotal: subTotal,
        isLoading: true,
        route: "api/checkout",
    };
    console.log(formData)
    



    placeOrder(formData);

    // userLogin(formData);
    // setIsLoading(false);
    // if (userData?.data?.error) {
    //   toast.error(userData.data.error);
    // } else {
    //   console.log(userData.initialState);
    //   toast.success("Successfully logged In");
    //   Navigate("/");
    // }
    // console.log(userData);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex lg:justify-between lg:items-start grid grid-cols-1 gap-5 w-full">
          <div className="grid grid-cols-1 gap-4 w-full px-8 py-10 rounded-lg shadow-md border">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="name"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <Input
                        name="name"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        type="name"
                        id="name"
                        size="lg"
                        label="Name"
                        {...register("name", {
                          required: "This field is required.",
                        })}
                      />
                    </>
                  )}
                />
                {errors.name && (
                  <p className="mt-2 text-red-600 shake">
                    <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="number"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <Input
                        name="number"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        type="number"
                        id="number"
                        size="lg"
                        label="Number"
                        {...register("number", {
                          required: "This field is required.",
                        })}
                      />
                    </>
                  )}
                />
                {errors.number && (
                  <p className="mt-2 text-red-600 shake">
                    <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                    {errors.number.message}
                  </p>
                )}
              </div>
              <div>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="house"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <Input
                        name="house"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        type="text"
                        id="house"
                        size="lg"
                        label="House"
                        {...register("house", {
                          required: "This field is required.",
                        })}
                      />
                    </>
                  )}
                />
                {errors.house && (
                  <p className="mt-2 text-red-600 shake">
                    <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                    {errors.house.message}
                  </p>
                )}
              </div>
              <div>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="street"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <Input
                        name="street"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        type="text"
                        id="street"
                        size="lg"
                        label="Street"
                        {...register("street", {
                          required: "This field is required.",
                        })}
                      />
                    </>
                  )}
                />
                {errors.street && (
                  <p className="mt-2 text-red-600 shake">
                    <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                    {errors.street.message}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="area"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <Input
                        name="area"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        type="text"
                        id="area"
                        size="lg"
                        label="Area"
                        {...register("area", {
                          required: "This field is required.",
                        })}
                      />
                    </>
                  )}
                />
                {errors.area && (
                  <p className="mt-2 text-red-600 shake">
                    <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                    {errors.area.message}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="delivery"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <>
                      <Textarea
                        name="delivery"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        type="text"
                        id="delivery"
                        size="lg"
                        label="Delivery information"
                        {...register("delivery", {
                          required: "This field is required.",
                        })}
                      />
                    </>
                  )}
                />
                {errors.delivery && (
                  <p className="mt-2 text-red-600 shake">
                    <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                    {errors.delivery.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full lg:w-1/3">
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">Rs: 150</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="text-end">
                <p className="mb-1 text-lg font-bold">{subTotal} RS</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Button className="mt-6 w-full" type="submit">
              Confirm Order
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ConfirmOrder;
