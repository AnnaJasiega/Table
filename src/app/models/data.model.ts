export class ApiResponse {
    exec_time: number;
    response: Response;
} 
export class Response {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    data: Data[];
}
export class Data {
    work_order_id: number;
    description: string;
    received_date: string;
    assigned_to: Assign[];
    status: string;
    priority: string;
}
export class Assign {
    person_name: string;
    status: string;
}