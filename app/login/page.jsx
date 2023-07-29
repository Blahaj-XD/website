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
    .min(2, { message: 'Username must be at least 2 characters.' })
    .default('john'),

  password: z.coerce
    .number({
      required_error: 'Password is required.',
    })
    .min(8, { message: 'Password must be at least 8 characters.' })
    .default(12345678),
})

export default function App() {
  return (
    <div className="__container">
        <Image
          src="/assets/images/piggy-logo.svg"
          className="mx-auto"
          width={300}
          height={250}
        />
      <div className="ml-5">
        <h1 className="text-xl font-bold">Welcome to Piggy Bank!</h1>
        <p className="text-lg">Please sign in to continue.</p>
      </div>
      <AutoForm
        onSubmit={async (data) => {
          try {
            const result = await Api.post('auth/login', data)
            console.log(result)
          } catch (err) {
            console.log(err)
          }
          // Do something with the data
          // Data is validated and coerced with zod automatically
        }}
        // Pass the schema to the form
        className="max-w-md border-5 border-sky-500 p-5"
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
        }}
      >
        <button type="submit" className="signIn">
          Sign In
        </button>
      </AutoForm>
      <p className="text-center max-w-md">
        Belum punya akun? <Link href="/register" className="text-Shade-Pinkl">Daftar Disini</Link>
      </p>
    </div>
  )
}
