import { useRef, useEffect } from "react";
import * as THREE from "three";

const useCanvasDraw = () =>{
  const canvasRef = useRef<HTMLCanvasElement>(null); 
  
  useEffect(() => {
    let canvas;
    if (canvasRef.current){
      canvas = canvasRef.current;
    }        
    // const sizes = {
    //   width:  innerWidth,
    //   height: innerHeight
    // }

    const scene:THREE.Scene = new THREE.Scene();
    const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
     
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  
    return () => renderer.dispose();
  }, [])

  return canvasRef;
}

export default useCanvasDraw;