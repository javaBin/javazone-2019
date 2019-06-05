
const lightning = {
    icon: `${process.env.PUBLIC_URL}/lightning.svg`,
    title: 'Lightning talks',
    length: '10 or 20 minutes',
    description: 'Are you presenting a great new idea, or want to give the audience a teaser for a cool topic? Then you should strongly consider the lightning talk format.  Note that the 10-20 minute time limit is strictly enforced!'
};

const presentation = {
    icon: `${process.env.PUBLIC_URL}/presentation.svg`,
    title: 'Presentations',
    length: '45 or 60 minutes',
    description: 'Presentations at JavaZone can be either 45 or 60 minutes long. This gives you room to elaborate on an idea. When submitting your talk, please indicate clearly in the outline how much time is reserved for questions.'
};

const workshop = {
    icon: `${process.env.PUBLIC_URL}/workshop.svg`,
    title: 'Workshops',
    length: '2 hours, 4 hours, 8 hours',
    description: 'We will continue the popular workshop concept with a range of sessions on Tuesday, September 10th. The format for the workshops is in-depth, hands-on and interactive.'
};

export { lightning, presentation, workshop };
