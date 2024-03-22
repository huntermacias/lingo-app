import { lessons, units } from "@/db/schema"

import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof units.$inferSelect;
  } | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {

  const duoloingoGifs = [
    'https://media2.giphy.com/media/8FcJ6IXAO2FHUJ5Rnp/giphy.gif?cid=6c09b952v4vx6wd66niaq6eo07xqh59yqg5ezr5p9352oljg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzg3ZXRxZWprdXUwM3V6d3puMXpwdW9jaXMxdW9oYnRub29qNjZlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XKMPsmeTX6N6WlzI4c/giphy.gif',
    'https://media1.giphy.com/media/lC1jRvBa6c9Dmc3HUX/200w.gif?cid=82a1493babghqg2uvocr8ekkwd40l232mnqstrl3tvmjzuzx&ep=v1_gifs_related&rid=200w.gif&ct=s',
    'https://media3.giphy.com/media/8QVkf6ywOqliEH7YdF/giphy.gif?cid=6c09b952h1qtlpcg1ln0lqs46zd4qzpcc4lgta0qs1o4chd4&ep=v1_stickers_related&rid=giphy.gif&ct=s',
    'https://media4.giphy.com/media/1B3jrhxLGzKjTLx9yv/200w.gif?cid=82a1493b0dogu7ol1s7xz908u2wi1lu6t9lstyvyxr119dh9&ep=v1_gifs_related&rid=200w.gif&ct=s',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExandic2x5OHpnNDd6aWU5ZGxtdXJrZnZwbjJvdDR0MWIzeGs5cTd2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/neBYFPimWO7AzcZoor/giphy.gif',
  ]

  function getRandomGif() {
    return duoloingoGifs[Math.floor(Math.random() * duoloingoGifs.length)];
  }

  const gifPosition = order % 2 === 0 ? "left-2/3" : "right-2/3";

  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
      <img
          src={getRandomGif()}
          alt="animation"
          className={`absolute ${gifPosition} w-40 h-60 top-1/3 transform -translate-x-1/2`}
        />
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};