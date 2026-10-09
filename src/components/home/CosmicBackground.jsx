"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------
   Deterministic star generation
   A seeded PRNG keeps the field identical on server and client (no hydration mismatch).
------------------------------------------------------------------ */

function createRandom(seed) {
  let value = seed;
  return () => {
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n) => Math.round(n * 100) / 100;
const lerp = (min, max, t) => min + (max - min) * t;

const STAR_COLORS = [
  { color: "#ffffff", weight: 45 },
  { color: "#d8e9ff", weight: 30 },
  { color: "#fff1cf", weight: 15 },
  { color: "#d8c8ff", weight: 7 },
  { color: "#f2c46d", weight: 3 },
];

function pickColor(r) {
  let threshold = r * 100;
  for (const { color, weight } of STAR_COLORS) {
    if (threshold < weight) return color;
    threshold -= weight;
  }
  return STAR_COLORS[0].color;
}

// Responsive tiers: 40% of stars on mobile, 70% from `sm`, all of them from `lg`.
const TIER_CLASSES = ["", "hidden sm:block", "hidden lg:block"];
const tierFor = (index) => (index % 10 < 4 ? 0 : index % 10 < 7 ? 1 : 2);

// x = r^0.7 weights the field to the right: ~14% of stars in the left quarter, ~63% in the right half.
function createStars(count, seed, { size, opacity, duration = [3, 8], blurChance = 0 }) {
  const random = createRandom(seed);

  return Array.from({ length: count }, (_, index) => ({
    id: `${seed}-${index}`,
    left: round(100 * Math.pow(random(), 0.7)),
    top: round(random() * 100),
    size: round(lerp(size[0], size[1], random())),
    opacity: round(lerp(opacity[0], opacity[1], random())),
    color: pickColor(random()),
    blur: random() < blurChance,
    duration: round(lerp(duration[0], duration[1], random())),
    delay: round(random() * 6),
    tier: tierFor(index),
  }));
}

// Layer 1 – distant stars (static spans; twinkle comes from two slowly pulsing group wrappers).
const farStars = createStars(180, 1987, { size: [1.1, 2.3], opacity: [0.35, 0.9], blurChance: 0.1 });

// Layer 1 – distant stars with a faint blue/violet halo for depth.
const tintedStars = createStars(12, 4242, { size: [1.5, 2.4], opacity: [0.5, 0.85] }).map((star, index) => ({ ...star, glow: index % 3 === 0 ? "rgba(190,130,255,0.45)" : "rgba(90,150,255,0.6)" }));

// Layer 2 – medium twinkling stars.
const midStars = createStars(48, 7331, { size: [2, 3], opacity: [0.45, 0.9], duration: [3, 8] });

// Milky Way concentration: stars scattered along the band, clustered toward its centre line.
const bandStars = (() => {
  const random = createRandom(9091);
  return Array.from({ length: 110 }, (_, index) => ({
    id: `band-${index}`,
    left: round(random() * 100),
    top: round(((random() + random() + random()) / 3) * 100),
    size: round(lerp(0.8, 1.7, random())),
    opacity: round(lerp(0.3, 0.85, random())),
    color: pickColor(random()),
    blur: false,
    tier: tierFor(index),
  }));
})();

// Layer 3 – bright celestial stars, placed by hand around (not on top of) the zodiac wheel.
const brightStars = [
  { left: "28%", top: "9%", size: 34, tone: "gold", duration: 5.5, delay: 0.2, tier: 0 },
  { left: "47%", top: "4%", size: 22, tone: "white", duration: 6.5, delay: 2.4, tier: 1 },
  { left: "70%", top: "11%", size: 26, tone: "blue", duration: 7.2, delay: 1.1, tier: 0 },
  { left: "93%", top: "26%", size: 36, tone: "gold", duration: 6, delay: 3.1, tier: 0 },
  { left: "97%", top: "57%", size: 22, tone: "white", duration: 7.8, delay: 0.7, tier: 1 },
  { left: "90%", top: "91%", size: 26, tone: "white", duration: 5.2, delay: 1.9, tier: 0 },
  { left: "63%", top: "96%", size: 20, tone: "gold", duration: 6.8, delay: 2.9, tier: 1 },
  { left: "36%", top: "88%", size: 24, tone: "blue", duration: 7.5, delay: 0.4, tier: 0 },
  { left: "21%", top: "41%", size: 18, tone: "white", duration: 4.6, delay: 3.6, tier: 2 },
  { left: "12%", top: "72%", size: 16, tone: "gold", duration: 5.8, delay: 1.5, tier: 2 },
];

const BRIGHT_TONES = {
  gold: { core: "#fff1c9", glow: "246,217,139" },
  white: { core: "#ffffff", glow: "235,242,255" },
  blue: { core: "#e6f0ff", glow: "160,200,255" },
};

const shootingStars = [
  { left: "18%", top: "6%", delay: 3, repeatDelay: 8, className: "" },
  { left: "56%", top: "12%", delay: 7, repeatDelay: 12, className: "hidden sm:block" },
  { left: "38%", top: "60%", delay: 12, repeatDelay: 15, className: "hidden lg:block" },
];

/* ------------------------------------------------------------------
   Gradient layers (inline styles keep the long gradient stacks readable)
------------------------------------------------------------------ */

// Hundreds of faint points from three offset tile sizes; the blob mask breaks up any visible grid.
const microDust = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 0.6px, transparent 0.9px), radial-gradient(circle, rgba(216,233,255,0.6) 0.6px, transparent 0.9px), radial-gradient(circle, rgba(255,241,207,0.55) 0.7px, transparent 1px)",
  backgroundSize: "17px 17px, 23px 23px, 31px 31px",
  backgroundPosition: "0 0, 7px 11px, 13px 5px",
  maskImage: "radial-gradient(ellipse 45% 35% at 72% 34%, #000, transparent), radial-gradient(ellipse 40% 30% at 52% 70%, #000, transparent), radial-gradient(ellipse 30% 40% at 92% 70%, #000, transparent), radial-gradient(ellipse 30% 25% at 30% 20%, rgba(0,0,0,0.6), transparent)",
  WebkitMaskImage: "radial-gradient(ellipse 45% 35% at 72% 34%, #000, transparent), radial-gradient(ellipse 40% 30% at 52% 70%, #000, transparent), radial-gradient(ellipse 30% 40% at 92% 70%, #000, transparent), radial-gradient(ellipse 30% 25% at 30% 20%, rgba(0,0,0,0.6), transparent)",
};

// Sparse painted stars on larger, uneven tiles – less regular than the micro dust.
const paintedStars = {
  backgroundImage: "radial-gradient(1px 1px at 12px 18px, rgba(255,255,255,0.85), transparent), radial-gradient(1px 1px at 64px 92px, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 118px 36px, rgba(255,241,201,0.7), transparent), radial-gradient(1px 1px at 156px 132px, rgba(255,255,255,0.55), transparent), radial-gradient(1.5px 1.5px at 86px 156px, rgba(200,220,255,0.7), transparent), radial-gradient(1px 1px at 34px 128px, rgba(255,255,255,0.45), transparent), radial-gradient(1px 1px at 178px 70px, rgba(255,255,255,0.5), transparent)",
  backgroundSize: "190px 180px",
};

const cosmicDust = {
  backgroundImage: "radial-gradient(ellipse at 65% 35%, rgba(55,120,255,0.25), transparent 45%), radial-gradient(ellipse at 75% 65%, rgba(126,55,190,0.2), transparent 48%), radial-gradient(ellipse at 55% 20%, rgba(25,90,180,0.22), transparent 50%), radial-gradient(ellipse at 88% 18%, rgba(110,70,190,0.16), transparent 40%)",
};

const milkyWayBack = {
  backgroundImage: "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(70,96,210,0.42), rgba(100,70,190,0.18) 55%, transparent 75%)",
};

// Irregular clouds of blue, violet and a hint of pink strung along the band.
const milkyWayMain = {
  backgroundImage: "radial-gradient(ellipse 20% 36% at 16% 54%, rgba(80,130,255,0.5), transparent 70%), radial-gradient(ellipse 16% 28% at 31% 42%, rgba(150,100,230,0.46), transparent 70%), radial-gradient(ellipse 26% 42% at 48% 56%, rgba(70,120,240,0.52), transparent 70%), radial-gradient(ellipse 13% 24% at 60% 38%, rgba(222,132,200,0.32), transparent 70%), radial-gradient(ellipse 22% 36% at 72% 55%, rgba(120,90,220,0.48), transparent 70%), radial-gradient(ellipse 15% 28% at 86% 44%, rgba(90,150,255,0.42), transparent 70%), radial-gradient(ellipse 9% 18% at 40% 62%, rgba(200,215,255,0.28), transparent 70%), radial-gradient(ellipse 8% 14% at 66% 50%, rgba(220,205,255,0.26), transparent 70%)",
};

// Dark dust lanes that cut through the band so it never reads as a solid stripe.
const milkyWayLanes = {
  backgroundImage: "radial-gradient(ellipse 12% 10% at 28% 55%, rgba(6,18,37,0.55), transparent 70%), radial-gradient(ellipse 16% 9% at 55% 46%, rgba(6,18,37,0.5), transparent 70%), radial-gradient(ellipse 10% 8% at 79% 58%, rgba(6,18,37,0.45), transparent 70%), radial-gradient(ellipse 8% 7% at 42% 36%, rgba(6,18,37,0.35), transparent 70%)",
};

const cosmicClouds = {
  backgroundImage: "radial-gradient(ellipse 40% 18% at 78% 96%, rgba(120,140,205,0.16), transparent 70%), radial-gradient(ellipse 30% 14% at 46% 100%, rgba(100,120,190,0.12), transparent 70%), radial-gradient(ellipse 35% 25% at 100% 100%, rgba(214,128,64,0.2), transparent 70%)",
};

const planetStyles = {
  largeBlue: {
    sphere: { background: "radial-gradient(circle at 30% 25%, #b8d8ff 0%, #4779bd 35%, #102a52 72%, #061326 100%)", boxShadow: "inset -18px -15px 30px rgba(0,0,0,0.45), 0 0 35px rgba(70,130,255,0.15)" },
    glow: "rgba(70,130,255,0.2)",
  },
  smallBlue: {
    sphere: { background: "radial-gradient(circle at 32% 28%, #c8dcf6 0%, #5f86bd 30%, #1d3a6a 64%, #071329 100%)", boxShadow: "inset -10px -8px 18px rgba(0,0,0,0.5), 0 0 20px rgba(80,130,220,0.15)" },
    glow: "rgba(80,130,230,0.18)",
  },
  golden: {
    sphere: { background: "radial-gradient(circle at 32% 28%, #fff0c8 0%, #e9bd6a 22%, #b07a35 50%, #5a3916 78%, #22150a 100%)", boxShadow: "inset -7px -6px 12px rgba(0,0,0,0.5), 0 0 18px rgba(242,180,90,0.2)" },
    glow: "rgba(242,180,90,0.2)",
  },
  violet: {
    sphere: { background: "radial-gradient(circle at 32% 28%, #ece2ff 0%, #9c86d6 34%, #3e2f74 72%, #120d2a 100%)", boxShadow: "inset -4px -3px 6px rgba(0,0,0,0.5)" },
    glow: "rgba(170,130,255,0.22)",
  },
  distant: {
    sphere: { background: "radial-gradient(circle at 35% 30%, #eef3ff 0%, #8fa4cc 35%, #2c3c63 75%, #0d1530 100%)", boxShadow: "inset -3px -2px 5px rgba(0,0,0,0.45)" },
    glow: "rgba(180,200,255,0.2)",
  },
};

const saturnSphere = {
  background: "radial-gradient(circle at 32% 26%, #f4e2b8 0%, #d6b07a 24%, #a07745 50%, #563a1b 78%, #1c1209 100%)",
  boxShadow: "inset -9px -7px 14px rgba(0,0,0,0.55), 0 0 18px rgba(232,190,120,0.16)",
};

/* ------------------------------------------------------------------
   Pieces
------------------------------------------------------------------ */

function drift(reduceMotion, keyframes, duration, delay = 0) {
  if (reduceMotion) return {};
  return { animate: keyframes, transition: { duration, delay, repeat: Infinity, ease: "easeInOut" } };
}

function Planet({ variant, className, reduceMotion, keyframes, duration, delay }) {
  const { sphere, glow } = planetStyles[variant];

  return (
    <motion.div {...drift(reduceMotion, keyframes, duration, delay)} className={`absolute z-[12] aspect-square ${className}`}>
      {/* Atmospheric glow that ties the planet into the surrounding nebula */}
      <span className="absolute -inset-[45%] rounded-full" style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 62%)` }} />
      <span className="absolute inset-0 rounded-full" style={sphere} />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,transparent_60%,rgba(190,215,255,0.14)_69%,transparent_75%)]" />
    </motion.div>
  );
}

function Saturn({ reduceMotion }) {
  return (
    <motion.div {...drift(reduceMotion, { y: [0, -8, 0], rotate: [-12, -16, -12] }, 20, 1)} style={{ rotate: -12 }} className="absolute left-[3%] top-[80%] z-[12] aspect-square w-[54px] sm:w-[72px] lg:left-[81%] lg:top-[4%] lg:w-[clamp(76px,6vw,118px)]">
      <span className="absolute -inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(232,190,120,0.14)_0%,transparent_60%)]" />
      {/* Back half of the ring system */}
      <span className="absolute left-0 top-1/2 h-[30%] w-full -translate-y-1/2 rounded-[50%] border-[1.5px] border-[#dcc08a]/40" />
      <span className="absolute left-[7%] top-1/2 h-[25%] w-[86%] -translate-y-1/2 rounded-[50%] border-[3px] border-[#c9a46a]/25" />
      <span className="absolute left-[15%] top-1/2 h-[19%] w-[70%] -translate-y-1/2 rounded-[50%] border border-[#dcc08a]/25" />
      {/* Planet with faint atmospheric banding */}
      <span className="absolute left-[29%] top-[29%] aspect-square w-[42%] overflow-hidden rounded-full" style={saturnSphere}>
        <span className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,236,200,0.07)_0_2px,transparent_2px_6px)]" />
      </span>
      {/* Front half of the ring system, clipped so it crosses in front of the planet */}
      <span className="absolute left-0 top-1/2 h-[30%] w-full -translate-y-1/2 rounded-[50%] border-[1.5px] border-[#ecd3a0]/65 [clip-path:inset(50%_0_0_0)]" />
      <span className="absolute left-[7%] top-1/2 h-[25%] w-[86%] -translate-y-1/2 rounded-[50%] border-[3px] border-[#d9b47a]/40 [clip-path:inset(50%_0_0_0)]" />
      <span className="absolute left-[15%] top-1/2 h-[19%] w-[70%] -translate-y-1/2 rounded-[50%] border border-[#ecd3a0]/35 [clip-path:inset(50%_0_0_0)]" />
    </motion.div>
  );
}

function BrightStar({ star, reduceMotion }) {
  const tone = BRIGHT_TONES[star.tone];

  return (
    <motion.span {...drift(reduceMotion, { opacity: [0.4, 1, 0.4], scale: [0.8, 1.15, 0.8] }, star.duration, star.delay)} className={`absolute -translate-x-1/2 -translate-y-1/2 ${TIER_CLASSES[star.tier]}`} style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: 0.8 }}>
      <span className="absolute inset-[15%] rounded-full" style={{ background: `radial-gradient(circle, rgba(${tone.glow},0.28) 0%, transparent 65%)` }} />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" style={{ background: `linear-gradient(to right, transparent, ${tone.core}, transparent)` }} />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: `linear-gradient(to bottom, transparent, ${tone.core}, transparent)` }} />
      <span className="absolute left-1/2 top-1/2 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: tone.core, boxShadow: `0 0 8px rgba(${tone.glow},0.9), 0 0 20px rgba(${tone.glow},0.45), 0 0 40px rgba(${tone.glow},0.2)` }} />
    </motion.span>
  );
}

function StaticStar({ star }) {
  return <span className={`absolute rounded-full ${star.blur ? "blur-[0.6px]" : ""} ${TIER_CLASSES[star.tier]}`} style={{ left: `${star.left}%`, top: `${star.top}%`, width: star.size, height: star.size, opacity: star.opacity, background: star.color, boxShadow: star.glow ? `0 0 8px ${star.glow}` : undefined }} />;
}

/* ------------------------------------------------------------------
   Layers 2 + 3 – medium twinkling stars and bright celestial stars.
   This is the hero's actual star field (rendered above the dust, below the zodiac wheel).
------------------------------------------------------------------ */

export function Particles({ reduceMotion }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {midStars.map((star) => (
        <motion.span key={star.id} {...drift(reduceMotion, { opacity: [star.opacity * 0.35, star.opacity, star.opacity * 0.35], scale: [0.8, 1.15, 0.8] }, star.duration, star.delay)} className={`absolute rounded-full ${TIER_CLASSES[star.tier]}`} style={{ left: `${star.left}%`, top: `${star.top}%`, width: star.size, height: star.size, opacity: star.opacity, background: star.color, boxShadow: star.size > 2.5 ? `0 0 ${round(star.size * 2)}px ${star.color}80` : undefined }} />
      ))}

      {/* Bright stars are dimmed slightly on small screens */}
      <div className="absolute inset-0 opacity-75 lg:opacity-100">
        {brightStars.map((star) => (
          <BrightStar key={`${star.left}-${star.top}`} star={star} reduceMotion={reduceMotion} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Layer 1 + atmosphere – base, dust, nebulae, Milky Way, distant stars, planets.
------------------------------------------------------------------ */

export default function CosmicBackground({ reduceMotion }) {
  const evenFar = farStars.filter((_, index) => index % 2 === 0);
  const oddFar = farStars.filter((_, index) => index % 2 === 1);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Deep-space base: darker edges, blue lift behind the zodiac wheel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_44%,#142c60_0%,#0d1f46_30%,#091833_56%,#061225_100%)]" />

      {/* Nebulae – softened on tablet/mobile */}
      <div className="absolute inset-0 opacity-80 lg:opacity-100">
        <motion.div {...drift(reduceMotion, { scale: [1, 1.06, 1], x: [0, -18, 0] }, 30)} className="absolute inset-[-10%] blur-[60px]" style={cosmicDust} />
        <motion.div {...drift(reduceMotion, { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }, 24)} className="absolute left-[30%] top-[6%] h-[80%] w-[72%] rounded-full bg-[radial-gradient(closest-side,rgba(56,104,200,0.4),rgba(40,80,170,0.14)_55%,transparent)] blur-[70px]" />
        <motion.div {...drift(reduceMotion, { x: [0, 24, 0], opacity: [0.7, 1, 0.7] }, 28, 2)} className="absolute left-[56%] top-[-14%] h-[60%] w-[54%] rounded-full bg-[radial-gradient(closest-side,rgba(124,72,180,0.4),transparent)] blur-[100px]" />
        <motion.div {...drift(reduceMotion, { opacity: [0.75, 1, 0.75] }, 20)} className="absolute left-1/2 top-[47%] h-[60%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(242,180,90,0.15),transparent)] blur-[50px]" />
      </div>

      {/* Milky Way: a diagonal band of irregular blue/violet/pink dust with dark lanes and dense stars */}
      <motion.div {...drift(reduceMotion, { scale: [1, 1.03, 1], x: [0, 12, 0] }, 34)} style={{ rotate: -18 }} className="absolute left-[-18%] top-[-2%] h-[48%] w-[140%] opacity-90 lg:opacity-100">
        <div className="absolute inset-[-25%] blur-[70px]" style={milkyWayBack} />
        <div className="absolute inset-0 opacity-90 blur-[35px]" style={milkyWayMain} />
        <div className="absolute inset-0 blur-[18px]" style={milkyWayLanes} />
        <div className="absolute inset-0">
          {bandStars.map((star) => (
            <StaticStar key={star.id} star={star} />
          ))}
        </div>
      </motion.div>

      {/* Softer secondary dust stream lower in the frame */}
      <motion.div {...drift(reduceMotion, { x: [0, -14, 0] }, 30, 4)} style={{ rotate: -24 }} className="absolute left-[30%] top-[58%] h-[30%] w-[90%] opacity-100 blur-[45px] bg-[radial-gradient(ellipse_30%_40%_at_30%_50%,rgba(140,100,220,0.3),transparent_70%),radial-gradient(ellipse_26%_36%_at_62%_46%,rgba(80,130,240,0.3),transparent_70%),radial-gradient(ellipse_16%_26%_at_84%_56%,rgba(220,140,200,0.18),transparent_70%)]" />

      {/* Micro star dust and painted stars */}
      <div className="absolute inset-0 opacity-45" style={microDust} />
      <div className="absolute inset-0 opacity-80" style={paintedStars} />

      {/* Layer 1: distant stars in two groups that breathe out of phase */}
      <motion.div {...drift(reduceMotion, { opacity: [1, 0.6, 1] }, 7)} className="absolute inset-0">
        {evenFar.map((star) => (
          <StaticStar key={star.id} star={star} />
        ))}
      </motion.div>
      <motion.div {...drift(reduceMotion, { opacity: [0.6, 1, 0.6] }, 9, 1.5)} className="absolute inset-0">
        {oddFar.map((star) => (
          <StaticStar key={star.id} star={star} />
        ))}
        {tintedStars.map((star) => (
          <StaticStar key={star.id} star={star} />
        ))}
      </motion.div>

      {/* Low cosmic clouds and warm horizon light */}
      <motion.div {...drift(reduceMotion, { x: [0, -16, 0] }, 32)} className="absolute inset-0 blur-[30px]" style={cosmicClouds} />

      {/* Layer 3: planets */}
      <Planet variant="distant" className="left-[33%] top-[5%] hidden w-[14px] lg:block" reduceMotion={reduceMotion} keyframes={{ y: [0, -6, 0] }} duration={25} delay={3} />
      <Planet variant="violet" className="left-[72%] top-[90%] hidden w-[18px] sm:block lg:w-[22px]" reduceMotion={reduceMotion} keyframes={{ x: [0, 6, 0], y: [0, -6, 0] }} duration={22} delay={2} />
      <Planet variant="largeBlue" className="left-[80%] top-[9%] w-[50px] sm:w-[68px] lg:left-[86%] lg:top-[35%] lg:w-[clamp(90px,7.5vw,140px)]" reduceMotion={reduceMotion} keyframes={{ y: [0, -10, 0] }} duration={18} />
      <Planet variant="smallBlue" className="left-[16%] top-[64%] hidden w-[clamp(44px,4.2vw,76px)] xl:block" reduceMotion={reduceMotion} keyframes={{ x: [0, 8, 0], y: [0, -12, 0] }} duration={20} delay={1.5} />
      <Planet variant="golden" className="left-[84%] top-[84%] w-[26px] sm:w-[34px] lg:left-[88%] lg:top-[77%] lg:w-[clamp(30px,2.8vw,48px)]" reduceMotion={reduceMotion} keyframes={{ x: [0, -6, 0], y: [0, -8, 0] }} duration={14} delay={0.8} />
      <Saturn reduceMotion={reduceMotion} />

      {/* Shooting stars – brief, occasional streaks. Always rendered (invisible) so server and client markup match; only animated when motion is allowed. */}
      {shootingStars.map((star) => (
        <motion.span key={`${star.left}-${star.top}`} initial={{ opacity: 0, x: 0, y: 0 }} animate={reduceMotion ? undefined : { opacity: [0, 1, 0], x: [0, 140], y: [0, 75] }} transition={{ duration: 1.3, delay: star.delay, repeat: Infinity, repeatDelay: star.repeatDelay, ease: "easeOut", opacity: { duration: 1.3, times: [0, 0.3, 1], delay: star.delay, repeat: Infinity, repeatDelay: star.repeatDelay } }} className={`absolute z-[12] ${star.className}`} style={{ left: star.left, top: star.top }}>
          <span className="block h-px w-[110px] origin-right rotate-[28deg] bg-[linear-gradient(to_right,transparent,rgba(255,241,201,0.55),#fff1c9)]" />
        </motion.span>
      ))}

      {/* Readability + blending fades (above stars and planets, below the zodiac wheel) */}
      <div className="absolute inset-y-0 left-0 z-[15] hidden w-[46%] bg-[linear-gradient(to_right,#061225_0%,rgba(6,18,37,0.86)_24%,rgba(6,18,37,0.32)_62%,transparent_100%)] lg:block" />
      <div className="absolute inset-x-0 top-0 z-[15] h-16 bg-gradient-to-b from-[#061225] to-transparent lg:h-14 lg:from-[#061225]/50" />
      <div className="absolute inset-x-0 bottom-0 z-[15] h-24 bg-gradient-to-t from-[#061225] to-transparent lg:h-28 lg:from-[#061225]/80" />
    </div>
  );
}
