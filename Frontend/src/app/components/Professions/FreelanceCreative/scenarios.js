export const CREATIVE_SCENARIOS = [
 {
    id: "freelance_s1",
    title: "Starting Your Freelance Business",
    situation:
      "You've just started designing logos and websites for clients in Lusaka. You're earning about K2,800 per month. Your friend says you don't need to register because it's \"just a side hustle.\"",
    icon: "🧾",
    choices: [
      {
        text: "Register with PACRA and get a TPIN from ZRA immediately",
        subtext: "Formalize the business now",
        outcome: "good",
        consequenceTitle: "Properly Registered",
        consequenceDesc:
          "All individuals earning business income in Zambia must obtain a TPIN from ZRA, and there's no minimum income threshold. You're now set up to invoice properly and avoid future penalties.",
        scoreChange: 10,
        moneyChange: -50,
      },
      {
        text: "Wait until you're earning more before registering",
        subtext: "Delay registration",
        outcome: "neutral",
        consequenceTitle: "Risky Delay",
        consequenceDesc:
          "There's no income threshold for TPIN registration, so the delay buys you nothing but risk. Every month you operate unregistered is a month ZRA could later assess on estimated income.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Never register because it's a small business",
        subtext: "Stay informal indefinitely",
        outcome: "bad",
        consequenceTitle: "Penalty Exposure",
        consequenceDesc:
          "ZRA can assess tax on estimated income, and penalties for non-registration apply regardless of how small the business feels to you.",
        scoreChange: -10,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "freelance_s2",
    title: "Sole Proprietor vs. Business Name",
    situation:
      "You're unsure whether to register as a sole trader or under a business name with PACRA.",
    icon: "📋",
    choices: [
      {
        text: "Research both options and register appropriately through PACRA",
        subtext: "Choose the right structure",
        outcome: "good",
        consequenceTitle: "Solid Foundation",
        consequenceDesc:
          "Freelancers are typically registered as sole traders or under business names through PACRA, which allows enforceable contracts and proper tax registration.",
        scoreChange: 10,
        moneyChange: -150,
      },
      {
        text: "Operate under your personal name without any registration",
        subtext: "Skip PACRA for now",
        outcome: "neutral",
        consequenceTitle: "Limited Protection",
        consequenceDesc:
          "You can still work, but contracts and invoices carry less weight without registration, and clients may hesitate to commit to larger projects.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Make up a business name and operate without registering it",
        subtext: "Use an unofficial name",
        outcome: "bad",
        consequenceTitle: "Illegal Operation",
        consequenceDesc:
          "Operating an unregistered business name is illegal, and clients may refuse to pay without a valid business registration backing the invoice.",
        scoreChange: -10,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "freelance_s3",
    title: "TPIN Application — Missing Documents",
    situation:
      "You're applying for a TPIN but you've lost your National Registration Card (NRC).",
    icon: "🪪",
    choices: [
      {
        text: "Get a replacement NRC first, then apply for TPIN",
        subtext: "Do it the right way",
        outcome: "good",
        consequenceTitle: "Clean Application",
        consequenceDesc:
          "A valid NRC is required for TPIN registration. Taking the extra step now means your application sails through without issues.",
        scoreChange: 10,
        moneyChange: -100,
      },
      {
        text: "Use a photocopy of your NRC and apply anyway",
        subtext: "Try a workaround",
        outcome: "neutral",
        consequenceTitle: "Application Stalled",
        consequenceDesc:
          "A photocopy isn't accepted in place of a valid NRC, so your application gets rejected and you lose time you could have spent earning.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Apply using someone else's NRC",
        subtext: "Borrow an ID",
        outcome: "bad",
        consequenceTitle: "Identity Fraud",
        consequenceDesc:
          "Using someone else's NRC is identity fraud and can lead to criminal prosecution. The TPIN application will also be rejected once discovered.",
        scoreChange: -15,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "freelance_s4",
    title: "Foreign Client Contract",
    situation:
      "A foreign company wants to hire you for a large design project. They ask for your TPIN before signing the contract.",
    icon: "🌍",
    choices: [
      {
        text: "Provide your TPIN and explain Zambian tax requirements",
        subtext: "Be transparent",
        outcome: "good",
        consequenceTitle: "Contract Secured",
        consequenceDesc:
          "Legal contracts require a valid TPIN, and foreign investors often verify Zambian freelancer compliance before engagement. Your transparency builds trust.",
        scoreChange: 10,
        moneyChange: 4000,
      },
      {
        text: "Tell them you'll get one later",
        subtext: "Stall for time",
        outcome: "neutral",
        consequenceTitle: "Deal at Risk",
        consequenceDesc:
          "The client grows uneasy about the delay and shrinks the scope of the contract while you sort out your TPIN.",
        scoreChange: -5,
        moneyChange: 1000,
      },
      {
        text: "Invent a TPIN number to secure the contract",
        subtext: "Fabricate the details",
        outcome: "bad",
        consequenceTitle: "Fraud Discovered",
        consequenceDesc:
          "Providing a false TPIN is fraud; the contract may be void and ZRA can prosecute once the fabricated number fails verification.",
        scoreChange: -15,
        moneyChange: -2000,
      },
    ],
  },
  {
    id: "freelance_s5",
    title: "Multiple Income Sources",
    situation:
      "You earn income from designing, consulting, and selling digital products. You only registered for one of these activities.",
    icon: "💼",
    choices: [
      {
        text: "Register all income-generating activities with ZRA",
        subtext: "Cover everything",
        outcome: "good",
        consequenceTitle: "Fully Compliant",
        consequenceDesc:
          "All income sources must be declared. Registering everything now avoids the compliance risk of mixing personal and business income.",
        scoreChange: 10,
        moneyChange: -100,
      },
      {
        text: "Combine all income under one activity description",
        subtext: "Simplify the paperwork",
        outcome: "neutral",
        consequenceTitle: "Murky Records",
        consequenceDesc:
          "It's not fraudulent, but lumping everything together makes your records harder to reconcile if ZRA ever asks for a breakdown.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Report only design income; ignore consulting and digital products",
        subtext: "Under-report",
        outcome: "bad",
        consequenceTitle: "Undeclared Income Risk",
        consequenceDesc:
          "ZRA can review your bank deposits and assess tax on the undeclared consulting and product income, with penalties attached.",
        scoreChange: -10,
        moneyChange: -400,
      },
    ],
  },
  {
    id: "freelance_s6",
    title: "Business Address Change",
    situation:
      "You've moved to a new location but haven't updated your business address with ZRA.",
    icon: "📍",
    choices: [
      {
        text: "Notify ZRA of the address change immediately",
        subtext: "Update right away",
        outcome: "good",
        consequenceTitle: "Records Current",
        consequenceDesc:
          "Keeping registration details current ensures ZRA can reach you for audits and notices without delay.",
        scoreChange: 10,
        moneyChange: -20,
      },
      {
        text: "Update when you file your next return",
        subtext: "Wait a bit",
        outcome: "neutral",
        consequenceTitle: "Minor Gap",
        consequenceDesc:
          "It's not ideal, but updating soon limits the window where correspondence could go astray.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Don't update; it's not important",
        subtext: "Leave it as is",
        outcome: "bad",
        consequenceTitle: "Missed Notices",
        consequenceDesc:
          "ZRA correspondence may go to the wrong address, but penalties for non-receipt still apply regardless of whether you saw the notice.",
        scoreChange: -5,
        moneyChange: -150,
      },
    ],
  },
  {
    id: "freelance_s7",
    title: "PACRA Annual Renewal",
    situation:
      "Your business name registration with PACRA has expired. You need to renew.",
    icon: "🔄",
    choices: [
      {
        text: "Renew promptly and maintain active registration",
        subtext: "Stay current",
        outcome: "good",
        consequenceTitle: "Registration Active",
        consequenceDesc:
          "Business names must be renewed annually through PACRA. Staying current protects your contracts and tax compliance.",
        scoreChange: 10,
        moneyChange: -120,
      },
      {
        text: "Renew only when you get a new client",
        subtext: "Renew reactively",
        outcome: "neutral",
        consequenceTitle: "Cutting It Close",
        consequenceDesc:
          "You get away with it this time, but operating with a lapsed registration even briefly is a gamble.",
        scoreChange: -5,
        moneyChange: -120,
      },
      {
        text: "Don't renew; operate without active registration",
        subtext: "Skip renewal entirely",
        outcome: "bad",
        consequenceTitle: "Expired Status",
        consequenceDesc:
          "Clients may refuse to work with an expired business registration, and ZRA may flag your TPIN as a result.",
        scoreChange: -10,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "freelance_s8",
    title: "Employee vs. Independent Contractor",
    situation:
      "A company wants to hire you full-time but classify you as a freelancer to avoid PAYE.",
    icon: "🤝",
    choices: [
      {
        text: "Demand proper employment classification",
        subtext: "Insist on correct status",
        outcome: "good",
        consequenceTitle: "Correct Classification",
        consequenceDesc:
          "Employment vs business income classification matters. Pushing for proper classification keeps your tax record accurate from the start.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Accept and understand PAYE should apply if you're an employee",
        subtext: "Accept with awareness",
        outcome: "good",
        consequenceTitle: "Informed Acceptance",
        consequenceDesc:
          "Salary is taxed under PAYE while freelance fees may be business income requiring separate tracking. Knowing the distinction protects you later.",
        scoreChange: 10,
        moneyChange: 2800,
      },
      {
        text: "Accept the arrangement to secure income",
        subtext: "Take the freelance label",
        outcome: "bad",
        consequenceTitle: "Misclassification Risk",
        consequenceDesc:
          "If audited, the company may be liable for PAYE, but your own tax record could end up incorrect too.",
        scoreChange: -5,
        moneyChange: 2800,
      },
    ],
  },
  {
    id: "freelance_s9",
    title: "E-Invoicing Mandate",
    situation:
      "ZRA has mandated e-invoicing through Smart Invoice for all taxpayers starting July 2024. You haven't registered yet.",
    icon: "🧮",
    choices: [
      {
        text: "Register for Smart Invoice immediately and start using it",
        subtext: "Comply now",
        outcome: "good",
        consequenceTitle: "E-Invoicing Ready",
        consequenceDesc:
          "E-invoicing is mandatory for all resident taxpayers in Zambia, with penalties having begun October 1, 2024 for non-compliance.",
        scoreChange: 10,
        moneyChange: -80,
      },
      {
        text: "Switch gradually over the next 6 months",
        subtext: "Phase it in slowly",
        outcome: "neutral",
        consequenceTitle: "Slow Transition",
        consequenceDesc:
          "Stretching out the switch leaves you exposed to penalties during the months you're still on paper invoices.",
        scoreChange: -5,
        moneyChange: -50,
      },
      {
        text: "Continue with paper invoices and claim you're exempt",
        subtext: "Ignore the mandate",
        outcome: "bad",
        consequenceTitle: "Penalties Apply",
        consequenceDesc:
          "Penalties apply for non-compliance, and paper invoices may not be accepted for tax purposes at all.",
        scoreChange: -10,
        moneyChange: -350,
      },
    ],
  },
  {
    id: "freelance_s10",
    title: "Incomplete Invoices",
    situation:
      "You've issued invoices to clients but they don't include your TPIN or business details.",
    icon: "🧾",
    choices: [
      {
        text: "Reissue all invoices with correct TPIN and details",
        subtext: "Fix everything now",
        outcome: "good",
        consequenceTitle: "Valid Invoices",
        consequenceDesc:
          "Valid tax invoices must include your TPIN and business information. Reissuing them protects both you and your clients.",
        scoreChange: 10,
        moneyChange: -30,
      },
      {
        text: "Issue corrected invoices only for clients who ask",
        subtext: "Fix selectively",
        outcome: "neutral",
        consequenceTitle: "Partial Fix",
        consequenceDesc:
          "The clients who don't ask are left with invalid invoices, which could come back to bite both of you later.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Continue as is; clients don't mind",
        subtext: "Leave invoices unchanged",
        outcome: "bad",
        consequenceTitle: "Invalid for Tax Purposes",
        consequenceDesc:
          "Clients cannot claim input VAT, and ZRA may disallow expenses claimed based on your invalid invoices.",
        scoreChange: -10,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "freelance_s11",
    title: "Lost Expense Receipts",
    situation:
      "You've lost receipts for K5,000 of business expenses (software subscriptions, design tools).",
    icon: "🧻",
    choices: [
      {
        text: "Contact vendors for duplicates; maintain proper records going forward",
        subtext: "Reconstruct the records",
        outcome: "good",
        consequenceTitle: "Records Restored",
        consequenceDesc:
          "Proper record-keeping is required, and good records ease both tax preparation and audits going forward.",
        scoreChange: 10,
        moneyChange: -50,
      },
      {
        text: "Don't claim the expenses to avoid audit risk",
        subtext: "Skip the deduction",
        outcome: "neutral",
        consequenceTitle: "Safe but Costly",
        consequenceDesc:
          "You avoid risk, but you also overpay tax by not claiming legitimate business expenses you actually incurred.",
        scoreChange: 5,
        moneyChange: -300,
      },
      {
        text: "Claim the expenses without evidence",
        subtext: "Deduct anyway",
        outcome: "bad",
        consequenceTitle: "Disallowed Claim",
        consequenceDesc:
          "If audited, expenses claimed without evidence will be disallowed, and penalties will be added on top.",
        scoreChange: -10,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "freelance_s12",
    title: "Mixing Personal and Business Funds",
    situation:
      "You use the same bank account for business income and personal spending.",
    icon: "🏦",
    choices: [
      {
        text: "Open a separate business bank account",
        subtext: "Split your finances",
        outcome: "good",
        consequenceTitle: "Clean Separation",
        consequenceDesc:
          "Separate business accounts help avoid mixing personal and business income, which is one of the most common compliance risks for freelancers.",
        scoreChange: 10,
        moneyChange: -30,
      },
      {
        text: "Continue but manually track business transactions",
        subtext: "Track within one account",
        outcome: "good",
        consequenceTitle: "Workable Compromise",
        consequenceDesc:
          "It's more work, but careful manual tracking still gives you a defensible record if ZRA ever reviews your account.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Use the same account and estimate business income",
        subtext: "Guess at the split",
        outcome: "bad",
        consequenceTitle: "All Deposits Suspect",
        consequenceDesc:
          "ZRA may treat all bank deposits as business income, making it very difficult to claim legitimate expenses afterward.",
        scoreChange: -10,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "freelance_s13",
    title: "Smart Invoice Integration",
    situation:
      "Your accounting software doesn't integrate with ZRA's Smart Invoice system.",
    icon: "🔌",
    choices: [
      {
        text: "Invest in compatible software or use the ZRA platform",
        subtext: "Solve the integration",
        outcome: "good",
        consequenceTitle: "Fully Integrated",
        consequenceDesc:
          "Smart Invoice is ZRA's digital platform that records and validates transactions in real time, and proper integration keeps you compliant.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Manually enter invoices into Smart Invoice",
        subtext: "Bridge the gap by hand",
        outcome: "neutral",
        consequenceTitle: "Workable but Tedious",
        consequenceDesc:
          "Manual entry keeps you compliant for now, though it costs extra time on every invoice you issue.",
        scoreChange: 5,
        moneyChange: -20,
      },
      {
        text: "Wait and hope ZRA delays enforcement",
        subtext: "Do nothing",
        outcome: "bad",
        consequenceTitle: "Enforcement Active",
        consequenceDesc:
          "Enforcement is already active, and penalties apply for non-compliance regardless of what you hope happens.",
        scoreChange: -5,
        moneyChange: -250,
      },
    ],
  },
  {
    id: "freelance_s14",
    title: "Records Retention Period",
    situation:
      "Your computer crashed and you lost some records. You're unsure how long to keep records.",
    icon: "💾",
    choices: [
      {
        text: "Keep records for 6+ years as required by ZRA",
        subtext: "Follow the statutory period",
        outcome: "good",
        consequenceTitle: "Statutory Compliance",
        consequenceDesc:
          "Tax records must be retained for the statutory period, typically 6 years, for audit purposes.",
        scoreChange: 10,
        moneyChange: -40,
      },
      {
        text: "Keep records for 1 year",
        subtext: "Short retention",
        outcome: "neutral",
        consequenceTitle: "Falls Short",
        consequenceDesc:
          "One year is well below the statutory requirement, leaving you exposed if ZRA reviews an earlier period.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Keep only current year records",
        subtext: "Minimal retention",
        outcome: "bad",
        consequenceTitle: "Default Assessment Risk",
        consequenceDesc:
          "If audited for prior years, your inability to produce records results in default assessments against you.",
        scoreChange: -10,
        moneyChange: -400,
      },
    ],
  },
  {
    id: "freelance_s15",
    title: "Turnover Tax Records",
    situation:
      "You qualify for Turnover Tax (TOT) but don't maintain any records of your monthly sales.",
    icon: "📒",
    choices: [
      {
        text: "Start keeping accurate sales records immediately",
        subtext: "Begin proper tracking",
        outcome: "good",
        consequenceTitle: "On Track",
        consequenceDesc:
          "Even under Turnover Tax at 4% of gross turnover, you must maintain records and submit returns monthly. Starting now keeps you compliant.",
        scoreChange: 10,
        moneyChange: -20,
      },
      {
        text: "Estimate monthly sales from memory",
        subtext: "Guess the numbers",
        outcome: "neutral",
        consequenceTitle: "Shaky Estimates",
        consequenceDesc:
          "Estimates from memory are rarely accurate and won't hold up well if ZRA asks for supporting detail.",
        scoreChange: -5,
        moneyChange: -50,
      },
      {
        text: "Continue without records; it's a simple tax",
        subtext: "Skip records entirely",
        outcome: "bad",
        consequenceTitle: "Estimated Assessment",
        consequenceDesc:
          "ZRA may estimate your turnover for you, and penalties apply for late or no filing on top of that.",
        scoreChange: -10,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "freelance_s16",
    title: "Digital Records Backup",
    situation:
      "You keep all invoices and receipts digitally but don't have any backup.",
    icon: "☁️",
    choices: [
      {
        text: "Set up cloud backup and/or external drives",
        subtext: "Protect your records",
        outcome: "good",
        consequenceTitle: "Records Secured",
        consequenceDesc:
          "Digital records are acceptable but must be backed up. A proper backup protects you from the chaos of a lost device.",
        scoreChange: 10,
        moneyChange: -60,
      },
      {
        text: "Print everything and keep physical copies",
        subtext: "Go old-school",
        outcome: "good",
        consequenceTitle: "Physical Backup",
        consequenceDesc:
          "It's a bit more effort, but a physical backup achieves the same protection against losing your records to a technical failure.",
        scoreChange: 5,
        moneyChange: -40,
      },
      {
        text: "Don't backup; it's probably fine",
        subtext: "Leave it as is",
        outcome: "bad",
        consequenceTitle: "No Safety Net",
        consequenceDesc:
          "If records are lost, you may face penalties, and reconstructing them from scratch is costly and time-consuming.",
        scoreChange: -5,
        moneyChange: -150,
      },
    ],
  },
  {
    id: "freelance_s17",
    title: "Client Deducts WHT",
    situation:
      "A company pays you K10,000 for a website design but deducts 15% WHT (K1,500). You receive K8,500.",
    icon: "💵",
    choices: [
      {
        text: "Accept the payment; keep the WHT certificate for tax credit",
        subtext: "File the certificate carefully",
        outcome: "good",
        consequenceTitle: "Credit Secured",
        consequenceDesc:
          "Management and consultancy fees are subject to 15% WHT for residents, and the withheld amount becomes a tax credit when you file.",
        scoreChange: 10,
        moneyChange: 8500,
      },
      {
        text: "Accept but ignore the certificate",
        subtext: "File it away unused",
        outcome: "neutral",
        consequenceTitle: "Credit Wasted",
        consequenceDesc:
          "If you don't claim the WHT credit, you may end up paying tax twice on the same income.",
        scoreChange: -5,
        moneyChange: 8500,
      },
      {
        text: "Refuse the deduction; demand full payment",
        subtext: "Push back on the client",
        outcome: "bad",
        consequenceTitle: "Contract Strain",
        consequenceDesc:
          "The deduction is a legal requirement on the client's side, not something they can simply waive. Pushing back strains the relationship for nothing.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "freelance_s18",
    title: "Client Doesn't Deduct WHT",
    situation:
      "A client pays you K15,000 for consulting services but doesn't deduct WHT. You know they should.",
    icon: "⚠️",
    choices: [
      {
        text: "Remind the client of WHT obligations; ensure certificate is issued",
        subtext: "Flag it proactively",
        outcome: "good",
        consequenceTitle: "Obligation Met",
        consequenceDesc:
          "The payer is responsible for deducting and remitting WHT, and failure to withhold can result in penalties for the client if it's not corrected.",
        scoreChange: 10,
        moneyChange: 12750,
      },
      {
        text: "Report the income without WHT credit",
        subtext: "Declare it plainly",
        outcome: "neutral",
        consequenceTitle: "No Credit to Claim",
        consequenceDesc:
          "Without a WHT deduction there's no credit to claim, but at least the income itself is properly declared.",
        scoreChange: 5,
        moneyChange: 15000,
      },
      {
        text: "Accept the payment and don't mention WHT",
        subtext: "Stay quiet about it",
        outcome: "bad",
        consequenceTitle: "Liability Risk",
        consequenceDesc:
          "If the client fails to remit the tax they should have withheld, you may end up liable for it yourself.",
        scoreChange: -5,
        moneyChange: 15000,
      },
    ],
  },
  {
    id: "freelance_s19",
    title: "Withholding Tax (WHT) Certificate Not Received",
    situation:
      "You worked for a large company 6 months ago. They deducted the withholding tax(WHT) but haven't provided a certificate.",
    icon: "📄",
    choices: [
      {
        text: "Follow up with the client for the withholding tax certificate",
        subtext: "Chase the paperwork",
        outcome: "good",
        consequenceTitle: "Certificate Obtained",
        consequenceDesc:
          "A WHT certificate is required to claim a tax credit, so always ask for it, keep it safe, and use it when filing.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Assume the tax was paid and don't follow up",
        subtext: "Let it go",
        outcome: "neutral",
        consequenceTitle: "Unclaimed Credit",
        consequenceDesc:
          "Without the certificate in hand, you have no proof to claim the credit, even if the client did remit the tax.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Claim the withholding tax credit without the certificate",
        subtext: "File anyway",
        outcome: "bad",
        consequenceTitle: "Double Taxation",
        consequenceDesc:
          "Without a certificate, the withholding tax credit cannot be claimed, meaning you may end up paying tax twice on the same income.",
        scoreChange: -10,
        moneyChange: -1500,
      },
    ],
  },
  {
    id: "freelance_s20",
    title: "Foreign Client — No Withholding Tax (WHT)",
    situation:
      "A foreign client pays you K20,000 for design work. No WHT is deducted.",
    icon: "✈️",
    choices: [
      {
        text: "Declare the income and pay tax on it",
        subtext: "Report it fully",
        outcome: "good",
        consequenceTitle: "Properly Declared",
        consequenceDesc:
          "Income earned by Zambian residents is potentially taxable regardless of where the client is located, so declaring it keeps you safe.",
        scoreChange: 10,
        moneyChange: 16000,
      },
      {
        text: "Declare but claim it's from a foreign source",
        subtext: "Try a partial workaround",
        outcome: "neutral",
        consequenceTitle: "Murky Justification",
        consequenceDesc:
          "Residency, not the client's location, generally determines taxability, so this framing won't hold up well under review.",
        scoreChange: -5,
        moneyChange: 18000,
      },
      {
        text: "Assume it's not taxable in Zambia",
        subtext: "Don't declare it",
        outcome: "bad",
        consequenceTitle: "Hidden Income Exposed",
        consequenceDesc:
          "Failure to declare foreign income can result in audits and penalties once your bank deposits are reviewed.",
        scoreChange: -10,
        moneyChange: -800,
      },
    ],
  },
  {
    id: "freelance_s21",
    title: "Multiple Withholding Tax (WHT) Certificates",
    situation:
      "You've received WHT certificates from 5 different clients this year. You haven't filed any returns.",
    icon: "🗂️",
    choices: [
      {
        text: "File all returns and claim the WHT credits",
        subtext: "Catch up fully",
        outcome: "good",
        consequenceTitle: "Caught Up",
        consequenceDesc:
          "WHT is not a final tax for residents — you must file annual returns and claim WHT as a credit against your final tax liability.",
        scoreChange: 10,
        moneyChange: -100,
      },
      {
        text: "File only for clients who deducted tax",
        subtext: "File partially",
        outcome: "neutral",
        consequenceTitle: "Incomplete Filing",
        consequenceDesc:
          "Partial filing leaves gaps in your record that could trigger questions about the income you left out.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Assume no tax is due because WHT was deducted",
        subtext: "Skip filing",
        outcome: "bad",
        consequenceTitle: "Owed Tax and Penalties",
        consequenceDesc:
          "You may owe additional tax beyond what was withheld, plus penalties for late filing of your annual return.",
        scoreChange: -10,
        moneyChange: -700,
      },
    ],
  },
  {
    id: "freelance_s22",
    title: "Withholding Tax (WHT) Rate Confusion",
    situation:
      "A client deducted 20% WHT instead of 15% on your consultancy fees.",
    icon: "🔢",
    choices: [
      {
        text: "Inform the client of the correct rate; request correction",
        subtext: "Fix the error",
        outcome: "good",
        consequenceTitle: "Rate Corrected",
        consequenceDesc:
          "Management and consultancy fees for residents are taxed at 15%, so the client needs to correct the over-deduction on their end.",
        scoreChange: 10,
        moneyChange: 250,
      },
      {
        text: "Demand a refund from the client",
        subtext: "Ask for the difference back",
        outcome: "good",
        consequenceTitle: "Refund Pursued",
        consequenceDesc:
          "It's reasonable to want the overpaid amount back directly, though the cleanest fix is usually correcting the WHT filing itself.",
        scoreChange: 5,
        moneyChange: 250,
      },
      {
        text: "Accept it; you'll get a bigger tax credit",
        subtext: "Let the error stand",
        outcome: "neutral",
        consequenceTitle: "Over-Remitted Tax",
        consequenceDesc:
          "If 20% was deducted incorrectly, the client may have over-remitted, but you can only claim credit for the correct 15% rate.",
        scoreChange: 5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "freelance_s23",
    title: "Withholding Tax (WHT) on Multiple Clients",
    situation:
      "You provide both design (consultancy) and digital product sales to clients.",
    icon: "🎨",
    choices: [
      {
        text: "Determine which services are subject to WHT and which aren't",
        subtext: "Get clarity",
        outcome: "good",
        consequenceTitle: "Correct Treatment",
        consequenceDesc:
          "Management and consultancy fees are subject to 15% WHT, while product sales may not be — knowing the difference matters for compliance.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Assume everything is subject to WHT",
        subtext: "Apply WHT broadly",
        outcome: "neutral",
        consequenceTitle: "Over-Cautious",
        consequenceDesc:
          "You don't break any rules, but applying WHT where it isn't needed creates unnecessary paperwork and confused clients.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Assume nothing is subject to WHT",
        subtext: "Apply WHT to nothing",
        outcome: "bad",
        consequenceTitle: "Underpaid Tax",
        consequenceDesc:
          "If WHT should have been deducted but wasn't, you may need to pay the tax yourself once it's discovered.",
        scoreChange: -5,
        moneyChange: -250,
      },
    ],
  },
  {
    id: "freelance_s24",
    title: "Withholding Tax (WHT) on Subcontractors",
    situation:
      "You subcontracted part of a design project to another freelancer for K5,000.",
    icon: "🧑‍💻",
    choices: [
      {
        text: "Deduct 15% WHT and issue a certificate",
        subtext: "Handle it correctly",
        outcome: "good",
        consequenceTitle: "Obligation Fulfilled",
        consequenceDesc:
          "As the payer making payments for consultancy services, you must deduct WHT and remit it to ZRA — the obligation rests with you.",
        scoreChange: 10,
        moneyChange: -750,
      },
      {
        text: "Ask them if they want WHT deducted",
        subtext: "Leave it to them",
        outcome: "neutral",
        consequenceTitle: "Not Your Choice to Offer",
        consequenceDesc:
          "WHT deduction isn't optional or up to the subcontractor — the obligation to withhold rests with you as the payer.",
        scoreChange: -5,
        moneyChange: -5000,
      },
      {
        text: "Pay the full amount and let them handle tax",
        subtext: "Skip the deduction",
        outcome: "bad",
        consequenceTitle: "Liability Falls on You",
        consequenceDesc:
          "You may be liable for the WHT not deducted, with penalties applying for the missed withholding.",
        scoreChange: -5,
        moneyChange: -5000,
      },
    ],
  },
  {
    id: "freelance_s25",
    title: "Turnover Tax Qualification",
    situation:
      "Your annual turnover is K500,000. You're unsure which tax regime applies.",
    icon: "📊",
    choices: [
      {
        text: "Register for Turnover Tax (4% on gross turnover)",
        subtext: "Take the simpler route",
        outcome: "good",
        consequenceTitle: "Right Regime",
        consequenceDesc:
          "If annual turnover is K800,000 or less, you qualify for Turnover Tax — a simpler, final tax on gross revenue at 4% monthly.",
        scoreChange: 10,
        moneyChange: -100,
      },
      {
        text: "Register for Income Tax proper",
        subtext: "Opt for the standard regime",
        outcome: "neutral",
        consequenceTitle: "More Complex Than Needed",
        consequenceDesc:
          "You're still compliant, but mainstream Income Tax involves more bookkeeping than necessary at this turnover level.",
        scoreChange: 5,
        moneyChange: -200,
      },
      {
        text: "Pay no tax; turnover is too low",
        subtext: "Assume an exemption",
        outcome: "bad",
        consequenceTitle: "Fully Taxable",
        consequenceDesc:
          "All business income is taxable at this level, and penalties apply for non-filing regardless of the assumption.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "freelance_s26",
    title: "Turnover Tax Returns",
    situation:
      "Your monthly turnover is K2,800 (a slow month). You must file a Turnover Tax return.",
    icon: "🗓️",
    choices: [
      {
        text: "File the return and pay 4% = K112 by the 14th of the following month",
        subtext: "File on time",
        outcome: "good",
        consequenceTitle: "Filed on Time",
        consequenceDesc:
          "Turnover Tax returns must be submitted monthly by the 14th day following the month of sales, even in slow months.",
        scoreChange: 10,
        moneyChange: -112,
      },
      {
        text: "File a nil return",
        subtext: "Report nothing",
        outcome: "neutral",
        consequenceTitle: "Incorrect Return",
        consequenceDesc:
          "There was actual turnover, so a nil return understates what's owed and could be flagged if cross-checked against your invoices.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Skip filing until turnover increases",
        subtext: "Don't file this month",
        outcome: "bad",
        consequenceTitle: "Late Filing Penalty",
        consequenceDesc:
          "Penalties for late filing apply, and the return is required regardless of how small the amount is.",
        scoreChange: -10,
        moneyChange: -150,
      },
    ],
  },
  {
    id: "freelance_s27",
    title: "Business Losses",
    situation:
      "You invested K10,000 in equipment but only earned K8,000 this year. You made a loss.",
    icon: "📉",
    choices: [
      {
        text: "File returns showing the loss",
        subtext: "Report it properly",
        outcome: "good",
        consequenceTitle: "Loss Recorded",
        consequenceDesc:
          "You may not pay tax if you make a loss, but you must file returns to report it. Losses can be carried forward to offset future profits.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "File a nil return",
        subtext: "Simplify the filing",
        outcome: "neutral",
        consequenceTitle: "Loss Not Captured",
        consequenceDesc:
          "A nil return doesn't capture the actual loss, so you miss the chance to carry it forward against future profits.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Don't file; you made no profit",
        subtext: "Skip filing entirely",
        outcome: "bad",
        consequenceTitle: "Carry-Forward Lost",
        consequenceDesc:
          "ZRA may estimate your income and assess tax, and you lose the benefit of carrying the loss forward.",
        scoreChange: -5,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "freelance_s28",
    title: "Turnover Exceeds Threshold",
    situation:
      "Your annual turnover has exceeded K800,000. You must transition from Turnover Tax to Income Tax.",
    icon: "📈",
    choices: [
      {
        text: "Notify ZRA and transition to Income Tax regime",
        subtext: "Make the switch",
        outcome: "good",
        consequenceTitle: "Smooth Transition",
        consequenceDesc:
          "Once turnover exceeds K800,000, you must move to mainstream Income Tax. Notifying ZRA promptly keeps the transition clean.",
        scoreChange: 10,
        moneyChange: -150,
      },
      {
        text: "Split your business to stay under the threshold",
        subtext: "Try to avoid the switch",
        outcome: "neutral",
        consequenceTitle: "Artificial Split Flagged",
        consequenceDesc:
          "Artificially splitting a business to avoid the threshold is illegal and tends to draw closer ZRA scrutiny rather than less.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Continue under Turnover Tax to avoid complexity",
        subtext: "Stay where you are",
        outcome: "bad",
        consequenceTitle: "Underpaying Tax",
        consequenceDesc:
          "You'll be underpaying relative to the correct regime, and penalties plus back taxes apply once it's discovered.",
        scoreChange: -10,
        moneyChange: -900,
      },
    ],
  },
  {
    id: "freelance_s29",
    title: "Provisional Tax Payments",
    situation:
      "You're now under the Income Tax regime and must pay provisional tax quarterly.",
    icon: "💳",
    choices: [
      {
        text: "Calculate and pay the correct quarterly provisional tax",
        subtext: "Stay on schedule",
        outcome: "good",
        consequenceTitle: "On Schedule",
        consequenceDesc:
          "Under Income Tax, provisional tax payments are required quarterly, by March 31, June 30, September 30, and December 31.",
        scoreChange: 10,
        moneyChange: -1200,
      },
      {
        text: "Pay minimal amounts and settle later",
        subtext: "Underpay each quarter",
        outcome: "neutral",
        consequenceTitle: "Shortfall Building",
        consequenceDesc:
          "Paying too little each quarter builds a shortfall that grows interest until you finally settle it.",
        scoreChange: -5,
        moneyChange: -400,
      },
      {
        text: "Don't pay; final tax is still months away",
        subtext: "Wait until year-end",
        outcome: "bad",
        consequenceTitle: "Interest and Penalties",
        consequenceDesc:
          "Underpayment of provisional tax attracts penalties and interest that accumulate the longer you wait.",
        scoreChange: -10,
        moneyChange: -1800,
      },
    ],
  },
  {
    id: "freelance_s30",
    title: "Annual Return Deadline",
    situation:
      "Your annual income tax return is due by June 21 following the charge year. You haven't started preparing.",
    icon: "⏰",
    choices: [
      {
        text: "Engage a consultant or prepare immediately to file on time",
        subtext: "Act now",
        outcome: "good",
        consequenceTitle: "Filed on Time",
        consequenceDesc:
          "Annual income tax returns are due by June 21. Acting now avoids the late filing penalties that follow a missed deadline.",
        scoreChange: 10,
        moneyChange: -400,
      },
      {
        text: "File a request for extension",
        subtext: "Ask ZRA for more time",
        outcome: "good",
        consequenceTitle: "Extension Granted",
        consequenceDesc:
          "Requesting an extension before the deadline is a legitimate option that keeps you compliant while you finish preparing.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "File late and pay the penalty",
        subtext: "Accept the consequence",
        outcome: "bad",
        consequenceTitle: "Penalties and Interest",
        consequenceDesc:
          "Penalties and interest apply on both the late filing and any late payment that comes with it.",
        scoreChange: -5,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "freelance_s31",
    title: "VAT Registration Threshold",
    situation:
      "Your annual turnover has reached K900,000 and is continuing to grow. You must register for VAT.",
    icon: "🧾",
    choices: [
      {
        text: "Register for VAT immediately",
        subtext: "Comply right away",
        outcome: "good",
        consequenceTitle: "VAT Registered",
        consequenceDesc:
          "VAT registration is mandatory once taxable turnover exceeds K800,000 in any 12-month period, or K200,000 in any three-month period, at a 16% rate.",
        scoreChange: 10,
        moneyChange: -150,
      },
      {
        text: "Avoid registration by limiting sales",
        subtext: "Cap your turnover artificially",
        outcome: "neutral",
        consequenceTitle: "Growth Stunted",
        consequenceDesc:
          "Deliberately limiting sales avoids triggering registration for now, but it also caps your income and may not hold once you've already crossed the threshold.",
        scoreChange: -5,
        moneyChange: -300,
      },
      {
        text: "Delay registration until the end of the financial year",
        subtext: "Put it off",
        outcome: "bad",
        consequenceTitle: "Backdated Liability",
        consequenceDesc:
          "Backdated VAT liabilities come with penalties, and input VAT cannot be claimed for the pre-registration period.",
        scoreChange: -10,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "freelance_s32",
    title: "Charging VAT",
    situation:
      "You're now VAT-registered. A client asks for a discount if you don't charge VAT.",
    icon: "🙅",
    choices: [
      {
        text: "Refuse; VAT must be charged as legally required",
        subtext: "Hold the line",
        outcome: "good",
        consequenceTitle: "Compliant Pricing",
        consequenceDesc:
          "Once registered, VAT must be charged on all taxable supplies at 16% — there's no legal room to skip it for a discount.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Absorb the VAT cost and charge the pre-VAT price",
        subtext: "Eat the cost yourself",
        outcome: "neutral",
        consequenceTitle: "VAT Still Owed",
        consequenceDesc:
          "You still owe ZRA the VAT regardless of what you charged the client, so absorbing it just cuts into your own margin.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Charge VAT on some clients but not others",
        subtext: "Apply it inconsistently",
        outcome: "bad",
        consequenceTitle: "Inconsistency Detected",
        consequenceDesc:
          "A ZRA audit will detect the inconsistency, triggering penalties and a full VAT assessment across your client base.",
        scoreChange: -15,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "freelance_s33",
    title: "Input VAT Claims",
    situation:
      "You purchased new design equipment for K5,000 including VAT. You're registered for VAT.",
    icon: "🖥️",
    choices: [
      {
        text: "Claim input VAT on the equipment",
        subtext: "Claim what you're owed",
        outcome: "good",
        consequenceTitle: "Legitimate Claim",
        consequenceDesc:
          "You can claim input VAT on business purchases, which lowers the net cost of equipment you genuinely use for work.",
        scoreChange: 10,
        moneyChange: 690,
      },
      {
        text: "Don't claim; it's too complicated",
        subtext: "Skip the claim",
        outcome: "neutral",
        consequenceTitle: "Money Left on the Table",
        consequenceDesc:
          "Skipping the claim is safe but means paying more than necessary for the equipment you're entitled to deduct.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Claim VAT on all purchases, personal and business",
        subtext: "Claim everything",
        outcome: "bad",
        consequenceTitle: "Fraudulent Claims",
        consequenceDesc:
          "Claiming VAT on personal items is fraud, and input VAT claims on personal items will be disallowed with penalties.",
        scoreChange: -10,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "freelance_s34",
    title: "VAT Returns",
    situation:
      "You're VAT-registered but haven't filed any VAT returns because you didn't make sales one month.",
    icon: "📥",
    choices: [
      {
        text: "File a nil return by the 18th of the following month",
        subtext: "File on schedule",
        outcome: "good",
        consequenceTitle: "Compliant Nil Return",
        consequenceDesc:
          "VAT returns must be filed monthly by the 18th, even if there's no business activity to report.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "File late with explanation",
        subtext: "File once you remember",
        outcome: "neutral",
        consequenceTitle: "Late but Filed",
        consequenceDesc:
          "Filing late still triggers a penalty, even with a reasonable explanation attached.",
        scoreChange: -5,
        moneyChange: -100,
      },
      {
        text: "Skip filing until you have sales",
        subtext: "Don't file at all",
        outcome: "bad",
        consequenceTitle: "Registration at Risk",
        consequenceDesc:
          "Penalties for non-filing apply, and your VAT registration may even be suspended for repeated lapses.",
        scoreChange: -10,
        moneyChange: -250,
      },
    ],
  },
  {
    id: "freelance_s35",
    title: "VAT Refund Delay",
    situation:
      "You're owed a VAT refund. An agent offers to \"accelerate\" it for 20% of the refund.",
    icon: "🕵️",
    choices: [
      {
        text: "Wait for the legitimate ZRA process; contact ZRA directly",
        subtext: "Go through official channels",
        outcome: "good",
        consequenceTitle: "Refund Processed Properly",
        consequenceDesc:
          "ZRA has a legitimate refund process, and going through it directly avoids the risk attached to third-party expeditors.",
        scoreChange: 10,
        moneyChange: 1200,
      },
      {
        text: "File a formal complaint with ZRA",
        subtext: "Raise the delay officially",
        outcome: "good",
        consequenceTitle: "Issue Escalated",
        consequenceDesc:
          "A formal complaint puts the delay on record and pushes for resolution without resorting to a risky shortcut.",
        scoreChange: 5,
        moneyChange: 1200,
      },
      {
        text: "Pay the agent to help",
        subtext: "Take the shortcut",
        outcome: "bad",
        consequenceTitle: "Fraud Scheme Risk",
        consequenceDesc:
          "Third-party refund expeditors are often linked to fraud rings, and the agent may even be an authority sting operation.",
        scoreChange: -10,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "freelance_s36",
    title: "Royalty Income",
    situation:
      "You created a design that a company is using under license. You're receiving royalty payments.",
    icon: "©️",
    choices: [
      {
        text: "Declare royalty income and understand 15% WHT applies",
        subtext: "Treat it correctly",
        outcome: "good",
        consequenceTitle: "Correctly Treated",
        consequenceDesc:
          "Royalties are subject to 15% WHT for residents — royalty meaning payment for use of copyright or design rights.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Treat royalty income as standard consulting income",
        subtext: "Lump it together",
        outcome: "neutral",
        consequenceTitle: "Close but Imprecise",
        consequenceDesc:
          "Both face similar WHT rates, but mislabeling royalty income can still cause confusion if the details are ever reviewed.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Don't declare; it's not business income",
        subtext: "Leave it out",
        outcome: "bad",
        consequenceTitle: "Undeclared Royalty",
        consequenceDesc:
          "Royalty income is taxable, and penalties apply for non-declaration once it's identified.",
        scoreChange: -10,
        moneyChange: -400,
      },
    ],
  },
  {
    id: "freelance_s37",
    title: "Non-Resident Client — Royalty",
    situation:
      "A foreign company is using your design and paying you royalties. They don't deduct WHT.",
    icon: "🌐",
    choices: [
      {
        text: "Declare the income and pay tax in Zambia",
        subtext: "Report fully",
        outcome: "good",
        consequenceTitle: "Properly Declared",
        consequenceDesc:
          "Foreign income is taxable in Zambia for residents. Non-resident clients may not deduct WHT, but the income must still be declared.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Declare but claim WHT credit without certificate",
        subtext: "Try to claim a credit anyway",
        outcome: "neutral",
        consequenceTitle: "Unsupported Claim",
        consequenceDesc:
          "Without a certificate there's no valid credit to claim, even though the income itself is correctly declared.",
        scoreChange: -5,
        moneyChange: -300,
      },
      {
        text: "Assume it's not taxable",
        subtext: "Skip declaring it",
        outcome: "bad",
        consequenceTitle: "Audit Exposure",
        consequenceDesc:
          "Bank deposits will be reviewed, and penalties apply once the undeclared foreign royalty income is found.",
        scoreChange: -10,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "freelance_s38",
    title: "Voluntary VAT Registration",
    situation:
      "Your turnover is below K800,000 but you want to register for VAT voluntarily to claim input VAT on equipment.",
    icon: "✅",
    choices: [
      {
        text: "Apply for voluntary VAT registration",
        subtext: "Register fully and properly",
        outcome: "good",
        consequenceTitle: "Voluntarily Compliant",
        consequenceDesc:
          "Voluntary VAT registration is possible, but it comes with full compliance obligations once you're in the system.",
        scoreChange: 10,
        moneyChange: -150,
      },
      {
        text: "Don't register; it's too complex",
        subtext: "Skip the option",
        outcome: "neutral",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "You stay simple and safe, but you also miss out on the input VAT claims that voluntary registration would have allowed.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Register and claim VAT but don't charge VAT on sales",
        subtext: "Claim without charging",
        outcome: "bad",
        consequenceTitle: "Fraudulent Setup",
        consequenceDesc:
          "This is fraud, and severe penalties apply for claiming input VAT while failing to charge output VAT on your sales.",
        scoreChange: -15,
        moneyChange: -1500,
      },
    ],
  },
  {
    id: "freelance_s39",
    title: "Mixed VAT and Non-VAT Income",
    situation:
      "You sell both VAT-taxable services and products that may be exempt.",
    icon: "🧩",
    choices: [
      {
        text: "Identify which supplies are taxable and track them separately",
        subtext: "Track each category",
        outcome: "good",
        consequenceTitle: "Properly Tracked",
        consequenceDesc:
          "Only correctly taxable supplies should have VAT charged. Mixed supplies require careful, separate tracking to stay accurate.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Assume everything is taxable and charge VAT",
        subtext: "Apply VAT broadly",
        outcome: "neutral",
        consequenceTitle: "Over-Charging Risk",
        consequenceDesc:
          "You avoid under-charging, but applying VAT to exempt supplies can frustrate clients and may need correcting later.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Assume everything is exempt and charge no VAT",
        subtext: "Apply no VAT at all",
        outcome: "bad",
        consequenceTitle: "Assessment and Penalties",
        consequenceDesc:
          "Incorrect VAT treatment leads to assessment and penalties once the taxable supplies are identified.",
        scoreChange: -10,
        moneyChange: -700,
      },
    ],
  },
  {
    id: "freelance_s40",
    title: "VAT Audit",
    situation:
      "ZRA has selected your VAT returns for audit. Your records are incomplete.",
    icon: "🔍",
    choices: [
      {
        text: "Engage a tax consultant and organize records",
        subtext: "Get professional help",
        outcome: "good",
        consequenceTitle: "Audit Managed Well",
        consequenceDesc:
          "Cooperating fully with audits minimizes penalties, and organizing your records with help gives you the best chance of a clean outcome.",
        scoreChange: 10,
        moneyChange: -400,
      },
      {
        text: "Cooperate but provide partial records",
        subtext: "Give what you have",
        outcome: "neutral",
        consequenceTitle: "Partial Cooperation",
        consequenceDesc:
          "Providing what you have shows good faith, but gaps in the records may still lead to estimated figures for missing periods.",
        scoreChange: 5,
        moneyChange: -200,
      },
      {
        text: "Delay and hope the audit goes away",
        subtext: "Stall the process",
        outcome: "bad",
        consequenceTitle: "Default Assessment",
        consequenceDesc:
          "Delaying leads to default assessments, penalties, and possible criminal referral for failing to cooperate.",
        scoreChange: -10,
        moneyChange: -1000,
      },
    ],
  },
];