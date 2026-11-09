import contactBanner from "../assets/all-banner.jpg";
import Banner from "../components/Banner";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Banner */}
      <Banner title="Contact Us" banner={contactBanner} />

      <section className="max-w-6xl mx-auto px-5 md:px-20 py-12 grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get In Touch 📞
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 99999 99999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@foodhouse.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">Lakhisarai,Bihar, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837637.253775058!2d84.48472168885034!3d25.897923622672074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e0!3m2!1sen!2sin!4v1772564452095!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
