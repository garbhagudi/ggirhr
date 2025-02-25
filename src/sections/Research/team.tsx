import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';

const Team = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 lg:py-16'>
      <h3 className='py-10 lg:py-16 text-3xl lg:text-4xl font-heading font-bold text-center'>
        Ethical Committee Members
      </h3>
      <Tab.Group>
        <Tab.List
          className={
            'flex items-center justify-center flex-wrap gap-3 lg:gap-5 px-3 border-b-2 border-brandPink pb-5'
          }
        >
          {teams.map((member, index) => (
            <Tab as={Fragment} key={index}>
              {({ selected }) => (
                <img
                  src={member.image}
                  alt={member.name}
                  className={
                    selected
                      ? 'w-20 h-20 lg:w-24 lg:h-24 object-cover object-center rounded-full ring-4 lg:ring-4 outline-none ring-brandPink bg-brandPink scale-110 transisition-all duration-500 ease-in-out'
                      : 'w-20 h-20 lg:w-24 lg:h-24 object-cover object-center rounded-full ring-2 lg:ring-4 outline-none ring-brandBlue bg-brandBlue transisition-all duration-500 ease-in-out'
                  }
                />
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {teams.map((member, index) => (
            <Tab.Panel key={index} className={'max-w-xl mx-auto'}>
              <div className='grid grid-cols-5 divide-x border-b py-6'>
                <div className='col-span-2 mx-auto'>
                  <div className='rounded-full border-4 border-brandBlue w-24 lg:w-32'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-24 lg:w-32 rounded-full object-cover object-center bg-brandPink3 border-2 border-brandBlue'
                    />
                  </div>
                </div>
                <div className='col-span-3 flex justify-center flex-col'>
                  <h3 className='text-xl lg:text-2xl font-heading font-bold pl-3'>
                    {member.name}
                  </h3>
                  <p className='text-base lg:text-lg font-body font-medium pl-3'>
                    {member.qualification}
                  </p>
                  <p className='text-base lg:text-lg font-body font-medium pl-3'>
                    {member.designation}
                  </p>
                </div>
              </div>
              <div className='border-b px-3 py-2 max-w-xl mx-auto'>
                {member.description}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Team;

const teams = [
  {
    name: 'Dr. Asha S Vijay',
    designation: 'Chairperson',
    qualification: 'MBBS, DGO/DNB, FRM',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1740121070/GGIRHR/Images/m_21_11zon_mumf90.webp',
    description: (
      <div>
        Dr. Asha S Vijay is a pioneer in the field of Assisted Reproduction in
        India with an experience of 27 years in Obstetrics & Gynaecology. She is
        the Founder, Medical Director of GarbhaGudi IVF Centres <br />
        <br />
        “The most humble of ambitions have been the small beginnings of
        greatness”. This quote authentically suite in the life of Dr. Asha S
        Vijay. She was born in a bourgeois family and was eldest of all three
        offsprings of her parents. From the very beginning since her parents
        were working prototype she held up the responsibilities altogether.Right
        from the prime life she cherished with the dream of becoming a doctor
        and accomplished labouriously with allegiance. In pursuit of wellness
        and compassion for others, Dr. Dr. Asha S Vijay. found her passion in
        medicine and graduated from the Bangalore Medical College and started
        her career with Kidwani Institute of oncology, Bangalore as Senior
        resident doctor. She then acquired her post graduation in Obstetrics &
        Gynecology from Bangalore Medical college. While working with KIMS
        Hospital Bangalore she obtained der Diplomate of National Board New
        Delhi and subsequently served as Gazetted medical officer in ESI
        Corporation of India in 1998-2003 <br />
        <br /> Her decision to choose a career in Obstetrics & Gynaecology and
        Fertility was greatly influenced by the virtues instilled in her
        practice that lack of awareness about the causes of infertility and its
        treatments procedures were expensive with bad success rates and were
        barely within the reach of a middle class family . This was when Dr.Asha
        along with a team of first generation entrepreneurs ,decided to approach
        the problem holistically ,to provide world class treatment and services
        at affordable costs. Thus Garbhagudi was born! <br />
        <br />
        She is a specialist in Infertility, Laparoscopy, Gynecology, Obstetrics,
        High Risk Pregnancies and Mentoring. As a renowned Obstetrician and
        Gynaecologist, her experimental and research-based approaches in
        medicine have been an effective solution to the growing infertility.She
        has contributed to significant scientific research developments and in
        the management of the quality of care in the IVF sector best practices
        sharing.
      </div>
    ),
  },
  {
    name: 'Dr Chinmayie R',
    designation: 'Subject Matter Expert',
    qualification: 'MBBS,MS – OBG, FRM',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1740121360/GGIRHR/Images/o_23_11zon_krklyr.webp',
    description: (
      <div>
        Dr Chinmayie is a fertility expert with eight years of experience in
        gynaecology and infertility. She holds a Fellowship in Reproductive
        Medicine from RGUHS and has also been active in the world of academia.
        In addition to her clinical experience, Dr Chinmayie has a compassionate
        and caring nature. She practices at GarbhaGudi and is recognized for
        performing Intra-Uterine Insemination (IUI), in In-Vitro Fertilization
        (IVF), and other such ART techniques. Her mission is to provide the
        highest medical care to all her patients. She is currently the assistant
        medical director of GGIRHR.
      </div>
    ),
  },
  {
    name: 'Dr. Maheshwari M',
    designation: 'Subject Expert',
    qualification: 'MBBS, MS/OBG, FRM',
    image: 'https://media.graphassets.com/GyfBXwJQWm5NpDwnKj2X',
    description: (
      <div>
        Dr Maheshwari is a senior fertility consultant associated with
        GarbhaGudi. Owing to her great desire to specialize further, she
        completed her fellowship in reproductive medicine. She is recognized for
        her expertise in advanced infertility treatments and is known for
        achieving high success rates in IVF, IUI pregnancies, and other such ART
        procedures. She is a skilled professional, is completely passionate
        about her job, and aims to provide the best treatment for her patients.
        She is currently the Assistant Medical Director of GarbhaGudi.
      </div>
    ),
  },
  {
    name: 'Dr. M Asif',
    designation: 'Subject Expert',
    qualification: '',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344385/GGIRHR/Research%20Assets/asif_fvnafw.webp',
    description: (
      <div>
        Working as Senior Embryologist at Garbhagudi IVF Center Pv, Added also
        as a faculty of Medicine for Fellowship in Reproductive Medicine (FRM)
        and Clinical embryology course in GarbhaGudi IVF Centre.Prior to he
        worked as Independent Embryologist at Embrace Fertility Center-
        Primecare Multispecialty Hospital, Bengaluru, and as Associate Professor
        and Head of the Department of Anatomy at Sri Sai College of Dental
        Surgery, Telangana, India. <br />
        <br /> His research focuses on broad themes comprises Effect of
        Prematuration Culture with PDE-3I on Oocyte Morphology and Embryo
        Quality in In-vitro Maturation, TG haplotype in the LRP8 is associated
        with myocardial infarction in the south Indian population,Association
        between Myocardial Infarction and Dermatoglyphics: A study on the
        pterion position variation and its neurosurgical implications, Binary
        logistic regression analysis of hard palate dimensions for sexing human
        crania.His research has also added to Topography of diaphyseal nutrient
        foramina of femora and their implications in bone grafting, Primary
        nutrient foramina of tibia and fibula and their surgical implications.
        “Binary Logistic Regression Analysis of Foramen Magnum Dimensions for
        Sex Determination”.
      </div>
    ),
  },
  {
    name: 'Pandeshwara Suryanarayana Jagannatha',
    designation: 'Biostatistician',
    qualification: '',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687355612/GGIRHR/Research%20Assets/jagannath_c5ttpe.webp',
    description: (
      <div>
        A personality of a challenging management position with the versatility
        of creative thinking, experience of more than 17 years. Enacted as
        General Manager, Bio Statistics and Programming in Glaxo Smith Kline
        Pharmaceuticals Limited, Bangalore.Achieved Setuping program team (5
        people. 12 peopole) to support Japan Studies and phase I studies. Added
        to that he has been appreciated and respected by the customers for
        technical ability, project resourcing skills and customer focus. <br />
        <br /> He also worked as a Statistical Assistant in National
        Tuberculosis Institute,Bangalore, Karnataka training the DTP para
        medical personnel, District Tuberculosis Officers, WHO Fellows (medical
        and para medical) in various statistical procedures, DTP manuals, basic
        medical statistics, computer introduction, epicenter,epiinfo etc. Core
        Committee chair of the Indian Association for Clinical Trails.Organized
        many workshop for Statisticians and Programmers in Pharma
        Industry.Member of Indian Statistical Institute. Life member of Indian
        Association for Statistics in Clinical Trials (IASCT).
      </div>
    ),
  },
  {
    name: 'Dr. S.V. Joga Rao',
    designation: 'Legal Expert',
    qualification: 'LLB, LLM',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344462/GGIRHR/Research%20Assets/Joga_Rao_itjpsv.webp',
    description: (
      <div>
        Dr.S.V. Joga Presently anchoring the professional activities of Legal
        excel – a Law Firm of Advocates, Solicitors and Healthcare Consultants.
        Prior to that he worked as the professor at National Law School of India
        University and he was the Founding faculty Member in the National Law
        School of India University, Bengaluru .As a Professional Advocate and
        Solicitor provided legal services including Litigation, Consultative
        advise for Hospitals, Doctors, Patient Groups, Health Insurance and TPA
        entities, Professional Associations of Doctors, Technology Companies,
        Diagnostic Labs and several technology driven healthcare startups.
      </div>
    ),
  },
  {
    name: 'Dr. Govinda Raju',
    designation: 'Social Scientist',
    qualification: '',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344384/GGIRHR/Research%20Assets/govind_Raaju_a0udjv.webp',
    description: (
      <div>
        Working as Associate Professor in the Department of Sociology at
        Mangalore University, India.Prior to this he was the principal at Sri
        Devi Institute of Social Work, Mangalore. He has coauthored a study on
        the psycho-familial problems of male Delinquent in North Karnataka
        Region. Published a case study of Mangalore city slum, quality of life
        among Slum Women in the Journal of Economics and Sustainable Development
        .The concept of Tribe And Status of women: a sociological perspective,
        was published in the SELP Journal of Social Science. Professional Social
        Work Opinion of married people, “Women and Work” “Urban sociology and
        its theories”: are his Edited books.
      </div>
    ),
  },
  {
    name: 'Dr. Prabhakar Adake',
    designation: 'Basic Medical Scientist',
    qualification: '',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344384/GGIRHR/Research%20Assets/Prabhakar_qffapb.webp',
    description: (
      <div>
        Working as Associate Professor of Pharmacology at Yenepoya Medical
        College, Yenepoya University, Mangalore, India. His research is diverse
        in nature which includes Preclinical evaluation of anxiolytic activity
        of Adhatoda Vasica leaf extract in Swiss albino mice, Analyzing adverse
        drug reaction patterns in a tertiary care hospital of Dakshina Kannada
        district, Effect of Artocarpus heterophyllus phenolic seed extract in
        animal models of anxiety, Comparison of Vitamin D Levels between
        Genders, Age Groups and Geographical Locations in a Tertiary Care
        Hospital of Dakshina Kannada. <br /> <br /> His extensive research
        carried out in the topics like Effect of artocarpus
        heterophyllusphenolic seed extract in animal models of depression,
        Antidepressant activity of Trigonella foenum leaves in Wistar albino
        rats. Study on Prescribing Pattern of Antihypertensive Drugs in a
        Tertiary Care Hospital. Role of NMDA Antagonists in Animal Models of
        Depression and Comparison of amlodipine with cilnidipine on
        antihypertensive efficacy and incidence of pedal edema in mild to
        moderate hypertensive individuals.
      </div>
    ),
  },
  {
    name: 'Dr. Damodara Gowda KM',
    designation: 'Subject Expert',
    qualification: '',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344384/GGIRHR/Research%20Assets/Damodar_lutmch.webp',
    description: (
      <div>
        Dr. Damodara Gowda K M is an Associate Professor at Nitte University,
        Karnataka, India. He received his PhD in Physiology from K.S.Hegde
        Medical Academy, Nitte (Deemed to be University) in 2013. He also holds
        a Master of Science (Medical Physiology) from Kasturba Medical College,
        Manipal University. <br />
        <br /> Dr. Gowda&apos;s research interests include cardiovascular
        physiology, exercise physiology, and metabolic syndrome. He has
        published several papers in peer-reviewed journals and has presented his
        work at national and international conferences. He is also a member of
        several professional organizations, including the Indian Academy of
        Physiology and the American Physiological Society. <br />
        <br /> In addition to his research, Dr. Gowda is also actively involved
        in teaching and mentoring students. He is the coordinator of the
        Physiology department at Nitte University and is also a mentor to
        several PhD students. He is also a member of the GarbhaGudi Institute of
        Reproductive Health and Research (GGIRHR) and is assisting them on
        various research studies. <br />
        <br /> Dr. Gowda is a highly accomplished and experienced researcher who
        is making significant contributions to the field of physiology. He is
        also a dedicated teacher and mentor who is passionate about helping
        students reach their full potential.
      </div>
    ),
  },
  {
    name: 'Dr. MS Mustak',
    designation: 'External Member',
    qualification: '',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344384/GGIRHR/Research%20Assets/mustak_sdlh8a.webp',
    description: (
      <div>
        He pursues the Postdoctoral Fellow at Institute for Regenerative
        Medicine and Biofunction, Graduate School of Medical Science, Tottori
        University, Yonago, Tottori, Japan. Working as Professor at Department
        of Applied Zoology, Mangalore University. <br />
        <br /> His fellowship and awards are splendid in which few are GATE
        1999, CSIR National Eligibility Test (NET) , Awarded DST-DAAD Fellowship
        to work in Dr. Thomas Jovin’s Lab, MaxPlank Institute of Biophysical
        Chemistry, Gottingen, Germany,Awarded Postdoctoral Fellowship to work in
        Dr. S.Meshitsuka’s Lab, Institute for Regenerative Medicine and
        Biofunction, Graduate School of Medical Science, Tottori University,
        Yonago, Tottori. SERB-ITS Travel award” for presentation in ASHG 2017
        conference, Orlando Florida. Awarded Indian Sciences Academies’ Summer
        Research Fellowship to work in Indian Institute of Sciences, Bangalore
        by Indian academy of Sciences. Awarded Indian Sciences Academies’ Summer
        Research Fellowship to work in CCMB-Hyderabad by Indian academy of
        Sciences, Bangalore. <br />
        <br /> His research experience is widespread with the topics associates
        Glucosederived rGO/Zn0. 4Co0. 6Fe2O4 Superparamagnetic nanohybrid
        Synthesis, characterization and evaluation of cytotoxicity. Dissecting
        the genetic history of the Roman Catholic populations of West Coast
        India. Synthesis and characterization of Zn0. 4Co0. 6Fe2O4
        Superparamagnetic nanoparticles as a promising agent against
        proliferation of colorectal cancer cells. Heterogeneity in Hematological
        Parameters of High and Low Altitude Tibetan Populations. Estimation of
        real-infection and immunity against SARS-CoV-2 in Indian populations,
        Ancient DNA: revisiting past through population genomics.
      </div>
    ),
  },
  // {
  //   name: 'Dr. Anusha ',
  //   designation: 'Alumni Member ',
  //   qualification: '',
  //   image:
  //     'https://res.cloudinary.com/garbhagudiivf/image/upload/v1687344383/GGIRHR/Research%20Assets/woman_yftsnf.webp',
  //   description: <div></div>,
  // },
];
