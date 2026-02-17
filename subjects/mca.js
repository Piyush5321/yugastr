// ==================== DATA ====================

const academicData = {
    "Computer Networks": {
      "unit1": {
        "notes": "Computer Networks enable communication between multiple devices connected through transmission media. A network consists of nodes, links, and protocols that govern data exchange. Types of networks include LAN, MAN, and WAN based on geographical coverage. The OSI model defines seven layers responsible for different communication tasks such as physical transmission, routing, and application interaction. Network topologies like star, ring, bus, and mesh describe structural arrangements. Understanding addressing, packet structure, and protocols such as TCP/IP is essential for reliable data transfer. Networking fundamentals form the backbone of internet communication, distributed computing, and cloud infrastructure.",
        "quiz": [
          {"q":"Which network type covers a small geographic area?","options":["WAN","MAN","LAN","PAN"],"ans":"LAN"},
          {"q":"OSI model has how many layers?","options":["5","6","7","8"],"ans":"7"},
          {"q":"Which topology uses a central hub?","options":["Ring","Bus","Star","Mesh"],"ans":"Star"},
          {"q":"TCP/IP is a:","options":["Device","Protocol suite","Cable","Topology"],"ans":"Protocol suite"},
          {"q":"WAN stands for:","options":["Wide Area Network","Wireless Access Node","Web Application Network","World Area Node"],"ans":"Wide Area Network"}
        ]
      },
      "unit2": {
        "notes": "Data transmission refers to the transfer of data between devices using communication channels. Transmission modes include simplex, half duplex, and full duplex depending on direction of data flow. Bandwidth represents the maximum data transfer rate of a network. Switching techniques such as circuit switching and packet switching determine how data travels through networks. Routers, switches, and bridges are networking devices responsible for forwarding packets efficiently. Error detection methods like parity bits and checksums ensure reliability. Flow control and congestion control mechanisms regulate transmission speed and prevent overload, ensuring stable and efficient network performance under heavy traffic conditions.",
        "quiz": [
          {"q":"Full duplex transmission allows:","options":["One-way transfer","Two-way simultaneous transfer","Slow transfer","Wireless only"],"ans":"Two-way simultaneous transfer"},
          {"q":"Bandwidth measures:","options":["Distance","Speed capacity","Memory","Voltage"],"ans":"Speed capacity"},
          {"q":"Which device forwards packets between networks?","options":["Switch","Router","Hub","Repeater"],"ans":"Router"},
          {"q":"Packet switching divides data into:","options":["Frames","Signals","Packets","Codes"],"ans":"Packets"},
          {"q":"Error detection ensures:","options":["Security","Accuracy","Topology","Design"],"ans":"Accuracy"}
        ]
      },
      "unit3": {
        "notes": "Network security protects data and resources from unauthorized access and cyber threats. Encryption transforms plaintext into ciphertext so that only authorized users can read it. Firewalls monitor incoming and outgoing network traffic and block suspicious activity. Authentication verifies user identity before granting access, while authorization determines permissions. Virtual Private Networks create secure tunnels over public networks. Common threats include malware, phishing, spoofing, and denial-of-service attacks. Secure communication protocols such as HTTPS and SSL/TLS ensure safe data transfer. Understanding security principles is crucial for protecting sensitive information and maintaining integrity, confidentiality, and availability in modern networks.",
        "quiz": [
          {"q":"Encryption converts plaintext into:","options":["Signals","Ciphertext","Packets","Frames"],"ans":"Ciphertext"},
          {"q":"Firewall is used for:","options":["Cooling system","Blocking unauthorized access","Increasing speed","Storing files"],"ans":"Blocking unauthorized access"},
          {"q":"VPN provides:","options":["Storage","Secure connection","RAM","Speed boost"],"ans":"Secure connection"},
          {"q":"HTTPS ensures:","options":["Security","Design","Storage","Speed only"],"ans":"Security"},
          {"q":"Authentication verifies:","options":["Cable type","Identity","Bandwidth","Topology"],"ans":"Identity"}
        ]
      }
    },
  
    "Java": {
      "unit1": {
        "notes": "Java is a high-level, object-oriented programming language designed for platform independence. Programs written in Java are compiled into bytecode, which runs on the Java Virtual Machine. Core features include simplicity, portability, security, and robustness. Java supports classes, objects, inheritance, polymorphism, abstraction, and encapsulation. It is widely used in web development, mobile applications, enterprise systems, and embedded devices. Java syntax is similar to C++ but eliminates low-level memory manipulation. Understanding variables, data types, operators, and control statements forms the foundation for mastering Java programming and building scalable software applications.",
        "quiz": [
          {"q":"Java code runs on:","options":["Compiler only","JVM","Browser","Database"],"ans":"JVM"},
          {"q":"Java is primarily:","options":["Procedural","Object-oriented","Markup","Assembly"],"ans":"Object-oriented"},
          {"q":"Bytecode is executed by:","options":["OS","JVM","CPU directly","Router"],"ans":"JVM"},
          {"q":"Which is not a Java feature?","options":["Portability","Pointers","Security","Robustness"],"ans":"Pointers"},
          {"q":"Java syntax is similar to:","options":["Python","C++","HTML","SQL"],"ans":"C++"}
        ]
      },
      "unit2": {
        "notes": "Object-Oriented Programming in Java is based on four main principles: encapsulation, inheritance, polymorphism, and abstraction. Encapsulation binds data and methods together within a class. Inheritance allows one class to acquire properties of another, promoting code reuse. Polymorphism enables methods to behave differently based on input or object type. Abstraction hides internal implementation details and exposes only essential features. Classes act as blueprints for objects, while constructors initialize them. Understanding OOP concepts is essential for designing modular, maintainable, and reusable programs, making Java suitable for large-scale application development and enterprise software systems.",
        "quiz": [
          {"q":"Encapsulation means:","options":["Binding data and methods","Deleting data","Looping","Printing"],"ans":"Binding data and methods"},
          {"q":"Inheritance allows:","options":["Code reuse","Deletion","Compilation","Execution"],"ans":"Code reuse"},
          {"q":"Polymorphism refers to:","options":["Single form","Multiple forms","No form","Binary form"],"ans":"Multiple forms"},
          {"q":"Class is a:","options":["Function","Blueprint","Variable","Operator"],"ans":"Blueprint"},
          {"q":"Abstraction hides:","options":["Variables","Implementation details","Output","Loops"],"ans":"Implementation details"}
        ]
      },
      "unit3": {
        "notes": "Exception handling in Java manages runtime errors so that programs can continue executing smoothly. Exceptions are events that disrupt normal program flow, such as division by zero or file not found. Java provides try, catch, finally, throw, and throws keywords to handle exceptions. Checked exceptions must be handled at compile time, while unchecked exceptions occur during runtime. The finally block executes regardless of whether an exception occurs. Proper exception handling improves reliability, prevents crashes, and ensures graceful error recovery. It is a crucial aspect of writing robust and production-quality Java applications.",
        "quiz": [
          {"q":"Exception occurs during:","options":["Compilation only","Runtime","Design","Typing"],"ans":"Runtime"},
          {"q":"Which block handles exceptions?","options":["try","catch","loop","class"],"ans":"catch"},
          {"q":"finally block executes:","options":["Never","Only on error","Always","Sometimes"],"ans":"Always"},
          {"q":"throw keyword is used to:","options":["Delete error","Create exception","Print","Compile"],"ans":"Create exception"},
          {"q":"Checked exceptions occur at:","options":["Runtime","Compile time","Shutdown","Boot"],"ans":"Compile time"}
        ]
      }
    },
  
    "Python": {
      "unit1": {
        "notes": "Python is a high-level interpreted programming language known for its simplicity and readability. It uses indentation instead of braces to define code blocks, making programs clean and easy to understand. Python supports multiple programming paradigms including procedural, object-oriented, and functional programming. It is widely used in data science, artificial intelligence, web development, automation, and scripting. Key features include dynamic typing, automatic memory management, and a vast standard library. Understanding variables, data types, operators, and input-output functions is essential for beginners to start building Python programs effectively.",
        "quiz": [
          {"q":"Python is a:","options":["Compiled language","Interpreted language","Assembly language","Machine code"],"ans":"Interpreted language"},
          {"q":"Python uses indentation to define:","options":["Variables","Blocks","Comments","Numbers"],"ans":"Blocks"},
          {"q":"Python is commonly used in:","options":["AI","Data Science","Web Development","All of these"],"ans":"All of these"},
          {"q":"Python typing is:","options":["Static","Dynamic","Manual","Binary"],"ans":"Dynamic"},
          {"q":"Which symbol is used for comments?","options":["//","#","<!--","**"],"ans":"#"}
        ]
      },
      "unit2": {
        "notes": "Python provides built-in data structures that allow efficient storage and manipulation of data. Lists are ordered and mutable collections, while tuples are ordered but immutable. Dictionaries store key-value pairs and allow fast data retrieval. Sets store unique elements without duplicates. These structures enable flexible programming and simplify complex tasks. Understanding indexing, slicing, iteration, and built-in functions is essential for working with collections. Choosing the right data structure improves performance and readability. Python’s rich collection types make it powerful for solving real-world computational problems efficiently.",
        "quiz": [
          {"q":"List is:","options":["Immutable","Mutable","Constant","Fixed"],"ans":"Mutable"},
          {"q":"Tuple is:","options":["Mutable","Immutable","Dynamic","Loop"],"ans":"Immutable"},
          {"q":"Dictionary stores:","options":["Numbers","Keys and values","Loops","Functions"],"ans":"Keys and values"},
          {"q":"Set stores:","options":["Duplicates","Unique elements","Strings only","Integers only"],"ans":"Unique elements"},
          {"q":"Indexing is used to:","options":["Delete data","Access elements","Compile","Encrypt"],"ans":"Access elements"}
        ]
      },
      "unit3": {
        "notes": "Functions in Python allow code reusability and modular programming. A function is defined using the def keyword and may accept parameters and return values. Functions help organize programs into logical blocks, making them easier to debug and maintain. Python supports built-in functions as well as user-defined functions. Lambda functions provide anonymous short expressions. Recursion allows functions to call themselves for solving repetitive problems. Understanding function scope, arguments, and return statements is crucial for writing efficient programs. Functions are fundamental building blocks for developing structured and scalable Python applications.",
        "quiz": [
          {"q":"Function keyword in Python is:","options":["func","define","def","function"],"ans":"def"},
          {"q":"Functions help in:","options":["Reducing code reuse","Organizing code","Slowing execution","Deleting variables"],"ans":"Organizing code"},
          {"q":"Lambda function is:","options":["Loop","Anonymous function","Variable","Operator"],"ans":"Anonymous function"},
          {"q":"Recursion means:","options":["Loop","Function calling itself","Sorting","Compiling"],"ans":"Function calling itself"},
          {"q":"Return statement is used to:","options":["Print","Exit program","Send value back","Loop"],"ans":"Send value back"}
        ]
      }
    }
  };
  const unitNames = {
    "Computer Networks": {
      "unit1": "Network Fundamentals",
      "unit2": "Data Transmission & Devices",
      "unit3": "Network Security"
    },
    "Java": {
      "unit1": "Java Basics",
      "unit2": "OOP Concepts",
      "unit3": "Exception Handling"
    },
    "Python": {
      "unit1": "Python Fundamentals",
      "unit2": "Data Structures",
      "unit3": "Functions & Recursion"
    }
  };
  
  const subjectIcons = {
    "Computer Networks": "&#128421;",   // network symbol
    "Java": "&#9749;",                   // coffee symbol
    "Python": "&#60;/&#62;"              // code brackets
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
  
    if (!currentSubject) {
      app.innerHTML = renderSubjectScreen();
    } else if (!currentUnit) {
      app.innerHTML = renderUnitScreen();
    } else {
      app.innerHTML = renderStudyScreen();
    }
  
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
      <header class="header">
        <div class="header-inner">
          <div class="header-icon">S</div>
          <div class="header-text">
            <h1>StudyHub</h1>
            <p>Your academic learning companion</p>
          </div>
        </div>
      </header>
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

    let key = "notes_"+currentSubject+"_"+currentUnit;
    
    // default demo notes (jo dusre students ne upload kiye)
    let list = JSON.parse(localStorage.getItem(key) || "null");
    
    if(!list){
    list = [
    {title:"Topper Notes",file:"#",rating:4},
    {title:"Quick Revision Notes",file:"#",rating:5},
    {title:"Exam Important Points",file:"#",rating:3}
    ];
    localStorage.setItem(key,JSON.stringify(list));
    }
    
    let studentHTML = list.map((n,i)=>`
<div class="notes-card" style="margin-top:15px">

<b>${n.title}</b>

<br><br>

<a href="${n.file}" download>
<button>Download</button>
</a>

<br><br>

⭐ Current Rating: ${n.rating}

<br><br>

<input type="range" min="0" max="5" step="1" value="0" id="slider_${i}" class="ratingSlider">
<div>0 ⭐ <span id="value_${i}">0</span> ⭐ 5</div>
<br>

<button class="submitRating" data-index="${i}">
Submit Rating
</button>

</div>
`).join("");
    
    return `
    <div class="notes-card">
    <div class="notes-header">${SVG_BOOK} Teacher Notes</div>
    <div class="notes-unit-name">${name}</div>
    <div class="notes-body">${unitData.notes}</div>
    </div>
    
    <hr style="margin:25px 0">
    
    <h3>Student Uploaded Notes</h3>
    
    <div id="studentList">${studentHTML}</div>
    `;
    }
  
  function renderQuiz(unitData, name) {
    const qs = unitData.quiz;
    const { currentQ, selected, showResult, score, finished } = quizState;
  
    if (finished) {

        setTimeout(renderCharts,100);
        
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
        }else {

            quizState.finished = true;
            
            let total = academicData[currentSubject][currentUnit].quiz.length;
            let accuracy = (quizState.score/total)*100;
            let time = (Date.now() - startTime)/1000;
            let speed = (total/time)*60;
            
            localStorage.setItem("lastResult",
            JSON.stringify([quizState.score, accuracy, speed]));
            
            let key="scores_"+currentSubject;
            let arr=JSON.parse(localStorage.getItem(key)||"[0,0,0]");
            let index=parseInt(currentUnit.replace("unit",""))-1;
            arr[index]=quizState.score;
            localStorage.setItem(key,JSON.stringify(arr));
            
            
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
  
    
    document.addEventListener("click",e=>{
    
    // upload note
    
    
    
    // rating
    if(e.target.classList.contains("rateBtn")){
    
    let i=e.target.dataset.rate;
    let key="notes_"+currentSubject+"_"+currentUnit;
    let arr=JSON.parse(localStorage.getItem(key));
    
    arr[i].rating++;
    localStorage.setItem(key,JSON.stringify(arr));
    render();
    }
    
    });
    function renderCharts(){

        let res = JSON.parse(localStorage.getItem("lastResult"));
        if(!res) return;
        
        let scores = JSON.parse(localStorage.getItem("scores_"+currentSubject)||"[0,0,0]");
        
        new Chart(document.getElementById("donutChart"),{
        type:"doughnut",
        data:{
        labels:["Score","Accuracy","Speed"],
        datasets:[{data:res}]
        }
        });
        
        new Chart(document.getElementById("lineChart"),{
        type:"line",
        data:{
        labels:["Unit1","Unit2","Unit3"],
        datasets:[{label:"Progress",data:scores,fill:false}]
        }
        });
        }
        document.addEventListener("click",e=>{

            // rating
            if(e.target.classList.contains("submitRating")){
        
                let i = e.target.dataset.index;
                
                let slider = document.getElementById("slider_"+i);
                let value = Number(slider.value);
                
                let key="notes_"+currentSubject+"_"+currentUnit;
                let arr=JSON.parse(localStorage.getItem(key));
                
                arr[i].rating = value;
                
                localStorage.setItem(key,JSON.stringify(arr));
                
                render();
            }
        
        }); 
        document.addEventListener("input", e=>{
            if(e.target.classList.contains("ratingSlider")){
            
            let id = e.target.id.split("_")[1];
            document.getElementById("value_"+id).innerText = e.target.value;
            
            }
            });
        
        // ==================== INIT ====================
        
        document.addEventListener("DOMContentLoaded", ()=>{
            render();
            setTimeout(renderCharts,200);
        });
