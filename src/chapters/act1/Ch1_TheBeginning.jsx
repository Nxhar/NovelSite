import React from 'react';
import { motion } from 'framer-motion';

const Ch1 = () => {
  return (
    <div className="w-full min-h-screen pb-32">
      <motion.article 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          mx-auto px-6 md:px-0 
          max-w-prose 
          prose prose-lg md:prose-xl 
          /* THIS PART FIXES THE DARK TEXT */
          dark:prose-invert 
          text-stone-800 dark:text-stone-200
          prose-p:text-stone-800 dark:prose-p:text-stone-300
          prose-headings:text-ink dark:prose-headings:text-stone-100
          /* ---------------------------- */
          prose-headings:font-serif prose-headings:font-light
          prose-p:font-serif prose-p:leading-loose 
          marker:text-stone-400
        "
      >
        {/* --- TITLE SECTION --- */}
        <header className="not-prose text-center mb-20 mt-10 md:mt-20">
          <span className="block text-xs font-sans tracking-[0.25em] text-stone-400 uppercase mb-4">
            Act I - Chapter I
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ink dark:text-stone-100 italic leading-tight">
            The Epilogue that <br className="hidden md:block"/> Wouldn't Stay Quiet
          </h1>
          <div className="w-16 h-[1px] bg-stone-300 dark:bg-stone-700 mx-auto mt-8"></div>
        </header>


        {/* --- STORY START --- */}
        
        {/* Drop Cap Effect */}
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:text-stone-800 dark:first-letter:text-stone-200">
          Mike Wheeler sat alone in his room, the steady clack of a typewriter filling the quiet.
          The page was already half full when Mike paused.
          He leaned back in his chair, fingers hovering above the keys, eyes unfocused—not on the paper, but on the space just beyond it.
        </p>

        <p>“I hope you're happy,” he said quietly.</p>

        <p>
          The words sounded strange out loud, like they belonged to someone else. He cleared his throat and typed them instead.
        </p>

        {/* --- TYPEWRITER INSERT 1 --- */}
        <div className="not-prose my-10 pl-6 border-l-4 border-stone-300 dark:border-stone-700 bg-stone-100/50 dark:bg-stone-900/40 py-4 pr-4 rounded-r-lg">
          <p className="font-mono text-sm md:text-base text-stone-700 dark:text-stone-400 leading-relaxed">
            I hope you're happy, wherever you are.
          </p>
        </div>

        <p>
          He stared at the sentence. Considered adding more. Considered deleting it.
          He didn't.
        </p>

        <p>
          He had written about her carefully. Not too much. Not too little. Enough to feel real without reopening something that had finally scarred over. He never wrote what happened after—only that she chose to leave, that she deserved peace more than anyone else.
        </p>

        {/* --- TYPEWRITER INSERT 2 --- */}
        <div className="not-prose my-10 pl-6 border-l-4 border-stone-300 dark:border-stone-700 bg-stone-100/50 dark:bg-stone-900/40 py-4 pr-4 rounded-r-lg">
          <p className="font-mono text-sm md:text-base text-stone-700 dark:text-stone-400 leading-relaxed">
            Some people don't get endings, <span className="font-sans text-xs text-stone-400 uppercase tracking-wider not-italic">he'd written earlier.</span>
            <br className="mb-2"/>
            They get distance instead.
          </p>
        </div>

        <p>
          Mike swallowed and flexed his hands, grounding himself in the familiar weight of the keys. He told himself this was healthy. That this was how you honored something without clinging to it.
        </p>

        <p>“If you're reading this,” he murmured, then stopped.</p>

        <p>
          He shook his head, almost smiling. “That's stupid.”
          He deleted the half-formed line, rolled his shoulders once, and straightened in his chair.
        </p>

        <p>
          Endings didn't need witnesses.
          They just needed to exist.
        </p>

        <p>
          Mike Wheeler liked endings.
          Not because they were happy—most weren't—but because they were clean. A good ending closed doors. It told you where to stop looking.
        </p>

        <p>
          The typewriter clacked steadily, its rhythm uneven in that distinctly human way. No hum. No glow. Just metal striking ribbon, ribbon staining paper, paper accepting the truth without argument.
          Mike leaned forward, elbows on the desk, hair falling into his eyes as he typed. His fingers moved from muscle memory now, not thought. He'd passed the point of hesitation an hour ago. Maybe more. Time had gone soft around the edges.
        </p>

        {/* --- CENTERED EMPHASIS --- */}
        <p className="text-center font-mono text-stone-500 my-10 tracking-widest text-sm md:text-base">
          — and Hawkins learned how to live again.
        </p>

        <p>
          He stopped.
          The cursor didn't blink. It just waited.
        </p>

        <p>
          Mike reread the sentence. Then the paragraph above it. Then the page before that. Everything tracked. Everything made sense. Characters moved from fear to relief, from chaos to quiet. Threads tied. Sacrifices honored. The kind of ending English teachers loved and real life almost never allowed.
        </p>

        <p>He should have felt proud.</p>

        <p>
          Instead, there was a strange hollowness behind his sternum, like he'd exhaled too deeply and forgotten to breathe back in.
        </p>

        <p>“Yeah,” he muttered to himself. “That's… fine.”</p>

        <p>
          Fine was good. Fine meant done.
          He told himself that if he stared long enough, the feeling would pass. That this was just the usual post-writing emptiness. The aftertaste of putting something down for good. But the sentence didn't blur. It didn't soften. It just sat there. Patient.
        </p>

        <p>
          Mike rolled the paper out carefully, aligning the edges like it mattered. Folded it once. Then again. He opened the drawer beneath the desk—the one that still smelled faintly of dust, ink, and old character sheets—and slid the pages inside.
        </p>
        
        <p>
          The drawer stuck for a second before closing. Mike pressed it shut harder than necessary.
          Upstairs, the sound of voices spilled downward—laughter first, then footsteps.
        </p>

        {/* --- SCENE BREAK --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>“MIKE!” Mrs. Wheeler called. “Your friends are here!”</p>

        <p>Mike flinched like he'd been caught doing something illegal. “I'm coming!”</p>

        <p>
          He shoved the chair back, stood, and gave the typewriter one last glance. It looked innocent enough. Just an object. A relic. Nothing that could hold weight or memory or—
        </p>

        <p>“Dude,” Dustin's voice echoed from the stairs. “Why does your basement smell like a library that lost a fight?”</p>

        <p>Mike laughed despite himself. “You're just mad because books don't have pictures.”</p>

        <p>
          Dustin appeared first, grinning, cap backwards as always. “Wrong. Books have imagination. Pictures are for people who lack vision.”
          Lucas followed, rolling his eyes. “You practiced that, didn't you?”
        </p>

        <p>“Every mirror I passed,” Dustin said proudly.</p>

        <p>
          Max descended next, hands in her jacket pockets, expression unreadable but relaxed, like she'd learned how to sit with quiet instead of fighting it. Will came last, as usual, pausing halfway down the stairs like he was orienting himself before stepping fully into the room.
        </p>

        <p>
          Mike felt something loosen in his chest when he saw them all together.
          This. This was right.
        </p>

        <p>“Okay,” Dustin said, clapping his hands once. “Why were we summoned? Please tell me this isn't another ‘Mike reads us his tragic fantasy prose' night.”</p>

        <p>“It's historical fantasy,” Mike said. “And you begged me last time.”</p>

        <p>“I begged you because I was bored and you had snacks.”</p>

        <p>“Speaking of snacks,” Lucas said, pointing toward the shelf. “You're out of those weird pretzel things.”</p>

        <p>“They're called Combos,” Mike said. “And you ate all of them.”</p>

        <p>Max dropped onto the couch. “Worth it.”</p>

        <p>
          They fell into easy conversation after that. Dustin rambling about a podcast he'd discovered—something involving conspiracies, time slips, and a guy who claimed to remember events that hadn't happened yet. Lucas half-listened, half-arguing. Max chimed in just enough to keep them honest.
        </p>

        <p>
          Will sat cross-legged on the floor, sketchbook abandoned at his side. He wasn't drawing. Just listening. Watching. His eyes kept drifting—not to the walls or the ceiling—but to Mike's desk.
        </p>

        <p>Mike noticed. He pretended not to.</p>

        <p>
          Normal settled over them like a blanket. The good kind. The heavy, familiar weight of shared silence between jokes. Mike kept catching himself watching them like he was afraid they might vanish if he blinked too long.
        </p>

        <p>“So,” Dustin said eventually, spinning in the chair Mike had abandoned. “What are you writing now? Please tell me you killed off your self-insert.”</p>

        <p>“I don't have a self-insert.”</p>

        <p>“Mike,” Max said flatly. “You are literally incapable of not putting yourself in your stories.”</p>

        <p>“That's called perspective.”</p>

        <p>“Uh-huh.”</p>

        <p>Mike shrugged. “I finished something. That's all.”</p>

        <p>Will looked up. “Finished?”</p>

        <p>“Yeah.”</p>

        <p>“Like… done done?”</p>

        <p>Mike hesitated. Just a fraction too long. “I think so.”</p>

        <p>Dustin leaned forward, elbows on his knees. “What's it about?”</p>

        <p>
          Mike opened his mouth—and stopped. How do you summarize your own life without making it sound ridiculous?
        </p>

        <p>“It's just… a story,” he said finally. “About things ending.”</p>

        <p>Lucas nodded slowly. “That tracks.”</p>

        <p>Dustin squinted. “Is it depressing?”</p>

        <p>“Define depressing.”</p>

        <p>“Does everyone die?”</p>

        <p>“No.”</p>

        <p>“Does anyone die?”</p>

        <p>Mike didn't answer immediately.</p>

        <p>Dustin sat back. “Oof. That kind of story.”</p>

        <p>Max glanced at Will. “You okay?”</p>

        <p>Will nodded. “Yeah. Just… tired.”</p>

        <p>Mike believed him. Mostly.</p>

        <p>
          They talked for another hour. About nothing. About everything. About the weird state Hawkins was in—half normal, half permanently scarred. About how some streets still felt wrong to walk down at night. About college plans that still felt unreal, like something meant for other versions of themselves.
        </p>

        <p>
          “Feels like we skipped a level,” Dustin said at one point. “Like in a game when you glitch past the boss fight and suddenly you're just… done.”
        </p>

        <p>“Or,” Lucas added, “like the boss fight didn't notice you.”</p>

        <p>Dustin snapped his fingers. “Yes! Exactly. That's worse.”</p>

        <p>They laughed it off. They always did.</p>

        <p>
          Eventually, the sky outside darkened. Parents called. Rides were coordinated. Dustin complained loudly about responsibility being a scam invented by adults. One by one, they left.
        </p>

        <p>
          Mike stood at the basement door, waving until the last set of footsteps faded. Will hesitated at the bottom of the stairs, glanced back once—at Mike, at the desk—then followed the others.
        </p>

        <p>
          The door closed. The house was quiet again.
          Too quiet.
        </p>

        <p>
          Mike didn't go back downstairs immediately. He stood in the hallway, listening to the house settle, to pipes clicking, to nothing at all. When he finally descended, the basement felt unchanged—but thinner, like the air had been stretched.
        </p>

        <p>
          He sat at the desk. He didn't touch the typewriter.
          He straightened a stack of books. Picked up a stray die and rolled it across the desk. It landed on a one. He frowned and rolled it again. A three.
        </p>

        <p>“Great,” he muttered.</p>

        <p>
          He wasn't thinking about the story. He was thinking about how easy it had been to finish. No resistance. No struggle. Just an ending that slid into place like it had been waiting.
        </p>

        <p>“That's normal,” he told himself. “You planned it.”</p>

        <p>
          Still, his fingers moved. He pulled the drawer open.
          The folded pages lay exactly where he'd left them. Mike unfolded them slowly, as if speed might trigger something. The final paragraph stared back at him.
        </p>

        <div className="not-prose my-10 pl-6 border-l-4 border-stone-300 dark:border-stone-700 bg-stone-100/50 dark:bg-stone-900/40 py-4 pr-4 rounded-r-lg">
          <p className="font-mono text-sm md:text-base text-stone-700 dark:text-stone-400 tracking-widest">
            —and Hawkins learned how to live again.
          </p>
        </div>

        <p>Mike frowned. He didn't remember choosing that wording.</p>

        <p>Upstairs, something creaked. Mike froze. Then he exhaled, shaking his head. Old house. Settling.</p>

        <p>He reached for the typewriter. Paused.</p>

        <p>
          And for just a second—not fear, not panic, just a distant, unsettling thought crossed his mind:
        </p>

        {/* --- THE ENDING TWIST (Visual Break) --- */}
        <div className="not-prose my-16 space-y-6 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-snug">
            What if the story didn't end because it was over…
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-snug">
            …but because it didn't want him looking any further?
          </p>
        </div>

        <p>Mike swallowed.</p>

        <div className="not-prose mt-20 mb-32 p-6 md:p-10 border border-stone-200 dark:border-stone-800 bg-white dark:bg-black rounded-sm shadow-sm">
           <p className="text-center font-sans font-light tracking-wide text-lg text-stone-600 dark:text-stone-400">
            Somewhere across town, Will Byers lay awake, staring at the ceiling, certain—without knowing why—that something had followed them home.
          </p>
        </div>
        
        {/* Footer */}
        <div className="text-center text-xs font-sans tracking-widest text-stone-400 uppercase opacity-60">
          — End of Chapter I —
        </div>
        
      </motion.article>
    </div>
  );
};

export default Ch1;