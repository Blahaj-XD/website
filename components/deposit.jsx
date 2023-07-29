import React from 'react';
import Image from 'next/image';

export default function Deposit({ type, task, information, amount }) {
  const data = React.useMemo(() => {
    if (type === 'in') {
      return {
        icon: '/assets/icons/deposit-in.svg',
        alt: 'deposit-in',
        class: 'text-Primary-Green',
        simbol: '+',
      };
    }
    return {
      icon: '/assets/icons/deposit-out.svg',
      alt: 'deposit-out',
      class: 'text-Primary-Red',
      simbol: '-',
    };
  });

  return (
    <div className="p-3 max-w-md border-2  rounded-xl my-5">
      <div className="flex flex-between justify-between items-center w-full flex-wrap">
        <div className="flex space-x-2 ">
          <Image src={data.icon} alt={data.alt} width={32} height={32} />
          <div className="flex-col whitespace-nowrap">
            <h4>Task: {task}</h4>
            <h4>Information: {information}</h4>
          </div>
        </div>
        <h4 className={data.class}>
          <div className="flex items-center">
            {data.simbol}
            <span>Rp.</span>
            {amount}
          </div>
        </h4>
      </div>
    </div>
  );
}
