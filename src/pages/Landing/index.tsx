import { useState } from "react";
import BigNavbar from "./BigNavbar";
import Introduction from "./Introduction";
import WeDoItem from "./WeDoItem";
import Footer from "./Footer"
import SetupUserDrawer from "./SetupUserDrawer"
import SmallNavbar from "./SmallNavbar"
import AlertDialogSlide from "./DialogMui"
import Wrapper from "../../assets/wrappers/Landing/Landing";
import whatWeDo from "../../utils/whatWeDo";

function Landing() {

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isMember, setIsMember] = useState<boolean>(true);

  return (
    <Wrapper>
      <BigNavbar setIsMember={setIsMember} setIsDrawerOpen={setIsDrawerOpen} />
      <SmallNavbar setIsMember={setIsMember} setIsDrawerOpen={setIsDrawerOpen}/>
      <AlertDialogSlide isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setIsMember={setIsMember}
        isMember={isMember} />
      <SetupUserDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setIsMember={setIsMember}
        isMember={isMember}
      />
      <Introduction />
      <div className="w-[100%] justify-center mt-[4.5rem] mb-[4.5rem] flex">
        <div className="w-[75%] flex justify-between items-center gap-5 bg-white lg:flex-col md:flex-col sm:flex-col">
          {whatWeDo.length > 0
            &&
            whatWeDo.map((item) => {
              return (
                <WeDoItem
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
}

export default Landing;
