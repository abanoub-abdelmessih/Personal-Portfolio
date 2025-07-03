export const ExperienceItemAchievements = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return null;
  }
  return (
    <div>
      <h5 className="text-sm font-medium text-gray-600 mb-2">
        Key Achievements:
      </h5>
      <ul className="list-disc ps-6 space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-sm text-gray-600">
            <span className="font-light">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
