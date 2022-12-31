
import { useState } from 'react';
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar';
interface childrenProps {
  children: JSX.Element;
  title?:String
}
export default function AuthLayout({ children }: childrenProps) {
      const [isOpen, setIsOpen] = useState(false);
      const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
      };
  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="h-screen flex flex-row flex-wrap ">
        <Sidebar
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          setIsOpen={setIsOpen}
        />
        <div className="bg-gray-100 dark:bg-gray-800 flex-1 p-6 md:mt-16 md:max-w-['79.7%']">
          {children}
        </div>
      </div>
    </>
  );
}
