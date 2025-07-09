import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

// Types for the loader variants
const loaderVariants = cva("text-foreground", {
    variants: {
        variant: {
            default: "border-primary",
            secondary: "border-secondary",
            destructive: "border-destructive",
        },
        size: {
            default: "w-8 h-8",
            sm: "w-4 h-4",
            lg: "w-12 h-12",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

// Loader component types
export type LoaderVariant = VariantProps<typeof loaderVariants>["variant"]
export type LoaderSize = VariantProps<typeof loaderVariants>["size"]

export type LoaderType =
    | "spinner"
    | "quantum"
    | "pulseGrid"
    | "animatedBlocks"
    | "wave"
    | "dualRing"
    | "orbit"
    | "infinitySpin"
    | "wave2"
    | "bouncingDots"
    | "bouncingBlocks"
    | "flipDots"
    | "circularDots"
    | "progressBar"
    | "magnifyingGlass"
    | "xlviLoader"

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    variant?: LoaderVariant
    size?: LoaderSize
    type?: LoaderType
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
    ({ className, variant, size, type = "spinner", ...props }, ref) => {
        const Comp = loaderTypes[type]
        return (
            <div ref={ref} className={cn(loaderVariants({ variant, size, className }))} {...props}>
                <Comp />
            </div>
        )
    }
)

Loader.displayName = "Loader"

const Spinner = () => (
    <motion.div
        className="border-4 border-muted rounded-full"
        style={{
            borderTopColor: "currentColor",
            width: "100%",
            height: "100%",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
)

const Quantum = () => (
    <div className="relative w-full h-full">
        <motion.div
            className="absolute inset-0 rounded-full bg-current"
            animate={{
                scale: [1, 0.8, 1],
                rotate: [0, 180, 360],
                borderRadius: ["50%", "25%", "50%"],
            }}
            transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
        />
    </div>
)

const PulseGrid = () => {
    const colors = ['var(--color-red-500)', 'var(--color-green-500)', 'var(--color-blue-500)']
    return (
        <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-current"
                    animate={{ opacity: [1, 0.4, 1] }}
                    style={{ backgroundColor: colors[index % colors.length] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.1, // Staggered animation
                    }}
                />
            ))}
        </div>
    )
}

const Wave = () => (
    <div className="flex items-center justify-center gap-1 w-full h-full">
        {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
                key={index}
                className="w-1 h-4 bg-current rounded-full"
                animate={{
                    y: ["0%", "-50%", "0%"]
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                    repeatType: "reverse"
                }}
            />
        ))}
    </div>
)

const BouncingDots = () => {
    const colors = ['var(--color-red-500)', 'var(--color-green-500)', 'var(--color-blue-500)']
    return (
        <div className="flex items-center justify-center gap-2 w-full h-full">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-current"
                    style={{ backgroundColor: colors[i] }}
                    animate={{
                        y: ["0%", "-100%", "0%"],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}

const BouncingBlocks = () => {
    const colors = ['var(--color-red-500)', 'var(--color-green-500)', 'var(--color-blue-500)']
    return (
        <div className="flex space-x-2">
            {colors.map((color, i) => (
                <motion.div
                    key={i}
                    className='size-4 rounded'
                    style={{ backgroundColor: color }}
                    animate={{
                        y: ["0%", "-50%", "0%"], // Bounce effect
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        delay: i * 0.15,
                        repeat: Infinity,
                        repeatType: 'mirror', // Makes it bounce back smoothly
                    }}
                />
            ))}
        </div>
    )
}

const Wave2 = () => {
    const colors = ['var(--color-red-500)', 'var(--color-green-500)', 'var(--color-blue-500)']
    return (
        <div className="flex items-center justify-center gap-1 w-full h-full">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-4 rounded-full bg-current"
                    style={{ backgroundColor: colors[i] }}
                    animate={{
                        scaleY: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}

const Orbit = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-1/4 h-1/4 rounded-full bg-current" />
        <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-current" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1/4 h-1/4 rounded-full bg-current" />
        </motion.div>
    </div>
)

const DualRing = () => (
    <div className="relative w-full h-full">
        <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-red-500 border-r-red-500 rounded-full"
            animate={{
                rotate: [0, 360]
            }}
            transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
        <motion.div
            className="absolute inset-2 border-4 border-transparent border-b-blue-500 border-l-blue-500 rounded-full"
            animate={{
                rotate: [360, 0]
            }}
            transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    </div>
)

const FlipDots = () => {
    const colors = ['var(--color-red-500)', 'var(--color-green-500)', 'var(--color-blue-500)']
    return (
        <div className="flex w-full h-full justify-center items-center gap-1">
            {colors.map((color, index) => (
                <motion.div
                    key={index}
                    className="size-4 rounded-full mx-1"
                    style={{ background: color }}
                    animate={{
                        scaleX: [1, 1.7, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                    }}
                />
            ))}
        </div>
    );
};

const CircularDots = () => (
    <div className="relative flex items-center justify-center">
        <div className="size-3 rounded-full bg-green-500" />
        <motion.div
            className="absolute size-3 rounded-full bg-red-500"
            animate={{
                x: [16, 14, 0, -14, -16],
                y: [0, 14, 16, 14, 0]
            }}
            transition={{
                duration: 1.2,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatType: "loop"
            }}
        />
        <motion.div
            className="absolute size-3 rounded-full bg-blue-500"
            animate={{
                x: [-16, -14, 0, 14, 16],
                y: [0, -14, -16, -14, 0]
            }}
            transition={{
                duration: 1.2,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatType: "loop"
            }}
        />
    </div>
)

const ProgressBar = () => (
    <div className="w-full max-w-md mx-auto overflow-hidden rounded-full h-2 bg-gray-700">
        <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'linear',
                repeatDelay: 0.2,
            }}
        />
    </div>
)

const AnimatedBlocks = () => (
    <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        aria-label="blocks-loading"
    >
        <rect x="17" y="17" width="20" height="20" fill="#818cf8" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0s"
                calcMode="discrete"
            />
        </rect>
        <rect x="40" y="17" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.125s"
                calcMode="discrete"
            />
        </rect>
        <rect x="63" y="17" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.25s"
                calcMode="discrete"
            />
        </rect>
        <rect x="17" y="40" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.875s"
                calcMode="discrete"
            />
        </rect>
        <rect x="63" y="40" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.375s"
                calcMode="discrete"
            />
        </rect>
        <rect x="17" y="63" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.75s"
                calcMode="discrete"
            />
        </rect>
        <rect x="40" y="63" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.625s"
                calcMode="discrete"
            />
        </rect>
        <rect x="63" y="63" width="20" height="20" fill="#577c9b" className="opacity-90">
            <animate
                attributeName="fill"
                values="#6366f1;#818cf8;#818cf8"
                keyTimes="0;0.125;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0.5s"
                calcMode="discrete"
            />
        </rect>
    </svg>
)

export interface XlviLoaderProps {
    className?: string
    background?: string
    boxColors?: string | string[]
    size?: string
    desktopSize?: string
    mobileSize?: string
}

const XlviLoader: React.FC<XlviLoaderProps> = ({
    className = "",
    background = "transparent",
    boxColors = ["#333"],
    size = "32px",
    desktopSize = "",
    mobileSize = ""
}) => {
    const colorsToFill = ['var(--color-red-500)', 'var(--color-green-500)', 'var(--color-blue-500)'];
    if (typeof boxColors === 'string') {
        colorsToFill[0] = boxColors || "#333";
        colorsToFill[1] = boxColors || "#333";
        colorsToFill[2] = boxColors || "#333";
    } else if (Array.isArray(boxColors)) {
        const asize = boxColors.length;
        if (asize === 0) {
            colorsToFill[0] = "#333";
            colorsToFill[1] = "#333";
            colorsToFill[2] = "#333";
        } else {
            for (let i = 0; i < 3; i += 1) {
                if (i < asize) {
                    colorsToFill[i] = boxColors[i];
                } else {
                    colorsToFill[i] = boxColors[asize - 1];
                }
            }
        }
    }

    // Responsive size calculation
    const getResponsiveSize = React.useCallback(() => {
        if (window.innerWidth >= 1224) {
            return desktopSize !== "" ? parseFloat(desktopSize) : parseFloat(size) * 2;
        }
        return mobileSize !== "" ? parseFloat(mobileSize) : parseFloat(size);
    }, [size, desktopSize, mobileSize]);

    const [sizeFound, setSizeFound] = React.useState(getResponsiveSize());

    React.useEffect(() => {
        const handleResize = () => {
            setSizeFound(getResponsiveSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getResponsiveSize]);

    const sizePassed = sizeFound / 3;
    const sizeContainer = (sizePassed * 112) / 64;
    const sizeBorderRadius = (sizePassed * 24) / 64;
    const sizeBorderThickness = (sizePassed * 8) / 64;

    interface AnimationParams {
        w: number[]
        h: number[]
        mt: number[]
        ml: number[]
    }

    const createBoxAnimation = (animParams: AnimationParams) => ({
        width: animParams.w,
        height: animParams.h,
        marginTop: animParams.mt,
        marginLeft: animParams.ml,
    });

    const anim1Params = {
        w: [
            (sizePassed * 112) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
        ],
        h: [
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 112) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
        ],
        mt: [
            (sizePassed * 64) / 64, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            (sizePassed * 64) / 64, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            0, 0, 0,
        ],
        ml: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    const anim2Params = {
        w: [
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 112) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
        ],
        h: [
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
        ],
        mt: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ml: [
            0, 0, 0, 0, 0, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            (sizePassed * 64) / 64, (sizePassed * 64) / 64,
        ],
    };

    const anim3Params = {
        w: [
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 112) / 64,
        ],
        h: [
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 112) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
            (sizePassed * 48) / 64, (sizePassed * 48) / 64, (sizePassed * 48) / 64,
        ],
        mt: [
            0, 0, 0, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            (sizePassed * 64) / 64, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            (sizePassed * 64) / 64,
        ],
        ml: [
            (sizePassed * 64) / 64, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            (sizePassed * 64) / 64, (sizePassed * 64) / 64, (sizePassed * 64) / 64,
            (sizePassed * 64) / 64, (sizePassed * 64) / 64, 0,
        ],
    };

    return (
        <div
            className={cn("relative p-5", className)}
            style={{
                background,
                width: `${sizeContainer}px`,
                height: `${sizeContainer}px`,
            }}
        >
            <motion.div
                className="absolute block box-border"
                style={{
                    borderRadius: `${sizeBorderRadius}px`,
                    borderWidth: `${sizeBorderThickness}px`,
                    borderStyle: 'solid',
                    borderColor: colorsToFill[0],
                }}
                animate={createBoxAnimation(anim1Params)}
                transition={{
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1],
                    repeat: Infinity,
                    times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
                }}
            />

            <motion.div
                className="absolute block box-border"
                style={{
                    borderRadius: `${sizeBorderRadius}px`,
                    borderWidth: `${sizeBorderThickness}px`,
                    borderStyle: 'solid',
                    borderColor: colorsToFill[1],
                }}
                animate={createBoxAnimation(anim2Params)}
                transition={{
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1],
                    repeat: Infinity,
                    times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
                }}
            />

            <motion.div
                className="absolute block box-border"
                style={{
                    borderRadius: `${sizeBorderRadius}px`,
                    borderWidth: `${sizeBorderThickness}px`,
                    borderStyle: 'solid',
                    borderColor: colorsToFill[2],
                }}
                animate={createBoxAnimation(anim3Params)}
                transition={{
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1],
                    repeat: Infinity,
                    times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
                }}
            />
        </div>
    );
};

export interface MagnifyingGlassProps {
    color?: string
    glassColor?: string
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({ color = "var(--color-primary)", glassColor = "#c0efff" }) => {
    return (
        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            aria-label="magnifying-glass-loading"
            data-testid="magnifying-glass-svg"
        >
            <g transform="translate(50,50)">
                <g transform="scale(0.82)">
                    <g transform="translate(-50,-50)">
                        <motion.g
                            initial={{ translateX: -25, translateY: -25 }}
                            animate={{
                                translateX: ["-25px", "25px", "0px", "-25px"],
                                translateY: ["-25px", "-25px", "25px", "-25px"],
                            }}
                            transition={{
                                duration: 1,
                                times: [0, 0.33, 0.66, 1],
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            <path
                                d="M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z"
                                fill={glassColor}
                            ></path>
                            <path
                                d="M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z"
                                fill={color}
                            ></path>
                        </motion.g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

const DEFAULT_COLOR = "#6366f1"

export interface InfinitySpinProps {
    color?: string
    width?: string
}

export const InfinitySpin: React.FC<InfinitySpinProps> = ({ color = DEFAULT_COLOR, width = "200" }) => {
    const len = 242.776657104492
    const time = 1.6

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={Number(width) * 0.5}
            viewBox={`0 0 ${width} ${Number(width) * 0.5}`}
            data-testid="infinity-spin"
        >
            <motion.path
                data-testid="infinity-spin-path-1"
                stroke={color}
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                initial={{
                    strokeDasharray: `${len * 0.01}px, ${len}px`,
                    strokeDashoffset: 0,
                }}
                animate={{
                    strokeDasharray: [
                        `${len * 0.01}px, ${len}px`,
                        `${len * 0.14}px, ${len}px`,
                        `${len * 0.35}px, ${len}px`,
                        `${len * 0.01}px, ${len}px`,
                    ],
                    strokeDashoffset: [0, -len * 0.11, -len * 0.35, -len * 0.99],
                }}
                transition={{
                    duration: time,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    times: [0, 0.125, 0.4375, 1],
                }}
            />
            <path
                data-testid="infinity-spin-path-2"
                opacity="0.07"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            />
        </svg>
    )
}

// Type for loader components
type LoaderComponent = React.FC<Record<string, any>>

const loaderTypes: Record<LoaderType, LoaderComponent> = {
    spinner: Spinner,
    quantum: Quantum,
    pulseGrid: PulseGrid,
    animatedBlocks: AnimatedBlocks,
    wave: Wave,
    dualRing: DualRing,
    orbit: Orbit,
    infinitySpin: InfinitySpin,
    wave2: Wave2,
    bouncingDots: BouncingDots,
    bouncingBlocks: BouncingBlocks,
    flipDots: FlipDots,
    circularDots: CircularDots,
    progressBar: ProgressBar,
    magnifyingGlass: MagnifyingGlass,
    xlviLoader: XlviLoader,
}

// Main exports for library use
export {
    Loader,
    // Individual loader components
    Spinner,
    Quantum,
    PulseGrid,
    AnimatedBlocks,
    Wave,
    DualRing,
    Orbit,
    Wave2,
    BouncingDots,
    BouncingBlocks,
    FlipDots,
    CircularDots,
    ProgressBar,
    MagnifyingGlass,
    XlviLoader,
    // Variants and utilities
    loaderVariants,
    DEFAULT_COLOR
}

// Default export for convenience
export default Loader