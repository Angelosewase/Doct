
import Sidenav from "../ui/dashboard/Sidenav";
import PagesTop from "../ui/pagesTops";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="">
         <Sidenav />
          <div className="md:ml-[220px] "> 
           <PagesTop />
           {children}
           </div>
      </div>
    );
  }