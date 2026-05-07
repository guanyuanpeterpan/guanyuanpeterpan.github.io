// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My Google Scholar Page is https://scholar.google.com/citations?user=uH9aTe4AAAAJ",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my (cool?) projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-the-work-graph-neural-networks-based-analog-circuit-link-prediction-is-released-on-arxiv",
          title: 'The work Graph Neural Networks Based Analog Circuit Link Prediction is released on...',
          description: "",
          section: "News",},{id: "news-i-delivered-a-talk-gnn-aclp-graph-neural-networks-based-analog-circuit-link-prediction-at-talks-cam-university-of-cambridge",
          title: 'I delivered a talk: GNN-ACLP: Graph Neural Networks Based Analog Circuit Link Prediction...',
          description: "",
          section: "News",},{id: "news-the-work-graph-neural-networks-based-analog-circuit-link-prediction-is-published-on-engineering-applications-of-artificial-intelligence",
          title: 'The work Graph Neural Networks Based Analog Circuit Link Prediction is published on...',
          description: "",
          section: "News",},{id: "news-project-edge-deployable-dual-arm-manipulation-algorithms-won-the-national-second-prize-in-the-ai-special-competition-of-the-19th-challenge-cup-national-college-students-extracurricular-academic-science-and-technology-contest",
          title: 'Project “Edge-Deployable Dual-Arm Manipulation Algorithms” won the National Second Prize in the “AI+”...',
          description: "",
          section: "News",},{id: "news-the-work-vlm-cad-vlm-optimized-collaborative-agent-design-workflow-for-analog-circuit-sizing-is-released-on-arxiv",
          title: 'The work VLM-CAD: VLM-Optimized Collaborative Agent Design Workflow for Analog Circuit Sizing is...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-ielts-writing-llm",
          title: 'IELTS Writing LLM',
          description: "An LLM-powered tool for IELTS Writing practice and evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ielts_writing_llm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%61%6E%79%75%61%6E%70%65%74%65%72%70%61%6E@%67%6D%61%69%6C.%63%6F%6D, %70%61%6E%67%75%61%6E%79%75%61%6E@%71%71.%63%6F%6D, %70%61%6E%67%75%61%6E%79%75%61%6E@%68%64%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/guanyuanpeterpan", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
