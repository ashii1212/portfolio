import React from 'react';

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Electronics and Communication Engineering (ECE)",
    institute: "Bharath Institute of Higher Education and Research",
    duration: "2021 - Present",
    cgpa: "9.5",
    subjects: "Electronics, Communication, Embedded Systems, IoT, Digital Circuits",
    description: "Currently pursuing B.Tech in ECE with excellent academic performance. Gained practical experience through hands-on projects and internships, developing strong skills in IoT, programming, and hardware design. Actively involved in technical clubs and workshops.",
    achievements: [
      "Consistently maintaining 9.5+ CGPA across all semesters",
      "Member of Electronics and Communication Club",
      "Participated in technical workshops and hackathons",
      "Completed multiple IoT and embedded systems projects",
      "Active contributor to college technical events"
    ],
    skills: ["IoT Development", "Embedded Systems", "Digital Electronics", "Communication Systems", "Programming"],
    icon: "bi-mortarboard-fill",
    color: "#667eea",
    progress: 85
  },
  {
    id: 2,
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    institute: "M.G.M Jr College",
    duration: "2019 - 2021",
    cgpa: "7.9 (First Class)",
    subjects: "Mathematics, Physics, Chemistry",
    description: "Completed intermediate education with strong foundation in core sciences. Excelled in Mathematics and Physics, developing analytical and problem-solving skills. Participated actively in science exhibitions and academic competitions.",
    achievements: [
      "First Class with Distinction",
      "Participated in District Science Exhibition",
      "Member of Science Club",
      "Won Mathematics Olympiad at college level",
      "Active participant in Physics practical competitions"
    ],
    skills: ["Advanced Mathematics", "Physics", "Chemistry", "Problem Solving", "Analytical Thinking"],
    icon: "bi-book-fill",
    color: "#f89820",
    progress: 79
  },
  {
    id: 3,
    degree: "10th Grade (SSC)",
    institute: "Z.P. High School",
    duration: "2019",
    cgpa: "9.5 (First Class)",
    subjects: "Mathematics, Science, English, Social Studies",
    description: "Outstanding academic performance with perfect scores in Mathematics and Science. Demonstrated leadership qualities and active participation in school activities. Strong foundation in core subjects with excellent communication skills.",
    achievements: [
      "Distinction in Mathematics and Science",
      "School First in Mathematics",
      "Member of School Science Club",
      "Participated in District Level Science Quiz",
      "Best Student Award for Academic Excellence"
    ],
    skills: ["Mathematics", "Science", "English", "Leadership", "Communication"],
    icon: "bi-award-fill",
    color: "#764ba2",
    progress: 95
  }
];

const Education = () => {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5 fw-bold gradient-text fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-mortarboard me-2 text-primary"></i>My Education Journey
      </h1>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="timeline-vertical">
            {educationData.map((education, idx) => (
              <div key={education.id} className="timeline-card fade-in" style={{animationDelay: `${0.2 + idx * 0.2}s`, animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
                <div className="card shadow-lg border-0 mb-4">
                  <div className="card-body p-4">
                    {/* Header Section */}
                    <div className="d-flex align-items-center mb-4">
                      <div className="timeline-icon d-flex align-items-center justify-content-center me-3" style={{background: education.color, color: '#fff', borderRadius: '50%', width: 56, height: 56, fontSize: 28}}>
                        <i className={`bi ${education.icon}`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="mb-1 fw-bold" style={{color: education.color}}>{education.degree}</h4>
                        <div className="text-muted mb-1">
                          <i className="bi bi-building me-1"></i>{education.institute}
                        </div>
                        <div className="text-muted small">
                          <i className="bi bi-calendar3 me-1"></i>{education.duration}
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="badge bg-success fs-6 px-3 py-2">{education.cgpa}</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-semibold">Academic Performance</span>
                        <span className="text-muted">{education.progress}%</span>
                      </div>
                      <div className="progress" style={{height: '8px'}}>
                        <div 
                          className="progress-bar" 
                          style={{
                            width: `${education.progress}%`, 
                            background: education.color,
                            borderRadius: '4px'
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-muted mb-0">{education.description}</p>
                    </div>

                    {/* Key Subjects */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-book me-2 text-primary"></i>Key Subjects
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {education.subjects.split(', ').map((subject, index) => (
                          <span key={index} className="badge bg-light text-dark border" style={{fontWeight: 500}}>
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills Developed */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-gear me-2 text-success"></i>Skills Developed
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {education.skills.map((skill, index) => (
                          <span key={index} className="badge bg-success bg-opacity-10 text-success" style={{fontWeight: 500}}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-3">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-trophy me-2 text-warning"></i>Key Achievements
                      </h6>
                      <ul className="list-unstyled">
                        {education.achievements.map((achievement, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                            <span className="text-muted">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Summary */}
          <div className="row mt-5 fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
            <div className="col-md-4 mb-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-graph-up-arrow text-primary" style={{fontSize: '2rem'}}></i>
                  <h5 className="mt-2 mb-1">Academic Excellence</h5>
                  <p className="text-muted small mb-0">Consistent high performance across all levels</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-lightbulb text-success" style={{fontSize: '2rem'}}></i>
                  <h5 className="mt-2 mb-1">Technical Skills</h5>
                  <p className="text-muted small mb-0">Strong foundation in electronics and programming</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-people text-warning" style={{fontSize: '2rem'}}></i>
                  <h5 className="mt-2 mb-1">Leadership</h5>
                  <p className="text-muted small mb-0">Active participation in clubs and events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 