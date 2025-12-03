import clsx from 'clsx';
import { Brain, TicketCheck, Shirt } from 'lucide-react';
import ProductList from '@/components/ProductList';
import { Toaster } from 'react-hot-toast';

const boxClass = 'h-full rounded-xl shadow-lg bg-gray-800 flex flex-col items-start justify-start';
const headerClass =
  'w-full p-4 border-b-1 border-gray-600 flex items-center justify-start gap-x-2 flex-row font-semibold text-md';

const hiddenClass = 'hidden md:flex';

const bodyClass =
  'p-4 flex-1 w-full flex flex-col items-start justify-start gap-y-4 min-h-50 bg-transparent rounded-b-xl';

const bodyContainerClass = 'p-4 w-full min-h-60 bg-gray-700 rounded-lg text-gray-400';

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-100 h-full border-red flex flex-row items-center gap-x-4 lg:gap-x-8 p-0">
      <div className={clsx('flex-1/4 hidden md:block', boxClass)}>
=======
    <div className="flex items-center justify-center min-h-100 h-full border-red flex-row gap-x-8 p-0">
      <div className={clsx('flex-1/4', boxClass, hiddenClass)}>
>>>>>>> c75b7cd (work done on cart + toast added + favicon + added checkout page)
        <div className={clsx(headerClass)}>
          <Brain
            className="text-slate-600"
            height={15}
            width={15}
          />
          <span>Social</span>
        </div>
        <div className={clsx(bodyClass)}>
          <div className={clsx(bodyContainerClass)}>
            <span>No upcoming socials</span>
          </div>
        </div>
      </div>
      <div className={clsx('flex-1/2', boxClass)}>
        <div className={clsx(headerClass)}>
          <Shirt
            className="text-slate-600"
            height={15}
            width={15}
          />
          <span>Latest Products</span>
        </div>
        <ProductList />
      </div>
<<<<<<< HEAD
      <div className={clsx('flex-1/4 hidden lg:block', boxClass)}>
=======
      <div className={clsx('flex-1/4', boxClass, hiddenClass)}>
>>>>>>> c75b7cd (work done on cart + toast added + favicon + added checkout page)
        <div className={clsx(headerClass)}>
          <TicketCheck
            className="text-slate-600"
            height={15}
            width={15}
          />
          <span>Upcoming Events</span>
        </div>
        <div className={clsx(bodyClass)}>
          <div className={clsx(bodyContainerClass)}>
            <span>No upcoming events</span>
          </div>
        </div>
      </div>
    </div>
  );
}
