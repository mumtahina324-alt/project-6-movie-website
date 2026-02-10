import { Star } from "lucide-react";

export default function MovieRating({ value }) {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          size={18}
          className={
            index < value ? "text-primary fill-primary" : "text-primary/40"
          }
        />
      ))}
    </div>
  );
}
