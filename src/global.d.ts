declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.sass' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}