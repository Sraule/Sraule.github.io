export interface Project {
  id: string;
  name: string;
  area: string;
  year: string;
  title: string;
  description: string;
  question: string;
  approach: { title: string; description: string }[];
  takeaway?: { label: string; description: string };
  tags: string[];
  image: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  alt: string;
  caption: string;
  tone: 'lemon' | 'stage' | 'causal';
  facts: { value: string; label: string }[];
}

// Briefs verified against the supplied manuscripts and CV. No publication status is implied.
// Original documents and private contact details are deliberately outside this project.
export const projects: Project[] = [
  {
    id: 'cimo', name: 'CIMO', area: 'Causal video prediction', year: 'Work in progress',
    title: 'Object-centric learning and physical dynamics',
    description: 'Research in object-centric learning and physical dynamics. Further details will be shared when available.',
    question: '', approach: [],
    tags: ['Object-centric learning', 'Video prediction'],
    image: 'images/cimo-placeholder.svg',
    alt: 'Abstract illustration of physical objects across successive frames; a thematic illustration, not a manuscript figure.',
    caption: 'Research theme', tone: 'causal', facts: [],
  },
  {
    id: 'lemon', name: 'LEMON', area: 'Multimodal video understanding', year: 'arXiv 2026',
    title: 'A benchmark for temporal multimodal understanding of instructional videos',
    description: 'LEMON evaluates multimodal large language models (MLLMs) on STEM lectures using aligned video, audio, text, and contextually linked questions.',
    question: 'Can MLLMs integrate multimodal evidence and temporal context to understand instructional videos?',
    approach: [
      { title: 'Video collection and multimodal alignment', description: 'Align video, audio, and Whisper-v3 subtitles from 29 courses across five STEM disciplines.' },
      { title: 'Hybrid human–AI QA annotation', description: 'Generate temporally grounded QA pairs with a human–AI pipeline, then verify answers and sequential dependencies.' },
      { title: 'Multi-stage quality review', description: 'Review correctness, answer consistency, temporal references, and dependence on audio or subtitles.' },
    ],
    tags: ['Multimodal LLMs' , 'Video understanding', 'Temporal reasoning'],
    image: 'images/lemon-overview.webp',
    alt: 'LEMON dataset figure showing five STEM disciplines, lecture duration distribution, and twelve benchmark subtasks.',
    caption: 'Disciplinary coverage, video duration, and subtask distribution · Figure 2',
    tone: 'lemon',
    facts: [{ value: '2,277', label: 'video segments' }, { value: '4,181', label: 'question–answer pairs' }, { value: '6 / 12', label: 'tasks / subtasks' }],
  },
  {
    id: 'stagescope', name: 'StageScope', area: 'AI for weather', year: 'CAC 2026',
    title: 'Grid-level lifecycle identification of severe convective weather',
    description: 'StageScope integrates radar (VIL), infrared satellite (IR107), and lightning (LGTH) observations for grid-level lifecycle identification in severe convective weather.',
    question: 'How can multimodal observations distinguish incubation, initiation, maturity, and dissipation at grid level?',
    approach: [
      { title: 'Multimodal observation integration', description: 'Combine three observation modalities and their temporal variations.' },
      { title: 'CNN–Transformer spatiotemporal modeling', description: 'Fuse spatial features and temporal context to predict lifecycle stage maps.' },
      { title: 'Domain-informed weak supervision', description: 'Combine sparse weak labels with four constraints on lifecycle evolution.' },
    ],
    // Evaluation context is stated once, alongside the results table in projectStudies.ts.
    tags: ['Spatiotemporal learning' , 'Physics-inspired framework', 'Weak supervision'],
    image: 'images/stagescope-lifecycle.webp',
    alt: 'StageScope Figure 1: the four-stage convective lifecycle, including incubation, initiation, maturity, and dissipation, with observational characteristics.',
    caption: 'Four-stage weather lifecycle · StageScope, Figure 1',
    tone: 'stage',
    facts: [{ value: '3', label: 'observation modalities' }, { value: '4', label: 'lifecycle stages' }, { value: '358', label: 'SEVIR events' }],
  },
];
