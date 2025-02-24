
const Nav = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between px-24">
        <div className="flex gap-6">
          <h1 className="rounded-md  text-blue-950 hover:bg-blue-950 py-2 px-5 hover:text-white transition duration-500">Home</h1>
          <h1 className="rounded-md text-blue-950 hover:bg-blue-950 py-2 px-5 hover:text-white transition duration-500">About</h1>
          <h1 className="rounded-md text-blue-950 hover:bg-blue-950 py-2 px-5 hover:text-white transition duration-500">Contact</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue-950">Landing</h1>
        </div>
        <div>
          <h1 className="bg-blue-950 py-2 px-7 rounded-md text-white">Buy now</h1>
        </div>
      </div>
    </div>
  );
}

export default Nav



