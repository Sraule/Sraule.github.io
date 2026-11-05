// Source: the user-supplied LEMON manuscript, Sections 3–4, Figures 3–4,
// and Tables 3–4. Changes below are percentage points, not relative percentages.
export const lemonStudy = {
  tasks: {
    title: 'Task design for temporal multimodal understanding',
    intro: 'Six core tasks and twelve subtasks assess perception, reasoning, and generation. Multiple-choice tasks use contextually linked question chains, while open-ended tasks evaluate video summarization and knowledge translation.',
    image: 'images/lemon-task-examples.webp',
    alt: 'Full LEMON task examples: streaming perception, audio comprehension, OCR-Based Reasoning, temporal awareness, instructional prediction, and advanced expression, with linked question chains.',
    caption: 'Task examples and sequentially dependent questions · Figure 3',
    items: [
      { name: 'Streaming Perception', description: 'Identification of key concepts, domain conceptual comprehension, and fine-grained local detail tracking.' },
      { name: 'OCR-Based Reasoning', description: 'Recognition of text in video frames and problem solving grounded in the extracted content.' },
      { name: 'Audio Comprehension', description: 'Speech transcription and contextual listening based on spoken content and its visual grounding.' },
      { name: 'Temporal Awareness', description: 'Inference of chronological or logical relationships among instructional steps across video segments.' },
      { name: 'Instructional Prediction', description: 'Teaching intent recognition and prediction of subsequent instructional content from contextual progression.' },
      { name: 'Advanced Expression', description: 'Coherent video summarization and cross-lingual knowledge translation with semantic and terminological fidelity.' },
    ],
  },
  evaluation: {
    title: 'Performance disparities across perception, reasoning, and generation',
    intro: 'The benchmark evaluates 21 representative MLLMs from three categories: proprietary, open-source omni, and open-source video models. Evaluation follows a unified prompting and video-chunking protocol in a zero-shot setting.',
    image: 'images/lemon-task-performance.webp',
    alt: 'LEMON Figure 4b: grouped bar chart of ten representative models. Perception scores exceed reasoning and generation scores for every model shown.',
    caption: 'Performance across cognitive task groups · Figure 4b',
    findings: [
      { title: 'Limitations in complex reasoning and generation', description: 'Open-source MLLMs exhibit relatively strong perceptual performance but remain limited in complex reasoning and in the coherence and specificity of generated responses.' },
      { title: 'Challenges in temporal reasoning and instructional prediction', description: 'Low performance on Temporal Awareness and Future Content Prediction indicates difficulty in capturing long-range dependencies and modeling the sequential structure of instructional content.' },
    ],
    ablationTitle: 'Effects of subtitle and audio inputs',
    ablationIntro: 'Selected ablation results on Streaming Perception (SP), OCR-Based Reasoning (OR), and Instructional Prediction (IP). Scores compare video-only input with video plus the indicated modality; Δ denotes the change in percentage points.',
    ablations: [
      { title: 'Subtitle input', source: 'Table 4', description: 'Subtitles generally provide more stable performance gains, although degradation is observed for some video MLLMs.', input: 'Video + subtitles', inputLabel: '+Subtitle', rows: [
        { model: 'ShareGPT4Video', baseline: '34.46', augmented: '58.71', delta: '+24.25', positive: true },
        { model: 'VideoLLaMA3', baseline: '68.31', augmented: '53.63', delta: '−14.68', positive: false },
      ] },
      { title: 'Audio input', source: 'Table 3', description: 'Audio yields less consistent gains, with performance degradation in some omni models indicating limitations in audio–visual semantic alignment.', input: 'Video + audio', inputLabel: '+Audio', rows: [
        { model: 'Baichuan-Omni-1.5', baseline: '57.78', augmented: '66.84', delta: '+9.06', positive: true },
        { model: 'Ola', baseline: '68.62', augmented: '66.49', delta: '−2.13', positive: false },
      ] },
    ],
  },
};
