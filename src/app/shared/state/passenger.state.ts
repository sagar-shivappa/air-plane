export interface passengerState {
  passengers: any;
  flightNumber: string;
}
export interface passengerinterface {
  id: number;
  passengerId: number;
  passengerName: string;
  flightNumber: string;
  seatNumber: number;
  ancillaryService: string;
  checkedIn: boolean;
}
export const passengerInitialState: passengerState = {
  passengers: [
    {
      passengerId: 1,
      passengerName: 'Sagar',
      flightNumber: 'b1345',
      seatNumber: '1',
      ancillaryService: 'Food and beverages',
      checkedIn: true,
      wheelChair: true,
      infant: false,
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      passportNumber: 'MYUEPS589',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 2,
      passengerName: 'Bhoomika',
      flightNumber: 'b1345',
      seatNumber: '15',
      ancillaryService: 'Early boarding benefits',
      mealsService: 'Grade1',
      shoppingService: 'Wiskey',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: 'GfdfYUEPS589',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 3,
      passengerName: 'Asha',
      flightNumber: 'C1234',
      seatNumber: '16',
      ancillaryService: 'Food and beverages',
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      checkedIn: true,
      wheelChair: true,
      infant: false,
      passportNumber: 'HYUG^&*&*',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },

    {
      passengerId: 4,
      passengerName: 'Mahesh',
      flightNumber: 'b1345',
      seatNumber: '10',
      ancillaryService: 'Food and beverages',
      shoppingService: 'Wiskey',
      mealsService: 'Grade2',
      checkedIn: false,
      wheelChair: false,
      infant: false,
      passportNumber: '',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 5,
      passengerName: 'Surya',
      flightNumber: 'b1341',
      seatNumber: '16',
      ancillaryService: 'Early boarding benefits',
      shoppingService: 'Bicnoculars',
      mealsService: 'Grade1',
      checkedIn: true,
      wheelChair: true,
      infant: false,
      passportNumber: '',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 6,
      passengerName: 'Sagar',
      flightNumber: 'b1341',
      seatNumber: '8',
      ancillaryService: 'Food and beverages',
      shoppingService: 'American dolls',
      mealsService: 'Grade1',
      checkedIn: false,
      wheelChair: false,
      infant: false,
      passportNumber: 'tYUVEPS589',
      address: '',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 7,
      passengerName: 'Jenki',
      flightNumber: 'b1345',
      seatNumber: '19',
      ancillaryService: 'Early boarding benefits',
      mealsService: 'Grade3',
      shoppingService: 'Bicnoculars',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: '',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 8,
      passengerName: 'Kiran',
      flightNumber: 'b1341',
      seatNumber: '11',
      ancillaryService: 'Food and beverages',
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: 'Ug^*^**&6',
      address: '',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 9,
      passengerName: 'Sathish',
      flightNumber: 'b1341',
      seatNumber: '10',
      ancillaryService: 'Seat Selection benefits',
      mealsService: 'Grade1',
      shoppingService: 'American dolls',
      checkedIn: true,
      wheelChair: false,
      infant: true,
      passportNumber: 'YUJG^%^&&*',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 10,
      passengerName: 'Powera',
      flightNumber: 'b1341',
      seatNumber: '19',
      ancillaryService: 'Seat Selection benefits',
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      checkedIn: false,
      wheelChair: false,
      infant: false,
      passportNumber: '',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 11,
      passengerName: 'Showya',
      flightNumber: 'b1341',
      seatNumber: '5',
      ancillaryService: 'Early boarding benefits',
      mealsService: 'Grade1',
      shoppingService: 'Wiskey',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: 'GYUEPS589',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 12,
      passengerName: 'Usha',
      flightNumber: 'C1234',
      seatNumber: '17',
      ancillaryService: 'Food and beverages',
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      checkedIn: true,
      wheelChair: true,
      infant: false,
      passportNumber: 'GYUEPS589',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 13,
      passengerName: 'Krisha',
      flightNumber: 'C1234',
      seatNumber: '18',
      ancillaryService: 'Seat Selection benefits',
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      checkedIn: false,
      wheelChair: false,
      infant: true,
      passportNumber: 'GYUEPS589',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 14,
      passengerName: 'Loha',
      flightNumber: 'C1234',
      seatNumber: '19',
      ancillaryService: 'Early boarding benefits',
      mealsService: 'Grade1',
      shoppingService: 'American dolls',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: 'KUTYV7878',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    },
    {
      passengerId: 15,
      passengerName: 'harish',
      flightNumber: 'C1234',
      seatNumber: '11',
      ancillaryService: 'Food and beverages',
      mealsService: 'Grade1',
      shoppingService: 'Bicnoculars',
      checkedIn: false,
      wheelChair: false,
      infant: false,
      passportNumber: 'GYUEPS589',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '2008-06-20',
    },
  ],
  flightNumber: '0',
};

// create interface for Flights
export interface FlightsInterface {
  flightName: string;
  flightCode: string;
  departureTime: string;
  imgPath: string;
  ancillaryServices: string[];
  provisionedAncillaryServices: string[];
  shoppingService: string[];
  provisionedShoppingItems: string[];
}

// create flights initialState using a
export const flightsInitialState: FlightsInterface[] = [
  {
    flightName: 'Vistara',
    flightCode: 'b1345',
    departureTime: '13:00',
    imgPath: '/assets/img/vistara.jpg',
    ancillaryServices: [
      'Food and beverages',
      'Bag check-ins',
      'Early boarding benefits',
      'Beverage Benifits',
      'Movie benifits',
    ],
    provisionedAncillaryServices: ['Early boarding benefits'],
    shoppingService: [
      'American dolls',
      'Bicnoculars',
      'Wiskey',
      'Bedsheets',

      'Pillows',

      'Sleeping bag',

      'Educational supplies',

      'Purse',

      'Backpack',

      'Towel',

      'Water bottle',

      'Sunglasses',

      'Books',

      'Journals',

      'Watch',
    ],
    provisionedShoppingItems: [
      'American dolls',
      'Bicnoculars',
      'Sleeping bag',

      'Educational supplies',
    ],
  },
  {
    flightName: 'AirIndia',
    flightCode: 'c1234',
    departureTime: '15:00',
    imgPath: '/assets/img/airIndia.png',
    ancillaryServices: [
      'Food and beverages',
      'Bag check-ins',
      'Early boarding benefits',
      'Beverage Benifits',
      'Movie benifits',
    ],
    provisionedAncillaryServices: ['Bag check-ins', 'Early boarding benefits'],
    shoppingService: [
      'American dolls',
      'Bicnoculars',
      'Wiskey',
      'Bedsheets',

      'Pillows',

      'Sleeping bag',

      'Educational supplies',

      'Purse',

      'Backpack',

      'Towel',

      'Water bottle',

      'Sunglasses',

      'Books',

      'Journals',

      'Watch',
    ],
    provisionedShoppingItems: [
      'American dolls',
      'Bicnoculars',
      'Towel',

      'Water bottle',

      'Sunglasses',
    ],
  },
  {
    flightName: 'British Airlines',
    flightCode: 'b1341',
    departureTime: '19:00',
    imgPath: '/assets/img/british.jpg',
    ancillaryServices: [
      'Food and beverages',
      'Bag check-ins',
      'Early boarding benefits',
      'Beverage Benifits',
      'Movie benifits',
    ],
    provisionedAncillaryServices: ['Food and beverages', 'Bag check-ins'],
    shoppingService: [
      'American dolls',
      'Bicnoculars',
      'Wiskey',
      'Bedsheets',

      'Pillows',

      'Sleeping bag',

      'Educational supplies',

      'Purse',

      'Backpack',

      'Towel',

      'Water bottle',

      'Sunglasses',

      'Books',

      'Journals',

      'Watch',
    ],
    provisionedShoppingItems: [
      'American dolls',
      'Bicnoculars',
      'Sunglasses',

      'Books',

      'Journals',
    ],
  },
  {
    flightName: 'Spice jet',
    flightCode: 's1234',
    departureTime: '12:00',
    imgPath: '/assets/img/spicejet.png',
    ancillaryServices: [
      'Food and beverages',
      'Bag check-ins',
      'Early boarding benefits',
      'Beverage Benifits',
      'Movie benifits',
    ],
    provisionedAncillaryServices: ['Movie benifita'],
    shoppingService: [
      'American dolls',
      'Bicnoculars',
      'Wiskey',
      'Bedsheets',

      'Pillows',

      'Sleeping bag',

      'Educational supplies',

      'Purse',

      'Backpack',

      'Towel',

      'Water bottle',

      'Sunglasses',

      'Books',

      'Journals',

      'Watch',
    ],
    provisionedShoppingItems: [
      'American dolls',
      'Bicnoculars',
      'Bedsheets',

      'Pillows',

      'Sleeping bag',

      'Educational supplies',
    ],
  },
];
