
function showSection(id) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

const events = [
  {
    name: "VIBE CODE INDIA",
    img: "./images/event1.jpg",
    desc: "📅 19th-20th <br>Organized by Eventeye , in partnership with EntelligenceAI 🤝This national-level online hackathon is set to host 2000+ student developers from 150+ colleges across India. 💡💻",
    link:"https://www.eventeye.in/events/vibecode-india-2025"
  },
  {
    name: "The Oberoi Udaivilas – Udaipur, Rajasthan",
    img: "./images/event2.jpg",
    desc: "📅 16th-17th<br>🏰 Located on the banks of Lake Pichola.<br>💎 Known for: Royal ambiance, boat rides, luxury spa.",
    link:""
  },
  {
    name: "VIBE CODE INDIA 2025",
    img: "./images/event3.jpg",
    desc: "📅 19th-20th<br>🔥 Techies, Ready to Vibe?India’s most electrifying Hackathon is back – VibeCode India 2025! 💥.",
    link:"https://www.eventeye.in/events/vibecode-india-2025"
  },
  {
    name: "DSA Guidance Session",
    img: "./images/event4.jpg",
    desc: "📅 9th July ,2025<br>🔥 Hey everyone! We're excited to invite you to a DSA session happening on 9th July at 10:00 AM, organized by GFG Campus Body VIIT.",
    link:"https://zoom.us/meeting/register/NH6V5mDgQ_GzD8wCXF4ILA"
  },
  
];

const teamMembers = [
  { name: "Aarav", role: "President", image: "./images/male.png" },
  { name: "Neha", role: "Vice President", image: "./images/female.png" },
  { name: "Ravi", role: "Event Coordinator", image: "./images/male.png" },
  { name: "Sana", role: "Marketing Lead", image: "./images/female.png" }
];

const teamDataByEvent = {
  taj: [
    { name: "Aarav", role: "Luxury Manager", image: "./images/male.png" },
    { name: "Neha", role: "Hospitality Head", image: "./images/female.png" }
  ],
  oberoi: [
    { name: "Ravi", role: "Wellness Lead", image: "./images/male.png" },
    { name: "Sana", role: "Spa Director", image: "./images/female.png" }
  ],
  leela: [
    { name: "Vikram", role: "Design Architect", image: "./images/male.png" },
    { name: "Divya", role: "Event Planner", image: "./images/female.png" }
  ]
};


function generatePlaceCards(data, sliderId, options = {}) {
  const slider = document.getElementById(sliderId);
  slider.innerHTML = ""; // clear previous content

  data.forEach((place, index) => {
    const card = document.createElement("div");
    card.className = "card";

    // Assign event key from teamDataByEvent using index
    let eventKeys = Object.keys(teamDataByEvent);
    let eventKey = eventKeys[index % eventKeys.length];

    card.innerHTML = `
      <img src="${place.img}" alt="${place.name}">
      <div class="card-content">
        <h3>${place.name}</h3>
        <p>${place.desc}</p>
        <button onclick="generateTeamCards('${eventKey}')">${options.buttonText || 'Explore More'}</button>
        <button onclick="window.location.href='${place.link}'">Register</button>
      </div>
    `;

    slider.appendChild(card);
  });
}


function generateTeamCards(eventKey = null) {
  const grid = document.getElementById("memberGrid");
  grid.innerHTML = ""; // Clear previous content

  const members = eventKey ? teamDataByEvent[eventKey] || [] : teamMembers;

  members.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h4>${member.name}</h4>
      <p>${member.role}</p>
    `;

    grid.appendChild(card);
  });

  document.getElementById("members").scrollIntoView({ behavior: "smooth" });
}

function scrollSlider(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const scrollAmount = 320;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

const pastEvents = [
  { 
    name: "TechTalk 2024",
    date: "📅31th December 2024 ",
    location: "Visveswaraya Hall, VIIT",
    img: "./images/old2.jpg",
    desc: "Kickstart your winter break with an engaging session by GDG On Campus VIIT to enhance your development skills and build amazing projects! 🚀"
  },
  {
    name: "Hackathon Blitz",
    date: "January 15, 2024",
    location: "Innovation Hall",
    img: "./images/old1.jpg",
    desc: "48-hour non-stop coding marathon with over 500 participants."
  },
  {
    name: "Cultural Night",
    date: "📅7th - 8th December",
    location: "GITAM University, Vizag",
    img: "./images/old3.jpg",
    desc: "Join us for DevFest Vizag 2024, an annual event by Google Developer Groups worldwide, aimed at bringing technology closer to developers. This 2-day developer conference features lightning talks, interactive sessions, and hands-on workshops on cutting-edge technologies."
  }
];
function generatePastEventCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach(event => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${event.img}" alt="${event.name}">
      <div class="card-content">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}<br>
        <strong>Location:</strong> ${event.location}</p>
        <p>${event.desc}</p>
      </div>
    `;

    container.appendChild(card);
  });
}



// INIT
generateTeamCards(); // Default team
generatePlaceCards(events, "eventsSlider", { showButton: true, buttonText: "View Team" });
generatePastEventCards(pastEvents, "pastEventsGrid");