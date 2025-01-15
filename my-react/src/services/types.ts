export interface ICategoryItem {
    id?: number,
    name: string,
    slug: string,
    description: string,
}

// CategoryModel.ts
export interface ICategoryPostRequest {
    name: string;         // Назва категорії (обов'язкове поле)
    slug: string;         // Унікальний ідентифікатор (обов'язкове поле)
    description?: string; // Опис (необов'язкове поле)
}

export interface ICategoryPutRequest extends Partial<ICategoryPostRequest> {
    id: number;
}