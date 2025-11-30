// DOM Elements
        const authContainer = document.getElementById('auth-container');
        const appPreview = document.getElementById('app-preview');
        const closeApp = document.getElementById('close-app');
        const authForm = document.getElementById('auth-form');
        const formTitle = document.getElementById('form-title');
        const submitBtn = document.getElementById('submit-btn');
        const switchMode = document.getElementById('switch-mode');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const signupExtra = document.getElementById('signup-extra');
        const themeToggle = document.getElementById('theme-toggle');
        const sportsElements = document.getElementById('sports-elements');
        const navItems = document.querySelectorAll('.nav-item');
        const dashboards = document.querySelectorAll('.dashboard');
        const kitItems = document.querySelectorAll('.kit-item');
        const athleteStories = document.querySelectorAll('.story');
        const athleteModal = document.getElementById('athlete-modal');
        const modalClose = document.getElementById('modal-close');
        const modalBody = document.getElementById('modal-body');
        const modalAthleteName = document.getElementById('modal-athlete-name');
        const startTestBtn = document.getElementById('start-test-btn');
        const testContainer = document.getElementById('test-container');
        const closeTest = document.getElementById('close-test');
        const questionContainer = document.getElementById('question-container');
        const testProgressBar = document.getElementById('test-progress-bar');
        const resultContainer = document.getElementById('result-container');
        const resultScore = document.getElementById('result-score');
        const resultMessage = document.getElementById('result-message');
        const retryTest = document.getElementById('retry-test');
        
        let isLoginMode = true;
        let isIndoorTheme = false;
        let currentQuestion = 0;
        let userAnswers = [];
        
        // Test questions
        const testQuestions = [
            {
                question: "Which country won the Cricket World Cup in 2011?",
                options: ["Australia", "India", "England", "Sri Lanka"],
                correct: 1
            },
            {
                question: "Who has won the most Ballon d'Or awards?",
                options: ["Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane", "Ronaldinho"],
                correct: 1
            },
            {
                question: "In which sport is the term 'Love' used?",
                options: ["Tennis", "Badminton", "Table Tennis", "All of the above"],
                correct: 3
            },
            {
                question: "Which Indian athlete has won an Olympic gold medal in individual events?",
                options: ["Milkha Singh", "P.T. Usha", "Abhinav Bindra", "Saina Nehwal"],
                correct: 2
            },
            {
                question: "How many players are there in a football team on the field?",
                options: ["9", "10", "11", "12"],
                correct: 2
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Italy", "Brazil", "Argentina"],
                correct: 2
            },
            {
                question: "What is the duration of a professional boxing round?",
                options: ["2 minutes", "3 minutes", "4 minutes", "5 minutes"],
                correct: 1
            },
            {
                question: "Which of these is NOT a Grand Slam tennis tournament?",
                options: ["Wimbledon", "French Open", "US Open", "Indian Open"],
                correct: 3
            },
            {
                question: "In cricket, how many runs is a boundary worth?",
                options: ["4", "6", "It depends", "Both 4 and 6"],
                correct: 3
            },
            {
                question: "Which Indian state is known for producing many hockey players?",
                options: ["Punjab", "Kerala", "Tamil Nadu", "Odisha"],
                correct: 0
            }
        ];
        
        // Athlete data
        const athleteData = {
            dhoni: {
                name: "M.S. Dhoni",
                sport: "Cricket",
                video: "https://www.youtube.com/watch?v=b4OH3vBANa4",
                about: "Mahendra Singh Dhoni is a former Indian cricketer and captain of the Indian national team. Under his captaincy, India won the 2007 ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions Trophy.",
                stats: {
                    matches: "538",
                    runs: "17,266",
                    centuries: "16",
                    trophies: "25"
                },
                accolades: [
                    "ICC ODI Player of the Year: 2008, 2009",
                    "Padma Bhushan: 2018",
                    "Rajiv Gandhi Khel Ratna: 2007",
                    "ICC World Cup: 2011",
                    "ICC Champions Trophy: 2013",
                    "ICC t20i World Cup: 2007"
                ]
            },
            messi: {
                name: "Lionel Messi",
                sport: "Football",
                video: "https://www.youtube.com/watch?v=ZmKy_fnRM_E",
                about: "Lionel Messi is an Argentine professional footballer who plays as a forward for Inter Miami CF and the Argentina national team. Widely regarded as one of the greatest players of all time.",
                stats: {
                    matches: "1,135",
                    goals: "896",
                    assists: "404",
                    trophies: "46"
                },
                accolades: [
                    "Ballon d'Or: 8 times",
                    "FIFA World Player of the Year: 2009, 2010, 2011, 2012, 2015",
                    "European Golden Shoe: 6 times",
                    "FIFA World Cup: 2022",
                    "UEFA Champions League: 4 times"
                ]
            },
            nadal: {
                name: "Rafael Nadal",
                sport: "Tennis",
                video: "https://www.youtube.com/watch?v=WgYqzy_LGng",
                about: "Rafael Nadal is a Spanish professional tennis player. He has been ranked world No. 1 in singles by the ATP for 209 weeks, and has finished as the year-end No. 1 five times.",
                stats: {
                    titles: "92",
                    "grand-slams": "22",
                    "win-percentage": "83%",
                    "olympic-gold": "2"
                },
                accolades: [
                    "French Open: 14 times",
                    "Wimbledon: 2 times",
                    "US Open: 4 times",
                    "Australian Open: 2 times",
                    "Olympic Gold Medal: 2008, 2016"
                ]
            },
            sindhu: {
                name: "P.V. Sindhu",
                sport: "Badminton",
                video: "https://www.youtube.com/watch?v=lQ0IYfIn7EE",
                about: "Pusarla Venkata Sindhu is an Indian badminton player. She is the first Indian woman to win an Olympic silver medal, and the first Indian to become the Badminton World Champion.",
                stats: {
                    titles: "24",
                    "olympic-medals": "2",
                    "world-championships": "1",
                    "commonwealth-games": "2"
                },
                accolades: [
                    "Olympic Silver Medal: 2016",
                    "Olympic Bronze Medal: 2020",
                    "World Championships: 2019",
                    "Commonwealth Games: 2018",
                    "Asian Games: 2018"
                ]
            }
        };
        
        // Initialize sports elements
        function initSportsElements() {
            const emojis = ['🏃', '⚽', '🏏', '🎾', '🏸', '🏊', '🤾', '🏅', '🥇', '🎯'];
            const containerWidth = sportsElements.offsetWidth;
            const containerHeight = sportsElements.offsetHeight;
            
            emojis.forEach(emoji => {
                const element = document.createElement('div');
                element.className = 'sport-emoji';
                element.textContent = emoji;
                element.style.left = `${Math.random() * containerWidth}px`;
                element.style.top = `${Math.random() * containerHeight}px`;
                element.style.animationDelay = `${Math.random() * 5}s`;
                sportsElements.appendChild(element);
            });
        }
        
        // Switch between Login and Signup modes
        switchMode.addEventListener('click', function(e) {
            e.preventDefault();
            isLoginMode = !isLoginMode;
            
            if (isLoginMode) {
                formTitle.textContent = 'Welcome Back';
                submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Sign In</span>';
                switchMode.textContent = 'Sign Up';
                signupExtra.classList.remove('show');
                
                // Smooth transition effect
                authContainer.style.transform = 'rotateY(0deg)';
            } else {
                formTitle.textContent = 'Create Account';
                submitBtn.innerHTML = '<i class="fas fa-user-plus"></i><span>Sign Up</span>';
                switchMode.textContent = 'Sign In';
                signupExtra.classList.add('show');
                
                // Smooth transition effect
                authContainer.style.transform = 'rotateY(10deg)';
                setTimeout(() => {
                    authContainer.style.transform = 'rotateY(0deg)';
                }, 300);
            }
        });
        
        // Form submission
        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            if (usernameInput.value.trim() === '') {
                alert('Please enter your username or email');
                return;
            }
            
            if (passwordInput.value.trim() === '') {
                alert('Please enter your password');
                return;
            }
            
            // In a real app, you would send this data to a backend
            // For this prototype, we'll just show the app preview
            authContainer.style.display = 'none';
            appPreview.style.display = 'block';
        });
        
        // Close app preview
        closeApp.addEventListener('click', function() {
            appPreview.style.display = 'none';
            authContainer.style.display = 'block';
        });
        
        // Theme toggle
        themeToggle.addEventListener('click', function() {
            isIndoorTheme = !isIndoorTheme;
            document.body.classList.toggle('indoor-theme');
            
            if (isIndoorTheme) {
                themeToggle.innerHTML = '<i class="fas fa-door-open"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-door-closed"></i>';
            }
        });
        
        // Navigation
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked nav item
                this.classList.add('active');
                
                // Hide all dashboards
                dashboards.forEach(dash => dash.style.display = 'none');
                
                // Show selected dashboard
                const target = this.getAttribute('data-target');
                document.getElementById(target).style.display = 'block';
            });
        });
        
        // Kit item selection
        kitItems.forEach(item => {
            item.addEventListener('click', function() {
                kitItems.forEach(kit => kit.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        // Athlete story click
        athleteStories.forEach(story => {
            story.addEventListener('click', function() {
                const athleteId = this.getAttribute('data-athlete');
                showAthleteModal(athleteId);
            });
        });
        
        // Show athlete modal
        function showAthleteModal(athleteId) {
            const athlete = athleteData[athleteId];
            if (!athlete) return;
            
            modalAthleteName.innerHTML = `<i class="fas fa-user"></i><span>${athlete.name}</span>`;
            
            modalBody.innerHTML = `
                <div class="athlete-video">
                    <iframe src="${athlete.video}" allowfullscreen></iframe>
                </div>
                <div class="athlete-info">
                    <h3>About ${athlete.name}</h3>
                    <p>${athlete.about}</p>
                    
                    <h3>Career Stats</h3>
                    <div class="stats-grid">
                        ${Object.entries(athlete.stats).map(([key, value]) => `
                            <div class="stat-item">
                                <div class="stat-value">${value}</div>
                                <div class="stat-label">${key.replace('-', ' ')}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <h3>Major Accolades</h3>
                    <ul class="accolades-list">
                        ${athlete.accolades.map(accolade => `
                            <li><i class="fas fa-trophy"></i> ${accolade}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
            
            athleteModal.style.display = 'flex';
        }
        
        // Close athlete modal
        modalClose.addEventListener('click', function() {
            athleteModal.style.display = 'none';
        });
        
        // Start test
        startTestBtn.addEventListener('click', function() {
            appPreview.style.display = 'none';
            testContainer.style.display = 'block';
            currentQuestion = 0;
            userAnswers = [];
            showQuestion(currentQuestion);
        });
        
        // Close test
        closeTest.addEventListener('click', function() {
            testContainer.style.display = 'none';
            appPreview.style.display = 'block';
        });
        
        // Show question
        function showQuestion(index) {
            if (index >= testQuestions.length) {
                showResults();
                return;
            }
            
            const question = testQuestions[index];
            const progress = ((index + 1) / testQuestions.length) * 100;
            testProgressBar.style.width = `${progress}%`;
            
            questionContainer.innerHTML = `
                <div class="question-card">
                    <div class="question-text">${index + 1}. ${question.question}</div>
                    <div class="options-container">
                        ${question.options.map((option, i) => `
                            <div class="option" data-index="${i}">
                                <div class="option-circle"></div>
                                <div class="option-text">${option}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="test-navigation">
                        <button class="test-btn prev" ${index === 0 ? 'disabled' : ''} id="prev-btn">Previous</button>
                        <button class="test-btn next" id="next-btn">${index === testQuestions.length - 1 ? 'Finish' : 'Next'}</button>
                    </div>
                </div>
            `;
            
            // Add event listeners to options
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    userAnswers[index] = parseInt(this.getAttribute('data-index'));
                });
            });
            
            // Add event listeners to navigation buttons
            document.getElementById('prev-btn').addEventListener('click', function() {
                if (currentQuestion > 0) {
                    currentQuestion--;
                    showQuestion(currentQuestion);
                }
            });
            
            document.getElementById('next-btn').addEventListener('click', function() {
                if (userAnswers[index] !== undefined) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    alert('Please select an answer before proceeding.');
                }
            });
        }
        
        // Show results
        function showResults() {
            let score = 0;
            for (let i = 0; i < testQuestions.length; i++) {
                if (userAnswers[i] === testQuestions[i].correct) {
                    score++;
                }
            }
            
            resultScore.textContent = `${score}/${testQuestions.length}`;
            
            let message = "";
            if (score >= 9) {
                message = "Excellent! You're a true sports expert with incredible knowledge across multiple disciplines.";
            } else if (score >= 7) {
                message = "Great job! You have solid sports knowledge and a good understanding of various games.";
            } else if (score >= 5) {
                message = "Good effort! You have a basic understanding of sports but there's room to learn more.";
            } else {
                message = "Keep learning! Sports knowledge comes with time and interest. Keep watching and playing!";
            }
            
            resultMessage.textContent = message;
            
            questionContainer.style.display = 'none';
            resultContainer.style.display = 'block';
        }
        
        // Retry test
        retryTest.addEventListener('click', function() {
            resultContainer.style.display = 'none';
            questionContainer.style.display = 'block';
            currentQuestion = 0;
            userAnswers = [];
            showQuestion(currentQuestion);
        });
        
        // Add visual feedback for inputs
        const inputFields = document.querySelectorAll('.input-field');
        inputFields.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.querySelector('i').style.color = 'var(--blue)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.querySelector('i').style.color = 'var(--gray-medium)';
            });
        });
        
        // Initialize the app
        initSportsElements();