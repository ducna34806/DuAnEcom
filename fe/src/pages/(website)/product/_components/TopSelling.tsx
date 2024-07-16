/* eslint-disable @typescript-eslint/no-explicit-any */

const TopSelling = () => {
    return (
        <>
            {/* top best selling */}
            <div className="bg-[#F2F6F4] w-full lg:rounded-2xl lg:pt-[25px] lg:pb-6 lg:px-8 pt-[22px] pb-4">
                <strong className="lg:text-2xl mb:text-lg lg:tracking-[-0.5px] mb:mx-11 lg:mx-0 font-medium">
                    Top Selling
                </strong>
                <div className="lg:w-auto mb:w-full mx-auto overflow-x-auto snap-x scroll_dragging duration-300 scroll-smooth hidden_scroll_x grid grid-flow-col *:lg:w-[282.67px] *:mb:w-[240px] lg:pt-[27px] mb:pt-6 lg:gap-x-[32px] gap-x-6">
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src="../Images/product_5.png"
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="flex flex-col items-center justify-between w-full gap-y-5">
                            <div className="flex flex-col items-center gap-y-2">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src="../Images/product_5.png"
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="flex flex-col items-center justify-between w-full gap-y-5">
                            <div className="flex flex-col items-center gap-y-2">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src="../Images/product_5.png"
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="flex flex-col items-center justify-between w-full gap-y-5">
                            <div className="flex flex-col items-center gap-y-2">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src="../Images/product_5.png"
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="flex flex-col items-center justify-between w-full gap-y-5">
                            <div className="flex flex-col items-center gap-y-2">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] snap-center lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-4 mb:gap-y-[46px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#ffffff] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src="../Images/product_5.png"
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="flex flex-col items-center justify-between w-full gap-y-5">
                            <div className="flex flex-col items-center gap-y-2">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center line-clamp-2 mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopSelling;
