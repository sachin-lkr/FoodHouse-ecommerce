import aboutBanner from "../assets/all-banner.jpg";
import Banner from "../components/Banner";
import { FaLeaf, FaTruck, FaFish, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div>

      {/* Banner */}
      <Banner title="About FoodHouse" banner={aboutBanner} />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-5 md:px-20 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to FreshMart 🥬
        </h2>
        <p className="text-gray-600 leading-7">
          FoodHouse is your trusted online marketplace for fresh vegetables,
          meat, and fish. We deliver farm-fresh and hygienic products directly
          to your doorstep with guaranteed quality and fast delivery.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Mission
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Our mission is to make fresh food accessible, affordable, and
            convenient for every household. We connect local farmers and
            suppliers directly to customers.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <FaLeaf className="text-4xl text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Fresh Products</h3>
              <p className="text-sm text-gray-500 mt-2">
                Directly sourced from farms and verified suppliers.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <FaTruck className="text-4xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-sm text-gray-500 mt-2">
                Same-day and next-day delivery options available.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <FaFish className="text-4xl text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Quality Assurance</h3>
              <p className="text-sm text-gray-500 mt-2">
                Hygienic packaging and strict quality checks.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
              <FaUsers className="text-4xl text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Happy Customers</h3>
              <p className="text-sm text-gray-500 mt-2">
                Thousands of satisfied families trust us.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-600">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">10k+</h3>
            <p className="text-gray-600">Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">100+</h3>
            <p className="text-gray-600">Farm Partners</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;