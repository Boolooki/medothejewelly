import Image from "next/image";

type BannerSectionProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const BannerSection = ({ imageSrc, title, description }: BannerSectionProps) => (
  <div className="flex flex-col items-center py-8 w-[45vw]">
    <Image
      src={imageSrc}
      alt="Shopify Banner"
      width={1200}
      height={200}
      className="w-full h-[50vw] object-cover rounded-lg"
    />
    <div className="flex flex-col items-center w-[80%]">
      <h1 className="text-center text-[3vw] font-bold mt-4">{title}</h1>
      <p className="text-center text-[1.5vw] text-gray-600 mt-2">{description}</p>
      <a
        href="#"
        className="block text-center text-[2.5vw] w-[50%] mt-4 bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
      >
        Shop Now
      </a>
    </div>
  </div>
);

export default function ShopifyBanner() {
  const banners = [
    {
      imageSrc: "/ShopifySec1.jpeg",
      title: "Discover Our Exclusive Shopify Collection",
      description: "Explore unique products crafted with care.",
    },
    {
      imageSrc: "/ShopifySec2.jpeg",
      title: "Look at our Shopify Exclusive Collection",
      description: "New products added every week, do not miss out!",
    },
  ];

  return (
    <div className="flex items-start justify-between bg-white m-5 p-5 rounded-lg gap-5">
      {banners.map((banner, index) => (
        <BannerSection
          key={index}
          imageSrc={banner.imageSrc}
          title={banner.title}
          description={banner.description}
        />
      ))}
    </div>
  );
}