export default function Home() {
  return (
    <main className='flex items-center justify-center h-screen p-5 bg-gray-100'>
      <div className='w-full p-5 bg-white shadow-lg rounded-3xl gap-2 max-w-screen-sm flex flex-col'>
        <input
          type='text'
          placeholder='Search here...'
          className='w-full placeholder:drop-shadow-sm rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow'
        />
        <button className='bg-black text-white py-2 font-medium rounded-full active:scale-90 outline-none transition-transform'>
          Search
        </button>
      </div>
    </main>
  );
}
