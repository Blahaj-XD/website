'use client'
import PinInput from 'react-pin-input'
import React from 'react'

export default function Pin({ className, length, page, configureNextAction }) {
  const [pin, setPin] = React.useState('')
  return (
    <div className={className}>
      <div className="content-wrapper mt-16 px-4">
        <h1 className="text-lg font-bold text-center">
          Silahkan buat pin untuk rekening anda
        </h1>
        <p className="text-Primary-Pink-1 text-md text-center">
          Tolong Masukan pin
        </p>
        <PinInput
          className="mx-auto"
          length={length}
          initialValue=""
          secret
          secretDelay={100}
          onChange={(value, index) => {}}
          type="numeric"
          inputMode="number"
          style={{
            padding: '2px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            margin: '1rem auto',
          }}
          inputStyle={{
            borderColor: 'blue',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          inputFocusStyle={{ borderColor: 'blue' }}
          onComplete={(value, index) => {
            setPin(value)
            console.log(value)
          }}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
        <button
          onClick={() => configureNextAction(page, {pin:pin})}
          className="signIn"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  )
}
