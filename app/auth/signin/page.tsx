'use client'

import { Field, Form, Formik, ErrorMessage } from "formik"
import { signIn } from "./actions/signin"

export default function SignInPage() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => signIn(values).then(res => {
        console.log(res)
      })}
    >
      {
        ({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" value={values.email} />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" value={values.password} />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}