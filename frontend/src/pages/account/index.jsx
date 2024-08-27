import { Button } from "@/components/ui/button"
import { UserInfoContext } from "@/context/UserInfoContext"
import { userEditSchema } from "@/schemas/schema"
import { handleLogout, handleUpdateUser } from "@/utils/apiCalls"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import HomePage from "../home"


const AccountPage = () => {
    const { user } = useContext(UserInfoContext)
    const userId=user?._id
    const navigate=useNavigate()
    
    
    return (
      user ? 
      <main className="min-h-[80vh] w-full lg:px-16 md:px-6 px-4 lg:py-8 md:py-4 py-2">
          <h1 className="text-[20px] md:text-[22px] font-bold ">Hi, {user?.fullName}</h1>
          <h3 className="text-[16px] md:text-[18px] font-semibold ">Account details</h3>
          <Formik
      initialValues={{ name: user?.fullName, email: user?.email,password: '' }}
      validationSchema={userEditSchema}
      onSubmit={(values) => {handleUpdateUser(userId,values,navigate)}}
    >
      {() => (
          <Form className="mb-8 my-4 w-full md:w-[400px] lg:w-[450px] flex flex-col items-start justify-center space-y-3">
            <div className="w-full">
              <label htmlFor="name">Full Name</label>
              <Field value={user?.fullName} className="disabled-form-field" placeholder="Enter your Name" id="name" name="name" type="text" />
              <ErrorMessage className="error-message" name="name" component="div" />
            </div>

            <div className="w-full">
              <label htmlFor="name">Email</label>
              <Field value={user?.email} className="disabled-form-field" placeholder="Enter your Email" id="email" name="email" type="text"/>
              <ErrorMessage className="error-message" name="email" component="div" />
               
            </div>

            <div className="w-full">
              <label htmlFor="name">Password</label>
              <Field className="form-field" placeholder="Enter your Password" id="password" name="password" type="password" />
              <ErrorMessage className="error-message" name="password" component="div" />
            </div>
              
              
              {/* <button type="submit">Login</button> */}
              <Button type="submit" size="lg">Update details</Button>
          </Form>
          )}
          </Formik>
          <div className="flex items-center space-x-4 ">
              <Button><Link to="/premium">Get Premium</Link></Button>
              <Button onClick={()=>handleLogout(navigate)} variant="outline">Log out</Button>
          </div>
          
            </main> :
            <HomePage/>
  )
}

export default AccountPage