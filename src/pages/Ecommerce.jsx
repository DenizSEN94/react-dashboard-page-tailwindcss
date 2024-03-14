import { BsCurrencyDollar, BsDot } from 'react-icons/bs';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const {} = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl  lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex justify-center items-center m-3 flex-wrap gap-1'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                className='text-2xl rounded-full opacity-0.9 p-4 hover:drop-shadow-xl'
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-500 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center gap-10 flex-wrap'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <BsDot size={38} />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <BsDot size={38} />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 justify-center flex-wrap'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>₺93,438</span>
                  <span className='p-1.5 hover:drop-shadow-lg cursor-pointer rounded-full text-white bg-green-400 text-sm ml-1'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-5'>
                <p>
                  <span className='text-3xl font-semibold'>₺55,438</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor='blue'
                  color='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor='blue'
                  text='Dowload Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
