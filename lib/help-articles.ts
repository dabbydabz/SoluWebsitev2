export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "warning"; text: string }

export type HelpArticle = {
  slug: string
  title: string
  summary: string
  category: string
  content: Block[]
  related?: string[]
}

export type HelpCategory = {
  slug: string
  label: string
  description: string
  iconPath: string
  iconBg: string
}

export const helpCategories: HelpCategory[] = [
  {
    slug: "getting-started",
    label: "Getting Started",
    description: "Create your account, set up your profile, and get the most out of Solu from day one.",
    iconBg: "bg-orange-100",
    iconPath:
      "M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z",
  },
  {
    slug: "cycle-and-phases",
    label: "Cycle & Phases",
    description: "Understand how Solu tracks your cycle and what each of the four phases means for your body.",
    iconBg: "bg-purple-100",
    iconPath:
      "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  },
  {
    slug: "privacy-and-security",
    label: "Privacy & Security",
    description: "How Solu protects your health data, Private Health mode, Face ID, and your data rights.",
    iconBg: "bg-green-100",
    iconPath:
      "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
  },
  {
    slug: "subscriptions",
    label: "Subscriptions",
    description: "Compare Solu Free, Solu+, and Solu Pro, and manage your plan.",
    iconBg: "bg-yellow-100",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
  },
  {
    slug: "using-solu",
    label: "Using Solu",
    description: "Glow Up Score, Goals, Smart Insights, Community, Did You Know cards, and more.",
    iconBg: "bg-pink-100",
    iconPath:
      "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v6h-2zm0 8h2v2h-2z",
  },
]

export const helpArticles: HelpArticle[] = [
  // ── GETTING STARTED ──────────────────────────────────────────────────
  {
    slug: "how-to-create-your-account",
    title: "How to create your Solu account",
    summary: "Download the Solu app and set up your account in a few minutes.",
    category: "getting-started",
    related: ["setting-up-your-profile", "choosing-your-cycle-type", "how-to-log-out"],
    content: [
      { type: "h2", text: "Download the app" },
      { type: "p", text: "Solu is available on iOS (App Store) and Android (Google Play). Search for \"Solu\" and tap Get or Install." },
      { type: "h2", text: "Create your account" },
      { type: "steps", items: [
        "Open the Solu app",
        "Tap \"Get started\"",
        "Enter your email address and choose a password",
        "Verify your email with the code sent to your inbox",
        "Follow the onboarding steps to complete your profile",
      ]},
      { type: "tip", text: "If you already have a Solu account, tap \"Sign in\" on the opening screen instead." },
    ],
  },
  {
    slug: "setting-up-your-profile",
    title: "Setting up your Solu profile",
    summary: "What to expect during onboarding and how Solu personalises guidance to you.",
    category: "getting-started",
    related: ["choosing-your-cycle-type", "how-to-create-your-account", "how-to-update-your-profile"],
    content: [
      { type: "p", text: "When you first open Solu, a short onboarding flow helps personalise your experience before you reach the Today page." },
      { type: "h2", text: "What you'll be asked" },
      { type: "list", items: [
        "Your name",
        "Your cycle type (Natural, Hormonal contraception, Post-pill, or Irregular)",
        "The first day of your last period — to calculate your current phase right away",
        "Your average cycle length, or Solu can estimate it for you",
        "Your health interests — the topics you care most about",
        "Your main goal — the focus you'd like Solu to support this cycle",
      ]},
      { type: "h2", text: "Can I change my answers later?" },
      { type: "p", text: "Yes. You can update your interests and goal at any time from your Profile page. Your cycle data can be updated from the My Cycle page. Your cycle type can be changed in Settings." },
    ],
  },
  {
    slug: "choosing-your-cycle-type",
    title: "Which cycle type should I choose?",
    summary: "Understand the four cycle types Solu supports and how they affect your experience.",
    category: "getting-started",
    related: ["setting-up-your-profile", "how-solu-tracks-your-cycle", "how-to-log-your-period"],
    content: [
      { type: "h3", text: "Natural cycle" },
      { type: "p", text: "Choose this if you're not on any hormonal contraception. Solu tracks your natural menstrual cycle and shows guidance matched to your body's own hormonal rhythm." },
      { type: "h3", text: "Hormonal contraception" },
      { type: "p", text: "Choose this if you're on the pill, patch, ring, hormonal IUD, or implant. Hormonal contraception suppresses natural ovulation, so Solu adjusts your phase guidance accordingly." },
      { type: "h3", text: "Post-pill" },
      { type: "p", text: "Choose this if you've recently stopped hormonal contraception. Your cycle may be irregular while your body readjusts. Solu tracks your cycle with a lower-confidence indicator while your natural pattern re-establishes." },
      { type: "h3", text: "Irregular cycle" },
      { type: "p", text: "Choose this if your cycle varies significantly in length or is unpredictable. Solu tracks your cycle with a lower-confidence indicator and improves its predictions as you log more periods." },
      { type: "tip", text: "Not sure which to choose? Go with the option that most closely matches where you are right now. You can change it later in Settings." },
    ],
  },
  {
    slug: "how-to-update-your-profile",
    title: "How to update your name, email, and interests",
    summary: "Change your personal details and health interests from your profile.",
    category: "getting-started",
    related: ["setting-up-your-profile", "how-to-log-out", "understanding-goals"],
    content: [
      { type: "h2", text: "Update your name or profile photo" },
      { type: "steps", items: [
        "Tap the Profile icon in the bottom navigation",
        "Tap the edit icon next to your name or photo",
        "Make your changes",
        "Tap Save",
      ]},
      { type: "h2", text: "Update your health interests" },
      { type: "p", text: "Your interests help Solu show you articles and guidance that are most relevant to you." },
      { type: "steps", items: [
        "Go to Profile",
        "Tap \"Edit interests\"",
        "Select or deselect topics",
        "Tap Save",
      ]},
      { type: "h2", text: "Update your email or password" },
      { type: "p", text: "Email and password changes are made through your account security settings. Tap \"Account\" in Settings and follow the prompts." },
    ],
  },
  {
    slug: "how-to-log-out",
    title: "How to log out of Solu",
    summary: "Sign out of your Solu account from the Settings screen.",
    category: "getting-started",
    related: ["how-to-close-your-account", "how-to-enable-face-id-touch-id"],
    content: [
      { type: "steps", items: [
        "Open the Solu app",
        "Tap the Profile icon in the bottom navigation",
        "Scroll down to Settings",
        "Tap \"Log Out\" under the Account section",
        "Confirm you want to log out",
      ]},
      { type: "tip", text: "Logging out removes your account from this device but does not delete your data. You can sign back in at any time." },
    ],
  },
  {
    slug: "how-to-close-your-account",
    title: "How to close your account and delete your data",
    summary: "What happens when you close your Solu account and how to request it.",
    category: "getting-started",
    related: ["how-to-log-out", "how-to-export-your-data", "what-data-does-solu-collect"],
    content: [
      { type: "h2", text: "Before you close your account" },
      { type: "list", items: [
        "All your personal data, cycle logs, journal entries, and progress will be permanently deleted",
        "This action cannot be undone",
        "If you have an active subscription, cancel it first to avoid being charged again — subscriptions are managed through the App Store or Google Play",
      ]},
      { type: "h2", text: "How to close your account" },
      { type: "steps", items: [
        "Open the Solu app",
        "Go to Settings",
        "Scroll to the Account section",
        "Tap \"Close Account\"",
        "Read the confirmation screen carefully",
        "Tap \"Delete my account\" to confirm",
      ]},
      { type: "warning", text: "Account closure is permanent. Solu cannot recover your data once it has been deleted." },
    ],
  },

  // ── CYCLE & PHASES ───────────────────────────────────────────────────
  {
    slug: "how-solu-tracks-your-cycle",
    title: "How Solu tracks your cycle",
    summary: "Solu uses your period logs and cycle length to calculate your current phase.",
    category: "cycle-and-phases",
    related: ["the-four-phases-explained", "how-to-log-your-period", "how-to-update-your-cycle-length"],
    content: [
      { type: "p", text: "Solu tracks your menstrual cycle to show you guidance that fits where you are in your cycle right now." },
      { type: "h2", text: "What Solu uses" },
      { type: "list", items: [
        "The first day of your last period",
        "Your average cycle length — you enter this, or Solu estimates it from your logs over time",
        "The number of period days you log",
      ]},
      { type: "h2", text: "How phases are calculated" },
      { type: "p", text: "Solu divides your cycle into four phases: Menstrual, Follicular, Ovulation, and Luteal. Using your logged dates and cycle length, it works out which phase you're currently in and shows the content most relevant to that phase — not just the day number, but your position within the phase itself." },
      { type: "h2", text: "Does Solu get more accurate over time?" },
      { type: "p", text: "Yes. The more cycles you log, the better Solu understands your personal pattern. If your cycle length varies, Solu adapts its predictions as new data comes in." },
      { type: "tip", text: "If your phase looks wrong, go to My Cycle and check that your most recent period start date is correct." },
    ],
  },
  {
    slug: "the-four-phases-explained",
    title: "The four cycle phases explained",
    summary: "What happens in each phase of your cycle and what Solu shows you during each one.",
    category: "cycle-and-phases",
    related: ["how-solu-tracks-your-cycle", "how-to-log-your-period", "smart-insights-explained"],
    content: [
      { type: "p", text: "Every menstrual cycle moves through four phases. Solu tracks which phase you're in and tailors your guidance to match." },
      { type: "h2", text: "Menstrual (days 1–5 on average)" },
      { type: "p", text: "This phase begins on the first day of your period. Hormone levels are at their lowest. Solu suggests gentler activity and nourishing foods that support your body during this time." },
      { type: "h2", text: "Follicular (days 6–13 on average)" },
      { type: "p", text: "After your period ends, oestrogen begins to rise. Energy typically increases, and many women feel more motivated and sociable. Solu encourages building on this energy with progressive movement and new activities." },
      { type: "h2", text: "Ovulation (around day 14 on average)" },
      { type: "p", text: "Oestrogen peaks, triggering the release of an egg. This is typically when energy and confidence are at their highest. Solu reflects this with more intensive movement suggestions and social encouragement." },
      { type: "h2", text: "Luteal (days 15–28 on average)" },
      { type: "p", text: "After ovulation, progesterone rises and then falls toward the end of the phase. Some women notice mood changes, cravings, or lower energy in the later luteal days. Solu adjusts its guidance to support rest, nourishment, and emotional wellbeing." },
      { type: "tip", text: "Every cycle is different, and so is every body. The timings above are averages — your Solu phases are calculated from your personal cycle data." },
    ],
  },
  {
    slug: "how-to-log-your-period",
    title: "How to log your period in Solu",
    summary: "Keep your cycle tracking accurate by logging the start of each period.",
    category: "cycle-and-phases",
    related: ["how-solu-tracks-your-cycle", "how-to-update-your-cycle-length", "your-fertile-window"],
    content: [
      { type: "h2", text: "Log a new period" },
      { type: "steps", items: [
        "Tap \"My Cycle\" in the bottom navigation",
        "Tap the calendar on the day your period started",
        "Confirm the date",
        "Solu updates your current phase automatically",
      ]},
      { type: "h2", text: "Edit or remove a period log" },
      { type: "steps", items: [
        "Go to My Cycle",
        "Find the logged period in the calendar",
        "Tap it to edit the start date or remove the entry",
      ]},
      { type: "tip", text: "Logging your period on day 1 — as early as possible — gives Solu the most accurate phase calculation for the days ahead." },
    ],
  },
  {
    slug: "your-fertile-window",
    title: "Your fertile window on Solu",
    summary: "What Solu shows about your fertile window and what it means.",
    category: "cycle-and-phases",
    related: ["the-four-phases-explained", "choosing-your-cycle-type", "how-solu-tracks-your-cycle"],
    content: [
      { type: "p", text: "If you have a natural cycle, Solu highlights your estimated fertile window on the My Cycle calendar." },
      { type: "h2", text: "What \"Fertile window opens\" means" },
      { type: "p", text: "When your fertile window opens, Solu shows the note: \"Fertile window opens — higher pregnancy risk.\" This means your body is approaching the time in your cycle when pregnancy is most likely to occur." },
      { type: "warning", text: "Solu is not a contraceptive and is not a fertility monitoring tool. The fertile window shown is an estimate based on your average cycle. Do not use Solu to avoid or achieve pregnancy without guidance from your healthcare provider." },
      { type: "h2", text: "Hormonal contraception users" },
      { type: "p", text: "If you've selected \"Hormonal contraception\" as your cycle type, the fertile window is not shown. Hormonal contraception suppresses ovulation, so the fertile window estimate does not apply." },
    ],
  },
  {
    slug: "how-to-update-your-cycle-length",
    title: "How to update your cycle length or period dates",
    summary: "Keep your Solu predictions accurate by keeping your cycle data up to date.",
    category: "cycle-and-phases",
    related: ["how-solu-tracks-your-cycle", "how-to-log-your-period", "choosing-your-cycle-type"],
    content: [
      { type: "h2", text: "Why cycle length matters" },
      { type: "p", text: "Solu uses your average cycle length to predict which phase you'll be in on future days and to calculate your fertile window (if applicable). Keeping it up to date helps Solu serve more accurate guidance." },
      { type: "h2", text: "Update your cycle length" },
      { type: "steps", items: [
        "Tap \"My Cycle\" in the bottom navigation",
        "Tap the settings or edit icon",
        "Adjust your average cycle length",
        "Tap Save",
      ]},
      { type: "h2", text: "What if my cycle length varies?" },
      { type: "p", text: "If your cycle is irregular, choose \"Irregular\" as your cycle type in your profile. Solu will track your cycle with a lower-confidence indicator and adjust as more logged data comes in. Over time, its predictions improve." },
    ],
  },

  // ── PRIVACY & SECURITY ───────────────────────────────────────────────
  {
    slug: "what-is-private-health-mode",
    title: "What is Private Health mode?",
    summary: "An optional setting that encrypts your most sensitive health data so only you can access it.",
    category: "privacy-and-security",
    related: ["how-to-enable-face-id-touch-id", "what-data-does-solu-collect", "does-solu-share-my-data"],
    content: [
      { type: "p", text: "Private Health is an opt-in feature that adds an extra layer of encryption to your most sensitive health data inside Solu." },
      { type: "h2", text: "What Private Health protects" },
      { type: "p", text: "When Private Health is on, your personal health entries are encrypted in a way that only your device can read. This means that even Solu's servers cannot access your raw health data." },
      { type: "h2", text: "How to turn on Private Health" },
      { type: "steps", items: [
        "Open the Solu app",
        "Go to Settings",
        "Tap \"Private Health\" under the Privacy section",
        "Follow the setup steps to enable encryption",
      ]},
      { type: "h2", text: "Does Private Health affect how Solu works?" },
      { type: "p", text: "No. With Private Health on, Solu works exactly the same way. Your guidance, phases, and recommendations are not affected." },
      { type: "tip", text: "Private Health is optional and off by default. You can turn it on or off at any time." },
    ],
  },
  {
    slug: "how-to-enable-face-id-touch-id",
    title: "How to enable Face ID or Touch ID on Solu",
    summary: "Lock the Solu app with your device's biometric authentication.",
    category: "privacy-and-security",
    related: ["what-is-private-health-mode", "how-to-log-out"],
    content: [
      { type: "p", text: "If you want an extra layer of security, you can require Face ID (iPhone) or Touch ID (fingerprint) every time you open Solu." },
      { type: "h2", text: "Turn on biometric lock" },
      { type: "steps", items: [
        "Open the Solu app",
        "Go to Settings",
        "Tap \"Face ID / Touch ID\" under the Security section",
        "Toggle it on",
        "Confirm using your Face ID or fingerprint when prompted",
      ]},
      { type: "h2", text: "What happens when it's on" },
      { type: "p", text: "Each time you open Solu, the app will ask you to authenticate before showing your content. If authentication fails, you'll be prompted to enter your Solu password instead." },
      { type: "tip", text: "This setting uses your device's built-in biometrics. Solu never receives your Face ID data or fingerprint." },
    ],
  },
  {
    slug: "what-data-does-solu-collect",
    title: "What data does Solu collect?",
    summary: "A plain-language summary of what Solu stores and how it uses it.",
    category: "privacy-and-security",
    related: ["does-solu-share-my-data", "how-to-export-your-data", "what-is-private-health-mode"],
    content: [
      { type: "h2", text: "Health data you log" },
      { type: "p", text: "Solu stores the cycle and health data you enter directly in the app: period start dates, cycle length, mood logs, journal entries, and any goals or activities you track." },
      { type: "h2", text: "Anonymous progress data" },
      { type: "p", text: "If you've turned on \"Share Progress Data\" in Settings, Solu collects anonymised usage data to improve the app. This data cannot be linked back to you personally. You can turn it off at any time in Settings." },
      { type: "h2", text: "What Solu does not do" },
      { type: "list", items: [
        "Solu does not sell your personal data",
        "Solu does not share your identifiable health data with third parties",
        "Solu is not a medical device and does not share data with healthcare providers automatically",
      ]},
      { type: "tip", text: "To view or download a copy of all data Solu holds on you, use the \"Export my data\" option in Settings." },
    ],
  },
  {
    slug: "how-to-export-your-data",
    title: "How to export your Solu data",
    summary: "Download a copy of all the data Solu holds about you.",
    category: "privacy-and-security",
    related: ["what-data-does-solu-collect", "how-to-close-your-account"],
    content: [
      { type: "p", text: "You can request a copy of your personal data at any time from within the app." },
      { type: "h2", text: "How to export" },
      { type: "steps", items: [
        "Open the Solu app",
        "Go to Settings",
        "Tap \"Export my data\" under Data & Wearables",
        "Choose the data types you want to include",
        "Tap Export",
        "Solu will prepare your file and send a download link to your registered email address",
      ]},
      { type: "h2", text: "What's included" },
      { type: "list", items: [
        "Cycle logs and period dates",
        "Mood and journal entries",
        "Goal and progress history",
        "Account details",
      ]},
      { type: "tip", text: "Large exports may take a few minutes. Check your spam folder if the download link doesn't arrive immediately." },
    ],
  },
  {
    slug: "does-solu-share-my-data",
    title: "Does Solu share my data with anyone?",
    summary: "Solu does not sell or share your personal health data.",
    category: "privacy-and-security",
    related: ["what-data-does-solu-collect", "what-is-private-health-mode"],
    content: [
      { type: "p", text: "Solu does not sell your personal data or share your identifiable health information with third parties." },
      { type: "h2", text: "Share Progress Data (optional)" },
      { type: "p", text: "If you've opted in to \"Share Progress Data\" in Settings, Solu collects anonymised, aggregated usage data to help improve the app. This data is not tied to your identity and cannot be used to identify you. You can turn it off at any time in Settings." },
      { type: "h2", text: "Legal requests" },
      { type: "p", text: "In rare circumstances where required by law, Solu may be required to disclose data to legal authorities. We will notify you where possible and legal." },
      { type: "tip", text: "For the full details, read the Solu Privacy Policy at solu.ae/privacy." },
    ],
  },

  // ── SUBSCRIPTIONS ────────────────────────────────────────────────────
  {
    slug: "solu-plans-comparison",
    title: "What's included in Solu Free and Solu+?",
    summary: "Compare what's available on each Solu plan.",
    category: "subscriptions",
    related: ["how-to-upgrade-your-subscription", "how-to-cancel-your-subscription"],
    content: [
      { type: "p", text: "Solu launches on two plans: Solu Free and Solu+. Both include full cycle tracking and four-phase guidance." },
      { type: "h2", text: "Solu Free" },
      { type: "p", text: "Available to everyone at no cost." },
      { type: "list", items: [
        "Full cycle tracking and period logging",
        "Four-phase daily guidance (Menstrual, Follicular, Ovulation, Luteal)",
        "Core Smart Insights covering body and energy",
        "Did You Know cards with daily health facts",
        "Support Your Body Today: four daily action tiles (Move, Nourish, Rest, Mind)",
        "Three phase-matched articles per week",
        "One active goal with basic progress tracking",
        "Progress page for the past 28 days",
        "Glow Up Score with five levels",
        "Community access: groups, QR friend-adding, city leaderboard",
        "Selected Solu-hosted online events",
        "Private Health mode and data export",
      ]},
      { type: "h2", text: "Solu+" },
      { type: "p", text: "More depth, more personalisation, and member access to Hangouts." },
      { type: "list", items: [
        "Everything in Solu Free",
        "Full Smart Insights: adds mind, hydration and time-of-day guidance",
        "Swap any daily action for another phase-matched option",
        "Unlimited phase-matched articles",
        "Up to three active goals with a day-by-day progress breakdown",
        "Glow Up Score history and trends",
        "Full progress history: past 3 cycles, 6 months, and year",
        "Monthly cycle report, shareable with your doctor",
        "All Solu-hosted online events included, free or discounted entry to in-person hangouts",
        "Member pricing and early access on partner events",
        "Early access to new features",
      ]},
      { type: "h2", text: "Pricing" },
      { type: "list", items: [
        "Solu Free: free",
        "Solu+: AED 34.99 per month or AED 199.99 per year",
        "Founding member (first 300): AED 149.99 per year, locked for as long as the subscription stays active",
        "7-day free trial on the annual plan only",
      ]},
      { type: "tip", text: "Not sure? Start with Solu Free and upgrade at any time from within the app." },
    ],
  },
  {
    slug: "how-to-upgrade-your-subscription",
    title: "How to upgrade to Solu+",
    summary: "Upgrade from Solu Free to Solu+ from within the app or at solu.ae.",
    category: "subscriptions",
    related: ["solu-plans-comparison", "how-to-cancel-your-subscription", "what-happens-if-i-cancel"],
    content: [
      { type: "h2", text: "Upgrade in the app" },
      { type: "steps", items: [
        "Open the Solu app",
        "Go to your Profile",
        "Tap \"Upgrade\" or find the subscription section",
        "Choose monthly (AED 34.99) or annual (AED 199.99)",
        "Complete payment through the App Store or Google Play",
      ]},
      { type: "h2", text: "Annual plan free trial" },
      { type: "p", text: "The annual plan includes a 7-day free trial. You won't be charged until the trial ends, and you can cancel any time before then." },
      { type: "h2", text: "Founding member offer" },
      { type: "p", text: "The first 300 members who subscribe to the annual plan pay AED 149.99 per year. This price is locked for as long as the subscription stays active." },
      { type: "h2", text: "Subscribe on the web" },
      { type: "p", text: "You can also subscribe at solu.ae. Log in to your Solu account on the website to complete payment, then open the app to unlock your Solu+ features." },
      { type: "tip", text: "Subscriptions renew automatically. You'll receive a reminder from Apple or Google before your renewal date." },
    ],
  },
  {
    slug: "how-to-cancel-your-subscription",
    title: "How to cancel your Solu+ subscription",
    summary: "Cancel Solu+ through your app store — not through Solu directly.",
    category: "subscriptions",
    related: ["what-happens-if-i-cancel", "solu-plans-comparison", "how-to-close-your-account"],
    content: [
      { type: "p", text: "Solu+ subscriptions are managed by the App Store (iOS) or Google Play (Android) — or by Stripe if you subscribed on solu.ae — not by Solu directly. To cancel, go through where you originally subscribed." },
      { type: "h2", text: "Cancel on iOS (iPhone or iPad)" },
      { type: "steps", items: [
        "Open the Settings app on your iPhone",
        "Tap your name at the top",
        "Tap \"Subscriptions\"",
        "Find Solu in the list",
        "Tap \"Cancel Subscription\"",
      ]},
      { type: "h2", text: "Cancel on Android" },
      { type: "steps", items: [
        "Open the Google Play Store",
        "Tap your profile photo in the top right",
        "Tap \"Payments & subscriptions\"",
        "Tap \"Subscriptions\"",
        "Find Solu in the list and tap \"Cancel subscription\"",
      ]},
      { type: "tip", text: "You'll keep access to your plan's features until the end of the current billing period." },
      { type: "warning", text: "Cancelling your subscription does not delete your Solu account. To delete your account and data, go to Settings > Close Account." },
    ],
  },
  {
    slug: "what-happens-if-i-cancel",
    title: "What happens to my data if I cancel Solu+?",
    summary: "Cancelling Solu+ does not delete your data — it moves back to Solu Free.",
    category: "subscriptions",
    related: ["how-to-cancel-your-subscription", "how-to-close-your-account"],
    content: [
      { type: "h2", text: "Your data stays safe" },
      { type: "p", text: "Cancelling Solu+ does not delete your Solu account or any of your health data. Your cycle logs, journal entries, mood history, goals, and all progress are retained." },
      { type: "h2", text: "What changes when you cancel" },
      { type: "p", text: "After your billing period ends, your account moves to Solu Free. Solu+ features — full Smart Insights, unlimited articles, additional goals, extended progress history, and Hangout member benefits — will no longer be available. Your core cycle tracking and four-phase guidance continue as normal." },
      { type: "h2", text: "Your history is waiting" },
      { type: "p", text: "Solu records your data regardless of plan. If you re-subscribe, your full history is there — you don't start from scratch. The extended progress views (3 cycles, 6 months, year) unlock immediately on resubscribing." },
      { type: "tip", text: "If you're cancelling because of a specific issue, reach out first at solu.ae/contact — we'd love to help." },
    ],
  },

  // ── USING SOLU ───────────────────────────────────────────────────────
  {
    slug: "how-the-glow-up-score-works",
    title: "How the Glow Up Score works",
    summary: "Earn points for every action in Solu and level up from Seed to Luminous.",
    category: "using-solu",
    related: ["understanding-goals", "smart-insights-explained", "how-community-works"],
    content: [
      { type: "p", text: "The Glow Up Score is Solu's way of celebrating how much you're doing for your body and mind. Every healthy action you take earns points, and those points add up over time — permanently." },
      { type: "h2", text: "Earning points" },
      { type: "p", text: "You earn Glow Up points for actions across the app: logging a move step, saving a recipe, writing a journal entry, opening a Did You Know card, and more. Points never expire and never reset." },
      { type: "h2", text: "Goal bonus" },
      { type: "p", text: "If an action matches your active goal, you earn a small bonus on top of the standard points. The app shows this as a reward moment when it happens." },
      { type: "h2", text: "The five levels" },
      { type: "list", items: [
        "Seed — your starting point",
        "Bloom — your first milestone",
        "Glow — things are getting interesting",
        "Radiance — you're glowing",
        "Luminous — the highest level",
      ]},
      { type: "h2", text: "The Glow Up ring" },
      { type: "p", text: "The ring on your Glow Up card shows your progress from your current level to the next. When the ring fills, you level up and the ring restarts. At Luminous, the ring stays full." },
      { type: "tip", text: "Focus on the activities you enjoy most and the points will follow. Glow Up points count everything you do in the app." },
    ],
  },
  {
    slug: "understanding-goals",
    title: "How Goals work on Solu",
    summary: "Set a focus for your cycle and track your progress over the month.",
    category: "using-solu",
    related: ["how-the-glow-up-score-works", "setting-up-your-profile"],
    content: [
      { type: "p", text: "Goals give your Solu experience a focus. Choose one that matches what you're working on right now, and Solu tracks how consistently you follow through over your cycle." },
      { type: "h2", text: "The six goals" },
      { type: "list", items: [
        "Feel more confident in my body",
        "Move my body consistently",
        "Eat better throughout the month",
        "Understand my cycle better",
        "Connect with other women",
        "Manage my energy and rest better",
      ]},
      { type: "h2", text: "How many goals can I have?" },
      { type: "p", text: "Solu Free supports one active goal at a time. Solu+ lets you set up to three active goals simultaneously, with daily actions tailored to all of them." },
      { type: "h2", text: "How progress is tracked" },
      { type: "p", text: "On Solu Free, your goal bar shows a basic percentage based on how consistently you've taken goal-matched actions this cycle. On Solu+, you get a day-by-day breakdown so you can see exactly where you stayed consistent and where you dipped." },
      { type: "h2", text: "When does it reset?" },
      { type: "p", text: "Your goal progress resets on day 1 of each new period, so each cycle is a fresh start. The goal itself carries over unless you change it." },
      { type: "h2", text: "Can I change my goal?" },
      { type: "p", text: "Yes. Go to your Profile to switch to a different goal at any time. Your progress will reset for the new goal." },
    ],
  },
  {
    slug: "how-community-works",
    title: "How Community works on Solu",
    summary: "Connect with other women on the same phase, share progress, and add friends.",
    category: "using-solu",
    related: ["understanding-goals", "how-the-glow-up-score-works"],
    content: [
      { type: "p", text: "The Community section is where you connect with other women on their wellness journey." },
      { type: "h2", text: "What you can do in Community" },
      { type: "list", items: [
        "Join groups and post to other women in the same phase",
        "Reply to community posts",
        "Add friends using your personal QR code",
        "See how your activity level this phase compares with other Solu users in your city",
      ]},
      { type: "h2", text: "Adding friends with your QR code" },
      { type: "p", text: "Tap the QR code icon on your profile to show your personal code. Ask a friend to scan it, or scan theirs, to add each other on Solu." },
      { type: "h2", text: "The city leaderboard badge" },
      { type: "p", text: "The community badge shows how your activity level this phase compares with other Solu users in your city. It's based on what you've done in your current phase — not your lifetime total — so new users have just as good a chance of ranking highly as long-time users." },
      { type: "tip", text: "Community posts are visible to all Solu users. Keep your posts kind and supportive." },
    ],
  },
  {
    slug: "smart-insights-explained",
    title: "What are Smart Insights?",
    summary: "Personalised insight cards on your Today page, matched to your phase and time of day.",
    category: "using-solu",
    related: ["the-four-phases-explained", "did-you-know-cards", "how-the-glow-up-score-works"],
    content: [
      { type: "p", text: "Smart Insights are the daily cards on your Today page that give you personalised, actionable guidance based on where you are in your cycle right now." },
      { type: "h2", text: "What they show" },
      { type: "p", text: "Each Smart Insight card shows guidance tailored to your current phase. Tap a card to see the full detail in a bottom sheet." },
      { type: "h2", text: "What's included on each plan" },
      { type: "p", text: "Solu Free includes core Smart Insights covering body and energy. Solu+ unlocks the full set, adding mind, hydration, and time-of-day guidance. Morning cards on Solu+ include an extra line of mental and emotional guidance matched to your phase." },
      { type: "h2", text: "How they're personalised" },
      { type: "p", text: "Solu matches insights to your current phase (Menstrual, Follicular, Ovulation, or Luteal) and your position within that phase (early, middle, or late). Solu+ further adjusts by time of day." },
      { type: "h2", text: "Do they repeat?" },
      { type: "p", text: "Solu rotates through a library of insights to avoid repetition. You won't see the same card two days in a row in the same slot." },
    ],
  },
  {
    slug: "did-you-know-cards",
    title: "What are Did You Know cards?",
    summary: "Quick health facts on your Today carousel, covering six wellness topics.",
    category: "using-solu",
    related: ["smart-insights-explained", "the-four-phases-explained", "understanding-goals"],
    content: [
      { type: "p", text: "Did You Know cards appear on your Today carousel and share a quick, interesting health fact each day." },
      { type: "h2", text: "What topics do they cover?" },
      { type: "p", text: "The cards cover six topic areas: hormones and your cycle, nutrition, movement and exercise, sleep and rest, mental wellbeing, and community health. Each fact is chosen to help you understand your body a little better." },
      { type: "h2", text: "Do they count toward anything?" },
      { type: "p", text: "Yes. Opening a Did You Know card and reading it in full counts toward your \"Understand my cycle better\" goal progress, up to once per day." },
    ],
  },
  {
    slug: "articles-on-the-today-page",
    title: "Articles on your Today page",
    summary: "Solu surfaces two phase-personalised blog articles on your Today page each day.",
    category: "using-solu",
    related: ["smart-insights-explained", "the-four-phases-explained", "understanding-goals"],
    content: [
      { type: "p", text: "Below your Smart Insights tiles, the Today page surfaces two Solu blog articles matched to your current phase." },
      { type: "h2", text: "How many articles do I get?" },
      { type: "p", text: "Solu Free includes three phase-matched articles per week. Solu+ unlocks unlimited articles, so you always have fresh reading matched to your phase and interests." },
      { type: "h2", text: "How articles are chosen" },
      { type: "p", text: "Articles are selected based on your current phase first, then ranked by how closely they match your chosen interests. Solu rotates articles so you don't see the same one on consecutive days." },
      { type: "h2", text: "Reading an article" },
      { type: "p", text: "Tap an article card to open a preview with the cover image, title, and opening paragraph. Tap \"Read Full Article\" to open the full post in Solu's in-app browser." },
      { type: "h2", text: "Does reading articles count toward anything?" },
      { type: "p", text: "Yes. Opening the full article via \"Read Full Article\" counts toward your \"Understand my cycle better\" goal progress, up to once per day." },
    ],
  },
]

export function getArticlesByCategory(categorySlug: string): HelpArticle[] {
  return helpArticles.filter((a) => a.category === categorySlug)
}

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return helpArticles.find((a) => a.slug === slug)
}

export function searchArticles(query: string): HelpArticle[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return helpArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.some(
        (b) =>
          (b.type === "p" || b.type === "h2" || b.type === "h3" || b.type === "tip" || b.type === "warning") &&
          b.text.toLowerCase().includes(q),
      ),
  )
}

export const popularSlugs = [
  "how-to-log-your-period",
  "the-four-phases-explained",
  "how-the-glow-up-score-works",
  "what-is-private-health-mode",
  "how-to-cancel-your-subscription",
  "understanding-goals",
]
