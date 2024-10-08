'use client'

import { Field, Form, Formik, ErrorMessage } from "formik"
import { signIn } from "../actions/signin"
import { useSearchParams } from "next/navigation"
import { routeConst } from "@/app/constants"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setErrors, setSubmitting }) => signIn(values).then((res) => {
        console.log({ ...res })
        setErrors({
          email: res.errors?.email?.[0],
          password: res.errors?.password?.[0]
        })

        if (res.user) {
          window.location.href = redirectUrl || routeConst.HOME.path
        }

        setSubmitting(false)
      })}
    >
      {
        ({ values, isSubmitting }) => (
          <Form className="grid grid-cols-1 gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">Email</label>
              <Field
                type="email"
                name="email"
                value={values.email}
                className="bg-slate-800 rounded p-1"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold">Password</label>
              <Field type="password" name="password" value={values.password} className="bg-slate-800 rounded p-1" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button
              className="rounded bg-white text-black w-fit px-6 py-2 mt-3"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )
      }
    </Formik>
  )
}