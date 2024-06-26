import { StarIcon } from '@yocxo/ui/icons';

interface StarRatingProps {
  rating?: 1 | 2 | 3 | 4 | 5;
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

export function StarRating({ rating = 5, size = 'default' }: StarRatingProps) {
  const sizeClasses = {
    default: 'size-4',
    sm: 'size-3',
    lg: 'size-6',
    xl: 'size-8',
  };

  return (
    <div className="flex gap-1">
      {[...Array(rating).keys()].map((index) => (
        <StarIcon key={index} className={`${sizeClasses[size]} fill-current`} />
      ))}
    </div>
  );
}
