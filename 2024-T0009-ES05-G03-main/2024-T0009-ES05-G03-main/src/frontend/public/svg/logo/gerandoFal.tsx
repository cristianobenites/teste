import * as React from "react"

function GerandoFalSVG(props:any) {
  return (
    <svg
      width={100}
      height={25}
      viewBox="0 0 372 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path d="M0 0h372v94H0V0z" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_458_450" transform="scale(.00269 .01064)" />
        </pattern>
        <image
          id="image0_458_450"
          width={372}
          height={94}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default GerandoFalSVG
