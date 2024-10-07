import { create } from "zustand";

interface Producto {
	id: number;
	name: string;
	quantity: number;
}

interface UserInfo {
	id: string;
	name: string;
	email: string;
	direction: string;
	phone: string;
}

interface CartState {
	productos: Array<Producto>;
	userInfo: UserInfo;
	addProduct: (prod: Producto) => void;
	increaseProduct: (id: number) => void;
	decreaseProduct: (id: number) => void;
	setUser: (user: UserInfo) => void;
}

const useCartStore = create<CartState>()((set) => ({
	productos: [],
	userInfo: {
		id: "",
		name: "",
		email: "",
		direction: "",
		phone: "",
	},

	setUser: (user) =>
		set((state) => ({ userInfo: user, productos: state.productos })),

	addProduct: (prod) =>
		set((state) => ({
			productos: state.productos.concat(prod),
			userInfo: state.userInfo,
		})),

	increaseProduct: (id) =>
		set((state) => {
			const productos = structuredClone(state.productos);
			const producto = state.productos.find((p) => p.id === id);

			if (producto) {
				producto.quantity++;
			}

			return { productos, userInfo: state.userInfo };
		}),

	decreaseProduct: (id) =>
		set((state) => {
			const productos = structuredClone(state.productos);
			const producto = state.productos.find((p) => p.id === id);

			if (producto) {
				producto.quantity--;
			}

			return { productos };
		}),
}));
