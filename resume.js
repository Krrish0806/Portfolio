// Resume Data
const resumeData = {
  name: "Krrish Nayak",
  title: "Web Developer / Analyst",
  email: "nayakkrrish0806@gmail.com",
  phone: "+91-8368525293",
  linkedin: "https://www.linkedin.com/in/krrish-nayak-90a9702b0/",
  github: "https://github.com/Krrish0806",
  profile: "Detail-oriented web developer with an enthusiasm for building responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and React.",
  education: [
    {
      degree: "Bachelors of Technology in Computer Science",
      institution: "SRM University",
      duration: "2023 - 2027"
    }
  ],
  skills: ["C", "C++", "Python", "HTML", "CSS", "SQL", "Responsive Design"],
  projects: [
    {
      title: "Cricket Score Predictor",
      description: "Built using Tkinter and Java Swing to simulate match score predictions based on user input and conditions."
    },
    {
      title: "Mail Merging Website",
      description: "Designed frontend of the website along with the logo using Canva."
    },
    {
      title: "Inflation Calculator",
      description: "A basic Python application to estimate future prices using custom inflation parameters and user input."
    },
    {
      title: "Online Financial Analyst",
      description: "A basic online financial analyst using HTML, CSS, and JavaScript (developed in a 24-hour hackathon)."
    },
    {
      title: "Recipe Recommendation System",
      description: "A web application that suggests recipes based on available ingredients using machine learning."
    }
  ]
};

// Function to render the resume
function renderResume(data) {
  const resumeDiv = document.getElementById("resume");

  resumeDiv.innerHTML = `
    <header>
      <h1>${data.name}</h1>
      <p>${data.title}</p>
      <p>Email: <a href="mailto:${data.email}">${data.email}</a> | Phone: ${data.phone}</p>
      <a href="${data.linkedin}" target="_blank">LinkedIn</a> |
      <a href="${data.github}" target="_blank">GitHub</a>
    </header>

    ${renderSection("Profile", `<p>${data.profile}</p>`)}
    ${renderSection("Education", data.education.map(edu => `
      <div class="item">
        <h3>${edu.degree}</h3>
        <p>${edu.institution}, ${edu.duration}</p>
      </div>
    `).join(''))}
    ${renderSection("Skills", `<ul class="skills">${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>`)}
    ${renderSection("Projects", data.projects.map(project => `
      <div class="item">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `).join(''))}
  `;
}

// Helper to create section HTML
function renderSection(title, content) {
  return `
    <section class="section">
      <h2>${title}</h2>
      ${content}
    </section>
  `;
}

// Initialize rendering after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  renderResume(resumeData);
});