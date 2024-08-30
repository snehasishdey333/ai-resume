import { Button } from "@/components/ui/button"
import { UserInfoContext } from "@/context/UserInfoContext"
import { loginSchema } from "@/schemas/schema"
import { handleLogin } from "@/utils/apiCalls"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Loader2 } from "lucide-react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const LoginPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { user } = useContext(UserInfoContext)
  console.log(user)
  if (user) {
    
    navigate("/dashboard")
  }
    
  return (
    <main className="p-6 md:p-0 w-[100vw] h-[100vh] flex items-center justify-center flex-col">
          <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="logo" width={100} height={100} />
              <h1 className="text-3xl font-bold text-[#510AC9] ">ResumeAI</h1>
          </Link>
          <div className="space-y-2 my-8 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="font-semibold text-sm">Create your dream resume!</p>
          </div>
          <Formik
      initialValues={{ email: '',password:'' }}
      validationSchema={loginSchema}
      onSubmit={(values) => handleLogin(values, navigate,setLoading,setError)}
    >
      {() => (
          <Form className="w-full md:w-[400px] lg:w-[450px] flex flex-col items-center justify-center space-y-3">

            <div className="w-full">
              <label htmlFor="name">Email</label>
              <Field className="form-field" placeholder="Enter your Email" id="email" name="email" type="text"/>
              <ErrorMessage className="error-message" name="email" component="div" />
               
            </div>

            <div className="w-full">
              <label htmlFor="name">Password</label>
              <Field className="form-field" placeholder="Enter your Password" id="password" name="password" type="password" />
              <ErrorMessage className="error-message" name="password" component="div" />
            </div>
              
              
              {/* <button type="submit">Login</button> */}
            <Button type="submit" size="lg">{loading ? <Loader2 className="animate-spin"/> : "Login"}</Button>
            <p className="error-message">{error}</p>
          </Form>
          )}
    </Formik>
      <p className="mt-4 text-sm">Don't have an account? <span className="text-primary"><Link to="/auth/register">Register</Link></span></p>
      
    </main>
  )
}

export default LoginPage