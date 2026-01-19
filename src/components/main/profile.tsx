import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex-1 relative w-full max-w-md mx-auto">
      <div
        className={
          "absolute flex justify-center items-center left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-40 z-0 dark:bg-gradient-to-r dark:from-white/20 dark:to-white/10 bg-gradient-to-r from-black/10 to-black/5"
        }
      />
      <Image
        src="/profile.webp"
        alt="Vishal Kumar"
        width={"400"}
        height={"400"}
        className="mx-auto w-auto h-auto relative z-10 rounded-full object-cover shadow-sm"
      />
    </div>
  );
}
