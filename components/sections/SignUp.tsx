import { site } from "@/lib/data/site";

export default function SignUp() {
  return (
    <section id="signup" className="scroll-mt-16 border-t border-bone/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px] md:grid md:grid-cols-2 md:gap-14">
        <div className="reveal">
          <p className="eyebrow mb-3">Sign up</p>
          <h2 className="display text-[clamp(3rem,9vw,7.5rem)]">Hear it first</h2>
          <p className="mt-6 max-w-md text-paper-dim">Tour presales, new music, and the occasional photo. No spam.</p>
        </div>

        <div className="reveal mt-10 md:mt-0 md:self-end">
          {site.signupAction ? (
            <form action={site.signupAction} method="post" className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full border border-bone/30 bg-transparent px-4 py-3 font-mono text-sm text-bone placeholder:text-bone/40 focus:border-paper focus:outline-none"
              />
              <button type="submit" className="btn btn-paper shrink-0">Join</button>
            </form>
          ) : (
            <a href={site.linktree} target="_blank" rel="noreferrer" className="btn btn-paper">Join the mailing list</a>
          )}
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-paper-dim/70">
            Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}
