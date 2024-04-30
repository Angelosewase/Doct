import React from "react";
import MessagesSideNav from "@/app/ui/messages/messagesSideNav";

const Roolayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MessagesSideNav />
      {children}
    </div>
  );
};

export default Roolayout;
