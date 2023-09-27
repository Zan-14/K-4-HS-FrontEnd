const InputForm = ({ isTitle, isType, isPlaceholder }) => {
  return (
    <div className="flex flex-col mt-5">
      <label className="font-semibold">{isTitle}</label>
      <input
        type={isType}
        placeholder={isPlaceholder}
        className="h-10 pl-4 border rounded-lg"
      />
    </div>
  );
};

export default InputForm;
