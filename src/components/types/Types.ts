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
  week: string;
  month: string;
  start_date: Date;
  end_date: Date;
  invoices_count: number;
  total_margin: number;
  total_revenue: number;
  }

