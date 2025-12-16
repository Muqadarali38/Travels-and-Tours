const Features = () => {
  const features = [
    {
      title: "Free Cancellations",
      description: "Your Umrah dates can be changed from us anytime you want, also the cancellations are free",
      icon: "✓"
    },
    {
      title: "Beat Your Quote",
      description: "Have a better offer from other website or travel agency? present it to us and we will beat it with even better service",
      icon: "💬"
    },
    {
      title: "10+ Years In Industry",
      description: "Our Agents are here for you 24/7, Pre-booking, For Booking, and after Booking So you always have someone to lean on",
      icon: "⭐"
    },
    {
      title: "Best Price Guaranteed",
      description: "We'll beat the quote if you have better price",
      icon: "💰"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Why Choose 𝒯𝓇𝒶𝓋𝑒𝓁𝓈 𝒶𝓃𝒹 𝒯𝑜𝓊𝓇𝓈
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Experience, excellence, and commitment to your sacred pilgrimage's success
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-sky-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
            Umrah Packages From Canada (رحلات العمرة من كندا)
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Umrah is a religious activity, and Muslims worldwide love and respect it. It involves completing seven circles around the Kaaba. Muslims forget about everything else, and the only thing that remains is God's existence. They become vulnerable in front of the Almighty and confront their wrongdoings. This repenting leads to a deep cleansing of their souls. For these reasons, Umrah is an excellent source of sin detoxication for Muslims.
            </p>
            <p>
              As a Muslim, you must feel this vulnerability at least once in a lifetime. This is why we customize Umrah packages for you. You must go on this incredible life-changing journey to become a better Muslim and strengthen your faith. Our 3-star, 4-star, and 5-star packages for Umrah cater to various budget ranges and ensure an inexpensive trip.
            </p>
            <p>
              Our happy clients at 𝒯𝓇𝒶𝓋𝑒𝓁𝓈 𝒶𝓃𝒹 𝒯𝑜𝓊𝓇𝓈 have loved our affordable and well-planned Cheap Umrah packages for over ten years. We take pride in assisting the esteemed pilgrims in making their dream journey come true. Therefore, 𝒯𝓇𝒶𝓋𝑒𝓁𝓈 𝒶𝓃𝒹 𝒯𝑜𝓊𝓇𝓈 has become a reliable and go-to Umrah agency for thousands of Canadian Muslims. You can access our packages from across Canada.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

