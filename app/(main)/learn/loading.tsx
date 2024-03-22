import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 mb-10">
      {/* Skeleton for StickyWrapper content */}
      <div className="w-80 flex flex-col space-y-6 mb-10">
        {/* Placeholder for UserProgress */}
        <Skeleton className="h-24 w-full rounded-lg mb-10" />

        {/* Conditional Placeholder for Promo */}
        <Skeleton className="h-12 w-full rounded-lg" />

        {/* Placeholder for Quests */}
        <Skeleton className="h-36 w-full rounded-lg" />
      </div>

      {/* Skeleton for FeedWrapper content */}
      <div className="flex-1 space-y-5">
        <div className="flex flex-col items-center">
          {/* Placeholder for Image */}
          <Skeleton className="h-24 w-24 rounded-full" />

          {/* Placeholder for Shop Title */}
          <Skeleton className="h-6 w-3/4 rounded" />

          {/* Placeholder for Description */}
          <Skeleton className="h-4 w-5/6 rounded" />

          {/* Placeholder for Items */}
          <div className="w-full flex flex-col items-center justify-center mt-6 space-y-2">
            <div className="w-full mt-6 flex flex-col items-center justify-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex justify-center mb-4 last:mb-0"
                  style={{
                    transform: `translateX(${index % 2 === 0 ? 10 * index : -10 * index}px)`,
                  }}
                >
                  <Skeleton className="h-16 w-16 rounded-full" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Loading;
