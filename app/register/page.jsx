'use client'
import AutoForm from '@/components/ui/auto-form'
import * as z from 'zod'
import Api from '@/utils/api'
import Image from 'next/image'
import React from 'react'
// Define your form schema using zod
const parentRegistrationSchema = [
  z.object({
    nik: z
      .string({
        required_error: 'National Identification Number (NIK) is required.',
      })
      .min(16, { message: 'NIK must be exactly 16 digits.' })
      .default('1212121212121212'),
    full_name: z
      .string({
        required_error: 'Full name is required.',
      })
      .min(2, { message: 'Full name must be at least 2 characters.' })
      .default('28072023'),
    tanggal_lahir: z
      .string({
        required_error: 'Date of birth (tanggal lahir) is required.',
      })
      .default('28072023'),

    jenis_kelamin: z
      .enum(['male', 'female'], {
        required_error: 'Gender (jenis kelamin) is required.',
      })
      .default('male'), // Set a default value for jenis_kelamin
  }),
  z.object({
    kota: z
      .string({
        required_error: 'City (Kota) is required.',
      })
      .default('depok'), // Set a default value for domisili
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
  }),
  z.object({
    email: z
      .string({
        required_error: 'Username is required.',
      })
      .min(2, { message: 'Username must be at least 2 characters.' })
      .default('email'),

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

    phone_number: z
      .string({
        required_error: 'Phone number is required.',
      })
      .default('081292821812'), // Set a default value for phone_number

    acceptTerms: z
      .boolean()
      .default(false)
      .refine((value) => value, {
        message: 'You must accept the terms and conditions.',
        path: ['acceptTerms'],
      }),
  }),
]

const ScanKTP = ({ configureNextAction, page }) => {
  const fileInputRef = React.useRef(null)
  const [fileUploaded, setFileUpload] = React.useState('')
  const handleFileButtonClick = () => {
    // Click the hidden file input when the custom button is clicked
    fileInputRef.current.click()
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    // Do something with the selected file if needed
    setFileUpload(file)
  }

  //bukan ke Api tp haurs ke address lain
  const fetchKTPdata = async () => {
    const formData = new FormData()
    formData.append('file', fileUploaded)
    try {
      const data = await Api.post(``, fetchKTPdata)
      //throw a toast
      await configureNextAction(page, data)
    } catch (err) {
      //throw a toast
      console.log(err)
    }
  }
  return (
    <div>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileInputChange}
      />

      {/* Custom button */}
      <div
        className="upload relative border-dashed border-2 border-Primary-Pink-1 block cursor-pointer w-64 h-[80vh]"
        onClick={handleFileButtonClick}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          {!fileUploaded ? (
            <div>
              {/* <Image src="" alt="" /> */}
              <h4>Unggah Foto KTP Anda Disini</h4>
              <h6>Maksimal ukuran file 10MB</h6>
            </div>
          ) : (
            <div>
              <h4>Foto berhasil diunggah</h4>
            </div>
          )}
        </div>
      </div>

      {/* //trigger pop up habis next */}
      <button onClick={fetchKTPdata} className="signIn">
        Selanjutnya
      </button>
    </div>
  )
}

export default function App() {
  const [page, setPage] = React.useState(0)
  const [formData, setFormData] = React.useState({})
  const MAX_PAGE = 3
  const MIN_PAGE = 0
  React.useEffect(() => {
    console.log(page)
  }, [page])

  const prevPage = () => {
    setPage((state) => (state - 1 < MIN_PAGE ? MIN_PAGE : state - 1))
  }

  const nextPage = () => {
    setPage((state) => (state + 1 > MAX_PAGE ? MAX_PAGE : state + 1))
  }

  const configureNextAction = (page, data) => {
    setFormData((state) => ({ ...state, ...data }))
    if (page == MAX_PAGE) {
      Api.post('auth/register', formData).then((res) => {
        console.log('res', res)
      })
    } else {
      nextPage()
    }
  }
  return (
    <>
      <nav>
        <span onClick={prevPage}>Back</span> Registration Form
      </nav>
      <ScanKTP
        configureNextAction={configureNextAction}
        page={page}
        className={
          page == 0
            ? 'block max-w-sm mx-auto border-5 border-sky-500 p-5'
            : 'hidden'
        }
      />
      {parentRegistrationSchema.map((step, index) => {
        return (
          <AutoForm
            key={index + 1}
            className={
              page == index + 1
                ? 'block max-w-sm mx-auto border-5 border-sky-500 p-5'
                : 'hidden'
            }
            onSubmit={async (data) => {
              configureNextAction(page, data)
            }}
            // Pass the schema to the form
            formSchema={step}
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
              Send now
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
      })}
    </>
  )
}
