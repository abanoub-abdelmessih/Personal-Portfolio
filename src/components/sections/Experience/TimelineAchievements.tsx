export const TimelineAchievements = ({
  achievements,
}: {
  achievements: string[];
}) => {
  return (
    <>
      {achievements && achievements.length > 0 && (
        <div className="">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center border-l-4 pl-4 border-gray-700">
            Key Achievements :
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-zinc-200"
              >
                <span className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 border border-gray-200">
                  {index + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
