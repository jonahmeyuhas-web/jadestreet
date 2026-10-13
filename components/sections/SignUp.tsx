import { site } from "@/lib/data/site";
import { SectionHead } from "@/components/chrome/Section";

export default function SignUp() {
  return (
    <section id="signup" className="scroll-mt-20 px-5 pt-24 md:px-8 md:pt-36">
      <SectionHead title="Sign up" />
      <div className="reveal max-w-xl">
        <p className="display text-base text-white/60 md:text-lg">Tour presales and new music, first.</p>
        {site.signupAction ? (
          <form action={site.signupAction} method="post" className="mt-5 flex gap-2">
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="display w-full bg-transparent px-4 py-3 text-base text-white ring-1 ring-inset ring-white/40 placeholder:text-white/40 focus:outline-none focus:ring-blue"
            />
            <button type="submit" className="btn shrink-0">Join</button>
          </form>
        ) : (
          <a href={site.mailingList} target="_blank" rel="noreferrer" className="btn mt-5">Join the list</a>
        )}
      </div>
    </section>
  );
}
