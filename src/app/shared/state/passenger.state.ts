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
      seatNumber: 1,
      ancillaryService: 'Grade1',
      checkedIn: true,
    },
    {
      passengerId: 2,
      passengerName: 'Bhoomika',
      flightNumber: 'b1345',
      seatNumber: 15,
      ancillaryService: 'Grade2',
      checkedIn: true,
    },
    {
      passengerId: 3,
      passengerName: 'Asha',
      flightNumber: 'C1234',
      seatNumber: 16,
      ancillaryService: 'Grade3',
      checkedIn: true,
    },

    {
      passengerId: 4,
      passengerName: 'Mahesh',
      flightNumber: 'b1345',
      seatNumber: 10,
      ancillaryService: 'Grade1',
      checkedIn: false,
    },
    {
      passengerId: 5,
      passengerName: 'Surya',
      flightNumber: 'b1341',
      seatNumber: 16,
      ancillaryService: 'Grade2',
      checkedIn: true,
    },
    {
      passengerId: 6,
      passengerName: 'Sagar',
      flightNumber: 'b1341',
      seatNumber: 8,
      ancillaryService: 'Grade1',
      checkedIn: false,
    },
    {
      passengerId: 7,
      passengerName: 'Jenki',
      flightNumber: 'b1345',
      seatNumber: 19,
      ancillaryService: 'Grade5',
      checkedIn: true,
    },
    {
      passengerId: 8,
      passengerName: 'Kiran',
      flightNumber: 'b1341',
      seatNumber: 11,
      ancillaryService: 'Grade2',
      checkedIn: true,
    },
    {
      passengerId: 9,
      passengerName: 'Sathish',
      flightNumber: 'b1341',
      seatNumber: 10,
      ancillaryService: 'Grade2',
      checkedIn: true,
    },
    {
      passengerId: 10,
      passengerName: 'Powera',
      flightNumber: 'b1341',
      seatNumber: 19,
      ancillaryService: 'Grade2',
      checkedIn: false,
    },
    {
      passengerId: 11,
      passengerName: 'Showya',
      flightNumber: 'b1341',
      seatNumber: 5,
      ancillaryService: 'Grade2',
      checkedIn: true,
    },
    {
      passengerId: 12,
      passengerName: 'Usha',
      flightNumber: 'C1234',
      seatNumber: 17,
      ancillaryService: 'Grade3',
      checkedIn: true,
    },
    {
      passengerId: 13,
      passengerName: 'Krisha',
      flightNumber: 'C1234',
      seatNumber: 18,
      ancillaryService: 'Grade3',
      checkedIn: false,
    },
    {
      passengerId: 14,
      passengerName: 'Loha',
      flightNumber: 'C1234',
      seatNumber: 19,
      ancillaryService: 'Grade3',
      checkedIn: true,
    },
    {
      passengerId: 15,
      passengerName: 'harish',
      flightNumber: 'C1234',
      seatNumber: 11,
      ancillaryService: 'Grade3',
      checkedIn: false,
    },
  ],
  flightNumber: '0',
};
