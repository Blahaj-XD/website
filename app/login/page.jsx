'use client'
import AutoForm from '@components/ui/auto-form'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import * as z from 'zod'

// Define your form schema using zod
const parentAccountSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(1, { message: 'Username must be at least 2 characters.' })
    .default('john'),

  password: z.coerce
    .number({
      required_error: 'Password is required.',
    })
    .min(8, { message: 'Password must be at least 8 characters.' })
    .default(12345678),
})

export default function App() {
  const { status, data } = useSession()
  if (status === 'authenticated') {
    redirect('/parent')
  }
  console.log({ status, data })

  return (
    <div className="__container">
      <Image
        src="/assets/images/piggy/logo.svg"
        alt="piggy-logo"
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
          await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false,
          })
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
        <button
          type="submit"
          className="signIn"
          disabled={status === 'loading'}
        >
          Sign In
        </button>
      </AutoForm>
      <p className="text-center max-w-md">
        Belum punya akun?{' '}
        <Link href="/register" className="text-Shade-Pinkl">
          Daftar Disini
        </Link>
      </p>
    </div>
  )
}
