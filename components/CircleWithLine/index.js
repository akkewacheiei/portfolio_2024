const CircleWithLine = () => {
  return (
    <div className="flex justify-start">
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full border-2 border-main bg-main"></div>
        <div className="flex-grow w-0.5 bg-main mx-2"></div>
      </div>
    </div>
  );
};

export default CircleWithLine;
