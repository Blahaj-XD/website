'use client'
import AutoForm from '@/components/ui/auto-form'
import * as z from 'zod'
import Api from '@/utils/api'
import React from 'react'
export default function ChildrenRegistration() {
  const kidAccountSchema = z.object({
    nik: z
      .string({
        required_error: 'National Identification Number (NIK) is required.',
      })
      .min(16, { message: 'NIK must be exactly 16 digits.' }),
    full_name: z
      .string({
        required_error: 'Full name is required.',
      })
      .min(2, { message: 'Full name must be at least 2 characters.' }),
    tempat_tanggal_lahir: z.string({
      required_error: 'Date of birth (tanggal lahir) is required.',
    }),
    tanggal_lahir: z.string({
      required_error: 'Date of birth (tanggal lahir) is required.',
    }),

    jenis_kelamin: z.enum(['male', 'female'], {
      required_error: 'Gender (jenis kelamin) is required.',
    }),
  })
  const configureNextAction = (data) => {
    Api.post('auth/register', formData).then((res) => {
      console.log('res', res)
    })
  }
  return (
    <AutoForm
      className="block max-w-sm mx-auto border-5 border-sky-500 p-5"
      onSubmit={async (data) => {
        configureNextAction(data)
      }}
      // Pass the schema to the form
      formSchema={kidAccountSchema}
      // You can add additional config for each field
      // to customize the UI
      fieldConfig={{
        acceptTerms: {
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
      }}
    >
      <button type="submit" className="signIn">
        Simpan
      </button>
      <p className="text-gray-500 text-sm">
        By submitting this form, you agree to our{' '}
        <a href="#" className="text-primary underline">
          terms and conditions
        </a>
        .
      </p>
    </AutoForm>
  )
}
