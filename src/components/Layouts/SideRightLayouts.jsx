const SidebarRightLayout = ({ children }) => {
  return <div className="flex gap-16">{children}</div>;
};

export default SidebarRightLayout;

function SideSticky({ children, top }) {
  return (
    <div className={`w-2/6 sticky  h-[100vh] ${top}`}>
      <div className="h-full">{children}</div>
    </div>
  );
}

function LeftContent({ children, heightContent }) {
  return (
    <div className="w-4/6">
      <div className={`  ${heightContent}`}>{children}</div>
    </div>
  );
}

SidebarRightLayout.SideSticky = SideSticky;
SidebarRightLayout.LeftContent = LeftContent;
