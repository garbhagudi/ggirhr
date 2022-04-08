import CTA from "components/cta";
import React from "react";

const values = () => {
  return (
    <div className="w-full">
      <section className="relative pt-12 max-w-7xl mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-5/12 ml-auto mr-auto px-2 md:px-7 mt-4 sm:mt-16">
            <img
              alt="..."
              className="max-w-full rounded-3xl shadow-lg mb-10"
              src="https://images.unsplash.com/photo-1647833961026-d44be0f913b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-6/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-4xl font-semibold font-heading mt-4 underline">
                Our Values
              </h3>
              <ul className="list-disc mt-6 pl-4 md:pl-0 text-xl md:text-sm lg:text-xl">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-blueGray-500">
                        Fidelity to our mission and a strong and confident
                        belief in our work.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-blueGray-500">
                        Excellence in the progression of education, research,
                        and patient care.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-blueGray-500">
                        Integrity to hold the highest standards of exemplary
                        ethics and morality.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-blueGray-500">
                        Diversity in actions that appreciate all individuals.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-blueGray-500">
                        Cooperation manifested by institutional communication
                        and collaboration.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-blueGray-500">
                        Respect for people associated with, or come in contact
                        with, GarbhaGudi Institute of Reproductive Health &
                        Research (GGIRHR): staff, students, residents, fellows,
                        faculties, communities, patients, and families.
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default values;
