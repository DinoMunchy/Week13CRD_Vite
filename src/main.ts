// Import API functions for team operations
import { fetchTeams, createTeam, deleteTeam } from './api';
// Import UI functions for DOM manipulation
import { displayTeams, getFormData, resetForm } from './ui';
// Import styles
import './style.css';

// Get references to DOM elements
const teamForm = document.getElementById('teamForm') as HTMLFormElement;
const teamList = document.getElementById('teamList') as HTMLDivElement;

// Event Listeners

/**
 * Handles form submission for creating new teams
 * Prevents default form submission
 * Collects form data and creates a new team
 * Updates the UI with the new team list
 */
teamForm.addEventListener('submit', async (e: Event) => {
    e.preventDefault();
    const newTeam = getFormData();
    await createTeam(newTeam);
    const teams = await fetchTeams();
    displayTeams(teams);
    resetForm();
});

/**
 * Handles click events on the team list
 * Specifically handles delete button clicks
 * Uses event delegation for dynamic elements
 * Updates the UI after successful deletion
 */
teamList.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log('Click target:', target);
    console.log('Target classes:', target.classList);
    
    // Check if the clicked element is a delete button
    if (target.classList.contains('delete-btn')) {
        const teamId = target.dataset.id;
        console.log('Deleting team with ID:', teamId);
        if (teamId) {
            await deleteTeam(teamId);
            console.log('Team deleted, fetching updated list');
            const teams = await fetchTeams();
            displayTeams(teams);
        }
    }
});

/**
 * Initializes the application
 * Loads and displays teams when the page loads
 */
const init = async () => {
    const teams = await fetchTeams();
    displayTeams(teams);
};

// Start the application
init(); 