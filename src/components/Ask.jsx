const Ask = () => {
  return (
    <div
      className="
        bg-black-900 
        border border-green-600 
        rounded-xl 
        p-4 md:p-5 
        mb-6 
        flex 
        flex-col 
        sm:flex-row 
        justify-between 
        items-start 
        sm:items-center 
        gap-3
      "
    >
      <p className="text-base sm:text-lg font-medium text-gray-200">
        Have a question? Ask the community.
      </p>

      <button
        className="
          bg-green-600 
          text-black 
          px-4 
          py-2 
          rounded 
          font-semibold 
          hover:bg-green-500 
          transition 
          w-full 
          sm:w-auto
        "
      >
        Ask Question
      </button>
    </div>
  );
};

export default Ask;
