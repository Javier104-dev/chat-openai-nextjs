"use client";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-10 container mx-auto pl-4 pt-6 pr-4">
      <input
        type="text"
        placeholder="Message"
        className="input input-bordered w-full m-10"
      />
    </div>
  );
}
