export const TIKTOK = "https://www.tiktok.com/@5dmusicgroup";
export const HANDLE = "@5dmusicgroup";

export type Photo = { src: string; alt: string; title: string; tag: string };

export const photos: Photo[] = [
  { src: "/media/trio.webp", alt: "Three artists posing in front of the slatted studio wall", title: "The Lineup", tag: "Studio portrait" },
  { src: "/media/control-room.webp", alt: "Producer at the desk while artists watch in the control room", title: "Control Room", tag: "Recording" },
  { src: "/media/producer-desk.webp", alt: "Producer in headphones working the mixer", title: "On the Faders", tag: "Production" },
  { src: "/media/lounge-wide.webp", alt: "Artists in the lounge under gold ceiling lights", title: "Lounge Takes", tag: "Listening session" },
  { src: "/media/duo.webp", alt: "Two artists standing together in the studio", title: "New Connections", tag: "Artist development" },
  { src: "/media/session-behind.webp", alt: "Artist with blonde hair watching the producer work", title: "Over the Shoulder", tag: "Recording" },
  { src: "/media/lounge-sofa.webp", alt: "Team relaxing on the studio sofa", title: "Between Takes", tag: "The family" },
  { src: "/media/producer-closeup.webp", alt: "Producer focused on the session", title: "In the Zone", tag: "Production" },
  { src: "/media/lounge-talk.webp", alt: "Team talking in the dark studio lounge", title: "The Talk", tag: "Branding" },
  { src: "/media/control-room-2.webp", alt: "Wide view of the control room with acoustic panels", title: "The Room", tag: "5D Studio" },
];

export type Clip = {
  id: string;
  src: string;
  poster: string;
  title: string;
  meta: string;
  quote?: string;
};

export const bestOf: Clip[] = [
  { id: "welcome", src: "/media/welcome.mp4", poster: "/media/welcome.webp", title: "The Welcome", meta: "Session night" },
  { id: "key", src: "/media/music-is-the-key.mp4", poster: "/media/music-is-the-key.webp", title: "Music Is the Key", meta: "Lounge talk" },
  { id: "performance", src: "/media/performance.mp4", poster: "/media/performance.webp", title: "Made for This", meta: "Live performance" },
  { id: "kitchen", src: "/media/kitchen-session.mp4", poster: "/media/kitchen-session.webp", title: "Kitchen Session", meta: "Open floor" },
  { id: "announcement", src: "/media/announcement.mp4", poster: "/media/announcement.webp", title: "On a 5D Way", meta: "Announcement" },
];

export const voices: Clip[] = [
  {
    id: "intro",
    src: "/media/pitch.mp4",
    poster: "/media/pitch.webp",
    title: "This Is 5D Music Group",
    meta: "Intro",
    quote: "We help you with your branding and we help move your career faster on a 5D level.",
  },
  {
    id: "oloro",
    src: "/media/interview-oloro.mp4",
    poster: "/media/interview-oloro.webp",
    title: "Explore, Grow, Put Grace in Action",
    meta: "Session night interview",
    quote: "It was more than what I expected. I can see great things manifesting already.",
  },
  {
    id: "alora",
    src: "/media/interview-alora.mp4",
    poster: "/media/interview-alora.webp",
    title: "All Combo in One",
    meta: "Session night interview",
    quote: "You help artists grow and scale in it, branding and all of that. That's like all combo in one.",
  },
];

export const steps = [
  { n: "01", name: "Listen", body: "We hear your sound first: who you are, what you've made, and where you want it to go." },
  { n: "02", name: "Brand", body: "Image, story and presence across every social, built so people remember you." },
  { n: "03", name: "Record", body: "Studio time with producers who push the song, even if it's your very first one." },
  { n: "04", name: "Develop", body: "Coaching, sessions and a family of artists who move together, with no competition." },
  { n: "05", name: "Release", body: "Your work goes out and your career moves faster, on a 5D level." },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#voices", label: "Voices" },
];
