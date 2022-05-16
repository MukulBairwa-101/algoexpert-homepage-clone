const features = [
    {
        id:1,
        text:'160 Hand-Picked Questions',
        subText:"Coding interview prep is a numbers game that many candidates lose. We've hand-picked 160 of the best coding interview questions to prepare you for every interview you could encounter.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'questions'
    
    },
    {
        id:2,
        text:'100+ Hours Of Video Explanations',
        subText:"Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'Hours'
    
    },
    {
        id:3,
        text:'Data Structures Crash Course',
        subText:"Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'dsa'
    
    },
    {
        id:4,
        text:'Solutions In 9 Languages',
        subText:"Not everyone speaks the same programming language. All of our solutions come in 9 different languages: JavaScript, TypeScript, Python, Swift, Kotlin, C++, Java, C#, and Go.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'languages'
    
    },
    {
        id:5,
        text:'Feature-Rich Coding Workspace',
        subText:"Coding out solutions to algorithm problems is the best way to practice. Our coding workspace lets you type out your answers and run them against our test cases, right here on the website.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'workspace'
    
    },
    {
        id:6,
        text:'Space-Time Complexity Analyses',
        subText:"Understanding how much memory an algorithm uses and how fast it runs is crucial to passing coding interviews. All of our explanations include a rigorous space-time complexity analysis.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'analysis'
    
    },
    {
        id:7,
        text:'4 Curated Assessments',
        subText:"Real coding interviews are timed and have multiple questions. We've curated 4 assessments to reflect a real day of coding interviews, filled with variety and appropriate difficulty.",
        icon:'/assets/react.jpg',
        pageSection:false,
        sectionId:'assesments'
    
    },
    {
        id:8,
        text:'Mock Coding Interviews',
        subText:"Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.",
        icon:'/assets/react.jpg',
        pageSection:false,
        sectionId:'mockCoding'
    
    },
    {
        id:9,
        text:'Recruiting Profile & Certificate',
        subText:"Nothing compares to doing a real coding interview with a real human being. We let you do mock coding interviews with other users on a shared workspace, right here on AlgoExpert.",
        icon:'/assets/react.jpg',
        pageSection:true,
        sectionId:'certification'
    
    },
]

const tableData = [
    {
        id:1,
        text:'100+ Practice Questions',
        crack:true,
        lcode:true,
        algoExpert:true
    },
    {
        id:2,
        text:'Data Structures Content',
        crack:true,
        lcode:true,
        algoExpert:true
    },
    {
        id:3,
        text:'Guided Format',
        crack:true,
        lcode:false,
        algoExpert:true
    },
    {
        id:4,
        text:'Coding Workspace',
        crack:false,
        lcode:true,
        algoExpert:true
    },
    {
        id:5,
        text:'Multiple Programming Languages',
        crack:false,
        lcode:true,
        algoExpert:true
    },
    {
        id:6,
        text:'High-Quality Solutions',
        crack:true,
        lcode:false,
        algoExpert:true
    },
    {
        id:7,
        text:'Video Explanations',
        crack:false,
        lcode:false,
        algoExpert:true
    },
    {
        id:8,
        text:'Mock Interviews',
        crack:false,
        lcode:false,
        algoExpert:true
    },
    {
        id:9,
        text:'All-In-One Platform',
        crack:false,
        lcode:false,
        algoExpert:true
    },
]

const Codelanguages = [
    {
        id:1,
        boldText:'JavaScript',
        text:'for all you Front-End Developers',
       
    },
    {
        id:2,
        boldText:'TypeScript',
        text:'for all you Edgy JavaScripters',
      
    },
    {
        id:3,
        boldText:'Python',
        text:'for all you Data Scientists',
       
    },
    {
        id:4,
        boldText:'Swift',
        text:'for all you iOS Engineers',
       
    },
    {
        id:5,
        boldText:'Kotlin',
        text:'for all you Androiders',
       
    },
    {
        id:6,
        boldText:'C++',
        text:'for all you Old Schoolers',
        
    },
    {
        id:7,
        boldText:'Java',
        text:'for all you Masochists',
 
    },
    {
        id:8,
        boldText:'C#',
        text:'for all you Microsofters',
       
    },
    {
        id:9,
        boldText:'Go',
        text:'for all you Kool Kidz',
        
    },
]

const testimonial =[
    {
        id:1,
        image:'/assets/alex.jpg',
        userName:'Alex',
        role:'Software Engineer',
        companyLogo:'/assets/googleonline.jpg',
        text:"AlgoExpert was the backbone of my technical coding interview preparation. It allows you to efficiently work through the most common variations of problems asked by top-tier companies without having to spend hours 'battling' an algorithm only to come up with an inefficient or incorrect solution. There are a lot of resources available for repetition, but AlgoExpert differentiates its product by providing the 'how' and 'why' in clear and concise videos. Developing a deeper understanding of how to approach these problems is better than trying to memorize lines of code. I highly recommend AlgoExpert.",

    },
    {
        id:2,
        image:'/assets/corbin.jpg',
        userName:'Corbin',
        role:'Software Developer',
        companyLogo:'/assets/amazon.jpg',
        text:"As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.",
        
    },
    {
        id:3,
        image:'/assets/carlos.jpg',
        userName:'Carlos',
        role:'Software Engineer',
        companyLogo:'/assets/microsoft.jpg',
        text:"I'm just writing to thank you for this product. I had failed in so many interviews before, but I wanted to get into a top tech company so much that I even enrolled in a Master's program. Even then, I was unsure if I had what it takes to make it. From the moment I heard your first video explanation, I thought 'this is exactly the way to solve an interview question' (plus the extra points you can grab by asking clarifying questions). After a few months of studying, mainly on AlgoExpert, I got offers to intern at Microsoft and Google!",
        
    },
    {
        id:4,
        userName:'Marlies',
        image:'/assets/marlies.jpg',
        role:'Software Developer Imtern',
        companyLogo:'/assets/palantir.jpg',
        text:"I just accepted an offer with Palantir, and also received an offer from Amazon and a handful of startups. AlgoExpert does a great job selecting problems- many of my interview questions were variants of problems on the website. And when I came across problems I hadn't seen before, AlgoExpert gave me the tools to select the right data structures and identify patterns. Thanks AlgoExpert!",
        
    },
    {
        id:5,
        userName:'Adarsh',
        image:'/assets/adarsh.jpg',
        role:'Software Engineer',
        companyLogo:'/assets/oracle.jpg',
        text:"I just got a job offer from Oracle and most of the questions they asked, I had practiced on AlgoExpert. Even when they asked questions I was not familiar with, I was able to break down the problem and write code which I learned from the explanations section on AlgoExpert. Being a Computer Science Engineering student, I had fundamental knowledge in Data Structures & Algorithms, but I didn't know how to approach, break down and apply this knowledge to solve problems. Also since all the problems are classified into categories, I was able to easily identify my weak points and work on those. Extremely grateful to AlgoExpert !",
        
    },
    {
        id:6,
        userName:'Elana',
        image:'/assets/elana.jpg',
        role:'Software Engineer',
        companyLogo:'/assets/blommberg.jpg',
        text:"The video explanations and detailed code examples on AlgoExpert have changed the way I approach coding problems. It has been an incredible asset during my career journey and I highly recommend it to anyone preparing for the job market.",
        
    },
    {
        id:7,
        userName:'Alberto',
        image:'/assets/alberto.jpg',
        role:'Software Engineer',
        companyLogo:'/assets/captitalone.jpg',
        text:"I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!",
        
    },
    {
        id:8,
        userName:'Onyeka',
        image:'/assets/onyeka.jpg',
        role:'Web Developer',
        companyLogo:'/assets/harvard.jpg',
        text:"You can choose to spend your time scouring the internet for resources, or you can invest your money wisely and get as good a resource as you'll need. AlgoExpert is a big league product, with a high quality selection of algorithms and expert explanations. This is the best place to sharpen your problem solving skills on all the best material.",
        
    },
    {
        id:9,
        userName:'Ayoub',
        image:'/assets/ayoub.jpg',
        role:'Software Engineer Intern',
        companyLogo:'/assets/zillow.jpg',
        text:"Hey, just wanted to thank you for AlgoExpert! I signed up a few months back and I went through 60% of the problems. Before AlgoExpert I was awful at solving anything harder than a LeetCode easy, now I can do LeetCode mediums without much effort and tackle LeetCode hards in a reasonable time frame! I don’t think I would have gotten an internship without AlgoExpert, so thank you!",
        
    },
    {
        id:10,
        userName:'Sreepriya',
        image:'/assets/sreepriya.jpg',
        role:'Software Developer',
        companyLogo:'/assets/microsoft.jpg',
        text:"According to me landing on a dream job requires strong determination and continuous practice. But the most important thing is to find the right resource for the practice and I found AlgoExpert. Algoexpert provided me a platform to improve my thought process towards an algorithm question. It really helped me to shape my thinking skills and coding skills. I would definitely recommend to all the aspiring software engineers.",
        
    },
    {
        id:11,
        userName:'Erik',
        image:'/assets/erik.jpg',
        role:'Software Engineer',
        companyLogo:'/assets/blackrock.jpg',
        text:"There are thousands of practice problems out there, but AlgoExpert provides curation, in-depth explanation, code testing, and support for multiple programming languages. A lot of the problems even have multiple solutions. I'm very glad I invested in it, and even though I've already been hired, I'm still using it to keep my skills up.",
        
    },
    {
        id:12,
        userName:'Eren',
        image:'/assets/eren.jpg',
        role:'Data Engineer',
        companyLogo:'/assets/simon.jpg',
        text:"AlgoExpert was the best resource I used during my coding interview prep. Its structure, hand-picked questions, and detailed explanation videos really set it apart from other resources I tried. It helped me go into my interviews with confidence, allowing me to do well not only with small startups but also with big tech companies.",
        
    },
    {
        id:13,
        userName:'Mitch',
        image:'/assets/mitch.jpg',
        role:'Software Engineer',
        companyLogo:'https://assets.algoexpert.io/spas/main/prod/gda9155f528-prod/dist/images/ethereum.noinline.svg?9cf21177',
        text:"I've tried a few of the algorithm learning resources and I think AlgoExpert is the best (and no I'm not being paid for this post). The site is super polished and offers a nice breadth of problems to get you best prepared with great solutions and video explanations. If you're on the job hunt, I think pairing AlgoExpert with an interviewing resource like Pramp and/or Interviewing.io is a great strategy.",
        
    },
    {
        id:14,
        userName:'Jeremy',
        image:'/assets/jeremy.jpg',
        role:'Analyst',
        companyLogo:'/assets/blackrock.jpg',
        text:"AlgoExpert helped me be confident in my interviews. Their curated list of questions and Clement's thorough review videos ensured that I was ready for anything thrown at me in onsite interviews. I highly recommend AlgoExpert to anyone looking to secure a tech job, or just brush up on their algorithm skills.",
        
    },
    {
        id:15,
        userName:'You',
        image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTguNzUgMjU4Ljc1IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGcgZmlsbD0iIzAyMjAzYyI+PGNpcmNsZSBjeD0iMTI5LjM3NSIgY3k9IjYwIiByPSI2MCIvPjxwYXRoIGQ9Ik0xMjkuMzc1IDE1MGMtNjAuMDYxIDAtMTA4Ljc1IDQ4LjY4OS0xMDguNzUgMTA4Ljc1aDIxNy41YzAtNjAuMDYxLTQ4LjY4OS0xMDguNzUtMTA4Ljc1LTEwOC43NXoiLz48L2c+PC9zdmc+',
        role:'DreamJob',
        text:"Got an AlgoExpert success story to share? ",
        subText:'where you work, what your position is, how helpful AlgoExpert was in getting it, and give us a link to your LinkedIn profile!'
        
    },


]


export {features,tableData,Codelanguages,testimonial};