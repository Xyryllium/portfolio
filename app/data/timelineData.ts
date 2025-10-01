export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'work' | 'education' | 'training';
  credentialUrl?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: '08-2025',
    type: 'training',
    credentialUrl: 'https://www.credly.com/badges/78d93a98-2786-4283-ace1-aa9ebc294caf',
  },
  {
    id: '2',
    title: 'Emerging Leader Training',
    organization: 'Inchcape Digital Delivery Center',
    date: '10-2023',
    type: 'training',
    credentialUrl: 'https://www.credential.net/874966e1-1450-4f00-86b9-44a3ebb50c81#acc.NEqsGdC0s',
  },
  {
    id: '3',
    title: 'Full Stack PHP Developer',
    organization: 'Inchcape Digital Delivery Center',
    date: '06.2021 - 07.2025',
    type: 'work',
  },
  {
    id: '4',
    title: 'Full Stack Web Developer',
    organization: 'FirstCom Solutions PTE Ltd.',
    date: '12.2020 - 06.2021',
    type: 'work',
  },
  {
    id: '5',
    title: 'System Programmer',
    organization: 'AFreight Philippines Inc.',
    date: '08.2019 - 12.2020',
    type: 'work',
  },
  {
    id: '6',
    title: 'MTA - Database Fundamentals',
    organization: 'Microsoft Technology Associate',
    date: '2018',
    type: 'education',
    credentialUrl: 'https://www.credly.com/badges/6d7040c8-331e-4595-b36c-895b744cacf1',
  },
];

