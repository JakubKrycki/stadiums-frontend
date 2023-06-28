import { LatLng } from "leaflet";
import type { PlacemarkReadable } from "./placemark-types";
import type { MarkerLayer, MarkerSpec } from "./markers";

export function getMarkerLayer(placemarks: PlacemarkReadable[]): MarkerLayer {
    const markerSpecs = Array<MarkerSpec>();
    placemarks.forEach((placemark) => {
        markerSpecs.push({
            id: placemark._id,
            title: `${placemark.name} (${placemark.team}): ${placemark.added_by_username}`,
            location: new LatLng(placemark.latitude, placemark.longitude),
            popup: true
        });
    });
    return { title: "placemarks", markerSpecs: markerSpecs };
}
