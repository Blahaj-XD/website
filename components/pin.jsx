import PinInput from 'react-pin-input';
export default function Pin({ className, length, page, configureNextAction }){
  const value = React.useRef('')
  return (
    <div className={className}>
      <div className="content-wrapper mt-10 px-4">
        <h1 className='text-lg font-bold text-center'>Silahkan buat pin untuk rekening anda</h1>
        <p className="text-Primary-Pink-1 text-md text-center">Tolong Masukan pin</p>
        <div className="">
          <PinInput
            length={length}
            initialValue=""
            secret
            secretDelay={100}
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{padding: '2px',display:'flex', flexWrap:'wrap',justifyContent:'center',width:'100%',margin:'1rem auto'}}
            inputStyle={{borderColor: 'red',borderRadius: '4px',border: '1px solid #ccc'}}
            inputFocusStyle={{borderColor: 'blue'}}
            onComplete={(value, index) => value.currentValue}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          <button onClick={()=>configureNextAction(page,value)} className="signIn">Daftar Sekarang</button>
        </div>
      </div>
    </div>
  );
};
