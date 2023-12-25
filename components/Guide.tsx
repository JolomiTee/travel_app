import Image from "next/image";

const Guide = () => {
	return (
		<section className="flexCenter flex-col">
			<div className="padding-container max-container w-full pb-24">
				<Image src="/camp.svg" alt="capm" width={50} height={50} />
				<p className="uppercase  regular-18 -mt-1 mb-3 text-green-50">
					We are here for you
				</p>

				<div className="flex flex-wrap justify-between gap-5 lg:gap-10">
					<h2 className="bold-40 lg:bold-64 xl:max-w-[390px] ">Guide you to easy path</h2>
					<p className="regular-16 text-gray-30 xl:max-[520px]">
						Hilink provides every need for your trip, hiking and outing
						activities down to the lat detail. You just sit back and relax while
						we do our thing! We'd also love to let you know that our trips are free once you determine that our planning went wrong, we give you 100% cashback with an appreciation note.
					</p>
				</div>
			</div>

                     <div className="flexCenter max-container relative w-full">
                            <Image
                                   src='/boat.png'
                                   alt="boat"
                                   width={1440}
                                   height={580}
                                   className="w-full object-cover object-center xl:rounded-5xl"
                            />

                            <div className="absolute flex bg-white py-8 pl-5 pr-7 rounded-3xl border shadow-md md:left-[5%] lg:top-20 gap-3">
                                   <Image
                                          src="/meter.svg"
                                          alt="meter"
                                          width={16}
                                          height={158}
                                          className="h-full w-auto"
                                   />
                                   <div className="flexBetween flex-col">
                                          <div className="flex w-full flex-col">
                                                 <div className="flexBetween gap-8 w-full">
                                                        <p className="regular-16 text-gray-20">Destination</p>
                                                        <p className="bold-16 text-green-50">18 mins</p>
                                                 </div>
                                                 <p className="bold-20 mt-2">Jabi Lake Mall</p>
                                          </div>
                                          <div className="flex w-full flex-col">
                                                        <p className="regular-16 text-gray-20">Start Track</p>
                                                 <p className="bold-20 mt-2 whitespace-nowrap">Your House</p>
                                          </div>
                                   </div>
                            </div>
                     </div>
		</section>
	);
};

export default Guide;
