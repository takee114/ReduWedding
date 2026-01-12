"use client";   
export default function Portfolio() {
      const portfolioImages = [
    {
      id: 1,
      url: "https://raw.createusercontent.com/1de22b27-f1ea-479a-b8f6-458ab441ef9c/",
      title: "Outdoor Ceremony",
    },
    {
      id: 2,
      url: "https://raw.createusercontent.com/edca2318-4785-47f6-9dcf-4e3115af2533/",
      title: "Reception Details",
    },
    {
      id: 3,
      url: "https://raw.createusercontent.com/479e4d59-a37b-411e-81dd-cc3c3c1b4ab6/",
      title: "Couple Portrait",
    },
    {
      id: 4,
      url: "https://raw.createusercontent.com/0f73883e-5da1-4fb2-b83b-f98ef1efe3ae/",
      title: "Wedding Cake",
    },
    {
      id: 5,
      url: "https://raw.createusercontent.com/5c615df2-5e1e-46ac-af1d-e54c3122ca92/",
      title: "Bridal Bouquet",
    },
    {
      id: 6,
      url: "https://raw.createusercontent.com/90a219a1-46ab-45db-9b20-59708d856fc6/",
      title: "Venue Setup",
    },
  ];
    return (
          <section id="portfolio" className="px-6 md:px-14 py-24">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Portfolio<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Recent celebrations we've brought to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-gray-100 border border-gray-200/60 hover:border-[#D4958D]/40 transition-all duration-200 overflow-hidden group cursor-pointer relative"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                <p className="text-white font-inter text-sm font-semibold p-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>  );
}