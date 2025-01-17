import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const formRef = useRef(null);
    const [loading,setLoading]=useState(false)
    const [form, setForm] = useState({
        email: "",
        name:"",
        message: "",
    })

const handleSubmit=async (e)=>{
       e.preventDefault();
       setLoading(true);
       try{
          await emailjs.send(
               'service_0i96p2p',
               'template_ccssu72',
               {
                   from_email: form.email,
                   to_name: 'Teja',
                   from_name:form.name,
                   to_email:'psteja96@gmail.com',
                   message:form.message,
               },
             'CGclzVptsYZ1v849a',
           )
           setLoading(false);
           alert("Your message has been sent!");
           setForm({
               name: '',
               email: '',
               message: '',
           });
       } catch (error) {
        console.log(error);
        alert("Something went wrong!");
       }

        //service_wa99qjs
};
    const handleChange=({target:{name,value}})=>{
        setForm({...form, [name]:value});
    };
    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                <h3>Get In Touch</h3>
                 <p className="text-lg text-white-600">
                     Whether you're building a project or improve existing......
                 </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-3">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="john.doe@gmail.com"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Hi,I'm interest in..."/>
                        </label>
                        <button className="field-btn" disabled={loading} type="submit">
                            {loading?'Sending...':'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
