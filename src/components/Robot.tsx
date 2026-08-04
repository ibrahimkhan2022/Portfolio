import { forwardRef } from 'react'

type RobotProps = {
  pupilX: number
  pupilY: number
  speaking: boolean
  className?: string
}

/**
 * Ported from the supplied green_hover_robot.svg. The face arcs (eyebrows/smile)
 * are kept as-is; a separate eye-socket + pupil layer is added on top so the
 * pupils can track the cursor independently of the decorative face linework.
 */
const Robot = forwardRef<SVGSVGElement, RobotProps>(function Robot(
  { pupilX, pupilY, speaking, className },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      className={className}
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#343638" />
          <stop offset="100%" stopColor="#171819" />
        </linearGradient>
        <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#36383A" />
          <stop offset="100%" stopColor="#151617" />
        </linearGradient>
        <radialGradient id="screenGrad" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#111719" />
          <stop offset="100%" stopColor="#020303" />
        </radialGradient>
        <radialGradient id="orbGrad" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#DFFF63" />
          <stop offset="55%" stopColor="#A6FF00" />
          <stop offset="100%" stopColor="#5EC900" />
        </radialGradient>

        <filter id="greenGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <ellipse cx="500" cy="895" rx="125" ry="20" fill="#77FF00" opacity="0.22" filter="url(#softGlow)" />

      <rect x="478" y="92" width="44" height="67" rx="16" fill="url(#bodyGrad)" stroke="#080909" strokeWidth="6" />
      <rect x="457" y="145" width="86" height="30" rx="15" fill="#202224" stroke="#080909" strokeWidth="6" />
      <rect x="468" y="151" width="64" height="10" rx="5" fill="#96FF00" />
      <circle
        className="animate-pulse-glow"
        cx="500"
        cy="79"
        r="43"
        fill="url(#orbGrad)"
        stroke="#C8FF47"
        strokeWidth="4"
        filter="url(#greenGlow)"
        style={{ transformOrigin: '500px 79px' }}
      />
      <ellipse cx="485" cy="62" rx="10" ry="15" fill="#FFFFFF" opacity="0.55" />

      <g>
        <rect x="176" y="285" width="75" height="164" rx="34" fill="url(#headGrad)" stroke="#090A0A" strokeWidth="8" />
        <rect x="190" y="299" width="12" height="135" rx="6" fill="#A4FF00" filter="url(#greenGlow)" />
        <rect x="749" y="285" width="75" height="164" rx="34" fill="url(#headGrad)" stroke="#090A0A" strokeWidth="8" />
        <rect x="798" y="299" width="12" height="135" rx="6" fill="#A4FF00" filter="url(#greenGlow)" />
      </g>

      <rect x="220" y="165" width="560" height="390" rx="125" fill="url(#headGrad)" stroke="#090A0A" strokeWidth="10" />

      <rect x="276" y="229" width="448" height="266" rx="88" fill="url(#screenGrad)" stroke="#45484A" strokeWidth="6" />

      {/* The two curved strokes are the robot's eyes. The outer group blinks
          (scaleY squash), the inner group nudges them toward the cursor. */}
      <g className="robot-eyelid" style={{ transformOrigin: '500px 338px' }}>
        <g
          fill="none"
          stroke="#A5FF00"
          strokeWidth="26"
          strokeLinecap="round"
          filter="url(#greenGlow)"
          style={{ transform: `translate(${pupilX}px, ${pupilY}px)`, transition: 'transform 90ms linear' }}
        >
          <path d="M363 365 Q405 310 447 365" />
          <path d="M553 365 Q595 310 637 365" />
        </g>
      </g>

      <g
        fill="none"
        stroke="#A5FF00"
        strokeWidth="26"
        strokeLinecap="round"
        filter="url(#greenGlow)"
        className={speaking ? 'robot-mouth-talk' : undefined}
        style={{ transformOrigin: '500px 434px' }}
      >
        <path d="M455 413 Q500 456 545 413" />
      </g>

      <rect x="455" y="548" width="90" height="60" rx="27" fill="url(#bodyGrad)" stroke="#0B0C0C" strokeWidth="7" />

      <g fill="url(#bodyGrad)" stroke="#0A0B0B" strokeWidth="8">
        <path d="M342 620 C286 619 246 682 249 761 C251 813 281 846 318 838 C351 831 365 795 349 752 C331 704 343 665 377 640 Z" />
        <path d="M658 620 C714 619 754 682 751 761 C749 813 719 846 682 838 C649 831 635 795 651 752 C669 704 657 665 623 640 Z" />
      </g>

      <g fill="#98FF00" filter="url(#greenGlow)">
        <path d="M268 730 C290 715 318 711 343 719 L348 740 C321 733 294 737 274 750 Z" />
        <path d="M732 730 C710 715 682 711 657 719 L652 740 C679 733 706 737 726 750 Z" />
      </g>

      <g fill="url(#bodyGrad)" stroke="#0A0B0B" strokeWidth="8">
        <circle cx="300" cy="816" r="51" />
        <circle cx="700" cy="816" r="51" />
      </g>
      <g fill="#020303">
        <path d="M290 793 C271 802 265 824 275 840 C285 855 306 858 322 848 L305 828 C295 834 287 825 290 817 C293 809 301 808 309 812 L324 790 C313 785 301 786 290 793 Z" />
        <path d="M710 793 C729 802 735 824 725 840 C715 855 694 858 678 848 L695 828 C705 834 713 825 710 817 C707 809 699 808 691 812 L676 790 C687 785 699 786 710 793 Z" />
      </g>

      <path
        d="M348 590
           C380 560 620 560 652 590
           C695 630 686 760 646 825
           C616 873 564 902 500 902
           C436 902 384 873 354 825
           C314 760 305 630 348 590 Z"
        fill="url(#bodyGrad)"
        stroke="#0A0B0B"
        strokeWidth="10"
      />

      <path d="M340 744 Q500 785 660 744" fill="none" stroke="#090A0A" strokeWidth="6" opacity="0.75" />

      <rect x="395" y="625" width="210" height="155" rx="44" fill="#15191A" stroke="#090A0A" strokeWidth="8" />
      <rect x="409" y="639" width="182" height="127" rx="34" fill="none" stroke="#9EFF00" strokeWidth="10" filter="url(#greenGlow)" />

      <path
        d="M522 651 L469 716 L503 716 L480 760 L548 692 L513 692 Z"
        fill="#A7FF00"
        filter="url(#greenGlow)"
        className={speaking ? 'animate-pulse-glow' : undefined}
        style={{ transformOrigin: '509px 706px' }}
      />

      <path d="M305 218 Q349 183 410 184" fill="none" stroke="#6A6D70" strokeWidth="12" strokeLinecap="round" opacity="0.35" />
      <path d="M383 594 Q438 573 493 574" fill="none" stroke="#55585A" strokeWidth="12" strokeLinecap="round" opacity="0.22" />
    </svg>
  )
})

export default Robot
