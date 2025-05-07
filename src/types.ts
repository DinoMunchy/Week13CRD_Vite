/**
 * Type definition for an NFL team
 * @property {string | number} [id] - Optional unique identifier for the team
 * @property {string} name - The name of the team (e.g., "Kansas City Chiefs")
 * @property {string} conference - The team's conference (AFC or NFC)
 * @property {string} division - The team's division (North, South, East, or West)
 * @property {string} city - The city where the team is located
 */
export type Team = {
    id?: string | number;
    name: string;
    conference: string;
    division: string;
    city: string;
}; 