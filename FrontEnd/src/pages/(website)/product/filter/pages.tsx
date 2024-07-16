/* eslint-disable @typescript-eslint/no-explicit-any */

import FilterOrder from "./FillterOrder";
import FilterPrice from "./FilterByPrice";
import FilterCategory from "./FilterCategory";
import FilterReview from "./FilterReview";

const FilterPage = () => {
    return (
        <>
            {/* filter */}
            <div className="lg:block hidden py-3 mt-0.5">
                <FilterCategory />
                <FilterPrice />
                <FilterOrder />
                <FilterReview />
                {/* clear filters */}
                <button className="bg-[#F3FBF4] rounded-[100px] text-[14px] leading-[21px] text-[#17AF26] mt-5 h-10 px-8">
                    Clear Filters
                </button>
            </div>
        </>
    );
};

export default FilterPage;
