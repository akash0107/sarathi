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
    lastUpdated: "2026-10-13",          // YYYY-MM-DD (IST)
    lastUpdatedLabel: "Oct 13, 2026 (IST)",
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
