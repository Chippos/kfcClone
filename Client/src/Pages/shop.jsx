import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Spinner,
} from '@material-tailwind/react';
import { connect } from 'react-redux';
import { addToCart } from '../AppStore/actions/shop.activity';
import { useEffect, useState } from 'react';

function shop({ shopData, addToCart }) {
  const [hideCartBtn, setHideCartBtn] = useState(-1);
  const [timer, setTimer] = useState(null);

  const [products, setProducts] = useState([]);

  const [flag, setFlag] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);
  
  
  // console.log(shopData)
    const {data: {productsData, categoriesData}} = shopData
  

  // set Products on Button Click
  const handleCategory = (value) => { 
    let filterItem = products.filter((item)=> item.category ===  value);
    setFilterProducts(filterItem)
  };

  
  useEffect(() => {
    if(shopData.data.productsData){
    setProducts([...productsData])
    }
  }, []);

  useEffect(()=> {
    if(products.length === 0 && flag) return;
    handleCategory(categoriesData[0]._id)
    setFlag(true);
  }, [products]);

  useEffect(()=> {
    const id = setTimeout(() => {
      setHideCartBtn(-1);
    }, 2000);
    setTimer(id);
    return () => {
      clearTimeout(timer);
    };
  }, [hideCartBtn]);

  // const handleCart = ((item) => {
  //   addToCart(item);
  //   setHideCartBtn(true)
  // })

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
            <Button key={item._id} onClick={()=> handleCategory(item._id)}>{item.title}</Button>
          ))}
        </div>
      </div>

      <div className='container mx-auto py-8 px-4'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {!shopData.isLoading && shopData.data ? (
            filterProducts.map((item) => (
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
                  <Button onClick={() => {addToCart(item); setHideCartBtn(item._id)}} className='flex justify-start items-center gap-1' disabled={hideCartBtn === item._id ? true : false}>{`${hideCartBtn === item._id ?  'Added' : 'Add to Cart'}`} {hideCartBtn === item._id ? <Spinner className='h-4 w-4'/> : ''}</Button>
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
    addToCart:  data => dispatch(addToCart(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(shop);
