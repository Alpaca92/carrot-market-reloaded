export default function Home() {
  return (
    <main className='flex items-center justify-center sm:bg-red-100 md:bg-green-100 h-screen p-5 bg-gray-100'>
      <div className='w-full p-5 bg-white shadow-lg rounded-3xl gap-2 max-w-screen-sm flex flex-col md:flex-row'>
        <input
          type='text'
          placeholder='Search here...'
          className='w-full placeholder:drop-shadow-sm rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow'
        />
        <button className='bg-black text-white py-2 font-medium rounded-full active:scale-90 outline-none transition-transform md:px-10'>
          Search
        </button>
      </div>
    </main>
  );
}
