import React from 'react';

const Data = [
  {
    id: 1,
    description:
      'Expert team of clinicians trained in reproductive medicine from reputed institutions. They follow standard treatment protocols in ART coupled with innovative process improvements to improve success rates in all aspects of ART. They are committed to conducting prospective and retrospective studies to help improve treatment and ART outcomes.',
  },
  {
    id: 2,
    description:
      'A capable, knowledgeable, and experienced group of skilled embryologists who follow advanced techniques to improve embryology outcomes. They regularly conduct workshops, participate in conferences, andrology & embryology training programs. They are keen on research activities and conducting studies to analyse, predict and improve IVF outcomes.',
  },
  {
    id: 3,
    description:
      'A team of epidemiologists, statisticians, and research co-coordinators to help formulate, collect data, and analyse the research studies.',
  },
  {
    id: 4,
    description:
      'An internal ethical committee of eminent people in their specified areas as per the DCGI guidelines. Regular meetings of the ethical committee are conducted every 6-8 weeks to discuss and approve new projects, review existing projects (if needed), and suggest any necessary corrections.',
  },
  {
    id: 5,
    description:
      'State of the ART software to collect the patient data and analyse the results to develop actionable insights.',
  },
  {
    id: 6,
    description:
      "We have got full-time staff to digitize the patient's clinical data to help in collecting data for the research work.",
  },
];

const Content = () => {
  return (
    <div className='max-w-7xl mx-auto px-3 sm:px-0'>
      <h1 className='py-16 text-center text-4xl font-heading font-bold text-brandDark'>
        Our Research Team
      </h1>
      <ol className='relative border-l border-gray-200 max-w-2xl mx-auto'>
        {Data.map((item) => (
          <li className='mb-10 ml-4' key={item.id}>
            <div className='absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 mt-1.5 border border-white'></div>
            <p className='mb-4 text-base font-normal text-brandDark'>
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;
