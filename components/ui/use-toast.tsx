export const useToast = () => {
    return {
      toast: (options: { title: string; description: string }) => {
        console.log('Toast:', options);
        // Aquí iría la lógica real para mostrar un toast
      }
    };
  };