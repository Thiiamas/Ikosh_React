export const NavBarBTn = ({ currentLocation, name, path }) => {
  return (
    <>
      {currentLocation.pathname === path ? (
        <a
          href={path}
          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          {name}
        </a>
      ) : (
        <a
          href={path}
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          {name}
        </a>
      )}
    </>
  );
};
