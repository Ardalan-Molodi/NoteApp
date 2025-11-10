const AddNote = () => {
     const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-2">
      <input
        className="text-white py-1 outline-0 w-80 rounded-sm text-center border"
        type="text"
        placeholder="title"
      />
      <input
        className="text-white py-1 outline-0 w-80 rounded-sm border text-center"
        type="text"
        placeholder="descrption"
      />
      <button type="submit"  className="text-white cursor-pointer rounded-sm w-1/3 border">Add</button>
    </form>
  );
};

export default AddNote;
