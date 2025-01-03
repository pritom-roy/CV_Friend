const App = () => {
    return (
        <div className="mx-[30px] font-Heading">
            <div className="grid grid-cols-9">
                <div className="col-span-2">
                    <div className="flex justify-center items-center">
                        <img className="h-[100px] rounded-full" src="/client.jpg" alt="" />
                    </div>
                </div>
                <div className="col-span-7 mt-[15px]">
                    <div className="grid grid-rows-5">
                        <h1 className="text-2xl">Md. Hridoy Chowdhury</h1>
                        <div className="row-span-4">
                            <div className="grid grid-cols-7">
                                <div className="col-span-4">
                                    <h2><span className="font-bold">Email:</span> hridoy3519@gmail.com</h2>
                                    <h2><span className="font-bold">Phone:</span> +880 1767769648</h2>
                                    <h2><span className="font-bold">Linkdin:</span> /hridoy3519</h2>
                                    <h2><span className="font-bold">Address:</span> Sylhet, Bangladesh</h2>
                                </div>
                                <div className="col-span-3">
                                    <h2><span className="font-bold">Nationality: </span> Bangladeshi</h2>
                                    <h2><span className="font-bold">Date of Birth:</span> 06 Oct, 1999</h2>
                                    <h2><span className="font-bold">Gender:</span> Male</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-1 bg-black" />

            <div>
                <h1 className="text-xl font-bold">Objective</h1>
                <p className="text-justify">A dedicated Software Engineer with a strong background in competitive programming. Eager to contribute to the
                    research in Software performance optimisation and algorithmic efficiency. I seek opportunities to apply my
                    problem-solving skills to real-world challenges while deepening my knowledge through higher education and impactful
                    research.</p>
            </div>

            <hr />

            <div>
                <h1 className="text-xl font-bold">Education</h1>
                <h1 className="font-bold">B.Sc. in Computer Science and Engineering,</h1>
                <div className="flex justify-between">
                    <h2>Leading University, Sylhet, Bangladesh</h2>
                    <h1>January 2019 - March 2023</h1>
                </div>
                <h1 className="my-1">CGPA: 3.74/4.00</h1>
                <h1>Thesis: <span className="font-bold">Automated IELTS Writing Evaluation and Handwriting Recognition Using CNN, RNN, and GPT-3
                    API</span> doi: 10.13140/RG.2.2.32640.03846. <br />
                    <span className="font-bold">Contribution:</span> Jointly conducted the literature review, collected the IAM Words dataset, and contributed to the
                    CNN & RNN handwriting</h1>
                {/* <li>Leading University, Sylhet, Bangladesh.</li>
          <li>CGPA: 3.74</li>
          <li>Thesis: Automated IELTS Writing Evaluation and Handwriting Recognition Using CNN, RNN, and GPT-3
            API doi: 10.13140/RG.2.2.32640.03846. <br />
            <span className="ml-5">Contribution: Jointly conducted the literature review, collected the IAM Words dataset, and contributed to the
              CNN & RNN handwriting detection model. Developed the Web Platform and presented the Thesis to the 4th Year
              Defense Board.</span></li> */}
            </div>

            <hr />

            <div>
                <h1 className="text-xl font-bold">Proficiency Test: </h1>
                <div className="flex justify-between">
                    <h2 className="font-bold">International English Language Testing System (IELTS) </h2>
                    <h1>31st August 2024</h1>
                </div>
                <div className="ml-2">
                    <li>Overall Band Score: 8.0</li>
                    <li>Listening: 8.0, Reading: 9.0, Writing: 6.5, Speaking: 7.5</li>
                </div>
            </div>

            <hr />
            <div>
                <h1 className="text-xl font-bold">Professional Experience:</h1>
                <div className="flex justify-between">
                    <h2 className="font-bold">InverseAi | Software Engineer  </h2>
                    <h1>November 2022 - Present</h1>
                </div>
                <div className="ml-2">
                    <li>Developed high-performance multimedia processing apps for native Android and iOS.
                        Language and Technology Used: Kotlin, Java, Swift, Objective-C, C++, Software Development Life Cycle,
                        Design Patterns, and MVVM Architecture.</li>
                    <li>Applied software and hardware optimisation techniques, including memory management, threading, and
                        hardware acceleration, resolved issues, which improved app scalability and reduced crash rates, achieving a
                        25% faster release cycle.</li>
                    <li>Projects: Photo Filters Effect and Editor, Vidart Video Editor.</li>
                </div>
                <h1 className="mt-2"><span className="font-bold">Learning Outcome:</span> Gained hands-on experience in app maintenance, feature planning, architectural design,
                    software performance, and optimisation while working on these projects and through team collaborations.</h1>
            </div>

            <div className="flex justify-between">
                <h2 className="font-bold">Intex Research Lab | Research Assistant </h2>
                <h1>July 2022 - Present</h1>
            </div>
            <h1 className="font-bold">Publication:</h1>
            <li>Look After: A Context-Aware Mobile Computing-Based Smart Agent to Manage Personal Events.
                ○ Bilas Halder, Md. Hridoy Chowdhury, and *Md. Saidur Rahman Kohinoor, 2022 IEEE 3rd Global
                Conference for Advancement in Technology (GCAT), Bangalore, India, 2022, pp. 1-5, doi:
                10.1109/GCAT55367.2022.9971827. <br />
                Contribution: Co-developed the mobile application, jointly conducted the literature review, authored
                the conference paper, and presented both the app and the paper to the conference body.
            </li>
            <li>Guided Undergraduate Research Assistants in conducting literature reviews, provided technical support and
                insights to advance their project work and assisted in proofreading and refining their research methodologies.</li>

            <h1 className="mt-2"><span className="font-bold">Learning Outcome:</span> I gained experience in academic research, idea generation, conducting literature reviews,
                and research methodologies that facilitated the publication of my paper. Received networking opportunities with
                academics and industry experts while enhancing my mentorship skills by guiding junior researchers.</h1>

            <hr />

            <div>
                <h1 className="text-xl font-bold">Teaching Experience:</h1>
                <div className="flex justify-between">
                    <h2 className="font-bold">Leading University | Student Prefect </h2>
                    <h1>August 2020 - May 2021</h1>
                </div>
                <div className="ml-2">
                    <li>Mentored junior students, guiding them on lab projects, providing technical support and feedback to enhance
                        project outcomes, and conducting extra classes to clarify key concepts and deepen their understanding.
                        <ul>
                            <li>Data Structures-Sessional (CSE-1316)</li>
                            <li>Algorithm & Complexity Analysis-Sessional (CSE-2118)</li>
                        </ul></li>
                    <li>Assisted faculty in evaluating lab assignments and ensuring smooth execution of practical lab sessions.</li>

                    <h1 className="mt-2"><span className="font-bold">Learning Outcome:</span> I gained valuable experience in leadership, communication, and instructional skills
                        while also deepening my understanding of core computer science concepts through teaching and mentoring.</h1>
                    <hr />
                </div>
            </div>

            <hr />

            <h1 className="text-xl font-bold">Skills:</h1>
            <li><span className="font-bold">Data Structures and Algorithms:</span> Solved over 2000+ problems in various online judges.</li>
            <li>Software Development: Mobile App Development, Kotlin Multiplatform, SDLC, Software Architecture, Design
                Patterns, Scrum & Agile, Test Driven Development, Clean Code, Multimedia Processing.</li>
            <li>Languages: C++, Java, Kotlin, Swift, Python.</li>
            <li>Frameworks and Libraries: Jetpack Compose, SwiftUI, FFmpeg, OpenGL, NumPy, pandas, and scikit-learn</li>
            <li>Tools: Android Studio, Xcode, GIT, Google Collab.</li>
            <li>Others: Firebase, RESTful APIs, Core Data, SDL.</li>

            <hr />

            <h1 className="text-xl font-bold">Achievements:</h1>
            <li>Online Judge ID: Codeforces (Specialist ), Leetcode (Knight 4.5% ), CodeChef , LightOj</li>
            <li>Participated in the International Collegiate Programming Contest (ICPC) Dhaka Regional 2022</li>
            <li>Champion: Bitfest Intra LU Programming Contest 2022</li>
            <li>Champion: LU Intra Individual Programming Contest 2022</li>
            <li>IEEEXtreme 14.0: Country Ranked 7th, Global Ranked 390th</li>
            <li>Awarded Best CS Student Volunteer by the IEEE Computer Society Bangladesh Chapter</li>
            <li>Received Certificate of Dedication and Hard Work, InverseAI (2023)</li>

            <hr />
            <h1 className="text-xl font-bold">Volunteering Experience & Community Service</h1>
            <div className="flex justify-between">
                <h2 className="font-bold">IEEE Computer Society LU SB Chapter| Treasurer & Secretary</h2>
                <h1>February 2021 - March 2023</h1>
            </div>
            <li>Played a key role in establishing the chapter and launched various flagship events.</li>
            <li>Under my leadership, we successfully launched Bangladesh’s first-ever Research Bootcamp</li>
            <li>We were successful in organising LU Data Communication and Industrial Networking Bootcamp 2022 and
                Mobile Application Development Bootcamp.</li>
            <li>Served as an Ambassador for the IEEEXtreme 15.0 Programming Contest</li>
            <li>Judge and problem setter, LU IEEE Programming Contest 2024.</li>


            <hr />
            <h1 className="text-xl font-bold">References</h1>
            <div className="grid grid-cols-3">
                <div>
                    <h1 className="font-bold">Rumel Ms Pir</h1>
                    <h2>Associate Professor & Head</h2>
                    <p>Computer Science and Engineering
                        Dead (Acting), Faculty of Modern
                        Science, Leading University
                        Divisional Coordinator, IEEE CS
                        BDC.</p>
                    <h3>rumelpir@lus.ac.bd</h3>
                    <h3>+88-01758228736</h3>
                </div>
                <div>
                    <h1 className="font-bold">Md. Saidur Rahman Kohinoor</h1>
                    <h2>Lecturer</h2>
                    <p>Computer Science and Engineering
                        Leading University
                        Advisor, IEEE Computer Society, LU
                        Principal Investigator| (InteX)
                        Research Lab</p>
                    <h3>kohinoor_cse@lus.ac.bd</h3>
                    <h3>+88-01732477046</h3>
                </div>
                <div>
                    <h1 className="font-bold">Tahlil Ahmed Chowdhury</h1>
                    <h2>CEO & Co-Founder,</h2>
                    <p>InverseAi, Sylhet</p>
                    <h3>tahlil@inverseai.com</h3>
                    <h3>+88-01784992449</h3>
                </div>
            </div>

        </div>

    );
};

export default App;