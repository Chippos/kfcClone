import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { connect } from 'react-redux';
import { getShopData, addToCart } from '../AppStore/actions/shop.activity';
import { useEffect } from 'react';

function shop({ shopData, getShopData, addToCart }) {

  const handleCategory = (value) => {
    console.log(value);
  };
  
  useEffect(() => {
    getShopData();
  }, []);

  return (
    <>
      <div className='h-[60vh] w-full bg-[#F4FCFF] flex justify-center items-center p-4'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl sm:leading-[50px] font-bold text-[#263238] capitalize'>
            Find The <span className='text-[#0096D8]'> Meal </span> <br />
            meant for you
          </h1>
          <p className='text-[#263238] font-normal text-lg mt-4'>
            {' '}
            Explore and find best sellers offering wide range of freelance{' '}
            <br />
            services exclusively at Pushi
          </p>
        </div>
      </div>

      <div className='container mx-auto my-4 px-4'>
        <div className='flex justify-center items-center gap-6'>
          {shopData?.data?.categoriesData?.map((item) => (
            <Button key={item._id} onClick={()=> handleCategory(item.title)}>{item.title}</Button>
          ))}
        </div>
      </div>

      <div className='container mx-auto py-8 px-4'>
        <div className='grid grid-cols-4 gap-6'>
          {!shopData.isLoading && shopData.data ? (
            shopData?.data?.productsData?.map((item) => (
              <Card key={item._id} className='mt-6 '>
                <CardHeader color='blue-gray' className='relative h-56'>
                  <img
                    src={String(item.imageUrl)}
                    alt='img-blur-shadow'
                    layout='cover'
                    className='object-cover w-full h-full'
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant='h5' color='blue-gray' className='mb-2'>
                    {item.title}
                  </Typography>
                  <Typography variant="paragraph" className="line-clamp-3">{item.description}</Typography>
                </CardBody>
                <CardFooter className='pt-0 mt-auto flex items-center justify-between'>
                  <Button onClick={()=> addToCart(item)}>Add to Cart</Button>
                  {`Rs. ${item.price}/-`}
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className='spinnerCustom col-span-4'></div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  shopData: state.shop,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getShopData: data => dispatch(getShopData(data)),
    addToCart:  data => dispatch(addToCart(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(shop);
