export const MARKETTRADER_SCENARIOS = [
  {
    id: "market_s1",
    title: "Council Levy Collector Arrives",
    situation:
      "A Lusaka City Council officer comes round collecting the daily market levy — K15 for your stall. You're short on change after a slow morning. What do you do?",
    icon: "🎫",
    choices: [
      {
        text: "Pay the full K15 levy",
        subtext: "Standard daily council fee",
        outcome: "good",
        consequenceTitle: "Stall Secured",
        consequenceDesc:
          "You pay promptly and the officer marks your stall as compliant for the day. Council-registered traders get priority for better stall positions when space opens up.",
        scoreChange: 15,
        moneyChange: -15,
      },
      {
        text: "Offer K10 and negotiate",
        subtext: "Try to bargain down the levy",
        outcome: "neutral",
        consequenceTitle: "Awkward Compromise",
        consequenceDesc:
          "The officer accepts K10 today but notes your stall number. Levies aren't negotiable, so this could draw extra attention next time around.",
        scoreChange: -5,
        moneyChange: -10,
      },
      {
        text: "Pack up early to dodge the officer",
        subtext: "Avoid paying today",
        outcome: "bad",
        consequenceTitle: "Stall Flagged",
        consequenceDesc:
          "Dodging the levy gets your stall number reported to the market committee. Repeated dodging can mean losing your stall allocation entirely.",
        scoreChange: -20,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s2",
    title: "Tomatoes Are Spoiling",
    situation:
      "You bought K600 worth of tomatoes three days ago and half of them are starting to rot before you can sell them all. What's your move?",
    icon: "🍅",
    choices: [
      {
        text: "Discount them fast and sell today",
        subtext: "Reduce price to clear stock",
        outcome: "good",
        consequenceTitle: "Smart Recovery",
        consequenceDesc:
          "Selling at a discount recovers most of your capital instead of losing it all to spoilage. You record the loss properly, which matters if you ever need to show ZRA your actual turnover.",
        scoreChange: 10,
        moneyChange: 180,
      },
      {
        text: "Mix the good and bad ones together",
        subtext: "Sell as a single batch",
        outcome: "neutral",
        consequenceTitle: "Short-Term Fix",
        consequenceDesc:
          "Customers notice some rotten tomatoes in their bags. A few complain. You make some money back but a couple of regular customers go elsewhere next time.",
        scoreChange: -5,
        moneyChange: 90,
      },
      {
        text: "Dump them and don't record the loss",
        subtext: "Write it off informally",
        outcome: "bad",
        consequenceTitle: "Capital Gone",
        consequenceDesc:
          "Without recording the loss, your books look like you made K600 in pure profit on stock that's now gone. This kind of gap is exactly what raises questions in an income review.",
        scoreChange: -10,
        moneyChange: -600,
      },
    ],
  },
  {
    id: "market_s3",
    title: "Wholesaler Offers Credit",
    situation:
      "Your usual wholesaler offers to supply K1,200 worth of vegetables on credit, payable in two weeks, no paperwork needed — just a handshake deal.",
    icon: "🤝",
    choices: [
      {
        text: "Take the credit and keep a written record",
        subtext: "Note the date, amount, and due date",
        outcome: "good",
        consequenceTitle: "Protected Both Ways",
        consequenceDesc:
          "Keeping your own simple record protects you if there's ever a dispute, and gives you a paper trail showing this was a loan, not untaxed income, if your books are ever reviewed.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Take the credit on a handshake only",
        subtext: "No written record",
        outcome: "neutral",
        consequenceTitle: "Works Until It Doesn't",
        consequenceDesc:
          "The deal goes fine this time. But with no record, if the wholesaler later disputes what was owed, or if anyone questions the cash movement, you have nothing to point to.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Take double the stock and resell some for quick cash",
        subtext: "Use the credit line for a side hustle",
        outcome: "bad",
        consequenceTitle: "Overextended",
        consequenceDesc:
          "You're now juggling K2,400 in informal debt with no contract. When repayment time comes, your cash flow can't cover it, and the wholesaler cuts you off from future credit.",
        scoreChange: -15,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "market_s4",
    title: "Good Month, Big Decision",
    situation:
      "Business has been strong — you've made K3,400 this month, well above your usual. A fellow trader mentions ZRA has been visiting market associations about turnover tax registration.",
    icon: "📈",
    choices: [
      {
        text: "Register for Turnover Tax voluntarily",
        subtext: "Pay 5% on this month's turnover",
        outcome: "good",
        consequenceTitle: "Ahead of the Curve",
        consequenceDesc:
          "Registering before being asked puts you in good standing with ZRA. You get a TPIN, which you'll need anyway if your stall ever grows into a registered shop.",
        scoreChange: 25,
        moneyChange: -170,
      },
      {
        text: "Wait and see if ZRA actually visits your section",
        subtext: "Delay the decision",
        outcome: "neutral",
        consequenceTitle: "Waiting Game",
        consequenceDesc:
          "Nothing happens immediately, but you're now operating without a TPIN while clearly crossing into taxable turnover. The risk doesn't go away, it just waits.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Keep takings in cash and avoid any registration",
        subtext: "Stay completely off the books",
        outcome: "bad",
        consequenceTitle: "Growing Exposure",
        consequenceDesc:
          "Market associations increasingly share vendor lists with ZRA for levy reconciliation. Staying invisible gets harder every month your stall keeps growing.",
        scoreChange: -20,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s5",
    title: "Market Association Dues",
    situation:
      "The market traders' association asks for K50 in monthly dues, which fund security, cleaning, and a shared legal fund traders can use if there's a dispute with council.",
    icon: "🛡️",
    choices: [
      {
        text: "Pay the dues and join the association",
        subtext: "Full membership",
        outcome: "good",
        consequenceTitle: "Backed by the Group",
        consequenceDesc:
          "Membership gives you access to shared security and a voice in market decisions. When disputes come up with council or suppliers, the association negotiates on your behalf.",
        scoreChange: 15,
        moneyChange: -50,
      },
      {
        text: "Pay only when security patrols are visible",
        subtext: "Inconsistent contribution",
        outcome: "neutral",
        consequenceTitle: "Limited Standing",
        consequenceDesc:
          "Other traders notice you only pay when it suits you. You still benefit from shared services, but you're not seen as a fully contributing member of the stall community.",
        scoreChange: -5,
        moneyChange: -20,
      },
      {
        text: "Refuse to pay, use services anyway",
        subtext: "Free ride on shared resources",
        outcome: "bad",
        consequenceTitle: "Excluded from Support",
        consequenceDesc:
          "When a dispute comes up over your stall boundary, the association won't step in for a non-paying member. You're left to handle it alone.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s6",
    title: "Mobile Money Sales Spike",
    situation:
      "More customers are paying via mobile money instead of cash. Your mobile money account shows K2,100 in trader payments this month — a clear digital record of your turnover.",
    icon: "📱",
    choices: [
      {
        text: "Declare turnover matching your mobile money record",
        subtext: "Use the digital record as your basis",
        outcome: "good",
        consequenceTitle: "Clean and Verifiable",
        consequenceDesc:
          "Your declared turnover matches your mobile money statement exactly. If ZRA ever cross-checks digital payment records, there's nothing to flag.",
        scoreChange: 20,
        moneyChange: -105,
      },
      {
        text: "Ask customers to pay cash instead going forward",
        subtext: "Reduce the digital trail",
        outcome: "neutral",
        consequenceTitle: "Inconvenient Workaround",
        consequenceDesc:
          "Some customers find cash-only inconvenient and buy less or go to vendors who accept mobile money. You reduce your digital footprint but also reduce your sales.",
        scoreChange: -10,
        moneyChange: -150,
      },
      {
        text: "Move the mobile money balance to a relative's account",
        subtext: "Obscure the income trail",
        outcome: "bad",
        consequenceTitle: "Traceable Anyway",
        consequenceDesc:
          "Mobile money transfers between accounts are still logged. Moving funds around doesn't erase the record, it just adds another transaction that looks suspicious if reviewed.",
        scoreChange: -25,
        moneyChange: -50,
      },
    ],
  },
  {
    id: "market_s7",
    title: "A Customer Wants a Receipt",
    situation:
      "A customer buying K300 worth of goods for her shop asks for a receipt so she can record the business expense. You don't usually write receipts.",
    icon: "🧾",
    choices: [
      {
        text: "Write a proper receipt with date and amount",
        subtext: "Start keeping duplicate records",
        outcome: "good",
        consequenceTitle: "Professional Habit Started",
        consequenceDesc:
          "The customer is impressed and becomes a regular bulk buyer. Keeping receipt copies also means you now have your own running record of sales, useful at tax time.",
        scoreChange: 15,
        moneyChange: 300,
      },
      {
        text: "Write a receipt but underprice it",
        subtext: "Show a lower amount than paid",
        outcome: "neutral",
        consequenceTitle: "Mismatched Records",
        consequenceDesc:
          "The customer now has a receipt that doesn't match what she actually paid. If she's ever audited and the figures don't reconcile, your name comes up as the supplier.",
        scoreChange: -10,
        moneyChange: 300,
      },
      {
        text: "Tell her you don't do receipts",
        subtext: "Turn down the request",
        outcome: "bad",
        consequenceTitle: "Lost Bulk Customer",
        consequenceDesc:
          "She needs proper documentation for her own business and takes her regular bulk orders to a vendor who can provide receipts. That's a steady customer gone.",
        scoreChange: -5,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "market_s8",
    title: "Stock Theft Overnight",
    situation:
      "You arrive at your stall to find K450 worth of stock missing — someone broke the lock overnight. The market security office asks you to file a report for the record.",
    icon: "🔓",
    choices: [
      {
        text: "File the official report with security",
        subtext: "Get it documented",
        outcome: "good",
        consequenceTitle: "Loss Documented",
        consequenceDesc:
          "Filing the report creates an official record of the loss, useful for adjusting your income records honestly and for any future insurance or association compensation claims.",
        scoreChange: 10,
        moneyChange: -450,
      },
      {
        text: "Mention it informally to a few traders only",
        subtext: "Skip the official report",
        outcome: "neutral",
        consequenceTitle: "No Paper Trail",
        consequenceDesc:
          "Word travels but there's no official record. If a pattern of theft develops in your row, your case adds to community knowledge but nothing council can act on formally.",
        scoreChange: -5,
        moneyChange: -450,
      },
      {
        text: "Quietly absorb it and inflate today's sales prices to cover the loss",
        subtext: "Recover the loss off the books",
        outcome: "bad",
        consequenceTitle: "Distorted Books",
        consequenceDesc:
          "Inflating prices to recoup an undocumented loss also inflates your declared turnover in a way that doesn't reflect what actually happened — confusing for you and risky if ever reviewed.",
        scoreChange: -10,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "market_s9",
    title: "Council Audit of Market Stalls",
    situation:
      "Lusaka City Council announces a stall verification exercise, checking levy payment history against trader registration. Your levy payments have been inconsistent this quarter.",
    icon: "📋",
    choices: [
      {
        text: "Settle any outstanding levy balance before the audit",
        subtext: "Pay arrears upfront",
        outcome: "good",
        consequenceTitle: "Clean Slate",
        consequenceDesc:
          "Clearing your arrears before the verification means your stall passes without issue. Council staff note your stall as fully compliant for the new registration cycle.",
        scoreChange: 20,
        moneyChange: -90,
      },
      {
        text: "Pay only what you're directly asked about",
        subtext: "Minimal disclosure",
        outcome: "neutral",
        consequenceTitle: "Partial Compliance",
        consequenceDesc:
          "You settle the flagged days but the underlying gaps in your payment pattern remain on record, which could come up again at the next verification round.",
        scoreChange: -5,
        moneyChange: -45,
      },
      {
        text: "Avoid your stall on the audit day",
        subtext: "Skip the verification entirely",
        outcome: "bad",
        consequenceTitle: "Stall Suspended",
        consequenceDesc:
          "Stalls not present during verification are marked as unverified and temporarily suspended pending review. You lose trading days while sorting it out.",
        scoreChange: -25,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "market_s10",
    title: "Expanding to a Second Stall",
    situation:
      "Business is good enough that you're considering renting a second stall space for K400/month to sell a wider range of goods. This would roughly double your turnover.",
    icon: "🏪",
    choices: [
      {
        text: "Expand and register the new turnover level properly",
        subtext: "Update your tax registration to reflect growth",
        outcome: "good",
        consequenceTitle: "Growing the Right Way",
        consequenceDesc:
          "Updating your registration as your business grows keeps you within Turnover Tax compliance and avoids any surprise gap between your declared and actual income.",
        scoreChange: 20,
        moneyChange: -400,
      },
      {
        text: "Expand but keep the second stall under a relative's name",
        subtext: "Split the business on paper",
        outcome: "neutral",
        consequenceTitle: "Complicated Arrangement",
        consequenceDesc:
          "Splitting one business across two names creates confusing records for both of you. It might reduce scrutiny short-term, but unwinding it later is messy.",
        scoreChange: -10,
        moneyChange: -400,
      },
      {
        text: "Expand without informing council or updating any records",
        subtext: "Just start trading from both stalls",
        outcome: "bad",
        consequenceTitle: "Unregistered Growth",
        consequenceDesc:
          "An unregistered second stall is an easy target during any council sweep. Your turnover has effectively doubled but your paper trail hasn't moved at all.",
        scoreChange: -20,
        moneyChange: -400,
      },
    ],
  },
  {
    id: "market_s11",
    title: "Rainy Season Damage",
    situation:
      "Heavy rain floods part of the market and damages K350 worth of your stock stored near the entrance. Other traders are filing damage claims with the market committee.",
    icon: "🌧️",
    choices: [
      {
        text: "File a damage claim with proper documentation",
        subtext: "Photos and a written description",
        outcome: "good",
        consequenceTitle: "Claim Recognized",
        consequenceDesc:
          "A documented claim gives you a real shot at compensation from the committee's emergency fund, and creates an honest record of the loss for your own books.",
        scoreChange: 15,
        moneyChange: -175,
      },
      {
        text: "Mention the damage but don't file formally",
        subtext: "Verbal report only",
        outcome: "neutral",
        consequenceTitle: "Unlikely to Be Compensated",
        consequenceDesc:
          "Without a formal claim, the committee has no record to act on. You absorb the full loss with nothing to show for the damage afterward.",
        scoreChange: -5,
        moneyChange: -350,
      },
      {
        text: "Inflate the claimed loss to K700",
        subtext: "Round up significantly",
        outcome: "bad",
        consequenceTitle: "Claim Rejected",
        consequenceDesc:
          "The committee cross-checks claims against typical stock levels. Your inflated figure gets flagged and the whole claim is denied, leaving you with nothing.",
        scoreChange: -20,
        moneyChange: -350,
      },
    ],
  },
  {
    id: "market_s12",
    title: "Joining a Chilimba Savings Group",
    situation:
      "A group of fellow traders invite you to join their chilimba — a rotating savings scheme where everyone contributes K200 monthly and takes turns receiving the full pot.",
    icon: "💵",
    choices: [
      {
        text: "Join and contribute consistently",
        subtext: "Build savings discipline",
        outcome: "good",
        consequenceTitle: "Capital for Growth",
        consequenceDesc:
          "When your turn comes, the lump sum lets you restock in bulk at a discount. Chilimba groups also build trust networks that help when you need short-notice credit.",
        scoreChange: 15,
        moneyChange: -200,
      },
      {
        text: "Join but skip contributions when cash is tight",
        subtext: "Inconsistent participation",
        outcome: "neutral",
        consequenceTitle: "Trust Eroding",
        consequenceDesc:
          "Missing contributions means you fall behind in the rotation order. The group still includes you, but you're now seen as a less reliable member.",
        scoreChange: -5,
        moneyChange: -100,
      },
      {
        text: "Take your turn's payout, then quietly stop attending",
        subtext: "Exit after receiving",
        outcome: "bad",
        consequenceTitle: "Reputation Damaged",
        consequenceDesc:
          "Word spreads fast in the market. No chilimba group will take you in again, and other traders become wary of group dealings with you generally.",
        scoreChange: -25,
        moneyChange: 600,
      },
    ],
  },
  {
    id: "market_s13",
    title: "Christmas Season Rush",
    situation:
      "December brings a surge in shoppers. You're on track to earn K6,500 this month alone — nearly double your usual takings.",
    icon: "🎄",
    choices: [
      {
        text: "Declare the full seasonal turnover honestly",
        subtext: "Pay tax on the actual spike",
        outcome: "good",
        consequenceTitle: "Honest Peak Season",
        consequenceDesc:
          "Declaring your real seasonal earnings keeps your annual record consistent and avoids a suspicious dip-then-spike pattern that draws attention during reviews.",
        scoreChange: 20,
        moneyChange: -325,
      },
      {
        text: "Average it out across a few months on paper",
        subtext: "Smooth the spike into other months",
        outcome: "neutral",
        consequenceTitle: "Smoothed but Inaccurate",
        consequenceDesc:
          "Spreading the income changes nothing about what you actually owe, but does create records that don't match your actual cash flow if anyone looks closely.",
        scoreChange: -10,
        moneyChange: -100,
      },
      {
        text: "Don't declare the seasonal spike at all",
        subtext: "Treat it as a normal month",
        outcome: "bad",
        consequenceTitle: "Seasonal Pattern Noticed",
        consequenceDesc:
          "December spikes are well known and watched closely. A flat declared income through an obvious boom season is one of the easier discrepancies to spot.",
        scoreChange: -30,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s14",
    title: "A Competitor Undercuts You",
    situation:
      "A new trader two stalls down is selling identical goods 20% cheaper, pulling away some of your regular customers. You suspect they're not paying any levies at all.",
    icon: "⚖️",
    choices: [
      {
        text: "Report the unregistered competitor to the market committee",
        subtext: "Through proper channels",
        outcome: "good",
        consequenceTitle: "Fair Playing Field Restored",
        consequenceDesc:
          "The committee investigates and the unregistered trader is required to register or stop trading. Fair competition between registered traders is protected.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Match their lower prices to compete",
        subtext: "Cut your own margins",
        outcome: "neutral",
        consequenceTitle: "Squeezed Margins",
        consequenceDesc:
          "You keep your customers but earn less per sale while still paying your levies and tax in full. It's a sustainable response, just not a comfortable one.",
        scoreChange: 0,
        moneyChange: -150,
      },
      {
        text: "Stop paying your own levy too, to stay competitive",
        subtext: "Match their non-compliance",
        outcome: "bad",
        consequenceTitle: "Race to the Bottom",
        consequenceDesc:
          "Two unregistered stalls in the same row draws council attention fast. You're both flagged together in the next compliance sweep.",
        scoreChange: -25,
        moneyChange: -15,
      },
    ],
  },
  {
    id: "market_s15",
    title: "Council Drainage Improvement Levy",
    situation:
      "Council announces a one-time K100 infrastructure levy to fix the market's drainage system, which floods every rainy season and damages everyone's stock.",
    icon: "🚧",
    choices: [
      {
        text: "Pay the infrastructure levy",
        subtext: "Contribute to the fix",
        outcome: "good",
        consequenceTitle: "Long-Term Investment",
        consequenceDesc:
          "Better drainage means fewer flood-damaged goods every rainy season going forward. The K100 now saves you far more in future stock losses.",
        scoreChange: 15,
        moneyChange: -100,
      },
      {
        text: "Pay half now, promise the rest later",
        subtext: "Partial payment",
        outcome: "neutral",
        consequenceTitle: "Delayed Contribution",
        consequenceDesc:
          "Council notes the partial payment. The drainage work proceeds either way, but your name is on a list of traders with outstanding balances.",
        scoreChange: -5,
        moneyChange: -50,
      },
      {
        text: "Refuse, arguing it's council's job to fund without trader levies",
        subtext: "Decline to contribute",
        outcome: "bad",
        consequenceTitle: "Excluded From Improvement Zone",
        consequenceDesc:
          "Non-contributing stalls are placed lowest priority for the new drainage work. Your section floods again next season while paying stalls stay dry.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s16",
    title: "Apprentice Wants to Learn the Trade",
    situation:
      "A young relative asks to work at your stall as an informal apprentice, helping with sales in exchange for learning the business and a small daily allowance.",
    icon: "👥",
    choices: [
      {
        text: "Pay a fair daily allowance and keep simple records",
        subtext: "Track what you pay them",
        outcome: "good",
        consequenceTitle: "Win-Win Arrangement",
        consequenceDesc:
          "Extra help increases your sales capacity, and keeping records of the allowance means you understand your true costs when calculating your turnover and profit.",
        scoreChange: 15,
        moneyChange: -150,
      },
      {
        text: "Let them work for free in exchange for 'experience'",
        subtext: "No payment",
        outcome: "neutral",
        consequenceTitle: "Uneven Deal",
        consequenceDesc:
          "You get free labor but the relative eventually feels undervalued and stops showing up reliably. The arrangement quietly falls apart within weeks.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Have them handle cash sales separately and keep that income unrecorded",
        subtext: "Run a side till off the books",
        outcome: "bad",
        consequenceTitle: "Hidden Income Stream",
        consequenceDesc:
          "An unrecorded second till means part of your actual turnover never appears anywhere. If your stock purchases don't match your declared sales, this gap stands out.",
        scoreChange: -20,
        moneyChange: 250,
      },
    ],
  },
  {
    id: "market_s17",
    title: "Bulk Order From a Lodge",
    situation:
      "A local lodge owner wants to place a standing weekly order of K800 worth of fresh produce, but wants to pay via bank transfer to their business account, not cash.",
    icon: "🏨",
    choices: [
      {
        text: "Accept the bank transfer arrangement",
        subtext: "Formal payment method",
        outcome: "good",
        consequenceTitle: "Steady Formal Income",
        consequenceDesc:
          "A reliable weekly bank-recorded order gives you predictable income and a clean paper trail. This kind of contract also strengthens any future loan application.",
        scoreChange: 20,
        moneyChange: 800,
      },
      {
        text: "Insist on cash only, ask them to come collect personally",
        subtext: "Avoid bank records",
        outcome: "neutral",
        consequenceTitle: "Lodge Goes Elsewhere",
        consequenceDesc:
          "The lodge manager finds the cash-only condition inconvenient for their own accounting and instead sources from a supplier who accepts transfers.",
        scoreChange: -10,
        moneyChange: 0,
      },
      {
        text: "Accept the transfer but have it sent to someone else's account",
        subtext: "Keep it off your own records",
        outcome: "bad",
        consequenceTitle: "Income Without Protection",
        consequenceDesc:
          "Routing business income through someone else's account means you have no claim to it if there's ever a dispute, and it still shows up as unexplained deposits for them.",
        scoreChange: -20,
        moneyChange: 700,
      },
    ],
  },
  {
    id: "market_s18",
    title: "Health Inspector Visit",
    situation:
      "A council health inspector checks your stall for food handling standards. Your storage area needs a K120 upgrade to fully meet the cleanliness requirements.",
    icon: "🧼",
    choices: [
      {
        text: "Make the upgrade right away",
        subtext: "Meet the standard fully",
        outcome: "good",
        consequenceTitle: "Certified Clean",
        consequenceDesc:
          "Your stall receives a passing health certificate, displayed for customers to see. Health-conscious shoppers increasingly choose certified stalls over uncertified ones.",
        scoreChange: 15,
        moneyChange: -120,
      },
      {
        text: "Make a minimal temporary fix",
        subtext: "Just enough to pass today",
        outcome: "neutral",
        consequenceTitle: "Conditional Pass",
        consequenceDesc:
          "You scrape by with a conditional pass, but the inspector notes a follow-up visit. The underlying issue isn't really solved.",
        scoreChange: -5,
        moneyChange: -30,
      },
      {
        text: "Offer the inspector a personal 'thank you' to skip the writeup",
        subtext: "Informal payment to avoid the report",
        outcome: "bad",
        consequenceTitle: "Bribery Risk",
        consequenceDesc:
          "Bribing an inspector is a serious offense for both parties if discovered, and council has been cracking down on this exact pattern in markets recently.",
        scoreChange: -30,
        moneyChange: -50,
      },
    ],
  },
  {
    id: "market_s19",
    title: "Currency Float Shortage",
    situation:
      "It's early morning and you don't have enough small notes to give change. A customer wants to buy K23 worth of goods with a K100 note.",
    icon: "💴",
    choices: [
      {
        text: "Go borrow change from a neighboring stall",
        subtext: "Quick fix, maintain the sale",
        outcome: "good",
        consequenceTitle: "Sale Completed Smoothly",
        consequenceDesc:
          "A quick favor from a neighboring trader keeps the customer happy and the sale goes through cleanly. Market traders often help each other this way.",
        scoreChange: 5,
        moneyChange: 23,
      },
      {
        text: "Round the price down to K20 to avoid needing change",
        subtext: "Take a small loss for convenience",
        outcome: "neutral",
        consequenceTitle: "Small Sacrifice",
        consequenceDesc:
          "You lose a little margin but the transaction is simple and fast. Not ideal as a regular habit, but fine as an occasional fix.",
        scoreChange: 0,
        moneyChange: 20,
      },
      {
        text: "Turn the customer away",
        subtext: "Skip the sale entirely",
        outcome: "bad",
        consequenceTitle: "Lost Sale",
        consequenceDesc:
          "The customer simply buys from the next stall instead. A small change problem costs you a sale that a little flexibility could have saved.",
        scoreChange: 0,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s20",
    title: "Fellow Trader Asks for a Loan",
    situation:
      "A trader you know well had a bad week and asks to borrow K200 from you, promising to repay within a week once their stock sells.",
    icon: "🙏",
    choices: [
      {
        text: "Lend it and write a simple IOU note",
        subtext: "Informal but documented",
        outcome: "good",
        consequenceTitle: "Trust Reinforced",
        consequenceDesc:
          "A simple written note avoids any confusion later and the loan is repaid on time. Helping fellow traders this way builds a strong support network in the market.",
        scoreChange: 10,
        moneyChange: -200,
      },
      {
        text: "Lend it on a verbal promise only",
        subtext: "No documentation",
        outcome: "neutral",
        consequenceTitle: "Repaid, But Tense",
        consequenceDesc:
          "The loan is eventually repaid, but there were a few awkward conversations about the exact amount along the way since neither of you wrote anything down.",
        scoreChange: 0,
        moneyChange: -200,
      },
      {
        text: "Refuse and suggest they ask someone else",
        subtext: "Decline to lend",
        outcome: "bad",
        consequenceTitle: "Strained Relationship",
        consequenceDesc:
          "The trader feels let down during a hard week and the relationship cools. Market trading relies heavily on mutual support between stallholders.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s21",
    title: "Supplier Offers Underpriced Stock",
    situation:
      "A wholesaler offers you a large batch of goods at an unusually low price, hinting it 'fell off a delivery truck' and asking for cash only, no invoice.",
    icon: "🚚",
    choices: [
      {
        text: "Decline and buy from your usual registered supplier",
        subtext: "Stick to legitimate sourcing",
        outcome: "good",
        consequenceTitle: "Reputation Protected",
        consequenceDesc:
          "Sourcing only from registered suppliers protects you from being linked to stolen goods, which could shut your stall down entirely if traced back to you.",
        scoreChange: 15,
        moneyChange: -600,
      },
      {
        text: "Buy a small amount to test it, ask no questions",
        subtext: "Limited involvement",
        outcome: "neutral",
        consequenceTitle: "Quiet Risk Taken",
        consequenceDesc:
          "Nothing goes wrong this time, but you've now knowingly handled goods of questionable origin. That's a risk with no real reward attached.",
        scoreChange: -15,
        moneyChange: -200,
      },
      {
        text: "Buy the full batch at the discount price",
        subtext: "Maximize the savings",
        outcome: "bad",
        consequenceTitle: "Linked to Stolen Goods",
        consequenceDesc:
          "Police investigating the theft trace some stock back to market stalls, including yours. Even unknowingly receiving stolen goods can mean serious legal trouble.",
        scoreChange: -35,
        moneyChange: -400,
      },
    ],
  },
  {
    id: "market_s22",
    title: "Year-End Stock Count",
    situation:
      "It's the end of the charge year and the market association suggests all traders do a stock count to know exactly what's been sold versus what remains, useful for any tax filing.",
    icon: "📊",
    choices: [
      {
        text: "Do a full stock count and keep the figures",
        subtext: "Know your real numbers",
        outcome: "good",
        consequenceTitle: "Clear Picture",
        consequenceDesc:
          "Knowing your exact turnover for the year makes any tax filing straightforward and gives you real insight into which goods are actually profitable.",
        scoreChange: 20,
        moneyChange: 0,
      },
      {
        text: "Do a rough estimate instead of a full count",
        subtext: "Quick guess",
        outcome: "neutral",
        consequenceTitle: "Approximate Picture",
        consequenceDesc:
          "A rough estimate is better than nothing, but if it's significantly off from your actual turnover, any filing based on it could be inaccurate.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Skip it entirely, you'll figure it out if asked",
        subtext: "No count at all",
        outcome: "bad",
        consequenceTitle: "Flying Blind",
        consequenceDesc:
          "Without any record, if ZRA or council ever asks for your numbers, you have nothing to show and no way to verify your own claims either way.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s23",
    title: "New Trader Asks for Mentorship",
    situation:
      "A first-time trader just got a stall near yours and is clearly unfamiliar with council levies, registration, or how compliance actually works.",
    icon: "🌱",
    choices: [
      {
        text: "Explain the levy system and how to register with ZRA",
        subtext: "Share what you know",
        outcome: "good",
        consequenceTitle: "Community Strengthened",
        consequenceDesc:
          "The new trader avoids early mistakes thanks to your guidance, and word spreads that you're someone other traders can trust and learn from.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Give vague, partial advice",
        subtext: "Don't go into detail",
        outcome: "neutral",
        consequenceTitle: "Missed Opportunity",
        consequenceDesc:
          "The new trader gets some help but still ends up confused about a few key rules, eventually learning the hard way through a minor council issue.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Tell them just to avoid council attention altogether",
        subtext: "Encourage non-compliance",
        outcome: "bad",
        consequenceTitle: "Spreading Bad Habits",
        consequenceDesc:
          "The new trader follows your advice and quickly racks up unpaid levies, eventually getting flagged — and remembering exactly who told them to dodge the system.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s24",
    title: "Bank Loan Application",
    situation:
      "A local bank is offering small business loans to market traders to help with stock financing, but requires six months of income records and a TPIN to qualify.",
    icon: "🏦",
    choices: [
      {
        text: "Apply using your honest, registered income records",
        subtext: "Straightforward application",
        outcome: "good",
        consequenceTitle: "Loan Approved",
        consequenceDesc:
          "Your consistent, honest records make for an easy approval. The loan lets you buy stock in bulk at wholesale discount rates going forward.",
        scoreChange: 20,
        moneyChange: 1000,
      },
      {
        text: "Apply but inflate your income figures to qualify for more",
        subtext: "Exaggerate the numbers",
        outcome: "neutral",
        consequenceTitle: "Approved, But Overextended",
        consequenceDesc:
          "You get a larger loan than your real income can comfortably support, and now face a repayment schedule that strains your monthly cash flow.",
        scoreChange: -10,
        moneyChange: 1500,
      },
      {
        text: "Don't apply, you've never kept records anyway",
        subtext: "Skip the opportunity",
        outcome: "bad",
        consequenceTitle: "Locked Out of Financing",
        consequenceDesc:
          "Without any records to show, you're not eligible for formal financing at all. You stay dependent on slower, smaller informal savings methods.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s25",
    title: "End of Year ZRA Outreach",
    situation:
      "ZRA officers set up a temporary desk at the market entrance offering free TPIN registration and answering trader questions about Turnover Tax for an entire week.",
    icon: "🏛️",
    choices: [
      {
        text: "Visit the desk and get your status fully sorted",
        subtext: "Use the free help available",
        outcome: "good",
        consequenceTitle: "Fully Compliant",
        consequenceDesc:
          "Getting direct, free guidance clears up every question you had about your obligations. You leave with a clear understanding of exactly what you owe and when.",
        scoreChange: 25,
        moneyChange: 0,
      },
      {
        text: "Send a friend to ask questions on your behalf",
        subtext: "Get information secondhand",
        outcome: "neutral",
        consequenceTitle: "Incomplete Picture",
        consequenceDesc:
          "Secondhand information misses some of the details specific to your situation. You're better informed than before, but still have gaps.",
        scoreChange: 5,
        moneyChange: 0,
      },
      {
        text: "Avoid the desk entirely, worried it means trouble",
        subtext: "Stay away from ZRA officers",
        outcome: "bad",
        consequenceTitle: "Opportunity Missed",
        consequenceDesc:
          "Free registration help doesn't come around often. Avoiding ZRA out of fear means staying in the same uncertain position you were already in.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s26",
    title: "Scale Calibration Dispute",
    situation:
      "A customer accuses your weighing scale of being inaccurate after buying produce. A council weights-and-measures officer is doing spot checks in your section today.",
    icon: "⚖️",
    choices: [
      {
        text: "Ask the officer to check and calibrate your scale",
        subtext: "Resolve it transparently",
        outcome: "good",
        consequenceTitle: "Trust Confirmed",
        consequenceDesc:
          "Your scale checks out accurate and the officer issues a calibration certificate. The customer apologizes and becomes a regular, having seen you handle it openly.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Quietly adjust the scale yourself before the officer arrives",
        subtext: "Self-correct without official check",
        outcome: "neutral",
        consequenceTitle: "Unverified Fix",
        consequenceDesc:
          "You may have fixed it, or you may not have. Without an official check, neither you nor your customers have any real confirmation the scale is now accurate.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Hide the scale and claim you don't have one today",
        subtext: "Avoid the inspection",
        outcome: "bad",
        consequenceTitle: "Suspicion Confirmed",
        consequenceDesc:
          "Avoiding a routine check looks far more suspicious than just having it done. Your stall gets flagged for a mandatory follow-up inspection next week.",
        scoreChange: -25,
        moneyChange: -80,
      },
    ],
  },
  {
    id: "market_s27",
    title: "Transport Costs Rise",
    situation:
      "Fuel prices push your supplier transport costs up by K150 per delivery. You need to decide how to handle this added cost on your next batch of stock.",
    icon: "⛽",
    choices: [
      {
        text: "Adjust your prices slightly and explain why to customers",
        subtext: "Transparent small increase",
        outcome: "good",
        consequenceTitle: "Customers Understand",
        consequenceDesc:
          "Most regular customers accept a small, explained increase, especially since fuel prices are widely known to have risen. Your margins stay healthy.",
        scoreChange: 10,
        moneyChange: -150,
      },
      {
        text: "Absorb the cost yourself for now",
        subtext: "Keep prices the same",
        outcome: "neutral",
        consequenceTitle: "Margin Squeeze",
        consequenceDesc:
          "Customers stay happy with unchanged prices, but your actual profit per item drops. This works short-term but isn't sustainable if costs keep rising.",
        scoreChange: 0,
        moneyChange: -150,
      },
      {
        text: "Switch to a cheaper, less reliable transporter without telling regular customers about any quality change",
        subtext: "Cut costs quietly",
        outcome: "bad",
        consequenceTitle: "Quality Complaints",
        consequenceDesc:
          "The cheaper transporter damages some stock in transit. Customers notice the drop in freshness and a few stop buying from you regularly.",
        scoreChange: -10,
        moneyChange: -50,
      },
    ],
  },
  {
    id: "market_s28",
    title: "Family Member Wants to Take Over",
    situation:
      "Your adult child wants to start gradually taking over the stall, but hasn't yet learned the levy schedule, supplier contacts, or how your simple bookkeeping works.",
    icon: "👨‍👩‍👧",
    choices: [
      {
        text: "Spend time properly handing over records and contacts",
        subtext: "Full structured handover",
        outcome: "good",
        consequenceTitle: "Smooth Transition Underway",
        consequenceDesc:
          "Your child learns the real operational side of the business, not just the selling. The stall's compliance history and supplier relationships carry forward intact.",
        scoreChange: 20,
        moneyChange: 0,
      },
      {
        text: "Let them handle sales only, you keep all the records yourself",
        subtext: "Partial involvement",
        outcome: "neutral",
        consequenceTitle: "Limited Preparation",
        consequenceDesc:
          "They become good at sales but if you're ever unavailable, they wouldn't know how to handle a levy payment or basic compliance question.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Hand over the stall immediately without any training",
        subtext: "Quick, informal handover",
        outcome: "bad",
        consequenceTitle: "Knowledge Gap",
        consequenceDesc:
          "Within weeks, levy payments are missed and supplier relationships sour from miscommunication. Years of built-up goodwill start unraveling quickly.",
        scoreChange: -20,
        moneyChange: -100,
      },
    ],
  },
  {
    id: "market_s29",
    title: "Dry Season Demand Drop",
    situation:
      "The dry season has cut foot traffic significantly. Your takings have dropped to roughly K900 this month, well below your turnover tax registration level.",
    icon: "☀️",
    choices: [
      {
        text: "File an accurate low-turnover return for the month",
        subtext: "Reflect the real dip",
        outcome: "good",
        consequenceTitle: "Honest Reporting",
        consequenceDesc:
          "An accurate low-income month is completely normal and expected. Honest reporting through both good and slow months builds a credible, consistent record.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Skip filing this month since turnover was low anyway",
        subtext: "Assume it doesn't matter",
        outcome: "neutral",
        consequenceTitle: "Missed Filing",
        consequenceDesc:
          "Even low-turnover months typically still need a nil or low return filed. Skipping creates a gap in your filing history that looks inconsistent later.",
        scoreChange: -10,
        moneyChange: 0,
      },
      {
        text: "Report last month's higher figure instead, assuming this slow month doesn't count",
        subtext: "Substitute a different number",
        outcome: "bad",
        consequenceTitle: "Inaccurate Record",
        consequenceDesc:
          "Reporting a figure that doesn't match the actual month creates a record that contradicts your own mobile money and supplier purchase history.",
        scoreChange: -20,
        moneyChange: -45,
      },
    ],
  },
  {
    id: "market_s30",
    title: "Donation Request From a Local School",
    situation:
      "A nearby community school asks market traders to contribute toward new classroom supplies. They're asking for whatever traders can afford, with a suggested K30.",
    icon: "🏫",
    choices: [
      {
        text: "Contribute the suggested amount",
        subtext: "Support the local school",
        outcome: "good",
        consequenceTitle: "Community Goodwill",
        consequenceDesc:
          "Your contribution is noted by the school and local community leaders. Traders who support local institutions often see stronger community loyalty as customers.",
        scoreChange: 10,
        moneyChange: -30,
      },
      {
        text: "Contribute goods instead of cash",
        subtext: "In-kind donation",
        outcome: "neutral",
        consequenceTitle: "Appreciated Alternative",
        consequenceDesc:
          "The school appreciates the produce donation for their feeding program, though they really needed cash for the specific classroom supplies they mentioned.",
        scoreChange: 5,
        moneyChange: -20,
      },
      {
        text: "Decline, saying business has been too slow",
        subtext: "Skip the contribution",
        outcome: "bad",
        consequenceTitle: "Opportunity Passed",
        consequenceDesc:
          "No real penalty, but a few other traders who contributed are mentioned positively by name at a community meeting. Small things add up to reputation.",
        scoreChange: -5,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s31",
    title: "Power Outage Spoils Cold Storage",
    situation:
      "A long power outage at the market means your small fridge unit, used to keep perishables fresh, has been off for 18 hours. K280 worth of stock is at risk.",
    icon: "🔌",
    choices: [
      {
        text: "Sell the at-risk stock immediately at a discount",
        subtext: "Move it before it fully spoils",
        outcome: "good",
        consequenceTitle: "Loss Minimized",
        consequenceDesc:
          "Quick action recovers most of the stock's value before it goes completely bad. You record the discounted sale honestly, keeping your books accurate.",
        scoreChange: 10,
        moneyChange: 150,
      },
      {
        text: "Wait and hope the power comes back soon",
        subtext: "Delay the decision",
        outcome: "neutral",
        consequenceTitle: "Costly Gamble",
        consequenceDesc:
          "Power returns a few hours later, but by then most of the stock has spoiled anyway. The wait-and-see approach cost you the chance to sell at a discount.",
        scoreChange: -5,
        moneyChange: -280,
      },
      {
        text: "Sell it anyway at full price without mentioning the outage",
        subtext: "Don't disclose the risk",
        outcome: "bad",
        consequenceTitle: "Customer Complaints",
        consequenceDesc:
          "Customers who bought the spoiled goods complain loudly to other traders. Your reputation for quality takes a hit that lasts longer than today's sales.",
        scoreChange: -20,
        moneyChange: 200,
      },
    ],
  },
  {
    id: "market_s32",
    title: "Trader Association Elections",
    situation:
      "The market traders' association is holding elections for new leadership. A candidate openly campaigns on a platform of 'helping traders avoid council levies entirely.'",
    icon: "🗳️",
    choices: [
      {
        text: "Vote for a candidate focused on fair, transparent dealings with council",
        subtext: "Support sustainable leadership",
        outcome: "good",
        consequenceTitle: "Stable Leadership Elected",
        consequenceDesc:
          "The market gets leadership that negotiates fairly with council on shared issues like drainage and security, building a long-term working relationship.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Don't vote at all",
        subtext: "Stay out of it",
        outcome: "neutral",
        consequenceTitle: "Voice Not Heard",
        consequenceDesc:
          "The election proceeds without your input. Whoever wins will represent decisions that affect your stall too, whether or not you had a say.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Vote for the candidate promising to help dodge levies",
        subtext: "Short-term appeal",
        outcome: "bad",
        consequenceTitle: "Risky Leadership",
        consequenceDesc:
          "That candidate wins but their approach triggers a hostile relationship with council. The whole market suffers stricter enforcement sweeps as a result.",
        scoreChange: -20,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s33",
    title: "Bulk Discount From Supplier",
    situation:
      "Your wholesaler offers a 15% discount if you commit to buying K2,000 worth of stock upfront instead of your usual smaller weekly orders.",
    icon: "📦",
    choices: [
      {
        text: "Calculate your typical sales pace before committing",
        subtext: "Check you can realistically sell it before it spoils",
        outcome: "good",
        consequenceTitle: "Smart Bulk Buy",
        consequenceDesc:
          "You confirm your stall can move that volume within freshness limits. The discount boosts your margin significantly on goods you'd buy anyway.",
        scoreChange: 15,
        moneyChange: -1700,
      },
      {
        text: "Commit to the bulk order without checking your sales pace",
        subtext: "Take the discount on faith",
        outcome: "neutral",
        consequenceTitle: "Tight Squeeze",
        consequenceDesc:
          "You manage to sell most of it but had to discount some items near the end to clear stock before spoilage, eating into the savings you expected.",
        scoreChange: -5,
        moneyChange: -1900,
      },
      {
        text: "Take the bulk discount and resell half informally to other stalls without any markup tracking",
        subtext: "Become an informal sub-wholesaler",
        outcome: "bad",
        consequenceTitle: "Untracked Side Business",
        consequenceDesc:
          "Reselling to other stalls without any record keeping means this new income stream is completely invisible in your books, growing your compliance gap.",
        scoreChange: -15,
        moneyChange: -1500,
      },
    ],
  },
  {
    id: "market_s34",
    title: "Council Wants to Relocate Your Section",
    situation:
      "Council announces plans to relocate your section of the market to make way for a new building. Affected traders who are fully registered get priority for new stall allocation.",
    icon: "🏗️",
    choices: [
      {
        text: "Attend the consultation meeting with your registration documents ready",
        subtext: "Engage properly with the process",
        outcome: "good",
        consequenceTitle: "Priority Stall Secured",
        consequenceDesc:
          "Your clean registration history puts you near the front of the line for the new allocation. You get to choose a good spot in the relocated section.",
        scoreChange: 20,
        moneyChange: -50,
      },
      {
        text: "Wait to see what other traders do first",
        subtext: "Passive approach",
        outcome: "neutral",
        consequenceTitle: "Left With Leftover Options",
        consequenceDesc:
          "By the time you engage with the process, the better stall positions are already allocated to traders who showed up early and prepared.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Refuse to move and continue trading in the old spot regardless",
        subtext: "Resist the relocation",
        outcome: "bad",
        consequenceTitle: "Forced Removal",
        consequenceDesc:
          "Council eventually removes non-compliant stalls from the construction zone by force, with no input into where you end up afterward.",
        scoreChange: -25,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "market_s35",
    title: "Customer Disputes a Sale",
    situation:
      "A customer claims they paid K150 for goods but you recall only receiving K100. With no receipt on either side, it's becoming a heated disagreement at your stall.",
    icon: "🗣️",
    choices: [
      {
        text: "Stay calm, check your cash box total, and resolve it based on the numbers",
        subtext: "De-escalate with facts",
        outcome: "good",
        consequenceTitle: "Calmly Resolved",
        consequenceDesc:
          "Checking your actual cash total clears up the confusion without drama. Customers nearby notice how professionally you handled a tense moment.",
        scoreChange: 10,
        moneyChange: 0,
      },
      {
        text: "Just give them the difference to avoid the argument",
        subtext: "Pay to end the conflict",
        outcome: "neutral",
        consequenceTitle: "Conflict Avoided, Cost Absorbed",
        consequenceDesc:
          "The disagreement ends quickly, but you're out K50 regardless of who was actually right, and there's no record to learn from for next time.",
        scoreChange: 0,
        moneyChange: -50,
      },
      {
        text: "Raise your voice and insist they're lying",
        subtext: "Confront aggressively",
        outcome: "bad",
        consequenceTitle: "Scene at the Stall",
        consequenceDesc:
          "The argument draws a crowd and embarrasses both of you. Several onlookers decide to avoid your stall after witnessing the confrontation.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s36",
    title: "Opportunity to Supply a Supermarket",
    situation:
      "A small local supermarket chain wants a regular supplier for fresh produce and is interviewing market traders. They require a TPIN and basic business registration to sign a contract.",
    icon: "🛒",
    choices: [
      {
        text: "Get your registration fully in order and apply",
        subtext: "Meet their requirements properly",
        outcome: "good",
        consequenceTitle: "Supply Contract Won",
        consequenceDesc:
          "Your compliant paperwork makes you an easy choice. The steady supermarket contract becomes your most reliable income stream, supplementing your stall sales.",
        scoreChange: 25,
        moneyChange: 1200,
      },
      {
        text: "Apply using a relative's existing registered business instead of your own",
        subtext: "Borrow someone else's compliance status",
        outcome: "neutral",
        consequenceTitle: "Messy Arrangement",
        consequenceDesc:
          "You get the contract, but all the income and paperwork is technically tied to someone else's business, complicating who's really responsible for what.",
        scoreChange: -10,
        moneyChange: 800,
      },
      {
        text: "Don't apply since you've never registered for anything",
        subtext: "Skip the opportunity",
        outcome: "bad",
        consequenceTitle: "Contract Lost",
        consequenceDesc:
          "Another trader with proper registration wins the contract instead. This kind of steady, larger opportunity keeps passing by traders who stay informal.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s37",
    title: "Tax Agent Offers a 'Special Deal'",
    situation:
      "A self-styled tax agent approaches your stall offering to 'handle everything with ZRA' for K300, hinting he has personal contacts who can make your filings 'simpler.'",
    icon: "🕴️",
    choices: [
      {
        text: "Decline and verify his credentials with ZRA directly first",
        subtext: "Check before trusting",
        outcome: "good",
        consequenceTitle: "Scam Avoided",
        consequenceDesc:
          "ZRA confirms he's not a registered tax agent at all. You avoid losing K300 to someone who likely couldn't deliver on the vague promises made.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Pay him but ask for a written receipt of services",
        subtext: "Some caution, still proceed",
        outcome: "neutral",
        consequenceTitle: "Vague Outcome",
        consequenceDesc:
          "He provides a basic receipt but the 'special contacts' angle turns out to be empty talk. You essentially paid K300 for filing help you could've done yourself.",
        scoreChange: -10,
        moneyChange: -300,
      },
      {
        text: "Pay him in full and let him handle everything without question",
        subtext: "Trust completely",
        outcome: "bad",
        consequenceTitle: "Filing Never Happened",
        consequenceDesc:
          "He disappears after taking payment. Your filing was never actually submitted, and now you're dealing with both the missing money and an overdue filing.",
        scoreChange: -25,
        moneyChange: -300,
      },
    ],
  },
  {
    id: "market_s38",
    title: "Reflecting on a Full Year of Trading",
    situation:
      "A full charge year has passed since you started at your stall. Looking back at your records, it's time to file your annual reconciliation with ZRA.",
    icon: "📅",
    choices: [
      {
        text: "Compile all monthly records and file an accurate annual reconciliation",
        subtext: "Full honest review",
        outcome: "good",
        consequenceTitle: "Year Closed Cleanly",
        consequenceDesc:
          "A complete, honest annual picture means no surprises and a clean compliance history heading into the new charge year, with real growth to show for it.",
        scoreChange: 25,
        moneyChange: 0,
      },
      {
        text: "File based on partial records, estimating the gaps",
        subtext: "Best-effort reconciliation",
        outcome: "neutral",
        consequenceTitle: "Reasonable but Incomplete",
        consequenceDesc:
          "Filing something is better than nothing, but the estimated gaps mean your annual picture isn't fully accurate, something to fix with better records next year.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Skip the annual reconciliation entirely",
        subtext: "Assume monthly filings were enough",
        outcome: "bad",
        consequenceTitle: "Incomplete Compliance",
        consequenceDesc:
          "Missing the annual reconciliation leaves your tax record incomplete for the year, something that can complicate any future loan or contract applications.",
        scoreChange: -20,
        moneyChange: -200,
      },
    ],
  },
  {
    id: "market_s39",
    title: "Helping During a Community Crisis",
    situation:
      "Heavy floods hit a nearby compound, displacing several families. The market community organizes a collection of food and supplies for the affected households.",
    icon: "🆘",
    choices: [
      {
        text: "Contribute generously from your stock",
        subtext: "Help the affected families",
        outcome: "good",
        consequenceTitle: "Community Spirit Shown",
        consequenceDesc:
          "Your visible generosity during the crisis strengthens your standing in the market community. People remember who showed up when it mattered.",
        scoreChange: 15,
        moneyChange: -100,
      },
      {
        text: "Contribute a small token amount",
        subtext: "Minimal participation",
        outcome: "neutral",
        consequenceTitle: "Modest Gesture",
        consequenceDesc:
          "A small contribution is still appreciated, though it's noticeably less than what most other traders gave during the collection.",
        scoreChange: 0,
        moneyChange: -20,
      },
      {
        text: "Don't contribute, citing your own tight margins",
        subtext: "Opt out entirely",
        outcome: "bad",
        consequenceTitle: "Noted Absence",
        consequenceDesc:
          "Other traders quietly notice who didn't contribute during a moment the whole community rallied around. It affects how warmly you're treated afterward.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s40",
    title: "Considering Formal Business Registration",
    situation:
      "After a strong year of growth, you're considering registering your stall as a formal small business with PACRA, which would open doors to bigger contracts and bank financing.",
    icon: "📝",
    choices: [
      {
        text: "Register the business formally",
        subtext: "Take the next compliance step",
        outcome: "good",
        consequenceTitle: "Formal Business Established",
        consequenceDesc:
          "Formal registration opens access to government tenders, larger supplier contracts, and serious financing options that simply aren't available to informal traders.",
        scoreChange: 25,
        moneyChange: -250,
      },
      {
        text: "Look into it but decide to wait another year",
        subtext: "Delay the decision",
        outcome: "neutral",
        consequenceTitle: "Growth Paused",
        consequenceDesc:
          "Nothing goes wrong by waiting, but you also miss out on a year's worth of opportunities only available to formally registered businesses.",
        scoreChange: -5,
        moneyChange: 0,
      },
      {
        text: "Decide formal registration isn't worth the hassle",
        subtext: "Stay informal indefinitely",
        outcome: "bad",
        consequenceTitle: "Growth Ceiling Reached",
        consequenceDesc:
          "Your stall has effectively hit its growth ceiling. Without formal registration, the bigger contracts and financing options remain permanently out of reach.",
        scoreChange: -15,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s41",
    title: "Mentoring Younger Traders on Digital Payments",
    situation:
      "Several older traders in your row are hesitant to accept mobile money, worried it's 'too complicated' or that it makes their income too visible.",
    icon: "📲",
    choices: [
      {
        text: "Show them how mobile money actually works and its benefits",
        subtext: "Share practical knowledge",
        outcome: "good",
        consequenceTitle: "Modernizing the Market",
        consequenceDesc:
          "A few traders start accepting mobile money after your demonstration, increasing sales for the whole row and building a more transparent market culture overall.",
        scoreChange: 15,
        moneyChange: 0,
      },
      {
        text: "Mention it briefly but don't push the topic",
        subtext: "Light touch",
        outcome: "neutral",
        consequenceTitle: "Limited Impact",
        consequenceDesc:
          "A couple of traders consider it but nobody actually changes their habits without more hands-on encouragement and demonstration.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Agree with them that cash-only keeps things 'simpler'",
        subtext: "Reinforce their hesitation",
        outcome: "bad",
        consequenceTitle: "Missed Modernization",
        consequenceDesc:
          "The row stays cash-only, missing out on customers who increasingly prefer digital payments, and missing the cleaner record-keeping that comes with it.",
        scoreChange: -10,
        moneyChange: 0,
      },
    ],
  },
  {
    id: "market_s42",
    title: "Looking Back, Looking Forward",
    situation:
      "As the charge year closes, you reflect on your stall's journey — from levies and audits to chilimba groups and a possible formal registration. What defines how you'll keep trading?",
    icon: "🌅",
    choices: [
      {
        text: "Commit to staying fully compliant and keep building the business formally",
        subtext: "Continue the compliant path",
        outcome: "good",
        consequenceTitle: "A Trader to Watch",
        consequenceDesc:
          "Your consistent compliance and growth mindset put you in a strong position heading into the new charge year — trusted by customers, suppliers, and ZRA alike.",
        scoreChange: 25,
        moneyChange: 200,
      },
      {
        text: "Keep doing roughly what's worked, without major changes",
        subtext: "Steady as you go",
        outcome: "neutral",
        consequenceTitle: "Stable but Stagnant",
        consequenceDesc:
          "Your stall holds steady, neither growing significantly nor falling into trouble. A safe place to be, though not where the biggest opportunities lie.",
        scoreChange: 0,
        moneyChange: 0,
      },
      {
        text: "Decide compliance has been more trouble than it's worth",
        subtext: "Consider scaling back formal habits",
        outcome: "bad",
        consequenceTitle: "Sliding Backward",
        consequenceDesc:
          "Abandoning the compliance habits you've built risks undoing real progress. The opportunities that opened up through formal trading start closing again.",
        scoreChange: -20,
        moneyChange: -150,
      },
    ],
  },
];
