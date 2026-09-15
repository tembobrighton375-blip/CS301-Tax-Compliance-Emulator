export const SHOPOWNER_SCENARIOS = [
  {
    id: "shop_s1",
    title: "Supplier Invoice",
    situation:
      "A new wholesale supplier offers you goods at 15% lower prices - but they won't issue an invoice or receipt. Your current supplier provides full documentation. What do you do?",
    icon: "📦",
    choices: [
      {
        text: "Stay with documented supplier",
        subtext: "Higher cost but proper records",
        outcome: "good",
        consequenceTitle: "Audit-Ready Business",
        consequenceDesc:
          "Your proper documentation builds trust with ZRA. When an audit happens, you're prepared. The small extra cost is insurance against penalties.",
        scoreChange: 20,
        moneyChange: -300,
      },
      {
        text: "Take cheaper, no-receipt option",
        subtext: "Save money now",
        outcome: "neutral",
        consequenceTitle: "Hidden Risk",
        consequenceDesc:
          "You saved K300 this month, but ZRA can disallow all undocumented purchases. If audited, you'll pay tax on gross sales with no deductions.",
        scoreChange: -15,
        moneyChange: 300,
      },
      {
        text: "Switch entirely to undocumented suppliers",
        subtext: "Cut costs across the board",
        outcome: "bad",
        consequenceTitle: "No Paper Trail",
        consequenceDesc:
          "With no receipts anywhere in your books, an audit leaves you unable to justify a single expense. ZRA taxes your full turnover and adds a penalty for inadequate records.",
        scoreChange: -25,
        moneyChange: -800,
      },
    ],
  },
  {
    id: "shop_s2",
    title: "TPIN Registration",
    situation:
      "Your shop has been trading for six months without a Taxpayer Identification Number (TPIN). A council officer mentions that TPIN is now required to renew your trading license. What do you do?",
    icon: "🪪",
    choices: [
      {
        text: "Register for a TPIN immediately",
        subtext: "Free, takes one afternoon at ZRA",
        outcome: "good",
        consequenceTitle: "Legit From Day One",
        consequenceDesc:
          "You're now formally in the tax system. Your license renews without issue, and you can open a proper business bank account and apply for supplier credit.",
        scoreChange: 20,
        moneyChange: 0,
      },
      {
        text: "Ask a relative to use their TPIN for now",
        subtext: "Delay registering your own",
        outcome: "neutral",
        consequenceTitle: "Borrowed Identity, Borrowed Risk",
        consequenceDesc:
          "The license renews, but all your sales are now tied to someone else's tax record. Untangling it later costs you time and a trip back to ZRA to correct the mismatch.",
        scoreChange: -10,
        moneyChange: -50,
      },
      {
        text: "Keep trading without any TPIN",
        subtext: "Deal with it later",
        outcome: "bad",
        consequenceTitle: "License Renewal Refused",
        consequenceDesc:
          "The council refuses to renew your trading license without a TPIN. You lose a week of trading sorting out registration under pressure, plus a late-registration penalty.",
        scoreChange: -20,
        moneyChange: -350,
      },
    ],
  },
  {
    id: "shop_s3",
    title: "Turnover Tax Filing Deadline",
    situation:
      "Your monthly turnover tax return is due tomorrow. You've been busy restocking and haven't totaled this month's sales yet. A friend says ZRA rarely checks small shops.",
    icon: "🧾",
    choices: [
      {
        text: "Stay late tonight and file on time",
        subtext: "Total the till and submit before the deadline",
        outcome: "good",
        consequenceTitle: "Clean Record",
        consequenceDesc:
          "Filing on time keeps your compliance history spotless. Late nights are worth it — ZRA's system flags on-time filers as lower risk for audits.",
        scoreChange: 20,
        moneyChange: -180,
      },
      {
        text: "File a rough estimate, correct it next month",
        subtext: "Guess now, amend later",
        outcome: "neutral",
        consequenceTitle: "Close Enough, For Now",
        consequenceDesc:
          "Your estimate was reasonably close. ZRA accepts the amendment next month, though you're now on their radar for a follow-up review of your record-keeping.",
        scoreChange: -5,
        moneyChange: -180,
      },
      {
        text: "Skip filing this month",
        subtext: "File next month instead, double up",
        outcome: "bad",
        consequenceTitle: "Late Filing Penalty",
        consequenceDesc:
          "ZRA charges a fixed penalty for the missed deadline plus interest on the unpaid tax. Your friend's advice turns out to be expensive.",
        scoreChange: -20,
        moneyChange: -420,
      },
    ],
  },
  {
    id: "shop_s4",
    title: "Hiring a Shop Assistant",
    situation:
      "Business is growing and you've hired your first shop assistant at K1,200/month. You need to decide how to handle their pay and statutory deductions.",
    icon: "🧑‍🤝‍🧑",
    choices: [
      {
        text: "Register for PAYE and NAPSA properly",
        subtext: "Deduct and remit as required",
        outcome: "good",
        consequenceTitle: "A Real Employer",
        consequenceDesc:
          "Your assistant now has a pension record and a legitimate payslip. It's more paperwork, but you can now hire more staff without worrying about back-payments piling up.",
        scoreChange: 20,
        moneyChange: -150,
      },
      {
        text: "Pay cash, register 'later' once busier",
        subtext: "Skip PAYE/NAPSA for now",
        outcome: "neutral",
        consequenceTitle: "A Debt You're Building",
        consequenceDesc:
          "You save on paperwork this month, but every month you delay adds to a backlog of PAYE and NAPSA contributions you'll eventually have to pay — with interest.",
        scoreChange: -10,
        moneyChange: 150,
      },
      {
        text: "Treat them as a casual, no records at all",
        subtext: "No PAYE, no NAPSA, no payslip",
        outcome: "bad",
        consequenceTitle: "Labour Inspection Risk",
        consequenceDesc:
          "A labour inspection finds an undocumented worker with no statutory contributions. You're fined and ordered to backdate NAPSA contributions for the full period.",
        scoreChange: -25,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "shop_s5",
    title: "Council Trading License Renewal",
    situation:
      "Your annual council trading license is due for renewal. The fee has increased this year, and you notice a neighboring shop has been trading for months on an expired license with no issue.",
    icon: "🏛️",
    choices: [
      {
        text: "Renew before the deadline",
        subtext: "Pay the new fee promptly",
        outcome: "good",
        consequenceTitle: "Uninterrupted Trading",
        consequenceDesc:
          "Your license stays current, and you avoid any risk of a surprise council inspection shutting you down mid-trading-day.",
        scoreChange: 15,
        moneyChange: -220,
      },
      {
        text: "Renew a few weeks late",
        subtext: "Cash flow is tight this month",
        outcome: "neutral",
        consequenceTitle: "Small Penalty, Lesson Learned",
        consequenceDesc:
          "The council adds a modest late fee. Not a disaster, but you resolve to budget for the renewal earlier next year.",
        scoreChange: -5,
        moneyChange: -260,
      },
      {
        text: "Keep trading on the expired license",
        subtext: "Follow the neighbor's example",
        outcome: "bad",
        consequenceTitle: "Shop Sealed",
        consequenceDesc:
          "A council sweep catches your shop trading on an expired license. You're fined and your shop is temporarily sealed, costing days of lost sales.",
        scoreChange: -20,
        moneyChange: -700,
      },
    ],
  },
  {
    id: "shop_s6",
    title: "The Till Roll Question",
    situation:
      "A busy Saturday brings in K3,400 in sales. Recording everything through the till takes extra time during the rush. A few customers pay cash and leave before you can ring them up properly.",
    icon: "🧮",
    choices: [
      {
        text: "Record every sale, even if it slows the queue",
        subtext: "Full, honest till records",
        outcome: "good",
        consequenceTitle: "Numbers That Match",
        consequenceDesc:
          "Your till total matches your bank deposits and your tax return, month after month. When ZRA cross-checks your mobile money statements, everything lines up.",
        scoreChange: 20,
        moneyChange: -170,
      },
      {
        text: "Record most sales, round down a bit",
        subtext: "Skip a few small cash sales",
        outcome: "neutral",
        consequenceTitle: "Small Gaps Add Up",
        consequenceDesc:
          "The under-recording is minor today, but doing this regularly creates a pattern that doesn't match your actual stock movement — the kind of gap an audit is built to find.",
        scoreChange: -10,
        moneyChange: 100,
      },
      {
        text: "Keep two sets of numbers — real and 'for tax'",
        subtext: "Under-report turnover consistently",
        outcome: "bad",
        consequenceTitle: "Books Don't Balance",
        consequenceDesc:
          "An audit compares your declared turnover against your stock purchases and finds a large, unexplained gap. ZRA assesses tax on the higher figure plus a penalty for concealment.",
        scoreChange: -30,
        moneyChange: -900,
      },
    ],
  },
  {
    id: "shop_s7",
    title: "Restocking Trip Across the Border",
    situation:
      "You travel to source cheaper stock from a neighboring country. At the border, you can declare the goods and pay import duty, or risk bringing them in through a quieter crossing.",
    icon: "🚚",
    choices: [
      {
        text: "Declare the goods and pay duty",
        subtext: "Full customs declaration",
        outcome: "good",
        consequenceTitle: "Stock You Can Sell Openly",
        consequenceDesc:
          "Your goods come with proper import documents, so you can sell them without worrying about a spot-check. Suppliers and customers alike see you as a legitimate operator.",
        scoreChange: 20,
        moneyChange: -400,
      },
      {
        text: "Under-declare the quantity",
        subtext: "Pay duty on only part of the load",
        outcome: "neutral",
        consequenceTitle: "Partial Cover, Partial Risk",
        consequenceDesc:
          "You save on duty for now, but the undeclared portion of your stock has no paper trail. If it's ever traced back to this shipment, you'll owe the difference plus penalties.",
        scoreChange: -15,
        moneyChange: 150,
      },
      {
        text: "Use the quiet crossing, skip duty entirely",
        subtext: "Avoid customs altogether",
        outcome: "bad",
        consequenceTitle: "Goods Seized",
        consequenceDesc:
          "A spot-check on the route finds undeclared goods. The stock is seized and you're fined — losing both the goods and the money you spent sourcing them.",
        scoreChange: -30,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "shop_s8",
    title: "ZRA Tax Amnesty Notice",
    situation:
      "ZRA announces a limited-time program waiving penalties and interest for businesses that come forward and settle unpaid taxes from previous years. You have some undeclared turnover from last year.",
    icon: "📢",
    choices: [
      {
        text: "Come forward and settle under the amnesty",
        subtext: "Pay the original tax, penalties waived",
        outcome: "good",
        consequenceTitle: "A Clean Slate",
        consequenceDesc:
          "You settle what you owe without the usual penalties and interest. Your tax record is now clean, and you can move forward without last year's gap hanging over the business.",
        scoreChange: 25,
        moneyChange: -350,
      },
      {
        text: "Settle only part of it",
        subtext: "Declare some, hope the rest goes unnoticed",
        outcome: "neutral",
        consequenceTitle: "Half a Clean Slate",
        consequenceDesc:
          "The portion you declared is now settled, but the undeclared remainder is still a liability — and it won't qualify for amnesty terms if it's found later.",
        scoreChange: -5,
        moneyChange: -150,
      },
      {
        text: "Ignore the amnesty offer",
        subtext: "Hope the old gap is never noticed",
        outcome: "bad",
        consequenceTitle: "Full Penalties Still Apply",
        consequenceDesc:
          "Without the amnesty, any future audit of last year's records comes with the full penalty and interest charges — a much costlier outcome than settling now would have been.",
        scoreChange: -20,
        moneyChange: -50,
      },
    ],
  },
  {
    id: "shop_s9",
    title: "PACRA Business Registration",
    situation:
      "You've been trading under a shop name for a year without registering it with PACRA. A bank officer says a registered business name would qualify you for a small business loan.",
    icon: "📝",
    choices: [
      {
        text: "Register the business name with PACRA",
        subtext: "Formalize the shop's identity",
        outcome: "good",
        consequenceTitle: "Loan-Ready",
        consequenceDesc:
          "With a registered business name, the bank approves working capital financing. Formal registration also makes your ZRA filings cleaner, since everything is under one recognized name.",
        scoreChange: 15,
        moneyChange: -250,
      },
      {
        text: "Register, but keep using your personal name for some invoices",
        subtext: "Mixed approach",
        outcome: "neutral",
        consequenceTitle: "Inconsistent Paper Trail",
        consequenceDesc:
          "Some of your records are under the business name and some under your own — enough of a mismatch that the bank asks for extra documentation before approving anything.",
        scoreChange: -5,
        moneyChange: -250,
      },
      {
        text: "Stay unregistered",
        subtext: "Skip the loan opportunity",
        outcome: "bad",
        consequenceTitle: "Growth on Hold",
        consequenceDesc:
          "Without a registered business, the loan application is rejected outright. You miss the chance to expand your stock ahead of the busy season.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "shop_s10",
    title: "Smart Invoice System",
    situation:
      "ZRA is rolling out an electronic invoicing (Smart Invoice) system for businesses. Adopting it takes setup time and a small device cost, but it automatically reports your sales to ZRA in real time.",
    icon: "💻",
    choices: [
      {
        text: "Adopt Smart Invoice now",
        subtext: "Set up the device and start issuing e-invoices",
        outcome: "good",
        consequenceTitle: "Ahead of the Curve",
        consequenceDesc:
          "Your sales are now automatically reported, which means far less manual reconciliation at filing time — and ZRA has no reason to question numbers it already has in real time.",
        scoreChange: 20,
        moneyChange: -280,
      },
      {
        text: "Wait until it becomes mandatory",
        subtext: "Keep manual records for now",
        outcome: "neutral",
        consequenceTitle: "Deferred, Not Avoided",
        consequenceDesc:
          "You save the setup cost for now, but you'll need to adopt it eventually anyway — and manual records mean more work reconciling your return each month in the meantime.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Avoid it and keep sales off the books where possible",
        subtext: "Use the delay to under-report",
        outcome: "bad",
        consequenceTitle: "A Widening Gap",
        consequenceDesc:
          "Once Smart Invoice becomes mandatory, your real-time reported sales will suddenly jump compared to prior returns — inviting exactly the kind of scrutiny you were trying to avoid.",
        scoreChange: -25,
        moneyChange: 200,
      },
    ],
  },
  {
    id: "shop_s11",
    title: "A Family Member on the Books",
    situation:
      "Your cousin, who doesn't actually work in the shop, suggests you add them to payroll to 'shift' some profit into wages and lower your taxable income.",
    icon: "👪",
    choices: [
      {
        text: "Decline — only pay staff who actually work",
        subtext: "Keep payroll honest",
        outcome: "good",
        consequenceTitle: "Payroll You Can Defend",
        consequenceDesc:
          "Every name on your payroll corresponds to a real employee. If ZRA or NAPSA ever reviews your staff list, there's nothing to explain away.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Give them a small, occasional casual payment instead",
        subtext: "Real (if minimal) work, properly recorded",
        outcome: "neutral",
        consequenceTitle: "A Gray Area, Managed Carefully",
        consequenceDesc:
          "As long as the work and payment are genuine and documented, this is defensible — but it's a thin line, and you make a note to keep it that way.",
        scoreChange: 0,
        moneyChange: -80,
      },
      {
        text: "Add them to payroll as suggested",
        subtext: "Reduce taxable profit on paper",
        outcome: "bad",
        consequenceTitle: "Ghost Employee Penalty",
        consequenceDesc:
          "An audit finds a payroll entry with no corresponding work — a red flag for tax fraud. ZRA disallows the deduction, backdates the tax owed, and adds a substantial penalty.",
        scoreChange: -30,
        moneyChange: -750,
      },
    ],
  },
  {
    id: "shop_s12",
    title: "Bookkeeping Software",
    situation:
      "A local accountant offers to set up simple bookkeeping software for your shop for K400, which would auto-calculate your monthly turnover tax and keep a running expense log.",
    icon: "📊",
    choices: [
      {
        text: "Invest in the bookkeeping software",
        subtext: "Pay the setup fee",
        outcome: "good",
        consequenceTitle: "Fewer Mistakes, Less Stress",
        consequenceDesc:
          "Accurate, automatic records mean your monthly filings take minutes instead of hours, and you catch pricing or expense errors long before ZRA would.",
        scoreChange: 15,
        moneyChange: -400,
      },
      {
        text: "Keep using your notebook for now",
        subtext: "Free, but manual and error-prone",
        outcome: "neutral",
        consequenceTitle: "It Works, Barely",
        consequenceDesc:
          "You save the K400, but a transcription error in this month's turnover total means your filing doesn't quite match your bank deposits — a fixable but avoidable headache.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Stop keeping detailed records altogether",
        subtext: "Estimate everything from memory",
        outcome: "bad",
        consequenceTitle: "No Records, No Defense",
        consequenceDesc:
          "Without records, you can't substantiate a single number on your return. When ZRA asks for supporting documents, you have nothing to show — and they assess tax on their own, higher estimate.",
        scoreChange: -25,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "shop_s13",
    title: "A Customer Wants No Receipt",
    situation:
      "A customer buying K600 worth of stock in bulk asks you to skip the receipt in exchange for a small discount on their side — meaning less recorded turnover for you too.",
    icon: "🧾",
    choices: [
      {
        text: "Issue the receipt as normal",
        subtext: "No discount, full record",
        outcome: "good",
        consequenceTitle: "Consistent Records",
        consequenceDesc:
          "Every sale is accounted for. It's a small moment, but consistency like this across hundreds of sales is exactly what keeps your books clean at filing time.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Give a small discount, still issue a receipt for less than the sale",
        subtext: "Under-record just this one sale",
        outcome: "neutral",
        consequenceTitle: "One Small Gap",
        consequenceDesc:
          "It's a minor discrepancy on its own, but stock records will show more sold than what your till reflects — a mismatch that adds up if it becomes a habit.",
        scoreChange: -10,
        moneyChange: 30,
      },
      {
        text: "Skip the receipt entirely",
        subtext: "Off-the-books sale",
        outcome: "bad",
        consequenceTitle: "Stock Doesn't Match Sales",
        consequenceDesc:
          "Repeated off-the-books sales like this are exactly what an inventory reconciliation during an audit is designed to catch — stock leaves the shelf with no matching revenue recorded.",
        scoreChange: -20,
        moneyChange: 60,
      },
    ],
  },
  {
    id: "shop_s14",
    title: "Shop Rent and Deductions",
    situation:
      "You pay K900/month rent for your shop space in cash to the landlord, who doesn't issue receipts. This rent is one of your biggest expenses, and you'd like to deduct it against your taxable income.",
    icon: "🏠",
    choices: [
      {
        text: "Insist on a signed rent agreement and receipts",
        subtext: "Formalize the arrangement",
        outcome: "good",
        consequenceTitle: "A Deduction You Can Prove",
        consequenceDesc:
          "With a proper lease and receipts, your rent is a clean, defensible deduction. Your landlord grumbles about the paperwork but agrees once you explain it protects both of you.",
        scoreChange: 20,
        moneyChange: -50,
      },
      {
        text: "Keep a personal log of payments without landlord receipts",
        subtext: "Some documentation, not verifiable",
        outcome: "neutral",
        consequenceTitle: "Better Than Nothing",
        consequenceDesc:
          "Your own notes help you track cash flow, but without the landlord's confirmation, ZRA may only partially accept this as evidence of a deductible expense.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Pay cash with no records at all",
        subtext: "Don't bother tracking it",
        outcome: "bad",
        consequenceTitle: "Deduction Denied",
        consequenceDesc:
          "With nothing to show for a year of rent payments, ZRA disallows the deduction entirely. You end up paying tax as if this major expense never happened.",
        scoreChange: -20,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "shop_s15",
    title: "Growing Past the Turnover Tax Threshold",
    situation:
      "Your shop's annual turnover has grown past the threshold for simplified turnover tax, meaning you should register for standard income tax and VAT instead. Switching means more paperwork but avoids penalties for staying in the wrong tax category.",
    icon: "📈",
    choices: [
      {
        text: "Register for the correct tax category",
        subtext: "Move to standard income tax/VAT as required",
        outcome: "good",
        consequenceTitle: "Growing the Right Way",
        consequenceDesc:
          "You're now correctly classified for your business size. It's more filing, but it also means you can reclaim VAT on business purchases going forward.",
        scoreChange: 20,
        moneyChange: -300,
      },
      {
        text: "Ask ZRA for time to transition",
        subtext: "Request a short grace period",
        outcome: "neutral",
        consequenceTitle: "A Reasonable Delay",
        consequenceDesc:
          "ZRA grants a short window to get your systems in order. It buys you time, but the clock is now ticking on making the switch properly.",
        scoreChange: 5,
        moneyChange: -100,
      },
      {
        text: "Keep filing under the old, simpler category",
        subtext: "Hope the growth goes unnoticed",
        outcome: "bad",
        consequenceTitle: "Misclassification Penalty",
        consequenceDesc:
          "ZRA's records show your turnover crossed the threshold months ago. You're reclassified retroactively and owe the difference in tax, plus a penalty for the delay.",
        scoreChange: -25,
        moneyChange: -650,
      },
    ],
  },
];
