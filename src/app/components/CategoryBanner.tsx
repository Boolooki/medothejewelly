import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

const categories: Category[] = [
  {
    id: '1',
    title: 'Rings',
    imageUrl: '/Categorybox1.jpeg',
    link: '/collections/rings',
  },
  {
    id: '2',
    title: 'Necklaces and Pendants',
    imageUrl: '/Categorybox2.jpeg',
    link: '/collections/earrings',
  },
  {
    id: '3',
    title: 'Bangles and Bracelets',
    imageUrl: '/Categorybox3.jpeg',
    link: '/collections/bracelet',
  },
  {
    id: '4',
    title: 'Wedding',
    imageUrl: '/Categorybox4.jpeg',
    link: '/collections/pendant-and-necklace',
  },
];

const CategoryBanner: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8">
      <h2 className="m-2">Category</h2>
      <p className="text-center text-gray-600 mb-6 text-sm">
        Explore our wide range of jewelry categories to find the perfect piece for any occasion.
      </p>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group block overflow-hidden rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-opacity group-hover:opacity-90"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;