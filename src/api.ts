import type { Team } from './types';

// Base URL for the json-server API
const API_URL = 'http://localhost:3000/teams';

/**
 * Fetches all NFL teams from the API
 * Uses async/await for clean asynchronous code
 * @returns Promise<Team[]> Array of teams
 * @throws Will return an empty array if the fetch fails
 */
export async function fetchTeams(): Promise<Team[]> {
    try {
        const response = await fetch(API_URL);
        const teams: Team[] = await response.json();
        return teams;
    } catch (error) {
        console.error('Error fetching teams:', error);
        return [];
    }
}

/**
 * Creates a new NFL team
 * @param team - The team object containing name, conference, division, and city
 * @returns Promise<Team | undefined> The newly created team with an ID
 * @throws Will return undefined if the creation fails
 */
export async function createTeam(team: Team): Promise<Team | undefined> {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(team),
        });
        const newTeam: Team = await response.json();
        return newTeam;
    } catch (error) {
        console.error('Error creating team:', error);
    }
}

/**
 * Deletes a team by its ID
 * @param id - The ID of the team to delete (can be string or number)
 * @throws Will throw an error if the deletion fails
 */
export async function deleteTeam(id: string | number): Promise<void> {
    try {
        console.log('Sending DELETE request to:', `${API_URL}/${id}`);
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        console.log('Delete response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error deleting team:', error);
        throw error; // Re-throw to handle in the UI
    }
} 