import React from "react";
import Link from "next/link";

const Data = [
  {
    id: 1,
    Name: "IMA-AMS Fellowship in Infertility",
    details:
      "GGIRHR offers a well-structured Infertility Fellowship Program, affiliated with the Indian Medical Association - Academy of Medical Specialties. The selected candidates shall be trained in Infertility by dedicated faculties with exceptional experiences. Also, this fellowship is explicitly designed for doctors who have busy practices and will not be able to spare time to attend classes amidst their hectic schedules..",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/IMA-AMS_Fellowship_in_Infertility_Web-min_qsenpy.jpg",
    link: "/course/ima-ams-fellowship-in-infertility",
  },
  {
    id: 2,
    Name: "RGUHS Fellowship in Reproductive Medicine",
    details:
      "Our institution offers a Fellowship in Reproductive Medicine (FRM), affiliated with the prestigious Rajiv Gandhi University of Health Sciences, to train obstetricians and gynaecologists in reproductive medicine. This program is conducted by a multidisciplinary team of renowned fertility experts and embryologists practising at GarbhaGudi. It helps the candidates to gain thorough knowledge in reproductive physiology, endocrinology, medical and surgical treatment of infertility and Assisted Reproductive Technologies in Infertility.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/RGUHS_Fellowship_in_Reproductive_Medicine_Web-min_divc6o.jpg",
    link: "/course/rguhs-fellowship-in-reproductive-medicine",
  },
  {
    id: 3,
    Name: "Institutional Fellowship in Reproductive Medicine",
    details:
      "This is a rigorous program for doctors to engage in infertility medicine. The candidate will have enormous exposure to a wide range of practices and assist the senior specialists from the initial consultation, infertility scans & extensive procedures like hysteroscopy, laparoscopy, ovum pickup, embryo transfer, and other surgical procedures TESA & PESA, etc.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/Institutional_Fellowship_in_Reproductive_Medicine_Web-min_jigtbe.jpg",
    link: "/courses/institutional-fellowship-in-reproductive-medicine",
  },
  {
    id: 4,
    Name: "Non-Resident Fellowship in Infertility",
    details:
      "This course is developed exclusively for Non-Resident Indians (NRIs) and helps candidates become certified consultants to practice reproductive medicine, specializing in infertility. The extensive training in infertility by well-qualified faculties equips aspiring doctors with tremendous knowledge and practical exposure to observations of advanced techniques and major procedures like IUIs, ovum pickups, embryo transfers, etc.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/Non-Resident_Fellowship_in_Infertility_Web-min_xiatrk.jpg",
    link: "/courses/non-resident-fellowship-in-infertility",
  },
  {
    id: 5,
    Name: "Comprehensive Ultrasound Scan Training",
    details:
      "The Comprehensive Ultrasound Scan Training provided at GGIRHR comes with the aid of the world’s best scan simulator. It also has a vast library of cases loaded into the cloud, covering all obstetrics, gynaecology, and infertility scenarios. Candidates are trained from the fundamentals of scanning (planes, basic anatomy, identifying structures to advanced topics like various types of fibroids, myomas, cysts, early pregnancy, ectopic pregnancy, uterine anomalies, etc.) till they learn the intricacies. The system automatically tracks their progress and records it. It can provide feedback and measure progress. A senior instructor can also go through each case and provide individual feedback to the candidates.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/Comprehensive_Ultrasound_Scan_Training_Web-min_glpnij.jpg",
    link: "/courses/comprehensive-ultrasound-scan-training",
  },
  {
    id: 6,
    Name: "Institutional Diploma in Embryology",
    details:
      "This course is designed to help candidates in the learning process using various methodologies, including interactive lectures, assignments, laboratory rotations, and much more. At the end of the course, every individual will acquire core competencies in IVF, ICSI, gamete, embryo cryopreservation, laser hatching, semen analysis, quality control, isolating and culture of embryos, etc. are the essentials of treatment modalities for infertile patients.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/Regular_Embryology_Web-min_dnpmda.jpg",
    link: "/courses/institutional-diploma-in-embryology",
  },
];

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl px-4 xl:px-0 py-4 mx-auto">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-4xl font-bold mb-2 text-gray-900 text-center font-heading">
              Courses
            </h1>
            <h3 className="text-center max-w-3xl mx-auto font-semibold mt-4 text-gray-900">
              Check out our most popular courses below
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
          {Data.map((item) => (
            <Link href={item.link} passHref key={item.id}>
              <div className="hover:shadow-2xl rounded-3xl cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="rounded-t-3xl"
                    src={item.image}
                    alt={item.Name}
                  />
                  <div className="border-r-2 border-l-2 border-b-2 rounded-b-3xl bg-gray-50">
                    <h2 className="text-lg text-gray-900 font-medium title-font py-4 md:ml-2 text-center md:text-left">
                      {item.Name}
                    </h2>
                    <p className="leading-relaxed text-base md:ml-2 text-center md:text-left mb-6 ">
                      {item.details.slice(0, 100)}...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/courses">
          <a className="px-4 py-3 bg-brandBlue hover:bg-brandBlueDark3 text-white font-semibold rounded-xl">
            See All Courses
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Features;
