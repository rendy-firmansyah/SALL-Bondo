export interface UserFormData {
    name: string;
    phone: string;
    modules: string[];

    [key: string]: string | number | boolean | string[];
}
