import ProfilePicture from "../../assets/profile.jpg";
const Home = () => {
  return (
    <>
      {/* Profile Section */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between w-full gap-6">
        <div className="text-center md:text-left">
          <h1 className="capitalize md:uppercase font-bold text-purple-800 text-3xl md:text-4xl mt-5">
            Jhon Carlos Tamba
          </h1>
          <p className="text-gray-600 text-base md:text-lg mt-1">
            Software Engineer II
          </p>
          <p className="text-gray-600 text-base md:text-lg mt-1">
            Pines Peak Barangka Ilaya Mandaluyong City, Philippines
          </p>
          <p className="text-gray-600 text-base md:text-lg mt-1">
            0938-814-3433 |{" "}
            <a
              href="mailto:jhon.carlos.cortez.tamba@gmail.com"
              className="text-blue-500 hover:underline"
            >
              jhon.carlos.cortez.tamba@gmail.com
            </a>
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={ProfilePicture}
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover"
          />
        </div>
      </div>
      <hr className="mt-3 border-t-2" />
      {/* Career Objective */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-purple-800">Career Objective</h2>
        <p className="text-gray-600 mt-2">
          Motivated and detail-oriented Software Engineer seeking to leverage my
          expertise in full-stack development, backend systems, and modern web
          technologies to contribute to innovative projects and the continued
          success of your organization.
        </p>
      </div>
      {/* Education */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-purple-800">Education</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li className="font-bold">
            Bachelor of Science in Information Technology
          </li>
          <p>
            Quezon City University - 2019 - 2023 <br /> 673 Quirino Highway,
            Novaliches, Quezon City
          </p>
          <li className="font-bold">
            Bachelor of Science in Information Technology
          </li>
          <p>
            Quezon City University - 2019 - 2023
            <br />
            673 Quirino Highway, Novaliches, Quezon City
          </p>
          <li className="font-bold">
            Senior High School (Information & Communications Technology)
          </li>
          <p>
            Electron College - 2016 - 2018 <br />
            San Bartolome, Novaliches, Quezon City
          </p>
          <li className="font-bold">Junior High School</li>
          <p>
            San Bartolome High School - 2012 - 2016 <br />
            Novaliches, Quezon City
          </p>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-purple-800">Technical Skills</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <span className="font-bold">Frontend:</span>ReactJS, VueJS,
            Typescript, Javascript, MudBlazor, DevExpress, Blazor, Razor
          </li>
          <li>
            <span className="font-bold">Backend:</span> Laravel (PHP), ASP.Net,
            C#, Java
          </li>
          <li>
            <span className="font-bold">Database:</span> MySQL, SQL Server,
            Snowflake, CosmosDb
          </li>
          <li>
            <span className="font-bold">Tools & Services:</span> GraphQL,
            SignalR, EventGrid, Azure Service Bus, Hangfire, Azure Keyvault
            Secrets, Azure Storage Blob, DevOps, Argos, Github
          </li>
          <li>
            <span className="font-bold">Other:</span> Microsoft Office, Adobe
            Photoshop, Hardware & Software Troubleshooting, Network Setup
          </li>
          <li>
            <span className="font-bold">Soft Skills:</span> Fast learner,
            detail-oriented, and highly resourceful
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-purple-800">Work Experience</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <span className="font-bold">Software Engineer II</span>
          </li>
          <p>
            Arch Global Services Philippines Inc. - April 2026 – Present <br />
            MK Tan Centre, 30th St, Taguig City
          </p>
          <li className="ms-5">
            Developed ART (Activity Resource Tracker) using MudBlazor, SignalR,
            and SQL
          </li>
          <li className="ms-5">
            Contributed to MDM (Master Data Management System) using React,
            TypeScript, GraphQL, and C#
          </li>
          <li className="ms-5">
            Implemented backend logic integrated with Snowflake, Azure
            EventGrid, Service Bus, and Hangfire
          </li>
          <li className="ms-5">
            Contributed to CVT (Contract Validation Tool System) using React,
            Typescript, C# .Net, Cosmos Db, Argos
          </li>
          <li className="ms-5">
            Support to ACW (Accounting Workflow System) using React, Typescript,
            C# .Net, SQL
          </li>
          <li className="ms-5">
            Support to Regis (Regis Windows Application) using WPF, C# .Net, SQL
          </li>
        </ul>

        <ul className="list-disc list-inside mt-5 text-gray-600">
          <li>
            <span className="font-bold">Software Engineer</span>
          </li>
          <p>
            Arch Global Services Philippines Inc. - Oct 2023 – April 2026 <br />
            MK Tan Centre, 30th St, Taguig City
          </p>
          <li className="ms-5">
            Developed ART (Activity Resource Tracker) using MudBlazor, SignalR,
            and SQL
          </li>
          <li className="ms-5">
            Contributed to MDM (Master Data Management System) using React,
            TypeScript, GraphQL, and C#
          </li>
          <li className="ms-5">
            Implemented backend logic integrated with Snowflake, Azure
            EventGrid, Service Bus, and Hangfire
          </li>
          <li className="ms-5">
            Contributed to CVT (Contract Validation Tool System) using React,
            Typescript, C# .Net, Cosmos Db, Argos
          </li>
        </ul>

        <ul className="list-disc list-inside mt-5 text-gray-600">
          <li>
            <span className="font-bold">Junior Software Developer</span>
          </li>
          <p>
            TemaroTech - Aug 2023 – Sep 2023 <br />
            LKG Tower, Ayala Avenue, Makati
          </p>
          <li className="ms-5">
            Built internal tools for managing accounts, suppliers, and user
            roles (Vue.js, Laravel)
          </li>
          <li className="ms-5">
            Designed dashboard features for real-time visitor and chat
            monitoring
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
