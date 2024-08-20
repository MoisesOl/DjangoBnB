export const formatCurrency = (amount: number): string => {
    // Usa la función Intl.NumberFormat para formatear el número
    return new Intl.NumberFormat('es-ES', {
        minimumFractionDigits: 0,  // No mostrar decimales
        maximumFractionDigits: 0   // No mostrar decimales
    }).format(amount);
};
