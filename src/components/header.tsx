import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="w-full h-[10%] bg-sky-200 flex justify-center items-center">
      <div className="max-w-screen-xl flex justify-between w-full">
        <h1 className="text-2xl text-gray-800 italic font-bold text-center">
          Clerk Medium
        </h1>
        <div className="flex justify-center items-center">
          <ClerkLoaded>
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
            />
          </ClerkLoaded>
          <ClerkLoading>
            <p className="size-8 animate-spin text-slate-400">...</p>
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
};
