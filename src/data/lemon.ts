// Source: the user-supplied LEMON manuscript, Sections 3–4, Figures 3–4,
// and Tables 3–4. Changes below are percentage points, not relative percentages.
export const lemonStudy = {
  tasks: {
    title: 'Task design',
    intro: 'Six tasks and twelve subtasks span perception, reasoning, and generation, using linked question chains and open-ended responses.',
    image: 'images/lemon-task-examples.webp',
    alt: 'Full LEMON task examples: streaming perception, audio comprehension, OCR-Based Reasoning, temporal awareness, instructional prediction, and advanced expression, with linked question chains.',
    caption: 'Task examples and sequentially dependent questions · Figure 3',
    items: [
      { name: 'Streaming Perception', description: 'Key concepts, domain knowledge, and local details.' },
      { name: 'OCR-Based Reasoning', description: 'Text recognition and text-grounded problem solving.' },
      { name: 'Audio Comprehension', description: 'Speech transcription and contextual listening.' },
      { name: 'Temporal Awareness', description: 'Temporal and logical relationships across instructional steps.' },
      { name: 'Instructional Prediction', description: 'Teaching intent and subsequent content prediction.' },
      { name: 'Advanced Expression', description: 'Video summarization and cross-lingual knowledge translation.' },
    ],
  },
  evaluation: {
    title: 'Evaluation and findings',
    intro: 'Twenty-one proprietary, open-source omni, and video MLLMs are evaluated zero-shot under a unified prompting and video-chunking protocol.',
    image: 'images/lemon-task-performance.webp',
    alt: 'LEMON Figure 4b: grouped bar chart of ten representative models. Perception scores exceed reasoning and generation scores for every model shown.',
    caption: 'Performance across cognitive task groups · Figure 4b',
    findings: [
      { title: 'Reasoning and generation remain challenging', description: 'Open-source MLLMs perform better on perception than on complex reasoning and coherent generation.' },
      { title: 'Limited long-range understanding', description: 'Temporal Awareness and Future Content Prediction remain difficult, indicating limitations in modeling instructional sequences.' },
    ],
    ablationTitle: 'Subtitle and audio ablations',
    ablationIntro: 'Selected results on Streaming Perception, OCR-Based Reasoning, and Instructional Prediction. Δ denotes percentage-point changes from video-only input.',
    ablations: [
      { title: 'Subtitle input', source: 'Table 4', description: 'Subtitles generally help, but gains vary across models.', input: 'Video + subtitles', inputLabel: '+Subtitle', rows: [
        { model: 'ShareGPT4Video', baseline: '34.46', augmented: '58.71', delta: '+24.25', positive: true },
        { model: 'VideoLLaMA3', baseline: '68.31', augmented: '53.63', delta: '−14.68', positive: false },
      ] },
      { title: 'Audio input', source: 'Table 3', description: 'Audio gains are less consistent, with degradation in some omni models.', input: 'Video + audio', inputLabel: '+Audio', rows: [
        { model: 'Baichuan-Omni-1.5', baseline: '57.78', augmented: '66.84', delta: '+9.06', positive: true },
        { model: 'Ola', baseline: '68.62', augmented: '66.49', delta: '−2.13', positive: false },
      ] },
    ],
  },
};
