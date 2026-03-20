import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'
import { FadeUp } from './AnimateIn'

const GOOGLE_MAPS_KEY = 'AIzaSyBvHasVG3JnF0n07ZuwJkixbPyStP7t7uE'

const areas = [
  { name: 'Charlotte', lat: 35.2271, lng: -80.8431 },
  { name: 'Harrisburg', lat: 35.3235, lng: -80.6537 },
  { name: 'Concord', lat: 35.4088, lng: -80.5795 },
  { name: 'Matthews', lat: 35.1168, lng: -80.7237 },
  { name: 'Mint Hill', lat: 35.1796, lng: -80.6465 },
  { name: 'Indian Trail', lat: 35.0760, lng: -80.6693 },
  { name: 'Stallings', lat: 35.0904, lng: -80.6862 },
  { name: 'Monroe', lat: 34.9854, lng: -80.5495 },
  { name: 'Weddington', lat: 35.0226, lng: -80.7612 },
  { name: 'Huntersville', lat: 35.4107, lng: -80.8427 },
  { name: 'Cornelius', lat: 35.4868, lng: -80.8601 },
  { name: 'Davidson', lat: 35.4993, lng: -80.8487 },
]

// Mint Hill HQ
const HQ = { lat: 35.1796, lng: -80.6465 }

function loadGoogleMaps(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any).google?.maps) { resolve(); return }
    const existing = document.getElementById('google-maps-script')
    if (existing) { existing.addEventListener('load', () => resolve()); return }
    const script = document.createElement('script')
    script.id = 'google-maps-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}`
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

function ServiceMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: google.maps.Map
    loadGoogleMaps().then(() => {
      if (!mapRef.current) return
      map = new google.maps.Map(mapRef.current, {
        center: { lat: 35.22, lng: -80.75 },
        zoom: 10,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#1B2A4A' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#1B2A4A' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#6b7d9e' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#243558' }] },
          { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#5a7099' }] },
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#131d30' }] },
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        ],
      })

      // HQ marker
      new google.maps.Marker({
        position: HQ,
        map,
        title: 'Cool Breeze HVAC',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#F5A623',
          fillOpacity: 1,
          strokeColor: '#fff',
          strokeWeight: 2,
        },
      })

      // Service area markers
      areas.forEach((area) => {
        const marker = new google.maps.Marker({
          position: { lat: area.lat, lng: area.lng },
          map,
          title: area.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: '#4DA8DA',
            fillOpacity: 0.8,
            strokeColor: '#fff',
            strokeWeight: 1,
          },
        })

        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="font-family:Inter,sans-serif;padding:2px 4px;"><strong>${area.name}</strong><br><span style="color:#666;font-size:12px;">We serve this area</span></div>`,
        })
        marker.addListener('click', () => infoWindow.open(map, marker))
      })

      // Service radius circle
      new google.maps.Circle({
        center: HQ,
        radius: 32000, // ~20 miles
        map,
        fillColor: '#4DA8DA',
        fillOpacity: 0.08,
        strokeColor: '#4DA8DA',
        strokeOpacity: 0.3,
        strokeWeight: 1,
      })
    })
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
    />
  )
}

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cool-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-warm-amber rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeUp>
            <div>
              <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
                Service Area
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-2">
                Proudly Serving the{' '}
                <span className="text-cool-blue">Greater Charlotte Area</span>
              </h2>
              <div className="w-12 h-1 rounded-full bg-warm-amber mb-6" />
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                From Charlotte to the surrounding suburbs, our technicians are
                just a call away. We provide fast, reliable HVAC service to
                residential and commercial customers across the region.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {areas.map((area) => (
                  <div
                    key={area.name}
                    className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5"
                  >
                    <MapPin size={14} className="text-cool-blue" />
                    <span className="font-medium text-white/90 text-sm">{area.name}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Check If We Serve Your Area
              </a>
            </div>
          </FadeUp>

          {/* Right - Map */}
          <FadeUp delay={0.15}>
            <div>
              <ServiceMap />
              <div className="flex items-center gap-6 mt-4 justify-center text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warm-amber" />
                  <span>Our Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cool-blue" />
                  <span>Service Areas</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
