

export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/documents/images/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software Proposal",
        imageUrl: "/documents/images/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>Brief description of proposed software project</p>

            <h2>Scope of Work</h2>
            <p>Detailed breakdown of project deliverables and requirements</p>

            <h2>Timeline</h2>
            <p>Project milestones and delivery schedule.</p>

            <h2>Budget</h2>
            <p>Cost breakdown and payment terms.</p>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/documents/images/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Executive Summary</h2>
            <p>Brief overview of project proposal</p>

            <h2>Project Goals</h2>
            <p>Key objectives and expected outcomes</p>

            <h2>Implementation plan</h2>
            <p>Strategy and methodology for project execution.</p>

            <h2>Resources required</h2>
            <p>team, equipment, and budget requirements.</p>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/documents/images/business-letter.svg",
        initialContent: `
            <h1>Bsuiness Letter</h1>
            <p>This is a business letter template</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/documents/images/resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>
            <p>[Contact Information]</p>

            <h2>Project Summary</h2>
            <p>Brief overview of your professional background and key strengths.</p>

            <h2>Work Experience</h2>
            <p>[Company Name] - [Position]<br/> [Date Range] </p>

            <h2>Education</h2>
            <p>[Degree] - [Institution]<br/> [Graduation Year] </p>

            <h2>Skills</h2>
            <p>List of regualr skills and competencies</p>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/documents/images/cover-letter.svg",
        initialContent: `
            <p>[Your Name] <br />
                [Your Address] <br />
                [City, State ZIP]
            </p>

            <p>[Date]</p>

            <p>[Recipient's Name]<br />
            [Company Name] <br />
            [Company Address]
            </p>

            <p>Dear [Recioient's Name],</p>

            <p>I am writing to express my interest in [position] at [company name]</p>

            <p>Sincerely, <br />
            [Your Name] </p>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/documents/images/letter.svg",
        initialContent: `
            <p>Subjec: [Email Subject]</p>

            <p>Dear [Recipient],</p>

            <p>I hope this email finds you well</p>

            <p>[Email body]</p>

            <p>Best regards, <br />
            [Your Name]</p>
        `
    },
] 