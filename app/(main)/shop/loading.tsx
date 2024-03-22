import { Skeleton } from "@/components/ui/skeleton";

const ShopPageSkeleton = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      {/* Placeholder for StickyWrapper content */}
      <div className="sticky top-0 space-y-6">
        <Skeleton className="h-24 w-full rounded-lg" /> {/* UserProgress */}
        <Skeleton className="h-12 w-full rounded-lg" /> {/* Promo, conditionally displayed */}
        <Skeleton className="h-36 w-full rounded-lg" /> {/* Quests */}
      </div>

      {/* Placeholder for FeedWrapper content */}
      <div className="flex-1">
      <div className="w-full flex flex-col items-center">
          <Skeleton className="h-24 w-24 rounded-full" />  {/* Placeholder for Quest Image */}
          <Skeleton className="h-6 w-3/4 my-6 rounded" />  {/* Placeholder for Quests Heading */}
          <Skeleton className="h-4 w-5/6 mb-6 rounded" />  {/* Placeholder for Quest Description */}

          {/* Placeholders for shop items */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => ( // Assuming 8 items for the example
              <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                <Skeleton className="h-20 w-full rounded-md mb-4" /> {/* Item Image */}
                <Skeleton className="h-4 w-3/4 rounded mb-2" /> {/* Item Name */}
                <Skeleton className="h-4 w-1/2 rounded" /> {/* Item Price */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageSkeleton;
