export interface Placemark {
    name: string;
    team: string;
    added_by: string;
    latitude: number;
    longitude: number;
    category: string;
    private: boolean;
};

export interface PlacemarkPlus {
    name: string;
    team: string;
    added_by: string;
    latitude: number;
    longitude: number;
    category: string;
    private: boolean;
    _id: string;
}

export interface PlacemarkReadable {
    name: string;
    team: string;
    added_by: string;
    added_by_username: string;
    latitude: number;
    longitude: number;
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

export interface Image {
    placemark_id: string;
    image_url: string;
}

export interface ImagePlus {
    placemark_id: string;
    image_url: string;
    _id: string;
}