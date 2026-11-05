// Home copy is separate from the longer About section for easy editing.
export const home = {
  // Research interests are listed as independent topics; edit the overview here.
  overview: 'My research interests include causal inference, computer vision, and multimodal large language models.',
  overviewLang: 'en',
  interests: [
    { label: 'Causal inference', icon: 'causal', href: '#cimo' },
    { label: 'Computer vision', icon: 'vision', href: '#stagescope' },
    { label: 'Multimodal LLMs', icon: 'multimodal', href: '#lemon' },
  ],
  recentWork: [
    { name: 'CIMO', href: '#cimo', label: 'Causal video prediction', description: 'research in object-centric learning and physical dynamics' },
    { name: 'LEMON', href: '#lemon', label: 'Multimodal lecture understanding', description: 'a benchmark for multimodal understanding and temporal reasoning in STEM lectures' },
    { name: 'StageScope', href: '#stagescope', label: 'Weather lifecycle identification', description: 'a framework for identifying the lifecycle stages of severe convective weather' },
  ],
};
