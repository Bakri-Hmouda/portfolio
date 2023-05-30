interface Experience {
    date: string,
    company: string,
    title: string,
    body: string,
}

export const experiences: Experience[] = [
    { date: "Aug 2022 - present", company: "Self-employed", title: "Freelance web developer", body: "Built customer websites using WordPress and JavaScript frameworks to create visually appealing and user-friendly designs. Implemented advanced functionality and interactive features, enhancing the overall user experience and meeting client objectives." },
    { date: "Sep 2021 - Aug 2022", company: "CODI.tech", title: "Web developer trainee", body: "Successfully completed a comprehensive full-stack web developer boot camp, acquiring proficiency in multiple programming languages, frameworks, and tools essential for building dynamic and responsive web applications." },
    { date: "Sep 2019 - Oct 2022", company: "Self-employed", title: "Freelance photographer", body: "Demonstrated expertise as a professional photographer specializing in events and weddings, skillfully capturing and preserving memorable moments through the art of photography. Delivered exceptional, high-quality photographs that encapsulated the essence and emotions of each event and wedding." },
    { date: "Jul 2007 - Oct 2019", company: "Star Media", title: "Graphic designer", body: "Skilled professional image editor and graphic designer with extensive experience using Adobe Creative Suite programs. Proficient in Adobe Photoshop, Illustrator, and InDesign, creating visually stunning designs that meet client specifications and exceed expectations. " },
]
interface Skills {
    title: string,
    level: "beginner" | "intermediate" | "advancedIntermediate" | "advanced" | "expert",
    icon: string
}
export const skills: Skills[] = [
    { title: 'React', level: 'advancedIntermediate', icon: "cib:react" },
    { title: 'NEXT', level: 'advancedIntermediate', icon: "cib:next-js" },
    { title: 'SvelteKit', level: 'advancedIntermediate', icon: "cib:svelte" },
    { title: 'Angular', level: 'beginner', icon: "cib:angular" },
    { title: 'Laravel', level: 'intermediate', icon: "cib:laravel" },
    { title: 'Adobe Creative Suite', level: 'advanced', icon: "cib:adobe-creative-cloud" },

]