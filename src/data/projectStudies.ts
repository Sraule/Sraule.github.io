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
      title:'Multimodal spatiotemporal modeling with physical constraints',
      intro:'Input channels encode radar, infrared, and lightning observations. A shared CNN extracts spatial features; a Transformer models temporal context, which is fused with spatial features to predict four-stage probability maps at the original grid resolution.',
      figures:[{image:'images/stagescope-architecture.webp',alt:'Complete StageScope Figure 2: multimodal state and evolution channels, CNN encoder, temporal tokenizer and Transformer, feature fusion, and grid-level stage maps with a four-stage legend.',caption:'Overall architecture for grid-level stage identification · Figure 2',label:'StageScope Figure 2',width:1872,height:772}],
      points:[
        {title:'Lifecycle-order consistency',description:'Penalizes stage transitions that deviate from the expected local lifecycle sequence.'},
        {title:'Observation–stage consistency',description:'Aligns predicted stage probabilities with evidence derived from multimodal observations and their temporal variations.'},
        {title:'Stage duration regularity',description:'Discourages transient, single-frame stage changes to reduce temporal fragmentation.'},
        {title:'Spatiotemporal coherence',description:'Encourages local spatial consistency and reduces excessive frame-to-frame probability oscillation.'},
      ],
    },
    {
      key:'evaluation',label:'03 / Evaluation & ablation',
      title:'Lifecycle stage maps and reference agreement',
      intro:'Experiments use 358 SEVIR events with synchronized observations aligned to a 192 × 192 grid. Quantitative assessment uses 41 automatically annotated events. Event types describe meteorological diversity and are distinct from lifecycle stage labels.',
      figures:[{image:'images/stagescope-stage-maps.webp',alt:'Complete StageScope Figure 4: four rows of lifecycle stage maps for thunderstorm wind, hail, tornado, and lightning events over five times, including the incubation, initiation, maturity, and dissipation legend.',caption:'Predicted stage maps across representative weather events · Figure 4',label:'StageScope Figure 4',width:1872,height:876}],
      metrics:[{value:'0.861',label:'Accuracy'},{value:'0.779',label:'Macro-F1'},{value:'0.647',label:'mIoU'},{value:'0.828',label:'F1₁–₃'}],
      table:{title:'Ablation of physics-inspired constraints',caption:'Agreement with automatically generated references · Table VI',columns:['Variant','Accuracy ↑','Macro-F1 ↑','mIoU ↑','F1₁–₃ ↑'],rows:[['Weak supervision','0.737','0.574','0.448','0.562'],['+ Lifecycle order','0.826','0.700','0.565','0.725'],['+ Observation','0.838','0.725','0.589','0.757'],['+ Duration','0.785','0.625','0.492','0.628'],['+ Spatiotemporal','0.805','0.652','0.517','0.663'],['Full model','0.861','0.779','0.647','0.828']],note:'Overall metric values above follow Table IV. F1₁–₃ excludes incubation to reduce the influence of inactive regions. These scores quantify automatic-reference agreement, not accuracy against independently annotated expert ground truth.'},
      points:[
        {title:'Spatial and temporal lifecycle structure',description:'The predicted maps exhibit spatially coherent stage regions and consistent temporal evolution. Maturity and dissipation show higher stage-wise F1 than the more gradually transitioning early stages.'},
        {title:'Complementary regularization effects',description:'Observation consistency and lifecycle order provide the largest individual improvements. Combining all four constraints yields the strongest results across the reported metrics.'},
      ],
    },
  ]},
};
