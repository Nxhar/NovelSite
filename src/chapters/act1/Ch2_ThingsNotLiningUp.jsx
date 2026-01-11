import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Ch2_ThingsNotLiningUp = () => {
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
          /* --- DARK MODE FIXES --- */
          dark:prose-invert
          text-stone-800 dark:text-stone-200
          prose-headings:text-ink dark:prose-headings:text-stone-100
          prose-p:text-stone-800 dark:prose-p:text-stone-300
          prose-blockquote:text-stone-600 dark:prose-blockquote:text-stone-400
          prose-strong:text-stone-900 dark:prose-strong:text-stone-100
          /* ----------------------- */
          prose-headings:font-serif prose-headings:font-light
          prose-p:font-serif prose-p:leading-loose 
        "
      >
        {/* --- TITLE SECTION --- */}
        <header className="not-prose text-center mb-20 mt-10 md:mt-20">
          <span className="block text-xs font-sans tracking-[0.25em] text-stone-400 uppercase mb-4">
            Act I • Chapter II
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ink dark:text-stone-100 italic leading-tight">
            The Things That <br className="hidden md:block"/> Don’t Line Up
          </h1>
          <div className="w-16 h-[1px] bg-stone-300 dark:bg-stone-700 mx-auto mt-8"></div>
        </header>

        {/* --- RECAP CALL BACK --- */}
        <div className="not-prose mb-12 italic text-center text-stone-500 dark:text-stone-400 font-serif border-y border-stone-200 dark:border-stone-800 py-8 mx-12">
          <p className="mb-2">What if the story didn’t end because it was over…</p>
          <p>…but because it didn’t want him looking any further?</p>
        </div>

        <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:text-stone-800 dark:first-letter:text-stone-200">
          Mike swallowed.
          The sentence stared back at him from the page, neat and evenly spaced, as if it had always belonged there.
          He hadn’t meant to write that.
        </p>

        <p>
          He sat back in his chair, fingers resting on the typewriter keys, listening to the low hum of the house around him. The late afternoon sun slanted through his bedroom window, dust motes drifting lazily in its path. Everything looked normal. Quiet. Safe.
        </p>

        <p>And yet—</p>

        <p>
          Mike exhaled and reached up, rubbing his face.
          “You’re overthinking,” he muttered to himself.
        </p>

        <p>
          He always did that lately. Thought too much about beginnings. About endings. About the parts in between that felt… thinner than they should have.
        </p>

        <p>
          He rolled the paper forward a line and forced himself to type something else.
          Across town, Will Byers lay awake on his bed, staring at the ceiling, absolutely certain—without knowing why—that something was off.
        </p>

        {/* --- SCENE BREAK --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>
          Will had gotten used to feeling watched.
          That wasn’t the strange part.
          The strange part was that this didn’t feel like being watched at all.
        </p>

        <p>
          There was no weight to it. No pressure on the back of his neck. No instinct to turn around.
          It was more like… being misplaced.
        </p>

        <p>
          Like standing in a room where the furniture had been rearranged by an inch—not enough to see, but enough that your body noticed before your brain did. The door was where it always was. The window. The light. Everything correct, yet somehow wrong.
        </p>

        <p>
          He lay on his back, hands folded loosely over his stomach, listening to the soft creaks of the house settling around him. Pipes clicked faintly in the walls. Somewhere downstairs, a clock ticked—steady, patient, indifferent. The ceiling fan spun lazily above him, its shadow stretching and shrinking across the ceiling in a slow, hypnotic rhythm.
        </p>

        <p>Everything was fine. That was the problem.</p>

        <p>
          <em>Fine</em> felt fragile. Like a word people used when they didn’t want to look closer.
        </p>

        <p>
          Will closed his eyes.
          He tried not to think about the way certain memories slipped when he reached for them lately. Not erased. Not hidden. Just… resistant. Like pages in a book that had been read too many times, the paper softened and sticking together so you couldn’t tell where one moment ended and the next began.
        </p>

        <p>
          The days after everything ended. The weeks after.
        </p>

        <p>
          Whenever he tried to hold those moments in his mind—to remember who said what, who stayed late, who went home first—a pressure bloomed behind his eyes. Not pain, exactly. More like his thoughts were pressing up against something that refused to move.
        </p>

        <p>
          He frowned slightly, breath hitching before he realized it had.
          “Stop,” he whispered to the dark.
        </p>

        <p>
          The word felt instinctive. Protective.
          Almost immediately, the pressure eased. His thoughts loosened, slipping back into safer shapes. The fan continued its steady spin. The clock kept ticking.
        </p>

        <div className="not-prose my-12 pl-6 border-l-4 border-amber-500/50 dark:border-amber-500/30">
          <p className="font-serif italic text-xl md:text-2xl text-stone-700 dark:text-stone-300">
            Unsettled—not because something had happened…
            <br className="my-2" />
            …but because something had listened.
          </p>
        </div>

        <p>He didn’t know what was wrong. Only that something was.</p>

        {/* --- SCENE BREAK: THE CALL --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>
          The call came the next afternoon.
          Will almost didn’t pick up.
        </p>

        <p>
          The phone rang twice before he reached for it, fingers hesitating like the plastic receiver might bite. He didn’t know why he hesitated—only that lately, even small decisions felt heavier than they used to.
        </p>

        <p>“Hello?”</p>

        <p>
          “Dude,” Dustin’s voice burst through the line, bright and unmistakably Dustin. “Tell me you’re alive and not doing something tragically boring.”
        </p>

        <p>Will huffed despite himself. “I’m alive.”</p>

        <p>“Excellent. Then you’re coming to Starcourt.”</p>

        <p>Will pushed himself upright, sunlight spilling across the floor as he sat up. “Starcourt?”</p>

        <p>
          “Yeah! Reconstructed Starcourt. Rebranded Starcourt. Capitalism-Always-Wins Starcourt. They’ve got new stores, new movies, and”—Dustin lowered his voice conspiratorially—“limited-edition Scoops Ahoy flavors.”
        </p>

        <p>Will closed his eyes briefly. “Is that supposed to convince me?”</p>

        <p>“Yes.”</p>

        <p>
          A pause followed. Not accidental this time.
          Then, softer—less performative, more deliberate—“Mike’s coming too.”
        </p>

        <p>
          Will opened his eyes.
          Mike Wheeler wasn’t a question in Will’s life anymore. He hadn’t been for a long time.
          Mike was the person who had stayed when things were hardest. Not someone he longed for, not someone he wondered about. Just someone he trusted. Someone solid.
        </p>

        <p>A constant.</p>

        <p>“…What time?” Will asked.</p>

        {/* --- SCENE BREAK: THE MALL --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>
          Starcourt Mall no longer looked like a battlefield.
          The wide glass entrances gleamed under the afternoon sun, reflecting light so clean it almost hurt to look at. The floors shone like mirrors, polished within an inch of their lives.
        </p>

        <p>
          Everything smelled new. Pretzels. Popcorn. Paint that hadn’t fully lost its sharpness yet.
        </p>

        <p>
          “It’s kinda wild,” Lucas said, turning in a slow circle. “I mean… they rebuilt fast.”
        </p>

        <p>“Insurance money,” Dustin replied immediately. “Also denial. Denial’s a powerful motivator.”</p>

        <p>Max nudged Lucas with her elbow. “You sound bitter.”</p>

        <p>“I am bitter. This place tried to kill us.”</p>

        <p>“Technically,” Dustin corrected, “it tried to kill everyone. Equal opportunity trauma.”</p>

        <p>
          They laughed, the sound echoing lightly through the open space.
          Will followed their gaze toward the center atrium. A banner advertised a double-feature playing tonight, complete with a cardboard cutout of Harrison Ford in a fedora.
        </p>

        <p>
          Mike walked easily beside Will, close without crowding him, the way he always did—like he knew exactly how much space to leave.
          Will appreciated that more than he could say.
        </p>

        <p>
          Then Will’s eyes caught on something familiar.
          “Oh no,” Lucas said flatly, following his line of sight. “Absolutely not.”
        </p>

        <p>Scoops Ahoy stood proudly at the far end of the corridor.</p>

        <p>
          Erica Sinclair stepped out of the store with the confidence of someone who had never once doubted her right to be anywhere.
          “Relax,” she said without slowing. “I’m performing a public service.”
        </p>

        <p>Lucas folded his arms. “You’re stealing ice cream.”</p>

        <p>
          Erica stopped, turned slowly, and smiled. “I’m conducting quality assurance. This one’s called Galactic Crunch. It tastes like regret and artificial berries.”
        </p>

        <p>Dustin lit up. “See? Valuable data.”</p>

        <div className="not-prose w-full h-px bg-stone-200 dark:bg-stone-800 my-20"></div>

        <p>
          They caught a movie afterward—something loud and adventurous.
          Onscreen, Indy took his leap of faith. After what seemed like an hour of preparing himself for a life or death jump, he landed on the invisible bridge.
        </p>

        <p>
          Mike and Will sat in the back row.
          Will tried to focus on the movie—the comfort of a story where everything bad was loud and obvious and eventually beaten. It didn’t work.
        </p>

        <p>
          About halfway through, a sharp pain flared behind his eyes. He winced, fingers pressing instinctively to his temple.
          Mike noticed immediately.
        </p>

        <p>“You okay?” he murmured.</p>

        <p>
          “Something’s been feeling off,” Will whispered, voice lost beneath the soundtrack. “Like I’m being watched. Not constantly. Just… at weird moments.”
        </p>

        <p>Mike shifted closer, their shoulders almost touching. “Will—”</p>

        <p>
          “And when I try to think about what happened after everything ended,” Will said, words coming faster, “my head starts hurting. Like my thoughts get knotted up before I can even reach them.”
        </p>

        <p>Mike’s jaw tightened. “How long has this been going on?”</p>

        <p>“Since graduation.”</p>

        {/* --- SCENE BREAK: THE BASEMENT --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>
          The basement was already occupied when they arrived. Dice clattered against the table.
          “I cast Firebolt!”
        </p>

        <p>
          Holly Wheeler sat at the head of the table, expression sharp with focus.
          “Age is irrelevant in the face of absolute narrative authority,” Dustin said solemnly to Mike.
        </p>

        <p>
          They retreated to Mike's room, the sound of dramatic groaning following them up the stairs like background music.
        </p>

        {/* --- THE CLIMAX --- */}
        <div className="not-prose p-8 bg-stone-100/30 dark:bg-stone-900/20 rounded-lg border border-stone-200 dark:border-stone-800 mt-20">
          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Will stared at his hands. “I’ve been feeling… off. Like things don’t line up the way they should.”
          </p>
          
          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Dustin opened his mouth. “But after everything, we—”
          </p>
          
          <p className="font-serif text-xl mb-6 text-stone-500 italic">
            “We went on to do our own things,” Lucas said suddenly.
          </p>
          
          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Dustin blinked. “No, we didn’t.”
          </p>
          
          <p className="font-serif text-xl mb-6 text-stone-500 italic">
            “No,” Lucas said, slower now. “We did.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Dustin pushed himself upright, frowning. “Dude, you don’t remember? We built Cerebro 2.0. Stronger signal. We were all up there, freezing our butts off.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-500 italic">
            Lucas shook his head. “I was at practice. Basketball. We made regionals.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Dustin stared. “Okay, no. That doesn’t make sense. Because while you were supposedly becoming a sports legend, you were helping me solder antenna joints.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-500 italic">
            “I don’t remember that,” Lucas said. “At all.”
          </p>
        </div>

        <div className="not-prose my-16 space-y-4">
          <p className="font-serif text-2xl md:text-3xl text-center leading-relaxed text-stone-800 dark:text-stone-200">
            Every version felt true—
          </p>
          <p className="font-serif italic text-3xl md:text-4xl text-center text-ink dark:text-stone-100 tracking-tighter">
            and none of them fit together.
          </p>
        </div>

        {/* --- THE NEW ENDING --- */}
        <p>
          The room sat with that feeling, uneasy and unresolved.
          Mike looked between them. He picked up a D20 die from the floor, spinning it in his fingers.
        </p>

        <p>“Wait,” Mike said. His voice was quiet, but sharp enough to cut the silence.</p>
        
        <p>He tossed the die onto the floor. </p>

        <p>
          It bounced once. Twice. And then—against all laws of physics—it stopped.
          It didn't land on a number. It landed on its corner, balancing perfectly upright. Defying gravity.
        </p>
        
        <p>The room went freezing cold.</p>

        <p>
          “Dustin remembers the tower,” Mike whispered, staring at the impossible die. “Lucas remembers the game.”
        </p>

        <p>
          He looked up at them, and the fear in his eyes was replaced by something sharper. Something like recognition.
        </p>

        <p>“What if you're both right?” Mike asked.</p>

        <p>“That's impossible,” Max said, her voice shaking. “You can't be in two places at once.”</p>

        <p>
          “You can,” Will said softly, looking past them, looking right at the reader. 
          “If someone decided to write two different drafts.”
        </p>

        {/* Footer Navigation */}
        <div className="mt-24 border-t border-stone-200 dark:border-stone-800 pt-10 text-center">
            <span className="block text-xs font-sans tracking-widest text-stone-400 uppercase mb-4">
              To Be Continued
            </span>
            <p className="font-serif italic text-stone-500">End of Chapter II</p>
        </div>
        
      </motion.article>
    </div>
  );
};

export default Ch2_ThingsNotLiningUp;