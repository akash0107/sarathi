/* =====================================================================
   SARATHI HUB — ALL SITE CONTENT LIVES HERE
   ---------------------------------------------------------------------
   Edit this one file to update the website. No build step needed.

   Quick rules:
   - Keep the quotes and commas intact (it is a JavaScript object).
   - In any text you may use **bold**, *italic* and [link text](https://...).
   - Change "site.lastUpdated" whenever you edit (shown on the home page).
   - Each page has "sections"; each section has a "type" that controls how
     it is drawn. Supported types:
       text      -> { type, title, body: ["paragraph", ...] }
       list      -> { type, title, items: ["...", ...] }
       steps     -> { type, title, items: ["...", ...] }   (numbered)
       callout   -> { type, title, tone: "gold"|"teal"|"rose", body: [...], alert?: "NOTE"|"TIP"|"IMPORTANT"|"WARNING"|"CAUTION" }
       verse     -> { type, ref: "2.47", text: "...", note: "..." }
       verses    -> { type, title, refs: ["2.47", ...] }   (pulls from gita.verses)
       loop      -> { type, title, items: [...], body: [...] }  (circular flow)
       schedule  -> { type, title, items: [{ time, hour, label, short, text }] }  (short = one-line summary for GitHub README)
       visualize -> { type, title, parts: [{ title, prompts: [...] }] }
       prompt    -> { type, title, id, placeholder, help }  (saved in this browser only)
       todo      -> { type, title, groups: [{ title, items: [...] }] }
       journal   -> { type, title, entries: [{ date, note, worked: [], didnt: [] }] }
       contact   -> { type, title, items: [{ name, detail, phone, link }] }
       chips     -> { type, title, items: ["...", ...] }
       checklist -> { type, title, id, note, groups: [{ title, items: [...] }] }  (tick boxes, saved in this browser)
       vision    -> { type, title, image, fallback, full, width, height, alt, caption, placeholder, help }  (image "" = placeholder)
       goals     -> { type, title, theme: [...], phases: [{ title, period, items: [{ goal, detail }] }], motto }
   ===================================================================== */

window.SARATHI = {
  site: {
    name: "Sarathi Hub",
    owner: "Akash Debnath",
    tagline: "Your steady charioteer for mind, work and the road ahead.",
    lastUpdated: "2026-10-06",          // YYYY-MM-DD (IST)
    lastUpdatedLabel: "Oct 6, 2026 (IST)",
    timezone: "Asia/Kolkata"
  },

  home: {
    greetingName: "Akash",
    intro: "You don't have to fix your whole life today. Just take the next right action, and let Sarathi hold the reins of the mind.",
    verseOfDayRefs: ["2.47", "2.48", "2.14", "3.8", "6.5", "6.6", "6.17", "6.26", "6.35", "18.66"]
  },

  pages: [
    /* ------------------------------------------------------------- 1 */
    {
      id: "today",
      file: "today.html",
      title: "Today",
      subtitle: "Daily rhythm, one nudge every two hours",
      icon: "sun",
      accent: "gold",
      sections: [
        {
          type: "prompt",
          title: "One goal for today",
          id: "goal",
          placeholder: "e.g. Finish the Playwright fixtures chapter and apply to 3 roles",
          help: "One goal only. Small enough to finish. It is saved in this browser for today, nowhere else."
        },
        {
          type: "schedule",
          title: "Reminder rhythm (IST)",
          items: [
            { time: "6:00 AM",  hour: 6,  label: "Morning visualization", short: "Visualization + set one goal", text: "Sit up, breathe slowly, run the three-part visualization below. Then set today's one goal." },
            { time: "8:00 AM",  hour: 8,  label: "Nudge", short: "First focused block, before the phone", text: "One action for the next 2 hours: start the first focused block (learning or job applications) before checking the phone feed." },
            { time: "10:00 AM", hour: 10, label: "Nudge", short: "Finish one small, visible piece", text: "One action: finish one small, visible piece of work. Water + stretch." },
            { time: "12:00 PM", hour: 12, label: "Nudge", short: "One application or referral request", text: "One action: send one application or one referral request on LinkedIn." },
            { time: "2:00 PM",  hour: 14, label: "Nudge", short: "Short walk, then a focused block", text: "One action: after lunch slump, take a 5-minute walk, then one focused block. If stuck, use the stuck protocol." },
            { time: "4:00 PM",  hour: 16, label: "Nudge", short: "25 min interview prep / upskilling", text: "One action: practise one interview topic or one upskilling exercise for 25 minutes." },
            { time: "6:00 PM",  hour: 18, label: "Nudge", short: "Wrap up; note where to restart", text: "One action: wrap up work cleanly; note where to restart tomorrow." },
            { time: "8:00 PM",  hour: 20, label: "Nudge", short: "Light evening, screens winding down", text: "One action: light evening. Chant, walk, or talk with family. Start winding the screens down." },
            { time: "10:00 PM", hour: 22, label: "Gentle review", short: "Gentle review + brain dump", text: "What went well? What pulled me off? No judgement. Brain dump on paper, pick tomorrow's one goal, phone charges outside the bedroom." }
          ]
        },
        {
          type: "visualize",
          title: "Morning visualization (6 AM)",
          intro: "Close your eyes. Spend about a minute on each part. Feel it, don't just think it.",
          parts: [
            {
              title: "1. Life with no job",
              prompts: [
                "The ₹1 lakh EMI is still due on the same date every month.",
                "Savings drain a little more every month. The number keeps getting smaller.",
                "Notice the heaviness in the body. This is the cost of drifting."
              ]
            },
            {
              title: "2. How the bills actually get paid",
              prompts: [
                "Not by worrying. Only steady skill-building and applying keeps them covered.",
                "Today's learning block and today's applications are the EMI being paid in advance.",
                "Small daily action > big occasional effort."
              ]
            },
            {
              title: "3. Life with a job in Dubai / abroad",
              prompts: [
                "See yourself walking into the office as a respected Senior SDET / QA Lead.",
                "EMI paid without stress, savings growing, family proud and secure.",
                "Feel the calm. Now open your eyes and take the first step toward it."
              ]
            }
          ]
        },
        {
          type: "callout",
          tone: "teal",
          title: "Remember",
          body: ["Missed a nudge? That's fine. Just do the next one. The rhythm forgives; it only asks you to return."]
        }
      ]
    },

    /* ------------------------------------------------------------- 2 */
    {
      id: "mind",
      file: "mind.html",
      title: "Mind & Recovery",
      subtitle: "Understand the loop, then step out of it",
      icon: "lotus",
      accent: "teal",
      sections: [
        {
          type: "loop",
          title: "The loop",
          items: ["Cluttered mind", "Grabs the fastest relief", "Guilt", "More clutter"],
          body: [
            "This is not a character flaw. It is a pattern, and patterns can be retrained.",
            "The way out is not more guilt. It is a clearer mind: fewer open loops, one goal, fewer triggers within reach."
          ]
        },
        {
          type: "verse",
          ref: "6.34",
          speaker: "Arjuna",
          text: "The mind is restless, turbulent, powerful and obstinate, O Krishna. To control it seems to me as difficult as controlling the wind.",
          note: "Even Arjuna felt this. You are in good company."
        },
        {
          type: "verse",
          ref: "6.35",
          speaker: "Krishna",
          text: "O mighty-armed son of Kunti, the mind is undoubtedly restless and hard to restrain. But it can be controlled by steady practice (abhyasa) and by detachment (vairagya).",
          note: "Abhyasa = coming back again and again. Vairagya = loosening the grip of cravings. Both are skills, built daily."
        },
        {
          type: "steps",
          title: "Night plan",
          items: [
            "**5-minute brain dump on paper.** Everything in the head goes onto the page. No sorting.",
            "**Pick one goal for tomorrow.** Write it at the top of tomorrow's page.",
            "**Phone charges outside the bedroom.** Use a simple alarm clock if needed."
          ]
        },
        {
          type: "steps",
          title: "Urge plan (urge-surfing)",
          items: [
            "Know this: **an urge rises, peaks and falls within 10-15 minutes.** You only need to ride the wave.",
            "**Get up.** Change your physical position and room.",
            "**Cold water on the face.**",
            "**10 slow breaths**, or chant **Hare Krishna** slowly ten times.",
            "Do one small, useful thing with your hands until the wave passes."
          ]
        },
        {
          type: "callout",
          tone: "rose",
          title: "If you slip",
          body: [
            "**No shame spiral.** A slip is information, not a verdict.",
            "Tell Sarathi what happened and **learn the trigger**: what time, what feeling, what were you doing just before?",
            "Then return to the next 2-hour nudge. That return *is* abhyasa."
          ]
        },
        {
          type: "callout",
          tone: "gold",
          title: "Main known trigger",
          body: ["**Getting stuck while coding.** When the code gets confusing, the mind looks for an escape. Go straight to [When Code Gets Hard](stuck.html)."]
        }
      ]
    },

    /* ------------------------------------------------------------- 3 */
    {
      id: "stuck",
      file: "stuck.html",
      title: "When Code Gets Hard",
      subtitle: "The stuck protocol",
      icon: "code",
      accent: "gold",
      sections: [
        {
          type: "callout",
          tone: "teal",
          title: "This is the moment that matters",
          body: ["Being stuck is a normal part of engineering, not proof that you're not good enough. Every senior engineer gets stuck daily. The difference is what they do next."]
        },
        {
          type: "steps",
          title: "Stuck protocol",
          items: [
            "**Name it out loud:** \"I'm stuck, and my mind wants to escape.\" Naming it takes away half its power.",
            "**Shrink the problem** to one tiny piece. One failing assertion. One locator. One log line. What is the very next thing you can check?",
            "**5-minute reset without the phone.** Stand up, water, walk, breathe. Then come back to the tiny piece.",
            "**Ask for help instead of quitting.** A colleague, a forum, docs, or an AI assistant. Write the question clearly; that alone often solves it."
          ]
        },
        {
          type: "list",
          title: "Tiny-piece ideas for test automation",
          items: [
            "Reproduce the failure with one minimal test.",
            "Add a console log / trace / screenshot at the exact failing step.",
            "Run in headed / debug mode (e.g. Playwright `--debug`, trace viewer).",
            "Check the API response directly (Postman / Rest Assured) before blaming the UI.",
            "Read the error message slowly, top to bottom, one more time.",
            "Commit what works so far, so you are never afraid of breaking it."
          ]
        },
        {
          type: "verse",
          ref: "2.47",
          speaker: "Krishna",
          text: "You have a right to perform your duty, but never to the fruits of your actions. Do not let the results be your motive, and do not be attached to inaction.",
          note: "Focus on the next action, not on whether you'll 'crack it'. The result takes care of itself when the action is steady."
        }
      ]
    },

    /* ------------------------------------------------------------- 4 */
    {
      id: "career",
      file: "career.html",
      title: "Career",
      subtitle: "Profile, strategy and the road to 40+ LPA",
      icon: "wheel",
      accent: "teal",
      sections: [
        {
          type: "text",
          title: "Profile summary",
          body: [
            "**Akash Debnath**, Kolkata. Senior SDET / QA Lead with about **8 years** of experience in test automation and quality engineering.",
            "**Current:** Persistent Systems (since Jun 2025). **Earlier:** T-Systems, MSR IT, Atos Syntel.",
            "Builds and leads automation across UI, API and data layers, with CI/CD integration and domain experience in Ad Tech."
          ]
        },
        {
          type: "chips",
          title: "Core skills",
          items: ["Playwright", "Selenium", "Java", "Rest Assured", "Jenkins", "SQL", "MongoDB", "Kafka", "AWS", "Azure", "Ad Tech", "Gen-AI tooling"]
        },
        {
          type: "chips",
          title: "Certifications",
          items: ["ISTQB CTFL", "ISTQB CTFL-AT (Agile Tester)", "ISTQB CT-AI", "AWS certification(s)", "Azure certification(s)"]
        },
        {
          type: "list",
          title: "Target strategy",
          items: [
            "**Compensation goal:** 40+ LPA.",
            "**Target well-funded companies:** banks and financial organisations, GCCs (Global Capability Centres), and strong product companies.",
            "**Find them via** AmbitionBox (ratings, salaries, funding) and Great Place to Work lists.",
            "**Get referrals via LinkedIn:** connect with SDETs / QA managers at target companies, send short, specific referral requests.",
            "Keep a simple weekly count: companies shortlisted, referrals requested, applications sent, interviews."
          ]
        },
        {
          type: "chips",
          title: "Preferred locations (India)",
          items: ["Kolkata", "Bangalore", "Pune", "Hyderabad", "Noida", "Gurugram", "Mumbai"]
        },
        {
          type: "callout",
          tone: "gold",
          title: "Dream goal: Dubai / abroad",
          body: [
            "A Senior SDET / QA Lead role in **Dubai or abroad**.",
            "Every upskilling hour and every strong interview in India also builds the profile that gets you there."
          ]
        },
        {
          type: "todo",
          title: "Upskilling tracker (to fill in)",
          note: "Placeholder lists. Replace the suggestions with your own concrete items, resources and dates.",
          groups: [
            { title: "Playwright advanced", items: ["To fill in: fixtures & custom test runners", "To fill in: parallelism, sharding, trace viewer", "To fill in: visual & network mocking"] },
            { title: "API & contract testing", items: ["To fill in: Rest Assured advanced patterns", "To fill in: contract testing (e.g. Pact)", "To fill in: schema validation"] },
            { title: "GenAI / LLM testing", items: ["To fill in: evaluating LLM outputs", "To fill in: prompt / RAG test strategies", "To fill in: AI-assisted test generation"] },
            { title: "CI/CD", items: ["To fill in: Jenkins pipelines as code", "To fill in: GitHub Actions / Azure DevOps", "To fill in: test reporting & flaky-test handling"] },
            { title: "System design for test frameworks", items: ["To fill in: framework architecture (layers, patterns)", "To fill in: scalable test data management", "To fill in: test infra on AWS / Azure"] }
          ]
        },
        {
          type: "todo",
          title: "Interview prep (to be expanded)",
          note: "Topics are placeholders, to be expanded with questions, answers and stories.",
          groups: [
            { title: "Technical", items: ["To expand: Java & OOP for SDETs", "To expand: Playwright / Selenium deep dive", "To expand: API testing & Rest Assured", "To expand: SQL / MongoDB queries", "To expand: Kafka & event-driven testing"] },
            { title: "Design & leadership", items: ["To expand: design a test framework from scratch", "To expand: test strategy for a microservices product", "To expand: leading a QA team, mentoring, metrics"] },
            { title: "Behavioural", items: ["To expand: STAR stories (impact, conflict, failure)", "To expand: why this company / why now", "To expand: salary negotiation for 40+ LPA"] }
          ]
        }
      ]
    },

    /* ---------------------------------------------------- Dubai Dream */
    {
      id: "dubai",
      file: "dubai.html",
      title: "Dubai Dream",
      subtitle: "See the life clearly, then build it two hours at a time",
      icon: "plane",
      accent: "gold",
      featured: true,                 // wider, highlighted card on the home page
      sections: [
        {
          type: "vision",
          title: "Vision card",
          image: "assets/img/vision-card.webp?v=202610061659",   // shown on the page ("" = placeholder)
          fallback: "assets/img/vision-card.jpg?v=202610061659", // for browsers without WebP + the GitHub Markdown page
          full: "assets/img/vision-card.jpg?v=202610061659",     // opened when the card is tapped
          width: 1600, height: 900,
          alt: "Akash's Vision board: short, mid and long-term goals with the motto 'I can be ambitious and calm. I trust myself to take the next step.'",
          placeholder: "Your vision card will appear here.",
          help: "Coming soon. Save the image as assets/img/vision-card.* and set its path in content.js.",
          caption: "Akash's vision board. Tap to open full size."
        },
        {
          type: "callout",
          tone: "gold",
          title: "The dream",
          body: ["A strong **QA / SDET lead role in Dubai or abroad**, and in the long run, **a home and IT career in Europe**. The board below maps the road there, step by step."]
        },
        {
          type: "goals",
          title: "Akash's Vision",
          theme: ["Calm", "Motivated", "Energetic", "Self-belief"],
          phases: [
            { title: "Short term", period: "2026-2027", items: [
              { goal: "₹45 LPA+ CTC job offer", detail: "By 31 December 2026" },
              { goal: "Move daily, eat well", detail: "A calm, focused mind" },
              { goal: "₹10 lakh debt → ₹0", detail: "By 31 March 2027" },
              { goal: "Soft-spoken, calm, gentle" }
            ] },
            { title: "Mid term", period: "2028-2030", items: [
              { goal: "Senior Test Automation Architect" },
              { goal: "8 kg lighter", detail: "Strong, fit, energised" },
              { goal: "Mahindra XUV 7XO", detail: "₹25 lakh planned ex-showroom budget" },
              { goal: "Daily yoga & meditation" }
            ] },
            { title: "Long term", period: "2031+", items: [
              { goal: "Vice President", detail: "At a reputed multinational company" },
              { goal: "Lifelong energy & wellbeing" },
              { goal: "₹20 lakh invested", detail: "Patience, consistency, freedom" },
              { goal: "A home & IT career in Europe", detail: "₹10 lakh relocation fund" }
            ] }
          ],
          motto: "I can be ambitious and calm. I trust myself to take the next step."
        },
        {
          type: "visualize",
          title: "The vision",
          intro: "Sit tall, breathe slowly and see it in detail. Not as a wish, but as a place you are walking towards.",
          parts: [
            {
              title: "1. The role",
              prompts: [
                "A **Senior SDET / QA Lead** role at a well-funded bank, fintech or strong product company in Dubai or abroad.",
                "You own the test strategy. Your Playwright and API frameworks run in CI on every commit, and the team trusts your judgement.",
                "You walk in calm, prepared and respected."
              ]
            },
            {
              title: "2. The money",
              prompts: [
                "**Tax-free income** (the UAE has no personal income tax).",
                "The **₹1 lakh EMI** goes out each month with ease, without a second thought.",
                "Savings grow every month instead of draining. **Financial freedom**, and your family secure."
              ]
            },
            {
              title: "3. The person you become",
              prompts: [
                "Up at 6, mind steady, work done before distractions get a chance.",
                "When code gets hard you get curious, not anxious.",
                "Disciplined, kind, confident: someone others lean on."
              ]
            },
            {
              title: "4. The discipline it takes",
              prompts: [
                "None of this arrives by wishing. It is built **two hours at a time**.",
                "One focused learning block, one application, one referral request, one interview topic. Every day.",
                "On low days, do the smallest version. Never zero."
              ]
            }
          ]
        },
        {
          type: "checklist",
          id: "dubai",
          title: "What it takes",
          note: "Tick items as you complete them (saved in this browser only). Edit the list in content.js anytime.",
          groups: [
            { title: "Upskilling", items: [
              "Playwright advanced: fixtures, sharding, trace viewer",
              "API & contract testing (Rest Assured, Pact)",
              "GenAI / LLM testing fundamentals",
              "CI/CD pipelines as code (Jenkins / GitHub Actions)"
            ] },
            { title: "Applications", items: [
              "Shortlist UAE / abroad target companies (banks, fintechs, product firms)",
              "Update LinkedIn: open to work in Dubai / UAE",
              "Tailor the resume for Gulf roles: quantified impact, 2 pages max",
              "Set a weekly application target and keep it"
            ] },
            { title: "Referrals", items: [
              "Find SDETs / QA leads at target companies in Dubai on LinkedIn",
              "Send short, specific referral requests every week",
              "Follow up politely after 5-7 days"
            ] },
            { title: "Interview prep", items: [
              "Framework design walkthrough: your own framework story",
              "Leadership and STAR stories",
              "Live coding in Java",
              "Research salary bands in AED and set your number"
            ] }
          ]
        },
        {
          type: "verse",
          ref: "6.5",
          speaker: "Krishna",
          note: "Nobody else can do this lifting for you, and nobody can stop you from doing it."
        },
        {
          type: "callout",
          tone: "teal",
          title: "Today's link to the dream",
          body: ["Every focused block today is a brick in that life. Go to [Today](today.html) and pick the one action for the next two hours."]
        }
      ]
    },

    /* ------------------------------------------------------------- 5 */
    {
      id: "journal",
      file: "journal.html",
      title: "What Works / What Doesn't",
      subtitle: "An honest, kind log of experiments",
      icon: "book",
      accent: "gold",
      sections: [
        {
          type: "journal",
          title: "Log",
          help: "Add new entries at the TOP of the entries list in content.js. Fill 'worked' and 'didnt' as you learn.",
          entries: [
            {
              date: "2026-10-06",
              note: "Started with Sarathi. Identified trigger: giving up when code gets confusing. Trying: brain dump, one goal per day, phone out of bedroom, urge-surfing.",
              worked: [],
              didnt: []
            }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------- 6 */
    {
      id: "gita",
      file: "gita.html",
      title: "Gita Wisdom",
      subtitle: "Verses for focus, duty, equanimity and self-mastery",
      icon: "feather",
      accent: "teal",
      sections: [
        {
          type: "text",
          title: "",
          body: ["Plain-English renderings of well-known Bhagavad Gita verses. Read one slowly; let it sit."]
        },
        { type: "verses", title: "", refs: ["2.14", "2.47", "2.48", "3.8", "6.5", "6.6", "6.17", "6.26", "6.35", "18.66"] }
      ]
    },

    /* ------------------------------------------------------------- 7 */
    {
      id: "help",
      file: "help.html",
      title: "Help Now",
      subtitle: "You are not alone. Reach out.",
      icon: "heart",
      accent: "rose",
      sections: [
        {
          type: "contact",
          title: "Talk to someone now",
          items: [
            { name: "Tele-MANAS", detail: "Free, 24x7 mental health support from the Government of India. Multiple languages.", phone: "14416", link: "https://telemanas.mohfw.gov.in/" }
          ]
        },
        {
          type: "steps",
          title: "Calm down, right now",
          items: [
            "**Feet on the floor.** Notice the ground holding you.",
            "**Breathe out longer than in:** in for 4, out for 6. Ten times.",
            "**5-4-3-2-1:** name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
            "**Cold water** on the face or wrists.",
            "Chant **Hare Krishna** slowly, or just say: \"This feeling will pass.\"",
            "**Call or message** someone you trust, or call Tele-MANAS 14416."
          ]
        },
        {
          type: "callout",
          tone: "rose",
          alert: "WARNING",                // GitHub Markdown alert type (optional; site ignores it)
          title: "If you feel unsafe",
          body: ["If you have thoughts of harming yourself, call **Tele-MANAS 14416** or the national emergency number **112** now, or go to the nearest hospital. Reaching out is strength, not weakness."]
        }
      ]
    }
  ],

  /* -------------------------------------------------------------------
     Bhagavad Gita verses (chapter.verse -> plain-English rendering).
     Faithful paraphrases of the standard meaning; not word-for-word.
     ------------------------------------------------------------------- */
  gita: {
    verses: {
      "2.14":  { theme: "Equanimity", text: "O son of Kunti, contact of the senses with their objects brings cold and heat, pleasure and pain. They come and go; they are not permanent. Learn to endure them patiently, O Bharata." },
      "2.47":  { theme: "Duty, not results", text: "You have a right to perform your duty, but never to the fruits of your actions. Do not let the results be your motive, and do not be attached to inaction." },
      "2.48":  { theme: "Evenness of mind", text: "Established in yoga, perform your actions, O Dhananjaya, giving up attachment and remaining even-minded in success and failure. Such evenness of mind is called yoga." },
      "3.8":   { theme: "Action over inaction", text: "Perform your prescribed duty, for action is better than inaction. Even the maintenance of your body would not be possible without action." },
      "6.5":   { theme: "Lift yourself", text: "Lift yourself up by your own mind; do not let yourself sink down. For the mind alone is the friend of the self, and the mind alone is its enemy." },
      "6.6":   { theme: "Mind as friend", text: "For one who has conquered the mind, the mind is the best of friends; but for one who has not, the mind behaves like an enemy." },
      "6.17":  { theme: "Balanced routine", text: "For one who is moderate in eating and recreation, balanced in work, and regulated in sleep and waking, yoga becomes the destroyer of sorrow." },
      "6.26":  { theme: "Bring the mind back", text: "Whenever and wherever the restless, unsteady mind wanders, one should draw it back and bring it again under the control of the Self." },
      "6.34":  { theme: "The restless mind", text: "The mind is restless, turbulent, powerful and obstinate, O Krishna. To control it seems to me as difficult as controlling the wind." },
      "6.35":  { theme: "Practice & detachment", text: "O mighty-armed son of Kunti, the mind is undoubtedly restless and hard to restrain. But it can be controlled by steady practice (abhyasa) and by detachment (vairagya)." },
      "18.66": { theme: "Surrender & fearlessness", text: "Abandon all varieties of dharma and simply take refuge in Me alone. I shall free you from all sinful reactions; do not fear." }
    }
  }
};
