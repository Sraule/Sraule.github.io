export const profile = {
  avatar: 'images/avatar.jpg',
  universityLogo: 'images/sjtu-seal.png',
  name: 'Sraule Lean',
  chineseName: '沈磊',
  role: 'M.S. Student in Electronic Information',
  university: 'Shanghai Jiao Tong University',
  school: 'School of Automation and Intelligent Sensing',
  email: 'shen_lei@sjtu.edu.cn',
  location: 'Shanghai, China',
  tagline: 'Learning to understand a world in motion.',
  intro: 'I am a master’s student in Electronic Information at Shanghai Jiao Tong University. I previously studied Automation at Nanjing University of Aeronautics and Astronautics.',
};

export const interests = [
  { number: '01', title: 'Causal reasoning', description: 'Understanding dependencies and how changes in one part of a system affect the rest.', icon: 'causal' },
  { number: '02', title: 'Computer vision', description: 'Learning representations of visual scenes and their evolution over time.', icon: 'vision' },
  { number: '03', title: 'Multimodal intelligence', description: 'Connecting visual, audio, and language evidence for richer understanding.', icon: 'multimodal' },
];

export const education = [
  { degree: 'M.S. in Electronic Information', university: 'Shanghai Jiao Tong University', detail: 'School of Automation and Intelligent Sensing', start: 'Sep 2025', end: 'Mar 2028 · expected', initials: 'SJTU', current: true },
  { degree: 'Bachelor’s degree in Automation', university: 'Nanjing University of Aeronautics and Astronautics', detail: 'Undergraduate studies', start: 'Sep 2021', end: 'Jun 2025', initials: 'NUAA', current: false },
];

export const skills = [
  { label: 'Implementation', icon: 'data', items: ['Python', 'PyTorch'] },
  { label: 'Training & fine-tuning', icon: 'tune', items: ['Model training', 'Supervised fine-tuning (SFT)', 'Loss design'] },
  { label: 'Data & evaluation', icon: 'chart', items: ['Data preprocessing', 'Experiment analysis'] },
  { label: 'Learning methods', icon: 'model', items: ['Deep learning', 'Transformers', 'Multimodal learning'] },
];
