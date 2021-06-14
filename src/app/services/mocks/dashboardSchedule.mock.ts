import { DashboardScheduleModel } from "src/app/models/dashboardSchedule.model";

export let DASHBOARD_SCHEDULE_DATA: DashboardScheduleModel[] = [
  {
    dayWeek: 'Viernes',
    date: '28 Enero',
    list: [
      {
        time: '10:00',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, iste voluptatibus explicabo doloribus'
      },
      {
        time: '12:00',
        description: 'Sapiente omnis ipsa distinctio, iste voluptatibus explicabo doloribus'
      },
      {
        time: '14:00',
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        time: '16:00',
        description: 'Sapiente omnis ipsa distinctio'
      }
    ]
  },
  {
    dayWeek: 'Sábado',
    date: '29 Enero',
    list: [
      {
        time: '14:00',
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        time: '16:00',
        description: 'Sapiente omnis ipsa distinctio'
      },
      {
        time: '18:00',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, iste voluptatibus explicabo doloribus'
      },
      {
        time: '19:00',
        description: 'Sapiente omnis ipsa distinctio, iste voluptatibus explicabo doloribus'
      }
    ]
  },
  {
    dayWeek: 'Domingo',
    date: '30 Enero',
    list: [
      {
        time: '14:00',
        description: 'Lorem ipsum dolor sit amet, omnis ipsa distinctio, iste voluptatibus explicabo doloribus'
        },
        {
          time: '16:00',
          description: 'Sapiente omnis ipsa distinctio'
        },
        {
          time: '17:00',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        },
        {
          time: '19:00',
          description: 'Sapiente omnis ipsa distinctio, iste voluptatibus explicabo doloribus'
        }
          
    ]
  }
];