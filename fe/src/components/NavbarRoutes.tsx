import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const NavbarRoutes = () => {
    return (
        <>
            <div className="hidden md:block">
                <SearchInput />
            </div>
            <div className="flex ml-auto gap-x-2">
                <Link to="/">
                    {/* <Button size="sm" variant="secondary">
                        <LogOut className="w-4 h-4 mr-2" /> Thoát
                    </Button> */}
                </Link>
            </div>
        </>
    );
};

export default NavbarRoutes;
