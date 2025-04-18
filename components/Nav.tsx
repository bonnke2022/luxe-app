import LinksDropdown from "./LinksDropdown";

const Nav = () => {
  return (
    <nav className="bg-muted py-4 px-16 lg:hidden px-4 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      {/* <div className="flex items-center gap-x-4">
        <ThemeToggle />
      </div> */}
    </nav>
  );
};

export default Nav;
