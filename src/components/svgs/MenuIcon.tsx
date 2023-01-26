import * as React from "react"
import { SVGProps } from "react"

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13H15M1 1H15M1 7H7"
            stroke="#5C7079"
            stroke-linecap="round"
          />
        </svg>
}

export default MenuIcon