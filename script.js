// This is the final and complete script. All features are integrated.
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. DATA STORE ---
    const insightsData = [
        { title: "Hybrid Teaching Outperforms", alignment: "Agile Personalisation", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "The academic case for well-designed hybrid learning is now unequivocal. Meta-analyses confirm a large, statistically significant positive effect on student achievement compared to traditional instruction alone.", recommendations: { "Senior Leadership": "The evidence suggests that to achieve the best learning outcomes, we should treat hybrid not as a contingency, but as a core instructional model. A powerful next step could be to initiate a Project Group to design a distinct 'ESF Hybrid Model.'", "Centre Teams": "Develop an 'ESF Blended Learning Playbook' that provides schools with a toolkit of evidence-based models (e.g., Station Rotation, Flipped Classroom) and design principles, complete with case studies and IB-aligned templates.", "School Leader": "Champion a specific, evidence-based hybrid model (e.g., Flipped Classroom) as a key initiative within your Annual School Enhancement Plan (ASEP), dedicating school-based PD time to its implementation.", "Educator": "Use a 'Station Rotation' model for your next unit. Make the asynchronous station the default for remote learners, freeing up synchronous time for targeted check-ins and small-group coaching rather than whole-class lecturing." }, reading: [{ citation: "Kazu, İ. Y., & Kurtoğlu Yalçın, C. (2022), Investigation of the effectiveness of hybrid learning on academic achievement", url: "https://doi.org/10.29329/ijpe.2022.426.14" }, { citation: "U.S. Department of Education (2010), Evaluation of evidence-based practices in online learning", url: "https://www2.ed.gov/rschstat/eval/tech/evidence-based-practices/finalreport.pdf" }], questions: "1. What is one aspect of our current practice that could be 'flipped' to a hybrid model? 2. What would be the biggest barrier to implementing a 'Station Rotation' model in your context?" },
        { title: "The Real Digital Divide is Use", alignment: "Accountable Belonging", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "The true digital divide in well-resourced schools is not access to devices, but disparity in use. Passive consumption versus higher-order creation actively widens inequity.", recommendations: { "Senior Leadership": "Implement an 'Equity-by-Design' digital learning policy that mandates active, creative, and universally accessible use of technology, and audit for pedagogical quality, not just device deployment.", "Centre Teams": "Lead the development of a foundation-wide 'Equity-by-Design' policy that establishes low-bandwidth and asynchronous strategies as the default to ensure learning continuity and promotes higher-order use of technology.", "School Leader": "Lead a school-wide focus on 'digital creativity for all.' Audit technology use through learning walks to identify where tech is used for passive consumption versus higher-order creation, and direct PD resources accordingly.", "Educator": "Redesign one assessment this term to have a creative, multimodal output. Instead of a written essay, have students create a short podcast, an infographic, or a narrated video to demonstrate their understanding." }, reading: [{ citation: "Reich, J. (2020), Failure to connect: How computers affect our children's minds—for better and worse", url: "https://wwnorton.co.uk/books/9780393714652-failure-to-connect" }, { citation: "Tang, Q. et al. (2024), Bridging gaps in online learning: A systematic literature review", url: "https://doi.org/10.5539/jel.v14n1p161" }], questions: "1. How can we audit the *quality* of technology use, not just the quantity? 2. What is one project that could encourage more creative, higher-order use of technology?" },
        { title: "Wellbeing by Design", alignment: "Belonging Engagement", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Digital environments inhibit social-emotional learning by default. The research is clear that student wellbeing is a prerequisite for academic engagement.", recommendations: { "Senior Leadership": "Prioritise and systematise social-emotional wellbeing as a core design principle for all online and hybrid programs, making it a non-negotiable foundation for academic success.", "Centre Teams": "Co-design and disseminate a framework of practical, evidence-based routines for fostering wellbeing online. Develop templates for morning check-ins, protocols for 'digital circle time,' and guidelines for integrating SEL into academic feedback.", "School Leader": "Champion and model a 'culture of connection' by establishing clear, school-wide protocols for pastoral care in digital environments, such as mandatory pastoral check-ins to start every remote learning day.", "Educator": "Start every remote learning day with a simple, non-academic 'Connection Before Content' routine, such as a simple poll on the LMS or a two-minute breakout room chat with a fun question." }, reading: [{ citation: "Immordino-Yang, M. H., & Damasio, A. (2019), We feel, therefore we learn", url: "https://www.solutiontree.com/mind-brain-and-education.html" }, { citation: "Whittle, C. et al. (2020), School-based support for student and teacher wellbeing", url: "https://edtechhub.org/wp-content/uploads/2020/05/wellbeing-synthesis-report.pdf" }], questions: "1. What is one simple protocol we could establish for 'connection before content'? 2. How do we currently measure student wellbeing in our digital environment?" },
        { title: "Engagement Requires Presence", alignment: "Aligned Engagement", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Student engagement in online spaces is a direct result of deliberately fostering ‘Teaching Presence’ (clear design) and ‘Social Presence’ (community).", recommendations: { "Senior Leadership": "Mandate and resource a professional learning stream focused on the art and science of online community facilitation, based on the Community of Inquiry (CoI) framework.", "Centre Teams": "Facilitate a cross-school Professional Learning Community (PLC) focused on the CoI framework, curating and disseminating practical examples of building social and teaching presence from within ESF schools.", "School Leader": "Integrate the principles of the Community of Inquiry (CoI) framework into your school's teaching and learning standards and teacher appraisal process, providing a shared language for observation and feedback.", "Educator": "Create a single, hyper-clear 'Weekly Overview' page on your LMS as the anchor for all learning, containing a welcome video, learning objectives, a checklist of tasks, and direct links to all resources." }, reading: [{ citation: "Garrison, D. R., & Vaughan, N. D. (2008), Blended learning in higher education", url: "https://www.wiley.com/en-gb/Blended+Learning+in+Higher+Education%3A+Framework%2C+Principles%2C+and+Guidelines-p-9780787987701" }, { citation: "Limbu, Y. B., & Mckinley, C. J. (2025), Factors associated with student engagement in online learning", url: "https://doi.org/10.24059/olj.v29i1.4221" }], questions: "1. How could we define and recognise 'excellent teaching presence' in our school? 2. What strategy could build a stronger sense of 'social presence' online?" },
        { title: "Pedagogy First, Tech Second", alignment: "Accountable Agile", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Technology is an amplifier, not a panacea. It makes good teaching more efficient and bad teaching more widespread. A 'pedagogy first' approach is the core principle for ROI.", recommendations: { "Senior Leadership": "Formalise a 'pedagogy-first' procurement protocol for all new educational technology investments, requiring a clear rationale linking the tool to a specific, high-impact teaching practice.", "Centre Teams": "Develop and support a simple 'Pedagogical Impact Assessment' tool that helps school leaders evaluate new EdTech against learning goals, and ensure all new tools are interoperable with core systems.", "School Leader": "Act as the 'pedagogical gatekeeper' for all new technology adoption in your school, demanding a clear link to learning improvement and enforcing a rigorous 'Pedagogical Impact Assessment' for any proposed purchase.", "Educator": "Before using any new tech tool, ask yourself: 'Does this allow my students to do something, or do it better, than they could without it?' If the answer is no, it may be a distraction rather than an enhancement." }, reading: [{ citation: "Education Endowment Foundation (2021), Digital technology: A guidance report", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/digital" }, { citation: "Selwyn, N. (2022), Ed-Tech: A critical perspective on educational technology", url: "https://www.politybooks.com/bookdetail?book_slug=ed-tech-a-critical-perspective-on-educational-technology-and-social-change--9781509542231" }], questions: "1. What current tech use represents a strong 'pedagogy-first' investment? 2. What question should be non-negotiable when proposing a new tech tool?" },
        { title: "Clarity Prevents Overload", alignment: "Aligned Personalisation", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Poorly designed digital resources actively overload working memory and inhibit learning by creating high 'extraneous cognitive load'.", recommendations: { "Senior Leadership": "Embed principles of cognitive science into the foundation's standards for instructional materials, providing teachers with simple, evidence-based checklists and templates grounded in research.", "Centre Teams": "Design and deliver a 'train the trainer' module for school-based instructional coaches on 'Designing for the Brain,' providing them with resources based on cognitive science to cascade to their colleagues.", "School Leader": "Establish a school-wide 'Clarity and Coherence' standard for all digital learning materials and communications, championing a 'less is more' design philosophy based on evidence from cognitive science.", "Educator": "Apply the 'Coherence Principle' to your next presentation or instructional video: ruthlessly eliminate all extraneous images, sounds, or text that are not essential for the core learning objective." }, reading: [{ citation: "Mayer, R. E. (2020), Multimedia learning", url: "https://doi.org/10.1017/9781316941355" }, { citation: "Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019), Cognitive architecture and instructional design: 20 years later", url: "https://doi.org/10.1007/s10648-019-09465-5" }], questions: "1. Where might our current digital resources be creating 'cognitive load'? 2. What is one simple design change we could encourage to improve clarity?" },
        { title: "Authentic Assessment Boosts Integrity", alignment: "Engagement Accountable", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Authentic assessment (e.g., portfolios, projects) is a more effective approach to ensuring academic integrity online than technological surveillance.", recommendations: { "Senior Leadership": "Lead a strategic shift from a culture of invigilation to a culture of authentic, project-based assessment, fostering future-ready skills and reducing incentives for academic dishonesty.", "Centre Teams": "Lead a cross-foundation project group to develop a bank of exemplary authentic assessment tasks, rubrics, and moderation processes aligned with the IB, which can be adapted by schools.", "School Leader": "Lead a pedagogical shift in your school towards authentic assessment by allocating departmental time for curriculum re-design, challenging teams to replace at least one traditional exam per year with a project-based alternative.", "Educator": "Replace your next online test with a mini-project that requires students to document their process. Shift the focus from 'getting the right answer' to 'showing your thinking'." }, reading: [{ citation: "Carretero, S., Napier, L., & Scheer, I. (2021), DigiEduHack Thematic Report: Digital Assessment", url: "https://op.europa.eu/en/publication-detail/-/publication/79a1f5a3-d444-11eb-895a-01aa75ed71a1" }, { citation: "Holden, O. L., Norris, M. E., & Kuhlmeier, V. A. (2021), Academic integrity in online assessment: A research review", url: "https://doi.org/10.3389/feduc.2021.639814" }], questions: "1. What traditional assessment could be redesigned as an authentic, project-based task? 2. What are the barriers to implementing more portfolio-based assessment?" },
        { title: "Teacher Workload is a Systemic Risk", alignment: "Engagement Belonging", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Hybrid and remote models place unique and significant strain on teacher workload and wellbeing, particularly around lesson redesign and digital feedback.", recommendations: { "Senior Leadership": "Make teacher workload a primary design constraint for all digital initiatives. Mandate a 'workload impact assessment' before any new rollout, which must include a 'stop-doing' list to create capacity.", "Centre Teams": "Collaborate with school leaders to conduct 'workflow audits' that identify digital inefficiencies, and co-create 'Best Practice Guides' for time-saving strategies like audio feedback and streamlined communication.", "School Leader": "Implement a 'workload audit' for all new school initiatives and establish clear digital communication protocols. Be the primary defender of your staff's time by creating a 'stop-doing' list to offset any new demands.", "Educator": "Experiment with audio or video feedback for one assignment. This can be significantly faster than typing and often feels more personal and impactful for the students, allowing you to manage your workload without sacrificing quality." }, reading: [{ citation: "Muller, L. M., & Goldenberg, G. (2021), Education in times of crisis: The case of COVID-19", url: "https://my.chartered.college/wp-content/uploads/2021/11/MullerGoldenberg_FULL_NOV21.pdf" }, { citation: "Hamilton, L., Grant, D., & Kaufman, J. (2021), What remote and hybrid instruction will look like in the future", url: "https://www.rand.org/pubs/research_reports/RRA1108-1.html" }], questions: "1. What is the biggest contributor to digital workload for our teachers right now? 2. What low-impact digital activity could we ask teachers to 'stop doing'?" },
        { title: "Frame the Narrative: Strategy vs. Crisis", alignment: "Aligned Agile", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Strategic judgments about online learning must differentiate between 'Emergency Remote Teaching' (a crisis response) and planned, high-quality online learning.", recommendations: { "Senior Leadership": "Proactively lead the institutional narrative, distinguishing clearly in all communications between past crisis measures and our future strategic intent for intentionally designed, high-quality hybrid programs.", "Centre Teams": "Develop clear communication templates, FAQs, and presentation slides that school leaders can use with their staff and parents to explain the distinction between ERT and planned digital learning, ensuring consistent messaging.", "School Leader": "Take ownership of your school's narrative. In all communications, consistently use the term 'Emergency Remote Teaching' to describe the 2020 experience, creating a clear firewall that allows you to present your vision for the future.", "Educator": "Give yourself and your students permission to reframe the pandemic experience as 'crisis teaching,' not a reflection of your true capabilities. Focus on building high-quality practices now without being anchored to the compromises made during a crisis." }, reading: [{ citation: "Hodges, C. et al. (2020), The difference between emergency remote teaching and online learning", url: "https://er.educause.edu/articles/2020/3/the-difference-between-emergency-remote-teaching-and-online-learning" }, { citation: "Daniel, S. J. (2020), Education and the COVID-19 pandemic", url: "https://doi.org/10.1007/s11125-020-09464-3" }], questions: "1. How can we, as a leadership team, consistently model this narrative distinction? 2. What language should we be using with parents to explain this difference?" },
        { title: "Flexibility is the New Expectation", alignment: "Personalisation Agile", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "The demand for flexible, personalised learning models is a permanent post-pandemic shift in stakeholder expectations.", recommendations: { "Senior Leadership": "Develop a strategic portfolio of high-quality flexible learning options (e.g., hybrid schedules, specific online courses) to meet diverse student needs and turn this flexibility into a key competitive advantage.", "Centre Teams": "Research and present a briefing paper to senior leadership on successful flexible learning models from other international schools, outlining their operational requirements and pedagogical benefits to inform strategic planning.", "School Leader": "Propose and pilot a flexible learning pathway within your school's ASEP, such as a 'hybrid timetable' for senior students. Start small and gather data to build an evidence base for a wider rollout.", "Educator": "Introduce a 'Choice Board' for your next unit's homework or practice tasks. Offering students options in how they practice a skill is a simple, powerful way to increase agency and personalisation." }, reading: [{ citation: "Project Tomorrow (2021), The new learning equation", url: "https://tomorrow.org/speakup/speak-up-2020-21-research-findings.html" }, { citation: "Jacob, B. A., & Stanojevich, C. (2024), Rewiring the classroom: How the COVID-9 pandemic transformed K-12 education", url: "https://www.brookings.edu/articles/rewiring-the-classroom-how-the-covid-19-pandemic-transformed-k-12-education/" }], questions: "1. What is the spectrum of 'flexibility' our parents and students are asking for? 2. What would a small, low-risk pilot of a flexible learning option look like in our school?" },
        { title: "Live Teaching Is Not Always Best", alignment: "Aligned Belonging", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "An over-reliance on synchronous ('live') video classes creates significant equity barriers and can be less pedagogically effective than well-designed asynchronous learning.", recommendations: { "Senior Leadership": "Establish a clear, foundation-wide instructional model where synchronous time is treated as a premium resource for interaction, while asynchronous time is the default for content delivery and individual work.", "Centre Teams": "Promote an 'Asynchronous-First' design philosophy. Support teachers in designing engaging asynchronous learning experiences and using the LMS to structure this independent work effectively, framing it as giving students the 'gift of time'.", "School Leader": "Lead the pedagogical shift in your school to an 'Asynchronous-First' model, reframing remote learning days not as 'school at home,' but as focused days for independent work with strategic, interactive check-ins.", "Educator": "'Flip' your next remote lesson. Deliver the core instruction via a short, pre-recorded video, and use your precious synchronous time for interactive activities like small-group problem-solving, targeted Q&A, and individual coaching." }, reading: [{ citation: "Rasheed, R. A., Kamsin, A., & Abdullah, N. A. (2020), Challenges in the online component of blended learning: A systematic review", url: "https://doi.org/10.1016/j.compedu.2019.103701" }, { citation: "Hart, C. (2020), Videoconferencing alternatives: How low-bandwidth teaching will save us all", url: "https://www.iddblog.org/videoconferencing-alternatives-how-low-bandwidth-teaching-will-save-us-all/" }], questions: "1. How can we reframe asynchronous work as 'deep learning time' rather than 'homework'? 2. What are the key interactive skills that our synchronous time should be focused on developing?" },
        { title: "Parents are Now Partners", alignment: "Belonging Accountable", relevance: ["Senior Leadership", "Centre Teams", "School Leader", "Educator"], finding: "Remote learning fundamentally alters the home-school partnership, making parental engagement a critical (and high-burden) success factor.", recommendations: { "Senior Leadership": "Develop a proactive, systemic support strategy for parents as co-facilitators of learning. This includes streamlining communication channels and establishing realistic expectations for the parental role.", "Centre Teams": "Develop a 'Parent Partnership Toolkit' for schools, including template guides, short video tutorials, and clear communication protocols designed to support parents without overwhelming them.", "School Leader": "Implement a 'Parent as Partner' communication strategy. Audit the volume of communication from school to home, consolidate newsletters, and create a dedicated portal section with tutorials and 'who to contact' guides.", "Educator": "Consolidate your parent communication into a single, predictable 'Weekly Update' post on the LMS. Create a reliable 'single source of truth' for families with clear headings like 'This Week We Learned...' and 'How You Can Support at Home'." }, reading: [{ citation: "Garbe, A. et al. (2020), Parent experiences with remote education during the COVID-19 pandemic", url: "https://source.sheridancollege.ca/jpei/vol12/iss1/2/" }, { citation: "World Bank Group (2021), Remote learning during COVID-19: Lessons from today, principles for tomorrow", url: "https://www.worldbank.org/en/topic/edutech/brief/remote-learning-during-covid-19-lessons-from-today-principles-for-tomorrow" }], questions: "1. What is the biggest source of communication 'overload' for our parents? 2. What one piece of guidance would be most helpful for parents supporting remote learning?" }
    ];
    let currentRole = 'all';

    // --- DOM ELEMENTS ---
    const triageContainer = document.getElementById('triage-container');
    const roleButtons = document.querySelectorAll('.role-btn');
    const showAllBtn = document.getElementById('show-all-btn');
    const topNavBar = document.getElementById('top-nav-bar');
    const changeRoleBtn = document.getElementById('change-role-btn');
    const showAllNodesBtn = document.getElementById('show-all-nodes-btn');
    const modalContainer = document.getElementById('modal-container');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const pillsContainer = document.getElementById('vision-pills-container');
    const visionPills = document.querySelectorAll('.vision-pill');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsCloseBtn = document.getElementById('settings-close-btn');
    const sizeSlider = document.getElementById('size-slider');
    const spacingSlider = document.getElementById('spacing-slider');
    const textSizeSlider = document.getElementById('text-size-slider');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const videoLinkTop = document.getElementById('video-link-top');
    const videoLinkBottom = document.getElementById('video-link-bottom');
    const videoModalContainer = document.getElementById('video-modal-container');
    const videoModalCloseBtn = document.getElementById('video-modal-close-btn');
    const videoPlayer = document.getElementById('video-player');
    
    // --- FUNCTIONS ---
    function selectRole(role) {
        currentRole = role;
        triageContainer.style.opacity = '0';
        topNavBar.style.opacity = '1';
        topNavBar.classList.remove('hidden')
        setTimeout(() => {
            triageContainer.classList.add('hidden');
        }, 500);
        highlightNodes(role);
    }

    function showTriage() {
        triageContainer.classList.remove('hidden');
        setTimeout(() => { // Allow display:flex to apply before changing opacity
             triageContainer.style.opacity = '1';
        }, 20);
        topNavBar.classList.add('hidden');
        highlightNodes('none');
    }

    function highlightNodes(role) {
        document.querySelectorAll('.spoke').forEach(node => {
            const nodeIndex = parseInt(node.dataset.nodeIndex);
            const isRelevant = insightsData[nodeIndex] && insightsData[nodeIndex].relevance.includes(role);
            node.classList.remove('faded');
            if (role !== 'all' && role !== 'none' && !isRelevant) {
                node.classList.add('faded');
            }
        });
    }

    function openModal(index) {
        const data = insightsData[index];
        modalTitle.innerText = data.title;
        let effectiveRole = currentRole === 'all' ? "Senior Leadership" : currentRole;
        let recommendationText = data.recommendations[effectiveRole] || data.recommendations["Senior Leadership"];
        visionPills.forEach(pill => pill.classList.toggle('faded', !data.alignment.includes(pill.dataset.keyword)));
        let readingHTML = '<ul class="further-reading-list">';
        data.reading.forEach(item => { readingHTML += `<li><a href="${item.url}" target="_blank">${item.citation}</a></li>`; });
        readingHTML += '</ul>';
        let questionsHTML = '<div class="reflection-questions">';
        data.questions.split(/\d\.\s/).forEach((part, i) => { if (part.trim()) questionsHTML += `<p><strong>${i}. ${part.trim()}</strong></p>`; });
        questionsHTML += '</div>';
        modalBody.innerHTML = `<div class="modal-split-layout"><div class="finding-column"><h4>The Finding</h4><p>${data.finding}</p></div><div class="recommendation-column"><h4>Recommendation for ${effectiveRole.replace(/([A-Z])/g, ' $1').trim()}</h4><p>${recommendationText}</p></div></div><h4>Key Further Reading</h4>${readingHTML}<h4>Key Reflection Questions</h4>${questionsHTML}`;
        modalContainer.classList.remove('hidden');
        pillsContainer.classList.remove('hidden');
    }

    function closeModal() {
        modalContainer.classList.add('hidden');
        pillsContainer.classList.add('hidden');
    }

    function openVideoModal(videoSrc) {
        videoPlayer.src = videoSrc;
        videoModalContainer.classList.remove('hidden');
    }

    function closeVideoModal() {
        videoPlayer.pause();
        videoPlayer.src = '';
        videoModalContainer.classList.add('hidden');
    }

    function updateVideoLinkPositions() {
        const hub = document.querySelector('.hub');
        if (!hub) return;
        const hubHeight = hub.offsetHeight;
        const verticalOffset = (hubHeight / 2) + 30;
        videoLinkTop.style.top = `calc(50% - ${verticalOffset}px)`;
        videoLinkBottom.style.top = `calc(50% + ${verticalOffset}px)`;
    }
    
    function setSpokeSize(size) { 
        document.documentElement.style.setProperty('--spoke-size', `${size}px`); 
        document.documentElement.style.setProperty('--hub-width', `${parseInt(size) * 2.5}px`); 
        document.documentElement.style.setProperty('--hub-height', `${size * 1.25}px`);
        setTimeout(updateVideoLinkPositions, 50);
    }
    function setGraphScale(scale) { 
        document.documentElement.style.setProperty('--graph-scale-factor', scale);
        setTimeout(updateVideoLinkPositions, 50);
    }
    function setTextScale(scale) { document.documentElement.style.setProperty('--text-scale-factor', scale); }
    function setTheme(theme) { document.body.setAttribute('data-theme', theme); themeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.theme === theme)); }

    // --- EVENT LISTENERS ---
    roleButtons.forEach(btn => btn.addEventListener('click', () => selectRole(btn.dataset.role)));
    showAllBtn.addEventListener('click', (e) => { e.preventDefault(); selectRole('all'); });
    changeRoleBtn.addEventListener('click', showTriage);
    showAllNodesBtn.addEventListener('click', (e) => { e.preventDefault(); highlightNodes('all'); });
    document.querySelectorAll('.spoke').forEach(node => node.addEventListener('click', function() { openModal(this.dataset.nodeIndex); }));
    modalCloseBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (event) => { if (event.target === modalContainer) closeModal(); });
    
    document.querySelectorAll('.video-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openVideoModal(this.getAttribute('href'));
        });
    });
    videoModalCloseBtn.addEventListener('click', closeVideoModal);
    videoModalContainer.addEventListener('click', (event) => { if (event.target === videoModalContainer) closeVideoModal(); });

    settingsToggleBtn.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
    settingsCloseBtn.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
    sizeSlider.addEventListener('input', (e) => setSpokeSize(e.target.value));
    spacingSlider.addEventListener('input', (e) => setGraphScale(e.target.value));
    textSizeSlider.addEventListener('input', (e) => setTextScale(e.target.value));
    themeButtons.forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.theme)));
    
    // --- INITIALIZE ---
    showTriage();
    updateVideoLinkPositions();
    window.addEventListener('resize', updateVideoLinkPositions);
});
