
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar';
interface childrenProps {
  children: JSX.Element;
  title?:String
}
export default function AuthLayout({ children }: childrenProps) {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-row flex-wrap">
<Sidebar/>
      </div>
      {children}
    </>
  );
}
