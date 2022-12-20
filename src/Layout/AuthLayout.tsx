
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
      <div className="h-screen flex flex-row flex-wrap ">
        <Sidebar />
        <div className="bg-gray-100 dark:bg-gray-800 flex-1 p-6 md:mt-16">
          
        {children}
         </div>
      </div>
    </>
  );
}
