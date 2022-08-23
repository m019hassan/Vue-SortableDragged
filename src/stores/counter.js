import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const populationByRegions = [
  {
    region: "Northern America",
    val: 6,
  },
  {
    region: "Latin America",
    val: 8,
  },
  {
    region: "Europe",
    val: 9,
  },
  {
    region: "Oceania",
    val: 5,
  },
];

export const barChart = [
  { age: "13-17", number: 5900000 },
  { age: "18-24", number: 38250000 },
  { age: "25-34", number: 52820000 },
  { age: "35-44", number: 38420000 },
];

export const charts = [
  { id: "donatChart", sourceData: "populationByRegions", type:"doughnut", palette: "soft", },
  { id: "donatChart", sourceData: "populationByRegions", type:"doughnut", palette: "soft", },
];


export const cardCharts = [
  { id: "donatChart", cardTitle: "", sourceData: "populationByRegions", type:"doughnut", palette: "soft", },
];

export const tasks = [{
  Task_ID: 1,
  Task_Assigned_Employee_ID: 1,
  Task_Owner_ID: 1,
  Task_Subject: 'Plans 2015',
  Task_Start_Date: '2015-01-01T00:00:00',
  Task_Due_Date: '2015-04-01T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 0,
}, {
  Task_ID: 2,
  Task_Assigned_Employee_ID: 2,
  Task_Owner_ID: 1,
  Task_Subject: 'Health Insurance',
  Task_Start_Date: '2015-02-12T00:00:00',
  Task_Due_Date: '2015-05-30T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 75,
  Task_Parent_ID: 0,
}, {
  Task_ID: 3,
  Task_Assigned_Employee_ID: 4,
  Task_Owner_ID: 4,
  Task_Subject: 'New Brochures',
  Task_Start_Date: '2015-02-17T00:00:00',
  Task_Due_Date: '2015-03-01T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 0,
}];

// export const employees = [{
//   ID: 1,
//   Name: 'John Heart',
// }, {
//   ID: 2,
//   Name: 'Samantha Bright',
// }, {
//   ID: 3,
//   Name: 'Arthur Miller',
// }, {
//   ID: 4,
//   Name: 'Robert Reagan',
// }];


export const doingTasks = [{ id: 1, text: 'Prepare 2019 Financial' },
  { id: 2, text: 'Prepare 2019 Marketing Plan' },
  { id: 3, text: 'Update Personnel Files' },
  { id: 4, text: 'Review Health Insurance Options Under the Affordable Care Act' }];

export const plannedTasks = [{ id: 5, text: 'New Brochures' },
  { id: 6, text: '2019 Brochure Designs' },
  { id: 7, text: 'Brochure Design Review' },
  { id: 8, text: 'Website Re-Design Plan' },
  { id: 9, text: 'Rollout of New Website and Marketing Brochures' },
  { id: 10, text: 'Create 2018 Sales Report' },
  { id: 11, text: 'Direct vs Online Sales Comparison Report' },
  { id: 12, text: 'Review 2018 Sales Report and Approve 2019 Plans' },
  { id: 13, text: 'Submit Signed NDA' },
  { id: 14, text: 'Update Revenue Projections' },
  { id: 15, text: 'Review Revenue Projections' },
  { id: 16, text: 'Comment on Revenue Projections' },
  { id: 17, text: 'Scan Health Insurance Forms' },
  { id: 18, text: 'Sign Health Insurance Forms' },
  { id: 19, text: 'Follow up with West Coast Stores' },
  { id: 20, text: 'Follow up with East Coast Stores' },
  { id: 21, text: 'Submit Refund Report for 2019 Recall' },
  { id: 22, text: 'Give Final Approval for Refunds' },
  { id: 23, text: 'Prepare Product Recall Report' },
  { id: 24, text: 'Review Product Recall Report by Engineering Team' },
  { id: 25, text: 'Review Training Course for any Omissions' },
  { id: 26, text: 'Review Overtime Report' },
  { id: 27, text: 'Submit Overtime Request Forms' },
  { id: 28, text: 'Overtime Approval Guidelines' },
  { id: 29, text: 'Create Report on Customer Feedback' },
  { id: 30, text: 'Review Customer Feedback Report' }];



  export const cardDrag = [
    // eslint-disable-next-line prettier/prettier
    { id: 15, header: "header 1", content: "Lorem Text 10", total: 28 , showtotla: true},
    // eslint-disable-next-line prettier/prettier
    { id: 16, header: "header 2", content: "Lorem Text 10", total: 26 , showtotla: false},
    // eslint-disable-next-line prettier/prettier
    { id: 17, header: "header 3", content: "Lorem Text 10", total: 25  ,showtotla: true},
    // eslint-disable-next-line prettier/prettier
    { id: 18, header: "header 4", content: "Lorem Text 10", total: 21  ,showtotla: true},
    { id: 18, header: "header 4", content: "Lorem Text 10", total: 21  ,showtotla: true},
    { id: 18, header: "header 4", content: "Lorem Text 10", total: 21  ,showtotla: true},
    { id: 18, header: "header 4", content: "Lorem Text 10", total: 21  ,showtotla: true},
    { id: 18, header: "header 4", content: "Lorem Text 10", total: 21  ,showtotla: true},
    { id: 18, header: "header 4", content: "Lorem Text 10", total: 21  ,showtotla: true},

  ];


  const employees = [{
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Prefix: 'Mr.',
    Position: 'CEO',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png',
    BirthDate: '1964/03/16',
    HireDate: '1995/01/15',
    Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003. When not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St.',
    State: 'California',
    City: 'Los Angeles',
  }, {
    ID: 2,
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Prefix: 'Mrs.',
    Position: 'Sales Assistant',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png',
    BirthDate: '1981/06/03',
    HireDate: '2012/05/14',
    Notes: 'Olivia loves to sell. She has been selling DevAV products since 2012.  Olivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
    Address: '807 W Paseo Del Mar',
    State: 'California',
    City: 'Los Angeles',
  }, {
    ID: 3,
    FirstName: 'Robert',
    LastName: 'Reagan',
    Prefix: 'Mr.',
    Position: 'CMO',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png',
    BirthDate: '1974/09/07',
    HireDate: '2002/11/08',
    Notes: 'Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team. Robert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
    Address: '4 Westmoreland Pl.',
    State: 'Arkansas',
    City: 'Bentonville',
  }, {
    ID: 4,
    FirstName: 'Greta',
    LastName: 'Sims',
    Prefix: 'Ms.',
    Position: 'HR Manager',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png',
    BirthDate: '1977/11/22',
    HireDate: '1998/04/23',
    Notes: 'Greta has been DevAV\'s HR Manager since 2003. She joined DevAV from Sonee Corp. Greta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.',
    Address: '1700 S Grandview Dr.',
    State: 'Georgia',
    City: 'Atlanta',
  }, {
    ID: 5,
    FirstName: 'Brett',
    LastName: 'Wade',
    Prefix: 'Mr.',
    Position: 'IT Manager',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png',
    BirthDate: '1968/12/01',
    HireDate: '2009/03/06',
    Notes: 'Brett came to DevAv from Microsoft and has led our IT department since 2012. When he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
    Address: '1120 Old Mill Rd.',
    State: 'Idaho',
    City: 'Boise',
  }, {
    ID: 6,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 'Controller',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png',
    BirthDate: '1974/11/15',
    HireDate: '2005/05/11',
    Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you\'ve not met her, be certain to say hi. Sandra has 2 daughters both of whom are accomplished gymnasts.',
    Address: '4600 N Virginia Rd.',
    State: 'Utah',
    City: 'Beaver',
  }, {
    ID: 7,
    FirstName: 'Kevin',
    LastName: 'Carter',
    Prefix: 'Mr.',
    Position: 'Shipping Manager',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png',
    BirthDate: '1978/01/09',
    HireDate: '2009/08/11',
    Notes: 'Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months. When not in the office, he is usually on the basketball court playing pick-up games.',
    Address: '424 N Main St.',
    State: 'California',
    City: 'San Diego',
  }, {
    ID: 8,
    FirstName: 'Cynthia',
    LastName: 'Stanwick',
    Prefix: 'Ms.',
    Position: 'HR Assistant',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png',
    BirthDate: '1985/06/05',
    HireDate: '2008/03/24',
    Notes: 'Cindy joined us in 2008 and has been in the HR department for 2 years.  She was recently awarded employee of the month. Way to go Cindy!',
    Address: '2211 Bonita Dr.',
    State: 'Arkansas',
    City: 'Little Rock',
  }, {
    ID: 9,
    FirstName: 'Kent',
    LastName: 'Samuelson',
    Prefix: 'Dr.',
    Position: 'Ombudsman',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png',
    BirthDate: '1972/09/11',
    HireDate: '2009/04/22',
    Notes: 'As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field. He is a classically trained musician and is a member of the Chamber Orchestra.',
    Address: '12100 Mora Dr',
    State: 'Missouri',
    City: 'St. Louis',
  }];

  export default {
    getCardSortable() {
      return cardDrag;
    },
  }