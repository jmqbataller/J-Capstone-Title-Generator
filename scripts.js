document.addEventListener('DOMContentLoaded', function () {
    const titles = [
        "Collaborative Coding Platform: Web-Based IDE for Teams",
        "Android App for Language Translation and Learning",
"Web-Based Pet Adoption Platform with Matchmaking Features",
"Digital Art Gallery Website with Augmented Reality Exhibits",
"Android App for Personalized Travel Itineraries",
"Web-Based Crowdfunding Platform for Social Causes",
"Online Cooking Classes Platform: Web-Based",
"Android App for Volunteer Opportunities and Community Service",
"Web-Based Cryptocurrency Portfolio Tracker",
"Interactive Storytelling Android App for Children",
"Web-Based Freelance Marketplace for Creative Professionals",
"Android App for Home Workout Routines",
"Web-Based Language Exchange Platform for Global Communication",
"Virtual Reality Travel Experience: Android App",
"Web-Based Event Planning and Invitation System",
"Android App for Historical Landmark Exploration",
"Web-Based Rental Property Management System",
"Android App for Wildlife Conservation Education",
"E-Commerce Website with AR-based Virtual Try-On",
"Web-Based Student Information System for Educational Institutions",
"Android App for Personal Carbon Footprint Tracking",
"Web-Based Auction Platform for Rare Collectibles",
"Android App for Personal Journaling and Reflection",
"Online Art Auction Platform: Web-Based",
"Android App for Sustainable Transportation Options",
"Web-Based Crowdtesting Platform for Software Quality Assurance",
"Android App for DIY Home Improvement Projects",
"Web-Based Virtual Classroom Platform",
"Android App for Local Sustainable Farmers' Market",
"Web-Based Fitness Challenge and Tracking System",
"Android App for Historical Timeline Exploration",
"Web-Based Donation Platform for Nonprofits",
"Android App for Nature Photography and Identification",
"Web-Based Attendance Tracking System for Events",
"Android App for Personal Book Library Management",
"E-Learning Website for Practical Skills Development",
"Android App for Public Transportation Navigation",
"Web-Based Employee Feedback and Recognition System",
"Android App for Outdoor Adventure Planning",
"Web-Based Social Networking Platform for Professionals",
"Android App for Sustainable Fashion Discovery",
"Online Therapy Platform: Web-Based",
"Android App for Personalized News and Content Curation",
"Web-Based Donation Tracking System for Fundraisers",
"Android App for Mindful Breathing and Relaxation",
"Web-Based Skill Assessment and Certification Platform",
"Android App for Local Community Event Discovery",
"Web-Based Sustainable Product Marketplace",
"Android App for Nature Conservation Challenges",
"Online Quiz Platform: Web-Based",
"Android App for Language Pronunciation Practice",
"Web-Based Music Collaboration Platform",
"Android App for Plant-based Recipe Recommendations",
"Web-Based Inventory Tracking System for Small Businesses",
"Android App for Digital Nomad Networking",
"E-Commerce Website for Eco-Friendly Products",
"Web-Based Customer Loyalty Program for Businesses",
"Android App for Virtual Historical Tours",
"Online Parent-Teacher Communication Platform: Web-Based",
"Android App for DIY Sustainable Living Projects",
"Web-Based Food Delivery Management System",
"Android App for Mindful Eating and Nutrition Tracking",
"Virtual Reality Learning Experience: Web-Based",
"Android App for Wildlife Habitat Conservation",
"Web-Based Time Management and Productivity Tool",
"Android App for Personal Water Consumption Tracking",
"Web-Based Vehicle Maintenance and Service Tracker",
"Android App for Mental Health Resource Discovery",
"Online Marketplace for Local Artisanal Products: Web-Based",
"Web-Based Employee Training and Development Platform",
"Android App for Outdoor Fitness Classes",
"Web-Based Book Club and Reading Tracker",
"Android App for Sustainable Transportation Rewards",
"E-Commerce Website for Handmade Jewelry",
"Web-Based Sustainable Energy Consumption Dashboard",
"Android App for Wildlife Conservation Volunteer Opportunities",
"Online Task and Project Management: Web-Based",
"Android App for Eco-Friendly Camping Sites",
"Web-Based Personal Budgeting and Finance Tracker",
"Android App for Environmental Education Games",
"Web-Based Document Sharing and Collaboration Platform",
"Android App for DIY Upcycling Projects",
"Online Resume Review Platform: Web-Based",
"Android App for Mindfulness Meditation Sessions",
"Web-Based Event Ticket Reselling Platform",
"Android App for Local Community Gardens",
"Web-Based Collaborative Music Composition Platform",
"Android App for Personal Carbon Offset Tracking",
"E-Commerce Website for Sustainable Home Goods",
"Web-Based Volunteer Management System for Nonprofits",
"Android App for Fitness Challenge Competitions",
"Web-Based Health and Wellness Community Platform",
"Android App for Sustainable Transportation Planning",
"Online Language Exchange: Web-Based",
"Android App for Nature Conservation Challenges",
"Web-Based Personal Finance and Investment Tracker",
"Android App for Sustainable Travel Planning",
"E-Commerce Website for Fair Trade Products",
"Web-Based Task and Project Management System",
"Android App for Community-Sourced Local Guides",
"Web-Based Personal Health and Wellness Journal",
"Android App for Sustainable Product Reviews",
"Online Coding Bootcamp Platform: Web-Based",
"Web-Based Wedding Planning and Coordination System",
"Android App for Nature Exploration Challenges",
"Web-Based Event Registration and Ticketing System",
"Android App for Sustainable Living Challenges",
"E-Learning Platform for DIY Home Improvement: Web-Based",
"Android App for Outdoor Adventure Challenges",
"Web-Based Sustainable Fashion Marketplace",
"Android App for Personal Mindfulness Challenges",
"Online Quiz Platform with Gamification: Web-Based",
"Android App for Plant-Based Diet Challenges",
"Web-Based Employee Performance Evaluation System",
"Android App for Eco-Friendly Transportation Challenges",
"E-Commerce Website for Customized Art Prints",
"Web-Based Personal Development Goal Tracker",
"Android App for Sustainable Shopping Challenges",
"Online Collaborative Drawing Platform: Web-Based",
"Android App for Eco-Friendly Product Challenges",
"Web-Based Team Collaboration and Communication Platform",
"Android App for Mindful Living Challenges",
"E-Learning Platform for Sustainable Living: Web-Based",
"Web-Based Employee Satisfaction Survey System",
"Android App for Community Cleanup Challenges",
"Online Book Club Platform: Web-Based",
"Android App for Outdoor Fitness Challenges",
"Web-Based Sustainable Energy Consumption Challenge",
"Android App for Local Community Support Challenges",
"E-Commerce Website for Sustainable Apparel",
"Web-Based Learning Management System for Small Businesses",
"Android App for Personal Fitness Challenges",
"Online Marketplace for Eco-Friendly Gifts: Web-Based",
"Android App for Nature Conservation Challenges",
"Web-Based Skill Certification and Assessment Platform",
"Android App for Sustainable Living Challenges",
"Online Coding Challenge Platform: Web-Based",
"Web-Based Personal Financial Literacy Education",
"Android App for Eco-Friendly Transportation Challenges",
"E-Commerce Website for Sustainable Home Decor",
"Web-Based Team Collaboration and Task Management System",
"Android App for Mindful Living Challenges",
"Online Learning Platform for Sustainable Agriculture: Web-Based",
"Web-Based Employee Training and Development System",
"Android App for Outdoor Adventure Challenges",
"E-Commerce Website for Sustainable Beauty Products",
"Web-Based Personal Fitness Challenge Tracker",
"Android App for Sustainable Product Challenges",
"Online Art Gallery Platform for Emerging Artists: Web-Based",
"Android App for Community Sustainability Challenges"
        // ... (Paste the complete list here)
    ];

    const generateButton = document.getElementById('generate-btn');
    const copyButton = document.getElementById('copy-btn'); // Define the copyButton variable

    const generatedTitleDiv = document.getElementById('generated-title');

    generateButton.addEventListener('click', function () {
        // Get a random index from the titles array
        const randomIndex = Math.floor(Math.random() * titles.length);

        // Display the randomly picked title in the curved box
        generatedTitleDiv.innerHTML = '<p>' + titles[randomIndex] + '</p>';
    });

    copyButton.addEventListener('click', function () {
        copyToClipboard();
    });

    function copyToClipboard() {
        const generatedTitle = document.getElementById('generated-title').textContent;
        
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = generatedTitle;
        document.body.appendChild(tempInput);
    
        // Select and copy the text inside the input
        tempInput.select();
        document.execCommand('copy');
    
        // Remove the temporary input
        document.body.removeChild(tempInput);
    
        // Provide an alert message for successful copy
        const alertMessage = document.createElement('div');
        alertMessage.textContent = 'Great Choice! Title Copied Successfully!';
        alertMessage.style.cssText = 'position: fixed; top: 20px; right: 10px; background-color: #4CAF50; color: #fff; padding: 20px; border-radius: 5px;';
    
        document.body.appendChild(alertMessage);
    
        // Remove the alert message after a short delay
        setTimeout(function () {
            document.body.removeChild(alertMessage);
        }, 2500); // Adjust the delay time (in milliseconds) as needed
    }
    
});
