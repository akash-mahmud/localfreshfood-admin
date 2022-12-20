
interface childrenProps {
  children: JSX.Element;
  title?: String;
}
export default function BasicLayout({ children }: childrenProps) {
  return (
    <>
      <div className="grid h-screen place-items-center">{children}</div>
    </>
  );
}
