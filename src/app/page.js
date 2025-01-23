
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 text-center  sm:items-start">
        <div className="flex flex-row-reverse items-center">
          <div className="space-x-4 items-center justify-center">
            <div className="avatar">
              <div className="w-32 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-20 rounded">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-16 rounded">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-8 rounded">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse mr-3 items-center justify-center ">
            <div className="avatar">
              <div className="w-20 rounded">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <div className="avatar mr-3">
              <div className="w-16 rounded">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <div className="avatar mr-3">
              <div className="w-8 rounded">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
          </div>
        </div>
        <p>Hello Shamim.</p>
        <p>Are you ready to start a new technology?</p>
        <div className="static card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
