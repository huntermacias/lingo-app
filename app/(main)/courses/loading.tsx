import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return ( 
    <div className="grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-6">
      {Array.from({ length: 4 }).map((_, index) => ( // Assuming 6 placeholders
        <div key={index} className="animate-pulse space-y-4">
          <Skeleton className="h-[320px] w-full rounded-md" /> {/* Image placeholder */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4 rounded" /> {/* Title placeholder */}
            <Skeleton className="h-4 w-1/2 rounded" /> {/* Subtitle placeholder */}
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default Loading;