import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wraper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { Progress } from "@/components/ui/progress";
import { Promo } from "@/components/promo";
import { quests } from "@/constants";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [
    userProgress,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return ( 
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && (
          <Promo />
        )}
      </StickyWrapper>
      <FeedWrapper>
      <div className="w-full flex flex-col items-center">
    <Image
      src="/quests.svg"
      alt="Quests"
      height={90}
      width={90}
      className="rounded-full drop-shadow-lg"
    />
    <h1 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mt-8 mb-4">
      Quests
    </h1>
    <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
      Complete quests by earning points.
    </p>
          <ul className="w-full space-y-4">
      {quests.map((quest, index) => {
        const progress = (userProgress.points / quest.value) * 100;

        return (
          <li
            key={quest.title}
            className={`flex items-center p-4 gap-4 bg-white dark:bg-gray-900/50 rounded-lg shadow transition-shadow hover:shadow-lg ${index === 0 ? "border-t-0" : "border-t"} border-gray-200 dark:border-gray-700`}
          >
            <Image
              src="/points.svg"
              alt="Points"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {quest.title}
              </p>
              <Progress value={progress} className="h-3 mt-2" />
            </div>
          </li>
        )
      })}
    </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};
 
export default QuestsPage;