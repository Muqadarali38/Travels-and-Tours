import { useState, useEffect } from 'react';

const Packages = ({ searchFilters, searchResults }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  useEffect(() => {
    // If search results are provided, use them
    if (searchResults !== null) {
      const results = Array.isArray(searchResults) ? searchResults : [];
      setPackages(results);
      setLoading(false);
      setError(null);
      return;
    }

    // Otherwise, fetch all packages
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/packages/');
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        const data = await response.json();
        setPackages(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching packages:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, [searchResults]);

  return (
    <section className="umrah-pkg-cover py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="heading-sec-cvr mb-8">
          <div className="heading-sec text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
              Cheap Umrah Deals
            </h2>
            <p className="text-gray-600 text-lg">
              All-inclusive Umrah Packages for Muslims residing in Canada
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
            <p className="mt-4 text-gray-600">Loading packages...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all"
            >
              Retry
            </button>
          </div>
        )}

        {/* Packages Grid */}
        {!loading && !error && (
          <div className="packages-cvr">
            <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {packages.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 text-lg">No packages available at the moment.</p>
                </div>
              ) : (
                packages.map((pkg) => (
                  <div key={pkg.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="packages-box-cover">
                      <div className="packages-box bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        {/* Package Image */}
                        <div className="packages-media relative h-48 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-600">
                          <a href="#" className="block h-full">
                            <img
                              className="img-fluid w-full h-full object-cover"
                              src={pkg.image_url || 'https://via.placeholder.com/400x300?text=Package'}
                              alt={pkg.title}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/400x300?text=Package';
                              }}
                            />
                          </a>
                          {pkg.is_featured && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                              Featured
                            </div>
                          )}
                        </div>
                        {/* Package Content */}
                        <div className="packages-content p-6">
                          <span className="pkg-main-heading block text-xl font-bold text-gray-800 mb-3">
                            {pkg.title}
                          </span>
                          {/* Package Type */}
                          {pkg.package_type && (
                            <div className="mb-3">
                              <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-semibold">
                                {pkg.package_type.name}
                              </span>
                            </div>
                          )}
                          {/* Short Description */}
                          {pkg.short_description && (
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{pkg.short_description}</p>
                          )}
                          {/* Duration */}
                          <div className="night-star flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                            <div className="night flex items-center gap-2">
                              <span className="text-2xl">🌙</span>
                              <span className="text-sm font-semibold text-gray-700">
                                {pkg.duration} {pkg.duration === 1 ? 'Day' : 'Days'}
                              </span>
                            </div>
                          </div>
                          {/* Price */}
                          <div className="price mb-4">
                            <p className="text-2xl font-extrabold bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                              CAD <sup className="text-lg">$</sup>{parseFloat(pkg.price).toFixed(2)}
                            </p>
                          </div>
                          {/* Action Buttons */}
                          <div className="detail-info flex gap-2 pt-4 border-t border-gray-200">
                            <button
                              onClick={() => openModal(pkg)}
                              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium hover:shadow-md"
                            >
                              View Detail
                            </button>
                            <a
                              href="#"
                              className="flex-1 px-4 py-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white rounded-lg hover:from-sky-700 hover:to-teal-700 transition-all text-sm font-semibold text-center shadow-md hover:shadow-lg transform hover:scale-105"
                            >
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Package Detail Modal */}
        {isModalOpen && selectedPackage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-600 relative">
                  <img
                    src={selectedPackage.image_url || 'https://via.placeholder.com/800x400?text=Package'}
                    alt={selectedPackage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x400?text=Package';
                    }}
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition-all shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  {selectedPackage.is_featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-extrabold text-gray-800 mb-3">{selectedPackage.title}</h2>
                  {selectedPackage.package_type && (
                    <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                      {selectedPackage.package_type.name}
                    </span>
                  )}
                </div>

                {/* Package Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🌙</span>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="text-lg font-semibold text-gray-800">
                          {selectedPackage.duration} {selectedPackage.duration === 1 ? 'Day' : 'Days'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="mb-2">
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="text-2xl font-extrabold bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                        CAD <sup className="text-lg">$</sup>{parseFloat(selectedPackage.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {selectedPackage.short_description && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedPackage.short_description}</p>
                  </div>
                )}

                {/* Package Type Details */}
                {selectedPackage.package_type && selectedPackage.package_type.description && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Package Type</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedPackage.package_type.description}</p>
                  </div>
                )}

                {/* Additional Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Package ID:</span>
                      <span className="ml-2 font-semibold text-gray-800">#{selectedPackage.id}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span
                        className={`ml-2 font-semibold ${selectedPackage.is_active ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {selectedPackage.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium"
                  >
                    Close
                  </button>
                  <a
                    href="#"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-sky-600 to-teal-600 text-white rounded-lg hover:from-sky-700 hover:to-teal-700 transition-all font-semibold text-center shadow-md hover:shadow-lg"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;