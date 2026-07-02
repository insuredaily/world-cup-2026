import {
  tournamentStats,
  stadiums,
  groupStandings,
  knockoutMatches,
  playerStats,
  newsArticles
} from "./data.js";

// STATE MANAGEMENT
const state = {
  theme: "dark",
  currentTab: "dashboard",
  bracketRound: "R32", // R32, R16, QF, SF, Finals
  searchQuery: "",
  triviaIndex: 0,
  triviaAnswered: false,
  triviaScore: 0,
  predictions: {
    "predict-1": null, // 'team1' or 'team2'
    "predict-2": null,
    "predict-3": null
  }
};

// TRIVIA QUESTIONS DATA
const triviaQuestions = [
  {
    question: "Which country is hosting the 2026 World Cup Final?",
    options: ["Mexico (Estadio Azteca)", "Canada (BC Place)", "USA (MetLife Stadium)", "USA (SoFi Stadium)"],
    correct: 2,
    explanation: "The 2026 World Cup Final will take place at MetLife Stadium in East Rutherford, New York/New Jersey on July 19, 2026."
  },
  {
    question: "How many teams are participating in the 2026 FIFA World Cup?",
    options: ["32 Teams", "40 Teams", "48 Teams", "64 Teams"],
    correct: 2,
    explanation: "2026 is the first edition of the FIFA World Cup to feature 48 teams, expanded from the previous format of 32 teams."
  },
  {
    question: "Which city is hosting matches in Canada?",
    options: ["Montreal & Toronto", "Vancouver & Toronto", "Vancouver & Montreal", "Ottawa & Vancouver"],
    correct: 1,
    explanation: "Canada's host cities are Vancouver (BC Place) and Toronto (BMO Field)."
  }
];

// PREDICTION MATCHES FOR THE FAN ZONE
const predictionMatches = [
  { id: "predict-1", team1: "Uruguay", flag1: "🇺🇾", team2: "Croatia", flag2: "🇭🇷", votes1: 62, votes2: 38 },
  { id: "predict-2", team1: "Belgium", flag1: "🇧🇪", team2: "Ecuador", flag2: "🇪🇨", votes1: 71, votes2: 29 },
  { id: "predict-3", team1: "Mexico", flag1: "🇲🇽", team2: "Poland", flag2: "🇵🇱", votes1: 84, votes2: 16 }
];

// DOM ELEMENT REFERENCES
let dom = {};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  bindEvents();
  initTheme();
  renderApp();
});

function cacheDom() {
  dom = {
    themeBtn: document.getElementById("theme-btn"),
    navButtons: document.querySelectorAll(".nav-btn"),
    sections: document.querySelectorAll(".view-section"),
    
    // Stats Bar
    statGoals: document.getElementById("stat-goals"),
    statAvgGoals: document.getElementById("stat-avg-goals"),
    statMatches: document.getElementById("stat-matches"),
    statAttendance: document.getElementById("stat-attendance"),
    
    // Live Ticker
    tickerTrack: document.getElementById("ticker-track"),
    
    // Dashboard Components
    liveMatchHero: document.getElementById("live-match-hero"),
    newsGrid: document.getElementById("news-grid"),
    scorersList: document.getElementById("top-scorers-list"),
    cleanStandings: document.getElementById("clean-standings"),
    
    // Bracket/Schedule Components
    bracketRoundTabs: document.querySelectorAll(".bracket-tab-btn"),
    bracketTree: document.getElementById("bracket-tree"),
    scheduleList: document.getElementById("schedule-list"),
    
    // Standings
    fullStandingsGrid: document.getElementById("full-standings-grid"),
    
    // Teams Components
    teamsSearch: document.getElementById("teams-search"),
    teamsGrid: document.getElementById("teams-grid"),
    
    // Cities
    citiesGrid: document.getElementById("cities-grid"),
    
    // Fan Zone
    triviaQuestionBox: document.getElementById("trivia-question-box"),
    predictionMatchesBox: document.getElementById("prediction-matches-box")
  };
}

function bindEvents() {
  // Theme toggle
  dom.themeBtn?.addEventListener("click", toggleTheme);
  
  // Navigation tabs
  dom.navButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tabName = e.target.getAttribute("data-tab");
      switchTab(tabName);
    });
  });

  // Bracket/Knockout round selector
  dom.bracketRoundTabs.forEach(btn => {
    btn.addEventListener("click", (e) => {
      dom.bracketRoundTabs.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      state.bracketRound = e.target.getAttribute("data-round");
      renderBracket();
    });
  });

  // Teams search
  dom.teamsSearch?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderTeams();
  });
}

// THEME CONTROL
function initTheme() {
  const savedTheme = localStorage.getItem("world-cup-theme") || "dark";
  state.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("world-cup-theme", state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  if (dom.themeBtn) {
    dom.themeBtn.innerHTML = state.theme === "dark" ? "☀️" : "🌙";
  }
}

// NAVIGATION
function switchTab(tabName) {
  state.currentTab = tabName;
  
  dom.navButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  dom.sections.forEach(sec => {
    if (sec.id === `${tabName}-section`) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  // Perform tab-specific rendering if needed
  if (tabName === "bracket") {
    renderBracket();
    renderSchedule();
  } else if (tabName === "standings") {
    renderFullStandings();
  } else if (tabName === "teams") {
    renderTeams();
  } else if (tabName === "cities") {
    renderCities();
  } else if (tabName === "fanzone") {
    renderTrivia();
    renderPredictions();
  }
}

// RENDER ALL CORE COMPONENTS
function renderApp() {
  renderStatsBar();
  renderLiveTicker();
  renderDashboardHeroMatch();
  renderDashboardNews();
  renderDashboardScorers();
  renderDashboardStandingsPreview();
}

// 1. STATS BAR
function renderStatsBar() {
  if (dom.statGoals) dom.statGoals.innerText = tournamentStats.totalGoals;
  if (dom.statAvgGoals) dom.statAvgGoals.innerText = tournamentStats.averageGoals;
  if (dom.statMatches) dom.statMatches.innerText = tournamentStats.matchesPlayed;
  if (dom.statAttendance) dom.statAttendance.innerText = tournamentStats.attendance;
}

// 2. LIVE TICKER
function renderLiveTicker() {
  if (!dom.tickerTrack) return;
  
  // Mix completed, live, and upcoming
  const tickerItems = [
    ...knockoutMatches.R32.slice(8, 12), // Get some recent, live, and upcoming ones
    ...knockoutMatches.R32.slice(0, 4)
  ];
  
  let html = "";
  // Duplicate elements for infinite scroll loop effect
  const renderList = [...tickerItems, ...tickerItems];
  
  renderList.forEach(m => {
    let statusClass = "upcoming";
    let statusLabel = m.status;
    let scoreDisplay = "vs";
    
    if (m.status === "FT" || m.status.includes("Pens") || m.status === "AET") {
      statusClass = "final";
      statusLabel = "Final";
      scoreDisplay = `${m.team1.score} - ${m.team2.score}`;
    } else if (m.id === "r32-10") { // Netherland match is live
      statusClass = "live";
      statusLabel = `LIVE ${m.liveMin}'`;
      scoreDisplay = `${m.team1.score} - ${m.team2.score}`;
    }
    
    html += `
      <div class="ticker-item" onclick="document.getElementById('nav-bracket-btn').click()">
        <span class="ticker-status ${statusClass}">${statusLabel}</span>
        <span>${m.team1.flag} ${m.team1.name}</span>
        <strong>${scoreDisplay}</strong>
        <span>${m.team2.name} ${m.team2.flag}</span>
      </div>
    `;
  });
  
  dom.tickerTrack.innerHTML = html;
}

// 3. DASHBOARD HERO MATCH (Netherlands vs Australia - Live July 2, 2026)
function renderDashboardHeroMatch() {
  if (!dom.liveMatchHero) return;
  
  // Find live match
  const match = knockoutMatches.R32.find(m => m.id === "r32-10");
  if (!match) return;

  dom.liveMatchHero.innerHTML = `
    <div class="match-header-meta">
      <span class="match-stage-pill">${match.stage}</span>
      <span class="match-live-pill">LIVE • 90+4'</span>
    </div>
    
    <div class="match-versus-area">
      <div class="team-display">
        <span class="team-flag">${match.team1.flag}</span>
        <span class="team-name">${match.team1.name}</span>
        <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.25rem;">
          ${match.team1.scorers.map(s => `<div>${s}</div>`).join("")}
        </div>
      </div>
      
      <div class="score-container">
        <div class="score-display">
          <span>${match.team1.score}</span>
          <span class="score-divider">:</span>
          <span>${match.team2.score}</span>
        </div>
        <div class="live-time-ticker">Match Concluding</div>
      </div>
      
      <div class="team-display">
        <span class="team-flag">${match.team2.flag}</span>
        <span class="team-name">${match.team2.name}</span>
        <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.25rem;">
          ${match.team2.scorers.length > 0 ? match.team2.scorers.map(s => `<div>${s}</div>`).join("") : "<div>-</div>"}
        </div>
      </div>
    </div>
    
    <div style="text-align:center; font-size:0.8rem; color:var(--text-muted); margin-bottom:1.5rem;">
      📍 ${match.stadium} • Ref: Clément Turpin
    </div>
    
    <div class="match-stats-summary">
      <h4 style="font-size:0.9rem; font-weight:700; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.5px;">Match Statistics</h4>
      
      <div class="match-stat-bar-item">
        <div class="stat-labels">
          <span>${match.possession.team1}% Possession</span>
          <span>Possession</span>
          <span>${match.possession.team2}% Possession</span>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-fill" style="width: ${match.possession.team1}%"></div>
        </div>
      </div>
      
      <div class="match-stat-bar-item" style="margin-top:0.5rem;">
        <div class="stat-labels">
          <span>${match.shots.team1} Shots</span>
          <span>Shots on Target</span>
          <span>${match.shots.team2} Shots</span>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-fill" style="width: ${Math.round((match.shots.team1 / (match.shots.team1 + match.shots.team2)) * 100)}%"></div>
        </div>
      </div>
    </div>
  `;
}

// 4. NEWS ARTICLES
function renderDashboardNews() {
  if (!dom.newsGrid) return;
  
  let html = "";
  newsArticles.forEach(art => {
    html += `
      <div class="news-card">
        <div class="news-img-placeholder">
          <span class="news-tag">${art.tag}</span>
        </div>
        <div class="news-body">
          <span class="news-date">${art.date}</span>
          <h3 class="news-card-title">${art.title}</h3>
          <p class="news-desc">${art.summary}</p>
        </div>
      </div>
    `;
  });
  dom.newsGrid.innerHTML = html;
}

// 5. TOP SCORERS
function renderDashboardScorers() {
  if (!dom.scorersList) return;
  
  let html = "";
  playerStats.goals.forEach((p, idx) => {
    html += `
      <div class="mini-stats-item">
        <div class="player-info">
          <span class="player-rank">#${idx + 1}</span>
          <div>
            <div class="player-name">${p.name} ${p.flag}</div>
            <div class="player-meta">${p.team} • ${p.played} matches</div>
          </div>
        </div>
        <div class="stat-badge">${p.goals} G</div>
      </div>
    `;
  });
  dom.scorersList.innerHTML = html;
}

// 6. DASHBOARD STANDINGS PREVIEW
function renderDashboardStandingsPreview() {
  if (!dom.cleanStandings) return;
  
  // Render Groups A and B as a preview
  let html = "";
  ["A", "B"].forEach(gKey => {
    const teams = groupStandings[gKey];
    html += `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size:0.9rem; font-weight:800; color:var(--accent-neon); margin-bottom:0.5rem; text-transform:uppercase;">Group ${gKey} Standings</h4>
        <table class="group-table">
          <thead>
            <tr>
              <th class="team-col">Team</th>
              <th>P</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    teams.forEach(t => {
      html += `
        <tr class="${t.qual ? 'qualified-row' : ''}">
          <td class="team-col">
            <span>${t.flag}</span>
            <span>${t.team}</span>
            ${t.qual ? '<span class="qual-indicator"></span>' : ''}
          </td>
          <td>${t.p}</td>
          <td style="color:${t.gd >= 0 ? 'var(--text-secondary)' : 'var(--danger)'}">${t.gd >= 0 ? '+' + t.gd : t.gd}</td>
          <td style="font-weight:700;">${t.pts}</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
  });
  
  dom.cleanStandings.innerHTML = html;
}

// 7. INTERACTIVE KNOCKOUT BRACKET RENDERER
function renderBracket() {
  if (!dom.bracketTree) return;
  
  const round = state.bracketRound;
  
  // Clear tree and render specific round layout
  dom.bracketTree.innerHTML = "";
  
  let matches = [];
  let roundTitle = "";
  
  if (round === "R32") {
    matches = knockoutMatches.R32;
    roundTitle = "Round of 32";
  } else if (round === "R16") {
    matches = knockoutMatches.R16;
    roundTitle = "Round of 16";
  } else if (round === "QF") {
    matches = knockoutMatches.QF;
    roundTitle = "Quarter-Finals";
  } else if (round === "SF") {
    matches = knockoutMatches.SF;
    roundTitle = "Semi-Finals";
  } else if (round === "Finals") {
    matches = knockoutMatches.Finals;
    roundTitle = "Finals";
  }
  
  let html = `
    <div class="bracket-round" style="width: 100%; max-width: 900px; margin: 0 auto;">
      <h3 class="bracket-round-title">${roundTitle}</h3>
      <div class="bracket-match-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
  `;
  
  matches.forEach(m => {
    const isWinner1 = m.winner === m.team1.name;
    const isWinner2 = m.winner === m.team2.name;
    const isLive = m.id === "r32-10";
    
    let nodeClass = "";
    if (isWinner1) nodeClass = "winner-team1";
    if (isWinner2) nodeClass = "winner-team2";
    
    let score1Str = m.team1.score !== null ? m.team1.score : "-";
    let score2Str = m.team2.score !== null ? m.team2.score : "-";
    
    if (m.team1.penaltyScore) {
      score1Str = `${m.team1.score} (${m.team1.penaltyScore})`;
      score2Str = `${m.team2.score} (${m.team2.penaltyScore})`;
    }
    
    html += `
      <div class="bracket-match-node ${nodeClass}" onclick="alert('Match: ${m.team1.name} vs ${m.team2.name}\\nStadium: ${m.stadium}\\nStatus: ${m.status}\\nDate: ${m.date}')">
        <div class="bracket-match-info">
          <span>${m.date} • ${m.time || 'TBD'}</span>
          <span style="font-weight:700; color:${isLive ? 'var(--danger)' : 'inherit'}">${isLive ? 'LIVE' : m.status}</span>
        </div>
        <div class="bracket-team-row">
          <div class="bracket-team-name">
            <span>${m.team1.flag || '🏳️'}</span>
            <span>${m.team1.name}</span>
          </div>
          <span class="bracket-team-score">${score1Str}</span>
        </div>
        <div class="bracket-team-row">
          <div class="bracket-team-name">
            <span>${m.team2.flag || '🏳️'}</span>
            <span>${m.team2.name}</span>
          </div>
          <span class="bracket-team-score">${score2Str}</span>
        </div>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
  
  dom.bracketTree.innerHTML = html;
}

// 8. MATCH SCHEDULE
function renderSchedule() {
  if (!dom.scheduleList) return;
  
  // Sort schedule: R32 matches showing live first, then upcoming, then completed
  const sorted = [...knockoutMatches.R32].sort((a, b) => {
    if (a.id === "r32-10") return -1;
    if (b.id === "r32-10") return 1;
    if (a.winner === null && b.winner !== null) return -1;
    if (a.winner !== null && b.winner === null) return 1;
    return new Date(a.date) - new Date(b.date);
  });
  
  let html = "";
  sorted.forEach(m => {
    let score1 = m.team1.score !== null ? m.team1.score : "";
    let score2 = m.team2.score !== null ? m.team2.score : "";
    
    if (m.team1.penaltyScore) {
      score1 = `${m.team1.score} (${m.team1.penaltyScore})`;
      score2 = `${m.team2.score} (${m.team2.penaltyScore})`;
    }
    
    let timeDisplay = m.time;
    if (m.status === "FT" || m.status === "AET" || m.status.includes("Pens")) {
      timeDisplay = `<span style="color:var(--text-muted); font-weight:700;">FT</span>`;
    } else if (m.id === "r32-10") {
      timeDisplay = `<span style="color:var(--danger); font-weight:700; animation:pulse 1s infinite;">LIVE ${m.liveMin}'</span>`;
    }
    
    html += `
      <div class="match-list-item">
        <div class="match-list-time">
          <div style="font-weight:700;">${m.date}</div>
          <div>${timeDisplay}</div>
        </div>
        
        <div class="match-list-vs">
          <div class="vs-team team-right">
            <span class="vs-team-name">${m.team1.name}</span>
            <span class="vs-team-flag">${m.team1.flag}</span>
          </div>
          
          <div class="vs-score">
            ${m.winner !== null || m.id === "r32-10" ? `<span>${score1} - ${score2}</span>` : '<span style="font-size:0.8rem; color:var(--text-muted);">vs</span>'}
          </div>
          
          <div class="vs-team">
            <span class="vs-team-flag">${m.team2.flag}</span>
            <span class="vs-team-name">${m.team2.name}</span>
          </div>
        </div>
        
        <div class="match-list-stadium">
          <div>${m.stadium.split(",")[0]}</div>
          <div style="color:var(--text-muted);">${m.stadium.split(",")[1] || ""}</div>
        </div>
      </div>
    `;
  });
  
  dom.scheduleList.innerHTML = html;
}

// 9. FULL STANDINGS
function renderFullStandings() {
  if (!dom.fullStandingsGrid) return;
  
  let html = "";
  Object.keys(groupStandings).forEach(gKey => {
    const teams = groupStandings[gKey];
    html += `
      <div class="group-card">
        <h3 class="group-title">Group ${gKey}</h3>
        <table class="group-table">
          <thead>
            <tr>
              <th class="team-col">Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    teams.forEach(t => {
      html += `
        <tr class="${t.qual ? 'qualified-row' : ''}">
          <td class="team-col">
            <span>${t.flag}</span>
            <span>${t.team}</span>
            ${t.qual ? '<span class="qual-indicator"></span>' : ''}
          </td>
          <td>${t.p}</td>
          <td>${t.w}</td>
          <td>${t.d}</td>
          <td>${t.l}</td>
          <td style="color:${t.gd >= 0 ? 'var(--success)' : 'var(--danger)'}">${t.gd >= 0 ? '+' + t.gd : t.gd}</td>
          <td style="font-weight:700; color:var(--accent-neon);">${t.pts}</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
  });
  
  dom.fullStandingsGrid.innerHTML = html;
}

// 10. TEAMS BROWSER
function renderTeams() {
  if (!dom.teamsGrid) return;
  
  // Aggregate all unique teams from groupStandings
  const allTeams = [];
  Object.keys(groupStandings).forEach(gKey => {
    groupStandings[gKey].forEach(t => {
      allTeams.push({
        name: t.team,
        flag: t.flag,
        group: gKey,
        qual: t.qual
      });
    });
  });
  
  // Filter by query
  const filtered = allTeams.filter(t => 
    t.name.toLowerCase().includes(state.searchQuery)
  );
  
  let html = "";
  if (filtered.length === 0) {
    html = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color:var(--text-muted);">No teams match "${state.searchQuery}"</div>`;
  } else {
    filtered.forEach(t => {
      // Find out if they're eliminated or active in R32/onward
      // (USA, Germany, Spain, Brazil, France, Argentina, England, Senegal, Portugal, Netherlands, Uruguay, Croatia, Belgium, Ecuador, Mexico, Poland, Denmark, Nigeria, Austria, Chile, Cameroon, New Zealand are in R32. Others are out).
      const r32Teams = [
        "USA", "Colombia", "Germany", "Japan", "Spain", "Morocco", "Brazil", "Sweden", "France", "Ukraine", 
        "Argentina", "Switzerland", "England", "South Korea", "Italy", "Senegal", "Portugal", "Canada",
        "Netherlands", "Australia", "Uruguay", "Croatia", "Belgium", "Ecuador", "Mexico", "Poland",
        "Denmark", "Nigeria", "Austria", "Chile", "Cameroon", "New Zealand"
      ];
      
      const isEliminated = !r32Teams.includes(t.name) || (t.name === "Colombia" && knockoutMatches.R32.find(m => m.team2.name === "Colombia").winner !== "Colombia"); // and so on, simple check
      
      // Let's just do a simple lookup in completed matches to see if they lost in R32
      let statusText = "Qualified to Knockouts";
      let statusClass = "active-status";
      
      const completedR32Match = knockoutMatches.R32.find(m => (m.team1.name === t.name || m.team2.name === t.name) && m.winner !== null);
      if (completedR32Match) {
        if (completedR32Match.winner === t.name) {
          statusText = "Advanced to Round of 16";
          statusClass = "active-status";
        } else {
          statusText = "Eliminated (Round of 32)";
          statusClass = "out-status";
        }
      } else if (!r32Teams.includes(t.name)) {
        statusText = "Eliminated (Group Stage)";
        statusClass = "out-status";
      }
      
      html += `
        <div class="team-card" onclick="alert('Team: ${t.name}\\nGroup: ${t.group}\\nKnockout status: ${statusText}')">
          <div class="team-card-flag">${t.flag}</div>
          <h3 class="team-card-name">${t.name}</h3>
          <div class="team-card-group">Group ${t.group}</div>
          <div class="team-card-status ${statusClass}">${statusText}</div>
        </div>
      `;
    });
  }
  
  dom.teamsGrid.innerHTML = html;
}

// 11. HOST CITIES & STADIUMS
function renderCities() {
  if (!dom.citiesGrid) return;
  
  let html = "";
  stadiums.forEach(s => {
    let flag = "🇺🇸";
    if (s.country === "Mexico") flag = "🇲🇽";
    if (s.country === "Canada") flag = "🇨🇦";
    
    html += `
      <div class="city-card">
        <div class="city-image-box">
          🏟️
          <span class="city-country-flag">${flag}</span>
        </div>
        <div class="city-info">
          <div class="city-name-box">
            <div>
              <h3 class="city-title">${s.city}</h3>
              <div class="city-stadium-title">${s.name}</div>
            </div>
          </div>
          
          <div class="city-stats">
            <div class="city-stat-box">
              <span class="city-stat-val">${s.capacity.toLocaleString()}</span>
              <span class="city-stat-lbl">Capacity</span>
            </div>
            <div class="city-stat-box">
              <span class="city-stat-val">${s.opened}</span>
              <span class="city-stat-lbl">Opened</span>
            </div>
          </div>
          
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700; margin-top:0.5rem; text-transform:uppercase;">Scheduled For:</div>
          <div class="city-matches-tag">
            ${s.matches.map(m => `<span class="match-tag">${m}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  });
  
  dom.citiesGrid.innerHTML = html;
}

// 12. FAN ZONE - TRIVIA
function renderTrivia() {
  if (!dom.triviaQuestionBox) return;
  
  const q = triviaQuestions[state.triviaIndex];
  state.triviaAnswered = false;
  
  dom.triviaQuestionBox.innerHTML = `
    <div class="trivia-box">
      <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); font-weight:700;">
        <span>QUESTION ${state.triviaIndex + 1} OF ${triviaQuestions.length}</span>
        <span>SCORE: ${state.triviaScore}</span>
      </div>
      <h3 class="trivia-question">${q.question}</h3>
      <div class="trivia-options" id="trivia-options-container">
        ${q.options.map((opt, idx) => `
          <button class="trivia-opt-btn" onclick="window.submitTriviaAnswer(${idx})">${opt}</button>
        `).join("")}
      </div>
      <div id="trivia-explanation" style="display:none; font-size:0.9rem; border-left:3px solid var(--accent-neon); padding-left:1rem; margin-top:1rem; line-height:1.5;">
        <div style="font-weight:700; color:var(--accent-neon); margin-bottom:0.25rem;">Explanation:</div>
        <div style="color:var(--text-secondary);">${q.explanation}</div>
        <button class="nav-btn" style="margin-top:1rem; background:var(--bg-tertiary); color:var(--text-primary);" onclick="window.nextTrivia()">Next Question ➡️</button>
      </div>
    </div>
  `;
}

window.submitTriviaAnswer = (selectedIndex) => {
  if (state.triviaAnswered) return;
  state.triviaAnswered = true;
  
  const q = triviaQuestions[state.triviaIndex];
  const buttons = document.querySelectorAll("#trivia-options-container .trivia-opt-btn");
  
  buttons.forEach((btn, idx) => {
    if (idx === q.correct) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("wrong");
    }
  });
  
  if (selectedIndex === q.correct) {
    state.triviaScore += 10;
  }
  
  // Show explanations and next button
  document.getElementById("trivia-explanation").style.display = "block";
};

window.nextTrivia = () => {
  state.triviaIndex = (state.triviaIndex + 1) % triviaQuestions.length;
  renderTrivia();
};

// 13. FAN ZONE - PREDICTIONS
function renderPredictions() {
  if (!dom.predictionMatchesBox) return;
  
  let html = "";
  predictionMatches.forEach(m => {
    const userVote = state.predictions[m.id];
    let fillWidth1 = m.votes1;
    let fillWidth2 = m.votes2;
    
    if (userVote === "team1") {
      fillWidth1 = m.votes1 + 1;
    } else if (userVote === "team2") {
      fillWidth2 = m.votes2 + 1;
    }
    
    const totalVotes = fillWidth1 + fillWidth2;
    const pct1 = Math.round((fillWidth1 / totalVotes) * 100);
    const pct2 = Math.round((fillWidth2 / totalVotes) * 100);
    
    html += `
      <div style="margin-bottom: 1.5rem; background:var(--bg-primary); border:1px solid var(--border-color); padding:1.25rem; border-radius:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Round of 32 Prediction</span>
          <span style="font-size:0.75rem; color:var(--accent-neon); font-weight:700;">${totalVotes} Fans Voted</span>
        </div>
        
        <div style="display:grid; grid-template-columns: 1fr 60px 1fr; align-items:center; text-align:center;">
          <div>
            <div style="font-size:1.5rem;">${m.flag1}</div>
            <div style="font-weight:600; font-size:0.9rem; margin-top:0.25rem;">${m.team1}</div>
            <button class="predict-btn ${userVote === 'team1' ? 'voted' : ''}" style="margin-top:0.5rem;" onclick="window.submitPrediction('${m.id}', 'team1')">
              Predict Win
            </button>
          </div>
          
          <div style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">VS</div>
          
          <div>
            <div style="font-size:1.5rem;">${m.flag2}</div>
            <div style="font-weight:600; font-size:0.9rem; margin-top:0.25rem;">${m.team2}</div>
            <button class="predict-btn ${userVote === 'team2' ? 'voted' : ''}" style="margin-top:0.5rem;" onclick="window.submitPrediction('${m.id}', 'team2')">
              Predict Win
            </button>
          </div>
        </div>
        
        <div style="margin-top:1.25rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; color:var(--text-secondary); margin-bottom:0.25rem;">
            <span>${pct1}%</span>
            <span>${pct2}%</span>
          </div>
          <div style="height:6px; background:var(--bg-tertiary); border-radius:10px; overflow:hidden; display:flex;">
            <div style="width:${pct1}%; height:100%; background:var(--accent-neon); transition:width 0.4s;"></div>
            <div style="width:${pct2}%; height:100%; background:var(--danger); transition:width 0.4s;"></div>
          </div>
        </div>
      </div>
    `;
  });
  
  dom.predictionMatchesBox.innerHTML = html;
}

window.submitPrediction = (matchId, side) => {
  state.predictions[matchId] = side;
  renderPredictions();
};
