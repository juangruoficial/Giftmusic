const ConatainerAuth = ({ children }) => {
  return (
    <main
      className="w-full font-urbanist gap-12 p-4 min-h-screen bg-purple-bg text-white grid justify-stretch items-center justify-items-center bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat
    sm:grid-cols-[auto_auto]  sm:justify-center sm:bg-[url(/images/bg-auth-desktop.png)]
    "
    >
      {children}
    </main>
  );
};
export default ConatainerAuth;
