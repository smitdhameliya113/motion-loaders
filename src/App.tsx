import { useState } from 'react'
import {
  Loader,
  Spinner,
  Quantum,
  PulseGrid,
  AnimatedBlocks,
  Wave,
  DualRing,
  Orbit,
  Wave2,
  BouncingDots,
  BouncingBlocks,
  FlipDots,
  CircularDots,
  ProgressBar,
  MagnifyingGlass,
  XlviLoader,
  InfinitySpin,
  type LoaderType
} from './components/ui/loader'
import './App.css'

function App() {
  const [activeLoaders, setActiveLoaders] = useState<Set<string>>(new Set())
  const [globalLoading, setGlobalLoading] = useState(false)
  const [selectedLoader, setSelectedLoader] = useState<LoaderType>('spinner')

  const loaderTypes: LoaderType[] = [
    'spinner',
    'quantum',
    'pulseGrid',
    'animatedBlocks',
    'wave',
    'dualRing',
    'orbit',
    'infinitySpin',
    'wave2',
    'bouncingDots',
    'bouncingBlocks',
    'flipDots',
    'circularDots',
    'progressBar',
    'magnifyingGlass',
    'xlviLoader'
  ]

  const toggleLoader = (loaderName: string) => {
    setActiveLoaders(prev => {
      const newSet = new Set(prev)
      if (newSet.has(loaderName)) {
        newSet.delete(loaderName)
      } else {
        newSet.add(loaderName)
      }
      return newSet
    })
  }

  const toggleAllLoaders = () => {
    if (activeLoaders.size === loaderTypes.length) {
      setActiveLoaders(new Set())
    } else {
      setActiveLoaders(new Set(loaderTypes))
    }
  }

  const startGlobalLoading = () => {
    setGlobalLoading(true)
    setTimeout(() => setGlobalLoading(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Motion Loaders Library
        </h1>

        {/* Global Controls */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={toggleAllLoaders}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {activeLoaders.size === loaderTypes.length ? 'Stop All' : 'Start All'}
          </button>
          <button
            onClick={startGlobalLoading}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Demo Global Loading
          </button>
        </div>

        {/* Global Loading Overlay */}
        {globalLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-center">Loading...</h2>
              <Loader type={selectedLoader} size="lg" className="mx-auto" />
              <div className="mt-4 flex gap-2">
                <select
                  value={selectedLoader}
                  onChange={(e) => setSelectedLoader(e.target.value as LoaderType)}
                  className="px-3 py-1 border rounded"
                >
                  {loaderTypes.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Individual Loader Demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Spinner */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Spinner</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('spinner') ? (
                <div className="size-10">
                  <Spinner />
                </div>
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('spinner')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('spinner')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('spinner') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* Quantum */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Quantum</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('quantum') ? (
                <div className="size-10">
                  <Quantum />
                </div>
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('quantum')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('quantum')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('quantum') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* PulseGrid */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Pulse Grid</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('pulseGrid') ? (
                <PulseGrid />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('pulseGrid')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('pulseGrid')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('pulseGrid') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* AnimatedBlocks */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Animated Blocks</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('animatedBlocks') ? (
                <AnimatedBlocks />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('animatedBlocks')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('animatedBlocks')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('animatedBlocks') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* Wave */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Wave</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('wave') ? (
                <Wave />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('wave')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('wave')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('wave') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* DualRing */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Dual Ring</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('dualRing') ? (
                <div className="size-10">
                  <DualRing />
                </div>
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('dualRing')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('dualRing')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('dualRing') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* Orbit */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Orbit</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('orbit') ? (
                <div className="size-10">
                  <Orbit />
                </div>
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('orbit')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('orbit')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('orbit') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* InfinitySpin */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Infinity Spin</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('infinitySpin') ? (
                <div className="size-10">
                  <InfinitySpin />
                </div>
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('infinitySpin')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('infinitySpin')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('infinitySpin') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* Wave2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Wave 2</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('wave2') ? (
                <Wave2 />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('wave2')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('wave2')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('wave2') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* BouncingDots */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Bouncing Dots</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('bouncingDots') ? (
                <BouncingDots />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('bouncingDots')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('bouncingDots')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('bouncingDots') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* BouncingBlocks */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Bouncing Blocks</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('bouncingBlocks') ? (
                <BouncingBlocks />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('bouncingBlocks')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('bouncingBlocks')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('bouncingBlocks') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* FlipDots */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Flip Dots</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('flipDots') ? (
                <FlipDots />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('flipDots')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('flipDots')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('flipDots') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* CircularDots */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Circular Dots</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('circularDots') ? (
                <CircularDots />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('circularDots')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('circularDots')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('circularDots') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* ProgressBar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Progress Bar</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('progressBar') ? (
                <ProgressBar />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('progressBar')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('progressBar')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('progressBar') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* MagnifyingGlass */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Magnifying Glass</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('magnifyingGlass') ? (
                <MagnifyingGlass />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('magnifyingGlass')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('magnifyingGlass')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('magnifyingGlass') ? 'Stop' : 'Start'}
            </button>
          </div>

          {/* XlviLoader */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Xlvi Loader</h3>
            <div className="flex items-center justify-center h-24 mb-4">
              {activeLoaders.has('xlviLoader') ? (
                <XlviLoader size="40px" />
              ) : (
                <div className="text-gray-400">Stopped</div>
              )}
            </div>
            <button
              onClick={() => toggleLoader('xlviLoader')}
              className={`w-full py-2 rounded-lg transition-colors ${activeLoaders.has('xlviLoader')
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {activeLoaders.has('xlviLoader') ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>

        {/* Usage Example */}
        <div className="mt-12 bg-gray-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
            {`// Import individual components
import { Spinner, Wave, BouncingDots } from 'motion-loaders'

// Or use the main Loader component
import { Loader } from 'motion-loaders'

// Individual component usage
<Spinner />
<Wave />
<BouncingDots />

// Main Loader component usage
<Loader type="spinner" size="lg" variant="default" />
<Loader type="wave" size="sm" variant="secondary" />
<Loader type="bouncingDots" size="default" variant="destructive" />`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default App
