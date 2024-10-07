const clpFormatter = new Intl.NumberFormat("es-CL", {
	style: "currency",
	currency: "CLP",
});

export const toCLP = (number: number) => clpFormatter.format(number);
