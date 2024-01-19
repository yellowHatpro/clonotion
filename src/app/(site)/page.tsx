import * as React from 'react';
import TitleSection from "@/components/landing_page/title_section";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {appBanner} from "../../../public";
const HomePage = () => {
    return (
        <>
            <section className={"px-4 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center"}>
                <TitleSection title={"The ultimate Notion Killer has arrived 😎"} pill={"✨ FROM YELLOWHATPRO"}/>
                <div className={"bg-white p-[2px] m-8 rounded-xl bg-gradient-to-r from-ctp-flamingo to-ctp-lavender w-fit"}>
                    <Button variant={"secondary"} className={"w-fit rounded-[11px] py-6 px-14 text-2xl bg-ctp-crust"}>
                        Get Clonotion
                    </Button>
                </div>
                <div className={"p-4 m-4 rounded-xl"}>
                        <Image src={appBanner}
                               alt={"App Banner"}
                               className={"shadow-2xl shadow-ctp-rosewater rounded-xl"}/>
                </div>
            </section>
        </>
    );
};
export default HomePage
