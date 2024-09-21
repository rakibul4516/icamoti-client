import { Outlet } from "react-router-dom";
import ShoppingPageHeader from "./header";

const ShoppingPage = () => {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header component */}
            <ShoppingPageHeader/>
            <main className="flex flex-col w-full">
                <Outlet/>
            </main>
        </div>
    );
};

export default ShoppingPage;