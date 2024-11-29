export default function useLoadImage(src: string | string[]): void {
  const isClient = typeof window !== 'undefined';

  if (!isClient) {
    // If running on the server, do nothing
    return;
  }

  const preloadAsset = (path: string) => {
    const img = new Image();
    img.src = path;

    img.onload = () => {
      console.log(`Image preloaded: ${path}`);
    };

    img.onerror = (error) => {
      console.error(`Failed to preload image: ${path}`, error);
    };
  };

  if (Array.isArray(src)) {
    src.forEach(preloadAsset);
  } else if (typeof src === 'string') {
    preloadAsset(src);
  } else {
    console.error('Invalid source provided to preload.');
  }
}
