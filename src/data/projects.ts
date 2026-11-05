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
    id: 'lemon', name: 'LEMON', area: 'Temporal multimodal understanding of instructional videos', year: 'arXiv 2026',
    title: 'A benchmark for temporal multimodal understanding of instructional videos',
    description: 'LEMON is a lecture-based benchmark for evaluating multimodal large language models (MLLMs) on knowledge-intensive STEM instructional videos. It integrates temporally aligned video, audio, and text with contextually linked multi-turn questions across six tasks and twelve subtasks.',
    question: 'To what extent can MLLMs integrate multimodal evidence and temporal context to perform perception, reasoning, and generation on instructional videos?',
    approach: [
      { title: 'Video collection and multimodal alignment', description: 'Lecture videos are collected from 29 courses across five STEM disciplines. Audio extraction and Whisper-v3 subtitle generation provide synchronized video–audio–text inputs for question construction.' },
      { title: 'Hybrid human–AI QA annotation', description: 'A hybrid human–AI pipeline generates temporally grounded questions from subtitles and candidate answers from video frames. Human annotators verify the resulting QA pairs, including sequentially dependent follow-up questions.' },
      { title: 'Multi-stage quality review', description: 'Independent review assesses question correctness, answer consistency, and temporal references. Model-based evaluation with and without audio or subtitles further examines multimodal dependence.' },
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
    description: 'StageScope is a physics-inspired multimodal spatiotemporal framework for grid-level lifecycle stage identification in severe convective weather, integrating radar(VIL), infrared satellite(IR107), and lightning observations(LGTH).',
    question: 'How can multimodal meteorological observations support explicit grid-level identification of incubation, initiation, maturity, and dissipation in severe convective weather?',
    approach: [
      { title: 'Multimodal observation integration', description: 'Radar, infrared satellite, and lightning observations, together with their temporal variations, characterize local convective development.' },
      { title: 'CNN–Transformer spatiotemporal modeling', description: 'A hybrid CNN–Transformer architecture captures localized convective structures and temporal co-evolution across modalities to produce grid-level lifecycle stage maps.' },
      { title: 'Domain-informed weak supervision', description: 'Sparse meteorological weak labels are combined with constraints on lifecycle order, observation–stage consistency, stage duration regularity, and spatiotemporal coherence.' },
    ],
    takeaway: { label: 'Evaluation context', description: 'Quantitative assessment uses automatically generated reference annotations. The reported metrics characterize agreement with these references rather than accuracy against independently annotated expert ground truth.' },
    tags: ['Spatiotemporal learning' , 'Physics-inspired framework', 'Weak supervision'],
    image: 'images/stagescope-lifecycle.webp',
    alt: 'StageScope Figure 1: the four-stage convective lifecycle, including incubation, initiation, maturity, and dissipation, with observational characteristics.',
    caption: 'Four-stage weather lifecycle · StageScope, Figure 1',
    tone: 'stage',
    facts: [{ value: '3', label: 'observation modalities' }, { value: '4', label: 'lifecycle stages' }, { value: '358', label: 'SEVIR events' }],
  },
];
