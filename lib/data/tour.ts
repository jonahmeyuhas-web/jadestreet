export type Show = {
  date: string;   // ISO, local
  city: string;
  venue?: string;
  with?: "headline" | "foxtide" | "evening-elephants" | "the-kilans";
  tickets?: string;
};

export const supportLabels: Record<NonNullable<Show["with"]>, string> = {
  headline: "Headline",
  foxtide: "w/ Foxtide",
  "evening-elephants": "w/ Evening Elephants",
  "the-kilans": "w/ The Kilans",
};

// No dates announced. Add shows here (oldest first) and they render with
// ticket buttons; past dates hide automatically at build time.
export const shows: Show[] = [];

export function upcoming(now = new Date()): Show[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return shows
    .filter((s) => new Date(s.date + "T23:59:59") >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function fmtDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  const mon = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = String(d.getDate()).padStart(2, "0");
  const dow = d.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
  return { mon, day, dow };
}
