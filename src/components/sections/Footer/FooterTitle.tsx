export const FooterTitle = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <h3 className="font-semibold text-lg text-gray-900 mb-1">
        Abanoub Abdelmessih
      </h3>
      <p className="text-gray-500 text-sm">© {year} All rights reserved.</p>
    </div>
  );
};
