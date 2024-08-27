import { Button } from "@/components/ui/button"
import { registrationSchema } from "@/schemas/schema";
import { handleRegister } from "@/utils/apiCalls";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

const navigate = useNavigate();
  
  
  return (
      <main className="p-6 md:p-0 w-[100vw] h-[100vh] flex items-center justify-center flex-col">
          <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="logo" width={100} height={100} />
              <h1 className="text-3xl font-bold text-[#510AC9] ">ResumeAI</h1>
          </Link>
          <div className="space-y-2 my-8 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="font-semibold text-sm">The first step to land your dream job!</p>
      </div>
      
      <Formik
      initialValues={{ name: '', email: '',password:'' }}
      validationSchema={registrationSchema}
      onSubmit={(values) => handleRegister(values, navigate)}
    >
      {() => (
          <Form className="w-full md:w-[400px] lg:w-[450px] flex flex-col items-center justify-center space-y-3">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <Field className="form-field" placeholder="Enter your Name" id="name" name="name" type="text" />
              <ErrorMessage className="error-message" name="name" component="div" />
            </div>

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
              <Button type="submit" size="lg">Register</Button>
          </Form>
          )}
    </Formik>
          <p className="mt-4 text-sm">Already have an account? <span className="text-primary"><Link to="/auth/login">Login</Link></span></p>
          
    </main>
  )
}

export default RegisterPage