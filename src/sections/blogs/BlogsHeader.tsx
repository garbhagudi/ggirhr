import React from "react";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";

type SearchProps = {
  defaultQuery?: string;
  /** Called with the trimmed term; `""` means clear the search. */
  onSearch?: (term: string) => void;
};

// The GET action is the no-JS fallback; with JS the page handles `onSearch`.
const SearchBar = ({ defaultQuery = "", onSearch }: SearchProps) => (
  <form
    action="/blogs/page/1"
    method="get"
    role="search"
    onSubmit={(e) => {
      if (!onSearch) return;
      e.preventDefault();
      onSearch(String(new FormData(e.currentTarget).get("q") ?? "").trim());
    }}
    className="mx-auto flex h-[50px] w-full max-w-[481px] rounded-[10px] border border-transparent bg-white p-[5px] shadow-[0_4px_54px_rgba(0,0,0,0.08)] transition-colors focus-within:border-[#1DA8E1] focus-within:shadow-[0px_4px_24px_#BAEFFF] sm:h-[60px]"
  >
    <input
      // Remount when the active query changes so defaultValue follows it.
      key={defaultQuery}
      type="search"
      name="q"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      defaultValue={defaultQuery}
      onInput={(e) => {
        // The native clear "×" empties the field: drop the active search.
        if (!e.currentTarget.value && defaultQuery) onSearch?.("");
      }}
      placeholder="Search blog..."
      aria-label="Search blogs"
      className="min-w-0 flex-1 bg-transparent px-3 text-[13px] text-[#111111] placeholder:text-[#848484] focus:outline-none sm:text-base"
    />
    <Button
      type="submit"
      variant="primary"
      rounded="md"
      className="h-full px-4 !text-[#F1F1F1] sm:w-[85px]"
    >
      Search
    </Button>
  </form>
);

const BlogsHeader = ({
  defaultQuery,
  onSearch,
  children,
}: SearchProps & { children?: React.ReactNode }) => (
  <section className="relative overflow-x-clip pt-4 sm:pb-20 sm:pt-16">
    <Glow className="hidden sm:block -left-[180px] -top-[120px] h-[454px] w-[454px] bg-[rgba(142,230,255,0.55)] blur-[102px]" />
    <Glow className="hidden sm:block -right-[160px] top-[40px] h-[454px] w-[454px] bg-[rgba(142,230,255,0.5)] blur-[102px]" />

    <div className="relative mx-5 overflow-hidden rounded-xl bg-[#D2EEF9] px-5 pb-[200px] pt-14 text-center sm:mx-0 sm:overflow-visible sm:rounded-none sm:bg-transparent sm:px-5 sm:py-0">
      <RibbonWave
        color="#FFFFFF"
        width={200}
        height={80}
        className="absolute left-4 top-4 z-10 w-[80px] -rotate-[12.21deg] sm:-rotate-[7.36deg] sm:left-[146px] sm:top-[40px] sm:w-[172px]"
      />
      <RibbonWave
        color="#FFFFFF"
        width={200}
        height={80}
        className="absolute right-[140px] top-[110px] z-10 hidden w-[172px] rotate-[25.52deg] sm:block"
      />

      <div className="relative z-20 flex flex-col items-center gap-3 sm:gap-4">
        <Chip variant="pink" className="uppercase">
          Insights
        </Chip>
        <h1 className="text-[31px] leading-tight text-black sm:text-[61px] sm:leading-[50px]">
          Our <span className="font-bold text-primaryBlue">Blogs</span>
        </h1>
        <div className="mt-3 w-full sm:mt-5">
          <SearchBar defaultQuery={defaultQuery} onSearch={onSearch} />
        </div>
        {children}
      </div>
    </div>
  </section>
);

export default BlogsHeader;
