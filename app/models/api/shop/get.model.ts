import type { ErrorResponse } from "../error.model";
import type { Product } from "./product.model";

export interface Shop {
	id: number;
	name: string;
	updated_at: string | null;
	deleted_at: string | null;
	products: Product[];
}

export type GetShopsAPIResponse = Shop[] & Partial<ErrorResponse>;

export type GetShopAPIResponse = Shop & Partial<ErrorResponse>;
