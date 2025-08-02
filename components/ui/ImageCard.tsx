import { motion } from 'framer-motion';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
}

const ImageCard = ({ src, alt, title }: ImageCardProps) => {
  return (
    <motion.div
      className="flex items-center justify-center bg-gray-200"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={alt} className=" w-[400px] h-[400px] object-cover " />
      <p className="absolute bottom-2 left-2 text-white font-bold bg-black bg-opacity-50 p-1 rounded">{title}</p>
    </motion.div>
  );
};

export default ImageCard;