import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
  Compass,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  AlertCircle,
  Loader2,
  Eye,
  Layers,
  Sparkles
} from 'lucide-react';

export default function PannellumViewer({
  panoramaUrl,
  previewUrl,
  scenes = [],
  initialPitch = 0,
  initialYaw = 0,
  title = "Room 360° View",
  autoLoad = true,
}) {
  const viewerContainerRef = useRef(null);
  const pannellumInstanceRef = useRef(null);
  const currentLoadedSceneIdRef = useRef(null);
  const containerIdRef = useRef(`pannellum-viewer-${Math.random().toString(36).substring(2, 9)}`);

  const [activeSceneId, setActiveSceneId] = useState(scenes[0]?.id || 'main');
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isInViewport, setIsInViewport] = useState(false);

  // Active scene config
  const currentScene = useMemo(() => {
    return scenes.find((s) => s.id === activeSceneId) || scenes[0];
  }, [scenes, activeSceneId]);

  // Synchronize activeSceneId whenever scenes prop changes or property changes
  useEffect(() => {
    if (scenes && scenes.length > 0) {
      setActiveSceneId(scenes[0].id);
    } else {
      setActiveSceneId('main');
    }
    setLoadError(false);
  }, [scenes, panoramaUrl]);

  const activeUrl = currentScene?.panoramaUrl || panoramaUrl;
  const activePreview = currentScene?.previewUrl || previewUrl;

  // 1. Intersection Observer: Initialize only when visible in viewport
  useEffect(() => {
    const el = viewerContainerRef.current?.parentElement;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          // Resume auto-rotation when user looks at it
          if (pannellumInstanceRef.current && isAutoRotating) {
            try {
              pannellumInstanceRef.current.startAutoRotate(-1.2);
            } catch (e) {}
          }
        } else {
          // Pause auto-rotation when scrolled out of view to save GPU/battery
          if (pannellumInstanceRef.current) {
            try {
              pannellumInstanceRef.current.stopAutoRotate();
            } catch (e) {}
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isAutoRotating]);

  // 2. Preload adjacent scene textures in background
  useEffect(() => {
    if (!scenes || scenes.length <= 1) return;

    // Find other scenes to preload
    const otherScenes = scenes.filter((s) => s.id !== activeSceneId);
    const preloadTimers = otherScenes.map((scene, idx) => {
      return setTimeout(() => {
        if (scene.panoramaUrl) {
          const img = new Image();
          img.src = scene.panoramaUrl;
        }
      }, (idx + 1) * 800);
    });

    return () => {
      preloadTimers.forEach(clearTimeout);
    };
  }, [activeSceneId, scenes]);

  // 3. Initialize or update Pannellum Viewer
  useEffect(() => {
    if (!isInViewport || !activeUrl) return;

    let isMounted = true;
    const containerId = containerIdRef.current;

    if (viewerContainerRef.current) {
      viewerContainerRef.current.id = containerId;
    }

    const initOrSwitch = () => {
      if (!isMounted || !viewerContainerRef.current) return;

      try {
        if (!window.pannellum || !window.pannellum.viewer) {
          // If CDN script still loading, retry after brief delay
          setTimeout(() => {
            if (isMounted) initOrSwitch();
          }, 300);
          return;
        }

        // If instance already exists and we just need to switch scenes/images
        if (pannellumInstanceRef.current) {
          if (currentLoadedSceneIdRef.current !== activeSceneId) {
            setIsLoading(true);
            try {
              // Destroy previous instance to switch cleanly to the new scene
              pannellumInstanceRef.current.destroy();
            } catch (e) {}
            pannellumInstanceRef.current = null;
          } else {
            return; // Already showing this scene
          }
        }

        setIsLoading(true);
        setLoadError(false);

        // Performance-tuned Pannellum configuration
        pannellumInstanceRef.current = window.pannellum.viewer(containerId, {
          type: 'equirectangular',
          panorama: activeUrl,
          preview: activePreview || undefined,
          autoLoad: autoLoad,
          autoRotate: isAutoRotating ? -1.2 : 0,
          autoRotateInactivityDelay: 3500,
          friction: 0.15, // Butter-smooth panning physics
          compass: true,
          showZoomCtrl: false, // Custom controls
          showFullscreenCtrl: false,
          pitch: currentScene?.initialPitch ?? initialPitch,
          yaw: currentScene?.initialYaw ?? initialYaw,
          hfov: 105,
          minHfov: 45,
          maxHfov: 125,
          touchPanSpeedCoeffFactor: 1.2,
          mouseZoom: false, // Prevents capturing wheel scroll on web page
          keyboardZoom: true,
          hotSpots: currentScene?.hotSpots?.map((spot) => ({
            pitch: spot.pitch,
            yaw: spot.yaw,
            type: spot.type || 'info',
            text: spot.text,
            clickHandlerFunc: spot.sceneId ? () => handleSceneChange(spot.sceneId) : undefined,
          })) || [],
        });

        currentLoadedSceneIdRef.current = activeSceneId;

        pannellumInstanceRef.current.on('load', () => {
          if (isMounted) {
            setIsLoading(false);
            setLoadError(false);
          }
        });

        pannellumInstanceRef.current.on('error', (err) => {
          if (isMounted) {
            console.warn('Pannellum panorama loading error:', err);
            setIsLoading(false);
            setLoadError(true);
          }
        });
      } catch (err) {
        console.error('Error in Pannellum viewer:', err);
        if (isMounted) {
          setIsLoading(false);
          setLoadError(true);
        }
      }
    };

    initOrSwitch();

    return () => {
      isMounted = false;
    };
  }, [isInViewport, activeUrl, activeSceneId]);

  // Teardown completely when component unmounts
  useEffect(() => {
    return () => {
      if (pannellumInstanceRef.current) {
        try {
          pannellumInstanceRef.current.destroy();
        } catch (e) {}
        pannellumInstanceRef.current = null;
      }
    };
  }, []);

  const handleSceneChange = useCallback((sceneId) => {
    setActiveSceneId(sceneId);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = viewerContainerRef.current?.parentElement;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document.exitFullscreen?.()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  }, []);

  const handleZoom = useCallback((delta) => {
    if (pannellumInstanceRef.current) {
      try {
        const currentHfov = pannellumInstanceRef.current.getHfov();
        pannellumInstanceRef.current.setHfov(
          Math.max(45, Math.min(125, currentHfov + delta))
        );
      } catch (e) {}
    }
  }, []);

  const toggleAutoRotate = useCallback(() => {
    if (pannellumInstanceRef.current) {
      try {
        if (isAutoRotating) {
          pannellumInstanceRef.current.stopAutoRotate();
          setIsAutoRotating(false);
        } else {
          pannellumInstanceRef.current.startAutoRotate(-1.2);
          setIsAutoRotating(true);
        }
      } catch (e) {}
    }
  }, [isAutoRotating]);

  const resetOrientation = useCallback(() => {
    if (pannellumInstanceRef.current) {
      try {
        pannellumInstanceRef.current.setPitch(0);
        pannellumInstanceRef.current.setYaw(0);
        pannellumInstanceRef.current.setHfov(105);
      } catch (e) {}
    }
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl bg-slate-950 border border-slate-800 select-none">
      {/* 360 Live Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wide border border-white/10 shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <Compass className="w-4 h-4 text-brand-400" />
        <span>360° LIVE VIRTUAL TOUR</span>
      </div>

      {/* Multi-Scene Selector Buttons */}
      {scenes.length > 1 && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-slate-900/85 backdrop-blur-md p-1 rounded-xl border border-white/10 max-w-[70%] overflow-x-auto shadow-lg">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => handleSceneChange(scene.id)}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-all whitespace-nowrap ${
                activeSceneId === scene.id
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {scene.title}
            </button>
          ))}
        </div>
      )}

      {/* Floating Control Bar */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2 py-1.5 rounded-xl border border-white/10 shadow-lg">
        <button
          onClick={() => handleZoom(-12)}
          title="Zoom In (+)"
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(12)}
          title="Zoom Out (-)"
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={toggleAutoRotate}
          title={isAutoRotating ? 'Pause 360° Auto-Rotate' : 'Start 360° Auto-Rotate'}
          className={`p-2 rounded-lg transition-colors ${
            isAutoRotating ? 'text-brand-400 bg-brand-950/60' : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
        </button>
        <button
          onClick={resetOrientation}
          title="Reset Camera View"
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs font-bold"
        >
          Reset
        </button>
        <div className="w-px h-5 bg-white/20"></div>
        <button
          onClick={toggleFullscreen}
          title="Toggle Fullscreen"
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Helpful Hint on Desktop */}
      <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-2 bg-slate-900/75 backdrop-blur-md px-3 py-1.5 rounded-lg text-slate-300 text-xs pointer-events-none">
        <Eye className="w-3.5 h-3.5 text-brand-400" />
        <span>Click & drag to look around 360° • Pinch / +/- to zoom</span>
      </div>

      {/* Smooth Loading Spinner while rendering equirectangular texture */}
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-6">
          <Loader2 className="w-10 h-10 text-brand-400 animate-spin mb-3" />
          <p className="text-sm font-semibold tracking-wide">Compiling 360° VR Spherical Projection...</p>
          <p className="text-xs text-slate-400 mt-1">{currentScene?.title || title}</p>
        </div>
      )}

      {/* The Pannellum Container */}
      <div ref={viewerContainerRef} className="w-full h-full" />

      {/* Fallback Display if Pannellum or image is unavailable */}
      {loadError && (
        <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-center p-6 text-white z-15">
          <AlertCircle className="w-12 h-12 text-amber-400 mb-3" />
          <h4 className="text-lg font-bold mb-1">360° Interactive Room Inspection</h4>
          <p className="text-xs text-slate-400 max-w-md mb-4">
            Viewing verified room environment for {title}.
          </p>
          <div className="relative w-full max-w-lg h-56 rounded-xl overflow-hidden border border-white/20 shadow-inner">
            <img
              src={activeUrl}
              alt={title}
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded">
                Verified Photographic Inspection Record
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
