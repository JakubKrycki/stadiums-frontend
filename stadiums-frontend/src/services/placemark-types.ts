export interface Placemark {
    name: string;
    team: string;
    added_by: string;
    latitude: string;
    longitude: string;
    category: string;
    private: boolean;
};

export interface PlacemarkPlus {
    name: string;
    team: string;
    added_by: string;
    latitude: string;
    longitude: string;
    category: string;
    private: boolean;
    _id: string;
}

export interface PlacemarkReadable {
    name: string;
    team: string;
    added_by: string;
    added_by_username: string;
    latitude: string;
    longitude: string;
    category: string;
    private: boolean;
    _id: string;
}

export function toPlacemarkPlus(placemark: PlacemarkReadable) {
    return {
        name: placemark.name,
        team: placemark.team,
        added_by: placemark.added_by,
        latitude: placemark.latitude,
        longitude: placemark.longitude,
        category: placemark.category,
        private: placemark.private,
        _id: placemark._id,
    }
}