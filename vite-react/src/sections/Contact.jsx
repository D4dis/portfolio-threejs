import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setFrom] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setFrom({ ...form, [name]: value })
  }

  // service_y4etsy8

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        'service_y4etsy8',
        'template_c1o9nhh',
        {
          from_name: form.name,
          to_name: 'Daris',
          from_email: form.email,
          to_email: 'daris.knc@gmail.com',
          message: form.message
        },
        'vHHzvbUawwrszVfRU'
      )
      setLoading(false);
      alert('Your message has been sent!')
      setFrom({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!')
    }

  }

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">Wheter you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&apos;m here to help.</p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending ...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact