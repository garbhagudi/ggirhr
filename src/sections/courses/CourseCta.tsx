import React from "react";
import Button from "components/ui/Button";
import RibbonWave from "components/ui/RibbonWave";
import WhatsAppButtonIcon from "components/ui/icons/WhatsAppButtonIcon";
import { WHATSAPP_HREF } from "lib/contact";

const RIBBON_COLOR = "#4AB4E8";

const CourseCta = ({ slug }: { slug?: string }) => (
  <div className="relative z-20 -mb-[100px] px-5 sm:-mb-[190px]">
    <div className="relative mx-auto max-w-[1140px] overflow-hidden rounded-xl bg-[#1DA8E1] px-6 pb-10 pt-[46px] text-center font-primary shadow-[0_3.7px_41px_rgba(0,0,0,0.09)] sm:rounded-[20px] sm:bg-[#259DCE] sm:pb-[81px] sm:pt-[78px]">
      <RibbonWave
        color={RIBBON_COLOR}
        width={199}
        height={78}
        className="absolute left-[5px] top-[9px] w-[77px] -rotate-[20deg] sm:left-9 sm:top-[29px] sm:w-[199px] sm:-rotate-[7deg]"
      />
      <RibbonWave
        color={RIBBON_COLOR}
        width={199}
        height={78}
        className="absolute right-3 top-2 w-[77px] rotate-[21deg] sm:right-[23px] sm:top-[19px] sm:w-[199px] sm:rotate-[13deg]"
      />

      <div className="relative z-10">
        <h2 className="text-center text-[23px] font-normal leading-tight text-[#F1F1F1] sm:text-[46px]">
          Ready to get <span className="font-bold">started?</span>
        </h2>
        <p className="mt-2 text-center text-[13px] font-semibold leading-6 text-[#DEDEDE] sm:mt-3 sm:text-base">
          We&apos;re here to provide information, advice, support.
        </p>
        <div className="mt-5 flex justify-center gap-[10px] sm:mt-6 sm:gap-[17px]">
          <Button
            href={`/contact?pageVisit=/courses/${slug ?? ""}`}
            variant="primary"
            rounded="sm"
            className="!bg-[#F1F1F1] !text-black !shadow-none hover:!bg-white sm:leading-[30px]"
          >
            Contact Us
          </Button>
          <Button
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            rounded="sm"
            className="!border !border-[#F1F1F1] !text-[#F1F1F1] hover:!bg-white/10 sm:leading-[30px]"
            leftIcon={
              <WhatsAppButtonIcon
                size={26}
                className="h-4 w-4 sm:h-[26px] sm:w-[26px]"
              />
            }
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCta;
