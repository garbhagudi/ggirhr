import React from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import SectionShell from "components/ui/SectionShell";

export type Leader = {
  id: string;
  name: string;
  slug: string;
  designation?: string | null;
  image: { url: string };
  bioPreview?: string | null;
};

const LeaderCard = ({ leader }: { leader: Leader }) => (
  <article className="flex flex-col rounded-xl lg:rounded-[20px] bg-white p-3 lg:p-[18px] shadow-[0px_4px_54px_rgba(0,0,0,0.12)]">
    <div className="relative aspect-[519/450] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#FEC6D3]">
      <Image
        src={leader.image.url}
        alt={leader.name}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-top"
      />
    </div>

    <div className="flex flex-1 flex-col px-1.5 pt-5 lg:px-2.5 lg:pt-6 text-[#374151]">
      <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-tight text-[#1DA8E1]">
        {leader.name}
      </h3>
      {leader.designation && (
        <p className="mt-1.5 text-base sm:text-lg lg:text-xl lg:leading-6">
          {leader.designation}
        </p>
      )}
      {leader.bioPreview && (
        <p className="mt-4 text-left text-[13px] leading-5 font-semibold sm:text-base sm:leading-6 lg:text-lg lg:leading-[27px]">
          {leader.bioPreview}
        </p>
      )}
      <Button
        href={`/about/leadership/${leader.slug}`}
        variant="link"
        size="inline"
        rounded="md"
        className="mt-auto self-start pt-6 font-bold !text-base lg:!text-lg"
      >
        Read More
      </Button>
    </div>
  </article>
);

const Leadership = ({ leaders = [] }: { leaders?: Leader[] }) => {
  if (leaders.length === 0) return null;

  return (
    <section className="bg-white py-14 lg:py-20">
      <SectionShell>
        <Chip variant="pink" size="sm" className="px-4 tracking-widest">
          OUR LEADER
        </Chip>
        <h2 className="font-heading text-black text-[23px] sm:text-[36px] lg:text-[46px] leading-tight mt-4 sm:mt-4 mb-8 lg:mb-10">
          Leadership <span className="text-[#1DA8E1] font-bold">Team</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px]">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </SectionShell>
    </section>
  );
};

export default Leadership;
