import { useRef } from 'react';

export default function useCountRenders() {
  const renders = useRef(0);
  console.log('renders:', renders.current++);
}
