import rfidTag from '@/assets/products/rfid-tag.webp';
import rfidDesktopReader from '@/assets/products/rfid-desktop-reader.webp';
import rfidSecurityGate from '@/assets/products/rfid-security-gate.webp';
import turnstile from '@/assets/products/turnstile.webp';
import selfCheckinKiosk from '@/assets/products/self-checkin-kiosk.webp';
import biometricSystem from '@/assets/products/biometric-system.webp';

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  keywords: string;
  description: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'rfid-transforming-libraries-kenya',
    title: 'How RFID Is Transforming Libraries in Kenya',
    excerpt: 'Kenyan libraries are moving away from manual checkout and paper-based records. RFID technology is making circulation faster, inventory more accurate, and security tighter than ever before.',
    author: 'Michael Mutunga',
    date: 'July 15, 2026',
    dateISO: '2026-07-15',
    image: rfidDesktopReader,
    imageAlt: 'RFID desktop reader used in Kenyan libraries for book checkout',
    keywords: 'RFID libraries Kenya, library RFID system, Library Radar Kenya, RFID book tagging, library automation Kenya',
    description: 'How RFID technology is transforming Kenyan libraries with faster checkout, accurate inventory, and stronger security. Learn about Library Radar and Koha integration.',
    content: `
<p>If you work in a Kenyan library, you already know the daily challenges. Long queues at the checkout desk. Hours spent on stocktaking. Books that walk out the door without anyone noticing. These are problems that library staff across the country deal with every single day.</p>

<p>RFID technology is changing all of that. And it is not some distant future concept. Libraries in Nairobi, Mombasa, Kisumu, and across the country are already using RFID to completely reshape how they operate.</p>

<h2>What Is RFID and Why Does It Matter for Libraries?</h2>

<p>RFID stands for Radio Frequency Identification. In simple terms, it means putting a tiny electronic tag on each book that can be read wirelessly. No scanning a barcode one item at a time. No line of sight needed. You can read multiple tags at once, even from inside a bag or a stack of books.</p>

<p>For a library, this changes everything. A librarian can check out five books in the time it used to take to check out one. Stocktaking that used to take a whole week can now be done in a single afternoon. And security gates at the exit can detect if someone walks out with a book that was never checked out.</p>

<h2>How Library Radar Makes It All Work</h2>

<p>System One Ltd developed Library Radar specifically for Kenyan institutions. It is an RFID library management system that handles circulation, inventory, and security in one platform. The thing that makes it stand out is how well it works with Koha, the open-source library system that many Kenyan universities and public libraries already use.</p>

<p>With Library Radar, you do not have to throw away your existing system. It connects to what you already have and adds RFID capabilities on top. Staff can scan books at the front desk using a desktop reader. Handheld scanners let you do shelf audits without pulling every book off the shelf. And self-service kiosks let borrowers check out their own books without waiting in line.</p>

<h2>Real Results From Kenyan Libraries</h2>

<p>Libraries that have adopted RFID report some impressive changes. Checkout times drop by 60 to 70 percent. Stocktaking that used to take five days now takes one. And book losses go down significantly because the security gates catch items that were not properly checked out.</p>

<p>One university library in Nairobi told us they reduced their annual book losses by 40 percent in the first year after installing RFID security gates combined with Library Radar. That is not just a convenience. It is real money saved on replacement costs.</p>

<h2>The Components That Make It Happen</h2>

<p>An RFID library system typically includes a few key pieces. First, there are the tags themselves, which get attached to each book or material. Then you have desktop readers at circulation desks for checking books in and out. Handheld scanners let staff do shelf reads and inventory checks. Self-service kiosks give borrowers independence. And security gates at the exits provide the final layer of protection.</p>

<p>Each of these components works together. When a book is checked out through the desktop reader, the system updates automatically. When the same book passes through a security gate without being checked out, an alarm goes off. And when a staff member does a shelf read with the handheld scanner, the system knows exactly which books are where.</p>

<h2>Getting Started With RFID in Your Library</h2>

<p>The good news is that you do not have to do everything at once. Most libraries start with the circulation desk and a few desktop readers. Once that is running smoothly, they add security gates and self-service kiosks. Inventory scanning with handheld readers usually comes last.</p>

<p>System One Ltd handles the entire process, from tagging your existing collection to installing the hardware and training your staff. We have worked with university libraries, public libraries, school libraries, and special collections across Kenya.</p>

<p>If you want to see how RFID could work in your library, you can <a href="/contact" class="text-primary font-medium hover:underline">reach out to our team</a> for a consultation. We can walk you through the options and even set up a demo so you can see it in action before making any decisions.</p>
`,
  },
  {
    slug: 'rfid-asset-tracking-business',
    title: '5 Reasons Your Business Needs RFID Asset Tracking',
    excerpt: 'Lost equipment, missing tools, and wasted hours searching for items are costing your business more than you think. Here is how RFID asset tracking solves these problems.',
    author: 'Alex Mwanzia',
    date: 'July 28, 2026',
    dateISO: '2026-07-28',
    image: rfidTag,
    imageAlt: 'RFID tags used for asset tracking in Kenyan businesses',
    keywords: 'RFID asset tracking Kenya, equipment tracking RFID, asset management Kenya, RFID for businesses',
    description: 'Discover 5 reasons why Kenyan businesses need RFID asset tracking. Reduce losses, save time, and improve accountability with RFID technology.',
    content: `
<p>Walk into almost any Kenyan office, warehouse, or workshop and you will hear the same complaint. "Where is the projector?" "Who took the laptop charger?" "When did we last see that generator?" Losing track of equipment and assets is not just annoying. It costs businesses real money every single year.</p>

<p>RFID asset tracking fixes this problem at its root. Instead of relying on spreadsheets, sticky notes, or memory, you give each item a small electronic tag that identifies it instantly whenever it is scanned.</p>

<h2>Reason 1: Stop Losing Expensive Equipment</h2>

<p>Every business has items that are expensive to replace. Laptops, projectors, measuring instruments, power tools, generators. When these go missing, it is not just the replacement cost. It is the downtime while you figure out where it went or order a new one.</p>

<p>With RFID asset tags, each item gets a unique identifier. You scan it when it leaves the store, when it changes hands, and when it comes back. At any point, you can run a report showing exactly where every tagged item is supposed to be. If something is missing, you know when it was last scanned and who had it last.</p>

<h2>Reason 2: Make Audits and Stocktakes Painless</h2>

<p>If you have ever done a manual asset audit, you know the pain. Someone walks around with a clipboard, checks serial numbers, and tries to match them against a spreadsheet. It takes days and the results are usually inaccurate.</p>

<p>RFID handheld scanners let one person walk through an entire office or warehouse and scan hundreds of items in minutes. No need to find serial numbers. No need to open boxes. The scanner picks up tags through packaging and from a distance of several meters. You get a complete report of what is present, what is missing, and what moved.</p>

<h2>Reason 3: Create Real Accountability</h2>

<p>When equipment moves between departments or gets assigned to specific people, RFID creates a clear record. You know who checked out the camera, when they got it, and when they returned it. This eliminates the "I thought someone else had it" problem that wastes so much time in organizations.</p>

<p>For companies with shared resources, this level of tracking is a game changer. It's not about surveillance. It's about knowing where your stuff is so you can use it when you need it.</p>

<h2>Reason 4: Reduce Maintenance Problems</h2>

<p>RFID tags can be linked to maintenance records. When a piece of equipment is scanned, the system can check if it is due for servicing. This means generators get serviced on schedule, vehicles get their oil changed on time, and critical equipment does not fail because someone forgot the maintenance calendar.</p>

<p>This is especially valuable for businesses that rely on heavy equipment or specialized tools. A single unexpected breakdown can cost more than an entire RFID tracking system.</p>

<h2>Reason 5: The Numbers Add Up Quickly</h2>

<p>Consider the math. A mid-sized Kenyan company might have 200 tracked assets worth an average of KES 50,000 each. That's KES 10 million in assets. If you lose just 5 percent of them each year to misplacement or theft, that's KES 500,000 gone. An RFID system for those 200 items costs a fraction of that amount and pays for itself within the first year.</p>

<p>Beyond direct savings, you also gain time. Staff who used to spend hours searching for equipment can focus on productive work. Managers who used to argue about who had what can simply check the system.</p>

<h2>Getting Started</h2>

<p>RFID asset tracking does not require a massive upfront investment. You can start with your most valuable or most frequently misplaced items and expand from there. System One Ltd helps businesses across Kenya tag their assets, set up tracking software, and train staff on how to use the system.</p>

<p>Ready to stop losing equipment? <a href="/contact" class="text-primary font-medium hover:underline">Talk to our team</a> about an asset tracking solution that fits your business.</p>
`,
  },
  {
    slug: 'rfid-vs-barcode',
    title: 'RFID vs Barcode: Which Is Better for Your Institution?',
    excerpt: 'Barcodes have been the standard for decades, but RFID is quickly taking over. Here is an honest comparison to help you decide which technology makes more sense for your organization.',
    author: 'Lilian Ogollah',
    date: 'August 5, 2026',
    dateISO: '2026-08-05',
    image: rfidTag,
    imageAlt: 'Comparison of RFID tag and barcode label for identification',
    keywords: 'RFID vs barcode Kenya, RFID advantages over barcode, barcode vs RFID comparison, RFID technology Kenya',
    description: 'RFID vs barcode: a honest comparison for Kenyan institutions. Learn the speed, cost, durability, and efficiency differences to make the right choice.',
    content: `
<p>If you are running a library, warehouse, retail store, or educational institution in Kenya, you have probably relied on barcodes at some point. They're cheap, familiar, and they work. So why would you even consider switching to RFID?</p>

<p>The short answer is that while barcodes work fine for basic identification, RFID solves problems that barcodes simply cannot address. Let's break it down honestly.</p>

<h2>Speed: The Biggest Difference</h2>

<p>With a barcode, you have to point a scanner directly at the label. One item at a time. Line of sight required. In a busy library checkout or a warehouse receiving dock, this creates a bottleneck.</p>

<p>RFID tags can be read without line of sight and multiple tags can be read simultaneously. A librarian can place five books on a pad and check them all out in one go. A warehouse worker can scan an entire pallet without opening the box. The time savings add up fast, especially in high-volume operations.</p>

<h2>Durability: Tags Last Longer</h2>

<p>Barcodes are printed labels. They scratch, fade, get torn, and become unreadable. In a warehouse environment where boxes get handled roughly, barcode labels often fail before the product reaches the shelf.</p>

<p>RFID tags are embedded in plastic or paper and are much more resistant to wear and tear. They keep working even when exposed to dust, moisture, or rough handling. For assets that get used repeatedly, like library books or shared equipment, this durability matters a lot.</p>

<h2>Cost: Barcodes Win Here</h2>

<p>Let's be honest about this. Barcodes are cheaper. A barcode label costs almost nothing to print. An RFID tag costs more per unit, typically ranging from KES 20 to KES 100 depending on the type and quantity.</p>

<p>However, the cost gap is shrinking as RFID technology becomes more widespread. And the total cost of ownership tells a different story. Barcodes might be cheaper to print, but they cost more in staff time because each scan takes longer. They also fail more often, requiring reprinting and re-labeling.</p>

<h2>Range: RFID Wins Big</h2>

<p>A barcode scanner typically needs to be within a few centimeters of the label. An RFID reader can pick up tags from several meters away, depending on the type of tag and reader.</p>

<p>This means you can do inventory without touching every item. You can set up security gates that detect tags as people walk through. You can track assets in real time as they move through a facility. None of this is possible with barcodes.</p>

<h2>Data Capacity: RFID Carries More Information</h2>

<p>A barcode typically stores a short identification number. An RFID tag can store much more data, including item details, location history, and maintenance records. This reduces the need to constantly look up information in a central database.</p>

<h2>So Which Should You Choose?</h2>

<p>Barcodes make sense if you have a small number of items, a limited budget, and don't need real-time tracking. They're perfectly fine for a small retail shop or a low-volume operation.</p>

<p>RFID makes sense when you need speed, durability, bulk scanning, or real-time visibility. Libraries, warehouses, educational institutions, hospitals, and any organization with hundreds or thousands of items benefit most from the switch.</p>

<p>For many Kenyan institutions, the question isn't RFID or barcode. It's when to make the transition. The good news is that you can start small, prove the value, and expand from there.</p>

<p>Want to see how RFID compares in your specific situation? <a href="/contact" class="text-primary font-medium hover:underline">Get in touch</a> and we'll help you figure out the right approach.</p>
`,
  },
  {
    slug: 'rfid-security-gates-libraries',
    title: 'The Complete Guide to RFID Security Gates for Libraries',
    excerpt: 'Book theft is a real problem for Kenyan libraries. RFID security gates provide a reliable, non-intrusive way to catch unauthorized removals before they leave the building.',
    author: 'Mark Simiyu',
    date: 'August 12, 2026',
    dateISO: '2026-08-12',
    image: rfidSecurityGate,
    imageAlt: 'RFID security gates installed at a Kenyan library exit',
    keywords: 'RFID security gates Kenya, library security gates, RFID theft prevention libraries, library book security Kenya',
    description: 'Complete guide to RFID security gates for Kenyan libraries. Learn how they work, types available, and how they integrate with your library management system.',
    content: `
<p>Every library director in Kenya has the same worry. Books disappear. Some get stolen by borrowers who never check them out. Others get lost in the shuffle when circulation procedures aren't followed properly. Either way, the library loses valuable resources and the replacement costs add up fast.</p>

<p>RFID security gates solve this problem by creating a monitored boundary at every exit point. If a book with an active RFID tag passes through the gate without being properly checked out, the gate sounds an alarm and staff can respond immediately.</p>

<h2>How RFID Security Gates Work</h2>

<p>The concept is straightforward. Each book in the library gets an RFID tag. When a book is checked out properly, the system deactivates that tag's security status. When the same book passes through the security gate, the gate knows it's been checked out and lets it pass quietly.</p>

<p>But if someone tries to walk out with a book that was never checked out, the tag is still active. The gate detects the active tag and triggers an alarm. This simple mechanism catches the vast majority of unauthorized removals.</p>

<h2>Types of Security Gates</h2>

<p>There are two main types of RFID security gates used in libraries. Pedestal gates are the tall, freestanding units you typically see at library exits. They create a detection zone between two or more panels and can detect tags from several meters away.</p>

<p>Wall-mounted gates are smaller units attached to the wall on either side of a doorway. They're less obtrusive and work well in smaller libraries or in buildings where floor space is limited.</p>

<p>Both types work on the same principle. The choice depends on your entrance size, the volume of foot traffic, and how much detection range you need.</p>

<h2>Integration With Your Library System</h2>

<p>The real power of RFID security gates comes from how they connect to your library management system. When a book is checked out through a circulation desk reader, the system automatically updates the tag's security status. This means the gate knows which books are supposed to leave and which aren't.</p>

<p>Library Radar, developed by System One Ltd, integrates directly with Koha and other popular library systems. This means your checkout process and your security gates are always in sync. There's no manual status updates. No flags to set. It all happens automatically when a book is scanned at the desk.</p>

<h2>What Happens When the Alarm Goes Off</h2>

<p>When a security gate detects an unauthorized tag, it typically triggers both a visual and audible alarm. Staff can then approach the person, check their items, and resolve the situation. In most cases, it's a simple mistake. The borrower forgot to check out a book, or the circulation desk didn't scan it properly.</p>

<p>The gates also generate logs. You can see how many alarms were triggered, at what times, and which items were involved. This data helps you identify patterns. Maybe alarms spike during exam season. Maybe a particular exit has more issues than others. This information helps you improve procedures and reduce future incidents.</p>

<h2>Reducing Book Losses in Practice</h2>

<p>Kenyan libraries that have installed RFID security gates consistently report significant reductions in book losses. The combination of visible deterrent and actual detection means fewer books disappear. And the books that do get caught at the gate are usually returned to the shelves rather than lost permanently.</p>

<p>One public library in Mombasa reported a 55 percent reduction in annual book losses within the first year of installation. That's not just fewer missing books. It's hundreds of thousands of shillings saved on replacements.</p>

<h2>Installation and Maintenance</h2>

<p>Installing RFID security gates is not a major construction project. The gates are freestanding or wall-mounted units that can be set up in a day or two. The bigger task is tagging your existing collection, which is where a lot of libraries need help.</p>

<p>System One Ltd provides end-to-end installation, from tagging your books to setting up the gates and integrating everything with your library system. We also provide ongoing support and maintenance to keep everything running smoothly.</p>

<p>Ready to protect your library's collection? <a href="/contact" class="text-primary font-medium hover:underline">Contact our team</a> to discuss the right security gate setup for your library.</p>
`,
  },
  {
    slug: 'rfid-inventory-management',
    title: 'How RFID Inventory Management Saves Time and Money',
    excerpt: 'Manual stocktaking is slow, error-prone, and expensive. RFID inventory management lets you count hundreds of items in minutes with far greater accuracy.',
    author: 'Alfred Ochieng',
    date: 'August 19, 2026',
    dateISO: '2026-08-19',
    image: rfidTag,
    imageAlt: 'RFID tags and handheld scanner for inventory management',
    keywords: 'RFID inventory management Kenya, RFID stocktaking, warehouse RFID Kenya, inventory control RFID',
    description: 'How RFID inventory management saves Kenyan businesses time and money. Faster stocktaking, better accuracy, and reduced labor costs with RFID technology.',
    content: `
<p>If your business involves keeping track of physical items, whether that's books in a library, products in a warehouse, or equipment across an office, you know how painful inventory can be. The traditional approach involves a lot of manual labor, a lot of time, and a lot of errors.</p>

<p>RFID inventory management changes this completely. Instead of counting items one by one, you use a handheld scanner that picks up hundreds of RFID tags per second. Walk through your warehouse, your library shelves, or your stockroom, and the system records everything automatically.</p>

<h2>The Problem With Manual Counting</h2>

<p>Manual inventory is the old faithful of business operations. Someone gets a clipboard, walks through the space, and counts what's there. Then they compare it against a spreadsheet or database. The discrepancies get investigated. The whole process takes days or even weeks for a large operation.</p>

<p>The problems are obvious. It's slow. It's labor-intensive. People make mistakes, especially when counting hundreds of similar items. And the results are only accurate for the moment the count was done. Anything that moves after that is back to being untracked.</p>

<h2>How RFID Makes It Faster</h2>

<p>An RFID handheld scanner can read tags from a distance of several meters, through packaging, without line of sight. One person can walk through an entire warehouse aisle and capture every tagged item in seconds. No need to open boxes. No need to find barcodes. No need to handle each item individually.</p>

<p>For a warehouse with 10,000 items, manual counting might take three to five days with a team of four people. The same count with an RFID handheld scanner can be done by one person in a single day. That's not a small improvement. That's a fundamental change in how you operate.</p>

<h2>Accuracy Goes Up, Errors Go Down</h2>

<p>Human error is the biggest enemy of manual inventory. People miscount, skip items, or record numbers in the wrong place. Studies consistently show that manual inventory accuracy falls between 65 and 80 percent. That means 20 to 35 percent of your count is wrong.</p>

<p>RFID inventory systems routinely achieve 98 to 99 percent accuracy. The scanner doesn't get tired, doesn't get distracted, and doesn't miscount. When you combine that with the speed of scanning, you get results that are both fast and reliable.</p>

<h2>Beyond Counting: Real-Time Visibility</h2>

<p>RFID doesn't just make counting faster. It enables real-time inventory visibility. Fixed readers at key points in your facility can track items as they move. You know what's in the warehouse, what's on the truck, and what's on the shelf without anyone having to count anything.</p>

<p>This level of visibility transforms operations. You can spot shortages before they become problems. You can identify slow-moving items that are taking up valuable space. You can track items through every stage of your supply chain.</p>

<h2>Where RFID Inventory Works Best</h2>

<p>Libraries benefit enormously because they have hundreds or thousands of similar items on shelves that need regular auditing. Warehouses and distribution centers benefit because they handle high volumes of goods that need accurate tracking. Retail stores benefit because they need to know exactly what's on the shelf at all times.</p>

<p>Hospitals, schools, government offices, and manufacturing facilities all have inventory challenges that RFID can address. If you have physical items that need to be counted, tracked, or located, RFID is worth exploring.</p>

<h2>The Investment Pays for Itself</h2>

<p>The cost of RFID tags, readers, and software is real, but so is the return. When you calculate the staff hours saved, the errors eliminated, and the better decisions made with accurate data, most organizations find that RFID inventory management pays for itself within the first year.</p>

<p>System One Ltd helps organizations across Kenya implement RFID inventory systems, from tagging initial items to setting up readers and training staff. We work with businesses of all sizes, from small retailers to large warehouses.</p>

<p>Want to see how RFID inventory management could work for your operation? <a href="/contact" class="text-primary font-medium hover:underline">Reach out to our team</a> for a consultation.</p>
`,
  },
  {
    slug: 'rfid-access-control-systems',
    title: 'Understanding RFID Access Control Systems',
    excerpt: 'From office buildings to university campuses, RFID access control systems offer a secure, efficient way to manage who enters which spaces and when.',
    author: 'Michael Mutunga',
    date: 'August 26, 2026',
    dateISO: '2026-08-26',
    image: turnstile,
    imageAlt: 'RFID turnstile access control system at a Kenyan campus entrance',
    keywords: 'RFID access control Kenya, RFID turnstile Kenya, campus access control, RFID building security Kenya',
    description: 'Understanding RFID access control systems for Kenyan institutions. Turnstiles, credentials, role-based permissions, and campus security explained.',
    content: `
<p>Managing who can enter which buildings and rooms is a challenge for every organization. Whether you're running a university campus, a corporate office, a hospital, or a government facility, you need a way to control access that's both secure and convenient for the people who belong there.</p>

<p>RFID access control systems solve this by giving each authorized person a credential, like a card or fob, that automatically identifies them at entry points. No keys to copy. No codes to remember. Just tap or wave your credential and the door or turnstile opens for you.</p>

<h2>How RFID Access Control Works</h2>

<p>The system has three main parts. First, there are the credentials, which are RFID cards, fobs, or wristbands given to authorized people. Each one has a unique identifier linked to a person's profile in the system.</p>

<p>Second, there are the readers installed at entry points. These can be mounted on doors, turnstiles, gates, or any controlled access point. When a credential comes near the reader, it picks up the signal and checks the person's permissions.</p>

<p>Third, there's the management software that stores all the access rules. It decides who can enter where and when. A student might have access to the library and lecture halls but not the staff offices. A security guard might have access everywhere. A visitor might only have access to the reception area for a specific time window.</p>

<h2>Turnstiles: The Visible Layer of Security</h2>

<p>Turnstiles are the physical barrier that controls entry. When someone taps their RFID credential on the reader, the turnstile unlocks and lets them through. If the credential isn't recognized or the person doesn't have permission, the turnstile stays locked.</p>

<p>Turnstiles work well at building entrances, campus gates, and any high-traffic entry point. They provide a clear, visible layer of security while still allowing smooth flow for authorized people. In a busy university or office building, this balance between security and convenience is essential.</p>

<h2>Role-Based Permissions</h2>

<p>One of the biggest advantages of RFID access control is how easy it is to manage permissions. Instead of distributing physical keys and collecting them back when someone leaves, you simply update their profile in the software.</p>

<p>New employee? Issue a credential and set their access levels. Employee leaves? Deactivate their credential instantly. No locks to change. No keys to track down. The system handles it all digitally.</p>

<p>You can also set time-based rules. Some doors only open during business hours. Some areas are accessible 24/7 for certain staff. Weekend access might be restricted to specific teams. All of this is configurable in the software.</p>

<h2>Campus Security Applications</h2>

<p>Universities and colleges in Kenya face unique access control challenges. Multiple buildings, thousands of students, various restricted areas like labs and server rooms, and constant foot traffic. RFID turnstiles and access control systems help manage all of this.</p>

<p>Libraries can restrict entry to registered students. Laboratories can limit access to authorized researchers. Dormitories can track who enters and exits. Parking areas can be controlled for permit holders only. Each area gets its own set of rules managed through a single system.</p>

<h2>Integration With Other Systems</h2>

<p>RFID access control doesn't work in isolation. It integrates with attendance systems, so the same credential that opens the door also records attendance. It works with security cameras, so access events are linked to video footage. And it connects with visitor management systems to handle temporary access for guests and contractors.</p>

<p>This integration creates a comprehensive security ecosystem where everything works together. Access events, attendance records, and security footage all share the same credential and timeline.</p>

<h2>Making the Switch</h2>

<p>Moving to RFID access control doesn't have to happen all at once. Many organizations start with their most critical entry points, like main entrances and server rooms, and expand from there. The system scales easily as your needs grow.</p>

<p>System One Ltd designs and installs RFID access control systems across Kenya. We work with you to understand your specific security requirements and build a system that fits your space, your budget, and your workflow.</p>

<p>Ready to upgrade your building security? <a href="/contact" class="text-primary font-medium hover:underline">Talk to our team</a> about an access control solution for your organization.</p>
  `,
  },
];

export const getBlogArticle = (slug: string) => blogArticles.find((a) => a.slug === slug);
