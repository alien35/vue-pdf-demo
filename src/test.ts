import { onMounted } from 'vue';

export const useOnMounted = () => {
    onMounted(() => {
        console.log('Component has been mounted.');
    });
}