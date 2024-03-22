import { Skeleton } from "@/components/ui/skeleton";

const QuestsPageSkeleton = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      {/* StickyWrapper content skeleton */}
      <div className="sticky top-0 space-y-6">
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      
      {/* FeedWrapper content skeleton */}
      <div className="flex-1">
        <div className="w-full flex flex-col items-center">
          <Skeleton className="h-24 w-24 rounded-full" />  {/* Placeholder for Quest Image */}
          <Skeleton className="h-6 w-3/4 my-6 rounded" />  {/* Placeholder for Quests Heading */}
          <Skeleton className="h-4 w-5/6 mb-6 rounded" />  {/* Placeholder for Quest Description */}

          {/* Placeholders for each Quest item */}
          <ul className="w-full space-y-4">
            {Array.from({ length: 5 }).map((_, index) => ( // Assuming 5 quests for the skeleton
              <li key={index} className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Skeleton className="h-12 w-12 rounded-full" />  {/* Placeholder for Points Image */}
                <div className="flex flex-col gap-y-2 w-full">
                  <Skeleton className="h-4 w-3/4 rounded" />  {/* Placeholder for Quest Title */}
                  <Skeleton className="h-2 w-full rounded" />  {/* Placeholder for Progress Bar */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestsPageSkeleton;
