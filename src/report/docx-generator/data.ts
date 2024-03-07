export interface DocumentData {
    client_name : string;
    product_type : string;
    report_date : string;
    test_method : string;
    framework : string;
    target_type : string;
    target_address : string[];
    credential_username : string;
    credential_password : string;
    findings : any[];
}