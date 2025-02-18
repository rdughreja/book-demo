import { useState } from "react";
import { Mail, Phone, MapPin, Plus } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <MapPin className="text-blue-500 w-10 h-10 mx-auto" />
          <h3 className="font-semibold mt-2">Office</h3>
          <p className="text-gray-600">one world, Rajkot</p>
        </div>
        <div>
          <Mail className="text-blue-500 w-10 h-10 mx-auto" />
          <h3 className="font-semibold mt-2">Email</h3>
          <p className="text-gray-600">Divine@bookstore.com</p>
        </div>
        <div>
          <Phone className="text-blue-500 w-10 h-10 mx-auto" />
          <h3 className="font-semibold mt-2">Phone</h3>
          <p className="text-gray-600">2347238492</p>
        </div>
      </div>

      <div className="mt-20 flex gap-16">
        <div className="md:w-1/2">
        <h2 className="text-lg font-semibold text-gray-800">Message us</h2>
        <p className="text-gray-600">
          We're here to assist you every step of the way. Whether you have a
          question, need technical support, or simply want to share your
          feedback, our dedicated team is ready to listen and provide prompt
          assistance.
        </p>
        </div>
       <div className="md:w-1/2">
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;