'use client'
import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form'
import * as z from 'zod'
import Image from 'next/image'
import Link from 'next/link'
import Api from '@/utils/api'
// Define your form schema using zod
const parentAccountSchema = z.object({

  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, { message: 'Username must be at least 2 characters.' }).default('john'),


  password: z
    .coerce.number({
      required_error: 'Password is required.',
    })
    .min(8, { message: 'Password must be at least 8 characters.' })
    .default(12345678),
})

export default function App() {
  return (
    <>
      <Image src="/public/assets/images/piggy-logo.png" className="aspect-video"width={250} height={250}/>
      <h1 className="text-Secondary/Grey-2 text-xl">Sign In</h1>
      <h3 className="text-Secondary/Grey-2 text-md">Sign In Into Your Account</h3>
      <AutoForm
        onSubmit={async(data) => {
          try{
            const result = await Api.post('auth/login', data)
            console.log(result)
          }
          catch(err){
            console.log(err)
          }
          // Do something with the data
          // Data is validated and coerced with zod automatically
        }}
        // Pass the schema to the form
        className="max-w-sm mx-auto border-5 border-sky-500 p-5"
        formSchema={parentAccountSchema}
        // You can add additional config for each field
        // to customize the UI
        fieldConfig={{
          password: {
            // Use "inputProps" to pass props to the input component
            // You can use any props that the component accepts
            inputProps: {
              type: 'password',
              placeholder: '••••••••',
            },
          },
          favouriteNumber: {
            // Set a "description" that will be shown below the field
            description: 'Your favourite number between 1 and 10.',
          },
          acceptTerms: {
            inputProps: {
              required: true,
            },
            // You can use JSX in the description
            description: (
              <>
                I agree to the{' '}
                <a
                  href="#"
                  className="text-primary underline"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Terms and conditions clicked.')
                  }}
                >
                  terms and conditions
                </a>
                .
              </>
            ),
          },

          tanggal_lahir: {
            // Custom style for the date field
            inputProps: {
              // className: 'bg-black',
              // styles: {
              //   backgroundColor: '#f1f1f1', // Set your desired background color here
              //   padding: '10px',
              //   borderRadius: '5px',
              // },
            },
          },
          jenis_kelamin:{
            inputProps: {
              // className: 'bg-black',
              // styles: {
              //   backgroundColor: '#f1f1f1', // Set your desired background color here
              //   padding: '10px',
              //   borderRadius: '5px',
              // },
            },
          },
          sendMeMails: {
            // Booleans use a checkbox by default, you can use a switch instead
            fieldType: 'switch',
          },
        }}
      >
        <button type="submit" className="signIn">Sign In</button>
        <p className="text-gray-500 text-sm">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-primary underline">
            terms and conditions
          </a>
          .
        </p>
      </AutoForm>
      <p>Belum punya akun? <Link href='/register'>Daftar Disini</Link></p>
    </>
  )
}
