export class EducationDataModel {
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;

constructor(educationData: EducationDataModel) {
 if (!educationData) {
     return;
 }

 Object.assign(educationData, this);
}
}