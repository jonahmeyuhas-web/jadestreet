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

const BIT = "https://bnds.us/cb5yeo";

// North America 2026. Mirrors the tour poster; venues from Bandsintown.
// Past dates are hidden automatically at build time.
export const shows: Show[] = [
  { date: "2026-08-01", city: "Los Angeles, CA", venue: "Peppermint Club", with: "headline" },
  { date: "2026-08-06", city: "New York, NY", with: "headline" },
  { date: "2026-09-17", city: "Ventura, CA", venue: "Ventura Music Hall", with: "foxtide", tickets: BIT },
  { date: "2026-09-18", city: "San Luis Obispo, CA", with: "foxtide", tickets: BIT },
  { date: "2026-09-19", city: "Las Vegas, NV", with: "foxtide", tickets: BIT },
  { date: "2026-10-06", city: "Berkeley, CA", venue: "Cornerstone", with: "evening-elephants", tickets: BIT },
  { date: "2026-10-08", city: "San Diego, CA", venue: "Casbah", with: "evening-elephants", tickets: BIT },
  { date: "2026-10-10", city: "Los Angeles, CA", with: "evening-elephants", tickets: BIT },
  { date: "2026-11-05", city: "Austin, TX", venue: "29th Street Ballroom", with: "the-kilans", tickets: BIT },
  { date: "2026-11-06", city: "Dallas, TX", venue: "Trees", with: "the-kilans", tickets: BIT },
  { date: "2026-11-07", city: "Houston, TX", venue: "White Oak Music Hall", with: "the-kilans", tickets: BIT },
  { date: "2026-11-09", city: "Atlanta, GA", venue: "Aisle 5", with: "the-kilans", tickets: BIT },
  { date: "2026-11-10", city: "Asheville, NC", venue: "Revival Asheville", with: "the-kilans", tickets: BIT },
  { date: "2026-11-12", city: "Washington, DC", venue: "DC9", with: "the-kilans", tickets: BIT },
  { date: "2026-11-13", city: "New York, NY", venue: "Mercury Lounge", with: "the-kilans", tickets: BIT },
  { date: "2026-11-14", city: "Philadelphia, PA", with: "the-kilans", tickets: BIT },
  { date: "2026-11-15", city: "Cambridge, MA", with: "the-kilans", tickets: BIT },
  { date: "2026-11-17", city: "Montreal, QC", with: "the-kilans", tickets: BIT },
  { date: "2026-11-18", city: "Toronto, ON", with: "the-kilans", tickets: BIT },
  { date: "2026-11-20", city: "Chicago, IL", venue: "Subterranean", with: "the-kilans", tickets: BIT },
  { date: "2026-11-21", city: "Iowa City, IA", with: "the-kilans", tickets: BIT },
  { date: "2026-11-22", city: "Minneapolis, MN", venue: "7th St Entry", with: "the-kilans", tickets: BIT },
  { date: "2026-11-29", city: "Seattle, WA", with: "the-kilans", tickets: BIT },
  { date: "2026-11-30", city: "Portland, OR", venue: "Polaris Hall", with: "the-kilans", tickets: BIT },
  { date: "2026-12-02", city: "San Francisco, CA", venue: "Brick & Mortar Music Hall", with: "the-kilans", tickets: BIT },
  { date: "2026-12-03", city: "Los Angeles, CA", with: "the-kilans", tickets: BIT },
  { date: "2026-12-05", city: "Phoenix, AZ", with: "the-kilans", tickets: BIT },
  { date: "2026-12-08", city: "Denver, CO", venue: "Marquis Theater", with: "the-kilans", tickets: BIT },
  { date: "2026-12-10", city: "Salt Lake City, UT", venue: "Metro Music Hall", with: "the-kilans", tickets: BIT },
];

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
