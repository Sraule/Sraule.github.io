export interface StudyFigure {
  image:string; alt:string; caption:string; label:string; width:number; height:number;
  description?:string;
}
export interface StudySection {
  key:string; label:string; title:string; intro:string;
  figures?:StudyFigure[];
  points?:{title:string; description:string}[];
  metrics?:{value:string; label:string}[];
  table?:{title:string; caption:string; columns:string[]; rows:string[][]; note:string};
}
export interface ProjectStudy { sections:StudySection[]; }

// Source-grounded manuscript summaries for local review. Figures preserve complete
// scientific panels; the source PDFs are never copied into public assets.
export const projectStudies:Record<string,ProjectStudy> = {
  stagescope: { sections:[
    {
      key:'architecture',label:'02 / Architecture & supervision',
      title:'Architecture and supervision',
      intro:'A shared CNN and temporal Transformer fuse multimodal features to predict four-stage probability maps at the input grid resolution.',
      figures:[{image:'images/stagescope-architecture.webp',alt:'Complete StageScope Figure 2: multimodal state and evolution channels, CNN encoder, temporal tokenizer and Transformer, feature fusion, and grid-level stage maps with a four-stage legend.',caption:'Overall architecture for grid-level stage identification · Figure 2',label:'StageScope Figure 2',width:1872,height:772}],
      points:[
        {title:'Lifecycle-order consistency',description:'Penalizes departures from the expected stage sequence.'},
        {title:'Observation–stage consistency',description:'Aligns stage probabilities with observational evidence.'},
        {title:'Stage duration regularity',description:'Reduces transient, single-frame stage changes.'},
        {title:'Spatiotemporal coherence',description:'Encourages spatial consistency and temporal stability.'},
      ],
    },
    {
      key:'evaluation',label:'03 / Evaluation & ablation',
      title:'Lifecycle maps and evaluation',
      intro:'Experiments use 358 SEVIR events on a 192 × 192 grid; quantitative evaluation uses 41 automatically annotated events.',
      figures:[{image:'images/stagescope-stage-maps.webp',alt:'Complete StageScope Figure 4: four rows of lifecycle stage maps for thunderstorm wind, hail, tornado, and lightning events over five times, including the incubation, initiation, maturity, and dissipation legend.',caption:'Predicted stage maps across representative weather events · Figure 4',label:'StageScope Figure 4',width:1872,height:876}],
      metrics:[{value:'0.861',label:'Accuracy'},{value:'0.779',label:'Macro-F1'},{value:'0.647',label:'mIoU'},{value:'0.828',label:'F1₁–₃'}],
      table:{title:'Ablation of physics-inspired constraints',caption:'Agreement with automatically generated references · Table VI',columns:['Variant','Accuracy ↑','Macro-F1 ↑','mIoU ↑','F1₁–₃ ↑'],rows:[['Weak supervision','0.737','0.574','0.448','0.562'],['+ Lifecycle order','0.826','0.700','0.565','0.725'],['+ Observation','0.838','0.725','0.589','0.757'],['+ Duration','0.785','0.625','0.492','0.628'],['+ Spatiotemporal','0.805','0.652','0.517','0.663'],['Full model','0.861','0.779','0.647','0.828']],note:'Metrics follow Table IV; F1₁–₃ excludes incubation. Scores measure agreement with automatic references, not independently annotated expert ground truth.'},
      points:[
        {title:'Lifecycle structure',description:'Predicted stages form spatially coherent regions; maturity and dissipation achieve higher F1 than early stages.'},
        {title:'Constraint ablation',description:'Observation consistency and lifecycle order give the largest individual gains; all four constraints perform best together.'},
      ],
    },
  ]},
};
