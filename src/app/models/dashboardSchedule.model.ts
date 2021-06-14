
export class DashboardScheduleModel {
    dayWeek: string;
    date: string;
    list: any[];

constructor(dashboardSchedule: DashboardScheduleModel) {
   if (!dashboardSchedule) {
       return;
   }

   Object.assign(dashboardSchedule, this);
  }
}