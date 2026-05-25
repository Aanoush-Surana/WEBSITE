// Navigation data structure for mega menus
export const navItems = [
  {
    label: 'About',
    href: '/about',
    megaMenu: {
      sections: [
        {
          title: 'Institute',
          items: [
            { label: 'Overview', href: '/about/overview', icon: 'Building2', desc: 'Institute background and history' },
            { label: 'Vision & Mission', href: '/about/vision-mission', icon: 'Target', desc: 'Our goals and aspirations' },
            { label: 'Director\'s Desk', href: '/about/director-desk', icon: 'UserCircle', desc: 'Message from the Director' },
            { label: 'ARIIA Ranking', href: '/about/ariia-ranking', icon: 'Award', desc: 'Innovation rankings' },
          ]
        },
        {
          title: 'Governance',
          items: [
            { label: 'ACT (PPP)', href: '/about/governance/act', icon: 'FileText', desc: 'Public Private Partnership Act' },
            { label: 'Amendment Act', href: '/about/governance/amendment', icon: 'FilePlus', desc: 'Act amendments' },
            { label: 'Statute', href: '/about/governance/statute', icon: 'Scale', desc: 'Institute statute' },
            { label: 'Statute Amendment', href: '/about/governance/statute-amendment', icon: 'FileEdit', desc: 'Statute amendments' },
          ]
        }
      ]
    }
  },
  {
    label: 'Administration',
    href: '/administration',
    megaMenu: {
      sections: [
        {
          title: 'Leadership',
          items: [
            { label: 'Chairperson', href: '/administration/chairperson', icon: 'Crown', desc: 'Board Chairperson' },
            { label: 'Director', href: '/administration/director', icon: 'UserTie', desc: 'Institute Director' },
            { label: 'Registrar', href: '/administration/registrar', icon: 'ClipboardList', desc: 'Administrative head' },
          ]
        },
        {
          title: 'Committees',
          items: [
            { label: 'Board of Governors', href: '/administration/committees/board-of-governors', icon: 'Users', desc: 'Governing body' },
            { label: 'Finance Committee', href: '/administration/committees/finance', icon: 'IndianRupee', desc: 'Financial oversight' },
            { label: 'Building & Works', href: '/administration/committees/building-works', icon: 'Building', desc: 'Infrastructure committee' },
            { label: 'Senate', href: '/administration/committees/senate', icon: 'Landmark', desc: 'Academic senate' },
            { label: 'BOS - CSE', href: '/administration/committees/bos-cse', icon: 'Code', desc: 'Board of Studies CSE' },
            { label: 'BOS - ECE', href: '/administration/committees/bos-ece', icon: 'Cpu', desc: 'Board of Studies ECE' },
            { label: 'BOS - AS&H', href: '/administration/committees/bos-ash', icon: 'BookOpen', desc: 'Board of Studies AS&H' },
          ]
        }
      ]
    }
  },
  {
    label: 'Academics',
    href: '/academics',
    megaMenu: {
      sections: [
        {
          title: 'Programs',
          items: [
            { label: 'B.Tech CSE', href: '/academics/btech-cse', icon: 'Code2', desc: 'Computer Science Engineering' },
            { label: 'B.Tech ECE', href: '/academics/btech-ece', icon: 'CircuitBoard', desc: 'Electronics & Communication' },
            { label: 'B.Tech Honors', href: '/academics/btech-honors', icon: 'Star', desc: 'Honors specialization' },
            { label: 'M.Tech CSE', href: '/academics/mtech-cse', icon: 'GraduationCap', desc: 'PG Computer Science' },
            { label: 'M.Tech ECE', href: '/academics/mtech-ece', icon: 'GraduationCap', desc: 'PG Electronics' },
            { label: 'Ph.D.', href: '/academics/phd', icon: 'FlaskConical', desc: 'Doctoral program' },
          ]
        },
        {
          title: 'Resources',
          items: [
            { label: 'Academic Calendar', href: '/academics/academic-calendar', icon: 'Calendar', desc: 'Semester schedule' },
            { label: 'Curriculum', href: '/academics/curriculum', icon: 'BookOpen', desc: 'Course structure' },
            { label: 'Fee Structure', href: '/academics/fee-structure', icon: 'Receipt', desc: 'Fee details 2025-26' },
            { label: 'M.Tech Ordinance', href: '/academics/ordinances/mtech', icon: 'Scroll', desc: 'PG regulations' },
            { label: 'Ph.D. Ordinance', href: '/academics/ordinances/phd', icon: 'Scroll', desc: 'PhD regulations' },
          ]
        }
      ]
    }
  },
  {
    label: 'Research',
    href: '/research',
    megaMenu: {
      sections: [
        {
          title: 'Research Ecosystem',
          items: [
            { label: 'Research Centers', href: '/research/centers', icon: 'FlaskConical', desc: 'Specialized research labs' },
            { label: 'Funded Projects (Ongoing)', href: '/research/funded-projects/ongoing', icon: 'TrendingUp', desc: 'Active funded research' },
            { label: 'Funded Projects (Completed)', href: '/research/funded-projects/completed', icon: 'CheckCircle', desc: 'Completed projects' },
          ]
        },
        {
          title: 'Research Scholars',
          items: [
            { label: 'Institute Scheme', href: '/research/scholars/institute-scheme', icon: 'UserCheck', desc: 'Institute funded scholars' },
            { label: 'Visvesvaraya Scheme', href: '/research/scholars/visvesvaraya', icon: 'Award', desc: 'Govt. scheme scholars' },
            { label: 'Graduated PhD Students', href: '/research/scholars/graduated', icon: 'GraduationCap', desc: 'Alumni researchers' },
          ]
        },
        {
          title: 'Resources',
          items: [
            { label: 'Library', href: '/research/library', icon: 'Library', desc: 'Research library' },
            { label: 'Internship @ IIIT Pune', href: '/research/internship', icon: 'Briefcase', desc: 'Summer internships' },
            { label: 'Events', href: '/research/events', icon: 'CalendarDays', desc: 'Research events' },
            { label: 'PostDoc Fellow', href: '/research/postdoc', icon: 'UserCog', desc: 'Postdoctoral positions' },
          ]
        }
      ]
    }
  },
  {
    label: 'People',
    href: '/people',
    megaMenu: {
      sections: [
        {
          title: 'Faculty',
          items: [
            { label: 'Faculty Directory', href: '/people/faculty', icon: 'Users', desc: 'All faculty members' },
            { label: 'Visiting Faculty', href: '/people/visiting-faculty', icon: 'UserPlus', desc: 'Visiting professors' },
          ]
        },
        {
          title: 'Staff',
          items: [
            { label: 'Regular Staff', href: '/people/staff/regular', icon: 'UserCheck', desc: 'Permanent staff' },
            { label: 'Contract Staff', href: '/people/staff/contract', icon: 'UserX', desc: 'Contract employees' },
          ]
        },
        {
          title: 'Community',
          items: [
            { label: 'Alumni', href: '/people/alumni', icon: 'Globe', desc: 'IIIT Pune graduates' },
            { label: 'Student Council', href: '/people/student-council', icon: 'Users2', desc: 'Student representatives' },
          ]
        }
      ]
    }
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    megaMenu: {
      sections: [
        {
          title: 'Clubs & Societies',
          items: [
            { label: 'Technical Clubs', href: '/campus-life/clubs', icon: 'Code2', desc: 'Bit Legion, Localhost, ROFIES' },
            { label: 'Cultural Clubs', href: '/campus-life/clubs', icon: 'Music2', desc: 'Eclectic, Rang, Saaz, etc.' },
          ]
        },
        {
          title: 'Activities',
          items: [
            { label: 'Fit India', href: '/campus-life/activities', icon: 'Heart', desc: 'Fitness campaigns' },
            { label: 'Yoga Day', href: '/campus-life/activities', icon: 'Sun', desc: 'International Yoga Day' },
            { label: 'Swachh Bharat', href: '/campus-life/activities', icon: 'Recycle', desc: 'Cleanliness drives' },
          ]
        },
        {
          title: 'Media & Events',
          items: [
            { label: 'Photo Gallery', href: '/campus-life/gallery', icon: 'Image', desc: 'Moments & event coverage' },
            { label: 'College Events', href: '/campus-life/events', icon: 'CalendarDays', desc: 'Fests & annual hackathons' },
            { label: 'Eminence Magazine', href: '/campus-life/magazine', icon: 'Newspaper', desc: 'Annual student publication' },
            { label: 'Virtual Campus Tour', href: '/campus-life/campus-tour', icon: 'MapPin', desc: 'Explore the permanent campus' },
          ]
        }
      ]
    }
  },
  {
    label: 'Notices',
    href: '/notices',
    megaMenu: {
      sections: [
        {
          title: 'Academic Notices',
          items: [
            { label: 'Semester Notices', href: '/notices/academic', icon: 'BookOpen', desc: 'Semester-related notices' },
            { label: 'Registration Notices', href: '/notices/academic', icon: 'ClipboardList', desc: 'Registration info' },
            { label: 'Holiday List', href: '/notices/academic', icon: 'CalendarOff', desc: 'Academic year holidays' },
          ]
        },
        {
          title: 'Student Notices',
          items: [
            { label: 'Scholarship Scheme', href: '/notices/student', icon: 'GraduationCap', desc: 'Scholarship opportunities' },
            { label: 'Late Fee Notices', href: '/notices/student', icon: 'AlertCircle', desc: 'Fee deadline alerts' },
            { label: 'Faculty Advisors', href: '/notices/student', icon: 'UserCheck', desc: 'Faculty advisor list' },
          ]
        },
        {
          title: 'Administrative',
          items: [
            { label: 'Anti-Ragging', href: '/notices/administrative', icon: 'Shield', desc: 'Anti-ragging committee' },
            { label: 'Rajbhasha Committee', href: '/notices/administrative', icon: 'FileText', desc: 'Hindi language notices' },
          ]
        }
      ]
    }
  },
];

export const quickLinks = [
  { label: 'Placements', href: '/placements', icon: 'TrendingUp' },
  { label: 'Contact Us', href: '/contact', icon: 'Phone' },
  { label: 'NIRF', href: '/about/nirf', icon: 'Award' },
  { label: 'RTI', href: '/about/rti', icon: 'Info' },
];
