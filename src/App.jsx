import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto py-4 px-8 bg-white font-sans text-justify">
      {/* Header Section */}
      <div className="grid grid-cols-12 gap-6 mb-3">
        <div className="col-span-3 flex flex-col items-center mt-3">
          <img
            className="h-[120px] w-[120px] rounded-full border-4 shadow-lg object-cover"
            src="/hridoy.png"
            alt="Md. Hridoy Chowdhury"
          />
        </div>
        <div className="col-span-9">
          <div className='flex'>
            <h1 className="text-3xl font-bold mb-2">Md. Hridoy Chowdhury</h1>
            {/* <img src="/europass.png" className='h-8 ml-7 mt-4' alt="europass" /> */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <a rel="noopener noreferrer" href="mailto:hridoy3519@gmail.com">
                <p className="flex items-center gap-1 ">
                  <FaEnvelope className="text-Primary" />
                  <h1 className='text-Primary font-bold'>Email:</h1>
                  hridoy3519@gmail.com
                </p>
              </a>
              <p className="flex items-center gap-1 ">
                <FaPhone className="text-Primary" />
                <h1 className='text-Primary font-bold'>Phone:</h1>
                +880 1767769648
              </p>
              <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/hridoy3519/">
                <p className="flex items-center gap-1 ">
                  <FaLinkedin className="text-Primary" />
                  <h1 className='text-Primary font-bold'>Linkedin:</h1>
                  /hridoy3519
                </p>
              </a>
              <p className="flex items-center gap-1 ">
                <FaMapMarkerAlt className="text-Primary" />
                <h1 className='text-Primary font-bold'>Address:</h1>
                Sylhet, Bangladesh
              </p>
            </div>
            <div className='ml-20'>
              <p className="flex items-center gap-2 ">
                <span className='font-bold text-Primary'>Nationality:</span> Bangladeshi
              </p>
              <p className="flex items-center gap-2 ">
                <span className='font-bold text-Primary'>Date of Birth:</span> 06 Oct, 1999
              </p>
              <p className="flex items-center gap-2 ">
                <span className='font-bold text-Primary'>Gender:</span> Male
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-3 border-gray-300" />

      {/* Objective Section */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Objective</h2>
        <p className=" text-justify">
          <strong className='font-semibold'>Software Engineer</strong> with <strong className='font-semibold'>2.5 years of experience</strong> in <strong className='font-semibold'>mobile application development</strong> and a strong background in <strong className='font-semibold'>Competitive Programming</strong>. Skilled in building <strong className='font-semibold'>high-performance, optimised applications</strong> and handling <strong className='font-semibold'>complex user interactions</strong>. Experienced in leveraging <strong className='font-semibold'>advanced frameworks and libraries</strong> to enhance application functionality. Hands-on expertise in <strong className='font-semibold'>project management, feature planning, and agile workflows</strong>, including <strong className='font-semibold'>task management and JIRA sprint setup</strong>. Seeking an opportunity to contribute to <strong className='font-semibold'>challenging projects</strong>, continuously upskill, and drive success for the company through <strong className='font-semibold'>innovative development solutions</strong>.
        </p>
      </section>

      <hr className="my-3 border-gray-300" />

      {/* Professional Experience */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Professional Experience</h2>
        <div className="mb-2 flex justify-between">
          <a target='_blank' rel="noopener noreferrer" href="https://inverseai.com/">
            <div className='flex items-center gap-3'>
              <img className='text-Primary h-4 items-start' src="/ai.png" alt="" />
              <div>
                <h2 className='flex gap-1 items-center'>
                  <strong className="text-base font-bold">InverseAi</strong>
                  <FiLink />
                </h2>
              </div>
            </div>
            <h2 className='ml-7'>Dhaka, Bangladesh</h2>
          </a>
          <div className="flex justify-between">
            <p className="text-sm  text-gray-600">November 2022 - Present</p>
          </div>
        </div>
        <div className="flex mb-2">
          <div className="flex flex-col items-center ml-7">
            <div className="w-3 h-3 mt-1 border-2 border-gray-400 rounded-full"></div>
            <div className="w-0.5 border-l-2 my-1 border-gray-300 h-[195px]"></div>
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
            <div className="w-0.5 border-l-2 my-1 border-gray-300 h-[217px]"></div>
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
          </div>
          <div className="pl-4 w-full">
            <div>
              <div className="mb-2 flex justify-between">
                <h3 className="text-[15px] font-bold">Software Engineer(SDE-III)</h3>
                <p className="text-gray-600 text-sm">January 2025 - Present</p>
              </div>
              <ul className="list-disc pl-5 ml-2">
                <li><strong className='font-semibold'>Leading the development of a native iOS Video Editor app</strong>, building it from scratch with <strong className='font-semibold'>Swift and SwiftUI</strong>.
                </li>
                <li>Managing <strong className='font-semibold'>legacy projects</strong>, migrating <strong className='font-semibold'>UIKit codebase to SwiftUI, fixing critical bugs</strong>, and <strong className='font-semibold'>enhancing UI/UX</strong> for better performance.</li>
                <li><strong className='font-semibold'>Developed a reusable Media Picker Package</strong>, enabling <strong className='font-semibold'>seamless media selection across multiple projects.</strong></li>
                <li><strong className='font-semibold'>Managing Jira Sprint Setup and task assignments</strong>, while <strong className='font-semibold'>mentoring junior developers</strong> to improve team efficiency.</li>
              </ul>
            </div>
            <div className='mt-4'>
              <div className="mb-2 flex justify-between">
                <h3 className="text-[15px] font-bold">Software Engineer (SDE-II)</h3>
                <p className="text-gray-600 text-sm">November 2023 - December 2024</p>
              </div>
              <ul className="list-disc pl-5 ml-2">
                <li><strong className='font-semibold'>Developed a cross-platform Video Editor app from scratch</strong>, leveraging <strong className='font-semibold'>KMM for shared business logic</strong> and <strong className='font-semibold'>Jetpack Compose for UI</strong>, ensuring a consistent experience across <strong className='font-semibold'>Android and iOS</strong> platforms.</li>
                <li><strong className='font-semibold'>Implemented RESTful API integration</strong> for <strong className='font-semibold'>Android and iOS</strong> using <strong className='font-semibold'>Ktor (KMM Library)</strong>.
                </li>
                <li><strong className='font-semibold'>Engineered a local storage system, optimising asset downloads and media handling for a smoother user experience.</strong>
                </li>
                <li>Integrated advanced <strong className='font-semibold'>multimedia frameworks (SDL, FFmpeg)</strong> into iOS, significantly enhancing media processing capabilities.
                </li>
                <li>Implemented native <strong className='font-semibold'>C++ interoperability</strong> with Swift and Kotlin, improving <strong className='font-semibold'>performance-critical functionalities</strong>.
                </li>
              </ul>
            </div>
            <div className='mt-4'>
              <div className='mb-2 flex justify-between'>
                <h3 className="text-[15px] font-bold">Software Engineer (SDE-I)</h3>
                <p className="text-gray-600 text-sm">November 2022 - November 2023</p>
              </div>
              <ul className="list-disc pl-5 ml-2">
                <li><strong className='font-semibold'>Contributed to feature planning and development</strong> of an <strong className='font-semibold'>iOS Photo Editor app</strong>, driving it to its initial release.</li>
                <li><strong className='font-semibold'>Optimised app performance and memory usage</strong>, ensuring smooth handling of complex user interactions.</li>
                <li><strong className='font-semibold'>Led REST API integration</strong>, <strong className='font-semibold'>enabling efficient asset downloads</strong> and <strong className='font-semibold'>optimised local storage management</strong> using <strong className='font-semibold'>CoreData</strong> and <strong className='font-semibold'>FileManager</strong>.
                </li>
                <li><strong className='font-semibold'>Developed a user analytics module</strong> to track <strong className='font-semibold'>statistics, events, interactions, and asset downloads</strong>, enabling <strong className='font-semibold'>data-driven decision-making</strong> for app improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      <div className='h-12'></div>

      {/* Skills Section */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Skills</h2>
        <ul className="list-disc ml-11">
          <li>
            <span className="font-bold">Languages:</span> Swift, Kotlin, C++, Objective-C, Java.
          </li>
          <li>
            <span className="font-bold">Mobile Development:</span> iOS <strong className='font-semibold'>(SwiftUI, UIKit, SPM)</strong>, Android <strong className='font-semibold'>(Jetpack Compose, KMM)</strong>.
          </li>
          <li>
            <span className="font-bold">Software Architecture:</span> MVVM, Clean Architecture, Combine, Design Patterns.
          </li>
          <li>
            <span className="font-bold">Networking & APIs:</span> RESTful APIs, URLSession, Alamofire, Ktor (KMM), JSON Parsing.
          </li>
          <li>
            <span className="font-bold">Performance Optimization:</span> Memory Management, Multithreading <strong className='font-semibold'>(GCD, Swift Concurrency (async/await))</strong>.
          </li>
          <li>
            <span className="font-bold">Multimedia & Graphics:</span> FFmpeg, OpenGL, Metal.
          </li>
          <li>
            <span className="font-bold">Data Persistence:</span> Core Data, FileManager, Room (Android).
          </li>
          <li>
            <span className="font-bold">Tools & Version Control:</span> Xcode, Android Studio, Git, GitLab.
          </li>
          <li>
            <span className="font-bold">Collaboration & Agile:</span> Jira, Slack, Scrum, Code Reviews.
          </li>
          <li>
            <span className="font-bold">Others:</span> Firebase, FFmpeg, Core Data, OpenGL, Metal.
          </li>
          <li>
            <span className="font-bold">Soft Skills:</span> Problem-solving, debugging, collaboration, product management.
          </li>
        </ul>
      </section>

      <hr className="my-3 border-gray-300" />

      <section className='mb-3'>
        <h2 className="text-xl font-bold text-Primary mb-2">Projects</h2>

        {/* VidArt-Video Editor */}
        <div className='mb-2'>
          <div className='flex justify-between mb-1'>
            <a target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center' href="https://play.google.com/store/apps/details?id=com.inverseai.vidart_video_editor&hl=en">
              <p className="text-[15px] font-bold">VidArt-Video Editor</p>
              <FiLink />
            </a>
            <p className="text-sm text-gray-600">December 2023 - Ongoing</p>
          </div>
          <ul className="list-disc ml-11">
            <li>Developing a <strong className='font-semibold'>cross-platform mobile application</strong> using <strong className='font-semibold'>Kotlin Multiplatform Mobile (KMM)</strong> for <strong className='font-semibold'>iOS</strong> and <strong className='font-semibold'>Android</strong>.</li>
            <li>Implementing <strong className='font-semibold'>native C++ interoperability</strong> with <strong className='font-semibold'>Swift</strong> and <strong className='font-semibold'>Kotlin</strong> for performance-critical functionalities.</li>
            <li>Managed <strong className='font-semibold'>API logic</strong> across platforms using <strong className='font-semibold'>Ktor</strong> and handled <strong className='font-semibold'>local storage operations</strong> for optimal performance.</li>
            <li>Developed new application features from scratch to export: <strong className='font-semibold'>text, stickers, and multiple videos</strong>.</li>
          </ul>
        </div>

        {/* Chitro-PhotoEditor */}
        <div className='mb-2'>
          <div className='flex justify-between mb-1'>
            <a target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center' href="https://apps.apple.com/us/app/photo-filters-effects-editor/id1598843369">
              <p className="text-[15px] font-bold">Chitro-PhotoEditor</p>
              <FiLink />
            </a>
            <p className="text-sm text-gray-600">November 2022 - November 2023</p>
          </div>
          <ul className="list-disc ml-11">
            <li>Enhanced <strong className='font-semibold'>Photo Editor</strong> functionality by utilizing the <strong className='font-semibold'>SwiftUI</strong> framework, handled advanced user interactions and built features such as <strong className='font-semibold'>filter, effect, drip, neon, and draw</strong>.</li>
            <li>Integrated dependencies using <strong className='font-semibold'>CocoaPods</strong> and <strong className='font-semibold'>Swift Package Manager (SPM)</strong>.</li>
            <li>Employed the <strong className='font-semibold'>Combine framework</strong> to handle asynchronous events and manage complex data workflows, leading to improved <strong className='font-semibold'>app performance and responsiveness</strong>.</li>
            <li>Managed timely <strong className='font-semibold'>version releases</strong> and <strong className='font-semibold'>App Store uploads</strong>, ensuring prompt <strong className='font-semibold'>bug fixes</strong> and updates.</li>
          </ul>
        </div>
      </section>

      <hr className="my-3 border-gray-300" />

      {/* Education Section */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Education</h2>
        <div className="flex items-start gap-4">
          <div>
            <div className='flex items-center gap-3'>
              {/* <img className='text-Primary h-4 items-start' src="/ai.png" alt="" /> */}
              <img className='text-Primary h-4 items-start' src="/lu.png" alt="" />
              <h3 className="text-lg font-bold">B.Sc. in Computer Science and Engineering</h3>
            </div>
            <div className='ml-8'>
              <div className='flex justify-between'>
                <a target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center' href="https://www.lus.ac.bd/">
                  <p className="">Leading University, Sylhet, Bangladesh</p>
                  <FiLink />
                </a>
                <p className="text-sm  text-gray-600">January 2019 - January 2023</p>
              </div>
              <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1hPCQ4kEtH-806IC4ujX73cMAPdhpAzkU/view?usp=sharing">
                <p className="my-1  flex gap-1 items-center">
                  <span className="font-bold">CGPA:</span> <span className='font-bold'>3.74</span>/4.00 <FiLink />
                </p>
              </a>
              <p className=" text-justify">
                <span>Thesis: </span>
                <span className="font-bold">
                  Automated IELTS Writing Evaluation and Handwriting Recognition Using CNN, RNN, and GPT-3 API
                </span>
              </p>
              <p className='flex  gap-1'>
                <span> doi: </span>
                <a
                  href="https://www.researchgate.net/publication/384820985_Automated_IELTS_Writing_Evaluation_and_Handwriting_Recognition_Using_CNN_RNN_and_GPT-3_API"
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  10.13140/RG.2.2.32640.03846
                  <FiLink />
                </a>
              </p>

              <p className=''>
                <span className="font-bold">Contribution:</span> Jointly conducted the literature review, collected the IAM Words dataset, and contributed to the
                CNN & RNN handwriting detection model. Developed the Web Platform and presented the Thesis to the 4th Year
                Defense Board.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='flex items-center gap-3'>
            <img className='text-Primary h-4 items-start' src="/alevel.png" alt="" />
            <h3 className="text-md font-bold">Pearson Edexel International Advanced Level</h3>
          </div>
          <div className='ml-8'>
            <div className='flex justify-between'>
              <p className="">Green Hill International School & College</p>
              <p className="text-sm  text-gray-600">June 2016 - June 2018</p>
            </div>
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1HLI19YVweJ3Iu1J5vV80hEIa3eHJBGMG/view?usp=sharing">
              <p className="my-1  flex gap-1 items-center">
                <span className="font-bold">Subjects:</span><span>Chemistry, Mathematics, Physics</span> <FiLink />
              </p>
            </a>
          </div>
        </div>
      </section>

      <div className='h-28'></div>

      {/* IELTS Experience Section */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Proficiency Test</h2>
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1VjvkE41k5YgqaSckGsCXt5IDPv6ST0t5/view?usp=sharing">
              <h2 className='flex items-center gap-1'>
                <h3 className="font-bold">International English Language Testing System (IELTS)</h3>
                <FiLink />
              </h2>
            </a>
            <p className="text-sm  text-gray-600">31st August 2024</p>
          </div>
          <ul className="list-disc ml-11">
            <li>Overall Band Score: <span className='font-bold'>8.0</span></li>
            <li>Listening: 8.0, Reading: 9.0, Writing: 6.5, Speaking: 7.5</li>
          </ul>
        </div>
      </section>

      <hr className="my-3 border-gray-300" />

      {/* Achievements Section */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Achievements</h2>
        <ul className="list-disc ml-11">
          <li>
            <p className='flex gap-1'>
              <span className="font-bold">Online Judge ID:</span>
              <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1' href="https://codeforces.com/profile/LU_Hridoy">Codeforces (Specialist) <FiLink /></a>,
              <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1' href="https://leetcode.com/Hridoy3519/">Leetcode (Knight 3.02%) <FiLink /></a>,
              <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1' href="https://www.codechef.com/users/hridoy_3519">CodeChef <FiLink /></a>,
              <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1' href="https://lightoj.com/user/hridoy3519">LightOj <FiLink /></a>
            </p>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZUFEYVprE8famiim7TzLgInF-4dVOGxx/view?usp=sharing">
              <p className='flex items-center gap-1'>
                <p>
                  Participated in the <span className="font-bold">International Collegiate Programming Contest (ICPC)</span> Dhaka
                  Regional 2021.
                </p>
                <FiLink />
              </p>
            </a>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://toph.co/contests/training/kbqjgx4/standings">
              <p className='flex items-center gap-1'>
                <p>
                  <span className="font-bold">Champion:</span> Bitfest Intra LU Programming Contest 2022.
                </p>
                <FiLink />
              </p>
            </a>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://coderoj.com/c/lu-intra-2022/standings">
              <p className='flex items-center gap-1'>
                <p>
                  <span className="font-bold">Champion:</span> LU Intra Individual Programming Contest 2022.
                </p>
                <FiLink />
              </p>
            </a>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1luJDmLWPcytIgo2PUOXWYKlTq8gFwT1K/view?usp=sharing">
              <p className='flex items-center gap-1'>
                <p>
                  <span className="font-bold">IEEEXtreme 14.0:</span> Country Ranked 7th, Global Ranked 390th.
                </p>
                <FiLink />
              </p>
            </a>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/169lE8ClkAK3maxkuvEZexv9kiYCvTaxP/view?usp=drive_link">
              <p className='flex items-center gap-1'>
                <p>
                  <span className="font-bold">Awarded Best CS Student Volunteer</span> by the IEEE Computer Society Bangladesh
                  Chapter.
                </p>
                <FiLink />
              </p>
            </a>
          </li>
          <li>
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1O5dB3i-4K82AeG76viZj_6nfOk_SG5_V/view?usp=sharing">
              <p className='flex items-center gap-1'>
                <p>
                  <span className="font-bold">Received Certificate of Dedication and Hard Work:</span> InverseAI (2023).
                </p>
                <FiLink />
              </p>
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-3 border-gray-300" />

      {/* Volunteering Experience & Community Service Section */}
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">Volunteering Experience & Community Service</h2>
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1Tn8j8VEz1WzflGxWUckQSDY4tujT8hmR/view?usp=sharing">
              <h2 className='flex items-center gap-1'>
                <h3 className="font-bold text-[15px] mb-2">IEEE Computer Society LU SB Chapter | Treasurer & Secretary</h3>
                <FiLink />
              </h2>
            </a>
            <p className="text-sm  text-gray-600">February 2021 - March 2023</p>
          </div>
          <ul className="list-disc ml-11">
            <li>Played a key role in establishing the chapter and launching various flagship events.</li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1ReadvtCB78r3AQqEYB31rBy4rqnNv77w/view?usp=sharing">
                <p className='flex items-center gap-1'>
                  <p>
                    Successfully organized Bangladesh’s first-ever <span className="font-semibold">Research Bootcamp</span>.
                  </p>
                  <FiLink />
                </p>
              </a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1Ji5N5o9kuvhDVkEGO1gBklYVON-xMr4i/view?usp=sharing">
                <p>Coordinated impactful events, including the <span className='font-semibold'>LU Data Communication and Industrial Networking Bootcamp 2022</span> and the <span className='font-semibold'>Mobile Application Development Boot-camp.</span> <span className='inline-flex items-center'><FiLink /></span>
                </p>
              </a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1r-x83Q-F6uZKOrFDdxXZNOPWj4md4_79/view?usp=sharing">
                <p className='flex items-center gap-1'>
                  <p>
                    Served as an <span className="font-semibold">Ambassador</span> for the IEEE Xtreme 15.0 Programming Contest.
                  </p>
                  <FiLink />
                </p>
              </a>
            </li>
            <li>Acted as a <span className="font-semibold">Judge and Problem Setter</span> for the LU IEEE Programming Contest 2024.</li>
          </ul>
        </div>
      </section>

    </div >
  );
};

export default App;
