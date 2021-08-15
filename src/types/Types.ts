export interface Invoice {
    id: number;
    customer_id: number;
    customer_name: string;
    region: string;
    total_invoice: number;
    total_margin: number;
    date: Date;
  }

  export interface Customers {
    customer_id: number;
    customer_name: string;
    total_revenue: number;
    total_margin: number;
    invoices_count: number;
    region: string
  }
  
  export interface Categories {
    category_name: string;
    total_revenue: number;
    total_margin: number;
  }

  export interface Revenues {
    total_revenue: number;
    total_margin: number;
    month: Date;
    week: Date;
  }

  export interface ChartLines {
    x: Date;
    y: number;
  }

