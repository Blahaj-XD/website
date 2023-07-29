import Image from 'next/image';

export default function Balance({ balance, children }) {
  return (
    <div className="my-4 px-2 py-4 w-5/6 mx-auto border-2 text-black flex flex-col items-center rounded-xl bg-white">
      <div className="balance-icon border-2 rounded-full px-2 py-1 mx-auto space-x-2 inline-flex items-center">
        <Image src="/assets/icons/balance.svg" width={24} height={24} />
        <p>Balance</p>
      </div>
      <h1 className="text-center text-2xl text-Shade-Pinkl">Rp.{balance}</h1>
      {children}
    </div>
  );
}
