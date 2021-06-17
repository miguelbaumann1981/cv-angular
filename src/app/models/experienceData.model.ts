export class ExperienceDataModel {
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;

constructor(experienceData: ExperienceDataModel) {
 if (!experienceData) {
     return;
 }

 Object.assign(experienceData, this);
}
}