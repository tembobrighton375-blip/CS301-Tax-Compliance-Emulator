export const YANGO_SCENARIOS = [
  {
    id: "yango_s1",
    title: "Monthly Earnings Arrive",
    situation:
      "You've had a great month on Yango — K2,500 deposited into your Airtel Money. ZRA's system flags income above K2,000 for self-employed workers. What do you do?",
    icon: "💰",
    choices: [
      {
        text: "Declare all K2,500 to ZRA",
        subtext: "Pay K125 turnover tax (5%)",
        outcome: "good",
        consequenceTitle: "Integrity Pays Off!",
        consequenceDesc:
          "You declared your income honestly. ZRA issues you a Tax Clearance Certificate valid for 12 months. Airlines, banks, and government contracts now trust you. Your compliance rating rises.",
        scoreChange: 20,
        moneyChange: -125,
      },
      {
        text: "Declare K1,800 only",
        subtext: "Underreport to reduce tax",
        outcome: "neutral",
        consequenceTitle: "Short-term Savings, Long-term Risk",
        consequenceDesc:
          "You saved some kwacha today, but ZRA cross-references Yango's digital records. A small discrepancy flag is raised on your file. You avoid penalty this time, but the risk grows.",
        scoreChange: -5,
        moneyChange: -90,
      },
      {
        text: "Declare nothing",
        subtext: "Skip tax entirely",
        outcome: "bad",
        consequenceTitle: "Red Flag Alert!",
        consequenceDesc:
          "ZRA's digital systems match Yango's payment records to your TPIN. You receive a formal audit notice. A 30% penalty is applied plus back taxes. This costs far more than the original tax.",
        scoreChange: -25,
        moneyChange: -375,
      },
    ],
  },
  {
    id: "yango_s2",
    title: "ZRA Audit Notice Arrives",
    situation:
      "A text message from ZRA-Zambia reads: 'Your TPIN has been selected for a routine income verification. Please respond within 14 days.' Your friend says to ignore it. What do you do?",
    icon: "📋",
    choices: [
      {
        text: "Respond immediately with records",
        subtext: "Bring 3 months of Airtel Money statements",
        outcome: "good",
        consequenceTitle: "Cleared with Confidence!",
        consequenceDesc:
          "You showed up prepared. The ZRA officer was impressed by your organized records. The audit closes in your favor and a note of good standing is added to your taxpayer profile.",
        scoreChange: 25,
        moneyChange: 0,
      },
      {
        text: "Ask a tax agent to handle it",
        subtext: "Pay K200 for professional help",
        outcome: "neutral",
        consequenceTitle: "Professional Help Works",
        consequenceDesc:
          "The agent navigated the audit for you. It cost K200 but avoided errors. A good outcome, though you now realize you could have done this yourself with some knowledge.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Ignore the notice",
        subtext: "Hope it goes away",
        outcome: "bad",
        consequenceTitle: "Enforcement Action!",
        consequenceDesc:
          "Ignoring ZRA triggers an enforcement visit. Your Yango driver account is temporarily suspended pending verification. You lose 5 days of income while the case is resolved.",
        scoreChange: -30,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "yango_s3",
    title: "Tax Clearance Opportunity",
    situation:
      "Yango Zambia offers premium 'Pro Driver' status to drivers with valid ZRA Tax Clearance Certificates — unlocking K500/month bonus rides and corporate pickups. The certificate costs K50 to process.",
    icon: "⭐",
    choices: [
      {
        text: "Apply for the certificate now",
        subtext: "K50 processing fee",
        outcome: "good",
        consequenceTitle: "Pro Driver Status Unlocked!",
        consequenceDesc:
          "Your Tax Clearance Certificate opens the door to corporate clients and airport runs. Your monthly earnings jump significantly. Formal compliance created a real economic reward.",
        scoreChange: 20,
        moneyChange: 450,
      },
      {
        text: "Wait until next quarter",
        subtext: "Miss this opportunity",
        outcome: "neutral",
        consequenceTitle: "Opportunity Deferred",
        consequenceDesc:
          "You put it off. Another driver in your area nabbed the Pro status and is now earning K500 more per month. The certificate is still available, but you missed this cycle's bonuses.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Skip it — too much paperwork",
        subtext: "Stay informal",
        outcome: "bad",
        consequenceTitle: "Locked Out of Growth",
        consequenceDesc:
          "Without formal compliance, you stay in the low-tier ride pool. Over 6 months, compliant drivers earn K3,000 more. Staying informal is quietly very costly.",
        scoreChange: -15,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "yango_s4",
    title: "Windfall Week",
    situation:
      "The Lusaka Agricultural Show brought massive demand — you earned K4,800 this week alone. This crosses the quarterly threshold for mandatory PAYE registration for self-employed earners.",
    icon: "🎉",
    choices: [
      {
        text: "Register for PAYE voluntarily",
        subtext: "Become a formal taxpayer",
        outcome: "good",
        consequenceTitle: "Formal Business Status!",
        consequenceDesc:
          "Registering PAYE unlocks access to ZRA's small business support portal, bank loan pre-approval, and government tender lists. You pay K240 tax but gain far more in opportunities.",
        scoreChange: 25,
        moneyChange: -240,
      },
      {
        text: "Donate K500 to a local cause",
        subtext: "CSR deduction strategy",
        outcome: "neutral",
        consequenceTitle: "Partial Credit",
        consequenceDesc:
          "Donating to registered charities is a valid deduction. You reduce tax legally, though you still need to file. A reasonable strategy, done partially correctly.",
        scoreChange: 5,
        moneyChange: -500,
      },
      {
        text: "Split cash across family accounts",
        subtext: "Avoid registration threshold",
        outcome: "bad",
        consequenceTitle: "Structuring Detected!",
        consequenceDesc:
          "ZRA's AI flags systematic splitting as potential tax evasion. Your case is referred to the Financial Intelligence Unit. Legal fees to resolve this far exceed the original tax.",
        scoreChange: -35,
        moneyChange: -800,
      },
    ],
  },
  // Add these to your YANGO_SCENARIOS array in scenarios.js

  {
    id: "yango_s5",
    title: "Car Maintenance Emergency",
    situation:
      "Your car breaks down and needs urgent repairs costing K2,800. You have cash savings but this could affect your tax planning for the quarter. What do you do?",
    icon: "🔧",
    choices: [
      {
        text: "Use savings and keep proper receipt",
        subtext: "Document for tax deduction",
        outcome: "good",
        consequenceTitle: "Smart Tax Planning",
        consequenceDesc:
          "You keep detailed repair records. This becomes a legitimate business expense deduction on your next tax return. Your compliance rating improves for proper record-keeping.",
        scoreChange: 15,
        moneyChange: -2800,
      },
      {
        text: "Borrow from a friend",
        subtext: "Informal loan to avoid records",
        outcome: "neutral",
        consequenceTitle: "Missed Deduction",
        consequenceDesc:
          "You saved cash but lost a valid tax deduction. Your friend's trust is intact, but you missed an opportunity to reduce your taxable income legally.",
        scoreChange: -5,
        moneyChange: -2800,
      },
      {
        text: "Ignore the repair and keep driving",
        subtext: "Risk breakdown and penalties",
        outcome: "bad",
        consequenceTitle: "Major Breakdown",
        consequenceDesc:
          "The car breaks down completely on a highway. You lose a week of work and the repair costs double. Safety and reliability matter for both income and compliance.",
        scoreChange: -20,
        moneyChange: -5600,
      },
    ],
  },
  {
    id: "yango_s6",
    title: "Peak Season Windfall",
    situation:
      "The Christmas season brings K6,500 in earnings this month - triple your normal income. ZRA's system automatically flags incomes above K4,000 for review.",
    icon: "🎄",
    choices: [
      {
        text: "Declare full amount and plan for tax",
        subtext: "Set aside K325 (5% turnover tax)",
        outcome: "good",
        consequenceTitle: "Tax Planning Pays Off",
        consequenceDesc:
          "Your honest declaration during peak season builds credibility with ZRA. You save the tax money in a separate account, and your compliance rating gets a significant boost.",
        scoreChange: 25,
        moneyChange: -325,
      },
      {
        text: "Spread income across multiple months",
        subtext: "Stagger deposits to avoid flag",
        outcome: "neutral",
        consequenceTitle: "Technically Legal but Risky",
        consequenceDesc:
          "You avoid the immediate flag, but ZRA's pattern analysis detects the manipulation. You get a cautionary letter and a 2% penalty.",
        scoreChange: -8,
        moneyChange: -130,
      },
      {
        text: "Keep all cash and declare nothing",
        subtext: "Hide the high-income period",
        outcome: "bad",
        consequenceTitle: "Severe Penalty",
        consequenceDesc:
          "ZRA's AI system detects the income surge. You face a 75% penalty on undeclared income plus accumulated interest. Your account is flagged for intensive monitoring.",
        scoreChange: -35,
        moneyChange: -4875,
      },
    ],
  },
  {
    id: "yango_s7",
    title: "Fuel Price Hike",
    situation:
      "Fuel prices increase by 25%. Your daily operating costs jump from K200 to K250. Rides are not increasing in price. How do you adjust?",
    icon: "⛽",
    choices: [
      {
        text: "Join a drivers association",
        subtext: "Collective negotiation power",
        outcome: "good",
        consequenceTitle: "Community Strength",
        consequenceDesc:
          "The drivers association successfully negotiates a 10% fare increase with Yango. Your fuel cost recovery improves and you stay compliant. Your leadership role is recognized.",
        scoreChange: 20,
        moneyChange: 150,
      },
      {
        text: "Reduce driving hours",
        subtext: "Only drive during peak times",
        outcome: "neutral",
        consequenceTitle: "Better Efficiency",
        consequenceDesc:
          "You work smarter, not harder. You save K800 this month, but your overall income drops. You need a long-term strategy to maintain compliance.",
        scoreChange: 0,
        moneyChange: -800,
      },
      {
        text: "Use bypass roads to save fuel",
        subtext: "Unauthorized route taking",
        outcome: "bad",
        consequenceTitle: "Customer Complaints",
        consequenceDesc:
          "You get multiple customer complaints for long routes. Your Yango rating drops from 4.8 to 3.2 stars. Reduced rides and increased compliance issues hit your income hard.",
        scoreChange: -25,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "yango_s8",
    title: "Insurance Claim Scenario",
    situation:
      "Your car is hit by a minibus. Insurance offers K12,000 payout but requires a ZRA Tax Clearance Certificate to process the claim. You need the money urgently.",
    icon: "📄",
    choices: [
      {
        text: "Get your tax clearance ASAP",
        subtext: "Pay K150 processing fee",
        outcome: "good",
        consequenceTitle: "Fast-Track Success",
        consequenceDesc:
          "You get your tax clearance in 2 days. The insurance pays out quickly. You repair the car and get back on the road. Your compliance saved you.",
        scoreChange: 20,
        moneyChange: 150,
      },
      {
        text: "Ask the insurance company to bend rules",
        subtext: "Pressure for exception",
        outcome: "neutral",
        consequenceTitle: "Delayed Payment",
        consequenceDesc:
          "Insurance refuses to bend. You waste weeks arguing. Eventually you get the clearance, but you lost valuable time and are behind on expenses.",
        scoreChange: -5,
        moneyChange: -500,
      },
      {
        text: "Forget the claim and pay repairs yourself",
        subtext: "Avoid tax compliance",
        outcome: "bad",
        consequenceTitle: "Financial Loss",
        consequenceDesc:
          "You lose K12,000 of insurance money. Your car is fixed but you're now facing cash flow problems and have no tax clearance. A very costly decision.",
        scoreChange: -25,
        moneyChange: -12000,
      },
    ],
  },
  {
    id: "yango_s9",
    title: "Mobile Money Verification",
    situation:
      "ZRA requests your mobile money statements for the last 6 months. You have K18,000 in transactions but only declared K14,000. What do you do?",
    icon: "📱",
    choices: [
      {
        text: "Amend your previous declarations",
        subtext: "Voluntary disclosure",
        outcome: "good",
        consequenceTitle: "Voluntary Disclosure Accepted",
        consequenceDesc:
          "You filed an amended return. ZRA waives the penalty and you pay the K200 additional tax. Your honesty is noted and your taxpayer profile improves.",
        scoreChange: 25,
        moneyChange: -200,
      },
      {
        text: "Provide statements and hope they don't notice",
        subtext: "Take the risk",
        outcome: "neutral",
        consequenceTitle: "Partial Red Flag",
        consequenceDesc:
          "ZRA notes the discrepancy. You get a warning letter and a 10% penalty. You narrowly avoided a full audit. This is your last warning.",
        scoreChange: -8,
        moneyChange: -1400,
      },
      {
        text: "Delete some mobile money records",
        subtext: "Attempt to hide transactions",
        outcome: "bad",
        consequenceTitle: "Record Tampering Detected",
        consequenceDesc:
          "ZRA's forensic analysis detects deleted records. This is a criminal offense. Your account is frozen pending investigation. Legal fees will be substantial.",
        scoreChange: -50,
        moneyChange: -5000,
      },
    ],
  },
  {
    id: "yango_s10",
    title: "Car Loan Opportunity",
    situation:
      "Stanbic Bank offers K80,000 car loan at 12% interest to formal drivers. You found a newer car for K75,000. This could increase your income by 40%.",
    icon: "🏦",
    choices: [
      {
        text: "Apply with full tax clearance",
        subtext: "Show your compliance records",
        outcome: "good",
        consequenceTitle: "Bank Trusts You",
        consequenceDesc:
          "Your compliance record gets you the best interest rate. The new car is more fuel-efficient and reliable. Your monthly income jumps and you're building assets.",
        scoreChange: 30,
        moneyChange: 0,
      },
      {
        text: "Apply with limited documentation",
        subtext: "Try to get loan anyway",
        outcome: "neutral",
        consequenceTitle: "Higher Interest Rate",
        consequenceDesc:
          "You get the loan but at 18% interest. Your monthly payments are K400 higher. You're still better off than before, but paying more than necessary.",
        scoreChange: -5,
        moneyChange: -4800,
      },
      {
        text: "Don't apply, keep your old car",
        subtext: "Stick with what you know",
        outcome: "bad",
        consequenceTitle: "Lost Opportunity",
        consequenceDesc:
          "A competitor gets the new car and earns K1,800 more per month. Your old car keeps breaking down. You're falling behind and struggling to maintain compliance.",
        scoreChange: -15,
        moneyChange: -3600,
      },
    ],
  },
  {
    id: "yango_s11",
    title: "Slow Season Strategy",
    situation:
      "School holidays mean K1,200 this month - well below your K2,800 average. You still need to file tax for the quarter. How do you handle the low income?",
    icon: "📉",
    choices: [
      {
        text: "File honestly and claim expenses",
        subtext: "Document all costs properly",
        outcome: "good",
        consequenceTitle: "Accurate Filing",
        consequenceDesc:
          "You file a correct nil or low tax return. ZRA sees you as an honest taxpayer. Your good record from peak months balances the slow months.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Estimate higher income to maintain image",
        subtext: "Inflate your reported income",
        outcome: "neutral",
        consequenceTitle: "Unnecessary Tax Payment",
        consequenceDesc:
          "You pay K140 tax you didn't owe. You feel pressured about image and compliance. No one asked you to inflate your income. You lost money unnecessarily.",
        scoreChange: -5,
        moneyChange: -140,
      },
      {
        text: "Report zero income for this month",
        subtext: "Pretend you didn't work",
        outcome: "bad",
        consequenceTitle: "Cross-Check Failure",
        consequenceDesc:
          "ZRA's system matches your mobile money records. You receive a penalty for false declaration. Your previous good standing is now questioned.",
        scoreChange: -20,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "yango_s12",
    title: "Fuel Efficiency Investment",
    situation:
      "A mechanic offers to modify your engine for better fuel economy (K2,500). Promises 15% savings on fuel. Should be a business expense. What do you do?",
    icon: "🚘",
    choices: [
      {
        text: "Get it done with proper invoice",
        subtext: "Document for tax deduction",
        outcome: "good",
        consequenceTitle: "Smart Investment",
        consequenceDesc:
          "Fuel costs drop by K300/month. The repair pays for itself in 8 months. You've made a capital improvement and have proper documentation for depreciation.",
        scoreChange: 18,
        moneyChange: -2500,
      },
      {
        text: "Pay cash to the mechanic",
        subtext: "No receipt, cheaper",
        outcome: "neutral",
        consequenceTitle: "Good Result, Bad Paperwork",
        consequenceDesc:
          "The modification works well, but you can't claim the deduction. You saved K250 now but lost K625 in potential tax savings. Always get receipts!",
        scoreChange: -5,
        moneyChange: -2250,
      },
      {
        text: "Skip it, too expensive",
        subtext: "Stay with current fuel costs",
        outcome: "bad",
        consequenceTitle: "Watching Money Burn",
        consequenceDesc:
          "Over the next year, you spend K3,600 more on fuel than you needed to. Your profits are lower and so is your tax liability - but you've hurt your wallet.",
        scoreChange: -10,
        moneyChange: -3600,
      },
    ],
  },
  {
    id: "yango_s13",
    title: "Yango Bonus Week",
    situation:
      "Yango offers a K600 bonus for 100 rides this week. You're at 85 rides. Do you push harder or take it easy? Overtime could mean extra tax. What do you do?",
    icon: "🏆",
    choices: [
      {
        text: "Go for it and report earnings",
        subtext: "Earn the bonus, pay the tax",
        outcome: "good",
        consequenceTitle: "Bonus Earned",
        consequenceDesc:
          "You complete 100 rides. The extra K600 makes a real difference this week. You pay K30 in tax on the bonus and your compliance rating is stable.",
        scoreChange: 10,
        moneyChange: 570,
      },
      {
        text: "Stop at 85 rides",
        subtext: "Avoid the extra tax",
        outcome: "neutral",
        consequenceTitle: "Avoiding Success",
        consequenceDesc:
          "You avoided K30 in tax but lost K570 net. Your financial mindset is holding you back. You're prioritizing tax avoidance over income growth.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Take the bonus and not report it",
        subtext: "Hide the extra income",
        outcome: "bad",
        consequenceTitle: "Bonus Detected",
        consequenceDesc:
          "Yango's platform records all bonuses. ZRA's data matching easily detects hidden income. You pay a 100% penalty on the undeclared amount.",
        scoreChange: -30,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "yango_s14",
    title: "New Tax Law Learning",
    situation:
      "ZRA announces a new simplified turnover tax for ride-hailing drivers. You're invited to a training session. What do you do?",
    icon: "📚",
    choices: [
      {
        text: "Attend the training",
        subtext: "Learn the new system",
        outcome: "good",
        consequenceTitle: "Knowledge is Power",
        consequenceDesc:
          "You understand the new simplified tax. You save K500 per quarter by using the correct deductions. You become a resource for other drivers. Knowledge pays!",
        scoreChange: 25,
        moneyChange: 500,
      },
      {
        text: "Send a friend to take notes",
        subtext: "Second-hand learning",
        outcome: "neutral",
        consequenceTitle: "Partial Understanding",
        consequenceDesc:
          "Your friend gives you a confusing summary. You miss half the deductions. You pay more tax than necessary and learn the hard way to attend training personally.",
        scoreChange: -5,
        moneyChange: -250,
      },
      {
        text: "Skip it, you'll figure it out",
        subtext: "Just ask other drivers",
        outcome: "bad",
        consequenceTitle: "Rumors and Mistakes",
        consequenceDesc:
          "You follow the wrong advice from a friend. You miss filing deadlines and make multiple errors. The penalties cost you K1,200 and lots of stress.",
        scoreChange: -25,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "yango_s15",
    title: "Tax Deadline Reminder",
    situation:
      "It's March 31st - the tax filing deadline. You owe K1,000 tax. You have the money, but a friend says to delay because 'ZRA is lenient.' What do you do?",
    icon: "⏰",
    choices: [
      {
        text: "File and pay immediately",
        subtext: "Meet the deadline",
        outcome: "good",
        consequenceTitle: "Compliance",
        consequenceDesc:
          "ZRA appreciates timely tax compliance. You'll receive a K50 discount for early filing next quarter. Your rating stays excellent.",
        scoreChange: 15,
        moneyChange: -1000,
      },
      {
        text: "Pay just enough to show compliance",
        subtext: "Pay part, promise the rest later",
        outcome: "neutral",
        consequenceTitle: "Late Payment Penalty",
        consequenceDesc:
          "You pay a 5% penalty on the balance. You've hurt your compliance record and will face more scrutiny. The delay cost you K50 in penalties.",
        scoreChange: -8,
        moneyChange: -1050,
      },
      {
        text: "Delay payment and hope for the best",
        subtext: "Bet on ZRA not checking",
        outcome: "bad",
        consequenceTitle: "Late Enforcement",
        consequenceDesc:
          "ZRA charges you a 10% penalty. Your name goes on a watch list. Every future transaction will be reviewed more closely. A costly miscalculation.",
        scoreChange: -30,
        moneyChange: -1100,
      },
    ],
  },
  {
    id: "yango_s16",
    title: "Insurance Premiums",
    situation:
      "Annual car insurance is due - K3,800. Paying it is a business expense. You're considering skipping it to save cash this month. What do you do?",
    icon: "🛡️",
    choices: [
      {
        text: "Pay full insurance, keep records",
        subtext: "Deductible business expense",
        outcome: "good",
        consequenceTitle: "Protected and Compliant",
        consequenceDesc:
          "You're fully insured, legal, and have a valuable tax deduction. When a passenger gets injured, your insurance covers everything. Legal and compliant!",
        scoreChange: 20,
        moneyChange: -3800,
      },
      {
        text: "Buy cheaper third-party only",
        subtext: "Save money now, risk later",
        outcome: "neutral",
        consequenceTitle: "Half Coverage",
        consequenceDesc:
          "You save K1,000 now but your car isn't fully covered. Your tax deduction is also smaller. A balanced but risky choice.",
        scoreChange: -5,
        moneyChange: -2800,
      },
      {
        text: "Drive without insurance",
        subtext: "Save K3,800 today",
        outcome: "bad",
        consequenceTitle: "Massive Penalties",
        consequenceDesc:
          "A small accident becomes a disaster. You're fined K5,000 for no insurance plus repair costs. ZRA adds a non-compliance flag to your file.",
        scoreChange: -30,
        moneyChange: -5000,
      },
    ],
  },
  {
    id: "yango_s17",
    title: "Record Keeping Audit",
    situation:
      "ZRA wants to see your daily trip logs and expense records. You have some receipts, but many are missing. How do you handle this?",
    icon: "📝",
    choices: [
      {
        text: "Produce all available documents",
        subtext: "Be transparent about missing ones",
        outcome: "good",
        consequenceTitle: "Honesty Works",
        consequenceDesc:
          "ZRA appreciates your transparency. You get a minor 2% penalty but a note of cooperation. This builds trust for the future.",
        scoreChange: 18,
        moneyChange: -200,
      },
      {
        text: "Create a summary from memory",
        subtext: "Estimates for missing data",
        outcome: "neutral",
        consequenceTitle: "Warning",
        consequenceDesc:
          "ZRA accepts your estimates but warns you about record-keeping requirements. Next time, they'll expect perfect records. You got lucky.",
        scoreChange: -8,
        moneyChange: 0,
      },
      {
        text: "Fabricate receipts",
        subtext: "Forge missing documents",
        outcome: "bad",
        consequenceTitle: "Serious Consequences",
        consequenceDesc:
          "ZRA detects the forgery. Your business is referred to the legal department. This is tax fraud. Penalties and legal fees could bankrupt you.",
        scoreChange: -50,
        moneyChange: -10000,
      },
    ],
  },
  {
    id: "yango_s18",
    title: "Earn More With Better Fuel",
    situation:
      "Premium fuel makes your car run better - K50 more per tank but you get 15% more efficiency. Some drivers say it's not worth it. What do you do?",
    icon: "⛽",
    choices: [
      {
        text: "Try premium fuel and track results",
        subtext: "Keep data for analysis",
        outcome: "good",
        consequenceTitle: "Better Efficiency",
        consequenceDesc:
          "You drive 80km more per tank. Monthly savings of K150 on fuel. You document the improvement and use the data for business planning.",
        scoreChange: 10,
        moneyChange: 150,
      },
      {
        text: "Stick with regular fuel",
        subtext: "Conservative approach",
        outcome: "neutral",
        consequenceTitle: "Known Quantity",
        consequenceDesc:
          "You're spending K150 more per month than necessary, but you know what to expect. No surprises, but also no growth.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Switch to premium without tracking",
        subtext: "No data, just 'feeling better'",
        outcome: "bad",
        consequenceTitle: "Waste of Money",
        consequenceDesc:
          "You spend K100 extra per month on premium fuel but never track if it's worth it. This is costing you K1,200 a year with no proof of benefit.",
        scoreChange: -10,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "yango_s19",
    title: "Family Support Request",
    situation:
      "Your sister asks for K1,500 to help with school fees. You can afford it, but it affects your tax planning. How do you balance family and compliance?",
    icon: "👨‍👩‍👧‍👦",
    choices: [
      {
        text: "Help your family and document it",
        subtext: "Personal expense, keep records",
        outcome: "good",
        consequenceTitle: "Family and Financial Responsibility",
        consequenceDesc:
          "You help your sister and keep excellent personal records. You separate personal and business expenses. Both your family and your tax file benefit.",
        scoreChange: 10,
        moneyChange: -1500,
      },
      {
        text: "Lend the money",
        subtext: "Document as a loan",
        outcome: "neutral",
        consequenceTitle: "Loan Arrangement",
        consequenceDesc:
          "Your sister gets help and promises to repay. You have a clear record. This avoids tax complications and maintains family harmony.",
        scoreChange: 0,
        moneyChange: -1500,
      },
      {
        text: "Claim it as a business expense",
        subtext: "Fraudulent deduction",
        outcome: "bad",
        consequenceTitle: "Fraud Detected",
        consequenceDesc:
          "ZRA flags this as a non-business expense. You face a 50% penalty plus legal consequences. This 'help' could cost you K7,500.",
        scoreChange: -40,
        moneyChange: -3000,
      },
    ],
  },
  {
    id: "yango_s20",
    title: "Software for Bookkeeping",
    situation:
      "An app costs K80/month to track trips and expenses automatically. Saves you 3 hours of manual record-keeping. Business expense? Your choice.",
    icon: "📱",
    choices: [
      {
        text: "Invest in the app",
        subtext: "Monthly subscription, proper expense",
        outcome: "good",
        consequenceTitle: "Efficiency Gains",
        consequenceDesc:
          "You save 36 hours per year and never miss a deduction. The app pays for itself. Your records are ZRA-ready. This is a smart business investment.",
        scoreChange: 18,
        moneyChange: -960,
      },
      {
        text: "Try it for 3 months",
        subtext: "Test before commitment",
        outcome: "neutral",
        consequenceTitle: "Limited Benefit",
        consequenceDesc:
          "You save some time but don't fully commit. Your records are decent but not comprehensive. You're doing okay but could be doing better.",
        scoreChange: 5,
        moneyChange: -240,
      },
      {
        text: "Continue manual record-keeping",
        subtext: "Avoid technology cost",
        outcome: "bad",
        consequenceTitle: "Time Waste",
        consequenceDesc:
          "You spend countless hours managing records. You make mistakes that cost you tax savings. This 'saving' is costing you money and stress.",
        scoreChange: -8,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "yango_s21",
    title: "Credit Purchase of Fuel",
    situation:
      "A station offers a credit fuel account - pay at end of month. 5% discount if you prepay with your tax card. Which do you choose?",
    icon: "💳",
    choices: [
      {
        text: "Prepay with tax card",
        subtext: "Get 5% discount and track expenses",
        outcome: "good",
        consequenceTitle: "Double Benefits",
        consequenceDesc:
          "You save K200 on fuel and have perfect expense records. ZRA sees a pattern of responsible business management. Your rating improves.",
        scoreChange: 20,
        moneyChange: 200,
      },
      {
        text: "Open a credit account",
        subtext: "Pay monthly, but no discount",
        outcome: "neutral",
        consequenceTitle: "Convenience Over Savings",
        consequenceDesc:
          "You pay K200 more but have better cash flow. This is a neutral choice - convenient but not maximising value.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Pay cash for every fuel stop",
        subtext: "No paper trail",
        outcome: "bad",
        consequenceTitle: "Costly Fuel",
        consequenceDesc:
          "You pay K240 more per month and have no proof of expenses. Your tax bill is higher because you can't claim deductions you deserve.",
        scoreChange: -15,
        moneyChange: -240,
      },
    ],
  },
  {
    id: "yango_s22",
    title: "Car Inspection Requirement",
    situation:
      "ZRA requires annual vehicle safety inspection for commercial use. Costs K250 and takes 2 hours. You need it for your business licence. What do you do?",
    icon: "🔍",
    choices: [
      {
        text: "Book inspection in advance",
        subtext: "Plan your time",
        outcome: "good",
        consequenceTitle: "Efficient Compliance",
        consequenceDesc:
          "You complete inspection quickly, document costs, and build trust. This is a reasonable business expense that's tax-deductible.",
        scoreChange: 10,
        moneyChange: -250,
      },
      {
        text: "Show up early morning for inspection",
        subtext: "Try to get it done quickly",
        outcome: "neutral",
        consequenceTitle: "Time Wasted",
        consequenceDesc:
          "You spend 4 hours at the inspection center. You lose 2 hours of driving time, costing you K120. The inspection is passed but poorly planned.",
        scoreChange: -5,
        moneyChange: -370,
      },
      {
        text: "Skip the inspection",
        subtext: "Risk using faulty car",
        outcome: "bad",
        consequenceTitle: "Penalties and Risk",
        consequenceDesc:
          "You get fined K1,000 and the car is impounded for the day. Your insurance becomes invalid. The costs multiply from K250 to K2,500.",
        scoreChange: -30,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "yango_s23",
    title: "Payroll System Introduction",
    situation:
      "Yango introduces digital payroll for drivers. Your earnings will be recorded officially. You hear rumors this means more tax scrutiny. What do you do?",
    icon: "💻",
    choices: [
      {
        text: "Welcome the transparency",
        subtext: "This system protects you",
        outcome: "good",
        consequenceTitle: "Total Transparency",
        consequenceDesc:
          "ZRA now has a clear record of your earnings. This simplifies your tax filing and reduces disputes. You save K200 per month on accountant fees.",
        scoreChange: 20,
        moneyChange: 200,
      },
      {
        text: "Resist but eventually comply",
        subtext: "Minimize change",
        outcome: "neutral",
        consequenceTitle: "Delayed but Done",
        consequenceDesc:
          "You delayed for a month but eventually joined the system. You lost time and had some penalties, but you're now aligned. A costly delay.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Refuse to participate",
        subtext: "Stay off-grid",
        outcome: "bad",
        consequenceTitle: "Blacklisted",
        consequenceDesc:
          "Yango suspends your account for non-compliance. You lose K1,200 of income before you relent. You're now behind everyone else.",
        scoreChange: -35,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "yango_s24",
    title: "Charity Work Tax Deduction",
    situation:
      "You donated K500 to a registered children's charity. ZRA offers a K150 tax credit for charitable donations. Some drivers say it's not worth the paperwork.",
    icon: "❤️",
    choices: [
      {
        text: "Claim the deduction properly",
        subtext: "Keep receipts and file correctly",
        outcome: "good",
        consequenceTitle: "Done Good",
        consequenceDesc:
          "You save K150 on your tax bill. The charity receives K500. You've helped both the community and your compliance. This is how tax incentives work.",
        scoreChange: 12,
        moneyChange: 150,
      },
      {
        text: "Donate but don't claim",
        subtext: "Do good, forget tax savings",
        outcome: "neutral",
        consequenceTitle: "Good Intentions",
        consequenceDesc:
          "You did something good but left K150 on the table. Your efforts are appreciated but your compliance record missed a small boost.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Claim a donation you didn't make",
        subtext: "Fraudulent deduction",
        outcome: "bad",
        consequenceTitle: "Charity Fraud Detected",
        consequenceDesc:
          "ZRA cross-checks with the charity register. This is tax fraud. You face fines and possible criminal charges. Charity fraud is a serious offense.",
        scoreChange: -40,
        moneyChange: -3000,
      },
    ],
  },
  {
    id: "yango_s25",
    title: "Roadside Breakdown",
    situation:
      "Your car breaks down near the ZRA office during business hours. You need a tow truck and lose a day of work. How do you handle this disruption?",
    icon: "🚨",
    choices: [
      {
        text: "Call a professional towing service",
        subtext: "Get receipt, document properly",
        outcome: "good",
        consequenceTitle: "Professional Handling",
        consequenceDesc:
          "You get a proper receipt for the towing. It's a legitimate business expense. You're back on the road within 24 hours. Good record-keeping.",
        scoreChange: 10,
        moneyChange: -400,
      },
      {
        text: "Ask a friend to help tow",
        subtext: "Cash payment, no receipt",
        outcome: "neutral",
        consequenceTitle: "Cash Transaction",
        consequenceDesc:
          "Your friend helps for K200, but you can't claim the expense. This saves you K200 now but costs you in tax deductions later. A trade-off.",
        scoreChange: -5,
        moneyChange: -200,
      },
      {
        text: "Leave the car and deal with it tomorrow",
        subtext: "Avoid immediate costs",
        outcome: "bad",
        consequenceTitle: "Worse Consequences",
        consequenceDesc:
          "Your car is impounded. You pay a K1,000 fine plus the towing fee. You've turned a K400 expense into K1,400 and lost 2 days of work.",
        scoreChange: -25,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "yango_s26",
    title: "Bumper Damage",
    situation:
      "You minorly damage your bumper in a parking lot. Repair costs are K800. Your excess is K1,200. Should you claim insurance or not?",
    icon: "💥",
    choices: [
      {
        text: "Pay for repair yourself",
        subtext: "Get a receipt for the business expense",
        outcome: "good",
        consequenceTitle: "Smart Repairs",
        consequenceDesc:
          "You get a proper receipt and claim the expense against your business. This keeps your insurance record clean. A good business decision.",
        scoreChange: 10,
        moneyChange: -800,
      },
      {
        text: "Claim insurance",
        subtext: "Pay the excess, higher premiums",
        outcome: "neutral",
        consequenceTitle: "Insurance Claim",
        consequenceDesc:
          "Your premiums increase by K400 next year. You spent K1,200 on excess but saved K800 now. A complex calculation – not clear if you won.",
        scoreChange: 0,
        moneyChange: -1200,
      },
      {
        text: "Ignore the damage",
        subtext: "Drive with a broken bumper",
        outcome: "bad",
        consequenceTitle: "Legal Issue",
        consequenceDesc:
          "You get fined by police for a dangerous vehicle. The repair now costs K1,200. Your compliance and safety records suffer.",
        scoreChange: -20,
        moneyChange: -1200,
      },
    ],
  },
  {
    id: "yango_s27",
    title: "Windfall Tip",
    situation:
      "A passenger gives you a K500 tip for helping with luggage. This is technically income. You're not sure if you need to declare it. What do you do?",
    icon: "💰",
    choices: [
      {
        text: "Declare the tip as income",
        subtext: "It's earned income, after all",
        outcome: "good",
        consequenceTitle: "Complete Honesty",
        consequenceDesc:
          "Your K500 tip means K25 extra tax. You build a reputation for total transparency. This is how you become a model taxpayer.",
        scoreChange: 15,
        moneyChange: -25,
      },
      {
        text: "Keep it as a gift",
        subtext: "A gift is not taxable",
        outcome: "neutral",
        consequenceTitle: "Legal Gray Area",
        consequenceDesc:
          "Technically, in a service industry, tips are income. You might get away with it, but if checked, you'd face a penalty. A risky position.",
        scoreChange: -8,
        moneyChange: 0,
      },
      {
        text: "It's a tip, no one tracks this",
        subtext: "Don't declare it",
        outcome: "bad",
        consequenceTitle: "Tip Tracking",
        consequenceDesc:
          "ZRA's data analysis flags drivers with income inconsistent with tips. Your honesty is questioned and your credibility is damaged.",
        scoreChange: -20,
        moneyChange: -500,
      },
    ],
  },
  {
    id: "yango_s28",
    title: "Lost Fuel Receipts",
    situation:
      "You lost a month's fuel receipts worth K2,800. These are legitimate business expenses. What do you do about your next tax filing?",
    icon: "🧾",
    choices: [
      {
        text: "Use bank statements and an affidavit",
        subtext: "Make a formal declaration",
        outcome: "good",
        consequenceTitle: "Alternative Evidence",
        consequenceDesc:
          "Your bank statements show the fuel purchases. You swear an affidavit and the expenses are accepted. Honest and responsible handling.",
        scoreChange: 12,
        moneyChange: 0,
      },
      {
        text: "Estimate based on average fuel use",
        subtext: "Reasonable estimate",
        outcome: "neutral",
        consequenceTitle: "Estimated Deduction",
        consequenceDesc:
          "ZRA accepts your estimate but notes that records should be kept. This works once, but won't be allowed again.",
        scoreChange: -5,
        moneyChange: -140,
      },
      {
        text: "Claim the full amount without proof",
        subtext: "Hope they don't check",
        outcome: "bad",
        consequenceTitle: "Audit Triggered",
        consequenceDesc:
          "ZRA audits your claimed expenses. Without receipts, you lose the deduction and face a 20% penalty. This is an expensive lesson in record-keeping.",
        scoreChange: -25,
        moneyChange: -700,
      },
    ],
  },
  {
    id: "yango_s29",
    title: "Yango Rating System",
    situation:
      "Your rating drops from 4.9 to 4.2. You're getting fewer ride requests. Your income is down K800 this month. Is this a business or tax issue?",
    icon: "⭐",
    choices: [
      {
        text: "Improve service quality",
        subtext: "Invest in customer satisfaction",
        outcome: "good",
        consequenceTitle: "Rating Recovery",
        consequenceDesc:
          "Within a month, your rating is back to 4.8. Income increases to previous levels. This cost you K200 in small gestures, but it was worth every kwacha.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Lower your fares temporarily",
        subtext: "Attract more riders",
        outcome: "neutral",
        consequenceTitle: "Short-Term Strategy",
        consequenceDesc:
          "You attract more riders but your income drops by K400 this month. You recover, but your compliance suffered because your income dropped.",
        scoreChange: -5,
        moneyChange: -400,
      },
      {
        text: "Create a fake positive review campaign",
        subtext: "Cheat the system",
        outcome: "bad",
        consequenceTitle: "Rating Manipulation",
        consequenceDesc:
          "Yango detects the fake reviews and suspends your account for 3 days. You lose K600 in income and your rating drops to 4.0. A costly cheat.",
        scoreChange: -30,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "yango_s30",
    title: "Air Conditioning Repair",
    situation:
      "Your car's A/C breaks in summer. Passengers complain. Repair costs K2,000 for a proper fix or you can keep the windows open. What do you do?",
    icon: "🥵",
    choices: [
      {
        text: "Fix the A/C properly",
        subtext: "Get a receipt for business expense",
        outcome: "good",
        consequenceTitle: "Happy Passengers",
        consequenceDesc:
          "Passengers rate you higher. You're now driving in comfort. You claim the repair as a business expense. This is good for your business.",
        scoreChange: 15,
        moneyChange: -2000,
      },
      {
        text: "Get a temporary fix",
        subtext: "Cheap but short-term",
        outcome: "neutral",
        consequenceTitle: "Avoiding Full Repair",
        consequenceDesc:
          "The temp fix works for a month, then fails. You paid K800 twice. You could have bought new A/C for just a bit more. This is inefficient.",
        scoreChange: -5,
        moneyChange: -1600,
      },
      {
        text: "Drive with windows open",
        subtext: "No cost",
        outcome: "bad",
        consequenceTitle: "Customer Complaints",
        consequenceDesc:
          "Your rating drops, you lose K1,400 in income this month. In the worst heat, you lose out. You've saved K2,000 but lost K1,400. Not worth it.",
        scoreChange: -15,
        moneyChange: -1400,
      },
    ],
  },
  {
    id: "yango_s31",
    title: "Home Office Deduction",
    situation:
      "You use a room in your house for business planning and record-keeping. Some expenses are deductible. How do you handle this personal vs business expense?",
    icon: "🏠",
    choices: [
      {
        text: "Keep a detailed log of business use",
        subtext: "Calculate a fair deduction",
        outcome: "good",
        consequenceTitle: "Proper Home Office Deduction",
        consequenceDesc:
          "You claim 15% of your utilities as a business expense. This saves you K350 per year. ZRA accepts your logs and receipts. A professional approach.",
        scoreChange: 12,
        moneyChange: 350,
      },
      {
        text: "Claim all utility bills",
        subtext: "Aggressive deduction",
        outcome: "neutral",
        consequenceTitle: "Audit Risk",
        consequenceDesc:
          "ZRA questions your claim. You settle for a lower deduction and pay a small penalty. You narrowly avoided a more serious audit. You got lucky.",
        scoreChange: -8,
        moneyChange: -200,
      },
      {
        text: "Don't claim anything for home office",
        subtext: "Too complicated",
        outcome: "bad",
        consequenceTitle: "Missed Savings",
        consequenceDesc:
          "You're paying K350 more in tax than you need to. You're losing money through avoidance, not the tax system. Over 5 years, this is K1,750 lost.",
        scoreChange: -5,
        moneyChange: -350,
      },
    ],
  },
  {
    id: "yango_s32",
    title: "Phone and Internet Costs",
    situation:
      "You use your personal smartphone for work. You spend K150/month on calls and data related to Yango. Is this business or personal?",
    icon: "📱",
    choices: [
      {
        text: "Track business usage and claim proportion",
        subtext: "Detailed log",
        outcome: "good",
        consequenceTitle: "Fair Deduction",
        consequenceDesc:
          "You claim 60% of your phone bill as business. You save K1,080 per year. Your records are detailed and professional. Good compliance.",
        scoreChange: 12,
        moneyChange: 1080,
      },
      {
        text: "Claim the full phone bill",
        subtext: "Aggressive approach",
        outcome: "neutral",
        consequenceTitle: "Partial Disallowance",
        consequenceDesc:
          "ZRA allows 70% of your claim. You get a warning about excessive claims. Your records are not perfect, but you're trying.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Separate work and personal lines",
        subtext: "Perfectly clean approach",
        outcome: "good",
        consequenceTitle: "Clean Records",
        consequenceDesc:
          "You have a dedicated business phone. You claim K1,800 per year and have perfect records. Your compliance rating improves significantly.",
        scoreChange: 15,
        moneyChange: 1800,
      },
    ],
  },
  {
    id: "yango_s33",
    title: "Annual Road Tax",
    situation:
      "Your annual road tax of K1,200 is due. It's a significant expense. You're thinking of delaying to improve your monthly cash flow. What do you do?",
    icon: "🛣️",
    choices: [
      {
        text: "Pay the tax on time",
        subtext: "This is a business expense",
        outcome: "good",
        consequenceTitle: "Good Standing",
        consequenceDesc:
          "Your road tax is paid and you receive a discount for early payment. You also have proof for your records. Everything is in order.",
        scoreChange: 12,
        moneyChange: -1200,
      },
      {
        text: "Pay monthly installments",
        subtext: "Spread the cost",
        outcome: "neutral",
        consequenceTitle: "Instalment Option",
        consequenceDesc:
          "You pay K120 per month. The expense is slightly more, but your cash flow is better. You have no additional tax consequences.",
        scoreChange: 0,
        moneyChange: -1320,
      },
      {
        text: "Delay payment for 3 months",
        subtext: "Use the money for other things",
        outcome: "bad",
        consequenceTitle: "Penalty and Interest",
        consequenceDesc:
          "You're charged K300 in penalties and interest. Your registration is delayed by a week, costing you K600 in lost income. You regret your choice.",
        scoreChange: -25,
        moneyChange: -900,
      },
    ],
  },
  {
    id: "yango_s34",
    title: "Learner Driver Opportunity",
    situation:
      "A friend wants to learn to drive and offers K800 to teach them in your car. This is additional income. You're not sure about the tax implications.",
    icon: "🚗",
    choices: [
      {
        text: "Accept and declare it as income",
        subtext: "K800 plus K40 tax",
        outcome: "good",
        consequenceTitle: "Additional Income Declared",
        consequenceDesc:
          "You earn K760 net after tax. Your friend learns safely. Your honesty in declaring additional income is noted by ZRA.",
        scoreChange: 10,
        moneyChange: 760,
      },
      {
        text: "Accept but don't declare it",
        subtext: "Cash transaction, no record",
        outcome: "neutral",
        consequenceTitle: "Undisclosed Income",
        consequenceDesc:
          "You got K800 cash. It's not tracked, but you're breaking the law. This could be discovered and you'd face a penalty. Risk is real.",
        scoreChange: -10,
        moneyChange: 800,
      },
      {
        text: "Refuse the opportunity",
        subtext: "Stick to your regular route",
        outcome: "bad",
        consequenceTitle: "Missed Income",
        consequenceDesc:
          "You passed on K760 of net income. A competitor takes the offer and builds their business. You're thinking too small for your own good.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "yango_s35",
    title: "Economic Crisis Response",
    situation:
      "Zambia's economy is slowing. Your income is down 30%. You want to cut costs. What's the right approach to maintain compliance during tough times?",
    icon: "📊",
    choices: [
      {
        text: "Restructure your business operations",
        subtext: "Professional approach",
        outcome: "good",
        consequenceTitle: "Adaptation",
        consequenceDesc:
          "You cut costs by 20% without affecting quality. Your tax bill adjusts to your lower income. You receive a compliance bonus for filing accurately.",
        scoreChange: 15,
        moneyChange: 800,
      },
      {
        text: "Work longer hours",
        subtext: "More time, same rate",
        outcome: "neutral",
        consequenceTitle: "Higher Income, but More Tax",
        consequenceDesc:
          "Your income recovered 50% and your tax bill is higher. You're working more but only keeping 70% of extra income. A challenging but honest approach.",
        scoreChange: 0,
        moneyChange: 500,
      },
      {
        text: "Cut corners and avoid compliance",
        subtext: "Cheat the system to save",
        outcome: "bad",
        consequenceTitle: "Illegal Route",
        consequenceDesc:
          "You'll pay penalties and have lower income. This approach often leads to significant issues. Smart compliance is more effective than avoiding it.",
        scoreChange: -35,
        moneyChange: -1500,
      },
    ],
  },
  {
    id: "yango_s36",
    title: "Appreciation Bonus",
    situation:
      "Yango gives you a K200 bonus for being a top-rated driver. The bonus is added to your app wallet. Is it subject to tax?",
    icon: "🎊",
    choices: [
      {
        text: "Declare the bonus properly",
        subtext: "It's income, after all",
        outcome: "good",
        consequenceTitle: "Inclusive Compliance",
        consequenceDesc:
          "You declare the bonus and get a K190 net benefit after tax. Your compliance record is spotless. This was the right thing to do.",
        scoreChange: 10,
        moneyChange: 190,
      },
      {
        text: "Treat it as a gift",
        subtext: "Don't declare it",
        outcome: "neutral",
        consequenceTitle: "Unclear Status",
        consequenceDesc:
          "You keep the full K200 but can't be sure this won't be discovered. It's a gray area. This is risky and not a position to be in.",
        scoreChange: -8,
        moneyChange: 200,
      },
      {
        text: "Share it with other drivers",
        subtext: "Dilute the income",
        outcome: "bad",
        consequenceTitle: "Fraudulent Disbursement",
        consequenceDesc:
          "Spreading the bonus is a form of tax evasion. It's illegal and could be detected. Penalties far outweigh the K200 reward.",
        scoreChange: -25,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "yango_s37",
    title: "Technology Upgrade",
    situation:
      "A new phone would help your work. Cost K4,000 and is a business expense if you use it 100% for work. You currently use a K1,200 phone.",
    icon: "📲",
    choices: [
      {
        text: "Buy the phone and track usage",
        subtext: "Business expense",
        outcome: "good",
        consequenceTitle: "Efficiency Upgrade",
        consequenceDesc:
          "Your new phone speeds up your work. In a month, you earn K400 more. The deduction saves you K600 in tax. A great business investment.",
        scoreChange: 15,
        moneyChange: -4000,
      },
      {
        text: "Buy a cheaper K2,000 phone",
        subtext: "Compromise, not upgrade",
        outcome: "neutral",
        consequenceTitle: "Partial Upgrade",
        consequenceDesc:
          "Your productivity improves, but not as much as it could. The tax deduction is smaller and your earnings are lower than with the better phone.",
        scoreChange: 5,
        moneyChange: -2000,
      },
      {
        text: "Stick with your current phone",
        subtext: "Save money",
        outcome: "bad",
        consequenceTitle: "Productivity Loss",
        consequenceDesc:
          "Your phone keeps slowing down. You're losing K400 per month in efficiency. In 6 months, you'll have lost K2,400. The 'saving' was a loss.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "yango_s38",
    title: "First-time Tax Filing",
    situation:
      "This is your first year filing tax. You have K32,000 in income and no records. How do you proceed? You have no filing history.",
    icon: "📋",
    choices: [
      {
        text: "Hire a tax agent to help",
        subtext: "Professional start",
        outcome: "good",
        consequenceTitle: "Professional Support",
        consequenceDesc:
          "You get a proper filing and a clean start. A professional ensures you comply with the law. It's an investment in your peace of mind.",
        scoreChange: 20,
        moneyChange: -500,
      },
      {
        text: "Figure it out yourself",
        subtext: "DIY with research",
        outcome: "neutral",
        consequenceTitle: "Limited Success",
        consequenceDesc:
          "You file and pay K500 in tax, but you miss several deductions. You pay more tax than necessary but you've begun the compliance process.",
        scoreChange: 0,
        moneyChange: -500,
      },
      {
        text: "Don't file, hope you're not noticed",
        subtext: "Avoid completely",
        outcome: "bad",
        consequenceTitle: "Enforcement Action",
        consequenceDesc:
          "ZRA identifies your case. You get a K1,000 fine and a mandatory filing order. You're now starting from a negative position.",
        scoreChange: -30,
        moneyChange: -1000,
      },
    ],
  },
  {
    id: "yango_s39",
    title: "Joint Filing with Spouse",
    situation:
      "Your spouse also has informal income from selling vegetables (K8,000/year). You're considering combining your income for tax purposes. What do you do?",
    icon: "👫",
    choices: [
      {
        text: "File separately as individuals",
        subtext: "Clean records",
        outcome: "good",
        consequenceTitle: "Individual Filing",
        consequenceDesc:
          "Both of you file separately and each claim your own deductions. Your total tax bill is lower and each record is clean. This is optimal.",
        scoreChange: 12,
        moneyChange: 300,
      },
      {
        text: "Combine and file as a family",
        subtext: "One return, both incomes",
        outcome: "neutral",
        consequenceTitle: "Joint Filing",
        consequenceDesc:
          "The combined income pushes you into a higher bracket. You pay K600 more in tax but have only one return. A mixed outcome.",
        scoreChange: -5,
        moneyChange: -600,
      },
      {
        text: "Don't declare the vegetable income",
        subtext: "Hide household income",
        outcome: "bad",
        consequenceTitle: "Hidden Income Detected",
        consequenceDesc:
          "ZRA's analysis detects the missing income. Both of you face penalties. This is tax evasion and it's illegal. A dangerous and costly path.",
        scoreChange: -30,
        moneyChange: -2000,
      },
    ],
  },
  {
    id: "yango_s40",
    title: "Vehicle Logo Advertising",
    situation:
      "A company offers K300/month to put advertising on your car. It's extra income, but they want a receipt. What do you do?",
    icon: "📢",
    choices: [
      {
        text: "Accept and issue proper receipts",
        subtext: "Commercial transaction",
        outcome: "good",
        consequenceTitle: "Advertising Income",
        consequenceDesc:
          "You earn K3,600 per year. The receipts are evidence for your tax records. You've created a new revenue stream with minimal effort.",
        scoreChange: 10,
        moneyChange: 300,
      },
      {
        text: "Accept but don't issue receipts",
        subtext: "Cash arrangement",
        outcome: "neutral",
        consequenceTitle: "Unrecorded Income",
        consequenceDesc:
          "You're earning K3,600 but it's not in the tax system. This is cash income without records, which is a form of tax evasion.",
        scoreChange: -8,
        moneyChange: 300,
      },
      {
        text: "Refuse the offer",
        subtext: "Keep your car clean",
        outcome: "bad",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "A competitor takes the advertising and builds their business. You missed out on a good income stream that could have boosted your savings.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "yango_s41",
    title: "Non-Filing Penalty Notice",
    situation:
      "You forgot to file last quarter. ZRA sent a penalty notice of K400. What do you do about the filing issue?",
    icon: "⚠️",
    choices: [
      {
        text: "File immediately and pay the fine",
        subtext: "Take responsibility",
        outcome: "good",
        consequenceTitle: "Responsible Taxpayer",
        consequenceDesc:
          "You file and pay K400. ZRA notes your cooperation. Your record stays clean and you move on. This is the appropriate way to handle a mistake.",
        scoreChange: 10,
        moneyChange: -400,
      },
      {
        text: "Call ZRA to negotiate",
        subtext: "Request a waiver",
        outcome: "neutral",
        consequenceTitle: "Partial Penalty",
        consequenceDesc:
          "You get a K100 reduction but you spent hours on the phone. The experience has taught you to file on time going forward.",
        scoreChange: 0,
        moneyChange: -300,
      },
      {
        text: "Ignore the notice",
        subtext: "Pretend you didn't see it",
        outcome: "bad",
        consequenceTitle: "Escalated Penalty",
        consequenceDesc:
          "ZRA doubles the fine to K800. Your account is flagged for future audits. A K400 mistake becomes a K800 problem with more serious consequences.",
        scoreChange: -25,
        moneyChange: -800,
      },
    ],
  },
  {
    id: "yango_s42",
    title: "End of Year Review",
    situation:
      "It's the end of the year. You earned K52,000 and paid K2,600 in tax. Your friend says you could have saved money by not declaring all income.",
    icon: "📊",
    choices: [
      {
        text: "Review your compliance with pride",
        subtext: "Celebrate your compliance",
        outcome: "good",
        consequenceTitle: "Clean Record",
        consequenceDesc:
          "You have a perfect filing record. Your income and taxes are fully declared. You can access financial services, and you have peace of mind.",
        scoreChange: 20,
        moneyChange: 0,
      },
      {
        text: "Look for legitimate deductions next year",
        subtext: "Plan to reduce tax legally",
        outcome: "neutral",
        consequenceTitle: "Tax Planning",
        consequenceDesc:
          "You can reduce your tax bill legally. This is smart management, not evasion. It's a good approach for anyone in business.",
        scoreChange: 5,
        moneyChange: 500,
      },
      {
        text: "Regret not hiding more income",
        subtext: "Wish you'd cheated",
        outcome: "bad",
        consequenceTitle: "Mindset Issue",
        consequenceDesc:
          "This is not a tax problem. It's a personal mindset issue. You need to understand that compliant business is more profitable in the long run.",
        scoreChange: -10,
        moneyChange: -2000,
      },
    ],
  },
];
