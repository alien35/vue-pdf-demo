<template>
  <div>
    <button @click="download">Download</button>
    <div ref="containerRef" class="container" id="pdf"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useCreateIframeAndLoadViewer } from './Viewer';
import { useOnMounted } from './test';

export default {
  name: 'App',
  setup() {
    useOnMounted();

    const containerRef = ref(null);

    const { download } = useCreateIframeAndLoadViewer({
      container: containerRef,
      uuid: 'some-user',
      licenseKey: 'sandbox',
      locale: 'en',
      tools: {
        editing: ['extract', 'remove', 'move'],
        thumbnails: ['zoom', 'expand'],
        general: [
          'thumbnails',
          'download',
          'search',
          'panel-toggle',
          'zoom',
        ],
      },
      files: [
        {
          url: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
          name: 'my-file1.pdf',
        },
        {
          url: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
          name: 'my-file2.pdf',
        },
      ],
    });

    return {
      containerRef,
      download,
    };
  },
};
</script>

<style scoped>
.container {
  /* your styles here */
}
</style>