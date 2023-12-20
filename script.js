const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "Q. Bitcoin is based on ________ blockchain?",
        choices: ["private", "public", "Public Permissioned", "Hybrid","none of these"],
        answer: "public"
    },
    {
        question: "Q. What are Block Identifiers?",
        choices: ["block header hash", " block height", "block Ledger", "A and B","B and C"],
        answer: "A and B"
    },
    {
        question: "Q. Which of the following is not depend on Blockchain Technologie?",
        choices: ["Web 3", "NFT", "Crypto", "Dynamic","None of these"],
        answer: "None Of these"
    },
    {
        question: "Q. What are the different types of Blockchains?",
        choices: ["4", "3", "2", " 6","none of these"],
        answer: "3"
    },
    {
        question: "Q. What is the popular NFT market?",
        choices: ["Uniswap", "Solana", "OpenSea", "Kraken","none of these"],
        answer: "OpenSea"
    },
    {
        question: "Q. When your digital artwork is ready, you will need to select a blockchain and market and set your ______.",
        choices: ["Price", "Selling rules", "Assets", "your artwork ","none of these"],
        answer: "Selling rules"
    },
    {
        question: "Q. How many steps are required to create your NFT Game?",
        choices: ["8", "5", "6", "7","none of these"],
        answer: "7"
    },
    {
        question: "Q. How many steps are required to start with NFT?",
        choices: ["8", "7", "6", "5","none of these"],
        answer: "7"
    },
    {
        question: "Q. Mention what are some bad examples of web design?",
        choices: ["List of links", "Black backgrounds with White text", "Both A and B", "Black background with light or pale text","Both B and D"],
        answer: "List of links"
    },
    {
        question: "Q. Pantone colours will always produce the most  colours",
        choices: ["sharp and accurate", "stable and accurate", "sharp and stable", "consistent","none of these"],
        answer: "sharp and accurate"
    },
     //1 - 10

    {
        question: "Q. Which of the following is a tool in the design phase?",
        choices: ["Abstraction", "Refinement", "Information hiding", "All","none of these"],
        answer: "All"
    },
    {
        question: "Q. The design phase includes",
        choices: ["Data, architectural interface, and procedural design only", "architectural interface,procedural design and interface design only", "architectural interface,procedural design and interface design", "Data, architectural interface, and procedural design","Data, architectural and interface design"],
        answer: "Data, architectural interface, and procedural design"
    },
    {
        question: "Q. Information hiding is to hide information from user details",
        choices: ["That are relevant to him", "That are not relevant to him", "That may be maliciously handled by him", "That are confidential","none of these"],
        answer: "That may be maliciously handled by him"
    },
    {
        question: "Q. What design consideration makes using an app easy to use by reducing the things a user has to remember?",
        choices: ["Making an app faster", "Designing for smaller screen size", "Making an app simpler", "Making an app not drain the battery","Beautiful UI"],
        answer: "Making an app simpler"
    },
    {
        question: "Q. User-centered design is defined as a framework that “puts the user _______.”",
        choices: ["front-and-center", "Throughout the process", "in the middle", "review","none of these"],
        answer: "front-and-center"
    },
    {
        question: "Q. How does color modification assist users with low vision or eye strain?",
        choices: ["By using neutral colors on a screen", "By using high contrast of colors on a screen ", "By using bright colors on a screen", "By using translucent colors on a screen","none of these"],
        answer: "By using high contrast of colors on a screen"
    },
    {
        question: "Q. If a user has a low level of digital literacy, what might they have trouble interpreting? Select all that apply.",
        choices: ["Both C and D", "Word Pronunciation", "Calls to action", "Icons and Logo","none of these"],
        answer: "Calls to action"
    },
    {
        question: "Q. How is the term platform defined in UX design?",
        choices: ["A platform is the medium where users experience a product.", "A platform is how a person, the user, feels about interacting with, or experiencing, a product.", "A framework of a website or how it is organized, categorized, and structured.", "A good, service, or feature.","none of these"],
        answer: "A platform is the medium where users experience a product."
    },
    {
        question: "Q. What Does Floor Price Mean In NFTs?",
        choices: ["lowest price", "last Price", "Reduced Price", "Discount","All"],
        answer: "lowest price"
    },
    {
        question: "Q.How To Price An NFT?",
        choices: ["Fixed Price", "Unlimited Auction options", "multiple copies", "both A and B","All"],
        answer: "both A and B"
    },
    //11-20
    {
        question: "Q.  What type of design elements can be created in Figma?",
        choices: ["User interfaces, icons, and illustrations", "virtual reality environments", "animations and special effects", " Audio files and sound effects","All"],
        answer: "User interfaces, icons, and illustrations"
    },
    {
        question: "Q. Can Figma export design files to other formats, such as PNG or SVG? ",
        choices: [" No, it can only export to its native file format", "Yes, it supports exporting to various formats", "No, it can only export to FIG format", "Yes, but only to JPG format","All"],
        answer: "Yes, it supports exporting to various formats"
    },
    {
        question: "Q.  What is Figma's approach to version control?",
        choices: ["Automatic version control with revision history", "Manual version control with limited history", "No version control capabilities", "Version control is only available in the paid version","none of these"],
        answer: "Automatic version control with revision history"
    },
    {
        question: "Q.Does Figma have a built-in library of design components and assets?",
        choices: ["No, designers have to create all components from scratch", "Yes, but only in the paid version", " No, it requires external plugins for design components", "Yes, it has a library of reusable design elements","none of these"],
        answer: "Yes, it has a library of reusable design elements"
    },
    {
        question: "Q.  Can Figma be used for creating and managing design handoff documentation?",
        choices: ["No, it does not have any documentation features", "Yes, but only in the paid version", "Yes, but only for specific design formats like web or mobile", " Yes, it supports design handoff workflows","none of these"],
        answer: " Yes, it supports design handoff workflows"
    },
    {
        question: "Q. What is Figma's primary advantage when it comes to sharing design files with stakeholders?",
        choices: ["Ability to export designs to various formats for sharing via email", "Figma automatically converts designs to PDF format for easy sharing", "No need to send large file attachments, stakeholders can access designs through a link", "Direct integration with social media platforms for sharing designs","none of these"],
        answer: "No need to send large file attachments, stakeholders can access designs through a link"
    },
    {
        question: "Q. Does Figma have a feature for user testing and usability testing?",
        choices: [" Yes, it has built-in user testing tools", "No, it does not offer any user testing capabilities", "Yes, but only in the paid version", "Yes, but only through third-party integrations","none of these"],
        answer: "No, it does not offer any user testing capabilities"
    },
    {
        question: "Q. Can Figma be used for creating animations and micro-interactions?",
        choices: ["Yes, it has basic animation features", "No, it is not capable of animation", "Yes, but only in the paid version", "Yes, but only for web animations, not micro-interactions","none of these"],
        answer: "Yes, it has basic animation features"
    },
    {
        question: "Q. Does Figma have a feature for version comparison and design history tracking?",
        choices: ["Yes, but only in the paid version", " Yes, but only for design files exported to the desktop", "Yes, it offers a version comparison tool and history tracking", "No, it does not have any version tracking capabilities","none of these"],
        answer: "Yes, it offers a version comparison tool and history tracking"
    },
    {
        question: "Q.  What is a vector file format commonly used in logo design?",
        choices: ["JPEG", "PNG", "SVG", "GIF","All"],
        answer: "SVG"
    },
    //21-30
    {
        question: "Q. Which type of logo combines a symbol or icon with text?",
        choices: ["Symbol logo", "Wordmark logo", "Combination mark logo", "Emblem logo","None"],
        answer: "Combination mark logo"
    },
    {
        question: "Q. Which logo design principle emphasizes simplicity and minimalism?",
        choices: ["Contrast", "Proportion", "Simplicity", "Balance","All"],
        answer: "Simplicity"
    },
    {
        question: "Q. What is the process of adjusting letter spacing in typography called?",
        choices: ["Kerning", "Tracking", "Leading", "Alignment","None"],
        answer: "Kerning"
    },
    {
        question: "Q. What is the term for the unique combination of colors used in a logo?",
        choices: ["Palette", "Contrast", "Gradient", " Saturation","All"],
        answer: "Palette"
    },
    {
        question: "Q. What does scalability refer to in logo design?",
        choices: ["The ability to resize a logo without losing quality", "The size of the logo in relation to other elements", " The arrangement of elements within a logo", "The selection and design of typefaces","All"],
        answer: "The ability to resize a logo without losing quality"
    },
    {
        question: "Q. GUI stands for_____",
        choices: ["Graphical underlying interaction", "Graphical User Interaction", "Graphical User Interface", "","None"],
        answer: "Graphical User Interface"
    },
    {
        question: "Q. There were many computer games that were developed and released before Super Mario Brothers, such as",
        choices: ["Space Invaders", "Pong", "Pac-Man", "None","All"],
        answer: "All"
    },
    {
        question: "Q.  What is the term for the emotional response a logo evokes in viewers?",
        choices: ["Legibility", " Readability", "Recognition", "Impression","All"],
        answer: "Impression"
    },
    {
        question: "Q. A complete screen, or the set of all the lements representing it.",
        choices: ["MIDI", "Storyboard", "GUI", "Frame","All"],
        answer: "Frame"
    },
    {
        question: "Q. Level design focused on freeform exploration and approach from any direction.",
        choices: ["Open World", "Corridor", "Wide Linear", "Linear","None"],
        answer: "Open World"
    },
    //31-40
    {
        question: "Q. Which of the following is NOT a logo design trend?",
        choices: ["Flat design", "Minimalism", "Gradients", "Skeuomorphism","All"],
        answer: "Skeuomorphism"
    },
    {
        question: "Q. The most common categories of level design discipline in video game development",
        choices: ["2", "3", "4", "5","None"],
        answer: "2"
    },
    {
        question: "Q. Game design disciplines______",
        choices: ["focus on the content and mechanics of a game.", " focus on the models and textures that bring it to life.", " focus on the content and textures that bring it to life.", "focus on the texture of a game.","None"],
        answer: "focus on the content and mechanics of a game."
    },
    {
        question: "Q. Game art disciplines________",
        choices: ["focus on the content and mechanics of a game.", " focus on the models and textures that bring it to life.", " focus on the content and textures that bring it to life.", "focus on the texture of a game.","None"],
        answer: "focus on the models and textures that bring it to life."
    },
    {
        question: "Q. Chance-based games are appealing to______",
        choices: ["children", "adult", " middle Age", "senior adult","All"],
        answer: "children"
    },
    {
        question: "Q. What is the term for the process of refining and polishing a logo design?",
        choices: ["Iteration", "Revision", "Finalization", "Refinement","None"],
        answer: "Refinement"
    },
    {
        question: "Q. What is the term for the process of researching and gathering information before starting the logo design process?",
        choices: ["Ideation", " Sketching", "Discovery", "Brainstorming","All"],
        answer: "Discovery"
    },
    {
        question: "Q. Game is an activity that_____",
        choices: ["requires at least one player", "has rules", "has a win/lose condition", "None","All"],
        answer: "All"
    },
    {
        question: "Q. The players must build and explore new worlds to create their own fantasy",
        choices: ["Minecraft", "PUBG", "Dota2", "Farm Town","Smurf's village"],
        answer: "Minecraft"
    },
    {
        question: "Q. The players must race other players to finish in first place and use their resources along the way to slow other players down",
        choices: ["Mario", "Alpha9", "Mega car crash simulator", "Bike Race","All"],
        answer: "All"
    },
    //41-50
    {
        question: "Q. Neutral colors are",
        choices: ["Black, White, Grey", "Red,Green,Blue", "Red,Yellow,Blue", "Black, White, Red","All"],
        answer: "Black, White, Grey"
    },
    {
        question: "Q.  Which aspect of web design focuses on creating a visually appealing and user-friendly interface?",
        choices: ["User Interface (UI) Design", "User Experience (UX) Design", "Responsive Design", "Both A and B","All"],
        answer: "User Interface (UI) Design"
    },
    {
        question: "Q.  What is the purpose of responsive design in web design?",
        choices: ["To make the website load faster", "To ensure the website looks the same on all device", "To optimize the website for search engines", " To make the website adapt and display correctly on various devices","All"],
        answer: " To make the website adapt and display correctly on various devices"
    },
    {
        question: "Q. Which of the following factors is crucial for creating a positive user experience",
        choices: ["Loading speed", " Color scheme", "Typography", "None","All"],
        answer: "All"
    },
    {
        question: "Q. What is the term used for the arrangement and organization of elements on a webpage?",
        choices: ["Typography", "User Interface (UI)", "Layout", "User Experience (UX)","All"],
        answer: "Layout"
    },
    {
        question: "Q. What is the role of call-to-action (CTA) buttons in web design",
        choices: ["To attract more visitors to the website", "To encourage users to take specific actions, such as making a purchase or signing up for a newsletter", "To optimize the website for search engines", "To display the website's contact information","All"],
        answer: "To encourage users to take specific actions, such as making a purchase or signing up for a newsletter"
    },
    {
        question: "Q. Which of the following is NOT a consideration in choosing a color scheme for a website?",
        choices: ["Brand identity", "Target audience preferences", "Website loading speed", "Emotional impact on users","None"],
        answer: "Website loading speed"
    },
    {
        question: "Q. Which element of web design focuses on guiding users throughout the website?",
        choices: ["Typography", "User Interface (UI)", "Navigation", "Call-to-Action (CTA)","None"],
        answer: "Navigation"
    },
    {
        question: "Q. Which of the following is NOT a common file format used for web graphics and images?",
        choices: ["JPEG", "TIFF", "PNG", "GIF","None"],
        answer: "TIFF"
    },
    {
        question: "Q. Which web design principle emphasizes the importance of creating a consistent look and feel across all pages of the website?",
        choices: ["Hierarchy", "Consistency", "Proximity", "Contrast","None"],
        answer: "Consistency"
    },
    //51-60
    {
        question: "Q. Why dont we use Bitcoin instead of ETH for NFT.",
        choices: ["No,we can use BTC", "Blockchain", "Smart contract", "Both B and C","None"],
        answer: "Smart contract"
    },
    {
        question: "Q. Any 3D virtual space powered by technologies,that allows people to interact with each other",
        choices: ["Metaverse", "Blockchain", "VR", "AR","Openworld"],
        answer: "Metaverse"
    },
    {
        question: "Q. In metaverse,we can interact with each other as a",
        choices: ["Character", "Avatar", "VR", "AR","All"],
        answer: "Avatar"
    },
    {
        question: "Q. Metaverse include____type of Technology.",
        choices: ["3", "5", "7", "6","None"],
        answer: "5"
    },
    {
        question: "Q. Join the metaverse with a VR headset",
        choices: ["Meta Quest 2", "Oculus Quest 1", "Oculus Quest 2", "Meta Quest 3","All"],
        answer: "Oculus Quest 2"
    },
    {
        question: "Q. The _____is a metaverse example that lets users play and build virtual worlds with the option to monetize their experiences, services, and products for sale or trade.",
        choices: ["Genshin Impact", "Fortnite", "Sandbox", "NFT","All"],
        answer: "Sandbox"
    },
    {
        question: "Q.  “Metaverse” is a .",
        choices: ["three-dimensional", "virtual reality", "three-dimensional virtual reality", "OpenWorld","All"],
        answer: "three-dimensional virtual reality"
    },
    {
        question: "Q. How many Layer of Metaverse",
        choices: ["5", "7", "8", "6","9"],
        answer: "7"
    },
    {
        question: "Q. the future benefits of metaverse are transform many aspects of society, including how we",
        choices: ["work", "learn", "socialise", "Both A ad B","All"],
        answer: "All"
    },
    { 
        question: "Q. Metaverse are far more realistic than the ones seen in worlds like_____",
        choices: ["Decentraland", "The Sandbox", "OpenWorld", "Both A and B","All"],
        answer: "Both A and B"
    },
    //61-70
    {
        question: "Q. ______ are colored squares used to make bitmap images.",
        choices: ["Pixel", "Vector", "Resolution", "Picas","RGB"],
        answer: "Pixel"
    },
    {
        question: "Q. What is the biggest metaverse?",
        choices: ["BYAC", "Meta", "Roblox", "Minecraft","Sandbox"],
        answer: "Roblox"
    },
    {
        question: "Q. Font-size should be _____px in body text",
        choices: ["17-23", "16-23", "15-23", "14-23","none"],
        answer: "15-23"
    },
    {
        question: "Q. DMADV stands for:",
        choices: ["design, manage, analyze, deliver, verify", "define, manage, argue, design, verify", "design, measure, analyze, deliver, verify", "define, measure, analyze, design, verify","None"],
        answer: "define, measure, analyze, design, verify"
    },
    {
        question: "Q. If you don't have VR equipment, you can still enter the Metaverse through a______",
        choices: ["browser", "gaming console", "No,we cant", "Both A and B","Meta Quest 3"],
        answer: "Both A and B"
    },
    {
        question: "Q. Product design is",
        choices: ["to create a new product to be sold by a business to its customers.", "to create a new product to be sold for clients", "to create a new product with design tool", "Both A and C","All"],
        answer: "to create a new product to be sold by a business to its customers."
    },
    {
        question: "Q.Today connotes physical products such as furniture and household appliances ",
        choices: ["product design", "industrial design ", "physical design", "interior design","None"],
        answer: "industrial design "
    },
    {
        question: "Q. A good product designer must always showcase",
        choices: ["aesthetic ability", "functionality", "instinctive simplicity", "Both A and C","All"],
        answer: "All"
    },
    {
        question: "Q. Which stage of product design involves generating ideas and concepts for a new product?",
        choices: ["Prototyping", "Manufacturing", "Idea Generation", "Market Analysis","None"],
        answer: "Idea Generation"
    },
    {
        question: "Q. Which term describes the process of transforming design concepts into physical products?",
        choices: ["Ideation", "Prototyping", "Visualization", "Manufacturing","None"],
        answer: "Manufacturing"
    },
    //71-80
    {
        question: "Q. Which stage of product design involves evaluating the viability and potential profitability of a product?",
        choices: ["Prototyping", "Manufacturing", "Market Analysis", "Idea Generation","None"],
        answer: "Market Analysis"
    },
    {
        question: "Q. Which term is used to describe the process of evaluating the cost-effectiveness of manufacturing a product?",
        choices: ["Cost Analysis", "Material Selection", "Sustainable Design", "Manufacturing Efficiency","None"],
        answer: "Cost Analysis"
    },
    {
        question: "Q. Which stage of product design involves creating detailed drawings or blueprints of the product's components?",
        choices: [" Ideation", "Prototyping", "Visualization", "Engineering","None"],
        answer: "Engineering"
    },
    {
        question: "Q. Which design principle focuses on the alignment and arrangement of elements in a product's design?",
        choices: ["Aesthetics", "Proximity", "Contrast", "Consistency","None"],
        answer: "Proximity"
    },
    {
        question: "Q. What does the term “aesthetics” refer to in product design?",
        choices: ["The environmental impact of the product", "The overall functionality of the product", "The visual appeal and design of the product", "The usability and ease of use of the product","None"],
        answer: "The visual appeal and design of the product"
    },
    {
        question: "Q. Which component forms the surface and structure of a 3D model?",
        choices: ["Vertices", "Edges", "Meshes", "Textures","None"],
        answer: "Meshes"
    },
    {
        question: "Q. What is the primary purpose of 3D modeling in product design?",
        choices: ["To create virtual prototypes for testing", "To design 2D graphics and logos", "To produce physical models using clay", "To create animations for marketing purposes","None"],
        answer: "To create animations for marketing purposes"
    },
    {
        question: "Q. What is the purpose of texturing in 3D modeling?",
        choices: ["Adding lights and shadows", "Creating a skeletal structure for characters", "Applying colors and surface details", "Adding cameras for different perspectives","None"],
        answer: "Applying colors and surface details"
    },
    {
        question: "Q. How are 3D models viewed and rendered from different angles?",
        choices: ["By applying textures to the models", "By using virtual cameras", "By adding lights and shadows", "By manipulating the mesh structures","None"],
        answer: "By using virtual cameras"
    },
    {
        question: "Q. What is the aspect ratio of 2K?",
        choices: ["16:9", "4:3", "21:9", "9:16","None"],
        answer: "16:9"
    },
    //81-90
    {
        question: "Q. Which type of 3D models are optimized for real-time interactions in video games and virtual reality?",
        choices: ["Photorealistic models", "High-polygon models", "Low-polygon models", "Sculpting","Animation"],
        answer: "Low-polygon models"
    },
    {
        question: "Q. In 3D modeling, what does the term “UV mapping” refer to?",
        choices: ["Adding lights and shadows to 3D scenes", "Applying textures to a 3D model's surface", "Creating a skeletal structure for character animation", "Rendering the 3D model from different angles","None"],
        answer: "Applying textures to a 3D model's surface"
    },
    {
        question: "Q. Which 3D modeling technique is similar to molding clay to create organic shapes?",
        choices: ["Procedural modeling", "Sculpting", "Polygonal modeling", "NURBS modeling","Photorealistic models"],
        answer: "Sculpting"
    },
    {
        question: "Q. What tools are available on Prototype screen in Adobe XD?",
        choices: ["Select", "Zoom", "Edit", "Both A and B","All"],
        answer: "Both A and B"
    },
    {
        question: "Q. SVG is a ",
        choices: ["2D type", "Vector type", "Icon type", "Logo type","Transparent type"],
        answer: "Vector type"
    },
    {
        question: "Q. Choose One Principle",
        choices: ["Fitts's Law", "Miller's law", "Law of proximity", "Postel's law","Law of similarity"],
        answer: "Postel's law"
    },
    {
        question: "Q. People remember uncompleted or interrupted tasks better than completed tasks.",
        choices: ["Law of similarity", "Serial Position Effect", "Zeigarnik Effect", "Postel's law","Von Restorff Effect"],
        answer: "Zeigarnik Effect"
    },
    {
        question: "Q. What is the primary purpose of 3D modeling in product design?",
        choices: ["To create virtual prototypes for testing", "To design graphics", "To produce physical models using clay", "To create animations for marketing purposes","None"],
        answer: "To create virtual prototypes for testing"
    },
    {
        question: "Q. How does 3D Animation contribute to brand identity in advertising and marketing?",
        choices: ["By using a variety of color schemes in the animations", "By adding visual effects to every element", "By using only 3D design", "By reinforcing consistent visual elements and animations","Logo and Product animations"],
        answer: "By reinforcing consistent visual elements and animations"
    },
    {
        question: "Q. What is the purpose of animating infographics using 3D Animation?",
        choices: ["To make them more complex to understand", "To make them appear as animation", "To add a sense of movement and engagement to data and statistics", "To use a variety of colors","All"],
        answer: "To add a sense of movement and engagement to data and statistics"
    },
    //91-100



    

    

    
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 18;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 18;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this test!");
    nextBtn.textContent = "Thank You for Your time";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Time Up!!! Click OK for your next try.");
            if(confirmUser){
                timeLeft = 18;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 18;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});