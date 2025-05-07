import type { Team } from './types';

/**
 * Displays the teams in the DOM
 * Creates HTML elements for each team with their details
 * Uses Bootstrap classes for styling
 * @param teams - Array of team objects to display
 */
export function displayTeams(teams: Team[]): void {
    console.log('Displaying teams:', teams);
    // Get reference to the team list container
    const teamList = document.getElementById('teamList') as HTMLDivElement;
    teamList.innerHTML = ''; // Clear existing teams
    
    // Create and append team elements
    teams.forEach(team => {
        const teamElement = document.createElement('div');
        // Add Bootstrap classes for styling
        teamElement.className = 'list-group-item team-item d-flex justify-content-between align-items-center';
        // Create team element HTML with team details
        teamElement.innerHTML = `
            <div>
                <h5 class="team-name">${team.name}</h5>
                <p class="team-info mb-0">
                    ${team.conference} ${team.division} | ${team.city}
                </p>
            </div>
            <button class="btn btn-danger btn-sm delete-btn" data-id="${team.id}">
                Delete
            </button>
        `;
        teamList.appendChild(teamElement);
    });
    console.log('Teams displayed in DOM');
}

/**
 * Gets form data from the team form
 * Extracts values from form inputs and creates a Team object
 * @returns Team object with form data
 */
export function getFormData(): Team {
    // Get form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const conference = (document.getElementById('conference') as HTMLSelectElement).value;
    const division = (document.getElementById('division') as HTMLSelectElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    
    // Return new team object
    return {
        name,
        conference,
        division,
        city
    };
}

/**
 * Resets the team form
 * Clears all input fields in the form
 */
export function resetForm(): void {
    const teamForm = document.getElementById('teamForm') as HTMLFormElement;
    teamForm.reset();
} 