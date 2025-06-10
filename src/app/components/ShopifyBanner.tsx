import Image from "next/image";

export default function ShopifyBanner() {
  return (
    <div className="flex items-start justify-between bg-white m-5 rounded-lg space-x-5">
      <div className="flex flex-col items-center py-8">
        <Image
          src="/ShopifySec1.jpeg"
          alt="Shopify Banner"
          width={1200}
          height={200}
          className="w-full h-[50vw] object-cover rounded-lg"
        />
        <div className="flex flex-col items-center w-[35vw]">
          <h1 className="text-center text-[4vw] font-bold mt-4">
            Discover Our Exclusive Shopify Collection
          </h1>
          <p className="text-center text-[2.5vw] text-gray-600 mt-2">
            Explore unique products crafted with care and precision.
          </p>
          <a
            href="#"
            className="block text-center text-[2.5vw] w-[50%] mt-4 bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <Image
          src="/ShopifySec2.jpeg"
          alt="Shopify Banner"
          width={1200}
          height={200}
          className="w-full h-[50vw] object-cover rounded-lg"
        />
        <div className="flex flex-col items-center w-[35vw]">
          <h1 className="text-center text-[4vw] font-bold mt-4">
            Look at our Shopify Exclusive Collection
          </h1>
          <p className="text-center text-[2.5vw] text-gray-600 mt-2">
            new products added every week, do not miss out!
          </p>
          <a
            href="#"
            className="block text-center text-[2.5vw] w-[50%] mt-4 bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
