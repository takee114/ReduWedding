"use client";   
export default function Portfolio() {
      const portfolioImages = [

    {
      id: 1,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/v1775647969/IMG_1435_zf4jyb.jpg",
      title: "Reception Details",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/f_jpg/v1775647968/IMG_9717_tlrwvv.heic",
      title: "",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/v1775647967/IMG_9853_ve3u2n.jpg",
      title: "Wedding Cake",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/v1775647966/IMG_3949_nsyibs.jpg",
      title: "Outdoor Ceremony",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/v1775647966/IMG_9412_rix1ew.jpg",
      title: "Couple Portrait",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/v1775647965/IMG_1420_ppuovb.jpg",
      title: "Ceremony Moments",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/doj5xi5bt/image/upload/v1775647964/IMG_6970_hdc9r4.jpg",
      title: "Reception Highlights",
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
