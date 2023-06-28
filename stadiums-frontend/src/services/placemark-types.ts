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