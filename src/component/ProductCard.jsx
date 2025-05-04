import { Heart } from 'lucide-react'; // Make sure to import the Heart icon

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white p-4 rounded shadow hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />
      <h3 className="font-sans text-md mb-1 truncate w-[90%] text-black font-bold">
        {product.title}
      </h3>
      <div className="flex justify-between">
        <p className="text-[12px] text-gray-400">
          Sign in or Create an account to see pricing
        </p>
        <button className="flex items-center justify-center bg-transparent border-none outline-none">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
