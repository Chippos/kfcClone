import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  Select,
  Option,
  Button,
  Textarea,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { addProduct } from "../../../AppStore/actions/product";
import { connect } from "react-redux";

function Form({ formDataMarkup, addProduct }) {
  const [formLoading, setFormLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: null,
      number: "",
      imgUrl: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    const { title, category, number, imgUrl, description } = data;

    const formData = {
      title: title,
      category: category,
      number: number,
      imgUrl: imgUrl,
      description: description,
      route: "",
    };

    setFormLoading(true);
    addProduct(formData);
    setFormLoading(false);
  };

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Typography className="text-2xl font-bold">
            Add Details Here
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 gap-6 mt-4 sm:place-items-end mb-6">
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <>
                    <Input
                      size="lg"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      label="Title"
                      type="text"
                      error={errors.title ? true : false}
                    />
                  </>
                )}
                name="title"
              />
              <Controller
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Select
                    label="Select Category"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    {!formDataMarkup.isLoading && formDataMarkup.data ? (
                      formDataMarkup.data?.categoriesData?.map((item) => (
                        <Option
                          key={item._id}
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          className="flex items-center gap-2"
                        >
                          {item.title}
                        </Option>
                      ))
                    ) : (
                      <Option>Loading</Option>
                    )}
                  </Select>
                )}
                name="category"
              />
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    size="lg"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    label="Price"
                    type="number"
                    error={errors.number ? true : false}
                  />
                )}
                name="number"
              />
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    size="lg"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    label="Image Url"
                    error={errors.imgUrl ? true : false}
                    type="text"
                  />
                )}
                name="imgUrl"
              />
            </div>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onBlur, onChange } }) => (
                <Textarea
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  label="Add Description"
                  error={errors.description ? true : false}
                />
              )}
              name="description"
            />

            <Button
              type="submit"
              disabled={formLoading}
              size="lg"
              className="w-max h-max mt-4"
            >
              {!formLoading ? "Submit" : <Spinner />}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default connect(null, { addProduct })(Form);
