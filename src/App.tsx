import { type Component, For } from 'solid-js'

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'GraphQL',
  'CSS-in-JSS',
  'Tailwind',
  'Zod',
  'API design',
  'TanstackStart',
  'ts-pattern',
  'SolidJS',
  'Svelte',
  'Functional Programming',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Pothos',
  'Drizzle ORM',
  'Bun',
  'Database schema design',
]

const App: Component = () => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-neutral-100 p-4 gap-2">
      <div class="max-w-xl w-full rounded-2xl shadow-xl p-8 bg-neutral-900/70 backdrop-blur-md border border-neutral-800">
        <h1 class="text-3xl font-bold mb-2">Hi, I'm Quinn Vaughn 👋🏻</h1>
        <p class="text-lg mb-6 text-neutral-300">
          I build frontend software and I'm open to senior/staff level roles, as
          well as freelance work. Most recently, I worked at{' '}
          <Link
            href="https://smacktechnologies.com"
            text="Smack Technologies"
          />
          , where I was the first hire and built out the frontend and part of
          the backend GraphQL/data layer as a Senior Software Engineer.
        </p>
        <div class="flex gap-4 flex-wrap mb-6 justify-center">
          <Link
            href="https://drive.google.com/file/d/1xLieV87_KQAlPdNvB1HdusN-0iGBf3qk/view?usp=sharing"
            text="Resume"
          />
          <Link href="https://github.com/quinnvaughn" text="GitHub" />
          <Link
            href="https://www.linkedin.com/in/quinn-vaughn-19bb2564/"
            text="LinkedIn"
          />
          <Link href="mailto:qvaughn3@gmail.com" text="Email" />
        </div>
        <div class="mb-6 flex flex-col gap-3">
          <h2 class="text-xl font-semibold mb-2">Skills</h2>
          <div class="flex flex-wrap gap-2">
            <For each={skills}>{(skill) => <Tag text={skill} />}</For>
          </div>
        </div>
        <div class="mb-6 flex flex-col gap-3">
          <h2 class="text-xl font-semibold mb-2">Featured Projects</h2>
          <div class="flex gap-4">
            <Project
              href="https://urbanfabric.app"
              title="Urban Fabric"
              description="Urban Fabric gives anyone the tools to reimagine their city on a real map and publish proposals that communities, advocates, and planners can actually see."
            />
            <Project
              href="https://la-kickball.fly.dev/"
              title="Los Angeles Kickball"
              description="Currently in progress work for my own kickball league I'm working on. Will have a dedicated domain that I already purchased. Fake seed data at the moment."
            />
          </div>
        </div>
      </div>
      <p class="text-sm text-neutral-500 text-center">
        Based in Santa Monica ☀️. Open to remote and (some) hybrid roles.
      </p>
    </div>
  )
}

function Link(props: { href: string; text: string }) {
  return (
    <a
      href={props.href}
      target={'_blank'}
      rel={'noopener noreferrer'}
      class="underline underline-offset-4 hover:text-cyan-400"
    >
      {props.text}
    </a>
  )
}

function Tag(props: { text: string }) {
  return (
    <span class="bg-neutral-800 px-3 py-1 rounded-full text-sm hover:bg-neutral-700 transition-colors">
      {props.text}
    </span>
  )
}

function Project(props: { href: string; title: string; description: string }) {
  return (
    <div class="flex flex-wrap gap-2">
      <Link href={props.href} text={props.title} />
      <p class="text-neutral-300">{props.description}</p>
    </div>
  )
}
export default App
