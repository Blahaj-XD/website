'use client'
import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form'
import * as z from 'zod'
import Api from '@/utils/api'
// Define your form schema using zod
const parentAccountSchema = z.object({
  nik: z
    .string({
      required_error: 'National Identification Number (NIK) is required.',
    })
    .min(16, { message: 'NIK must be exactly 16 digits.' }).default('1212121212121212'),


  email: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, { message: 'Username must be at least 2 characters.' }).default('email'),

  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, { message: 'Username must be at least 2 characters.' }).default('john'),

  full_name: z
    .string({
      required_error: 'Full name is required.',
    })
    .min(2, { message: 'Full name must be at least 2 characters.' }),

  password: z
    .coerce.number({
      required_error: 'Password is required.',
    })
    .min(8, { message: 'Password must be at least 8 characters.' })
    .default(12345678),

  phone_number: z
    .string({
      required_error: 'Phone number is required.',
    })
    .default('081292821812'), // Set a default value for phone_number

  domisili: z
    .string({
      required_error: 'Place of residence (domisili) is required.',
    })
    .default('depok'), // Set a default value for domisili

  tanggal_lahir: z
    .string({
      required_error: 'Date of birth (tanggal lahir) is required.',
    })
    .default('28072023'), // Set a default value for tanggal_lahir

  jenis_kelamin: z
    .enum(['male', 'female'], {
      required_error: 'Gender (jenis kelamin) is required.',
    })
    .default('male'), // Set a default value for jenis_kelamin

  alamat: z
    .string({
      required_error: 'Address is required.',
    })
    .default('john cena'), // Set a default value for alamat

  rt_rw: z
    .string({
      required_error: 'RT/RW information is required.',
    })
    .describe('Rt/Rw')
    .default('05/06'), // Set a default value for rt_rw

  kelurahan: z
    .string({
      required_error: 'Kelurahan (sub-district) is required.',
    })
    .default('camat'), // Set a default value for kelurahan

  kecamatan: z
    .string({
      required_error: 'Kecamatan (district) is required.',
    })
    .default('camat'), // Set a default value for kecamatan

  pekerjaan: z
    .string({
      required_error: 'Occupation is required.',
    })
    .default('babu programmer'), // Set a default value for pekerjaan

  acceptTerms: z.boolean().default(false).refine((value) => value, {
    message: 'You must accept the terms and conditions.',
    path: ['acceptTerms'],
  }),
});


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

export default function App() {
  return (
    <>
      <AutoForm
        onSubmit={async(data) => {
          try{
            console.log(data)
            const result = await Api.post('auth/register', {
              "alamat": "Taman permata palem e 38-39",
              "domisili": "depok",
              "email": "patrick.kwon@binus.ac.id",
              "full_name": "pawpdapdawpda",
              "jenis_kelamin": 0,
              "kecamatan": "camat",
              "kelurahan": "camat",
              "nik": "1212121212121212",
              "password": "12345678",
              "pekerjaan": "babu programmer",
              "phone_number": "12312312",
              "rt_rw": "05/6",
              "tanggal_lahir": "2121122",
              "username": "john"
            })
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
        <button type="submit">Send now</button>
        <p className="text-gray-500 text-sm">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-primary underline">
            terms and conditions
          </a>
          .
        </p>
      </AutoForm>
    </>
  )
}
