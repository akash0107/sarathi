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
       stats     -> { type, title, note, items: [{ value, label, sub, tone, big }] }  (big number cards)
       bars      -> { type, title, note, max, items: [{ label, value, display, sub, tone }], footer }
       calc      -> { type, id, title, note, monthly, ctc, basicPct, days, hours }  (hour's-worth calculator, new tax regime)
       goals     -> { type, title, theme: [...], phases: [{ title, period, items: [{ goal, detail }] }], motto }
       lesson    -> { type, title, blocks: [{ text: "..." } | { code: `...`, lang: "python" } | { list: ["...", ...] } | { ol: ["...", ...], start: 7 } | { img, width, height, alt, caption }] }
                    (optional anchor: "my-id" gives the section a #my-id link)
                    (learning notes; code goes in backtick strings so line breaks and indentation are kept)
   - A page may set nav: "Short name" to use a shorter label in the top navigation.
   ===================================================================== */

window.SARATHI = {
  site: {
    name: "Sarathi Hub",
    owner: "Akash Debnath",
    tagline: "Your steady charioteer for mind, work and the road ahead.",
    lastUpdated: "2026-10-15",          // YYYY-MM-DD (IST)
    lastUpdatedLabel: "Oct 15, 2026 (IST)",
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

    /* ------------------------------------------------------------- 4b */
    {
      id: "pytest",
      file: "pytest.html",
      title: "Pytest Notes (Oct 8, 2026)",
      nav: "Pytest Notes",
      subtitle: "What I learned in pytest, explained simply with tiny code examples",
      icon: "code",
      accent: "teal",
      sections: [
        {
          type: "lesson",
          title: "1. Installation",
          blocks: [
            { lang: "bash", code: `pip install pytest
pytest --version` }
          ]
        },
        {
          type: "lesson",
          title: "2. Skeleton",
          blocks: [
            { text: "pytest finds files named `test_*.py` and runs every function whose name starts with `test_`. That's the whole structure." },
            { lang: "python", code: `# test_login.py
def test_addition():
    assert 2 + 3 == 5` }
          ]
        },
        {
          type: "lesson",
          title: "3. Assertion",
          blocks: [
            { text: "`assert` means \"this must be true\". If it's false, the test fails and pytest shows you both values." },
            { lang: "python", code: `def test_title():
    title = "Dashboard"
    assert title == "Dashboard"
    assert "Dash" in title
    assert len(title) > 0` },
            { text: "To check that something raises an error:" },
            { lang: "python", code: `import pytest

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0` }
          ]
        },
        {
          type: "lesson",
          title: "4. Ways to run",
          blocks: [
            { lang: "bash", code: `pytest                          # every test in the folder
pytest test_login.py            # one file
pytest test_login.py::test_title  # one test
pytest -v                       # verbose: shows each test name and PASSED/FAILED
pytest -k "login"               # only tests with "login" in the name
pytest -k "login and not admin" # combine words
pytest -s                       # show print() output
pytest -x                       # stop at the first failure` }
          ]
        },
        {
          type: "lesson",
          title: "5. Fixtures",
          blocks: [
            { text: "Think of a fixture as a helper who sets the table before you eat and clears it afterwards. The test just asks for it by name." },
            { lang: "python", code: `import pytest

@pytest.fixture
def user():
    print("setup: create user")
    yield {"name": "akash", "role": "admin"}   # the test gets this
    print("teardown: delete user")             # runs after the test

def test_user_role(user):          # asking for the fixture by name
    assert user["role"] == "admin"` },
            { text: "Code before `yield` is setup, and code after `yield` is cleanup." }
          ]
        },
        {
          type: "lesson",
          title: "6. conftest.py and scope",
          blocks: [
            { text: "Put fixtures in `conftest.py` and every test file in that folder can use them without importing anything. Scope decides how often the fixture runs:" },
            { list: [
              "`function` (the default) runs once per test",
              "`class` runs once per test class",
              "`module` runs once per file",
              "`session` runs once for the whole run"
            ] },
            { lang: "python", code: `# conftest.py
import pytest

@pytest.fixture(scope="session")
def base_url():
    return "https://reqres.in/api"

@pytest.fixture(scope="function")
def api_headers():
    return {"Content-Type": "application/json"}` },
            { text: "A testing example: open the DB connection or log in once per `session`, but create fresh test data per `function`." }
          ]
        },
        {
          type: "lesson",
          title: "7. Parametrize",
          blocks: [
            { text: "Same test, many data sets, and each one shows up as its own test in the report." },
            { lang: "python", code: `import pytest

@pytest.mark.parametrize("username, password, expected", [
    ("admin", "admin123", True),
    ("admin", "wrong",    False),
    ("",      "admin123", False),
])
def test_login(username, password, expected):
    result = (username == "admin" and password == "admin123")
    assert result == expected` },
            { text: "This gives you 3 tests from one function, which is great for data-driven login and API checks." }
          ]
        },
        {
          type: "lesson",
          title: "8. Marks",
          blocks: [
            { text: "Marks are labels you stick on tests so you can run groups of them." },
            { lang: "python", code: `import pytest

@pytest.mark.smoke
def test_homepage(): ...

@pytest.mark.regression
def test_full_checkout(): ...

@pytest.mark.skip(reason="bug JIRA-101 open")
def test_broken(): ...

@pytest.mark.xfail(reason="known issue")
def test_known_fail(): ...` },
            { lang: "bash", code: `pytest -m smoke                    # only smoke tests
pytest -m "smoke or regression"` },
            { text: "Register custom marks in `pytest.ini` so you don't get warnings:" },
            { lang: "ini", code: `[pytest]
markers =
    smoke: quick checks
    regression: full suite` }
          ]
        },
        {
          type: "callout",
          tone: "teal",
          title: "Practice exercise",
          body: [
            "Make one folder with `conftest.py` (holding a `base_url` fixture) and `test_api.py`, then write one parametrized test marked `smoke` and run it with `pytest -v -m smoke`. That one exercise covers all 8 points."
          ]
        }
      ]
    },

    /* ------------------------------------------------------------- 4c */
    {
      id: "appium",
      file: "appium.html",
      title: "Appium 3 Notes (Oct 9, 2026)",
      nav: "Appium 3 Notes",
      subtitle: "Appium 3, simply: a picture, a little code, and the next step",
      icon: "code",
      accent: "teal",
      sections: [
        {
          type: "callout",
          tone: "teal",
          title: "Confused? That's normal.",
          body: ["Appium has many moving parts. You already did the hardest part, the setup. Take **one section per 25-minute block**."]
        },
        {
          type: "toc",
          title: "On this page",
          items: [
            { anchor: "what", label: "1. What Appium is" },
            { anchor: "setup", label: "2. Mac setup" },
            { anchor: "drivers", label: "3. Drivers & plugins" },
            { anchor: "server", label: "4. Start the server" },
            { anchor: "caps", label: "5. Capabilities" },
            { anchor: "first-test", label: "6. First test (Java)" },
            { anchor: "locators", label: "7. Locators" },
            { anchor: "usb-checklist", label: "8. Phone not in adb? (USB checklist)" },
            { anchor: "errors", label: "9. Other common errors" },
            { anchor: "path", label: "10. Your learning path" }
          ]
        },
        {
          type: "lesson",
          anchor: "what",
          title: "1. What Appium is",
          blocks: [
            { text: "**Picture:** a TV remote. Your code presses the button, Appium passes it on, and the phone does it." },
            { img: "assets/img/appium/architecture.svg?v=202610112120", width: 400, height: 614, alt: "Diagram: your test code sends an HTTP command to the Appium server on port 4723, which hands it to a driver (UiAutomator2 for Android, XCUITest for iOS), which taps the button on the device.", caption: "Test code → Appium server (:4723) → driver → device." }
          ]
        },
        {
          type: "lesson",
          anchor: "setup",
          title: "2. Mac setup",
          blocks: [
            { text: "**Picture:** lay out the ingredients once, then just cook. You need Node 20.19+ (22 LTS) with npm 10+, a Java JDK, Android Studio (SDK + emulator) and, for iOS only, Xcode." },
            { img: "assets/img/appium/install-flow.svg?v=202610112120", width: 400, height: 662, alt: "Diagram: 8 setup steps in order, each with the command that checks it: Node and npm, Appium, Java JDK and JAVA_HOME, Android Studio and SDK, platform-tools in PATH, emulator, Xcode for iOS, and the driver plus doctor.", caption: "Each step, and the command that proves it worked." },
            { lang: "bash", code: `npm i -g appium                    # -g = the "appium" command works in every folder

# ~/.zshrc  (then run: source ~/.zshrc)
export JAVA_HOME=$(/usr/libexec/java_home)          # where Java lives
export ANDROID_HOME=$HOME/Library/Android/sdk        # where the Android SDK lives
export PATH=$PATH:$ANDROID_HOME/platform-tools       # so "adb" works
export PATH=$PATH:$ANDROID_HOME/emulator             # so "emulator" works` },
            { lang: "bash", code: `node -v            # 20.19 or newer
appium -v          # 3.x
java -version
echo $ANDROID_HOME # .../Library/Android/sdk
adb devices        # e.g. "emulator-5554   device"` },
            { details: "What changed in Appium 3 (only matters for older tutorials)", blocks: [
              { list: [
                "Needs **Node 20.19+** and **npm 10+**.",
                "Old non-W3C commands were removed, e.g. the old `TouchAction` taps and swipes. Use W3C Actions or `mobile:` commands instead.",
                "`--allow-insecure` features need a driver prefix: `appium --allow-insecure=uiautomator2:adb_shell`.",
                "If a 2023-era blog post fails, this is usually why."
              ] }
            ] }
          ]
        },
        {
          type: "lesson",
          anchor: "drivers",
          title: "3. Drivers & plugins",
          blocks: [
            { text: "**Picture:** a driver is the plug for one kind of phone (required); a plugin is an optional extra." },
            { lang: "bash", code: `appium driver install uiautomator2    # Android
appium driver install xcuitest        # iOS (Mac + Xcode only)
appium driver list --installed        # what you have
appium driver doctor uiautomator2     # checks JAVA_HOME, ANDROID_HOME, adb...` },
            { details: "Plugins and the doctor in more detail", blocks: [
              { text: "Plugins are installed like drivers, but you also switch them on when you start the server:" },
              { lang: "bash", code: `appium plugin install images          # e.g. find elements by image
appium plugin list --installed
appium --use-plugins=images           # start the server WITH the plugin
appium driver update uiautomator2     # update a driver later` },
              { text: "`appium driver doctor <driver>` is built into Appium 3. The older standalone tool is `npm i -g @appium/doctor`, then `appium-doctor --android` (the old `appium-doctor` package is deprecated)." }
            ] }
          ]
        },
        {
          type: "lesson",
          anchor: "server",
          title: "4. Start the server",
          blocks: [
            { text: "**Picture:** open the shop before sending customers. Keep this terminal open; its log is where errors show up." },
            { lang: "bash", code: `appium              # http://127.0.0.1:4723 (no /wd/hub in Appium 3)
appium -p 4724      # if 4723 is busy` }
          ]
        },
        {
          type: "lesson",
          anchor: "caps",
          title: "5. Capabilities",
          blocks: [
            { text: "**Picture:** the order slip you hand the waiter: which phone, which driver, which app." },
            { img: "assets/img/appium/capabilities-card.svg?v=202610112120", width: 400, height: 600, alt: "Diagram: an ID card listing each capability with an example value and a one-line meaning; the appium: prefix is highlighted.", caption: "Every key except platformName needs the appium: prefix." },
            { lang: "json", code: `{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5554",
  "appium:app": "/Users/akash/apps/demo.apk"
}` },
            { text: "Find element locators with **Appium Inspector** (free desktop app): host `127.0.0.1`, port `4723`, path `/`, paste the JSON, then click *Start Session*." },
            { details: "Full capability list, and why the appium: prefix", blocks: [
              { list: [
                "`platformName`: `Android` or `iOS`. The only standard W3C key, so it has no prefix.",
                "`appium:automationName`: `UiAutomator2` (Android) or `XCUITest` (iOS).",
                "`appium:deviceName`: e.g. `emulator-5554`. On Android it is mostly a label.",
                "`appium:platformVersion`: e.g. `14`. Optional on Android, but it must match the device if you set it.",
                "`appium:app`: full path (or URL) to the `.apk` / `.app`. Appium installs and opens it.",
                "`appium:appPackage` + `appium:appActivity`: open an app that is already installed (e.g. `com.android.settings` + `.Settings`).",
                "`appium:noReset`: `true` keeps app data (stay logged in) between sessions.",
                "`appium:udid`: the exact device ID from `adb devices`, needed when more than one device is connected."
              ] },
              { text: "**Why `appium:`?** The W3C standard says any non-standard key needs a vendor prefix. Always add it in Appium 3; without it the session can fail to start." }
            ] }
          ]
        },
        {
          type: "lesson",
          anchor: "first-test",
          title: "6. First test (Java + Maven)",
          blocks: [
            { text: "**Picture:** a short recipe: open the app, type, tap, then always close it (`quit`)." },
            { lang: "xml", code: `<!-- pom.xml: java-client 11 is made for Appium 3 (Java 11+) -->
<dependency>
    <groupId>io.appium</groupId>
    <artifactId>java-client</artifactId>
    <version>11.0.0</version>
</dependency>
<!-- add when you start using waits (WebDriverWait) -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-support</artifactId>
    <version>4.50.0</version>
</dependency>` },
            { lang: "java", code: `import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import java.net.URI;
import java.net.URL;

public class FirstAppiumTest {
    public static void main(String[] args) throws Exception {
        // 1. The order slip. UiAutomator2Options already sets
        //    platformName=Android and automationName=UiAutomator2.
        UiAutomator2Options options = new UiAutomator2Options()
                .setDeviceName("emulator-5554")
                .setApp("/Users/akash/apps/demo.apk");

        // 2. Where the Appium 3 server listens (no /wd/hub)
        URL server = URI.create("http://127.0.0.1:4723").toURL();

        // 3. Start the session (this opens the app)
        AndroidDriver driver = new AndroidDriver(server, options);
        try {
            // 4. Find, then act (copy real locators from Appium Inspector)
            driver.findElement(AppiumBy.accessibilityId("username")).sendKeys("akash");
            driver.findElement(AppiumBy.id("com.example.app:id/password")).sendKeys("secret123");
            driver.findElement(AppiumBy.xpath("//android.widget.Button[@text='Login']")).click();
        } finally {
            driver.quit();   // 5. always close, even if a step fails
        }
    }
}` },
            { details: "Same test in Python + pytest", blocks: [
              { text: "`pip install \"Appium-Python-Client>=6\" pytest` (needs Python 3.10+). The fixture sets the table (starts the driver) and clears it afterwards (quits)." },
              { lang: "python", code: `# test_login_app.py
import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy

@pytest.fixture
def driver():
    options = UiAutomator2Options()
    options.device_name = "emulator-5554"
    options.app = "/Users/akash/apps/demo.apk"
    drv = webdriver.Remote("http://127.0.0.1:4723", options=options)
    yield drv          # the test runs here
    drv.quit()         # cleanup after the test

def test_login(driver):
    driver.find_element(AppiumBy.ACCESSIBILITY_ID, "username").send_keys("akash")
    driver.find_element(AppiumBy.ID, "com.example.app:id/password").send_keys("secret123")
    driver.find_element(AppiumBy.XPATH, "//android.widget.Button[@text='Login']").click()` },
              { text: "Run it with the server already started: `pytest -v test_login_app.py`." }
            ] }
          ]
        },
        {
          type: "lesson",
          anchor: "locators",
          title: "7. Locators",
          blocks: [
            { text: "**Picture:** call a friend by name (accessibility id), then seat number (id); long directions (xpath) are the last resort." },
            { img: "assets/img/appium/locator-ladder.svg?v=202610112120", width: 400, height: 436, alt: "Diagram: a ladder with three rungs: 1 accessibility id (best), 2 id (good), 3 xpath (last resort), each with a code example.", caption: "Climb from the top. No accessibility ids? Ask the devs to add them." }
          ]
        },
        {
          type: "lesson",
          anchor: "usb-checklist",
          title: "8. Android Device USB Connection Checklist (for Appium runs)",
          blocks: [
            { text: "Use this when `adb devices` shows nothing, shows **unauthorized**, or Appium can't find your phone." },
            { text: "**On the phone:**" },
            { ol: [
              "Settings → About phone → tap **Build number** 7 times → enables Developer Options.",
              "Settings → Additional settings → Developer options → toggle **USB debugging** ON (separate switch from step 1).",
              "(Vivo-specific) In Developer options, also enable **Install via USB** and disable **Verify apps over USB**, if present.",
              "Plug phone into Mac via USB cable.",
              "Pull down notification shade → tap the USB notification → set mode to **File Transfer (MTP)**, not \"Charging only.\"",
              "Watch the phone screen for an **\"Allow USB debugging?\"** popup → tap **Allow** (check \"Always allow from this computer\" to skip this next time)."
            ] },
            { text: "**On the Mac:**" },
            { ol: ["Run: `adb devices -l` — it should list the phone's serial number."], start: 7 },
            { lang: "bash", code: `adb devices -l` },
            { ol: ["If still empty, force a rescan:"], start: 8 },
            { lang: "bash", code: `adb kill-server && adb start-server && adb devices -l` },
            { text: "**If it still doesn't show up:**" },
            { ol: ["Try a different USB cable/port (some cables are charge-only)."], start: 9 },
            { ol: ["Check if macOS even sees the phone as a USB device:"], start: 10 },
            { lang: "bash", code: `ioreg -p IOUSB -l -w 0 | grep -E "\\+-o|USB Vendor Name"` },
            { text: "If the phone doesn't appear here at all, it's a cable/port/hardware issue, not an Android settings issue." },
            { text: "*Emulator instead of a phone?* Start it first (Android Studio, or `emulator -avd <name>`; list names with `emulator -list-avds`), then run `adb devices` again." }
          ]
        },
        {
          type: "lesson",
          anchor: "errors",
          title: "9. Other common errors",
          blocks: [
            { list: [
              "**\"ANDROID_HOME is not set\"**: add the exports from [Mac setup](#setup), run `source ~/.zshrc`, then restart Appium **from that terminal**.",
              "**\"Could not find a driver for automationName 'UiAutomator2'\"**: run `appium driver install uiautomator2`.",
              "**\"Connection refused\"**: the server isn't running, or it's on a different port. Start `appium`.",
              "**404 / \"resource could not be found\"**: your URL ends with `/wd/hub`. Remove it.",
              "**\"Port 4723 is already in use\"**: close the old Appium (`lsof -i :4723` shows it) or use `appium -p 4724`.",
              "**\"Session not created\"**: read the red lines in the server log. Usually it's a wrong `app` path or package/activity, a mismatched `platformVersion`, a missing `appium:` prefix, or JAVA_HOME. Run `appium driver doctor uiautomator2`.",
              "**Phone missing from `adb devices`**: see the [USB checklist](#usb-checklist)."
            ] }
          ]
        },
        {
          type: "lesson",
          anchor: "path",
          title: "10. Your learning path",
          blocks: [
            { img: "assets/img/appium/roadmap.svg?v=202610112120", width: 400, height: 724, alt: "Diagram: a timeline. Done today: install on Mac, drivers and plugins, desired capabilities, basic UI automation. Next: 1 Inspector and locators, 2 gestures, 3 waits, 4 Page Object Model, 5 TestNG or pytest, 6 parallel runs, 7 CI.", caption: "Done: setup, drivers, capabilities, first test. Next: Inspector → gestures → waits → Page Objects → TestNG/pytest → parallel → CI." },
            { text: "**Next block:** open Appium Inspector and find 5 elements by accessibility id. That's it." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------- 4d */
    {
      id: "deepeval",
      file: "deepeval.html",
      title: "DeepEval Notes (Oct 11, 2026)",
      nav: "DeepEval Notes",
      subtitle: "Testing LLM answers with DeepEval and a free local Ollama judge, explained simply (Karthik KK course, sections 1-4)",
      icon: "code",
      accent: "teal",
      sections: [
        {
          type: "lesson",
          title: "TL;DR (read this first)",
          blocks: [
            { list: [
              "An LLM gives a **different answer every time**, so `assert answer == \"Paris\"` breaks. Instead we ask **another LLM (the judge)** to score the answer from 0 to 1.",
              "In DeepEval: put the question and answer in an `LLMTestCase`, pick a **metric** (like `AnswerRelevancyMetric`), and run `evaluate()`. Score ≥ **threshold** means pass.",
              "The judge can run **free on my laptop** with Ollama (`qwen3:8b`). No API key, no cost.",
              "Thinking models print their reasoning, which can break DeepEval's JSON parsing. My `OllamaNoThink` class turns thinking off.",
              "My first result: **Answer Relevancy 1.00** (threshold 0.5), judge `qwen3:8b`, run took 43.74s, published to Confident AI."
            ] }
          ]
        },
        {
          type: "lesson",
          title: "1. What LLM evaluation is (and why normal asserts don't work)",
          blocks: [
            { text: "**Everyday picture:** a maths exam has one right answer, so a machine can mark it. An essay exam doesn't. Two good essays use different words, so a **teacher** reads each one and gives marks. LLM answers are essays, and DeepEval brings in a teacher (the judge LLM)." },
            { list: [
              "Ask \"What is the capital of France?\" and you may get `Paris`, `Paris.` or `The capital of France is Paris.` All are correct, yet `==` passes only one of them.",
              "So we stop checking **exact text** and start checking **qualities**: is it relevant, is it faithful to the documents, is it correct?",
              "Each quality is a **metric**, and each metric gives a **score from 0 to 1** plus a **reason**."
            ] }
          ]
        },
        {
          type: "lesson",
          title: "2. Key DeepEval concepts",
          blocks: [
            { text: "**`LLMTestCase`** = one exam paper. It holds what went in and what came out:" },
            { table: { head: ["Field", "What it is", "Example"], rows: [
              ["`input`", "The question the user asked", "\"What is the capital of France?\""],
              ["`actual_output`", "What **my** LLM app answered", "\"Paris\""],
              ["`expected_output`", "The ideal answer (optional, some metrics need it)", "\"Paris is the capital.\""],
              ["`retrieval_context`", "Chunks my RAG app **actually fetched** at runtime (list of strings)", "[\"Paris is France's capital...\"]"],
              ["`context`", "The **ideal / ground-truth** facts (list of strings), written by me", "[\"France's capital is Paris.\"]"]
            ] } },
            { list: [
              "**Metric** = what the teacher marks for (relevancy, faithfulness, ...). Each metric needs certain fields. `AnswerRelevancyMetric` needs only `input` and `actual_output`.",
              "**Threshold** = the pass mark. Default is `0.5`. Score ≥ threshold → pass.",
              "**LLM-as-a-judge** = an LLM reads the test case and does the marking. The judge is set with the metric's `model=` argument.",
              "Easy mix-up: `retrieval_context` = what the app **found**; `context` = what it **should** have found."
            ] },
            { text: "**Two ways to run tests:**" },
            { table: { head: ["Style", "How", "When"], rows: [
              ["`evaluate()`", "Plain Python script: `evaluate(test_cases=[...], metrics=[...])`, run with `python file.py`", "Quick experiments, notebooks (what I used)"],
              ["pytest style", "`assert_test(test_case, [metric])` inside a `test_` function, run with `deepeval test run test_file.py`", "Real test suites and CI pipelines"]
            ] } },
            { lang: "python", code: `# pytest style (file: test_capital.py)
from deepeval import assert_test
from deepeval.metrics import AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase

def test_capital():
    test_case = LLMTestCase(input="What is the capital of France?", actual_output="Paris")
    assert_test(test_case, [AnswerRelevancyMetric(threshold=0.5)])` },
            { lang: "bash", code: `deepeval test run test_capital.py` }
          ]
        },
        {
          type: "lesson",
          title: "3. AnswerRelevancyMetric: how the score is made",
          blocks: [
            { text: "**Question it answers:** does the answer stay on topic for the question? (It does **not** check facts. A wrong but on-topic answer can still score high; Faithfulness catches that.)" },
            { ol: [
              "The judge **splits** `actual_output` into small statements.",
              "For each statement the judge gives a **verdict**: `yes` (relevant), `no` (off-topic) or `idk` (unsure; counted as relevant).",
              "**Score = relevant statements ÷ total statements.**"
            ] },
            { text: "Example: answer \"Paris. Also, I love pizza.\" → 2 statements, 1 relevant → score **0.5**. My answer \"Paris\" → 1 statement, verdict `yes` → score **1.0**." },
            { text: "Tip: set `verbose_mode=True` on any metric to print the statements and verdicts in the terminal." }
          ]
        },
        {
          type: "lesson",
          title: "4. A free local judge with Ollama",
          blocks: [
            { text: "**Everyday picture:** instead of paying an outside teacher (OpenAI), I hire a teacher who lives in my house (a model running on my laptop)." },
            { ol: [
              "Install Ollama from [ollama.com](https://ollama.com) (on Mac: download the app, or `brew install ollama`).",
              "Download the judge model: `ollama pull qwen3:8b`",
              "Start the server (the app does this for you): `ollama serve`. It listens on `http://localhost:11434`.",
              "Put settings in `.env` in the project folder:"
            ] },
            { lang: "bash", code: `# .env
OLLAMA_MODEL_NAME=qwen3:8b
LOCAL_MODEL_BASE_URL=http://localhost:11434` },
            { text: "Then in code: `OllamaModel(model=..., base_url=...)` and pass it to the metric with `model=ollama_model`." },
            { text: "**Alternative (no code change):** make Ollama the default judge for every metric through the CLI:" },
            { lang: "bash", code: `deepeval set-ollama --model=qwen3:8b --base-url="http://localhost:11434"
deepeval unset-ollama   # go back to the default provider` }
          ]
        },
        {
          type: "lesson",
          title: "5. The thinking-model gotcha and my OllamaNoThink fix",
          blocks: [
            { text: "**Problem:** models like Qwen3 and DeepSeek-R1 \"think out loud\" first. DeepEval expects clean JSON back from the judge, and the extra thinking text can break parsing. It's also slower." },
            { text: "**Fix:** a tiny subclass that always sends `think=False` to Ollama's `chat` call." },
            { list: [
              "`class OllamaNoThink(OllamaModel)` = \"same as `OllamaModel`, with one change\".",
              "`load_model()` builds the Ollama client. I call the parent's version with `super()`, then change it.",
              "`partial(client.chat, think=False)` = a copy of `chat` with `think=False` already filled in, so every call gets it.",
              "`async_mode=False` and `AsyncConfig(run_async=False)` = run one step at a time. Slower but simpler and easier to debug on a laptop."
            ] },
            { lang: "python", code: `import os
from functools import partial
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv(usecwd=True), override=True)
from deepeval import evaluate
from deepeval.evaluate import AsyncConfig
from deepeval.metrics import AnswerRelevancyMetric
from deepeval.models import OllamaModel
from deepeval.test_case import LLMTestCase

class OllamaNoThink(OllamaModel):
    """Forward think=False to Ollama for sync and async calls."""
    def load_model(self, *args, **kwargs):
        client = super().load_model(*args, **kwargs)
        client.chat = partial(client.chat, think=False)
        return client

ollama_model = OllamaNoThink(model=os.environ["OLLAMA_MODEL_NAME"], base_url=os.environ["LOCAL_MODEL_BASE_URL"])
test_case = LLMTestCase(input="What is the capital of France?", actual_output="Paris")
result = evaluate([test_case], metrics=[AnswerRelevancyMetric(model=ollama_model, async_mode=False)], async_config=AsyncConfig(run_async=False))` },
            { text: "I also have a `think=True` version (class `OllamaThink`). Instead of two files, one flag can switch them:" },
            { lang: "python", code: `THINK = os.getenv("OLLAMA_THINK", "false").lower() == "true"

class OllamaJudge(OllamaModel):
    def load_model(self, *args, **kwargs):
        client = super().load_model(*args, **kwargs)
        client.chat = partial(client.chat, think=THINK)
        return client` },
            { text: "Run with `OLLAMA_THINK=true python file.py` to turn thinking on; leave it out for off." }
          ]
        },
        {
          type: "lesson",
          title: "6. Publishing results to Confident AI",
          blocks: [
            { text: "**Confident AI** is DeepEval's website for saving and viewing test runs (like a report portal)." },
            { ol: [
              "Run `deepeval login` and paste the API key from the Confident AI dashboard.",
              "Run tests as usual. Each `evaluate()` / `deepeval test run` is uploaded as a **test run**.",
              "Open the test run to see score, pass/fail, the reason, and the **verbose logs** (statements + verdicts)."
            ] },
            { text: "**My real run:** Answer Relevancy **1.00** vs threshold **0.5** → PASS. Judge `qwen3:8b` via Ollama. Run time **43.74s**. Verbose log: Statements `[\"Paris\"]`, verdict `yes`." },
            { img: "assets/img/deepeval/confident_ai_result.png", width: 1437, height: 900, alt: "Confident AI test run: Answer Relevancy score 1.00 against threshold 0.5, judge qwen3:8b via Ollama, verbose logs showing the statement Paris with verdict yes.", caption: "My first DeepEval run on Confident AI. Tap to open full size." }
          ]
        },
        {
          type: "lesson",
          title: "7. Common errors and fixes",
          blocks: [
            { table: { head: ["What I see", "Why", "Fix"], rows: [
              ["`KeyError: 'OLLAMA_MODEL_NAME'`", "`.env` not loaded or variable missing", "Check `.env` is in the project folder; keep `load_dotenv(...)` **before** reading `os.environ`"],
              ["Connection refused on `localhost:11434`", "Ollama server not running", "Open the Ollama app or run `ollama serve`; test with `ollama list`"],
              ["`model not found`", "Model not downloaded / name typo", "`ollama pull qwen3:8b`; name must match `ollama list` exactly"],
              ["JSON / parsing error from the metric", "Thinking text or a weak model broke the JSON", "Use `OllamaNoThink`, or a bigger model"],
              ["Very slow runs", "Big model on a laptop, thinking on", "Turn thinking off; try a smaller model; it's normal for a first run (mine: 43.74s)"],
              ["Asks for an OpenAI API key", "No `model=` given, so default OpenAI judge is used", "Pass `model=ollama_model` to every metric, or run `deepeval set-ollama`"],
              ["Results don't show on Confident AI", "Not logged in", "`deepeval login` with the key from the dashboard"]
            ] } }
          ]
        },
        {
          type: "lesson",
          title: "8. Quick revision: flashcards",
          blocks: [
            { text: "Try to answer first, then tap to check." },
            { qa: [
              { q: "Why can't I use `assert answer == expected` for LLMs?", a: "The answer's wording changes every run, so exact match fails on correct answers. We score qualities (0 to 1) with a judge instead." },
              { q: "What is LLM-as-a-judge?", a: "Another LLM reads the test case and gives a score with a reason, like a teacher marking an essay." },
              { q: "Which two fields does `AnswerRelevancyMetric` need?", a: "`input` and `actual_output`." },
              { q: "How is Answer Relevancy calculated?", a: "Split the output into statements, mark each yes / no / idk, score = relevant statements ÷ total." },
              { q: "`retrieval_context` vs `context`?", a: "`retrieval_context` = chunks the app actually fetched. `context` = ideal ground-truth facts I provide." },
              { q: "Default threshold and what it means?", a: "`0.5`. Score ≥ threshold → the test passes." },
              { q: "`evaluate()` vs `assert_test()`?", a: "`evaluate()` for scripts and experiments; `assert_test()` inside pytest functions, run with `deepeval test run`." },
              { q: "Which two env vars does my local judge use?", a: "`OLLAMA_MODEL_NAME` (e.g. `qwen3:8b`) and `LOCAL_MODEL_BASE_URL` (`http://localhost:11434`)." },
              { q: "Why did I write `OllamaNoThink`?", a: "Thinking models add reasoning text that can break DeepEval's JSON parsing and slow things down. It forces `think=False`." },
              { q: "What does `partial(client.chat, think=False)` do?", a: "Makes a copy of `chat` with `think=False` pre-filled, so every call sends it automatically." }
            ] }
          ]
        },
        {
          type: "lesson",
          title: "9. Cheat sheet",
          blocks: [
            { lang: "bash", code: `pip install -U deepeval python-dotenv   # install
ollama pull qwen3:8b                     # download judge model
ollama serve                             # start Ollama (port 11434)
ollama list                              # see downloaded models
deepeval set-ollama --model=qwen3:8b     # make Ollama the default judge
deepeval unset-ollama                    # undo
deepeval login                           # connect to Confident AI
python first_test.py                     # run an evaluate() script
deepeval test run test_file.py           # run pytest-style DeepEval tests` }
          ]
        },
        {
          type: "lesson",
          title: "10. Next up",
          blocks: [
            { list: [
              "**Faithfulness**: is every claim in the answer backed by `retrieval_context`? (catches hallucinations)",
              "**Contextual Precision**: are the relevant chunks ranked at the top?",
              "**Contextual Recall**: did retrieval fetch everything needed for `expected_output`?",
              "**Contextual Relevancy**: how much of the fetched text is actually relevant to the input?",
              "**G-Eval**: write my own criteria in plain English and let the judge score them.",
              "**Goldens**: a saved dataset of inputs (plus expected outputs) that I reuse for every test run."
            ] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------- 4e */
    {
      id: "worth",
      file: "worth.html",
      title: "My Hour's Worth",
      nav: "My Hour's Worth",
      subtitle: "Open this when you're doom scrolling or don't feel like working. This is your push.",
      icon: "sun",
      accent: "gold",
      sections: [
        {
          type: "stats",
          title: "Right now, every hour you work is worth",
          note: "Based on **₹2,13,000/month take-home** (already in-hand, after tax and PF) ÷ 22 working days ÷ 8 hours = **176 hours a month**.",
          items: [
            { value: "₹1,210", label: "per hour", tone: "gold", big: true },
            { value: "₹9,682", label: "per day", sub: "8 hours", tone: "teal" },
            { value: "₹20", label: "per minute", sub: "every single minute", tone: "rose" }
          ]
        },
        {
          type: "bars",
          title: "What doom scrolling really costs",
          note: "Money you were paid for, spent on nothing. At ₹20 a minute:",
          max: 1210,
          items: [
            { label: "15 min scroll", value: 303, display: "₹303", tone: "gold" },
            { label: "30 min scroll", value: 605, display: "₹605", tone: "rose" },
            { label: "60 min scroll", value: 1210, display: "₹1,210", sub: "a full hour's pay", tone: "rose" }
          ],
          footer: "Two 30-minute scrolls a day × 22 days = **₹26,625 a month**, about one-eighth of your salary."
        },
        {
          type: "stats",
          title: "At your ₹45 LPA target",
          note: "**Estimated** take-home after income tax, cess, PF and professional tax (new tax regime, FY 2026-27): **≈ ₹2.58–2.66 lakh/month**. At the same 176 hours:",
          items: [
            { value: "≈ ₹1,500", label: "per hour", sub: "₹1,467 – ₹1,510", tone: "gold", big: true },
            { value: "≈ ₹12,000", label: "per day", sub: "₹11,735 – ₹12,080", tone: "teal" },
            { value: "≈ ₹25", label: "per minute", sub: "₹24.4 – ₹25.2", tone: "rose" }
          ]
        },
        {
          type: "lesson",
          anchor: "breakdown",
          title: "₹45 LPA: full deduction breakdown (new regime)",
          blocks: [
            { table: {
              head: ["Yearly (₹)", "Basic = 40% of CTC", "Basic = 50% of CTC"],
              rows: [
                ["CTC", "45,00,000", "45,00,000"],
                ["Basic salary", "18,00,000", "22,50,000"],
                ["Employer PF (12% of basic, inside CTC)", "− 2,16,000", "− 2,70,000"],
                ["**Gross salary**", "**42,84,000**", "**42,30,000**"],
                ["Standard deduction", "− 75,000", "− 75,000"],
                ["**Taxable income**", "**42,09,000**", "**41,55,000**"],
                ["Income tax (slabs)", "8,42,700", "8,26,500"],
                ["Health & education cess (4%)", "33,708", "33,060"],
                ["Employee PF (12% of basic)", "2,16,000", "2,70,000"],
                ["Professional tax (West Bengal)", "2,500", "2,500"],
                ["**Total deductions from gross**", "**10,94,908**", "**11,32,060**"],
                ["**Take-home per year**", "**31,89,092**", "**30,97,940**"],
                ["**Take-home per month**", "**2,65,758**", "**2,58,162**"],
                ["Per hour (÷ 176)", "1,510", "1,467"],
                ["Per day (÷ 22)", "12,080", "11,735"],
                ["Per minute", "25.2", "24.4"]
              ]
            } },
            { text: "Tax on ₹42,09,000: ₹0 on the first 4L, then ₹20k (4–8L at 5%) + ₹40k (8–12L at 10%) + ₹60k (12–16L at 15%) + ₹80k (16–20L at 20%) + ₹1L (20–24L at 25%) = **₹3,00,000** up to 24L, plus 30% of the remaining ₹18,09,000 = ₹5,42,700. Total **₹8,42,700**, plus 4% cess." },
            { details: "Assumptions (this is an estimate, not payroll advice)", blocks: [
              { list: [
                "**New tax regime only**, FY 2026-27. Slabs checked against the Income-tax rates for 2026 (Budget 2026 left them unchanged): 0–4L nil · 4–8L 5% · 8–12L 10% · 12–16L 15% · 16–20L 20% · 20–24L 25% · above 24L 30%.",
                "₹75,000 standard deduction; 4% health & education cess on tax. No surcharge, because taxable income stays below ₹50 lakh.",
                "CTC = gross salary + employer PF. Employer PF and employee PF are each 12% of basic, with basic at 40% or 50% of CTC and **no** ₹15,000 wage-ceiling cap. If your PF is capped, take-home is higher.",
                "Professional tax ₹2,500/year (West Bengal) is deducted from pay. Under the new regime it does **not** reduce taxable income.",
                "No variable pay, bonus split, gratuity, NPS, insurance or other deductions. Real offers differ, so check the actual salary breakup.",
                "Hours: 22 working days × 8 hours = 176 hours/month. Current ₹2,13,000 is treated as already in-hand."
              ] }
            ] }
          ]
        },
        {
          type: "lesson",
          title: "Side by side",
          blocks: [
            { table: {
              head: ["", "Now", "At ₹45 LPA (est.)"],
              rows: [
                ["Take-home / month", "₹2,13,000", "₹2,58,162 – ₹2,65,758"],
                ["Per day (8 h)", "₹9,682", "₹11,735 – ₹12,080"],
                ["Per hour", "₹1,210", "₹1,467 – ₹1,510"],
                ["Per minute", "₹20", "₹24.4 – ₹25.2"],
                ["30 min doom scroll", "₹605", "₹733 – ₹755"]
              ]
            } }
          ]
        },
        {
          type: "calc",
          id: "worth",
          title: "Calculator: what is my hour worth?",
          note: "Works on this phone, nothing is sent anywhere. Enter take-home directly, or estimate it from CTC (new regime, same assumptions as above).",
          monthly: 213000,
          ctc: 4500000,
          basicPct: 40,
          days: 22,
          hours: 8
        },
        {
          type: "callout",
          tone: "rose",
          title: "This is your push.",
          body: [
            "This page is for doom scrolling moments, for when you don't feel like working. This is your push.",
            "**You are paid ₹1,210 for every hour.** So every hour you must deliver at least ₹1,210 of value: a test written, a bug found, a lesson finished, an application sent. Give less, and sooner or later nobody gives you importance, or a chance. Give more, and the ₹1,500 hour comes to you.",
            "**Value is the ultimate thing.** Not the title, not the hours you sat at the desk. The value you create.",
            "Put the phone face down. Pick one small task. Start the 25-minute timer. Now."
          ]
        },
        { type: "verse", ref: "3.8", note: "Inaction costs ₹20 a minute. Action builds the life you are working for." },
        { type: "verse", ref: "2.47", note: "Your part is the hour of honest work. The rewards follow; don't stand still waiting for them." }
      ]
    },

    /* ---------------------------------------------------- Playwright Revision */
    {
      "id": "playwright",
      "file": "playwright.html",
      "title": "Playwright Revision (Oct 15, 2026)",
      "nav": "Playwright Revision",
      "subtitle": "Last-minute interview revision: pictures, tables and commented TypeScript",
      "icon": "code",
      "accent": "teal",
      "sections": [
        {
          "type": "callout",
          "tone": "teal",
          "title": "Interview tomorrow? Breathe.",
          "body": [
            "You already know most of this. Each section goes: **💡 Simple idea** (an everyday example) → **🧠 Remember this** (say it in the interview) → a **tiny example** with a comment on every line. Longer code hides under **Full example (optional)**."
          ]
        },
        {
          "type": "lesson",
          "anchor": "quick",
          "title": "Read this first: 10-minute quick revision",
          "blocks": [
            {
              "note": "idea",
              "title": "📋 How to use this",
              "text": "One line per topic. Read it out loud. If a line feels fuzzy, tap its section in the list below."
            },
            {
              "list": [
                "**Architecture: why Playwright is fast:** One open connection + auto-wait + retrying assertions = fast and less flaky.",
                "**Browser → Context → Page:** Browser → Context (isolated session) → Page (tab). New context per test = no leaks.",
                "**TypeScript basics: async / await:** Every Playwright action returns a Promise; always await it. Locators themselves need no await.",
                "**Locators: finding elements:** Prefer getByRole, getByLabel, getByText, getByTestId; CSS/XPath last. Locators are lazy, strict and auto-waiting.",
                "**Actions: click, type, select, drag:** fill() sets the value at once; pressSequentially() types key by key (type() is deprecated). force:true skips checks: last resort.",
                "**Navigation & waits:** Use goto/reload/goBack, toHaveURL or waitForURL, waitForResponse for API calls; avoid waitForTimeout and networkidle.",
                "**Popups, dialogs, frames, many tabs:** Start waitForEvent('popup') before the click; register page.on('dialog') before the action.",
                "**Tabs & windows recap:** context.waitForEvent('page') before the click; context.pages() lists tabs; page.close() closes one.",
                "**File upload & download:** setInputFiles for upload (filechooser if no input); waitForEvent('download') before the click, then saveAs.",
                "**iframes, alerts & shadow DOM:** frameLocator for iframes; page.on/once('dialog') before the action (default: dismiss); locators pierce open shadow DOM, XPath does not.",
                "**Hooks, describe, annotations, steps & timeouts:** beforeAll/afterAll once per worker, beforeEach/afterEach per test; skip/fixme/fail/slow/only; default test timeout 30 s, expect 5 s.",
                "**Screenshots, video, trace & debugging tools:** Trace viewer is the #1 debug tool (trace: on-first-retry, show-trace); --debug or page.pause() opens the Inspector; --ui for UI mode; codegen records.",
                "**Custom fixtures:** test.extend creates fixtures: code before use() = setup, after = teardown.",
                "**Page Object Model (POM) recap:** POM = one class per page with locators + actions; tests keep the business assertions; inject POMs via fixtures.",
                "**Log in once: storageState + setup project:** A setup project logs in once and saves storageState; other projects load it.",
                "**localStorage & sessionStorage:** storageState saves cookies + localStorage, NOT sessionStorage.",
                "**API testing:** The request fixture (APIRequestContext) sends HTTP calls; check with expect(res).toBeOK().",
                "**Network mocking: page.route & HAR:** page.route + fulfill / abort / continue / fetch; routeFromHAR replays recorded traffic.",
                "**Assertions cheat sheet:** await expect(locator) retries; expect(value) checks once. Use expect.soft to keep going.",
                "**Geolocation & emulation:** Set geolocation + permissions on the context; devices['iPhone 15'] for phones.",
                "**Visual, accessibility, mobile, browsers, headless:** toHaveScreenshot (update with -u); @axe-core/playwright AxeBuilder.analyze(); devices[] for phones; projects for browsers; headless by default, --headed to watch.",
                "**Data-driven tests:** Loop over an array and create one test per row, with unique titles.",
                "**Test data from files & .env:** JSON via import, CSV via csv-parse, Excel via xlsx, secrets via .env + process.env.",
                "**Run commands cheat sheet:** -g filters by title, --grep @tag by tag, --ui to explore, --debug to step through.",
                "**Reporters:** list/line/dot for console, html for people, junit/json for CI tools.",
                "**playwright.config.ts walkthrough:** defineConfig: testDir, timeout, retries, workers, reporter, use, projects, webServer.",
                "**Parallelism & sharding:** Workers = processes on one machine (default half the CPU cores); shards = split across machines.",
                "**CI/CD: Jenkins + artifacts:** npm ci → npx playwright install --with-deps → npx playwright test → upload report.",
                "**Allure report:** allure-playwright reporter → allure-results/ → allure generate → allure open.",
                "**Framework structure:** Tests → fixtures → page objects → utils/data → config; tests only describe steps.",
                "**CLI & test agents:** codegen records; show-trace replays; init-agents adds planner, generator, healer.",
                "**Claude Code & Copilot agent mode:** init-agents writes the agent files + an MCP config; you pick the agent and give a goal.",
                "**Playwright MCP setup:** Playwright MCP = npx @playwright/mcp@latest, added to your AI app's MCP config.",
                "**GitHub & Bitbucket MCP:** GitHub MCP: remote https://api.githubcopilot.com/mcp/ or Docker with a PAT; Bitbucket MCP is community-made.",
                "**Agent workflow: Jira → PR:** Story → plan → tests → heal → PR, with a human review at the end."
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "analogies",
          "title": "Analogy cheat sheet",
          "blocks": [
            {
              "list": [
                "[**Architecture**](#arch): Selenium is sending a **post card** for every instruction; Playwright is **one WhatsApp call kept open** with the browser. → *One live connection, so commands are fast and nothing gets lost between steps.*",
                "[**Auto-wait**](#arch): An **auto-rickshaw driver waits** till the passenger is fully seated before moving. → *Playwright waits until an element is visible, enabled and stable before it acts.*",
                "[**Browser / Context / Page**](#contexts): A **housing society** (browser) → each **flat** with its own lock (context) → **rooms** in the flat (pages). → *Contexts are isolated: cookies of one flat never reach another.*",
                "[**async / await**](#ts): Ordering **chai at a tapri**: you place the order (Promise) and **wait** till the cup is in your hand (await) before you drink. → *No await = you \"drink\" before the chai is ready → random failures.*",
                "[**Locators**](#locators): Giving a **delivery boy an address**: \"Flat 302, Shanti Apartments\" (role + name) works; \"the third door after the blue gate\" (XPath) breaks when the gate is repainted. → *Use stable, user-facing locators.*",
                "[**Locator vs ElementHandle**](#locators): A locator is the **address** (always finds today's resident); an ElementHandle is a **photo of the person** (wrong after they move out). → *Locators re-find the element every time; handles go stale.*",
                "[**fill vs pressSequentially**](#actions): **fill** = pasting a full address from WhatsApp; **pressSequentially** = typing it letter by letter on a phone keypad. → *Use fill normally; type key by key only when the app reacts to each key.*",
                "[**waitForTimeout vs real waits**](#navigation): **Fixed sleep** = waiting 10 minutes on the platform \"just in case\"; **real wait** = waiting until the **train announcement** comes. → *Wait for an event (URL, response, element), not for time.*",
                "[**Tabs**](#tabs): Several **TV channels on one remote**: you don't move the TV, you just pick which channel (Page variable) to watch. → *A Page object is a tab; use whichever variable you need.*",
                "[**Download**](#upload): Telling the **watchman** \"a Flipkart parcel is coming\" before you order, so he catches it at the gate. → *Start waitForEvent('download') before the click.*",
                "[**iframe**](#frames): A **shop inside a mall**: you must first walk into that shop (frameLocator) before picking items off its shelves. → *Enter the frame, then locate inside it.*",
                "[**Dialogs**](#frames): A **doorbell**: decide in advance who answers it (listener), otherwise nobody opens (auto-dismiss). → *Register the dialog handler before triggering it.*",
                "[**Hooks**](#hooks): **Net practice before every match** (beforeEach) and **ground cleaning after** (afterEach); the season opening ceremony is beforeAll. → *Setup/teardown around tests.*",
                "[**Retries & flaky tests**](#hooks): A **cricket review**: if the first decision looks wrong, check again (retry) — but if every review is needed, fix the umpire (the test). → *Retries hide flakiness; find the root cause.*",
                "[**Trace viewer**](#debugging): The **DRS replay with Hawk-Eye**: go ball by ball, see exactly where it pitched (DOM, network, console at each step). → *A trace lets you replay a failed test step by step.*",
                "[**Fixture**](#fixtures): A **restaurant waiter** lays the plate before you eat and clears it after. → *Setup before `use()`, teardown after; the test just asks for what it needs.*",
                "[**Test vs worker scope**](#fixtures): A **fresh plate per customer** (test scope) vs **one water jug per table** for the whole meal (worker scope). → *Test scope = new each test; worker scope = created once per worker process.*",
                "[**Page Object Model**](#pom): A **TV remote**: you press \"Volume +\" without knowing the circuits inside; if the TV changes, only the remote is rewired. → *Tests call actions; locator details hide inside the page class.*",
                "[**storageState**](#auth): A **hotel key card**: check in once at reception, then just tap the card at your door. → *Log in once in a setup project, save the state file, reuse it in every test.*",
                "[**localStorage vs sessionStorage**](#storage): **localStorage** = your **Aadhaar card** in the wallet (stays). **sessionStorage** = a **platform ticket** (valid only for this visit, this tab). → *storageState saves cookies + localStorage, not sessionStorage.*",
                "[**page.route mocking**](#mock): A **society security guard** checks every delivery: lets it in, sends it back, or swaps the parcel. → *Intercept requests: fulfill (fake reply), abort (block), continue/fetch (change).*",
                "[**HAR replay**](#mock): A **recorded cricket match** on replay: the same balls, same shots, no live players needed. → *Record real network traffic once into a .har file, replay it so tests do not need the server.*",
                "[**Web-first vs generic**](#assertions): A **third umpire** who keeps replaying till the decision is clear (web-first) vs a **scoreboard** you read once (generic). → *`await expect(locator)` retries until timeout; `expect(value)` checks once.*",
                "[**Soft assertion**](#assertions): A **teacher marks all mistakes** in the paper instead of stopping at the first one. → *`expect.soft` records the failure and the test keeps going.*",
                "[**expect.poll / toPass**](#assertions): Calling the **railway enquiry** again and again till it says \"train arrived\" (poll); retrying a **whole recipe** till the dish comes out right (toPass). → *poll retries one value; toPass retries a whole block of code.*",
                "[**Visual testing**](#quality): **Spot the difference** puzzle in the newspaper: compare two pictures pixel by pixel. → *toHaveScreenshot compares with a golden image.*",
                "[**Headless vs headed**](#quality): A **radio commentary** (headless: it happens, you don't see it) vs **watching on TV** (headed). → *Headless for speed/CI; headed for debugging.*",
                "[**Reporters**](#reporters): The **same match** shown as live score SMS (line), ball-by-ball dots (dot), or a full newspaper report (html). → *Reporters only change how results are shown, not the tests.*",
                "[**Workers vs shards**](#parallel): **Workers** = several **billing counters in one D-Mart**; **shards** = splitting customers across **different D-Mart branches**. → *Workers = processes on one machine; shards = split tests across machines.*",
                "[**Allure**](#allure): A **wedding photo album**: Playwright clicks the raw photos, Allure makes the album with captions. → *allure-results (raw) → allure generate → a rich HTML report.*",
                "[**Agents: planner / generator / healer**](#cli): Building a house: the **architect** draws the plan, the **mistri** builds it, the **plumber-electrician** fixes leaks later. → *Planner writes the plan, generator writes tests, healer fixes failing tests.*",
                "[**MCP**](#mcp): A **universal travel adapter**: one plug lets the AI use any tool (browser, GitHub, Jira). → *MCP is a standard way for AI apps to call tools.*"
              ]
            }
          ]
        },
        {
          "type": "toc",
          "title": "On this page",
          "items": [
            {
              "anchor": "quick",
              "label": "Read this first: 10-minute quick revision"
            },
            {
              "anchor": "analogies",
              "label": "Analogy cheat sheet"
            },
            {
              "anchor": "arch",
              "label": "1. Architecture: why Playwright is fast"
            },
            {
              "anchor": "contexts",
              "label": "2. Browser → Context → Page"
            },
            {
              "anchor": "ts",
              "label": "3. TypeScript basics: async / await"
            },
            {
              "anchor": "locators",
              "label": "4. Locators: finding elements"
            },
            {
              "anchor": "actions",
              "label": "5. Actions: click, type, select, drag"
            },
            {
              "anchor": "navigation",
              "label": "6. Navigation & waits"
            },
            {
              "anchor": "pages",
              "label": "7. Popups, dialogs, frames, many tabs"
            },
            {
              "anchor": "tabs",
              "label": "8. Tabs & windows recap"
            },
            {
              "anchor": "upload",
              "label": "9. File upload & download"
            },
            {
              "anchor": "frames",
              "label": "10. iframes, alerts & shadow DOM"
            },
            {
              "anchor": "hooks",
              "label": "11. Hooks, describe, annotations, steps & timeouts"
            },
            {
              "anchor": "debugging",
              "label": "12. Screenshots, video, trace & debugging tools"
            },
            {
              "anchor": "fixtures",
              "label": "13. Custom fixtures"
            },
            {
              "anchor": "pom",
              "label": "14. Page Object Model (POM) recap"
            },
            {
              "anchor": "auth",
              "label": "15. Log in once: storageState + setup project"
            },
            {
              "anchor": "storage",
              "label": "16. localStorage & sessionStorage"
            },
            {
              "anchor": "api",
              "label": "17. API testing"
            },
            {
              "anchor": "mock",
              "label": "18. Network mocking: page.route & HAR"
            },
            {
              "anchor": "assertions",
              "label": "19. Assertions cheat sheet"
            },
            {
              "anchor": "emulation",
              "label": "20. Geolocation & emulation"
            },
            {
              "anchor": "quality",
              "label": "21. Visual, accessibility, mobile, browsers, headless"
            },
            {
              "anchor": "datadriven",
              "label": "22. Data-driven tests"
            },
            {
              "anchor": "files",
              "label": "23. Test data from files & .env"
            },
            {
              "anchor": "run",
              "label": "24. Run commands cheat sheet"
            },
            {
              "anchor": "reporters",
              "label": "25. Reporters"
            },
            {
              "anchor": "config",
              "label": "26. playwright.config.ts walkthrough"
            },
            {
              "anchor": "parallel",
              "label": "27. Parallelism & sharding"
            },
            {
              "anchor": "ci",
              "label": "28. CI/CD: Jenkins + artifacts"
            },
            {
              "anchor": "allure",
              "label": "29. Allure report"
            },
            {
              "anchor": "framework",
              "label": "30. Framework structure"
            },
            {
              "anchor": "cli",
              "label": "31. CLI & test agents"
            },
            {
              "anchor": "ai",
              "label": "32. Claude Code & Copilot agent mode"
            },
            {
              "anchor": "mcp",
              "label": "33. Playwright MCP setup"
            },
            {
              "anchor": "repo-mcp",
              "label": "34. GitHub & Bitbucket MCP"
            },
            {
              "anchor": "workflow",
              "label": "35. Agent workflow: Jira → PR"
            },
            {
              "anchor": "qa",
              "label": "36. Interview Q&A (tap to reveal)"
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "arch",
          "title": "1. Architecture: why Playwright is fast",
          "blocks": [
            {
              "note": "idea",
              "text": "Playwright keeps **one phone call open** with the browser and talks the whole time. Selenium sends **a new letter for every step** and waits for a reply. Playwright also **waits on its own** until a button is ready, like a polite person waiting for the door to open before walking in."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Architecture:** Selenium is sending a **post card** for every instruction; Playwright is **one WhatsApp call kept open** with the browser. **Auto-wait:** An **auto-rickshaw driver waits** till the passenger is fully seated before moving."
            },
            {
              "note": "remember",
              "text": "One open connection + auto-wait + retrying assertions = fast and less flaky."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// open the website\nawait page.goto('https://shop.com');\n// find the \"Buy\" button; Playwright WAITS until it is clickable, then clicks\nawait page.getByRole('button', { name: 'Buy' }).click();\n// keep checking (up to 5 s) until \"Thanks!\" shows\nawait expect(page.getByText('Thanks!')).toBeVisible();",
              "lang": "ts"
            },
            {
              "img": "assets/img/playwright/architecture.svg?v=202610151544",
              "width": 400,
              "height": 586,
              "alt": "Diagram: test code calls the Playwright server (Node driver), which speaks CDP to Chromium or patched protocols to Firefox and WebKit, which drives the browser.",
              "caption": "Test → Playwright server → browser protocol → browser."
            },
            {
              "table": {
                "head": [
                  "",
                  "Playwright",
                  "Selenium"
                ],
                "rows": [
                  [
                    "Connection",
                    "One persistent pipe / WebSocket (CDP for Chromium)",
                    "HTTP request per command (WebDriver)"
                  ],
                  [
                    "Waiting",
                    "**Auto-wait**: visible, enabled, stable before acting",
                    "Manual explicit / implicit waits"
                  ],
                  [
                    "Assertions",
                    "**Web-first**: `expect(locator)` retries",
                    "Assert once, flaky if page is slow"
                  ],
                  [
                    "Isolation",
                    "New BrowserContext per test (ms, cheap)",
                    "New browser per test (slow) or shared state"
                  ],
                  [
                    "Extras",
                    "Network mocking, traces, codegen, API testing built in",
                    "Needs extra libraries"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Picture:** Selenium sends a letter for every command (one HTTP request each). Playwright keeps **one phone line open** to the browser and talks continuously."
                },
                {
                  "list": [
                    "In **Node**, client and server run in the same process. **Python/Java/.NET** start a Node driver and talk over a pipe.",
                    "Remote browsers (`connect`, cloud grids) use a **WebSocket**."
                  ]
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('auto-wait + web-first assertion', async ({ page }) => {\n  await page.goto('https://demo.playwright.dev/todomvc');\n\n  // fill() / click() wait until the element is visible, enabled and stable.\n  // No sleep, no manual wait.\n  await page.getByPlaceholder('What needs to be done?').fill('Buy milk');\n  await page.keyboard.press('Enter');\n\n  // Web-first assertion: retries until it passes (default timeout 5s)\n  await expect(page.getByTestId('todo-title')).toHaveText('Buy milk');\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "contexts",
          "title": "2. Browser → Context → Page",
          "blocks": [
            {
              "note": "idea",
              "text": "The **browser** is the app. A **context** is a fresh **incognito window**: its own cookies, nobody else's. A **page** is one **tab** inside that window."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Browser / Context / Page:** A **housing society** (browser) → each **flat** with its own lock (context) → **rooms** in the flat (pages)."
            },
            {
              "note": "remember",
              "text": "Browser → Context (isolated session) → Page (tab). New context per test = no leaks."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// open a brand-new incognito window\nconst context = await browser.newContext();\n// open one tab in it\nconst page = await context.newPage();\n// use the tab\nawait page.goto('https://shop.com');\n// close the window; its cookies are thrown away\nawait context.close();",
              "lang": "ts"
            },
            {
              "img": "assets/img/playwright/hierarchy.svg?v=202610151544",
              "width": 400,
              "height": 414,
              "alt": "Diagram: one browser contains Context A and Context B; each context has its own cookies and two pages.",
              "caption": "Contexts are isolated like incognito windows."
            },
            {
              "table": {
                "head": [
                  "Object",
                  "What it is",
                  "Create with"
                ],
                "rows": [
                  [
                    "Browser",
                    "The browser process",
                    "`chromium.launch()` / the `browser` fixture"
                  ],
                  [
                    "BrowserContext",
                    "Incognito-like session: cookies, storage, permissions",
                    "`browser.newContext()` / `context` fixture"
                  ],
                  [
                    "Page",
                    "One tab",
                    "`context.newPage()` / `page` fixture"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Picture:** a building (Browser), flats (Contexts, each with its own keys = cookies), and rooms (Pages = tabs)."
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\n// One browser, two isolated \"incognito windows\" = two users at once\ntest('admin and user chat in parallel', async ({ browser }) => {\n  const adminContext = await browser.newContext();   // own cookies + storage\n  const userContext = await browser.newContext();    // completely separate\n\n  const adminPage = await adminContext.newPage();    // a tab inside context 1\n  const userPage = await userContext.newPage();      // a tab inside context 2\n\n  await adminPage.goto('https://example.com/chat');\n  await userPage.goto('https://example.com/chat');\n  // ...admin sends a message, user sees it...\n  await expect(userPage.getByText('Hello from admin')).toBeVisible();\n\n  await adminContext.close();                        // closes its pages too\n  await userContext.close();\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "ts",
          "title": "3. TypeScript basics: async / await",
          "blocks": [
            {
              "note": "idea",
              "text": "The browser is slow compared to your code. `await` means **\"wait here until this finishes\"**. Forget it, and your code runs ahead before the page is ready."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**async / await:** Ordering **chai at a tapri**: you place the order (Promise) and **wait** till the cup is in your hand (await) before you drink."
            },
            {
              "note": "remember",
              "text": "Every Playwright action returns a Promise; always await it. Locators themselves need no await."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// async = this function is allowed to wait\ntest('my test', async ({ page }) => {\n  // await = wait till the page has loaded\n  await page.goto('/login');\n  // no await: a locator is just a description\n  const btn = page.getByRole('button');\n  // await: the click really happens here\n  await btn.click();\n});",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Symbol",
                  "Means"
                ],
                "rows": [
                  [
                    "`async`",
                    "this function can use await"
                  ],
                  [
                    "`await x`",
                    "pause until promise x finishes"
                  ],
                  [
                    "`Promise<T>`",
                    "\"a T will arrive later\""
                  ],
                  [
                    "`(a) => …`",
                    "arrow function, a short function"
                  ],
                  [
                    "`x?.y`",
                    "read y only if x is not null"
                  ],
                  [
                    "`!`",
                    "\"trust me, not null\" (e.g. `process.env.PASS!`)"
                  ],
                  [
                    "`: string`",
                    "type annotation: this must be text"
                  ],
                  [
                    "`Promise.all([…])`",
                    "wait for several things together"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\n// async function = a function that can \"wait\" inside. Every Playwright test is one.\ntest('why await matters', async ({ page }) => {\n  // page.goto returns a Promise (a \"token\": the work will finish later).\n  // await = \"stop here until it is done\".\n  await page.goto('https://demo.playwright.dev/todomvc');\n\n  // ❌ forgetting await: the next line runs before the typing finishes -> flaky or\n  //    \"Target closed\" errors. Turn on the ESLint rule @typescript-eslint/no-floating-promises.\n  // page.getByPlaceholder('What needs to be done?').fill('Milk');\n\n  // ✅ with await\n  await page.getByPlaceholder('What needs to be done?').fill('Milk');\n\n  // Locators are lazy: creating one needs NO await (nothing happens yet)\n  const input = page.getByPlaceholder('What needs to be done?');\n  await input.press('Enter');                         // the action needs await\n\n  // web-first expect on a locator -> await; plain value -> no await\n  await expect(page.getByTestId('todo-title')).toHaveText('Milk');\n  const count: number = await page.getByTestId('todo-item').count(); // \": number\" = type annotation\n  expect(count).toBe(1);\n\n  // run things at the same time with Promise.all (both must finish)\n  const [response] = await Promise.all([\n    page.waitForResponse(r => r.url().includes('todomvc')).catch(() => null), // arrow function: r => ...\n    page.reload(),\n  ]);\n  console.log(response?.status());                    // ?. = \"only if not null\"\n});\n\n// a typed helper: async + return type Promise<void>\nasync function addTodo(page: import('@playwright/test').Page, text: string): Promise<void> {\n  await page.getByPlaceholder('What needs to be done?').fill(text);\n  await page.keyboard.press('Enter');\n}\nexport { addTodo };",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "locators",
          "title": "4. Locators: finding elements",
          "blocks": [
            {
              "note": "idea",
              "text": "A locator is an **address** for an element on the page. Best addresses describe it **like a user would**: \"the button called Buy\", not \"the 3rd div inside the 2nd div\"."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Locators:** Giving a **delivery boy an address**: \"Flat 302, Shanti Apartments\" (role + name) works; \"the third door after the blue gate\" (XPath) breaks when the gate is repainted. **Locator vs ElementHandle:** A locator is the **address** (always finds today's resident); an ElementHandle is a **photo of the person** (wrong after they move out)."
            },
            {
              "note": "remember",
              "text": "Prefer getByRole, getByLabel, getByText, getByTestId; CSS/XPath last. Locators are lazy, strict and auto-waiting."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// the button whose visible name is \"Buy\" (best)\npage.getByRole('button', { name: 'Buy' });\n// the input whose <label> says \"Email\"\npage.getByLabel('Email');\n// element with data-testid=\"cart-total\"\npage.getByTestId('cart-total');\n// the first list row containing \"Mug\"\npage.getByRole('listitem').filter({ hasText: 'Mug' }).first();",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Locator",
                  "Use when"
                ],
                "rows": [
                  [
                    "`getByRole(role, { name })`",
                    "buttons, links, headings, checkboxes (first choice)"
                  ],
                  [
                    "`getByLabel`",
                    "form fields with a label"
                  ],
                  [
                    "`getByPlaceholder`",
                    "inputs with placeholder text"
                  ],
                  [
                    "`getByText`",
                    "non-interactive text"
                  ],
                  [
                    "`getByAltText` / `getByTitle`",
                    "images / title attribute"
                  ],
                  [
                    "`getByTestId`",
                    "devs added `data-testid`"
                  ],
                  [
                    "`locator(css)` / `locator('//xpath')`",
                    "nothing else works"
                  ],
                  [
                    "`.filter({ hasText, has })`",
                    "narrow a list"
                  ],
                  [
                    "`.first() .last() .nth(i)`",
                    "position (0-based), use rarely"
                  ],
                  [
                    "`a.locator(b)` / `a.getByRole(…)`",
                    "chain: search inside a"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('locators, best to worst', async ({ page }) => {\n  await page.goto('https://shop.example.com');\n\n  // 1) BY ROLE: how a user / screen reader sees it (best)\n  page.getByRole('button', { name: 'Add to cart' });\n  page.getByRole('link', { name: /privacy/i });            // regex, case-insensitive\n  page.getByRole('heading', { name: 'Cart', level: 2 });\n  page.getByRole('checkbox', { name: 'Gift wrap' });\n  page.getByRole('textbox', { name: 'Email' });\n\n  // 2) BY TEXT / LABEL / PLACEHOLDER / ALT / TITLE\n  page.getByText('Free delivery');                         // substring match\n  page.getByText('Free delivery', { exact: true });        // whole text, exact case\n  page.getByLabel('Password');                             // <label> linked to the input\n  page.getByPlaceholder('Search products');\n  page.getByAltText('Company logo');                       // <img alt=\"...\">\n  page.getByTitle('Close');\n\n  // 3) BY TEST ID: data-testid=\"cart-total\" (stable, set by devs)\n  page.getByTestId('cart-total');                          // attribute name configurable: use.testIdAttribute\n\n  // 4) CSS and XPath (last resort: break when design changes)\n  page.locator('#login-form .submit');                     // CSS\n  page.locator('xpath=//button[@type=\"submit\"]');          // XPath (or just start with //)\n\n  // FILTER: narrow a list\n  const rows = page.getByRole('listitem');\n  rows.filter({ hasText: 'Mug' });                         // items containing \"Mug\"\n  rows.filter({ hasNotText: 'Sold out' });\n  rows.filter({ has: page.getByRole('button', { name: 'Buy' }) }); // items that contain a Buy button\n\n  // POSITION (avoid if you can: order may change)\n  rows.first(); rows.last(); rows.nth(2);                  // nth is 0-based -> 3rd item\n\n  // CHAINING: search inside another locator\n  const card = page.getByTestId('product-card').filter({ hasText: 'Mug' });\n  await card.getByRole('button', { name: 'Add to cart' }).click();\n\n  // and / or\n  page.getByRole('button').and(page.getByTitle('Subscribe'));\n  page.getByRole('button', { name: 'New' }).or(page.getByText('Confirm'));\n\n  // STRICT: an action on a locator matching 2+ elements throws -> make it unique\n  await expect(page.getByTestId('cart-count')).toHaveText('1');\n});\n\ntest('locator vs elementHandle', async ({ page }) => {\n  await page.goto('https://shop.example.com');\n  // Locator: a \"recipe\", found fresh every time it is used, auto-waits -> USE THIS\n  const buy = page.getByRole('button', { name: 'Buy' });\n  await buy.click();\n  // ElementHandle: a pointer to ONE DOM node found now; goes stale if the page re-renders (discouraged)\n  const handle = await page.$('button.buy');               // may be null\n  await handle?.click();\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "actions",
          "title": "5. Actions: click, type, select, drag",
          "blocks": [
            {
              "note": "idea",
              "text": "Actions are what a user **does**: click, type, tick a box, choose from a dropdown, drag. Before each action Playwright checks the element is visible, enabled and still."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**fill vs pressSequentially:** **fill** = pasting a full address from WhatsApp; **pressSequentially** = typing it letter by letter on a phone keypad."
            },
            {
              "note": "remember",
              "text": "fill() sets the value at once; pressSequentially() types key by key (type() is deprecated). force:true skips checks: last resort."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// clear the box and put \"Akash\" in it\nawait page.getByLabel('Name').fill('Akash');\n// tick the checkbox\nawait page.getByLabel('I agree').check();\n// choose \"Pune\" in the dropdown\nawait page.getByLabel('City').selectOption('Pune');\n// click Save (waits till clickable)\nawait page.getByRole('button', { name: 'Save' }).click();\n// drag one box onto another\nawait page.getByTestId('card').dragTo(page.getByTestId('done'));",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Want",
                  "Code"
                ],
                "rows": [
                  [
                    "type text",
                    "`fill('x')` · `pressSequentially('x', { delay })`"
                  ],
                  [
                    "clear",
                    "`clear()`"
                  ],
                  [
                    "keys",
                    "`press('Enter')` · `keyboard.press('Control+A')`"
                  ],
                  [
                    "double / right click",
                    "`dblclick()` · `click({ button: 'right' })`"
                  ],
                  [
                    "Shift+click",
                    "`click({ modifiers: ['Shift'] })`"
                  ],
                  [
                    "skip checks",
                    "`click({ force: true })` (hides real bugs)"
                  ],
                  [
                    "hover / focus",
                    "`hover()` · `focus()`"
                  ],
                  [
                    "checkbox",
                    "`check()` · `uncheck()` · `setChecked(bool)`"
                  ],
                  [
                    "dropdown",
                    "`selectOption('value' | { label } | [..])`"
                  ],
                  [
                    "scroll",
                    "automatic · `scrollIntoViewIfNeeded()` · `mouse.wheel(0, 800)`"
                  ],
                  [
                    "drag",
                    "`dragTo(target)` or mouse down/move/up"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test } from '@playwright/test';\n\ntest('actions', async ({ page }) => {\n  await page.goto('https://shop.example.com/form');\n  const name = page.getByLabel('Name');\n\n  // TEXT\n  await name.fill('Akash');                         // clears, then sets the value at once (use this)\n  await name.clear();                               // empty the field\n  await name.pressSequentially('Akash', { delay: 100 }); // types key by key (for search-as-you-type). type() is deprecated\n  await name.press('Control+A');                    // one key / shortcut on this element\n  await page.keyboard.press('Backspace');           // keyboard on whatever is focused\n  await page.keyboard.type('Hi');                   // type into the focused element\n  await page.keyboard.down('Shift'); await page.keyboard.up('Shift');\n\n  // CLICKS\n  const btn = page.getByRole('button', { name: 'Save' });\n  await btn.click();\n  await btn.dblclick();                             // double click\n  await btn.click({ button: 'right' });             // right click (context menu)\n  await btn.click({ modifiers: ['Shift'] });        // Shift+click ('Control', 'Alt', 'Meta', 'ControlOrMeta')\n  await btn.click({ position: { x: 5, y: 5 } });    // click a spot inside the element\n  await btn.click({ force: true });                 // skip actionability checks (last resort; hides real bugs)\n  await btn.click({ clickCount: 3 });               // triple click\n\n  // OTHER ACTIONS\n  await page.getByText('Menu').hover();             // mouse over\n  await page.getByLabel('I agree').check();         // tick (no-op if already ticked)\n  await page.getByLabel('Newsletter').uncheck();\n  await page.getByLabel('Gift').setChecked(true);\n  await page.getByLabel('City').selectOption('Pune');             // by value or label\n  await page.getByLabel('City').selectOption({ label: 'Mumbai' });\n  await page.getByLabel('Skills').selectOption(['ts', 'py']);     // multi-select\n  await name.focus();                               // put the cursor there\n  await name.blur();\n  await page.getByText('Footer').scrollIntoViewIfNeeded();        // scroll to it (actions scroll automatically)\n  await page.mouse.wheel(0, 800);                   // scroll the page by 800px\n\n  // DRAG AND DROP\n  await page.getByTestId('task-1').dragTo(page.getByTestId('done-column'));\n  // manual version with the mouse\n  await page.getByTestId('task-2').hover();\n  await page.mouse.down();\n  await page.getByTestId('done-column').hover();\n  await page.mouse.up();\n\n  // MOUSE by coordinates (canvas, maps)\n  await page.mouse.click(200, 150);\n  await page.mouse.move(0, 0);\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "navigation",
          "title": "6. Navigation & waits",
          "blocks": [
            {
              "note": "idea",
              "text": "Moving between pages is like using the browser's address bar and Back button. Playwright **already waits** for most things; you only add a wait for a **specific signal**, never a fixed sleep."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**waitForTimeout vs real waits:** **Fixed sleep** = waiting 10 minutes on the platform \"just in case\"; **real wait** = waiting until the **train announcement** comes."
            },
            {
              "note": "remember",
              "text": "Use goto/reload/goBack, toHaveURL or waitForURL, waitForResponse for API calls; avoid waitForTimeout and networkidle."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// open a page (baseURL + /products)\nawait page.goto('/products');\n// go to the cart\nawait page.getByRole('link', { name: 'Cart' }).click();\n// wait until the address contains \"cart\"\nawait expect(page).toHaveURL(/cart/);\n// press the browser's Back button\nawait page.goBack();\n// ❌ await page.waitForTimeout(3000);         // a fixed sleep: slow and still flaky",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Wait for…",
                  "Use"
                ],
                "rows": [
                  [
                    "an element",
                    "nothing extra (actions + expect auto-wait) · `locator.waitFor()`"
                  ],
                  [
                    "the URL",
                    "`await expect(page).toHaveURL(…)` · `page.waitForURL(…)`"
                  ],
                  [
                    "an API reply",
                    "`const p = page.waitForResponse(…)` before the click, then `await p`"
                  ],
                  [
                    "page load",
                    "`goto` waits for `load` · `waitForLoadState('domcontentloaded')`"
                  ],
                  [
                    "time",
                    "❌ `waitForTimeout`: debugging only"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('navigation and waits', async ({ page }) => {\n  await page.goto('/products');                          // relative to baseURL; waits for \"load\" by default\n  await page.goto('/products', { waitUntil: 'domcontentloaded' }); // 'load' | 'domcontentloaded' | 'networkidle' | 'commit'\n  await page.reload();\n  await page.goBack();                                   // browser Back button\n  await page.goForward();\n\n  // wait for the address bar to change after a click\n  await page.getByRole('link', { name: 'Cart' }).click();\n  await page.waitForURL('**/cart');                      // glob or regex\n  await expect(page).toHaveURL(/\\/cart$/);               // same idea, as an assertion (preferred)\n\n  // load states\n  await page.waitForLoadState('domcontentloaded');\n  await page.waitForLoadState('networkidle');            // no requests for 500ms; discouraged for normal tests\n\n  // wait for a specific API call triggered by a click: start waiting BEFORE the click\n  const respPromise = page.waitForResponse(r => r.url().includes('/api/cart') && r.status() === 200);\n  await page.getByRole('button', { name: 'Add to cart' }).click();\n  const resp = await respPromise;\n  expect((await resp.json()).items).toHaveLength(1);\n\n  // page.waitForRequest('**/api/track') works the same for outgoing requests\n\n  // wait for an element (usually not needed: actions and expect already wait)\n  await page.getByText('Order placed').waitFor({ state: 'visible' });\n\n  // ❌ AVOID: fixed sleep, slow AND still flaky\n  // await page.waitForTimeout(3000);\n  // ✅ wait for the real signal instead\n  await expect(page.getByText('Order placed')).toBeVisible({ timeout: 10_000 });\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "pages",
          "title": "7. Popups, dialogs, frames, many tabs",
          "blocks": [
            {
              "note": "idea",
              "text": "Some clicks open a **new tab** or show a **pop-up message**. Tell Playwright **\"get ready to catch it\"** *before* you click, like holding out your hands before someone throws a ball."
            },
            {
              "note": "remember",
              "text": "Start waitForEvent('popup') before the click; register page.on('dialog') before the action."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// 1. get ready to catch the new tab (don't await yet)\nconst popupPromise = page.waitForEvent('popup');\n// 2. click the link that opens it\nawait page.getByText('Open help').click();\n// 3. now catch it: popup is the new tab\nconst popup = await popupPromise;\n// for alert/confirm boxes: press \"OK\" automatically\npage.on('dialog', d => d.accept());",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "list": [
                    "**Popup / new tab:** start waiting *before* the click: `const p = page.waitForEvent('popup')`.",
                    "**Dialogs** (alert/confirm/prompt) are auto-dismissed unless you add `page.on('dialog')` first.",
                    "**Frames:** `page.frameLocator('#id')` or `locator.contentFrame()`."
                  ]
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('popup / new tab', async ({ page }) => {\n  // 1. Start waiting BEFORE the click (otherwise you can miss the event)\n  const popupPromise = page.waitForEvent('popup');\n  await page.getByRole('link', { name: 'Open terms' }).click();\n  const popup = await popupPromise;                  // 2. the new Page\n\n  await popup.waitForLoadState();\n  await expect(popup).toHaveTitle(/Terms/);\n  await popup.close();\n  await page.bringToFront();                         // back to the first tab\n});\n\ntest('any new page in the context', async ({ page, context }) => {\n  const newPagePromise = context.waitForEvent('page'); // catches window.open, target=_blank...\n  await page.getByText('Open report').click();\n  const report = await newPagePromise;\n  console.log(context.pages().length);               // all open tabs\n  await expect(report).toHaveURL(/report/);\n});\n\ntest('dialogs: alert / confirm / prompt', async ({ page }) => {\n  // Register the handler BEFORE the action. Playwright auto-dismisses if you don't.\n  page.once('dialog', async (dialog) => {\n    console.log(dialog.type(), dialog.message());    // \"confirm\", \"Are you sure?\"\n    await dialog.accept();                           // or dialog.dismiss()\n  });\n  await page.getByRole('button', { name: 'Delete' }).click();\n});\n\ntest('iframes', async ({ page }) => {\n  // frameLocator: find inside the iframe like a normal page\n  const payment = page.frameLocator('iframe[title=\"Payment\"]');\n  await payment.getByLabel('Card number').fill('4242 4242 4242 4242');\n\n  // or get a Frame-like locator from the iframe element\n  const frame = page.locator('#chat-widget').contentFrame();\n  await frame.getByRole('button', { name: 'Send' }).click();\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "tabs",
          "title": "8. Tabs & windows recap",
          "blocks": [
            {
              "note": "idea",
              "text": "Every tab is just another **Page** object. \"Switching\" means using a different variable. All tabs of one context are in `context.pages()`."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Tabs:** Several **TV channels on one remote**: you don't move the TV, you just pick which channel (Page variable) to watch."
            },
            {
              "note": "remember",
              "text": "context.waitForEvent('page') before the click; context.pages() lists tabs; page.close() closes one."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// get ready for a new tab\nconst newTabPromise = context.waitForEvent('page');\n// this opens it\nawait page.getByText('Terms').click();\n// terms = the new tab\nconst terms = await newTabPromise;\n// how many tabs are open (2)\nconsole.log(context.pages().length);\n// close it; keep using page\nawait terms.close();",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('tabs and windows', async ({ page, context }) => {\n  await page.goto('https://shop.example.com');\n\n  // a link with target=_blank opens a new tab: catch it (start waiting before the click)\n  const pagePromise = context.waitForEvent('page');      // any new tab in this context\n  await page.getByRole('link', { name: 'Terms' }).click();\n  const terms = await pagePromise;\n  await terms.waitForLoadState();\n  await expect(terms).toHaveTitle(/Terms/);\n\n  // all open tabs of this context\n  const tabs = context.pages();                          // [page, terms]\n  console.log(tabs.length, tabs.map(t => t.url()));\n\n  // \"switch\" = just use the other Page object. bringToFront only matters for headed demos\n  await page.bringToFront();\n  await page.getByRole('button', { name: 'Accept' }).click();\n\n  // open a new tab yourself\n  const extra = await context.newPage();\n  await extra.goto('https://shop.example.com/help');\n\n  await terms.close();                                   // close one tab\n  await extra.close();\n  expect(context.pages()).toHaveLength(1);\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "upload",
          "title": "9. File upload & download",
          "blocks": [
            {
              "note": "idea",
              "text": "**Upload:** hand the file straight to the file box, no OS window needed. **Download:** say \"I'm expecting a parcel\", click, then receive and save it."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Download:** Telling the **watchman** \"a Flipkart parcel is coming\" before you order, so he catches it at the gate."
            },
            {
              "note": "remember",
              "text": "setInputFiles for upload (filechooser if no input); waitForEvent('download') before the click, then saveAs."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// put the file in the input\nawait page.getByLabel('Upload photo').setInputFiles('data/photo.png');\n// expect a download\nconst downloadPromise = page.waitForEvent('download');\n// start it\nawait page.getByText('Invoice PDF').click();\n// receive it\nconst download = await downloadPromise;\n// save it where we want\nawait download.saveAs('downloads/invoice.pdf');",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\nimport path from 'node:path';\n\ntest('upload and download', async ({ page }) => {\n  await page.goto('https://shop.example.com/profile');\n\n  // UPLOAD: put files straight into <input type=\"file\">\n  const fileInput = page.getByLabel('Upload photo');\n  await fileInput.setInputFiles(path.join(__dirname, 'data/photo.png'));          // one file\n  await fileInput.setInputFiles(['data/a.pdf', 'data/b.pdf']);                      // several (input needs \"multiple\")\n  await fileInput.setInputFiles([]);                                                // clear selection\n  await fileInput.setInputFiles({ name: 'note.txt', mimeType: 'text/plain', buffer: Buffer.from('hello') }); // made in memory\n\n  // UPLOAD when there is no visible input (a button opens the OS picker)\n  const chooserPromise = page.waitForEvent('filechooser');\n  await page.getByRole('button', { name: 'Choose file' }).click();\n  const chooser = await chooserPromise;\n  await chooser.setFiles('data/photo.png');\n\n  // DOWNLOAD: start waiting, click, then save\n  const downloadPromise = page.waitForEvent('download');\n  await page.getByRole('link', { name: 'Invoice PDF' }).click();\n  const download = await downloadPromise;\n  expect(download.suggestedFilename()).toBe('invoice.pdf');\n  await download.saveAs(path.join(test.info().outputDir, download.suggestedFilename())); // keep it\n  console.log(await download.path());                   // temp file path (deleted when the context closes)\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "frames",
          "title": "10. iframes, alerts & shadow DOM",
          "blocks": [
            {
              "note": "idea",
              "text": "An **iframe** is a page inside a page: step into it first with `frameLocator`. **Alerts** must be answered by a listener you set up **before** they appear. **Shadow DOM** (hidden component insides) just works with normal locators."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**iframe:** A **shop inside a mall**: you must first walk into that shop (frameLocator) before picking items off its shelves. **Dialogs:** A **doorbell**: decide in advance who answers it (listener), otherwise nobody opens (auto-dismiss)."
            },
            {
              "note": "remember",
              "text": "frameLocator for iframes; page.on/once('dialog') before the action (default: dismiss); locators pierce open shadow DOM, XPath does not."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// step inside the iframe\nconst pay = page.frameLocator('#payment-iframe');\n// then use normal locators\nawait pay.getByLabel('Card number').fill('4242...');\n// answer the next alert with OK\npage.once('dialog', d => d.accept());\n// this shows the alert\nawait page.getByRole('button', { name: 'Delete' }).click();",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('iframes, dialogs, shadow DOM', async ({ page }) => {\n  await page.goto('https://shop.example.com/checkout');\n\n  // IFRAME: a page inside the page. Step \"into\" it first.\n  const payment = page.frameLocator('#payment-iframe');                 // by CSS of the <iframe>\n  await payment.getByLabel('Card number').fill('4242 4242 4242 4242');\n  // same thing, starting from a normal locator\n  await page.locator('#payment-iframe').contentFrame().getByRole('button', { name: 'Pay' }).click();\n  // nested iframe = chain\n  await page.frameLocator('#outer').frameLocator('#inner').getByText('OK').click();\n\n  // DIALOGS: alert / confirm / prompt / beforeunload. Register BEFORE the action.\n  page.once('dialog', async dialog => {\n    console.log(dialog.type(), dialog.message());                       // 'confirm', 'Delete item?'\n    await dialog.accept();                                              // OK  (dialog.dismiss() = Cancel)\n  });\n  await page.getByRole('button', { name: 'Delete' }).click();\n\n  page.once('dialog', d => d.accept('Akash'));                          // prompt: type an answer\n  await page.getByRole('button', { name: 'Rename' }).click();\n  // without a listener Playwright auto-DISMISSES dialogs\n\n  // SHADOW DOM: locators pierce OPEN shadow roots automatically, nothing special\n  await page.getByRole('button', { name: 'Shadow button' }).click();\n  await page.locator('my-widget .inner-text').click();                  // CSS also pierces\n  // (XPath does NOT pierce shadow roots; closed shadow roots are not reachable)\n  await expect(page.getByText('Done')).toBeVisible();\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "hooks",
          "title": "11. Hooks, describe, annotations, steps & timeouts",
          "blocks": [
            {
              "note": "idea",
              "text": "**Hooks** run code before/after tests, like warming up before a match. **describe** groups tests. **Annotations** label tests: skip, fixme, fail, slow, only. **test.step** gives steps names in the report."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Hooks:** **Net practice before every match** (beforeEach) and **ground cleaning after** (afterEach); the season opening ceremony is beforeAll. **Retries & flaky tests:** A **cricket review**: if the first decision looks wrong, check again (retry) — but if every review is needed, fix the umpire (the test)."
            },
            {
              "note": "remember",
              "text": "beforeAll/afterAll once per worker, beforeEach/afterEach per test; skip/fixme/fail/slow/only; default test timeout 30 s, expect 5 s."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// a group of related tests\ntest.describe('Cart', () => {\n  // runs before EACH test below\n  test.beforeEach(async ({ page }) => {\n    // so every test starts on the cart\n    await page.goto('/cart');\n  });\n  // tagged test\n  test('shows total', { tag: '@smoke' }, async ({ page }) => { /* ... */ });\n  // skipped: known bug to fix\n  test.fixme('coupon bug', async () => {});\n});",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Annotation",
                  "Effect"
                ],
                "rows": [
                  [
                    "`test.skip()`",
                    "do not run (can be conditional)"
                  ],
                  [
                    "`test.fixme()`",
                    "skip, marked as \"to fix\""
                  ],
                  [
                    "`test.fail()`",
                    "expected to fail; passes if it fails"
                  ],
                  [
                    "`test.slow()`",
                    "triple the timeout"
                  ],
                  [
                    "`test.only()`",
                    "run only this (blocked on CI by forbidOnly)"
                  ],
                  [
                    "`{ tag: '@smoke' }`",
                    "filter with `--grep @smoke`"
                  ],
                  [
                    "`test.setTimeout(ms)`",
                    "change this test's timeout"
                  ],
                  [
                    "`describe.configure({ retries })`",
                    "retries for a group"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest.describe('Cart', () => {                        // a group (can nest)\n  test.beforeAll(async () => {                       // once per worker, before the group\n    console.log('seed data');\n  });\n  test.beforeEach(async ({ page }) => {              // before EVERY test in the group\n    await page.goto('/cart');\n  });\n  test.afterEach(async ({ page }, testInfo) => {     // after every test\n    if (testInfo.status !== testInfo.expectedStatus) {\n      await testInfo.attach('failed', { body: await page.screenshot(), contentType: 'image/png' });\n    }\n  });\n  test.afterAll(async () => { console.log('clean up'); });\n\n  test('empty cart message', { tag: '@smoke' }, async ({ page }) => {\n    await test.step('open cart', async () => {       // named step in report + trace\n      await page.getByRole('link', { name: 'Cart' }).click();\n    });\n    await test.step('see message', async () => {\n      await expect(page.getByText('Your cart is empty')).toBeVisible();\n    });\n  });\n\n  // ANNOTATIONS\n  test.skip('not built yet', async () => {});       // skipped\n  test.fixme('known bug JIRA-12', async () => {});   // skipped, marked \"to fix\"\n  test('webkit only issue', async ({ page, browserName }) => {\n    test.skip(browserName === 'webkit', 'feature not on Safari'); // conditional skip\n    test.slow();                                     // triple the timeout\n    test.info().annotations.push({ type: 'issue', description: 'JIRA-34' });\n    await page.goto('/cart');\n  });\n  test('known failing', async () => {\n    test.fail();                                     // expected to fail; passes if it fails\n    expect(1).toBe(2);\n  });\n  // test.only('debug just me', ...)  -> runs ONLY this; forbidOnly: !!process.env.CI blocks it on CI\n});\n\ntest('timeouts and info', async ({ page }, testInfo) => {\n  test.setTimeout(60_000);                           // this test: 60 s (default 30 s)\n  console.log(testInfo.title, testInfo.retry, testInfo.project.name, testInfo.workerIndex);\n  if (testInfo.retry > 0) console.log('this is a retry');\n  await page.goto('/cart', { timeout: 15_000 });     // per-action timeout\n  await expect(page.getByText('Cart')).toBeVisible({ timeout: 10_000 }); // per-assertion\n});\n\n// retries for one group only\ntest.describe('flaky area', () => {\n  test.describe.configure({ retries: 2 });\n  test('payment widget', async ({ page }) => { await page.goto('/pay'); });\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "debugging",
          "title": "12. Screenshots, video, trace & debugging tools",
          "blocks": [
            {
              "note": "idea",
              "text": "When a test fails you want **evidence**: a photo (screenshot), a video, or best of all a **trace**, a time-travel recording of every step with DOM, network and console."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Trace viewer:** The **DRS replay with Hawk-Eye**: go ball by ball, see exactly where it pitched (DOM, network, console at each step)."
            },
            {
              "note": "remember",
              "text": "Trace viewer is the #1 debug tool (trace: on-first-retry, show-trace); --debug or page.pause() opens the Inspector; --ui for UI mode; codegen records."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// photo of the whole page\nawait page.screenshot({ path: 'home.png', fullPage: true });\n// photo of one element\nawait page.getByTestId('cart').screenshot({ path: 'cart.png' });\n// freeze here and open the Inspector (headed)\nawait page.pause();\n// terminal: npx playwright show-trace test-results/.../trace.zip",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Tool",
                  "Command",
                  "Use for"
                ],
                "rows": [
                  [
                    "Trace viewer",
                    "`npx playwright show-trace trace.zip`",
                    "CI failures (best)"
                  ],
                  [
                    "Inspector",
                    "`--debug` or `await page.pause()`",
                    "step through locally"
                  ],
                  [
                    "UI mode",
                    "`--ui`",
                    "watch mode, time travel, pick locators"
                  ],
                  [
                    "Headed",
                    "`--headed` + `slowMo` in launchOptions",
                    "see it happen"
                  ],
                  [
                    "Codegen",
                    "`npx playwright codegen url`",
                    "record actions, find locators"
                  ],
                  [
                    "VS Code",
                    "Playwright Test extension",
                    "run/debug with breakpoints"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test } from '@playwright/test';\n\ntest('screenshots and debugging', async ({ page }) => {\n  await page.goto('https://shop.example.com');\n\n  await page.screenshot({ path: 'shots/home.png' });                    // what is visible now\n  await page.screenshot({ path: 'shots/full.png', fullPage: true });     // the whole long page\n  await page.getByTestId('cart').screenshot({ path: 'shots/cart.png' }); // one element\n  await page.screenshot({ path: 'shots/masked.png', mask: [page.getByTestId('price')] }); // hide parts\n\n  // attach to the HTML report\n  await test.info().attach('home', { body: await page.screenshot(), contentType: 'image/png' });\n\n  // await page.pause();   // stops here and opens the Inspector (works with --headed / --debug)\n});",
                  "lang": "ts"
                },
                {
                  "code": "// playwright.config.ts — what to record\nimport { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    screenshot: 'only-on-failure',  // 'off' | 'on' | 'only-on-failure'\n    video: 'retain-on-failure',     // 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'\n    trace: 'on-first-retry',        // 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'\n  },\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "fixtures",
          "title": "13. Custom fixtures",
          "blocks": [
            {
              "note": "idea",
              "text": "A **fixture** is a **waiter**: he sets the table before you eat (setup), hands you the plate (`use`), and clears the table after (teardown). Your test just says \"I want a plate\"."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Fixture:** A **restaurant waiter** lays the plate before you eat and clears it after. **Test vs worker scope:** A **fresh plate per customer** (test scope) vs **one water jug per table** for the whole meal (worker scope)."
            },
            {
              "note": "remember",
              "text": "test.extend creates fixtures: code before use() = setup, after = teardown."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// make my own \"test\" with an extra fixture\nconst test = base.extend<{ loginPage: LoginPage }>({\n  // this fixture needs the normal page\n  loginPage: async ({ page }, use) => {\n    // hand a ready LoginPage to the test\n    await use(new LoginPage(page));\n  // (code after use() would run after the test = cleanup)\n  },\n});",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Kind",
                  "Lives for",
                  "Use for"
                ],
                "rows": [
                  [
                    "test scope (default)",
                    "one test",
                    "page objects, fresh data"
                  ],
                  [
                    "`{ scope: 'worker' }`",
                    "one worker process",
                    "DB connection, expensive login"
                  ],
                  [
                    "`{ auto: true }`",
                    "runs without being asked",
                    "logging, screenshots on every test"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Picture:** fixtures are a waiter who brings the plate ready (setup), and clears it after (teardown). Code before `use()` = setup, after = teardown."
                },
                {
                  "code": "// fixtures.ts — build your own \"helpers\" that tests can ask for by name\nimport { test as base, expect, type Page } from '@playwright/test';\n\nexport class LoginPage {\n  constructor(private readonly page: Page) {}\n  async goto() { await this.page.goto('/login'); }\n  async login(user: string, pass: string) {\n    await this.page.getByLabel('Username').fill(user);\n    await this.page.getByLabel('Password').fill(pass);\n    await this.page.getByRole('button', { name: 'Sign in' }).click();\n  }\n}\n\ntype TestFixtures = { loginPage: LoginPage; logConsole: void };\ntype WorkerFixtures = { workerUser: { name: string; pass: string } };\n\nexport const test = base.extend<TestFixtures, WorkerFixtures>({\n  // WORKER scope: created once per worker process, shared by all its tests\n  workerUser: [async ({}, use, workerInfo) => {\n    const user = { name: `user${workerInfo.workerIndex}`, pass: 'secret' };\n    await use(user);                 // tests run here\n  }, { scope: 'worker' }],\n\n  // TEST scope (default): a fresh one for every test\n  loginPage: async ({ page }, use) => {\n    const loginPage = new LoginPage(page);\n    await loginPage.goto();          // setup\n    await use(loginPage);            // hand it to the test\n    // teardown goes here (runs after the test)\n  },\n\n  // AUTO fixture: runs for every test, even if no test asks for it\n  logConsole: [async ({ page }, use) => {\n    page.on('console', (msg) => console.log(`[browser] ${msg.text()}`));\n    await use();\n  }, { auto: true }],\n});\n\nexport { expect };",
                  "lang": "ts"
                },
                {
                  "code": "// login.spec.ts — import test/expect from YOUR fixtures file\nimport { test, expect } from './fixtures';\n\ntest('user can log in', async ({ loginPage, workerUser, page }) => {\n  await loginPage.login(workerUser.name, workerUser.pass);\n  await expect(page).toHaveURL(/dashboard/);\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "pom",
          "title": "14. Page Object Model (POM) recap",
          "blocks": [
            {
              "note": "idea",
              "text": "A Page Object is a **class for one screen**. It keeps the locators and actions (\"login\", \"add to cart\") in one place, so tests read like a story and a UI change is fixed in one file."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Page Object Model:** A **TV remote**: you press \"Volume +\" without knowing the circuits inside; if the TV changes, only the remote is rewired."
            },
            {
              "note": "remember",
              "text": "POM = one class per page with locators + actions; tests keep the business assertions; inject POMs via fixtures."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// one class for the login screen\nclass LoginPage {\n  // keep the tab to work on\n  constructor(private page: Page) {}\n  // an action a user can do here\n  async login(email: string, pass: string) {\n    // locators live inside the class\n    await this.page.getByLabel('Email').fill(email);\n    await this.page.getByLabel('Password').fill(pass);\n    await this.page.getByRole('button', { name: 'Sign in' }).click();\n  }\n}",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "// pages/LoginPage.ts — Page Object: the \"how\" of one screen in one place\nimport { type Page, type Locator, expect } from '@playwright/test';\n\nexport class LoginPage {\n  readonly email: Locator;                           // locators as fields (created once, lazy)\n  readonly password: Locator;\n  readonly submit: Locator;\n  readonly error: Locator;\n\n  constructor(private readonly page: Page) {         // \"private readonly page\" = a field set from the argument\n    this.email = page.getByLabel('Email');\n    this.password = page.getByLabel('Password');\n    this.submit = page.getByRole('button', { name: 'Sign in' });\n    this.error = page.getByRole('alert');\n  }\n\n  async goto() { await this.page.goto('/login'); }\n\n  async login(email: string, password: string) {     // one user-level action\n    await this.email.fill(email);\n    await this.password.fill(password);\n    await this.submit.click();\n  }\n\n  async expectError(text: string) {                  // optional helper assertion\n    await expect(this.error).toContainText(text);\n  }\n}",
                  "lang": "ts"
                },
                {
                  "code": "// tests/login.spec.ts — the test reads like plain English\nimport { test, expect } from '@playwright/test';\nimport { LoginPage } from './pom';\n\ntest('wrong password shows an error', async ({ page }) => {\n  const login = new LoginPage(page);                 // build the page object (or get it from a fixture)\n  await login.goto();\n  await login.login('me@test.com', 'wrong');\n  await login.expectError('Invalid password');\n  await expect(page).toHaveURL(/login/);             // business check stays in the test\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "auth",
          "title": "15. Log in once: storageState + setup project",
          "blocks": [
            {
              "note": "idea",
              "text": "**storageState** is like a **hotel key card**. You check in once at the front desk (log in), get a card (a saved file), and every test just taps the card instead of checking in again."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**storageState:** A **hotel key card**: check in once at reception, then just tap the card at your door."
            },
            {
              "note": "remember",
              "text": "A setup project logs in once and saves storageState; other projects load it."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// log in once, like a user\nawait page.getByLabel('Email').fill('me@test.com');\n// password from env, not code\nawait page.getByLabel('Password').fill(process.env.PASS!);\n// press sign in\nawait page.getByRole('button', { name: 'Sign in' }).click();\n// save the \"key card\" file\nawait page.context().storageState({ path: 'playwright/.auth/user.json' });\n// config: use: { storageState: 'playwright/.auth/user.json' }      // every test starts logged in",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "ol": [
                    "A **setup project** logs in and saves cookies + localStorage to a JSON file.",
                    "Other projects depend on it and load that file via `storageState`.",
                    "Every test starts already logged in, no UI login each time."
                  ]
                },
                {
                  "code": "// tests/auth.setup.ts — log in ONCE, save the session to a file\nimport { test as setup, expect } from '@playwright/test';\n\nconst authFile = 'playwright/.auth/user.json';      // add playwright/.auth to .gitignore\n\nsetup('authenticate', async ({ page }) => {\n  await page.goto('/login');\n  await page.getByLabel('Username').fill(process.env.APP_USER!);\n  await page.getByLabel('Password').fill(process.env.APP_PASS!);\n  await page.getByRole('button', { name: 'Sign in' }).click();\n\n  // Wait until we are REALLY logged in before saving\n  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();\n\n  // Saves cookies + localStorage (add { indexedDB: true } to include IndexedDB)\n  await page.context().storageState({ path: authFile });\n});",
                  "lang": "ts"
                },
                {
                  "code": "// playwright.config.ts\nimport { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  testDir: './tests',\n  fullyParallel: true,\n  retries: process.env.CI ? 2 : 0,                  // retry only on CI\n  workers: process.env.CI ? 2 : undefined,\n  reporter: process.env.CI ? [['blob'], ['junit', { outputFile: 'results.xml' }]] : 'html',\n  use: {\n    baseURL: 'https://app.example.com',\n    trace: 'on-first-retry',                         // trace.zip when a test is retried\n    screenshot: 'only-on-failure',\n    video: 'retain-on-failure',\n  },\n  projects: [\n    // 1. runs first: logs in and writes playwright/.auth/user.json\n    { name: 'setup', testMatch: /.*\\.setup\\.ts/ },\n    // 2. every test starts already logged in\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json' },\n      dependencies: ['setup'],\n    },\n  ],\n});",
                  "lang": "ts"
                },
                {
                  "details": "Need a logged-out test?",
                  "blocks": [
                    {
                      "code": "import { test, expect } from '@playwright/test';\n\n// Need a logged-OUT test inside a logged-in project? Reset the state:\ntest.use({ storageState: { cookies: [], origins: [] } });\n\ntest('shows login page', async ({ page }) => {\n  await page.goto('/');\n  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();\n});",
                      "lang": "ts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "storage",
          "title": "16. localStorage & sessionStorage",
          "blocks": [
            {
              "note": "idea",
              "text": "**localStorage** is a notebook the website keeps in the browser, and it stays. **sessionStorage** is a sticky note that disappears when the tab closes. The \"key card\" saves the notebook, **not** the sticky note."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**localStorage vs sessionStorage:** **localStorage** = your **Aadhaar card** in the wallet (stays). **sessionStorage** = a **platform ticket** (valid only for this visit, this tab)."
            },
            {
              "note": "remember",
              "text": "storageState saves cookies + localStorage, NOT sessionStorage."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// run code INSIDE the page: write to its notebook\nawait page.evaluate(() => localStorage.setItem('theme', 'dark'));\n// read it back -> 'dark'\nconst t = await page.evaluate(() => localStorage.getItem('theme'));\n// run BEFORE the site's own code, on every load\nawait page.addInitScript(() => sessionStorage.setItem('cart', '2'));",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Remember:** `storageState` saves **cookies + localStorage** (and optionally IndexedDB), **not sessionStorage**. Save/restore sessionStorage yourself with `evaluate` + `addInitScript`."
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('localStorage + sessionStorage', async ({ page, context }) => {\n  // addInitScript runs BEFORE the page's own scripts, on every navigation\n  await context.addInitScript(() => {\n    window.localStorage.setItem('theme', 'dark');\n    window.sessionStorage.setItem('onboardingSeen', 'true');\n  });\n  await page.goto('/');\n\n  // READ: page.evaluate runs code inside the browser and returns the result\n  const theme = await page.evaluate(() => localStorage.getItem('theme'));\n  expect(theme).toBe('dark');\n\n  // SET after load (pass values in as an argument)\n  await page.evaluate(([key, value]) => sessionStorage.setItem(key, value), ['cart', '3']);\n\n  // Dump everything\n  const session = await page.evaluate(() => JSON.stringify(sessionStorage));\n  console.log(session);                     // {\"onboardingSeen\":\"true\",\"cart\":\"3\"}\n});",
                  "lang": "ts"
                },
                {
                  "details": "Save & restore sessionStorage",
                  "blocks": [
                    {
                      "code": "// sessionStorage is NOT in storageState. Save and restore it yourself:\nimport fs from 'node:fs';\nimport type { Page, BrowserContext } from '@playwright/test';\n\nexport async function saveSession(page: Page) {\n  const data = await page.evaluate(() => JSON.stringify(sessionStorage));\n  fs.writeFileSync('playwright/.auth/session.json', data, 'utf-8');\n}\n\nexport async function restoreSession(context: BrowserContext, origin: string) {\n  const data = JSON.parse(fs.readFileSync('playwright/.auth/session.json', 'utf-8'));\n  await context.addInitScript(({ data, origin }) => {\n    if (window.location.origin === origin) {            // only on your app's origin\n      for (const [key, value] of Object.entries(data)) {\n        window.sessionStorage.setItem(key, value as string);\n      }\n    }\n  }, { data, origin });\n}",
                      "lang": "ts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "api",
          "title": "17. API testing",
          "blocks": [
            {
              "note": "idea",
              "text": "Sometimes you don't need to open the shop window; you just **phone the shop** and ask. The `request` fixture talks to the server directly, with no browser, so it is very fast."
            },
            {
              "note": "remember",
              "text": "The request fixture (APIRequestContext) sends HTTP calls; check with expect(res).toBeOK()."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// ask the server to create a user\nconst res = await request.post('/api/users', { data: { name: 'Akash' } });\n// status is 200-299 = success\nawait expect(res).toBeOK();\n// read the reply as a JS object\nconst user = await res.json();\n// check what came back\nexpect(user.name).toBe('Akash');",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "The `request` fixture is an **APIRequestContext**: send HTTP without a browser. It shares `baseURL` and, via `page.request`, the page's cookies."
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest.use({\n  baseURL: 'https://api.example.com',\n  extraHTTPHeaders: { Authorization: `Bearer ${process.env.API_TOKEN}` },  // token from env, never hard-coded\n});\n\ntest('users CRUD', async ({ request }) => {\n  // CREATE\n  const created = await request.post('/users', { data: { name: 'Akash', job: 'SDET' } });\n  expect(created.status()).toBe(201);\n  const { id } = await created.json();\n\n  // READ\n  const read = await request.get(`/users/${id}`);\n  await expect(read).toBeOK();                       // status 200-299\n  expect(await read.json()).toMatchObject({ name: 'Akash' });\n\n  // UPDATE\n  const updated = await request.put(`/users/${id}`, { data: { job: 'Lead SDET' } });\n  await expect(updated).toBeOK();\n\n  // DELETE\n  const deleted = await request.delete(`/users/${id}`);\n  expect(deleted.status()).toBe(204);\n});",
                  "lang": "ts"
                },
                {
                  "details": "Own APIRequestContext (token, base URL)",
                  "blocks": [
                    {
                      "code": "// A standalone APIRequestContext (e.g. in globalSetup or a helper)\nimport { request } from '@playwright/test';\n\nexport async function createUser(name: string) {\n  const api = await request.newContext({\n    baseURL: 'https://api.example.com',\n    extraHTTPHeaders: { Authorization: `Bearer ${process.env.API_TOKEN}` },\n  });\n  const res = await api.post('/users', { data: { name } });\n  const user = await res.json();\n  await api.dispose();                               // always clean up\n  return user;\n}",
                      "lang": "ts"
                    }
                  ]
                },
                {
                  "text": "**Mix UI + API:** create data by API (fast), check it in the UI."
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\n// Fast setup through the API, then check the UI\ntest('order created by API shows in UI', async ({ page }) => {\n  // page.request shares cookies with the page's context (same logged-in user)\n  const res = await page.request.post('/api/orders', { data: { item: 'Laptop', qty: 1 } });\n  const order = await res.json();\n\n  await page.goto(`/orders/${order.id}`);\n  await expect(page.getByRole('heading', { name: 'Laptop' })).toBeVisible();\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "mock",
          "title": "18. Network mocking: page.route & HAR",
          "blocks": [
            {
              "note": "idea",
              "text": "`page.route` is a **post-office clerk** who opens the website's letters. He can hand back a **fake reply** (fulfill), **throw it away** (abort), or **change** the real reply before it arrives."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**page.route mocking:** A **society security guard** checks every delivery: lets it in, sends it back, or swaps the parcel. **HAR replay:** A **recorded cricket match** on replay: the same balls, same shots, no live players needed."
            },
            {
              "note": "remember",
              "text": "page.route + fulfill / abort / continue / fetch; routeFromHAR replays recorded traffic."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// catch every request to /api/products\nawait page.route('**/api/products', route =>\n  // answer with my fake data; the real server is never asked\n  route.fulfill({ json: [{ name: 'Fake Mug' }] })\n);\n// block all images (faster tests)\nawait page.route('**/*.png', route => route.abort());",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Want",
                  "Use"
                ],
                "rows": [
                  [
                    "Fake response",
                    "`route.fulfill({ json })`"
                  ],
                  [
                    "Block (images, ads)",
                    "`route.abort()`"
                  ],
                  [
                    "Change real response",
                    "`route.fetch()` then `fulfill({ response, json })`"
                  ],
                  [
                    "Change request",
                    "`route.continue({ headers })`"
                  ],
                  [
                    "Replay recorded traffic",
                    "`page.routeFromHAR('x.har', { update })`"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('mocking with page.route', async ({ page }) => {\n  // 1. FULFILL: return fake data, the real server is never called\n  await page.route('**/api/users', (route) =>\n    route.fulfill({ status: 200, json: [{ id: 1, name: 'Mocked user' }] }));\n\n  // 2. ABORT: block images to speed tests up\n  await page.route(/\\.(png|jpe?g|gif)$/, (route) => route.abort());\n\n  // 3. MODIFY: call the real server, change part of the answer\n  await page.route('**/api/profile', async (route) => {\n    const response = await route.fetch();            // real response\n    const json = await response.json();\n    json.plan = 'PREMIUM';                           // patch one field\n    await route.fulfill({ response, json });\n  });\n\n  await page.goto('/users');\n  await expect(page.getByText('Mocked user')).toBeVisible();\n});\n\ntest('HAR replay', async ({ page }) => {\n  // update: true records a fresh HAR on the first run; false replays it\n  await page.routeFromHAR('hars/api.har', { url: '**/api/**', update: false });\n  await page.goto('/dashboard');\n  await expect(page.getByText('Total orders')).toBeVisible();\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "assertions",
          "title": "19. Assertions cheat sheet",
          "blocks": [
            {
              "note": "idea",
              "text": "Two kinds of checks. **Web-first** checks are **patient**: they keep looking until it's true (up to 5 s), like waiting for toast to pop. **Normal** checks look **once**, like reading a number on paper."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Web-first vs generic:** A **third umpire** who keeps replaying till the decision is clear (web-first) vs a **scoreboard** you read once (generic). **Soft assertion:** A **teacher marks all mistakes** in the paper instead of stopping at the first one. **expect.poll / toPass:** Calling the **railway enquiry** again and again till it says \"train arrived\" (poll); retrying a **whole recipe** till the dish comes out right (toPass)."
            },
            {
              "note": "remember",
              "text": "await expect(locator) retries; expect(value) checks once. Use expect.soft to keep going."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// patient: keeps checking until \"Saved\" appears\nawait expect(page.getByText('Saved')).toBeVisible();\n// patient: waits until the address has \"dashboard\"\nawait expect(page).toHaveURL(/dashboard/);\n// once: plain values need no await\nexpect(2 + 2).toBe(4);\n// soft: note the failure but don't stop the test\nawait expect.soft(page.getByText('Hi')).toBeVisible();",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Type",
                  "Examples",
                  "Retries?"
                ],
                "rows": [
                  [
                    "Web-first (page/locator)",
                    "`toBeVisible` `toBeHidden` `toBeEnabled` `toBeChecked` `toHaveText` `toContainText` `toHaveValue` `toHaveAttribute` `toHaveCount` `toHaveClass` `toHaveURL` `toHaveTitle`",
                    "✅ yes, until timeout (5s)"
                  ],
                  [
                    "Generic (values)",
                    "`toBe` `toEqual` `toContain` `toMatchObject` `toHaveLength` `toBeTruthy`",
                    "❌ checks once"
                  ],
                  [
                    "Negation",
                    "`expect(x).not.toBeVisible()`",
                    "same as the matcher"
                  ],
                  [
                    "Soft",
                    "`expect.soft(...)` keeps running, fails at end",
                    "same as the matcher"
                  ],
                  [
                    "Poll / block",
                    "`expect.poll(fn).toBe(v)` · `expect(async()=>{...}).toPass()`",
                    "✅ yes"
                  ],
                  [
                    "Visual",
                    "`toHaveScreenshot()` (update with `-u`)",
                    "✅ until stable"
                  ],
                  [
                    "API",
                    "`expect(response).toBeOK()` (2xx)",
                    "❌"
                  ],
                  [
                    "Custom",
                    "`expect.extend({ toHaveAmount })`",
                    "you decide"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Rule:** `await` + locator = retries. Plain value = no retry. Never `expect(await loc.isVisible()).toBe(true)`; use `await expect(loc).toBeVisible()`."
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\ntest('assertion types', async ({ page, request }) => {\n  await page.goto('https://demo.playwright.dev/todomvc');\n  const input = page.getByPlaceholder('What needs to be done?');\n\n  // 1) WEB-FIRST: await + locator -> retries until true (default 5s)\n  await expect(page).toHaveURL(/todomvc/);\n  await expect(page).toHaveTitle(/TodoMVC/);\n  await expect(input).toBeVisible();\n  await expect(input).toBeEnabled();\n  await expect(input).toHaveAttribute('placeholder', 'What needs to be done?');\n  await input.fill('Milk');\n  await expect(input).toHaveValue('Milk');\n  await input.press('Enter');\n  await expect(page.getByTestId('todo-title')).toHaveText(['Milk']);\n  await expect(page.getByTestId('todo-item')).toHaveCount(1);\n  await expect(page.getByTestId('todo-title')).toContainText('Mil');\n\n  // 2) NEGATION: .not also retries (waits until it's NOT true)\n  await expect(page.getByText('Bread')).not.toBeVisible();\n\n  // 3) CUSTOM TIMEOUT for one slow check\n  await expect(page.getByTestId('todo-count')).toBeVisible({ timeout: 10_000 });\n\n  // 4) GENERIC: plain values, checked ONCE, no await needed\n  const items = await page.getByTestId('todo-title').allTextContents();\n  expect(items.length).toBe(1);               // === for primitives\n  expect(items).toEqual(['Milk']);            // deep equality for arrays/objects\n  expect(items).toContain('Milk');\n  expect({ id: 1, name: 'x' }).toMatchObject({ id: 1 }); // partial match\n\n  // 5) SOFT: records the failure but keeps going; test fails at the end\n  await expect.soft(page.getByTestId('todo-count')).toContainText('1 item');\n  expect.soft(items).toHaveLength(1);\n\n  // 6) POLL: retry ANY async function until its value matches\n  await expect.poll(async () => {\n    const r = await request.get('https://api.example.com/job/42');\n    return (await r.json()).status;\n  }, { timeout: 30_000, intervals: [1_000, 2_000, 5_000] }).toBe('done');\n\n  // 7) toPass: retry a whole BLOCK until nothing inside throws\n  await expect(async () => {\n    const r = await request.get('https://api.example.com/health');\n    expect(r.status()).toBe(200);\n  }).toPass({ timeout: 20_000 });\n\n  // 8) API response: status 200-299\n  const res = await request.get('https://api.example.com/users');\n  await expect(res).toBeOK();\n\n  // 9) VISUAL: compare with a saved PNG (first run creates it; update with -u)\n  await expect(page).toHaveScreenshot('home.png', { maxDiffPixels: 100 });\n  await expect(input).toHaveScreenshot();\n});",
                  "lang": "ts"
                },
                {
                  "details": "Custom matcher with expect.extend",
                  "blocks": [
                    {
                      "code": "// matchers.ts — your own assertion: expect(locator).toHaveAmount(499)\nimport { expect as base, type Locator } from '@playwright/test';\n\nexport const expect = base.extend({\n  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {\n    let actual: number | undefined;\n    let pass = false;\n    try {\n      // reuse a web-first assertion so it retries\n      await base(async () => {\n        actual = Number((await locator.innerText()).replace(/[^\\d.]/g, ''));\n        base(actual).toBe(expected);\n      }).toPass({ timeout: options?.timeout ?? 5_000 });\n      pass = true;\n    } catch { pass = false; }\n    return {\n      pass,\n      name: 'toHaveAmount',\n      message: () => `expected amount ${expected}, got ${actual}`,\n    };\n  },\n});\n// usage: import { expect } from './matchers';  await expect(page.getByTestId('total')).toHaveAmount(499);",
                      "lang": "ts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "emulation",
          "title": "20. Geolocation & emulation",
          "blocks": [
            {
              "note": "idea",
              "text": "Playwright can **pretend** the browser is somewhere else: another city (geolocation), another country (locale, timezone), or another phone (devices). Like a costume for the browser."
            },
            {
              "note": "remember",
              "text": "Set geolocation + permissions on the context; devices['iPhone 15'] for phones."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "const context = await browser.newContext({\n  // pretend we are in Dubai\n  geolocation: { latitude: 25.2, longitude: 55.27 },\n  // say \"yes\" to \"allow location?\"\n  permissions: ['geolocation'],\n  // language format + clock\n  locale: 'en-IN', timezoneId: 'Asia/Kolkata',\n});",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect, devices } from '@playwright/test';\n\n// Per file: pretend to be in Dubai, in Arabic/English, Dubai time\ntest.use({\n  geolocation: { latitude: 25.2048, longitude: 55.2708 },  // Dubai\n  permissions: ['geolocation'],         // without this, the site's location request is denied\n  locale: 'en-AE',                      // navigator.language, number/date formats\n  timezoneId: 'Asia/Dubai',             // Date() inside the page uses Dubai time\n});\n\ntest('shows nearest store', async ({ page, context }) => {\n  await page.goto('https://example.com/stores');\n  await expect(page.getByText('Dubai Mall')).toBeVisible();\n\n  // Move the \"phone\" mid-test\n  await context.setGeolocation({ latitude: 22.5726, longitude: 88.3639 });  // Kolkata\n  await page.getByRole('button', { name: 'Refresh location' }).click();\n  await expect(page.getByText('Park Street')).toBeVisible();\n});\n\ntest('grant permission only for one site', async ({ context }) => {\n  await context.clearPermissions();\n  await context.grantPermissions(['geolocation'], { origin: 'https://example.com' });\n});\n\n// Emulate a whole device: viewport, userAgent, touch, deviceScaleFactor\ntest.describe('on iPhone', () => {\n  test.use({ ...devices['iPhone 15'] });\n  test('mobile menu', async ({ page, isMobile }) => {\n    await page.goto('https://example.com');\n    expect(isMobile).toBe(true);\n  });\n});",
                  "lang": "ts"
                },
                {
                  "details": "Same settings in config",
                  "blocks": [
                    {
                      "code": "// The same emulation for a whole project in playwright.config.ts\nimport { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  projects: [\n    { name: 'desktop-india', use: { ...devices['Desktop Chrome'], locale: 'en-IN', timezoneId: 'Asia/Kolkata' } },\n    {\n      name: 'mobile-dubai',\n      use: {\n        ...devices['Pixel 7'],\n        locale: 'en-AE',\n        timezoneId: 'Asia/Dubai',\n        geolocation: { latitude: 25.2048, longitude: 55.2708 },\n        permissions: ['geolocation'],\n        colorScheme: 'dark',            // also: offline: true, javaScriptEnabled: false ...\n      },\n    },\n  ],\n});",
                      "lang": "ts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "quality",
          "title": "21. Visual, accessibility, mobile, browsers, headless",
          "blocks": [
            {
              "note": "idea",
              "text": "**Visual test:** compare today's screenshot with a saved \"golden\" one. **Accessibility (a11y):** check the page works for people using screen readers, with axe. **Projects** run the same tests on Chrome, Firefox, Safari engine and phones. **Headless** = no window (fast, CI); **headed** = you can see it."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Visual testing:** **Spot the difference** puzzle in the newspaper: compare two pictures pixel by pixel. **Headless vs headed:** A **radio commentary** (headless: it happens, you don't see it) vs **watching on TV** (headed)."
            },
            {
              "note": "remember",
              "text": "toHaveScreenshot (update with -u); @axe-core/playwright AxeBuilder.analyze(); devices[] for phones; projects for browsers; headless by default, --headed to watch."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// compare with the saved picture\nawait expect(page).toHaveScreenshot('home.png');\n// run accessibility rules on the page\nconst r = await new AxeBuilder({ page }).analyze();\n// expect zero problems\nexpect(r.violations).toEqual([]);\n// config: projects: [{ name: 'iphone', use: { ...devices['iPhone 15'] } }] // run as an iPhone",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Engine",
                  "Real browser"
                ],
                "rows": [
                  [
                    "chromium",
                    "Chrome, Edge (`channel: 'chrome' | 'msedge'`)"
                  ],
                  [
                    "firefox",
                    "Firefox"
                  ],
                  [
                    "webkit",
                    "Safari's engine (works on Linux/Windows too)"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\nimport AxeBuilder from '@axe-core/playwright';      // npm i -D @axe-core/playwright\n\ntest('visual check', async ({ page }) => {\n  await page.goto('https://shop.example.com');\n  // 1st run saves the \"golden\" image; later runs compare pixel by pixel\n  await expect(page).toHaveScreenshot('home.png', {\n    fullPage: true,\n    maxDiffPixelRatio: 0.01,                         // allow 1% difference\n    mask: [page.getByTestId('live-time')],           // hide parts that always change\n    animations: 'disabled',\n  });\n  // update goldens on purpose: npx playwright test --update-snapshots\n});\n\ntest('accessibility check', async ({ page }) => {\n  await page.goto('https://shop.example.com');\n  const results = await new AxeBuilder({ page })\n    .withTags(['wcag2a', 'wcag2aa'])                 // which rules\n    .exclude('#third-party-chat')                    // skip what you don't own\n    .analyze();\n  expect(results.violations).toEqual([]);            // no a11y problems\n});\n\ntest('aria snapshot', async ({ page }) => {\n  await page.goto('https://shop.example.com');\n  await expect(page.getByRole('navigation')).toMatchAriaSnapshot(`\n    - link \"Home\"\n    - link \"Cart\"\n  `);\n});",
                  "lang": "ts"
                },
                {
                  "code": "// playwright.config.ts — many browsers + phones + headed/headless\nimport { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  use: { headless: true },                           // default; CLI --headed shows the window\n  projects: [\n    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },\n    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },\n    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },   // Safari's engine\n    { name: 'chrome',   use: { ...devices['Desktop Chrome'], channel: 'chrome' } }, // real Google Chrome\n    { name: 'edge',     use: { ...devices['Desktop Edge'], channel: 'msedge' } },\n    { name: 'iphone',   use: { ...devices['iPhone 15'] } },        // viewport, userAgent, touch, isMobile\n    { name: 'android',  use: { ...devices['Pixel 7'] } },\n  ],\n});\n// npx playwright test --project=iphone --headed",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "datadriven",
          "title": "22. Data-driven tests",
          "blocks": [
            {
              "note": "idea",
              "text": "**Same recipe, different ingredients.** Write the test once and run it for every row of data, like a teacher using one question paper for every student."
            },
            {
              "note": "remember",
              "text": "Loop over an array and create one test per row, with unique titles."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// the \"ingredients\"\nconst users = ['admin', 'guest'];\n// for each one...\nfor (const u of users) {\n  // ...make a test; the title must be unique\n  test(`login as ${u}`, async ({ page }) => {\n    // use the data inside the test\n    await page.goto(`/login?as=${u}`);\n  });\n}",
              "lang": "ts"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "list": [
                    "**Loop** over an array: one test per row, titles must be unique.",
                    "**`test.describe`** per dataset to group.",
                    "**Parameterized projects**: an option fixture `{ option: true }` set per project."
                  ]
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\n// 1. A data array -> one test per row (names must be unique!)\nconst logins = [\n  { user: 'admin', pass: 'admin123', ok: true },\n  { user: 'admin', pass: 'wrong', ok: false },\n  { user: '', pass: 'admin123', ok: false },\n];\n\nfor (const { user, pass, ok } of logins) {\n  test(`login \"${user || '(empty)'}\" / \"${pass}\" -> ${ok ? 'success' : 'error'}`, async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Username').fill(user);\n    await page.getByLabel('Password').fill(pass);\n    await page.getByRole('button', { name: 'Sign in' }).click();\n    if (ok) await expect(page).toHaveURL(/dashboard/);\n    else await expect(page.getByRole('alert')).toBeVisible();\n  });\n}\n\n// 2. One describe block per dataset (each gets its own hooks and report group)\nconst markets = [\n  { name: 'India', currency: '₹', path: '/in' },\n  { name: 'UAE', currency: 'AED', path: '/ae' },\n];\n\nfor (const market of markets) {\n  test.describe(`checkout in ${market.name}`, () => {\n    test.beforeEach(async ({ page }) => { await page.goto(market.path); });\n\n    test('shows local currency', async ({ page }) => {\n      await expect(page.getByTestId('price').first()).toContainText(market.currency);\n    });\n  });\n}",
                  "lang": "ts"
                },
                {
                  "details": "Parameterized projects",
                  "blocks": [
                    {
                      "code": "// options.ts — 3. Parameterized PROJECTS: one option, a different value per project\nimport { test as base } from '@playwright/test';\n\nexport type TestOptions = { userRole: string };\n\nexport const test = base.extend<TestOptions>({\n  userRole: ['viewer', { option: true }],   // default value, overridable in config\n});\nexport { expect } from '@playwright/test';",
                      "lang": "ts"
                    },
                    {
                      "code": "// playwright.config.ts — the SAME tests run once per role\nimport { defineConfig } from '@playwright/test';\nimport type { TestOptions } from './options';\n\nexport default defineConfig<TestOptions>({\n  projects: [\n    { name: 'as-admin', use: { userRole: 'admin' } },\n    { name: 'as-viewer', use: { userRole: 'viewer' } },\n  ],\n});",
                      "lang": "ts"
                    },
                    {
                      "code": "import { test, expect } from './options';\n\ntest('menu matches the role', async ({ page, userRole }) => {\n  await page.goto(`/login-as/${userRole}`);\n  const settings = page.getByRole('link', { name: 'Settings' });\n  if (userRole === 'admin') await expect(settings).toBeVisible();\n  else await expect(settings).toBeHidden();\n});",
                      "lang": "ts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "files",
          "title": "23. Test data from files & .env",
          "blocks": [
            {
              "note": "idea",
              "text": "Keep test data **outside the code**, in files, like keeping recipes in a recipe book instead of memorising them. Passwords live in a **.env** file that is never shared."
            },
            {
              "note": "remember",
              "text": "JSON via import, CSV via csv-parse, Excel via xlsx, secrets via .env + process.env."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// read JSON like a normal JS file\nimport users from './data/users.json';\n// load the .env file into process.env\nimport 'dotenv/config';\n// read a secret from the environment\nconst pass = process.env.APP_PASS;\n// use the data\nconsole.log(users[0].username, !!pass);",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Source",
                  "How"
                ],
                "rows": [
                  [
                    "JSON",
                    "`import users from './data/users.json'` (resolveJsonModule)"
                  ],
                  [
                    "CSV",
                    "`parse(fs.readFileSync(f), { columns: true })` from csv-parse/sync"
                  ],
                  [
                    "Excel",
                    "`XLSX.readFile(f)` + `sheet_to_json` (npm xlsx is old; SheetJS ships newer builds from its own CDN)"
                  ],
                  [
                    ".env",
                    "`dotenv.config({ path: `.env.${TEST_ENV}` })` then `process.env.X`"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "import { test, expect } from '@playwright/test';\nimport fs from 'node:fs';\nimport path from 'node:path';\nimport { parse } from 'csv-parse/sync';               // npm i -D csv-parse\nimport * as XLSX from 'xlsx';                          // npm i -D xlsx (SheetJS)\nimport users from './data/users.json';                // needs \"resolveJsonModule\": true\n\ntype User = { username: string; password: string; role: string };\n\n// 1. JSON: import it directly (typed, checked at compile time)\nfor (const u of users as User[]) {\n  test(`json: ${u.username} can log in`, async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Username').fill(u.username);\n  });\n}\n\n// 2. CSV: read the file, turn rows into objects using the header line\nconst csvRows: User[] = parse(fs.readFileSync(path.join(__dirname, 'data/users.csv')), {\n  columns: true,                 // first line = keys\n  skip_empty_lines: true,\n  trim: true,\n});\nfor (const row of csvRows) {\n  test(`csv: ${row.username} has role ${row.role}`, async ({ request }) => {\n    const res = await request.get(`/api/users/${row.username}`);\n    expect((await res.json()).role).toBe(row.role);\n  });\n}\n\n// 3. Excel: first sheet -> array of objects (header row = keys)\nconst workbook = XLSX.readFile(path.join(__dirname, 'data/users.xlsx'));\nconst sheet = workbook.Sheets[workbook.SheetNames[0]];\nconst excelRows = XLSX.utils.sheet_to_json<User>(sheet);\nfor (const row of excelRows) {\n  test(`excel: ${row.username}`, async ({ page }) => {\n    await page.goto(`/profile/${row.username}`);\n  });\n}",
                  "lang": "ts"
                },
                {
                  "code": "// playwright.config.ts — 4. .env files + one config for every environment\nimport { defineConfig } from '@playwright/test';\nimport dotenv from 'dotenv';                           // npm i -D dotenv\nimport path from 'node:path';\n\n// TEST_ENV=qa npx playwright test   -> loads .env.qa\nconst env = process.env.TEST_ENV ?? 'qa';\ndotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });\n\nexport default defineConfig({\n  use: {\n    baseURL: process.env.BASE_URL,                     // from .env.qa / .env.staging\n    extraHTTPHeaders: { 'x-api-key': process.env.API_KEY ?? '' },\n  },\n});\n\n/* .env.qa   (add .env* to .gitignore, never commit secrets)\nBASE_URL=https://qa.example.com\nAPP_USER=qa_user\nAPP_PASS=<qa-password>\nAPI_KEY=<qa-api-key>\n*/",
                  "lang": "ts"
                },
                {
                  "details": "Test-data fixture",
                  "blocks": [
                    {
                      "code": "// data-fixture.ts — 5. a fixture that hands each test its data\nimport { test as base } from '@playwright/test';\nimport fs from 'node:fs';\nimport path from 'node:path';\n\ntype User = { username: string; password: string; role: string };\ntype Data = { users: Record<string, User> };\n\nexport const test = base.extend<{ testData: Data; admin: User }>({\n  // read the JSON for the current environment once per test\n  testData: async ({}, use) => {\n    const env = process.env.TEST_ENV ?? 'qa';\n    const file = path.join(__dirname, `data/${env}.json`);   // data/qa.json, data/staging.json\n    await use(JSON.parse(fs.readFileSync(file, 'utf-8')));\n  },\n  // a fixture can use another fixture\n  admin: async ({ testData }, use) => {\n    await use(testData.users.admin);\n  },\n});\nexport { expect } from '@playwright/test';",
                      "lang": "ts"
                    },
                    {
                      "code": "import { test, expect } from './data-fixture';\n\ntest('admin sees settings', async ({ page, admin }) => {\n  await page.goto('/login');\n  await page.getByLabel('Username').fill(admin.username);\n  await page.getByLabel('Password').fill(admin.password);\n  await page.getByRole('button', { name: 'Sign in' }).click();\n  await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible();\n});",
                      "lang": "ts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "run",
          "title": "24. Run commands cheat sheet",
          "blocks": [
            {
              "note": "idea",
              "text": "These are the **buttons on the remote control**: run everything, run one file, run only the smoke tests, show the browser, slow it down to debug."
            },
            {
              "note": "remember",
              "text": "-g filters by title, --grep @tag by tag, --ui to explore, --debug to step through."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# run every test\nnpx playwright test\n# run one file\nnpx playwright test login.spec.ts\n# run only tests tagged @smoke\nnpx playwright test --grep @smoke\n# open the friendly UI mode\nnpx playwright test --ui",
              "lang": "bash"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "npx playwright test                            # run ALL tests (headless, parallel)\nnpx playwright test tests/login.spec.ts        # one file\nnpx playwright test tests/login.spec.ts:42     # the test on line 42\nnpx playwright test login cart                 # files whose path contains \"login\" or \"cart\"\nnpx playwright test -g \"add to cart\"           # titles matching text/regex (--grep)\nnpx playwright test --grep-invert \"slow\"       # everything EXCEPT matches\nnpx playwright test --grep @smoke              # by tag\nnpx playwright test --grep \"@smoke|@sanity\"    # tag A or tag B\nnpx playwright test --project=chromium         # one project (repeat flag for more)\nnpx playwright test --headed                   # see the browser\nnpx playwright test --debug                    # Inspector: step line by line\nnpx playwright test --ui                       # UI mode: watch + time travel\nnpx playwright test --workers=4                # 4 parallel processes (--workers=1 = serial)\nnpx playwright test --retries=2                # retry failures\nnpx playwright test --repeat-each=10           # run each test 10x (flaky hunt)\nnpx playwright test --shard=1/4                # part 1 of 4 (one CI machine)\nnpx playwright test --last-failed              # only last run's failures\nnpx playwright test --update-snapshots         # accept new screenshots (-u)\nnpx playwright test --list                     # list tests, don't run\nnpx playwright test --reporter=dot             # override reporter\nnpx playwright test --max-failures=5 -x        # stop after 5 failures (-x = after 1)",
                  "lang": "bash"
                },
                {
                  "details": "Tags in code",
                  "blocks": [
                    {
                      "code": "import { test, expect } from '@playwright/test';\n\n// tag in the title ...\ntest('login works @smoke', async ({ page }) => {\n  await page.goto('https://demo.playwright.dev/todomvc');\n  await expect(page).toHaveTitle(/TodoMVC/);\n});\n\n// ... or with the tag option (same effect)\ntest('full order flow', { tag: ['@regression', '@slow'] }, async ({ page }) => {\n  await page.goto('https://demo.playwright.dev/todomvc');\n});\n// run: npx playwright test --grep @smoke\n//      npx playwright test --grep-invert @slow",
                      "lang": "ts"
                    }
                  ]
                },
                {
                  "text": "**npm scripts** so you type less:"
                },
                {
                  "code": "// package.json — short names for the commands you type daily\n{\n  \"scripts\": {\n    \"test\": \"playwright test\",\n    \"test:smoke\": \"playwright test --grep @smoke\",\n    \"test:headed\": \"playwright test --headed --project=chromium\",\n    \"test:ui\": \"playwright test --ui\",\n    \"test:debug\": \"playwright test --debug\",\n    \"test:qa\": \"cross-env TEST_ENV=qa playwright test\",\n    \"report\": \"playwright show-report\"\n  }\n}\n// run: npm test   |   npm run test:smoke   |   npm run test:smoke -- --headed  (extra flags after --)",
                  "lang": "json"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "reporters",
          "title": "25. Reporters",
          "blocks": [
            {
              "note": "idea",
              "text": "A **reporter** decides **how the results look**: a short line, a dot for each test, a web page, or a file for Jenkins. You can pick more than one, like getting the bill on screen **and** on paper."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Reporters:** The **same match** shown as live score SMS (line), ball-by-ball dots (dot), or a full newspaper report (html)."
            },
            {
              "note": "remember",
              "text": "list/line/dot for console, html for people, junit/json for CI tools."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// inside playwright.config.ts\nreporter: [\n  // print one line per test in the terminal\n  ['list'],\n  // also build a web report (don't auto-open)\n  ['html', { open: 'never' }],\n],\n// npx playwright show-report              // open that web report later",
              "lang": "ts"
            },
            {
              "table": {
                "head": [
                  "Reporter",
                  "Looks like",
                  "Best for"
                ],
                "rows": [
                  [
                    "`list`",
                    "one line per test",
                    "local default"
                  ],
                  [
                    "`line`",
                    "one updating line",
                    "big suites locally"
                  ],
                  [
                    "`dot`",
                    "a dot per test",
                    "CI default"
                  ],
                  [
                    "`html`",
                    "web report with traces",
                    "humans, `show-report`"
                  ],
                  [
                    "`json`",
                    "results.json",
                    "scripts, dashboards"
                  ],
                  [
                    "`junit`",
                    "results.xml",
                    "Jenkins/GitLab/Azure test tabs"
                  ],
                  [
                    "`blob`",
                    "mergeable chunks",
                    "sharding → merge-reports"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "// Pick one or many reporters\nimport { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  reporter: [\n    ['list'],                                   // one line per test (default locally)\n    // ['line'],                                // one updating line (compact)\n    // ['dot'],                                 // a dot per test (default on CI)\n    ['html', { outputFolder: 'playwright-report', open: 'never' }],\n    ['json', { outputFile: 'results.json' }],   // machine-readable\n    ['junit', { outputFile: 'results.xml' }],   // CI test tabs (Jenkins, GitLab, Azure)\n  ],\n});",
                  "lang": "ts"
                },
                {
                  "code": "npx playwright test --reporter=list            # quick one-off switch\nnpx playwright test --reporter=line,html       # several at once\nnpx playwright show-report                     # open playwright-report/index.html\nnpx playwright show-report my-report           # a custom folder",
                  "lang": "bash"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "config",
          "title": "26. playwright.config.ts walkthrough",
          "blocks": [
            {
              "note": "idea",
              "text": "`playwright.config.ts` is the **settings page** for all tests: where tests live, how long to wait, how many to run at once, which browsers, and the website address."
            },
            {
              "note": "remember",
              "text": "defineConfig: testDir, timeout, retries, workers, reporter, use, projects, webServer."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "export default defineConfig({\n  // where the test files are\n  testDir: './tests',\n  // try a failed test once more\n  retries: 1,\n  // defaults for every test\n  use: { baseURL: 'http://localhost:3000', trace: 'on-first-retry' },\n  // which browsers\n  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],\n});",
              "lang": "bash"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "Read top to bottom: **where** tests are, **how long** to wait, **how many** at once, **what to output**, **defaults** for every test, **which browsers**, and **which app** to start."
                },
                {
                  "code": "// playwright.config.ts — every common option, explained\nimport { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  testDir: './tests',              // where *.spec.ts files live\n  timeout: 30_000,                 // max time for ONE test (default 30s)\n  expect: {\n    timeout: 5_000,                // how long expect(...) keeps retrying (default 5s)\n  },\n  fullyParallel: true,             // run tests inside a file in parallel too\n  forbidOnly: !!process.env.CI,    // fail CI if someone left test.only\n  retries: process.env.CI ? 2 : 0, // retry flaky tests on CI only\n  workers: process.env.CI ? 2 : undefined, // undefined = half your CPU cores\n  reporter: [\n    ['list'],                                       // readable console output\n    ['html', { open: 'never' }],                    // playwright-report/\n    ['junit', { outputFile: 'results.xml' }],       // for Jenkins / Azure\n  ],\n  outputDir: 'test-results',       // traces, screenshots, videos of each test\n\n  use: {                           // defaults for EVERY test (projects can override)\n    baseURL: 'http://localhost:3000',   // lets you write page.goto('/login')\n    trace: 'on-first-retry',            // record a trace when a test is retried\n    screenshot: 'only-on-failure',      // 'on' | 'off' | 'only-on-failure'\n    video: 'retain-on-failure',         // keep video only if the test failed\n    headless: true,                     // no visible window (default)\n    viewport: { width: 1280, height: 720 },\n    actionTimeout: 10_000,              // max time for one click/fill\n  },\n\n  projects: [\n    // 1) login once, save cookies to a file\n    { name: 'setup', testMatch: /.*\\.setup\\.ts/ },\n\n    // 2) real browsers, start already logged in\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json' },\n      dependencies: ['setup'],          // runs setup first\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'], storageState: 'playwright/.auth/user.json' },\n      dependencies: ['setup'],\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'], storageState: 'playwright/.auth/user.json' },\n      dependencies: ['setup'],\n    },\n    { name: 'mobile', use: { ...devices['Pixel 7'] } }, // phone emulation\n  ],\n\n  webServer: {                     // start your app before the tests\n    command: 'npm run start',\n    url: 'http://localhost:3000',  // wait until this responds\n    reuseExistingServer: !process.env.CI, // locally reuse a running dev server\n    timeout: 120_000,\n  },\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "parallel",
          "title": "27. Parallelism & sharding",
          "blocks": [
            {
              "note": "idea",
              "text": "**Workers are cashiers in one shop**: more cashiers = more customers served at once. **Shards are separate shops**: you split the customers across several shops (CI machines)."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Workers vs shards:** **Workers** = several **billing counters in one D-Mart**; **shards** = splitting customers across **different D-Mart branches**."
            },
            {
              "note": "remember",
              "text": "Workers = processes on one machine (default half the CPU cores); shards = split across machines."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# 4 cashiers in this shop\nnpx playwright test --workers=4\n# this shop takes the 1st third of the tests\nnpx playwright test --shard=1/3\n# then, inside a test file (TypeScript):\n// tests in this file may run at the same time\ntest.describe.configure({ mode: 'parallel' });",
              "lang": "bash"
            },
            {
              "img": "assets/img/playwright/workers-shards.svg?v=202610151544",
              "width": 400,
              "height": 456,
              "alt": "Diagram: 100 tests split by --shard across two machines; each machine runs two workers; blob reports merged into one HTML report.",
              "caption": "Shards = machines. Workers = processes on each machine."
            },
            {
              "table": {
                "head": [
                  "Setting",
                  "Meaning"
                ],
                "rows": [
                  [
                    "`workers`",
                    "processes on ONE machine. Default = half the CPU cores. Config `workers: 4` or CLI `--workers=4` (`50%` also works)"
                  ],
                  [
                    "default",
                    "files run in parallel, tests inside a file run in order"
                  ],
                  [
                    "`fullyParallel: true`",
                    "tests inside every file also run in parallel"
                  ],
                  [
                    "`describe.configure({ mode: 'parallel' })`",
                    "parallel for one file/group"
                  ],
                  [
                    "`mode: 'serial'`",
                    "in order; one fails → rest skipped (avoid if you can)"
                  ],
                  [
                    "`--shard=1/4`",
                    "this machine runs part 1 of 4"
                  ],
                  [
                    "`testInfo.workerIndex`",
                    "unique id of the worker process (new one after a failure); `parallelIndex` = slot 0..workers-1"
                  ]
                ]
              }
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Isolation:** each worker is a separate process with its own browser. Never share state between tests; use `workerIndex` to give each worker its own test user/DB row."
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\n\n// Tests in THIS file run at the same time, in different workers\ntest.describe.configure({ mode: 'parallel' });\n\ntest('a', async ({ page }, testInfo) => {\n  // every worker is its own process with its own browser -> no shared state\n  console.log('worker', testInfo.workerIndex, 'parallel slot', testInfo.parallelIndex);\n  await page.goto('https://demo.playwright.dev/todomvc');\n});\ntest('b', async ({ page }) => {\n  await page.goto('https://demo.playwright.dev/todomvc');\n  await expect(page).toHaveTitle(/TodoMVC/);\n});\n\n// Serial: one after another, same worker. If one fails, the rest are skipped.\ntest.describe('wizard', () => {\n  test.describe.configure({ mode: 'serial' });\n  test('step 1', async () => {});\n  test('step 2', async () => {});\n});",
                  "lang": "ts"
                },
                {
                  "text": "**Shard on GitHub Actions + merge reports** (needs `reporter: 'blob'` on CI):"
                },
                {
                  "code": "# .github/workflows/playwright.yml — 4 shards in parallel, then one merged HTML report\nname: Playwright Tests\non:\n  push: { branches: [main] }\n  pull_request: { branches: [main] }\n\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    strategy:\n      fail-fast: false                      # let every shard finish\n      matrix:\n        shardIndex: [1, 2, 3, 4]\n        shardTotal: [4]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: lts/* }\n      - run: npm ci\n      - run: npx playwright install --with-deps   # browsers + OS libraries\n      - name: Run shard ${{ matrix.shardIndex }}/${{ matrix.shardTotal }}\n        run: npx playwright test --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}\n        env:\n          CI: true\n          APP_USER: ${{ secrets.APP_USER }}      # secrets live in repo settings, never in code\n          APP_PASS: ${{ secrets.APP_PASS }}\n      - uses: actions/upload-artifact@v4       # blob report (+ traces) of this shard\n        if: ${{ !cancelled() }}\n        with:\n          name: blob-report-${{ matrix.shardIndex }}\n          path: blob-report\n          retention-days: 1\n\n  merge-reports:\n    if: ${{ !cancelled() }}\n    needs: [test]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: lts/* }\n      - run: npm ci\n      - uses: actions/download-artifact@v4\n        with:\n          path: all-blob-reports\n          pattern: blob-report-*\n          merge-multiple: true\n      - run: npx playwright merge-reports --reporter html ./all-blob-reports\n      - uses: actions/upload-artifact@v4\n        with:\n          name: html-report--attempt-${{ github.run_attempt }}\n          path: playwright-report\n          retention-days: 14",
                  "lang": "yaml"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "ci",
          "title": "28. CI/CD: Jenkins + artifacts",
          "blocks": [
            {
              "note": "idea",
              "text": "**CI** is a robot that runs your tests on every push. It installs everything, runs the tests, and keeps the reports so you can look later."
            },
            {
              "note": "remember",
              "text": "npm ci → npx playwright install --with-deps → npx playwright test → upload report."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# install exact packages from package-lock\nnpm ci\n# download browsers + the system libraries they need\nnpx playwright install --with-deps\n# run tests (retries + traces come from the config)\nnpx playwright test\n# then save playwright-report/ and test-results/ as artifacts",
              "lang": "bash"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "list": [
                    "**Retries** `retries: 2` on CI; **trace** `on-first-retry` makes trace.zip.",
                    "**Artifacts:** upload `playwright-report/` and `test-results/` (traces, videos).",
                    "**Secrets** come from CI settings / Jenkins credentials, never from code."
                  ]
                },
                {
                  "code": "// Jenkinsfile — run inside the official Playwright image (browsers preinstalled)\npipeline {\n  agent {\n    docker {\n      // keep this tag equal to the @playwright/test version in package.json\n      image 'mcr.microsoft.com/playwright:v1.64.0-noble'\n      args '--ipc=host'                     // recommended for Chromium in Docker\n    }\n  }\n  environment {\n    CI = 'true'\n    APP = credentials('app-login')          // Jenkins \"username + password\" credential -> APP_USR / APP_PSW\n  }\n  stages {\n    stage('Install') { steps { sh 'npm ci' } }\n    stage('Test') {\n      steps {\n        // retries + traces come from playwright.config.ts (retries: 2, trace: 'on-first-retry')\n        // --reporter overrides the config: line for the log, junit for Jenkins, html for humans\n        sh 'APP_USER=$APP_USR APP_PASS=$APP_PSW PLAYWRIGHT_JUNIT_OUTPUT_FILE=results.xml npx playwright test --reporter=line,junit,html'\n      }\n    }\n  }\n  post {\n    always {\n      junit allowEmptyResults: true, testResults: 'results.xml'          // test trend + failures in Jenkins UI\n      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true  // HTML report + traces/videos\n    }\n  }\n}",
                  "lang": "groovy"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "allure",
          "title": "29. Allure report",
          "blocks": [
            {
              "note": "idea",
              "text": "**Allure** is a **fancy photo album** for test results: graphs, steps, screenshots, history. Playwright writes raw pictures (results); Allure turns them into the album (report)."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Allure:** A **wedding photo album**: Playwright clicks the raw photos, Allure makes the album with captions."
            },
            {
              "note": "remember",
              "text": "allure-playwright reporter → allure-results/ → allure generate → allure open."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# the reporter + the report builder (needs Java)\nnpm i -D allure-playwright allure-commandline\n# config: reporter: [['line'], ['allure-playwright']]\n# writes allure-results/\nnpx playwright test\n# build the report and open it\nnpx allure serve allure-results",
              "lang": "bash"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "ol": [
                    "Install `allure-playwright` (reporter) + `allure-commandline` (needs Java).",
                    "Add the reporter to the config.",
                    "Run tests → `allure-results/`.",
                    "`allure generate` → `allure-report/`, then `allure open`."
                  ]
                },
                {
                  "code": "# 1) install (allure-commandline needs Java 8+ on the machine)\nnpm i -D allure-playwright allure-js-commons allure-commandline\n\n# 2) run tests -> raw results in allure-results/\nnpx playwright test\n\n# 3) build + open the report\nnpx allure generate allure-results --clean -o allure-report   # static HTML site\nnpx allure open allure-report                                  # opens in browser\nnpx allure serve allure-results                                # or: generate to temp + open, one step",
                  "lang": "bash"
                },
                {
                  "code": "// playwright.config.ts — add Allure next to the normal reporters\nimport { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  reporter: [\n    ['line'],\n    ['allure-playwright', {\n      resultsDir: 'allure-results',          // raw JSON results go here\n      detail: true,                          // show Playwright steps in the report\n      suiteTitle: true,\n      environmentInfo: { env: process.env.TEST_ENV ?? 'qa', node: process.version },\n    }],\n  ],\n  use: { screenshot: 'only-on-failure', trace: 'on-first-retry' }, // attached to Allure automatically\n});",
                  "lang": "ts"
                },
                {
                  "code": "import { test, expect } from '@playwright/test';\nimport * as allure from 'allure-js-commons';\n\ntest('checkout as guest @smoke', async ({ page }) => {\n  // labels make the report filterable\n  await allure.epic('Shop');\n  await allure.feature('Checkout');\n  await allure.severity('critical');\n  await allure.tags('smoke', 'guest');\n\n  await allure.step('Open the shop', async () => {\n    await page.goto('https://demo.playwright.dev/todomvc');\n  });\n\n  // attachments: text/JSON ...\n  await allure.attachment('cart.json', JSON.stringify({ items: 2 }), 'application/json');\n  // ... or a screenshot (Playwright's own test.info().attach also shows up in Allure)\n  await test.info().attach('home', { body: await page.screenshot(), contentType: 'image/png' });\n\n  await expect(page).toHaveTitle(/TodoMVC/);\n});",
                  "lang": "ts"
                },
                {
                  "details": "Publish on GitHub Actions",
                  "blocks": [
                    {
                      "code": "# .github/workflows/allure.yml — publish the Allure report to GitHub Pages (gh-pages branch)\n      - run: npx playwright test\n        continue-on-error: true                # still publish when tests fail\n      - uses: actions/setup-java@v4            # allure-commandline needs Java\n        with: { distribution: temurin, java-version: '17' }\n      - run: npx allure generate allure-results --clean -o allure-report\n        if: always()\n      - uses: actions/upload-artifact@v4       # download from the run page\n        if: always()\n        with: { name: allure-report, path: allure-report }\n      - uses: peaceiris/actions-gh-pages@v4    # community action: push to gh-pages\n        if: always()\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}   # built-in token, nothing to create\n          publish_dir: allure-report",
                      "lang": "yaml"
                    }
                  ]
                },
                {
                  "details": "Jenkins Allure plugin",
                  "blocks": [
                    {
                      "code": "// Jenkins: install the \"Allure\" plugin + add an Allure Commandline tool\n// (Manage Jenkins -> Tools), then:\npost {\n  always {\n    allure includeProperties: false, results: [[path: 'allure-results']]   // \"Allure Report\" link + trend graph\n  }\n}",
                      "lang": "groovy"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "framework",
          "title": "30. Framework structure",
          "blocks": [
            {
              "note": "idea",
              "text": "A framework is a **tidy house**: tests in one room, page objects in another, data in a cupboard, settings on the wall. Each thing has one place, so anyone can find it."
            },
            {
              "note": "remember",
              "text": "Tests → fixtures → page objects → utils/data → config; tests only describe steps."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "// one class = one screen (Page Object)\nclass LoginPage {\n  // remember which tab to use\n  constructor(private page: Page) {}\n  // one action the screen can do\n  async login(user: string, pass: string) {\n    // the \"how\" (locators) hides in here\n    await this.page.getByLabel('Email').fill(user);\n    await this.page.getByLabel('Password').fill(pass);\n    await this.page.getByRole('button', { name: 'Sign in' }).click();\n  }\n}",
              "lang": "ts"
            },
            {
              "img": "assets/img/playwright/layers.svg?v=202610151544",
              "width": 400,
              "height": 686,
              "alt": "Diagram: tests use fixtures, fixtures use page objects, page objects use utils and test data, all configured by playwright.config.ts.",
              "caption": "Tests → fixtures → page objects → utils/data → config."
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "playwright-framework/\n├── tests/                    # *.spec.ts — only test steps + assertions\n│   ├── auth.setup.ts         #   logs in once, saves storageState\n│   ├── ui/cart.spec.ts\n│   └── api/users.spec.ts\n├── pages/                    # Page Object Model (one class per screen)\n│   ├── BasePage.ts\n│   ├── LoginPage.ts\n│   └── CartPage.ts\n├── fixtures/index.ts         # test.extend: POMs, users, API client\n├── utils/                    # helpers: apiClient.ts, random.ts, dates.ts\n├── test-data/                # users.json, products.csv, prices.xlsx\n├── config/                   # .env.qa, .env.staging (NOT committed) + .env.example\n├── playwright/.auth/         # saved login state (gitignored)\n├── playwright-report/        # html report   ┐\n├── test-results/             # traces/videos  ├ generated, gitignored\n├── allure-results/           # allure raw     ┘\n├── .github/workflows/playwright.yml\n├── Jenkinsfile\n├── playwright.config.ts\n├── tsconfig.json\n└── package.json",
                  "lang": "text"
                },
                {
                  "list": [
                    "**Config** decides env (baseURL from .env) and browsers.",
                    "**Data** files are loaded by a fixture.",
                    "**Fixtures** build POMs and hand them to tests.",
                    "**Tests** only describe steps and expectations."
                  ]
                },
                {
                  "code": "// pages/BasePage.ts — shared helpers every page gets\nimport { type Page, type Locator } from '@playwright/test';\n\nexport class BasePage {\n  constructor(protected readonly page: Page) {}\n  async open(path: string) { await this.page.goto(path); }   // uses baseURL from config\n  toast(): Locator { return this.page.getByRole('status'); }\n}",
                  "lang": "ts"
                },
                {
                  "code": "// pages/CartPage.ts — locators + actions for ONE screen. No assertions on business rules here.\nimport { type Page, type Locator, expect } from '@playwright/test';\nimport { BasePage } from './BasePage';\n\nexport class CartPage extends BasePage {\n  readonly items: Locator;\n  readonly total: Locator;\n  readonly checkoutBtn: Locator;\n\n  constructor(page: Page) {\n    super(page);\n    this.items = page.getByTestId('cart-item');\n    this.total = page.getByTestId('cart-total');\n    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });\n  }\n\n  async goto() { await this.open('/cart'); }\n\n  async remove(name: string) {\n    await this.items.filter({ hasText: name }).getByRole('button', { name: 'Remove' }).click();\n  }\n\n  async checkout() {\n    await this.checkoutBtn.click();\n    await expect(this.page).toHaveURL(/checkout/);   // \"did the page change\" is fine inside POM\n  }\n}",
                  "lang": "ts"
                },
                {
                  "code": "// fixtures/index.ts — the glue: config gives baseURL/env, data comes from files, POMs are injected\nimport { test as base } from '@playwright/test';\nimport { CartPage } from './pages/CartPage';\nimport users from './data/users.json';\n\ntype Fixtures = { cartPage: CartPage; user: (typeof users)[number] };\n\nexport const test = base.extend<Fixtures>({\n  cartPage: async ({ page }, use) => { await use(new CartPage(page)); },\n  user: async ({}, use) => { await use(users[0]); },\n});\nexport { expect } from '@playwright/test';\n\n// tests/cart.spec.ts — the test reads like a story\ntest('remove an item', async ({ cartPage }) => {\n  await cartPage.goto();\n  await cartPage.remove('Mug');\n  await test.expect(cartPage.items).toHaveCount(1);\n});",
                  "lang": "ts"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "cli",
          "title": "31. CLI & test agents",
          "blocks": [
            {
              "note": "idea",
              "text": "**codegen** is a tape recorder: you click around, it writes the test. **Test agents** are three AI helpers: a **planner** (writes the plan), a **generator** (writes tests), and a **healer** (fixes broken tests)."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**Agents: planner / generator / healer:** Building a house: the **architect** draws the plan, the **mistri** builds it, the **plumber-electrician** fixes leaks later."
            },
            {
              "note": "remember",
              "text": "codegen records; show-trace replays; init-agents adds planner, generator, healer."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# click around; test code is written for you\nnpx playwright codegen https://shop.com\n# replay a failed test step by step\nnpx playwright show-trace trace.zip\n# add planner/generator/healer for Claude Code\nnpx playwright init-agents --loop=claude",
              "lang": "bash"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "# --- run ---\nnpx playwright test                          # everything, headless, in parallel\nnpx playwright test tests/login.spec.ts      # one file\nnpx playwright test -g \"checkout\"            # only titles matching \"checkout\"\nnpx playwright test --project=chromium       # one project\nnpx playwright test --headed                 # watch the browser\nnpx playwright test --ui                     # UI mode: time-travel, watch, pick tests\nnpx playwright test --debug                  # Playwright Inspector, step through\nnpx playwright test --workers=4 --retries=2  # parallelism + retries\nnpx playwright test --repeat-each=5          # hunt flaky tests\nnpx playwright test --last-failed            # re-run only what failed\nnpx playwright test --only-changed=main      # tests touched since main (git)\nnpx playwright test --trace=on               # force a trace for every test\nnpx playwright test --shard=1/4              # this machine runs part 1 of 4\n\n# --- tools ---\nnpx playwright codegen https://example.com   # record clicks -> test code\nnpx playwright show-report                   # open the last HTML report\nnpx playwright show-trace trace.zip          # open a trace (or drop it on trace.playwright.dev)\nnpx playwright install --with-deps chromium  # download browsers + OS deps\nnpx playwright --version                     # e.g. Version 1.64.1",
                  "lang": "bash"
                },
                {
                  "text": "**Test agents** (Playwright 1.56+): 🎭 **planner** explores the app and writes a Markdown plan in `specs/`, 🎭 **generator** turns it into tests, 🎭 **healer** runs and fixes failing tests. All start from `seed.spec.ts`."
                },
                {
                  "code": "# Add the 3 test agents (planner, generator, healer) to your repo.\n# Re-run after every Playwright upgrade to pick up new tools.\nnpx playwright init-agents --loop=vscode     # GitHub Copilot in VS Code (needs VS Code 1.105+)\nnpx playwright init-agents --loop=claude     # Claude Code\nnpx playwright init-agents --loop=codex      # also: --loop=opencode",
                  "lang": "bash"
                },
                {
                  "code": "--loop=claude creates:                         --loop=vscode creates:\n  .claude/agents/playwright-test-planner.md      .github/agents/playwright-test-planner.agent.md\n  .claude/agents/playwright-test-generator.md    .github/agents/playwright-test-generator.agent.md\n  .claude/agents/playwright-test-healer.md       .github/agents/playwright-test-healer.agent.md\n  .mcp.json        (playwright-test server)      .vscode/mcp.json  (playwright-test server)\n  seed.spec.ts     (starting point)              .github/workflows/copilot-setup-steps.yml\n  specs/README.md  (plans go here)               seed.spec.ts, specs/README.md",
                  "lang": "text"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "ai",
          "title": "32. Claude Code & Copilot agent mode",
          "blocks": [
            {
              "note": "idea",
              "text": "The agents live in files in your repo. You **ask** Claude Code or Copilot to \"use the planner agent\", and it uses Playwright's tools to do the work. You check the result."
            },
            {
              "note": "remember",
              "text": "init-agents writes the agent files + an MCP config; you pick the agent and give a goal."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# 1. make a plan\n> Use the playwright-test-planner agent: plan \"guest checkout\"\n# 2. write tests from it\n> Use the playwright-test-generator agent on specs/guest-checkout.md\n# 3. repair failures\n> Use the playwright-test-healer agent to fix failing tests",
              "lang": "text"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "// .mcp.json (created by init-agents --loop=claude) — the test agents' MCP server\n{\n  \"mcpServers\": {\n    \"playwright-test\": {\n      \"command\": \"npx\",\n      \"args\": [\"playwright\", \"run-test-mcp-server\"]\n    }\n  }\n}",
                  "lang": "json"
                },
                {
                  "code": "# In Claude Code, inside your project:\n> Use the playwright-test-planner agent: plan \"guest checkout\" using tests/seed.spec.ts\n> Use the playwright-test-generator agent on specs/guest-checkout.md\n> Use the playwright-test-healer agent to fix failing tests in tests/checkout/",
                  "lang": "text"
                },
                {
                  "text": "**Copilot (VS Code agent mode):** `init-agents --loop=vscode` writes `.vscode/mcp.json` with the same `playwright-test` server (under `\"servers\"`) and the agents in `.github/agents/`. Pick the agent in the chat dropdown."
                },
                {
                  "code": "# Copilot Chat -> Agent mode (tools: playwright), example prompt:\nOpen https://demo.playwright.dev/todomvc, add two todos, complete one,\nthen write a Playwright TypeScript test for it in tests/todo.spec.ts\nusing getByRole/getByPlaceholder locators and web-first assertions. Run it.",
                  "lang": "text"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "mcp",
          "title": "33. Playwright MCP setup",
          "blocks": [
            {
              "note": "idea",
              "text": "**MCP** is a **universal plug** that lets an AI use a tool. **Playwright MCP** plugs the AI into a real browser so it can click and read pages."
            },
            {
              "note": "analogy",
              "title": "🇮🇳 Everyday example",
              "text": "**MCP:** A **universal travel adapter**: one plug lets the AI use any tool (browser, GitHub, Jira)."
            },
            {
              "note": "remember",
              "text": "Playwright MCP = npx @playwright/mcp@latest, added to your AI app's MCP config."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "{\n  // list of plugs for the AI\n  \"mcpServers\": {\n    // start the browser plug\n    \"playwright\": { \"command\": \"npx\", \"args\": [\"@playwright/mcp@latest\"] }\n  }\n}",
              "lang": "json"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "**Playwright MCP** gives an AI a real browser (click, type, snapshot) using the accessibility tree, not screenshots. Different from the test agents server above."
                },
                {
                  "code": "// .vscode/mcp.json — Playwright MCP (browser tools) for Copilot agent mode\n{\n  \"servers\": {\n    \"playwright\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\"@playwright/mcp@latest\"]        // add \"--headless\" or \"--browser=firefox\" if you like\n    }\n  }\n}",
                  "lang": "json"
                },
                {
                  "code": "# VS Code (one line, same as the mcp.json above)\ncode --add-mcp '{\"name\":\"playwright\",\"command\":\"npx\",\"args\":[\"@playwright/mcp@latest\"]}'\n\n# Claude Code\nclaude mcp add playwright npx @playwright/mcp@latest\nclaude mcp list                              # check it is connected",
                  "lang": "bash"
                },
                {
                  "code": "// ~/.copilot/mcp-config.json — GitHub Copilot CLI (or run /mcp add inside it)\n{\n  \"mcpServers\": {\n    \"playwright\": {\n      \"type\": \"local\",\n      \"command\": \"npx\",\n      \"tools\": [\"*\"],\n      \"args\": [\"@playwright/mcp@latest\"]\n    }\n  }\n}",
                  "lang": "json"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "repo-mcp",
          "title": "34. GitHub & Bitbucket MCP",
          "blocks": [
            {
              "note": "idea",
              "text": "The **GitHub MCP** plug lets the AI read code and open pull requests. It needs a **token** (a password for robots). Never write a real token in a file; use a placeholder or an environment variable."
            },
            {
              "note": "remember",
              "text": "GitHub MCP: remote https://api.githubcopilot.com/mcp/ or Docker with a PAT; Bitbucket MCP is community-made."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# placeholder: keep the real token outside files\nexport GITHUB_PAT=<your-token>\n# plug GitHub into Claude Code\nclaude mcp add --transport http github https://api.githubcopilot.com/mcp -H \"Authorization: Bearer $GITHUB_PAT\"",
              "lang": "bash"
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "text": "🔐 **Placeholders only.** Use a fine-grained PAT with the smallest scopes, keep it in an env var or VS Code `inputs`, never commit it."
                },
                {
                  "code": "// .vscode/mcp.json — official GitHub MCP server, REMOTE (hosted by GitHub)\n{\n  \"servers\": {\n    \"github\": {\n      \"type\": \"http\",\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": { \"Authorization\": \"Bearer ${input:github_mcp_pat}\" }   // VS Code asks once, stores it safely\n    }\n  },\n  \"inputs\": [\n    { \"type\": \"promptString\", \"id\": \"github_mcp_pat\", \"description\": \"GitHub Personal Access Token\", \"password\": true }\n  ]\n}",
                  "lang": "json"
                },
                {
                  "code": "// .vscode/mcp.json — official GitHub MCP server, LOCAL in Docker\n{\n  \"servers\": {\n    \"github\": {\n      \"command\": \"docker\",\n      \"args\": [\"run\", \"-i\", \"--rm\", \"-e\", \"GITHUB_PERSONAL_ACCESS_TOKEN\", \"ghcr.io/github/github-mcp-server\"],\n      \"env\": { \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${input:github_token}\" }\n    }\n  },\n  \"inputs\": [\n    { \"type\": \"promptString\", \"id\": \"github_token\", \"description\": \"GitHub PAT\", \"password\": true }\n  ]\n}",
                  "lang": "json"
                },
                {
                  "code": "# Claude Code: keep the token in an env var, never paste it into files\nexport GITHUB_PAT=<your-fine-grained-token>        # placeholder\n\n# remote (hosted) server\nclaude mcp add --transport http github https://api.githubcopilot.com/mcp -H \"Authorization: Bearer $GITHUB_PAT\"\n\n# or local Docker\nclaude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=$GITHUB_PAT -- docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server",
                  "lang": "bash"
                },
                {
                  "text": "**Bitbucket: unofficial community server** (`@aashari/mcp-server-atlassian-bitbucket`). Uses an Atlassian scoped API token; old app-password variables are being retired (June 2026)."
                },
                {
                  "code": "// Bitbucket — COMMUNITY server (unofficial): @aashari/mcp-server-atlassian-bitbucket\n// e.g. in Claude Desktop config or .mcp.json (\"servers\" + \"type\":\"stdio\" in VS Code)\n{\n  \"mcpServers\": {\n    \"bitbucket\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@aashari/mcp-server-atlassian-bitbucket\"],\n      \"env\": {\n        \"ATLASSIAN_USER_EMAIL\": \"<your.email@company.com>\",\n        \"ATLASSIAN_API_TOKEN\": \"<scoped-api-token>\"      // placeholder, keep real tokens out of git\n      }\n    }\n  }\n}",
                  "lang": "json"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "workflow",
          "title": "35. Agent workflow: Jira → PR",
          "blocks": [
            {
              "note": "idea",
              "text": "Like building a house: read the **request** (Jira story), draw the **plan**, **build** it (tests), **fix** cracks (heal), then ask for an **inspection** (pull request)."
            },
            {
              "note": "remember",
              "text": "Story → plan → tests → heal → PR, with a human review at the end."
            },
            {
              "text": "**Tiny example** (read the comment on each line):"
            },
            {
              "code": "# what should work?\n1. Read Jira story QA-123\n# plan in plain English\n2. Planner  -> specs/qa-123.md\n# real test code\n3. Generator -> tests/qa-123.spec.ts\n# a human reviews\n4. Healer fixes failures, then open a PR",
              "lang": "text"
            },
            {
              "img": "assets/img/playwright/agent-workflow.svg?v=202610151544",
              "width": 400,
              "height": 686,
              "alt": "Diagram: Jira story, then planner, generator, healer agents, then a pull request via GitHub MCP.",
              "caption": "You review each step before the PR."
            },
            {
              "details": "Full example (optional)",
              "blocks": [
                {
                  "code": "# One prompt per step (Claude Code or Copilot agent mode, with Jira + Playwright + GitHub MCP)\n1. \"Read Jira story QA-123 and list its acceptance criteria.\"\n2. \"Use playwright-test-planner to plan QA-123 with tests/seed.spec.ts. Save specs/qa-123.md.\"\n3. \"Use playwright-test-generator on specs/qa-123.md.\"\n4. \"Run the new tests. Use playwright-test-healer on any failure.\"\n5. \"Create branch test/qa-123, commit the spec and tests, open a PR that links QA-123.\"",
                  "lang": "text"
                }
              ]
            }
          ]
        },
        {
          "type": "lesson",
          "anchor": "qa",
          "title": "36. Interview Q&A (tap to reveal)",
          "blocks": [
            {
              "qa": [
                {
                  "q": "Why is Playwright less flaky than Selenium?",
                  "a": "Auto-wait before actions + web-first assertions that retry."
                },
                {
                  "q": "Explain the architecture.",
                  "a": "Test client → Node server → CDP/patched protocol over one persistent connection → browser."
                },
                {
                  "q": "Browser vs Context vs Page?",
                  "a": "Process → isolated incognito-like session → tab."
                },
                {
                  "q": "How do you keep tests isolated?",
                  "a": "A fresh BrowserContext per test (the default `page` fixture)."
                },
                {
                  "q": "How do you handle a new tab?",
                  "a": "`const p = page.waitForEvent('popup')` before the click, then `await p`."
                },
                {
                  "q": "How do you handle alerts?",
                  "a": "`page.on('dialog', d => d.accept())` registered before the action."
                },
                {
                  "q": "How do you handle iframes?",
                  "a": "`page.frameLocator(sel)` or `locator.contentFrame()`."
                },
                {
                  "q": "What is a fixture?",
                  "a": "Reusable setup/teardown injected by name via `test.extend`."
                },
                {
                  "q": "Worker vs test scope?",
                  "a": "Worker = once per process; test = per test."
                },
                {
                  "q": "How do you avoid logging in every test?",
                  "a": "Setup project saves `storageState`, projects reuse it."
                },
                {
                  "q": "Is sessionStorage in storageState?",
                  "a": "No. Save/restore it with `evaluate` + `addInitScript`."
                },
                {
                  "q": "How do you test APIs?",
                  "a": "`request` fixture: `get/post/put/delete`, `expect(res).toBeOK()`."
                },
                {
                  "q": "How do you mock a response?",
                  "a": "`page.route(url, r => r.fulfill({ json }))`."
                },
                {
                  "q": "Soft vs hard assertion?",
                  "a": "Soft records failure and continues; hard stops the test."
                },
                {
                  "q": "expect.poll vs toPass?",
                  "a": "poll retries one value; toPass retries a whole block."
                },
                {
                  "q": "Workers vs shards?",
                  "a": "Workers = parallel processes on one machine; shards = split across machines."
                },
                {
                  "q": "How do you combine shard reports?",
                  "a": "Blob reporter per shard, then `npx playwright merge-reports`."
                },
                {
                  "q": "How do you debug a CI failure?",
                  "a": "Download the trace.zip, `npx playwright show-trace`."
                },
                {
                  "q": "How do you run only smoke tests?",
                  "a": "Tag `@smoke`, run `--grep @smoke`."
                },
                {
                  "q": "How do you switch environment?",
                  "a": "`TEST_ENV=qa` → dotenv loads `.env.qa` → `baseURL` from `process.env`."
                },
                {
                  "q": "What is POM?",
                  "a": "A class per screen holding locators + actions so tests stay readable."
                },
                {
                  "q": "Best locator?",
                  "a": "`getByRole` / `getByLabel` / `getByTestId`; avoid long CSS/XPath."
                },
                {
                  "q": "What are Playwright test agents?",
                  "a": "Planner, generator, healer: AI agents via `init-agents` that plan, write and fix tests."
                },
                {
                  "q": "What is Playwright MCP?",
                  "a": "An MCP server that lets an AI drive a real browser through accessibility snapshots."
                },
                {
                  "q": "Which locator do you prefer and why?",
                  "a": "`getByRole` with a name: it matches what users see and survives CSS changes."
                },
                {
                  "q": "What is a strict locator?",
                  "a": "An action fails if the locator matches more than one element, so you never click the wrong one."
                },
                {
                  "q": "Locator vs ElementHandle?",
                  "a": "Locator is lazy and re-finds + auto-waits; ElementHandle points to one node and can go stale."
                },
                {
                  "q": "fill vs pressSequentially?",
                  "a": "fill sets the value at once; pressSequentially types key by key (`type()` is deprecated)."
                },
                {
                  "q": "When would you use force: true?",
                  "a": "Almost never: it skips actionability checks and can hide real bugs."
                },
                {
                  "q": "Why avoid waitForTimeout?",
                  "a": "Fixed sleeps are slow and still flaky; wait for a URL, response or element instead."
                },
                {
                  "q": "How do you wait for an API call after a click?",
                  "a": "Start `page.waitForResponse(...)` before the click, then await it."
                },
                {
                  "q": "How do you upload a file?",
                  "a": "`locator.setInputFiles(path)`, or `waitForEvent('filechooser')` if there is no input."
                },
                {
                  "q": "How do you verify a download?",
                  "a": "`waitForEvent('download')` before the click, then `suggestedFilename()` and `saveAs()`."
                },
                {
                  "q": "How do you handle shadow DOM?",
                  "a": "Nothing special: Playwright locators pierce open shadow roots (XPath does not)."
                },
                {
                  "q": "beforeAll vs beforeEach?",
                  "a": "beforeAll once per worker for the group; beforeEach before every test."
                },
                {
                  "q": "skip vs fixme vs fail?",
                  "a": "skip = don't run; fixme = don't run, needs fixing; fail = run and expect it to fail."
                },
                {
                  "q": "What is test.step for?",
                  "a": "Named steps that show up in the report and trace."
                },
                {
                  "q": "Default timeouts?",
                  "a": "Test 30 s, expect 5 s, actions/navigation no limit by default (set actionTimeout/navigationTimeout)."
                },
                {
                  "q": "How do you handle flaky tests?",
                  "a": "Find the cause with traces, use web-first waits, isolate data; retries only as a safety net."
                },
                {
                  "q": "How do you do visual testing?",
                  "a": "`expect(page).toHaveScreenshot()`; update goldens with `--update-snapshots`; mask dynamic areas."
                },
                {
                  "q": "How do you check accessibility?",
                  "a": "`@axe-core/playwright`: `new AxeBuilder({ page }).analyze()` and expect no violations."
                },
                {
                  "q": "Why must you await Playwright calls?",
                  "a": "They return Promises; without await the next line runs before the action finishes."
                }
              ]
            }
          ]
        },
        {
          "type": "callout",
          "tone": "gold",
          "title": "Before you sleep",
          "body": [
            "Read the **Q&A** once out loud. Then close the laptop. Do your duty, leave the result: you are prepared."
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
          image: "assets/img/vision-card.webp?v=202610061704",   // shown on the page ("" = placeholder)
          fallback: "assets/img/vision-card.jpg?v=202610061704", // for browsers without WebP + the GitHub Markdown page
          full: "assets/img/vision-card.jpg?v=202610061704",     // opened when the card is tapped
          width: 1672, height: 1163,
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
              date: "2026-10-09",
              note: "A win day. Slept peacefully, woke around 6:30 and was studying by 6:45 AM. Completed the Appium section of the Udemy course (installation on Mac, plugins and drivers, desired capabilities and basic UI automation), plus the Maven project lectures, Japneet's Playwright lectures and a career coaching call, then extended the day. Appium felt confusing and I was unsure of the path, so Sarathi made the visual [Appium 3 Notes](appium.html) page with a clear roadmap. Next (Oct 10): one 25-minute pytest block and one 25-minute AI testing block. Pending job items: referral-link applications (Barclays, Deutsche Bank, Dentsu) and the Innodata send.",
              worked: [
                "Good sleep and an early first move (studying by 6:45 AM).",
                "One topic per block.",
                "Stating the evening plan clearly.",
                "Appium on Udemy done: installation on Mac, plugins and drivers, desired capabilities, basic UI automation ([Appium 3 Notes](appium.html)).",
                "Maven project lectures done.",
                "Japneet's Playwright lectures done.",
                "Career coaching call done."
              ],
              didnt: [
                "Skipped pytest and AI/LLM testing: the plan was too big for one day, and that brought guilt.",
                "Appium felt confusing, with many moving parts and no clear sense of the path yet (now mapped in [Appium 3 Notes](appium.html)).",
                "Dead tired by 10:22 PM.",
                "The 6 AM reminder failed, so the morning visualization came late."
              ]
            },
            {
              date: "2026-10-08",
              note: "A real win. Overslept to 9:19 AM after a restless night and woke up feeling guilty, but restarted instead of writing the day off. By 5:39 PM IST: finished the pytest test, did the internal job application, sent my learnings (now the [Pytest Notes](pytest.html) page) and completed everything I planned in Japneet's Playwright course, up to the API section and the playwright.config.ts file.",
              worked: [
                "The gentle restart plan after the late, guilty start, instead of giving up on the day.",
                "Short 25-minute focused blocks with the phone away.",
                "The movement / 'Uttishtha' (arise!) motivation message at about 2 PM.",
                "Finished the pytest test in the morning.",
                "Did the internal job application.",
                "Sent my pytest learnings to Sarathi and got simple notes with code examples ([Pytest Notes](pytest.html)).",
                "Completed all of today's planned Playwright course work (Japneet), up to the API section and playwright.config.ts."
              ],
              didnt: [
                "Overslept to 9:19 AM after a restless night; the mind kept racing while trying to sleep.",
                "Pending: LinkedIn referral follow-ups are still to be sent."
              ]
            },
            {
              date: "2026-10-07",
              note: "First full day with Sarathi. Goal for the day: make myself satisfied.",
              worked: [
                "Completed a full 2-hour coding session (Japneet's Udemy course) in the morning.",
                "Finished half of Kartik's pytest sessions.",
                "Every-2-hours reminders and one-block-at-a-time focus.",
                "Started AI courses in the evening.",
                "Built an n8n AI agent that creates Jira bugs from an Excel file.",
                "Built an AI agent that fetches Azure DevOps user stories, generates test cases and pushes them back to Azure DevOps.",
                "Applied to a couple of jobs and got some replies."
              ],
              didnt: ["Got stuck on Playwright custom fixtures in TypeScript (syntax felt hard), but asked for help instead of escaping.", "No referrals yet; follow-ups needed."]
            },
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
