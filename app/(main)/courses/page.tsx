import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";


const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [
    courses,
    userProgress,
  ] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-7xl mx-auto px-4 sm:px-3 lg:px-4 py-12">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-neutral-800 dark:text-gray-200 sm:text-5xl lg:text-6xl">
          Language Courses
        </h1>
        <p className="mt-4 text-xl text-neutral-600 dark:text-gray-400">
          Explore our wide range of language learning opportunities.
        </p>
      </div>

      <div className="mt-8">
        <List
          courses={courses}
          activeCourseId={userProgress?.activeCourseId}
        />
      </div>
    </div>

  );
};

export default CoursesPage;