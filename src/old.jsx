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
                        <img src="/europass.png" className='h-8 ml-7 mt-4' alt="europass" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <a rel="noopener noreferrer" href="mailto:hridoy3519@gmail.com">
                                <p className="flex items-center gap-1 text-gray-700">
                                    <FaEnvelope className="text-Primary" />
                                    <h1 className='text-Primary font-bold'>Email:</h1>
                                    hridoy3519@gmail.com
                                </p>
                            </a>
                            <p className="flex items-center gap-1 text-gray-700">
                                <FaPhone className="text-Primary" />
                                <h1 className='text-Primary font-bold'>Phone:</h1>
                                +880 1767769648
                            </p>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/hridoy3519/">
                                <p className="flex items-center gap-1 text-gray-700">
                                    <FaLinkedin className="text-Primary" />
                                    <h1 className='text-Primary font-bold'>Linkedin:</h1>
                                    /hridoy3519
                                </p>
                            </a>
                            <p className="flex items-center gap-1 text-gray-700">
                                <FaMapMarkerAlt className="text-Primary" />
                                <h1 className='text-Primary font-bold'>Address:</h1>
                                Sylhet, Bangladesh
                            </p>
                        </div>
                        <div className='ml-20 mt-5'>
                            <p className="flex items-center gap-2 text-gray-700">
                                <span className='font-bold text-Primary'>Nationality:</span> Bangladeshi
                            </p>
                            <p className="flex items-center gap-2 text-gray-700">
                                <span className='font-bold text-Primary'>Date of Birth:</span> 06 Oct, 1999
                            </p>
                            <p className="flex items-center gap-2 text-gray-700">
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
                <p className="text-gray-700 text-justify">
                    I am a dedicated Software Engineer with a strong foundation in competitive programming and mobile application development. I am passionate about building scalable and efficient software systems. I seek opportunities to enhance my expertise while contributing to cutting-edge research in the field of Software Engineering.
                </p>
            </section>

            <hr className="my-3 border-gray-300" />

            <div className="">

            </div>

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
                                    <p className="text-gray-700">Leading University, Sylhet, Bangladesh</p>
                                    <FiLink />
                                </a>
                                <p className="text-sm text-gray-500">January 2019 - January 2023</p>
                            </div>
                            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1hPCQ4kEtH-806IC4ujX73cMAPdhpAzkU/view?usp=sharing">
                                <p className="my-1 text-gray-700 flex gap-1 items-center">
                                    <span className="font-bold">CGPA:</span> <span className='font-bold'>3.74</span>/4.00 <FiLink />
                                </p>
                            </a>
                            <p className="text-gray-700 text-justify">
                                <span>Thesis: </span>
                                <span className="font-bold">
                                    Automated IELTS Writing Evaluation and Handwriting Recognition Using CNN, RNN, and GPT-3 API
                                </span>
                            </p>
                            <p className='flex text-gray-700 gap-1'>
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

                            <p className='text-gray-700'>
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
                            <p className="text-gray-700">Green Hill International School & College</p>
                            <p className="text-sm text-gray-500">June 2016 - June 2018</p>
                        </div>
                        <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1HLI19YVweJ3Iu1J5vV80hEIa3eHJBGMG/view?usp=sharing">
                            <p className="my-1 text-gray-700 flex gap-1 items-center">
                                <span className="font-bold">Subjects:</span><span>Chemistry, Mathematics, Physics</span> <FiLink />
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <hr className="my-3 border-gray-300" />

            <section className="mb-3">
                <h2 className="text-xl font-bold text-Primary mb-2">Professional Experience</h2>
                <div className="mb-2 flex justify-between">
                    <a target='_blank' rel="noopener noreferrer" href="https://inverseai.com/">
                        <div className='flex items-center gap-3'>
                            <img className='text-Primary h-4 items-start' src="/ai.png" alt="" />
                            <h2 className='flex gap-1 items-center'>
                                <h3 className="text-md font-bold">InverseAi | Software Engineer</h3>
                                <FiLink />
                            </h2>
                        </div>
                    </a>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">November 2022 - Present</p>
                    </div>
                </div>
                <div className="flex mb-2">
                    <div className="flex flex-col items-center ml-7">
                        <div className="w-3 h-3 mt-1 border-2 border-gray-400 rounded-full"></div>
                        <div className="w-0.5 border-l-2 my-1 border-gray-300 h-[31px]"></div>
                        <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                        <div className="w-0.5 border-l-2 my-1 border-gray-300 h-[30px]"></div>
                        <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                    </div>
                    <div className="pl-4">
                        <div className="mb-2">
                            <h3 className="text-md font-semibold">Software Engineer(III)</h3>
                            <p className="text-gray-600 text-sm">Feb 2025 - Present · 1 mo</p>
                        </div>
                        <div className="mb-2">
                            <h3 className="text-md font-semibold">Software Engineer(II)</h3>
                            <p className="text-gray-600 text-sm">Feb 2025 - Present · 1 mo</p>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold">Software Engineer</h3>
                            <p className="text-gray-600 text-sm">Dec 2022 - Feb 2025 · 2 yrs 3 mos</p>
                            <p className="text-gray-500 text-sm">Sylhet, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='ml-3'>
                    <ul className="list-disc ml-6 text-gray-700 text-justify">
                        <li>Developed high-performance multimedia processing apps for native Android and iOS.
                            <br /></li>
                        <p className='my-1'><span className='font-bold'>Language and Technology Used:</span> Kotlin, Java, Swift, Objective-C, C++, Software Development Life Cycle,
                            Design Patterns, and MVVM Architecture.</p>
                        <li>
                            Applied <span className='font-bold'>software and hardware optimisation techniques</span>, including <span className='font-bold'>memory management, threading</span>, and
                            <span className='font-bold'>hardware acceleration</span>, resolved issues, which improved app scalability and reduced crash rates, achieving a
                            <span className='font-bold'> 25% faster release cycle</span>.
                        </li>
                        <li>
                            <div className='flex gap-1'>
                                <p>Projects: </p>
                                <a className='text-Primary font-bold' target='_blank' rel="noopener noreferrer" href="https://apps.apple.com/us/app/photo-filters-effects-editor/id1598843369">Photo Filters Effect  Editor</a>
                                <p>and</p>
                                <a className='text-Primary font-bold' target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.inverseai.vidart_video_editor&hl=en">Vidart Video Editor.</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <p className="my-2 text-gray-700">
                    <span className="font-bold">Learning Outcome:</span> Gained hands-on experience in <span className='font-bold'>app maintenance, feature planning, architectural design,
                        software performance</span>, and <span className='font-bold'>optimisation</span> while working on these projects and through team collaborations.
                </p>
                <div className="mt-4">
                    <div className="flex justify-between items-start mb-2">
                        <a target='_blank' rel="noopener noreferrer" href="https://www.intexlab.net/members">
                            <div className='flex items-center gap-2'>
                                <img className='text-Primary h-4 items-start' src="/intex.png" alt="" />
                                <h2 className='flex items-center gap-1'>
                                    <h3 className="text-md font-bold">Intex Research Lab | Research Assistant</h3>
                                    <FiLink />
                                </h2>
                            </div>
                        </a>
                        <p className="text-sm text-gray-500">July 2022 - Present</p>
                    </div>
                    <div className='ml-3'>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>
                                <div>
                                    <h1 className='font-bold'>Publication: </h1>
                                    <p className='ml-6'>
                                        <span className='font-bold'>Look After: A Context-Aware Mobile Computing-Based Smart Agent to Manage Personal Events.</span>
                                        ○ Bilas Halder, <span className='font-bold'>Md. Hridoy Chowdhury</span>, and *Md. Saidur Rahman Kohinoor, 2022 IEEE 3rd Global
                                        Conference for Advancement in Technology (GCAT), Bangalore, India, 2022, pp. 1-5.
                                    </p>
                                    <div className='ml-6'>
                                        <a target='_blank' rel="noopener noreferrer" href="https://ieeexplore.ieee.org/document/9971827">
                                            <p className='flex items-center gap-1'>
                                                <span className='font-bold'>doi:</span> 10.1109/GCAT55367.2022.9971827.
                                                <FiLink />
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                Guided Undergraduate Research Assistants in <span className='font-bold'>conducting literature reviews, provided technical support</span> and assisted in <span className='font-bold'>proofreading and refining their research methodologies.</span>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-white h-8'></div>
                    <p className="mt-2 text-gray-700">
                        <span className="font-bold">Learning Outcome:</span> I gained <span className='font-bold'>experience in academic research</span>, idea generation, conducting literature reviews,
                        and research methodologies that facilitated the publication of my paper. Received <span className='font-bold'>networking opportunities</span> with
                        academics and industry experts while enhancing my <span className='font-bold'>mentorship skills</span> by guiding junior researchers.
                    </p>
                </div>
            </section >

            {/* Professional Experience Section */}
            <section className="mb-3">
                <h2 className="text-xl font-bold text-Primary mb-2">Professional Experience</h2>
                <div className="mb-2 flex justify-between">
                    <a target='_blank' rel="noopener noreferrer" href="https://inverseai.com/">
                        <div className='flex items-center gap-3'>
                            <img className='text-Primary h-4 items-start' src="/ai.png" alt="" />
                            <h2 className='flex gap-1 items-center'>
                                <h3 className="text-md font-bold">InverseAi | Software Engineer</h3>
                                <FiLink />
                            </h2>
                        </div>
                    </a>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">November 2022 - Present</p>
                    </div>
                </div>
                <div className='ml-3'>
                    <ul className="list-disc ml-6 text-gray-700 text-justify">
                        <li>Developed high-performance multimedia processing apps for native Android and iOS.
                            <br /></li>
                        <p className='my-1'><span className='font-bold'>Language and Technology Used:</span> Kotlin, Java, Swift, Objective-C, C++, Software Development Life Cycle,
                            Design Patterns, and MVVM Architecture.</p>
                        <li>
                            Applied <span className='font-bold'>software and hardware optimisation techniques</span>, including <span className='font-bold'>memory management, threading</span>, and
                            <span className='font-bold'>hardware acceleration</span>, resolved issues, which improved app scalability and reduced crash rates, achieving a
                            <span className='font-bold'> 25% faster release cycle</span>.
                        </li>
                        <li>
                            <div className='flex gap-1'>
                                <p>Projects: </p>
                                <a className='text-Primary font-bold' target='_blank' rel="noopener noreferrer" href="https://apps.apple.com/us/app/photo-filters-effects-editor/id1598843369">Photo Filters Effect  Editor</a>
                                <p>and</p>
                                <a className='text-Primary font-bold' target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.inverseai.vidart_video_editor&hl=en">Vidart Video Editor.</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <p className="my-2 text-gray-700">
                    <span className="font-bold">Learning Outcome:</span> Gained hands-on experience in <span className='font-bold'>app maintenance, feature planning, architectural design,
                        software performance</span>, and <span className='font-bold'>optimisation</span> while working on these projects and through team collaborations.
                </p>
                <div className="mt-4">
                    <div className="flex justify-between items-start mb-2">
                        <a target='_blank' rel="noopener noreferrer" href="https://www.intexlab.net/members">
                            <div className='flex items-center gap-2'>
                                <img className='text-Primary h-4 items-start' src="/intex.png" alt="" />
                                <h2 className='flex items-center gap-1'>
                                    <h3 className="text-md font-bold">Intex Research Lab | Research Assistant</h3>
                                    <FiLink />
                                </h2>
                            </div>
                        </a>
                        <p className="text-sm text-gray-500">July 2022 - Present</p>
                    </div>
                    <div className='ml-3'>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>
                                <div>
                                    <h1 className='font-bold'>Publication: </h1>
                                    <p className='ml-6'>
                                        <span className='font-bold'>Look After: A Context-Aware Mobile Computing-Based Smart Agent to Manage Personal Events.</span>
                                        ○ Bilas Halder, <span className='font-bold'>Md. Hridoy Chowdhury</span>, and *Md. Saidur Rahman Kohinoor, 2022 IEEE 3rd Global
                                        Conference for Advancement in Technology (GCAT), Bangalore, India, 2022, pp. 1-5.
                                    </p>
                                    <div className='ml-6'>
                                        <a target='_blank' rel="noopener noreferrer" href="https://ieeexplore.ieee.org/document/9971827">
                                            <p className='flex items-center gap-1'>
                                                <span className='font-bold'>doi:</span> 10.1109/GCAT55367.2022.9971827.
                                                <FiLink />
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                Guided Undergraduate Research Assistants in <span className='font-bold'>conducting literature reviews, provided technical support</span> and assisted in <span className='font-bold'>proofreading and refining their research methodologies.</span>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-white h-8'></div>
                    <p className="mt-2 text-gray-700">
                        <span className="font-bold">Learning Outcome:</span> I gained <span className='font-bold'>experience in academic research</span>, idea generation, conducting literature reviews,
                        and research methodologies that facilitated the publication of my paper. Received <span className='font-bold'>networking opportunities</span> with
                        academics and industry experts while enhancing my <span className='font-bold'>mentorship skills</span> by guiding junior researchers.
                    </p>
                </div>
                {/* <hr className="my-3 border-gray-300" /> */}
                <div className="mb-4 mt-4">
                    <div>
                        <h1 className="text-xl font-bold text-Primary mb-2">Teaching Experience:</h1>
                        <div className="flex justify-between">
                            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1ov0RagmuG3Vj7ShRV3nrfBRMSmAxtmFx/view?usp=sharing">
                                <div className='flex items-center gap-3'>
                                    <img className='text-Primary h-4 items-start' src="/lu.png" alt="" />
                                    <h2 className='flex items-center gap-1'>
                                        <h3 className="text-md font-bold">Leading University | Student Prefect</h3>
                                        <FiLink />
                                    </h2>
                                </div>
                            </a>
                            <h1 className="text-sm text-gray-500">August 2020 - May 2021</h1>
                        </div>
                        <div className='ml-3'>
                            <div className="ml-6">
                                <ul className="list-disc text-gray-700">
                                    <li>
                                        <span className='font-bold'>Mentored junior students</span>, guiding them on lab projects, <span className='font-bold'>providing technical support</span> and feedback to
                                        enhance project outcomes, and <span className='font-bold'>conducting extra classes</span> to clarify key concepts and deepen their
                                        understanding.
                                        <ul className="list-disc ml-6">
                                            <li>Data Structures-Sessional (CSE-1316)</li>
                                            <li>Algorithm & Complexity Analysis-Sessional (CSE-2118)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Assisted faculty in <span className='font-bold'>evaluating lab assignments</span> and ensuring smooth execution of practical lab sessions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-2 text-gray-700">
                            <span className="font-bold">Learning Outcome:</span> I gained valuable <span className='font-bold'>experience in leadership,
                                communication, and instructional skills</span> while also deepening my understanding of core computer science
                            concepts through teaching and mentoring.
                        </p>
                    </div>
                </div>
            </section >

            <hr className="my-3 border-gray-300" />

            {/* Skills Section */}
            <section className="mb-3">
                <h2 className="text-xl font-bold text-Primary mb-2">Skills</h2>
                <ul className="list-disc ml-6 text-gray-700">
                    <li>
                        <span className="font-bold">Data Structures and Algorithms:</span> Solved over 2000+ problems in various online
                        judges.
                    </li>
                    <li>
                        <span className="font-bold">Software Development:</span> Mobile App Development, Kotlin Multiplatform, SDLC,
                        Software Architecture, Design Patterns, Scrum & Agile, Test Driven Development, Clean Code, Multimedia
                        Processing.
                    </li>
                    <li>
                        <span className="font-bold">Languages:</span> C++, Java, Kotlin, Swift, Python.
                    </li>
                    <li>
                        <span className="font-bold">Frameworks and Libraries:</span> Jetpack Compose, SwiftUI, FFmpeg, OpenGL, NumPy,
                        pandas, and scikit-learn.
                    </li>
                    <li>
                        <span className="font-bold">Tools:</span> Android Studio, Xcode, GIT, Google Collab.
                    </li>
                    <li>
                        <span className="font-bold">Others:</span> Firebase, RESTful APIs, Core Data, SDL.
                    </li>
                </ul>
            </section>

            {/* IELTS Experience Section */}
            <hr className="my-3 border-gray-300" />
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
                        <p className="text-sm text-gray-500">31st August 2024</p>
                    </div>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Overall Band Score: <span className='font-bold'>8.0</span></li>
                        <li>Listening: 8.0, Reading: 9.0, Writing: 6.5, Speaking: 7.5</li>
                    </ul>
                </div>
            </section>

            <hr className="my-3 border-gray-300" />

            {/* Achievements Section */}
            <section className="mb-3">
                <h2 className="text-xl font-bold text-Primary mb-2">Achievements</h2>
                <ul className="list-disc ml-6 text-gray-700">
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
                                <h3 className="font-bold">IEEE Computer Society LU SB Chapter | Treasurer & Secretary</h3>
                                <FiLink />
                            </h2>
                        </a>
                        <p className="text-sm text-gray-500">February 2021 - March 2023</p>
                    </div>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Played a key role in establishing the chapter and launching various flagship events.</li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1ReadvtCB78r3AQqEYB31rBy4rqnNv77w/view?usp=sharing">
                                <p className='flex items-center gap-1'>
                                    <p>
                                        Successfully organized Bangladesh’s first-ever <span className="font-bold">Research Bootcamp</span>.
                                    </p>
                                    <FiLink />
                                </p>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1Ji5N5o9kuvhDVkEGO1gBklYVON-xMr4i/view?usp=sharing">
                                <p>Coordinated impactful events, including the <span className='font-bold'>LU Data Communication and Industrial Networking Bootcamp 2022</span> and the <span className='font-bold'>Mobile Application Development Boot-camp.</span> <span className='inline-flex items-center'><FiLink /></span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1r-x83Q-F6uZKOrFDdxXZNOPWj4md4_79/view?usp=sharing">
                                <p className='flex items-center gap-1'>
                                    <p>
                                        Served as an <span className="font-bold">Ambassador</span> for the IEEE Xtreme 15.0 Programming Contest.
                                    </p>
                                    <FiLink />
                                </p>
                            </a>
                        </li>
                        <li>Acted as a <span className="font-bold">Judge and Problem Setter</span> for the LU IEEE Programming Contest 2024.</li>
                    </ul>
                </div>
            </section>

            {/* <hr className="my-3 border-gray-300" /> */}

            {/* References Section
      <section className="mb-3">
        <h2 className="text-xl font-bold text-Primary mb-2">References</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">Rumel Ms Pir</h3>
            <p className="text-gray-700">
              Associate Professor & Head <br />
              Computer Science and Engineering <br />
              Dean (Acting), Faculty of Modern Science <br />
              Leading University <br />
              Divisional Coordinator, IEEE CS BDC
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-bold">Email:</span> rumelpir@lus.ac.bd <br />
              <span className="font-bold">Phone:</span> +88-01758228736
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">Md. Saidur Rahman Kohinoor</h3>
            <p className="text-gray-700">
              Lecturer <br />
              Computer Science and Engineering <br />
              Leading University <br />
              Advisor, IEEE Computer Society, LU <br />
              Principal Investigator, (InteX) Research Lab
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-bold">Email:</span> kohinoor_cse@lus.ac.bd <br />
              <span className="font-bold">Phone:</span> +88-01732477046
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">Tahlil Ahmed Chowdhury</h3>
            <p className="text-gray-700">
              CEO & Co-Founder <br />
              InverseAi, Sylhet
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-bold">Email:</span> tahlil@inverseai.com <br />
              <span className="font-bold">Phone:</span> +88-01784992449
            </p>
          </div>
        </div>
      </section> */}
        </div >
    );
};

export default App;
