"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
    console.log("Error:", error)
  return (
    <div className="flex items-center h-full w-full  justify-center space-x-8">
      <div className="w-1/5">
        <img
          className="w-full max-sm:w-2/5"
          src="/images/error.png"
          alt="Logo"
        ></img>
      </div>
      <div className="w-3/5">
        <h2 className="text-2xl font-bold text-red-500">
          Something went wrong!
        </h2>
        <p className="mb-4">{error?.message ?? "Unknown error"}</p>
        <button
          className="rounded-full hover:bg-bg-yellow px-6 py-2 text-coorporate-orange border-coorporate-orange border border-black h-auto"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
