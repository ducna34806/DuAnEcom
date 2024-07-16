/* eslint-disable @typescript-eslint/no-explicit-any */

const FilterPrice = () => {
    return (
        <>
            {/* price */}
            <section className="flex flex-col pb-6 border-b pr-7">
                <span className="text-[#717378] text-xs tracking-[1px]">
                    FILTER BY PRICE
                </span>
                <div className="flex justify-between *:px-2.5 my-5 *:py-1 *:bg-[#F4F4F4] *:rounded-[100px] *:text-xs">
                    <div>$0</div>
                    <div>$50.000.00</div>
                </div>
                <input type="range" className="h-[2px] bg-black" />
                <button className="w-[103px] mt-6 h-[40px] rounded-[1000px] bg-[#17AF26] text-white">
                    Apply
                </button>
            </section>
        </>
    );
};

export default FilterPrice;
