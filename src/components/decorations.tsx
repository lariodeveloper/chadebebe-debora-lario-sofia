import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

interface DecorationProps {
  size?: number;
  sx?: SxProps<Theme>;
}

const HEART_PATH =
  "M12 21s-7.2-4.4-9.6-8.9C0.6 8.2 2.7 4.5 6.5 4.5c2 0 3.6 1.1 5.5 3.4 1.9-2.3 3.5-3.4 5.5-3.4 3.8 0 5.9 3.7 4.1 7.6C19.2 16.6 12 21 12 21Z";

export function Heart({
  size = 14,
  color = "#E85D8A",
  sx,
}: DecorationProps & { color?: string }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      sx={{ width: size, height: size, display: "block", flexShrink: 0, ...sx }}
    >
      <path d={HEART_PATH} fill={color} />
    </Box>
  );
}

export function RibbonBow({ size = 64, sx }: DecorationProps) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 80"
      aria-hidden="true"
      sx={{ width: size, height: size * 0.8, display: "block", ...sx }}
    >
      <ellipse
        cx="26"
        cy="30"
        rx="24"
        ry="17"
        fill="#F2A6C0"
        transform="rotate(-18 26 30)"
      />
      <ellipse
        cx="74"
        cy="30"
        rx="24"
        ry="17"
        fill="#F2A6C0"
        transform="rotate(18 74 30)"
      />
      <path d="M45 40 L38 68 L50 59 L62 68 L55 40 Z" fill="#EC8EAF" />
      <circle cx="50" cy="33" r="10" fill="#E85D8A" />
    </Box>
  );
}

export function LeafSprig({
  size = 90,
  sx,
  flip = false,
}: DecorationProps & { flip?: boolean }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 60 100"
      aria-hidden="true"
      sx={{
        width: size * 0.6,
        height: size,
        display: "block",
        transform: flip ? "scaleX(-1)" : undefined,
        ...sx,
      }}
    >
      <path
        d="M30 96 C24 72 26 46 34 8"
        stroke="#90A378"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="19" cy="74" rx="10" ry="5" fill="#9CB184" transform="rotate(-32 19 74)" />
      <ellipse cx="41" cy="58" rx="10" ry="5" fill="#90A378" transform="rotate(28 41 58)" />
      <ellipse cx="19" cy="42" rx="9" ry="4.5" fill="#9CB184" transform="rotate(-26 19 42)" />
      <ellipse cx="38" cy="24" rx="9" ry="4.5" fill="#90A378" transform="rotate(22 38 24)" />
    </Box>
  );
}

export function BearPeek({ size = 120, sx }: DecorationProps) {
  return (
    <Box
      component="svg"
      viewBox="0 0 200 150"
      aria-hidden="true"
      sx={{ width: size, height: size * 0.75, display: "block", ...sx }}
    >
      <circle cx="55" cy="38" r="25" fill="#C6906A" />
      <circle cx="145" cy="38" r="25" fill="#C6906A" />
      <circle cx="55" cy="40" r="11" fill="#EAC9AC" />
      <circle cx="145" cy="40" r="11" fill="#EAC9AC" />

      <circle cx="100" cy="88" r="60" fill="#D6A57C" />
      <ellipse cx="100" cy="108" rx="28" ry="22" fill="#F1DAC2" />

      <path
        d="M78 66 q9 9 0 16"
        stroke="#5B3A2A"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M122 66 q-9 9 0 16"
        stroke="#5B3A2A"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="112" r="4" fill="#5B3A2A" />

      <g transform="translate(118,10) scale(0.55)">
        <ellipse
          cx="26"
          cy="30"
          rx="24"
          ry="17"
          fill="#E85D8A"
          transform="rotate(-18 26 30)"
        />
        <ellipse
          cx="74"
          cy="30"
          rx="24"
          ry="17"
          fill="#E85D8A"
          transform="rotate(18 74 30)"
        />
        <circle cx="50" cy="33" r="10" fill="#C93E6B" />
      </g>
    </Box>
  );
}
