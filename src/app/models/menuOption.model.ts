export class MenuOption {
    constructor(menu: Partial<MenuOption>) {
        if (!!menu) {
            Object.assign(this, menu);
            this.options = (menu.options || []).map(opt => new MenuOption(opt));
        }
    }
    
    public options: MenuOption[];
    public title: string;
    public icon: string;
    public href: string;
}
