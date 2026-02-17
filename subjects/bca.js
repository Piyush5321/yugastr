// ==================== DATA ====================

const academicData = {
  "Maths": {
    "unit1": {
      "notes": "Matrices are rectangular arrays of numbers arranged in rows and columns. A matrix of order m x n has m rows and n columns. Key operations include addition, subtraction, and multiplication. Two matrices can be added only if they have the same order. Matrix multiplication is possible when the number of columns in the first matrix equals the number of rows in the second. The determinant of a square matrix is a scalar value that encodes properties of the linear transformation. The inverse of a matrix A exists if and only if its determinant is non-zero. Cramer's rule uses determinants to solve systems of linear equations efficiently.",
      "quiz": [
        { "q": "What is the order of a matrix with 3 rows and 4 columns?", "options": ["4x3", "3x4", "3x3", "4x4"], "ans": "3x4" },
        { "q": "When can two matrices be added?", "options": ["When they have the same order", "When they are square", "When determinant is non-zero", "Always"], "ans": "When they have the same order" },
        { "q": "What is the determinant of a 2x2 identity matrix?", "options": ["0", "1", "2", "-1"], "ans": "1" },
        { "q": "Which method uses determinants to solve linear equations?", "options": ["Gauss elimination", "Cramer's rule", "Jacobi method", "Newton's method"], "ans": "Cramer's rule" },
        { "q": "A matrix A has an inverse if:", "options": ["det(A) = 0", "det(A) != 0", "A is rectangular", "A has equal rows and columns only"], "ans": "det(A) != 0" }
      ]
    },
    "unit2": {
      "notes": "Differential calculus studies the rate of change of functions. The derivative of a function f(x) at a point represents the slope of the tangent line at that point. Key rules include the power rule (d/dx of x^n = nx^(n-1)), product rule, quotient rule, and chain rule. Higher-order derivatives are obtained by differentiating repeatedly. Applications include finding maxima and minima of functions, determining concavity, and analyzing motion. Rolle's theorem states that if a function is continuous on [a,b] and differentiable on (a,b) with f(a)=f(b), then there exists c in (a,b) where f'(c)=0. Mean value theorem generalizes this concept.",
      "quiz": [
        { "q": "What does the derivative of a function represent?", "options": ["Area under curve", "Slope of tangent", "Volume of solid", "Length of arc"], "ans": "Slope of tangent" },
        { "q": "Using the power rule, the derivative of x^5 is:", "options": ["5x^4", "4x^5", "5x^5", "x^4"], "ans": "5x^4" },
        { "q": "Which rule is used to differentiate f(g(x))?", "options": ["Product rule", "Quotient rule", "Chain rule", "Power rule"], "ans": "Chain rule" },
        { "q": "What does Rolle's theorem guarantee?", "options": ["A maximum value", "A point where f'(c)=0", "Continuity", "Integrability"], "ans": "A point where f'(c)=0" },
        { "q": "The second derivative test helps determine:", "options": ["Limits", "Concavity and extrema", "Integrals", "Asymptotes"], "ans": "Concavity and extrema" }
      ]
    },
    "unit3": {
      "notes": "Integral calculus is concerned with accumulation of quantities and areas under curves. The indefinite integral (antiderivative) reverses differentiation. The definite integral from a to b gives the signed area between the curve and x-axis. The Fundamental Theorem of Calculus connects differentiation and integration, stating that integration and differentiation are inverse operations. Common techniques include substitution, integration by parts, and partial fractions. Applications range from computing areas, volumes of revolution, arc lengths, and work done by a force. Improper integrals handle infinite limits or unbounded integrands by taking limits of definite integrals.",
      "quiz": [
        { "q": "What does a definite integral compute?", "options": ["Slope", "Signed area under curve", "Derivative", "Limit"], "ans": "Signed area under curve" },
        { "q": "The integral of 2x dx is:", "options": ["x^2 + C", "2x^2 + C", "x + C", "2 + C"], "ans": "x^2 + C" },
        { "q": "Which theorem connects differentiation and integration?", "options": ["Rolle's theorem", "Fundamental Theorem of Calculus", "Mean value theorem", "Binomial theorem"], "ans": "Fundamental Theorem of Calculus" },
        { "q": "Integration by parts is derived from which rule?", "options": ["Chain rule", "Product rule", "Quotient rule", "Power rule"], "ans": "Product rule" },
        { "q": "Improper integrals handle:", "options": ["Polynomial functions", "Infinite limits or unbounded integrands", "Only trigonometric functions", "Discrete sums"], "ans": "Infinite limits or unbounded integrands" }
      ]
    }
  },
  "Data Structures": {
    "unit1": {
      "notes": "Arrays and Linked Lists are fundamental data structures. An array stores elements in contiguous memory locations, enabling O(1) random access using indices. However, insertion and deletion are O(n) as elements must be shifted. A linked list stores elements as nodes, where each node contains data and a pointer to the next node. Linked lists allow O(1) insertion and deletion at known positions but require O(n) for access. Singly linked lists have one pointer per node, while doubly linked lists have forward and backward pointers. Circular linked lists connect the last node back to the first, enabling continuous traversal.",
      "quiz": [
        { "q": "What is the time complexity of accessing an array element by index?", "options": ["O(n)", "O(1)", "O(log n)", "O(n^2)"], "ans": "O(1)" },
        { "q": "In a singly linked list, each node contains:", "options": ["Data only", "Data and two pointers", "Data and one pointer", "Only a pointer"], "ans": "Data and one pointer" },
        { "q": "What is the disadvantage of arrays over linked lists?", "options": ["Slow access", "Fixed size and costly insertion", "No random access", "Higher memory usage"], "ans": "Fixed size and costly insertion" },
        { "q": "In a circular linked list, the last node points to:", "options": ["NULL", "The first node", "Itself", "The middle node"], "ans": "The first node" },
        { "q": "Doubly linked lists differ from singly linked lists by having:", "options": ["Two data fields", "Forward and backward pointers", "Circular structure", "Array-based storage"], "ans": "Forward and backward pointers" }
      ]
    },
    "unit2": {
      "notes": "Stacks and Queues are abstract data types with restricted access patterns. A stack follows LIFO (Last In, First Out) ordering. Push adds an element to the top, and pop removes the top element. Stacks are used in function call management, expression evaluation, and backtracking algorithms. A queue follows FIFO (First In, First Out) ordering. Enqueue adds to the rear, and dequeue removes from the front. Queues are used in scheduling, BFS traversal, and buffering. Priority queues allow elements with higher priority to be dequeued first. A deque (double-ended queue) allows insertion and deletion at both ends.",
      "quiz": [
        { "q": "Which principle does a stack follow?", "options": ["FIFO", "LIFO", "LILO", "Priority"], "ans": "LIFO" },
        { "q": "Which operation adds an element to a queue?", "options": ["Push", "Pop", "Enqueue", "Dequeue"], "ans": "Enqueue" },
        { "q": "Stacks are commonly used in:", "options": ["BFS traversal", "Function call management", "Scheduling", "Sorting"], "ans": "Function call management" },
        { "q": "A deque allows operations at:", "options": ["Front only", "Rear only", "Both ends", "Random positions"], "ans": "Both ends" },
        { "q": "In a priority queue, elements are dequeued based on:", "options": ["Insertion order", "Size", "Priority value", "Random selection"], "ans": "Priority value" }
      ]
    },
    "unit3": {
      "notes": "Trees and Graphs are non-linear data structures used to model hierarchical and networked relationships. A binary tree has at most two children per node. A Binary Search Tree (BST) maintains the property that left child values are less and right child values are greater than the parent. BST search, insert, and delete operations average O(log n). AVL trees are self-balancing BSTs ensuring O(log n) worst-case. Graphs consist of vertices and edges, which can be directed or undirected, weighted or unweighted. BFS uses a queue for level-order traversal, while DFS uses a stack or recursion. Applications include shortest path algorithms, network routing, and social network analysis.",
      "quiz": [
        { "q": "In a BST, the left child value is:", "options": ["Greater than parent", "Less than parent", "Equal to parent", "Random"], "ans": "Less than parent" },
        { "q": "What is the worst-case search time in an AVL tree?", "options": ["O(n)", "O(log n)", "O(n^2)", "O(1)"], "ans": "O(log n)" },
        { "q": "BFS traversal uses which data structure?", "options": ["Stack", "Queue", "Heap", "Array"], "ans": "Queue" },
        { "q": "A graph with directed edges is called:", "options": ["Undirected graph", "Weighted graph", "Directed graph (Digraph)", "Complete graph"], "ans": "Directed graph (Digraph)" },
        { "q": "The maximum number of children in a binary tree node is:", "options": ["1", "2", "3", "Unlimited"], "ans": "2" }
      ]
    }
  },
  "Operating System": {
    "unit1": {
      "notes": "An Operating System (OS) is system software that manages hardware resources and provides services to user programs. Key functions include process management, memory management, file system management, and I/O handling. The OS acts as an intermediary between users and hardware. Types include batch OS, time-sharing OS, distributed OS, real-time OS, and network OS. The kernel is the core component that manages CPU, memory, and devices. System calls provide the interface between user programs and the OS. Multiprogramming keeps the CPU busy by running multiple programs, while multitasking allows rapid switching between processes to give the illusion of parallelism.",
      "quiz": [
        { "q": "What is the core component of an operating system?", "options": ["Shell", "Kernel", "Compiler", "Loader"], "ans": "Kernel" },
        { "q": "System calls provide an interface between:", "options": ["Hardware and kernel", "User programs and OS", "CPU and memory", "Disk and RAM"], "ans": "User programs and OS" },
        { "q": "Which OS type processes jobs in batches without user interaction?", "options": ["Real-time OS", "Time-sharing OS", "Batch OS", "Distributed OS"], "ans": "Batch OS" },
        { "q": "Multiprogramming aims to:", "options": ["Reduce memory", "Keep CPU busy", "Increase disk space", "Simplify code"], "ans": "Keep CPU busy" },
        { "q": "Which is NOT a function of an OS?", "options": ["Process management", "Memory management", "Code compilation", "File management"], "ans": "Code compilation" }
      ]
    },
    "unit2": {
      "notes": "Process scheduling determines which process runs on the CPU and for how long. A process transitions through states: new, ready, running, waiting, and terminated. The scheduler selects from the ready queue using algorithms like First-Come First-Served (FCFS), Shortest Job First (SJF), Priority Scheduling, and Round Robin (RR). FCFS is simple but may cause the convoy effect. SJF minimizes average waiting time but requires knowing burst times. Round Robin assigns fixed time quanta, ensuring fairness. Context switching saves and restores process state when switching. Preemptive scheduling allows interrupting a running process, while non-preemptive waits for completion or voluntary release.",
      "quiz": [
        { "q": "Which scheduling algorithm uses fixed time quanta?", "options": ["FCFS", "SJF", "Round Robin", "Priority"], "ans": "Round Robin" },
        { "q": "The convoy effect is a drawback of:", "options": ["SJF", "FCFS", "Round Robin", "Priority Scheduling"], "ans": "FCFS" },
        { "q": "Which algorithm minimizes average waiting time?", "options": ["FCFS", "Shortest Job First", "Round Robin", "LIFO"], "ans": "Shortest Job First" },
        { "q": "Context switching involves:", "options": ["Deleting a process", "Saving and restoring process state", "Allocating memory", "Compiling code"], "ans": "Saving and restoring process state" },
        { "q": "In preemptive scheduling, a running process can be:", "options": ["Terminated only", "Interrupted by the scheduler", "Never stopped", "Paused by the user only"], "ans": "Interrupted by the scheduler" }
      ]
    },
    "unit3": {
      "notes": "Memory management allocates and deallocates memory for processes efficiently. Contiguous allocation assigns a single block to each process, while paging divides memory into fixed-size frames and processes into pages. Paging eliminates external fragmentation but may cause internal fragmentation. Virtual memory allows processes to use more memory than physically available by using disk as an extension. Page replacement algorithms such as FIFO, LRU (Least Recently Used), and Optimal decide which page to evict when memory is full. Thrashing occurs when excessive paging causes the system to spend more time swapping than executing. Segmentation divides memory based on logical segments like code, data, and stack.",
      "quiz": [
        { "q": "Paging eliminates which type of fragmentation?", "options": ["Internal", "External", "Both", "Neither"], "ans": "External" },
        { "q": "Virtual memory uses which storage as an extension of RAM?", "options": ["Cache", "ROM", "Disk", "Registers"], "ans": "Disk" },
        { "q": "Which page replacement algorithm is theoretically optimal?", "options": ["FIFO", "LRU", "Optimal", "Random"], "ans": "Optimal" },
        { "q": "Thrashing occurs when:", "options": ["CPU is idle", "Excessive paging reduces performance", "Memory is empty", "Disk is full"], "ans": "Excessive paging reduces performance" },
        { "q": "Segmentation divides memory based on:", "options": ["Fixed-size frames", "Logical segments", "Random blocks", "Equal partitions"], "ans": "Logical segments" }
      ]
    }
  }
};

const unitNames = {
  "Maths": { "unit1": "Matrices & Determinants", "unit2": "Differential Calculus", "unit3": "Integral Calculus" },
  "Data Structures": { "unit1": "Arrays & Linked Lists", "unit2": "Stacks & Queues", "unit3": "Trees & Graphs" },
  "Operating System": { "unit1": "OS Fundamentals", "unit2": "Process Scheduling", "unit3": "Memory Management" }
};

const subjectIcons = {
  "Maths": "&#x1D465;", // math italic x
  "Data Structures": "&lt;/&gt;",
  "Operating System": "&#9881;" // gear
};

// ==================== STATE ====================

let currentSubject = null;
let currentUnit = null;
let quizState = { currentQ: 0, selected: null, showResult: false, score: 0, finished: false };
let startTime = 0;


// ==================== SVGs ====================

const SVG_BOOK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>';
const SVG_CLIPBOARD = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>';
const SVG_ARROW_LEFT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>';
const SVG_CHECK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>';
const SVG_X = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>';

// ==================== RENDERING ====================

function render() {
  const app = document.getElementById("app");

  if (!currentSubject) app.innerHTML = renderSubjectScreen();
  else if (!currentUnit) app.innerHTML = renderUnitScreen();
  else app.innerHTML = renderStudyScreen();

  attachEvents();
}

// ---------- Subject Screen ----------

function renderSubjectScreen() {
  const subjects = Object.keys(academicData);
  let cards = "";

  subjects.forEach(name => {
    const unitCount = Object.keys(academicData[name]).length;
    cards += `
        <div class="card" data-action="select-subject" data-subject="${name}">
          <div class="card-top">
            <div class="card-icon">${subjectIcons[name]}</div>
            <span class="badge">${unitCount} Units</span>
          </div>
          <h3>${name}</h3>
          <p class="card-desc">Study notes and quizzes for all ${unitCount} units</p>
          <div class="card-meta">
            <span>${unitCount * 5} Questions</span>
            <span>${unitCount} Study Notes</span>
          </div>
        </div>
      `;
  });

  return `
      
      <div class="main">
        <h2 class="section-title">Choose a subject to begin</h2>
        <p class="section-subtitle">Each subject contains study notes and interactive quizzes across 3 units.</p>
        <div class="card-grid">${cards}</div>
        <div class="info-box">
          <div class="info-icon">&#8505;</div>
          <div>
            <h3>How it works</h3>
            <p>Select a subject, then choose a unit to explore. Each unit contains concise study notes to review key concepts, followed by a 5-question MCQ quiz to test your understanding. Track your score and retry as needed.</p>
          </div>
        </div>
      </div>
    `;
}

// ---------- Unit Screen ----------

function renderUnitScreen() {
  const subjectData = academicData[currentSubject];
  const units = Object.keys(subjectData);
  let cards = "";

  units.forEach((key, i) => {
    const name = unitNames[currentSubject][key];
    const preview = subjectData[key].notes.slice(0, 100);
    cards += `
        <div class="card" data-action="select-unit" data-unit="${key}">
          <div class="card-top">
            <div class="card-number">${i + 1}</div>
            <span class="badge">5 MCQs</span>
          </div>
          <h3>${name}</h3>
          <p class="card-desc">${preview}...</p>
        </div>
      `;
  });

  return `
      <header class="header">
        <div class="header-inner">
          <button class="back-btn" data-action="back">${SVG_ARROW_LEFT}</button>
          <div class="header-text" style="flex:1">
            <h1>${currentSubject}</h1>
            <p>Select a unit to study</p>
          </div>
          <span class="badge header-badge">${units.length} Units</span>
        </div>
      </header>
      <div class="main">
        <div class="card-grid">${cards}</div>
      </div>
    `;
}

// ---------- Study Screen (Notes + Quiz) ----------

function renderStudyScreen() {
  const unitData = academicData[currentSubject][currentUnit];
  const name = unitNames[currentSubject][currentUnit];

  return `
      <header class="header">
        <div class="header-inner">
          <button class="back-btn" data-action="back">${SVG_ARROW_LEFT}</button>
          <div class="header-text" style="flex:1">
            <h1>${name}</h1>
            <p>${currentSubject}</p>
          </div>
        </div>
      </header>
      <div class="main main-narrow">
        <div class="tabs-bar">
          <button class="tab-btn active" data-tab="notes">${SVG_BOOK} Notes</button>
          <button class="tab-btn" data-tab="quiz">${SVG_CLIPBOARD} Quiz</button>
        </div>
        <div id="tab-notes" class="tab-panel active">
          ${renderNotes(unitData, name)}
        </div>
        <div id="tab-quiz" class="tab-panel">
          ${renderQuiz(unitData, name)}
        </div>
      </div>
    `;
}

function renderNotes(unitData, name) {

  let key = "notes_" + currentSubject + "_" + currentUnit;

  // single unified notes entry
  let notes = JSON.parse(localStorage.getItem(key) || "null");

  // Handle old array format or invalid data
  if (!notes || Array.isArray(notes)) {
    notes = {
      title: "NOTES",
      file: "#",
      rating: 4,
      reviews: []
    };
    localStorage.setItem(key, JSON.stringify(notes));
  }

  // Ensure title exists
  if (!notes.title) {
    notes.title = "NOTES";
  }

  const stars = Array(5).fill('⭐').map((star, idx) =>
    `<span class="star ${idx < notes.rating ? 'active' : ''}" data-index="0" data-star="${idx + 1}">
      ${idx < notes.rating ? '⭐' : '☆'}
    </span>`
  ).join('');

  const studentNotesHTML = `
<div class="notes-card" style="margin-top:20px">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <b style="font-size:16px;">${notes.title}</b>
    <a href="${notes.file}" download>
      <button style="padding:6px 14px; background:var(--primary); color:white; border:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500;">
        ⬇ Download
      </button>
    </a>
  </div>

  <div class="rating-container">
    <div class="rating-header">
      <span>Rate this resource</span>
      <div class="current-rating">
        <span id="rating_0">${notes.rating}</span>
        <span>⭐</span>
      </div>
    </div>
    
    <div class="stars-container">
      <div class="star-rating" id="stars_0">
        ${stars}
      </div>
      <div class="rating-value-display" id="display_0">${notes.rating}</div>
    </div>

    <div class="review-box">
      <label class="review-label">📝 Write a Review</label>
      <textarea 
        class="review-textarea" 
        id="review_0" 
        placeholder="Share your thoughts about this resource... (optional)"
        maxlength="500"
      ></textarea>
      <div class="review-actions">
        <button class="submit-rating-btn submitRating" data-index="0">
          ✓ Submit Rating & Review
        </button>
      </div>
      <div class="review-success" id="success_0">
        ✓ Thank you! Your rating and review have been saved.
      </div>
    </div>
  </div>
</div>
`;

  return `
    <div class="notes-card">
    <div class="notes-header">${SVG_BOOK} Teacher Notes</div>
    <div class="notes-unit-name">${name}</div>
    <div class="notes-body">${unitData.notes}</div>
    </div>
    
    <hr style="margin:25px 0">
    
    <h3 style="font-size:18px; margin-bottom:16px;">📚 Student Notes</h3>
    
    <div id="studentList">${studentNotesHTML}</div>
    `;
}

function renderQuiz(unitData, name) {
  const qs = unitData.quiz;
  const { currentQ, selected, showResult, score, finished } = quizState;

  if (finished) {

    setTimeout(renderCharts, 100);

    return `
        <div class="result-card">
        
        <h2>Performance Analytics</h2>
        
        <canvas id="donutChart"></canvas>
        
        <br><br>
        
        <canvas id="lineChart"></canvas>
        
        <br>
        
        <button class="retry-btn" data-action="retry-quiz">
        Retry Quiz
        </button>
        
        </div>
        `;
  }

  const question = qs[currentQ];
  const progress = ((currentQ + (showResult ? 1 : 0)) / qs.length) * 100;
  const isCorrect = selected === question.ans;

  let optionsHTML = "";
  question.options.forEach(opt => {
    let cls = "option-btn";
    if (showResult) {
      if (opt === question.ans) cls += " correct";
      else if (opt === selected && !isCorrect) cls += " wrong";
      else cls += " dimmed";
    }
    let icon = "";
    if (showResult && opt === question.ans) icon = `<span class="option-icon">${SVG_CHECK}</span>`;
    if (showResult && opt === selected && opt !== question.ans) icon = `<span class="option-icon">${SVG_X}</span>`;

    optionsHTML += `<button class="${cls}" data-action="select-option" data-option="${opt}" ${showResult ? "disabled" : ""}>${icon} ${opt}</button>`;
  });

  let footerHTML = "";
  if (showResult) {
    const footerText = isCorrect
      ? `<span class="quiz-footer-text correct-text">Correct!</span>`
      : `<span class="quiz-footer-text">Answer: ${question.ans}</span>`;
    const btnLabel = currentQ < qs.length - 1 ? "Next" : "Finish";
    footerHTML = `
        <div class="quiz-footer">
          ${footerText}
          <button class="next-btn" data-action="next-question">${btnLabel}</button>
        </div>
      `;
  }

  return `
      <div class="quiz-card">
        <div class="quiz-header">
          <h3>Quiz</h3>
          <span class="badge">${currentQ + 1} / ${qs.length}</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width:${progress}%"></div>
        </div>
        <div class="quiz-body">
          <p class="quiz-question">${question.q}</p>
          <div class="options-list">${optionsHTML}</div>
        </div>
        ${footerHTML}
      </div>
    `;
}

// ==================== EVENT HANDLING ====================

function attachEvents() {
  document.querySelectorAll("[data-action]").forEach(el => {
    el.addEventListener("click", handleAction);
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", handleTab);
  });
}

function handleAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;

  switch (action) {
    case "select-subject":
      currentSubject = el.dataset.subject;
      render();
      break;

    case "select-unit":
      currentUnit = el.dataset.unit;
      startTime = Date.now();
      resetQuiz();
      render();
      break;

    case "back":
      if (currentUnit) {
        currentUnit = null;
      } else {
        currentSubject = null;
      }
      render();
      break;

    case "select-option":
      if (quizState.showResult) return;
      const option = el.dataset.option;
      const question = academicData[currentSubject][currentUnit].quiz[quizState.currentQ];
      quizState.selected = option;
      quizState.showResult = true;
      if (option === question.ans) quizState.score++;
      refreshQuiz();
      break;

    case "next-question":
      const qs = academicData[currentSubject][currentUnit].quiz;
      if (quizState.currentQ < qs.length - 1) {
        quizState.currentQ++;
        quizState.selected = null;
        quizState.showResult = false;
      } else {

        quizState.finished = true;

        let total = academicData[currentSubject][currentUnit].quiz.length;
        let accuracy = (quizState.score / total) * 100;
        let time = (Date.now() - startTime) / 1000;
        let speed = (total / time) * 60;

        localStorage.setItem("lastResult",
          JSON.stringify([quizState.score, accuracy, speed]));

        let key = "scores_" + currentSubject;
        let arr = JSON.parse(localStorage.getItem(key) || "[0,0,0]");
        let index = parseInt(currentUnit.replace("unit", "")) - 1;
        arr[index] = quizState.score;
        localStorage.setItem(key, JSON.stringify(arr));
        saveResult(
          quizState.score,
          total,
          currentSubject,
          currentUnit
        );


      }
      refreshQuiz();
      break;

    case "retry-quiz":
      resetQuiz();
      refreshQuiz();
      break;
  }
}

function handleTab(e) {
  const tabName = e.currentTarget.dataset.tab;

  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  e.currentTarget.classList.add("active");

  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.getElementById("tab-" + tabName).classList.add("active");
}

function refreshQuiz() {
  const unitData = academicData[currentSubject][currentUnit];
  const name = unitNames[currentSubject][currentUnit];
  const quizPanel = document.getElementById("tab-quiz");
  if (quizPanel) {
    quizPanel.innerHTML = renderQuiz(unitData, name);
    quizPanel.querySelectorAll("[data-action]").forEach(el => {
      el.addEventListener("click", handleAction);
    });
  }
}

function resetQuiz() {
  quizState = { currentQ: 0, selected: null, showResult: false, score: 0, finished: false };
}


document.addEventListener("click", e => {

  // star rating click
  if (e.target.classList.contains("star")) {
    let i = e.target.dataset.index;
    let star = parseInt(e.target.dataset.star);

    let key = "notes_" + currentSubject + "_" + currentUnit;
    let arr = JSON.parse(localStorage.getItem(key));

    arr[i].rating = star;

    // Update display
    document.getElementById("display_" + i).innerText = star;
    document.getElementById("rating_" + i).innerText = star;

    // Update star visuals
    document.querySelectorAll("#stars_" + i + " .star").forEach((s, idx) => {
      if (idx < star) {
        s.innerText = "⭐";
        s.classList.add("active");
      } else {
        s.innerText = "☆";
        s.classList.remove("active");
      }
    });

    localStorage.setItem(key, JSON.stringify(arr));
  }

  // submit rating and review
  if (e.target.classList.contains("submitRating")) {

    const user = auth.currentUser;

    if (!user) {
      alert("Login first");
      return;
    }

    const rating = parseInt(document.getElementById("display_0").innerText);
    const reviewText = document.getElementById("review_0").value;

    if (!reviewText) {
      alert("Write review");
      return;
    }

    // get logged in user data
    (async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();

        await addDoc(collection(db, "reviews"), {
          name: userData.name,
          regId: userData.studentId,
          uid: user.uid,
          subject: currentSubject,
          unit: currentUnit,
          rating: rating,
          review: reviewText,
          time: new Date()
        });

        document.getElementById("review_0").value = "";

        // Show success message
        let successEl = document.getElementById("success_0");
        successEl.classList.add("show");

        setTimeout(() => {
          successEl.classList.remove("show");
        }, 3000);

        loadReviews();
      } catch (error) {
        alert("Error saving review: " + error.message);
      }
    })();
  }

});

function renderCharts() {

  let res = JSON.parse(localStorage.getItem("lastResult"));
  if (!res) return;

  let scores = JSON.parse(localStorage.getItem("scores_" + currentSubject) || "[0,0,0]");

  new Chart(document.getElementById("donutChart"), {
    type: "doughnut",
    data: {
      labels: ["Score", "Accuracy", "Speed"],
      datasets: [{ data: res }]
    }
  });

  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Unit1", "Unit2", "Unit3"],
      datasets: [{ label: "Progress", data: scores, fill: false }]
    }
  });
}
async function saveResult(score, total, subject, unit) {

  const user = auth.currentUser;

  if (!user) {
    alert("Login first");
    return;
  }

  const id = Date.now().toString();

  await setDoc(doc(db, "results", id), {
    email: user.email,
    uid: user.uid,
    score: score,
    total: total,
    subject: subject,
    unit: unit,
    time: new Date().toLocaleString()
  });

  alert("Result saved!");
}

// ==================== INIT ====================

document.addEventListener("DOMContentLoaded", ()=>{

  render();
  setTimeout(renderCharts,200);

  // NAVBAR LOGOUT CODE
  import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js")
  .then(({getAuth, signOut})=>{
      
      const auth = getAuth();
      
      document.addEventListener("click",(e)=>{
          if(e.target.id==="logoutBtn"){
              signOut(auth).then(()=>{
                  window.location.href="login.html";
              });
          }
      });

  });

});

async function loadReviews() {

  const container = document.getElementById("studentList");
  if (!container) return;

  container.innerHTML = "";

  const q = query(
    collection(db, "reviews"),
    where("subject", "==", currentSubject),
    where("unit", "==", currentUnit)
  );

  const snap = await getDocs(q);

  snap.forEach(d => {
    const data = d.data();

    const div = document.createElement("div");
    div.style.background = "#fff";
    div.style.padding = "12px";
    div.style.marginTop = "10px";
    div.style.borderRadius = "8px";
    div.style.border = "1px solid #ddd";

    div.innerHTML = `
      <b>${data.name} (${data.regId})</b><br>
      ⭐ ${data.rating}<br>
      ${data.review}
    `;

    container.appendChild(div);
  });
}

