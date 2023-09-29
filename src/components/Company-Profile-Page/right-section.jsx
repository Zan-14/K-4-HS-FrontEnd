import { Link } from "react-router-dom";

const RightSection = () => {
  return (
    <div className="h-fit min-h-[606px] bg-white rounded-xl px-5">
      <div className="flex py-5 items-center">
        <div>
          <img
            className="w-24 h-24 p-1 border border-grayborder rounded-full"
            src="img/fotoProfilPerusahaan.png"
            alt="fotoProfilPerusahaan"
          />
        </div>
        <div className="px-2">
          <h2 className="text-xl text-bluetext">PT. Kelompok Empat</h2>
          <p className="text-xs text-graytext my-2.5">
            (+62) 81234567890 | kelompokempat@gmail.com | <br /> Jakarta Timur,
            DKI Jakarta
          </p>
        </div>
      </div>
      <div className="h-0.5 bg-graybg"></div>
      <div className="pt-8 pb-3">
        <div className="flex gap-2.5 items-center font-medium">
          <h3>Tentang Perusahaan</h3>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.36744 2.26465H2.19276C1.87642 2.26465 1.57304 2.39032 1.34935 2.61401C1.12567 2.83769 1 3.14108 1 3.45743V11.8069C1 12.1232 1.12567 12.4266 1.34935 12.6503C1.57304 12.874 1.87642 12.9997 2.19276 12.9997H10.5421C10.8585 12.9997 11.1618 12.874 11.3855 12.6503C11.6092 12.4266 11.7349 12.1232 11.7349 11.8069V7.63215"
                stroke="#545B6A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8404 1.37055C11.0776 1.13329 11.3994 1 11.735 1C12.0705 1 12.3923 1.13329 12.6295 1.37055C12.8668 1.60781 13.0001 1.9296 13.0001 2.26513C13.0001 2.60067 12.8668 2.92246 12.6295 3.15972L6.9639 8.82541L4.57837 9.4218L5.17475 7.03625L10.8404 1.37055Z"
                stroke="#545B6A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="pt-5">
          <p>
            is a software a software development company that develops
            innovative smart city solutions.
            <br />
            <br />
            We are software company based in Singapore, Indonesia and the
            Netherlands. We focus on developing applications within the field of
            mobility, logistics and blockchain technology, projects that have a
            positive impact all over the world.
            <br />
            <br />
            Our client base is very diverse, from the world&apos;s largest
            companies to fast growing medium sized companies and innovative
            start-ups. Every day we wake up with one common goal, which is to
            develop software that has a positive impact. With that common dream
            it is important to be open-minded, work together with clients
            outside of Indonesia and learn how to work with colleagues from
            different nationalities.
            <br />
            <br />
            Within our team we believe in helping each other, that it is alright
            to make a mistake and to constantly improve together. To constantly
            improve and to become a real professional within your field our firm
            provides great benefits such a free language course, free
            certifications for your specific job role and have amazing company
            trips. <br />
            <br />
            Once a month we experiment with new technologies that we call our
            &quot;experiment day&quot; a day without the force of labor and just
            learn new things. How do you build a rocket? Develop supporting
            hardware and software to clean up the rivers around Indonesia. There
            are budgets for education, kids allowance and housing allowance
            available to all our team members who are joining our adventure. Are
            you ready for the next step?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
