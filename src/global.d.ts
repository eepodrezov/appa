/// <reference types="react" />

declare module '*.module.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.module.sass' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.module.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.svg' {
  import * as React from 'react'
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<React.SVGElement>
  >
  export default ReactComponent
}

declare module '*.json' {
  const value: any
  export default value
}
