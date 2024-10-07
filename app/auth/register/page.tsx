'use client'
import { Field, Form, Formik, ErrorMessage } from "formik"
import { register } from "../actions"
import { routeConst } from "@/app/constants"

export default function RegisterPage() {
  return (
    <Formik
      initialValues={{ name: '', username: '', email: '', password: '' }}
      onSubmit={(values, { setErrors, setSubmitting }) => register(values).then((res) => {
        console.log({ ...res })
        setErrors({
          name: res.errors?.name?.[0],
          username: res.errors?.username?.[0],
          email: res.errors?.email?.[0],
          password: res.errors?.password?.[0],
        })

        if (res.user) {
          window.location.href = routeConst.HOME.path
        }

        setSubmitting(false)
      })}
    >
      {
        ({ values, isSubmitting }) => (
          <Form className="grid grid-cols-1 gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">Full name</label>
              <Field
                type="text"
                name="name"
                value={values.name}
                className="bg-slate-800 rounded p-1"
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-semibold">Username</label>
              <Field
                type="text"
                name="username"
                value={values.username}
                className="bg-slate-800 rounded p-1"
              />
              <ErrorMessage name="username" component="div" />
            </div>

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