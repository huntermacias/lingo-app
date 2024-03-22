import { Skeleton } from "@/components/ui/skeleton";

const LeaderboardSkeleton = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      {/* Assuming StickyWrapper and FeedWrapper are styling wrappers */}
      <div className="sticky top-0 space-y-6">
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-12 w-full rounded-lg" />
        <Skeleton className="h-36 w-full rounded-lg" />
      </div>
      <div className="flex-1">
        <div className="w-full flex flex-col items-center">
          <Skeleton className="h-24 w-24 rounded-full" />
          <Skeleton className="h-6 w-3/4 my-6 rounded" />
          <Skeleton className="h-4 w-5/6 mb-6 rounded" />
          <Skeleton className="h-1 w-full mb-4 rounded-full" />
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-full p-2 px-4 my-2 rounded-xl">
              <Skeleton className="h-12 w-12 rounded-full mr-4 inline-block" />
              <Skeleton className="h-6 w-1/4 mr-4 inline-block rounded" />
              <Skeleton className="h-6 w-1/6 inline-block rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSkeleton;
