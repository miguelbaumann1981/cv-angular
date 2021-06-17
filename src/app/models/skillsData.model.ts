export class SkillsDataModel {
  icon: string;
  text: string;
  percentage: number;

constructor(skillsData: SkillsDataModel) {
 if (!skillsData) {
     return;
 }

 Object.assign(skillsData, this);
}
}