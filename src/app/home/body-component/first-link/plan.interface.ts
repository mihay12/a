export interface Plan {
    date: string | number | Date;
    access: [];
    access_type: string;
    active: boolean;
    editable: boolean;
    id: number;
    image: string;
    name: string;
    planogram_shop: [];
    trade_area: number;
    update_date: string;
  }