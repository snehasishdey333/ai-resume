import axios from "axios"

export const fetchResumes = async (setResumes,userId) => {
  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/resume/all/"+userId)
    setResumes(response.data)
  }
  catch (error) {
    console.log(error)
  }
}
  
export const getResumes = async(userId) => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/resume/all/" + userId)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

export const createResume = async(userId,title) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/resume/create", {
          userId: userId,
          title:title
        })
        // console.log(response.data)
    }
    catch (error) {
        console.log(error)
    }
}

export const getResumeData = async (resumeId,setInfo) => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/resume/user/" + resumeId)
        setInfo(response.data)
      }
      catch (error) {
        console.log(error)
      }
}
    
export const handleRegister = async (values,navigate) => {
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/auth/register", {
        fullName: values.name,
        email: values.email,
        password:values.password
      })
      navigate("/auth/login")
    } catch (error) {
      console.log(error)
    }
};
  

export const handleLogin = async (values,navigate) => {
    try {
     const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/auth/login", {
        email: values.email,
        password:values.password
     })
      // console.log(response.data)
      console.log(response.data)
      localStorage.setItem('user_data', JSON.stringify(response.data));
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
};


export const handleLogout = async (navigate) => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/auth/logout")
      navigate("/auth/login")
    } catch (error) {
      console.log(error)
    }
};


export const handleUpdateUser = async (userId, values,navigate) => {
    try {
     const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/user/update/"+userId, {
        password:values.password
     })
      
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
};


    
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

   export async function displayRazorpay(userId) {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
      
      
      
      const result = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/premium",{
          amount: 100,
          userId:userId
      });
      const order=result?.data

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: import.meta.env.VITE_RAZORPAY_PROD_KEY_ID,
            amount: amount.toString(),
            currency: currency,
            name: "AI Resume",
            description: "Elevate your job search with our advanced AI-powered resume builder.",
            image: "../../public/logo.svg",
            order_id: order.id,
            handler: async function (response) {
              const data = {
                    userId:userId,
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post(import.meta.env.VITE_BACKEND_URL +"/api/premium/verify-payment", data);
                window.location=result.data.url
                
            },
            prefill: {
                name: "Snehasish Dey",
                email: "snehasish.dey@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#5C19F9"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }