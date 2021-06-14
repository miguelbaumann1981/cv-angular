export class MenuOption {
    constructor(menu: Partial<MenuOption>) {
        if (!!menu) {
            Object.assign(this, menu);
            this.options = (menu.options || []).map(opt => new MenuOption(opt));
        }
    }
    
    public options: MenuOption[];
    public title: string;
    public subtext?: string;
    public icon: string;
    public url?: string;
    public img?: string;
    public alt?: string;
    public componentName?: string;
}
