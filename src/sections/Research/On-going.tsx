import Link from "next/link";

const posts = [
  {
    title: "Computer Aided Semen Analysis",
    href: "#",
    category: {
      name: "Study",
      href: "#",
      color: "bg-brandBlue text-white",
    },
    description:
      "The study on computer-assisted semen analysis versus the manual approach: A retrospective cross-sectional study.",
  },
  {
    title: "Impact of DNA Fragmentation on IUI",
    href: "#",
    category: {
      name: "Study",
      href: "#",
      color: "bg-brandBlue text-white",
    },
    description:
      "The study on the impact of sperm DNA fragmentation index on intrauterine insemination outcomes.",
  },
  {
    title: "Clinical Pregnancy Rate in Day 3 and Day 5 Embryo Transfer",
    href: "#",
    category: {
      name: "Study",
      href: "#",
      color: "bg-brandBlue text-white",
    },
    description:
      "The study on clinical pregnancy rate in day three and day five embryo transfer: A cross-sectional retrospective study.",
  },
  {
    title: "Sperm DFI impact on semen parameters in Diabetic Patients",
    href: "#",
    category: {
      name: "Study",
      href: "#",
      color: "bg-brandBlue text-white",
    },
    description:
      "The study on the impact of Sperm DNA fragmentation index on semen parameters in diabetic patients.",
  },
  {
    title: "Impact of COVID-19 Vaccine in Male Infertility",
    href: "#",
    category: {
      name: "Study",
      href: "#",
      color: "bg-brandBlue text-white",
    },
    description:
      "Impact of COVID-19 vaccination on male infertility: A multi-centric retrospective cohort study.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Ongoing = () => {
  return (
    <div>
      <div className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-8 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl font-heading">
              Internship
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              The Research Internship Topics include:
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <span
                    className={classNames(
                      post.category.color,
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    )}
                  >
                    {post.category.name}
                  </span>
                </div>
                <div className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900 h-12">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mx-auto max-w-7xl mt-16">
          <button className=" px-6 py-2 rounded-2xl bg-brandBlue hover:bg-brandBlueDark3 text-white font-semibold">
            <Link href={"#cta"}>Know More </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
