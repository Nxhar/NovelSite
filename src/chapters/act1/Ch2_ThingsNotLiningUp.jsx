import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Ch2_ThingsNotLiningUp = () => {
  return (
    <div className="w-full min-h-screen pb-32 bg-transparent">
      <motion.article 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          mx-auto px-6 md:px-0 
          max-w-prose 
          prose prose-lg md:prose-xl 
          /* --- DARK MODE FORCE FIXES --- */
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
        <div className="not-prose mb-12 italic text-center text-stone-500 dark:text-stone-400 font-serif border-y border-stone-200 dark:border-stone-800 py-8 mx-6 md:mx-12">
          <p className="mb-2">What if the story didn’t end because it was over…</p>
          <p>…but because it didn’t want him looking any further?</p>
        </div>

        <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:text-stone-800 dark:first-letter:text-stone-200">
          Mike swallowed. The sentence stared back at him from the page, neat and evenly spaced, as if it had always belonged there. He hadn’t meant to write that.
        </p>

        <p>
          He sat back in his chair, fingers resting on the typewriter keys, listening to the low hum of the house around him. The late afternoon sun slanted through his bedroom window, dust motes drifting lazily in its path. Everything looked normal. Quiet. Safe.
        </p>

        <p>And yet—</p>

        <p>
          Mike exhaled and reached up, rubbing his face. “You’re overthinking,” he muttered to himself.
        </p>

        <p>
          He always did that lately. Thought too much about beginnings. About endings. About the parts in between that felt… thinner than they should have.
        </p>

        <p>
          He rolled the paper forward a line and forced himself to type something else. Across town, Will Byers lay awake on his bed, staring at the ceiling, absolutely certain—without knowing why—that something was off.
        </p>

        {/* --- SCENE BREAK --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>
          Will had gotten used to feeling watched. That wasn’t the strange part. The strange part was that this didn’t feel like being watched at all.
        </p>

        <p>
          There was no weight to it. No pressure on the back of his neck. No instinct to turn around. It was more like… being misplaced.
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
          Will closed his eyes. He tried not to think about the way certain memories slipped when he reached for them lately. Not erased. Not hidden. Just… resistant. Like pages in a book that had been read too many times, the paper softened and sticking together so you couldn’t tell where one moment ended and the next began.
        </p>

        <p>
          The days after everything ended. The weeks after.
        </p>

        <p>
          Whenever he tried to hold those moments in his mind—to remember who said what, who stayed late, who went home first—a pressure bloomed behind his eyes. Not pain, exactly. More like his thoughts were pressing up against something that refused to move.
        </p>

        <p>
          He frowned slightly, breath hitching before he realized it had. “Stop,” he whispered to the dark.
        </p>

        <p>
          The word felt instinctive. Protective. Almost immediately, the pressure eased. His thoughts loosened, slipping back into safer shapes. The fan continued its steady spin. The clock kept ticking.
        </p>

        <div className="not-prose my-12 pl-6 border-l-4 border-stone-300 dark:border-stone-700">
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
          The call came the next afternoon. Will almost didn’t pick up.
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
          A pause followed. Not accidental this time. Then, softer—less performative, more deliberate—“Mike’s coming too.”
        </p>

        <p>
          Will opened his eyes. Mike Wheeler wasn’t a question in Will’s life anymore. He hadn’t been for a long time. Mike was the person who had stayed when things were hardest. Not someone he longed for, not someone he wondered about. Just someone he trusted. Someone solid.
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
          Starcourt Mall no longer looked like a battlefield. The wide glass entrances gleamed under the afternoon sun, reflecting light so clean it almost hurt to look at. The floors shone like mirrors, polished within an inch of their lives.
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
          They laughed, the sound echoing lightly through the open space. Will followed their gaze toward the center atrium. A banner advertised a double-feature playing tonight, complete with a cardboard cutout of Harrison Ford in a fedora.
        </p>

        <p>
          Mike walked easily beside Will, close without crowding him, the way he always did—like he knew exactly how much space to leave. Will appreciated that more than he could say.
        </p>

        <p>
          Then Will’s eyes caught on something familiar. “Oh no,” Lucas said flatly, following his line of sight. “Absolutely not.”
        </p>

        <p>Scoops Ahoy stood proudly at the far end of the corridor.</p>

        <p>
          Erica Sinclair stepped out of the store with the confidence of someone who had never once doubted her right to be anywhere. “Relax,” she said without slowing. “I’m performing a public service.”
        </p>

        <p>Lucas folded his arms. “You’re stealing ice cream.”</p>

        <p>
          Erica stopped, turned slowly, and smiled. “I’m conducting quality assurance. This one’s called Galactic Crunch. It tastes like regret and artificial berries.”
        </p>

        <p>Dustin lit up. “See? Valuable data.”</p>

        {/* --- SCENE BREAK: THE MOVIE --- */}
        <div className="not-prose w-full h-px bg-stone-200 dark:bg-stone-800 my-20"></div>

        <p>
          They caught a movie afterward—something loud and adventurous. Onscreen, Indy took his leap of faith. After what seemed like an hour of preparing himself for a life or death jump, he landed on the invisible bridge.
        </p>

        <p>
          Mike and Will sat in the back row. Will tried to focus on the movie—the comfort of a story where everything bad was loud and obvious and eventually beaten. It didn’t work.
        </p>

        <p>
          About halfway through, a sharp pain flared behind his eyes. He winced, fingers pressing instinctively to his temple. Mike noticed immediately.
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
        
        <p>
          Mike leaned back slightly, the word settling between them in a way that felt heavier than it should have.
          <br/>
          Graduation.
        </p>

        {/* --- SCENE BREAK: THE BASEMENT --- */}
        <div className="not-prose w-full flex justify-center items-center gap-6 my-20 opacity-40">
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
          <div className="font-serif italic text-2xl text-stone-800 dark:text-stone-200">❖</div>
          <div className="h-[1px] w-12 bg-stone-800 dark:bg-stone-200"></div>
        </div>

        <p>
          They ended up back at Mike’s house afterward. No discussion. No planning. Just muscle memory.
        </p>

        <p>
          The basement was already occupied—dice clattering against the table, voices overlapping in excited bursts, a spell list being argued over far too seriously.
          <br/>
          “I cast Firebolt!”
        </p>

        <p>
          Mike froze halfway down the stairs. “…Is that Holly?”
        </p>

        <p>
          Dustin grinned like he’d been waiting for this moment. “Dungeon Master Holly Wheeler.”
        </p>

        <p>
          Will leaned slightly to look past him. Sure enough—Holly sat at the head of the table, feet dangling off the chair, a notebook open in front of her, expression sharp with focus.
          Across from her, Derek and a couple of kids from the neighborhood stared at their character sheets in panic.
        </p>

        <p>“She wiped us in one encounter,” Derek said defensively. “One.”</p>

        <p>Holly didn’t even look up. “You split the party. That’s on you.”</p>

        <p>
          Mike stared. “She’s eleven, and already a better dungeon master than what I was at that age. Wow.”
        </p>

        <p>
          “Age is irrelevant in the face of absolute narrative authority,” Dustin said solemnly.
        </p>

        <p>
          Holly finally glanced up, eyes lighting the second she saw Mike. “You’re back! I’m almost done with this campaign.”
        </p>

        <p>
          Mike opened his mouth. Closed it again.
          “…We’ll be upstairs,” he said finally.
        </p>

        <p>
          They retreated to his room, the sound of dice and dramatic groaning following them up the stairs like background music.
        </p>

        {/* --- SCENE BREAK --- */}
        <div className="not-prose w-full h-px bg-stone-200 dark:bg-stone-800 my-20"></div>

        <p>
          They sprawled across the floor and bed like old times, limbs overlapping, shoes kicked off without ceremony.
        </p>

        <p>
          Dustin claimed the carpet immediately. “Man,” he said, staring at the ceiling, “I forgot how much your room smells like dust and bad decisions.”
        </p>

        <p>“It’s called nostalgia,” Mike said.</p>

        <p>“No, it’s called you never opening a window.”</p>

        <p>
          Lucas laughed, settling against the bed frame. Max stretched out beside him, kicking his leg lightly when he took up too much space.
        </p>

        <p>
          Dustin rolled onto his side, propping his head on his hand. “Also—just saying—you and Will were talking a lot today.”
        </p>

        <p>Mike stiffened. “What?”</p>

        <p>“Oh, relax,” Dustin said quickly. “Not accusing. Observing. There’s a difference.”</p>

        <p>Lucas frowned. “I didn’t notice.”</p>

        <p>“Exactly,” Dustin said smugly. “You and Max were busy reenacting a romance subplot.”</p>

        <p>Max rolled her eyes. “Wow. So subtle.”</p>

        <p>She glanced at Will. “You’ve been quiet, though. What’s up?”</p>

        <p>
          The room didn’t stop. Not exactly.
          But something shifted—like everyone instinctively leaned in without realizing it.
        </p>

        {/* --- THE CLIMAX: MEMORY CONFLICT --- */}
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
            Dustin pushed himself upright, frowning. “Dude, you don’t remember? We rebuilt Cerebro. Version two. Stronger signal. We were all up there, freezing our butts off, arguing about antenna angles like it actually mattered.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Mike nodded faintly. “I remember that.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-500 italic border-l-2 border-stone-300 dark:border-stone-700 pl-4">
            Lucas shook his head. “I don’t. I was at practice. Basketball. Every day after school. We made regionals.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            “That’s—” Dustin laughed once, sharp and confused. “That’s not possible. You were literally holding wires for me.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-500 italic">
            “I wasn’t,” Lucas said. “I remember drills. Scrimmages. Coach yelling about footwork.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Max shifted where she sat.
            <br/>
            “…That’s weird,” she said quietly.
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            They all looked at her.
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Max frowned, eyes unfocused. “After everything, the doctors told me it’d take months before I could even walk normally again. Physical therapy. Follow-ups. They were really serious about it.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Lucas turned to her. “No, they weren’t.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Her head snapped toward him. “What?”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            “You were back on your board in, like, two weeks,” Lucas said. “You hated the physical therapy, remember? Kept sneaking out anyway.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-500 italic border-l-2 border-red-400 pl-4">
            Max felt a chill crawl up her spine. “No,” she said slowly. “I couldn’t stand without help for weeks.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Lucas opened his mouth—then stopped.
            <br/>
            “I remember pushing you,” he said. “You were fine.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200 italic">
            Silence pressed in.
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Dustin looked between them, his usual grin nowhere in sight. “Okay,” he said quietly. “That’s not… small stuff. That’s not forgetting what movie we watched.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Will’s fingers curled against the carpet.
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            “I remember painting,” he said. “A lot. Like it was the only thing that made sense. Like I was supposed to keep doing it.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Mike swallowed. “I remember helping you move your things. Making space.”
          </p>

          <p className="font-serif text-xl mb-6 text-stone-800 dark:text-stone-200">
            Dustin’s voice dropped. “Then when did we build the tower?”
          </p>
        </div>

        <div className="not-prose my-16 space-y-4">
          <p className="font-serif text-2xl md:text-3xl text-center leading-relaxed text-stone-800 dark:text-stone-200">
            Every memory felt solid—
          </p>
          <p className="font-serif italic text-3xl md:text-4xl text-center text-ink dark:text-stone-100 tracking-tighter">
            and none of them agreed on where it belonged.
          </p>
        </div>

        {/* --- THE ENDING GLITCH --- */}
        <p>
          The room sat with that feeling, uneasy and unresolved.
          Mike looked between them. He picked up a D20 die from the floor, spinning it in his fingers.
        </p>

        <p>
          “Wait,” Mike said. His voice was quiet, but sharp enough to cut the silence.
        </p>
        
        <p>He tossed the die onto the floor.</p>

        <p>
          It bounced once. Twice.
          <br/>
          And then—against all laws of physics—it stopped.
        </p>
        
        <div className="not-prose my-10 pl-6 border-l-2 border-red-500/50">
           <p className="font-serif text-xl text-stone-800 dark:text-stone-200">
             It didn't land on a number. It landed on its corner, balancing perfectly upright. Defying gravity.
           </p>
        </div>
        
        <p>The room went freezing cold.</p>

        <p>
          “Dustin remembers the tower,” Mike whispered, staring at the impossible die. “Lucas remembers the game.”
        </p>

        <p>
          He looked up at them, and the fear in his eyes was replaced by something sharper. Something like recognition.
        </p>

        <p>“What if you're both right?” Mike asked.</p>

        <p>“That's impossible,” Max said, her voice shaking. “You can't be in two places at once.”</p>

        {/* --- THE ULTRA-GLITCHY ENDING --- */}
        <motion.div 
          animate={{ 
            x: [-2, 2, -1, 1, 0],
            y: [1, -1, 2, -2, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.1, 
            repeatType: "mirror" 
          }}
          className="not-prose mt-20 mb-32 p-10 border-2 border-red-600/50 dark:border-red-400/50 bg-stone-50 dark:bg-zinc-950 rounded-sm shadow-[0_0_20px_rgba(255,0,0,0.1)] relative overflow-hidden"
        >
          {/* Scanning Line Effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10"></div>
          
          <motion.div
            animate={{ opacity: [1, 0.8, 1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 0.05 }}
          >
            <p className="text-center font-serif text-xl md:text-2xl text-stone-900 dark:text-white leading-relaxed relative z-20">
              “You can,” Will said in a calm, almost mechanical tone, looking past them, looking right at the reader.
              <br className="my-8"/>  
              <br></br>
              <span className="inline-block animate-glitch-text italic font-black text-3xl md:text-4xl tracking-tighter uppercase">
                “If someone decided to write two different drafts.”
              </span>
            </p>
          </motion.div>

          {/* Glitch Overlay - A "ghost" of the text that flickers */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none italic font-bold text-4xl text-red-600 select-none">
             ERROR_NOT_FINAL_VERSION
          </div>
        </motion.div>


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