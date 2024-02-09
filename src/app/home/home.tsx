import React from "react";

const Home = () => {
  return (
    <div className=" h-screen w-screen  flex items-center justify-center flex-col">
      <div className=" font-bold text-4xl p-4"> 
      Cafe Yangla Text Here
      </div>
      
      <div className="h-4/5 w-4/5">
        <div className="grid grid-cols-12 gap-2 h-full">
          <div className="h-full col-span-4  bg-green-300">1</div>
          {/* <div className="h-full col-span-2 bg-black">2</div> */}
          <div className="h-full col-span-4 bg-amber-300">3</div>
          {/* <div className="h-full col-span-2 bg-slate-400">4</div> */}
          <div className="h-full col-span-2 bg-slate-800">5</div>
          <div className="h-full col-span-2 bg-zinc-300">6</div>
          <div className="h-full col-span-2 bg-orange-400">7</div>
          <div className="h-full col-span-2 bg-neutral-700">8</div>
          <div className="h-full col-span-2 bg-stone-400">9</div>
          <div className="h-full col-span-2 bg-emerald-400">10</div>
          <div className="h-full col-span-2 bg-teal-700">11</div>
          <div className="h-full col-span-2 bg-cyan-400">12</div>
        </div>
      </div>
      {/* end of grid */}
      {/* <div className=" pt-10">
        <h1>Hello this is the other pannel</h1>
      </div> */}
    </div>
  );
};

export default Home;
