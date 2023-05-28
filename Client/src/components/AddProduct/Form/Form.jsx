import React, { useEffect, useState } from "react";
import {
  Input,
  Select,
  Option,
  Button,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { connect } from "react-redux";
import { getShopData } from "../../../AppStore/actions/shop.activity";

function Form({ shopData, getShopData }) {
  const [categories, setCategories] = useState([]);
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  const {data} = shopData;
  useEffect(() => {
    getShopData();
  }, []);
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Typography className="text-2xl font-bold">
            Add Details Here
          </Typography>
          <div className="grid sm:grid-cols-2 gap-6 mt-4 sm:place-items-end">
            <Input size="lg" label="Title" type="text" />
            <Input size="lg" label="Price" type="number" />
            <Input size="lg" label="Image Url" type="text" />
            <Select
              label="Select Category"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              // selected={(element) =>
              //   element &&
              //   React.cloneElement(element, {
              //     className: "flex items-center px-0 gap-2 pointer-events-none",
              //   })
              // }
            >
              {/* <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option> */}
              {/* {data?.categoriesData?.map((item) => (
                <Option key={item._id} value={item.title}  className="flex items-center gap-2">{item.title}</Option>
              ))} */}
              {options.map(({ value, label }) => (
                <Option key={value} value={`${value}`}>{label}</Option>
              ))}
            </Select>
            <Textarea label="Add Description" />
            <Button size="lg" className="w-max h-max">Submit</Button>
          </div>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  shopData: state.shop,
});
export default connect(mapStateToProps, { getShopData })(Form);
